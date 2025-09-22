import { NextResponse } from 'next/server'
import { normalizeHostawayReviews, toISO } from '@/lib/utils'
import { PLACE_IDS } from '@/lib/placeIds'
import type {
  ReviewPayload,
  Aggregates,
  Review,
  NormalizedReview,
  ApiResponse,
} from '@/lib/types'
import { promises as fs } from 'fs'
import path from 'path'
//import { PrismaClient } from '@prisma/client'
import { PrismaClient } from '@/generated/prisma'

import { buildAggregates } from '@/lib/aggregates'
import { DATA_MODE } from '@/lib/env'

const prisma = new PrismaClient()
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const p = url.searchParams

  const channel = p.get('channel') || ''
  const listingId = p.get('listingId') || ''
  const category = p.get('category') || ''
  const ratingMin = Number.isFinite(parseFloat(p.get('ratingMin') || ''))
    ? parseFloat(p.get('ratingMin') || '0')
    : 0
  const ratingMax = Number.isFinite(parseFloat(p.get('ratingMax') || ''))
    ? parseFloat(p.get('ratingMax') || '5')
    : 5
  const from = p.get('from') || ''
  const to = p.get('to') || ''
  const preset = p.get('preset') // '30' | '60' | '90' | null

  const placeId = PLACE_IDS[listingId]
  //Load Google Reviews
  const getGoogleReviews = async (
    placeId: string
  ): Promise<NormalizedReview[]> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY!
    if (!apiKey || !placeId) return []

    const url = `https://places.googleapis.com/v1/places/${placeId}`
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,displayName',
      },
      cache: 'no-store',
    })
    const json = await res.json()

    const placeName: string = json.displayName?.text ?? 'Google Place'
    const reviews: any[] = Array.isArray(json.reviews) ? json.reviews : []

    // Map Google’s review shape -> your NormalizedReview
    return reviews.map((g, i) => ({
      id: `${placeId}-${g.publishTime || i}`,
      overall: Number(g.rating) || 0, // Google is already 1–5
      text: (g.text?.text || '').trim(),
      submittedAt: g.publishTime || new Date().toISOString(),
      guestName: g.authorAttribution?.displayName || 'Guest',
      listingId: placeId,
      listingName: placeName,
      channel: 'google',
      type: 'guest-to-host',
      status: 'published',
      categories: {}, // Google doesn’t have sub-category scores
    }))
  }

  if (DATA_MODE === 'Mock') {
    // Load from your real source. For demo we read the mock file:
    const file = path.join(process.cwd(), 'data', 'mock-hostaway-reviews.json') // adjust path
    const rawParsedContent = JSON.parse(await fs.readFile(file, 'utf-8'))
    const raw = Array.isArray(rawParsedContent)
      ? rawParsedContent
      : rawParsedContent?.result

    if (!Array.isArray(raw)) {
      return NextResponse.json(
        {
          error: 'mock-hostaway-reviews.json must be an array or {result: []}',
        },
        { status: 500 }
      )
    }
    const all: Review[] = normalizeHostawayReviews(raw)

    const [hostaway, google] = await Promise.all([
      raw,
      placeId ? getGoogleReviews(placeId) : Promise.resolve([]),
    ])

    // Merge & de-dupe (by id), then aggregate
    const seen = new Set<string>()
    const merged: NormalizedReview[] = [...hostaway, ...google].filter((r) => {
      if (seen.has(r.id)) return false
      seen.add(r.id)
      return true
    })

    const MS_DAY = 86_400_000
    const now = Date.now()
    const presetDays = preset ? parseInt(preset) : null

    const clamp = (v: number, lo: number, hi: number) => {
      return Math.max(lo, Math.min(hi, v))
    }

    const match = (r: Review) => {
      if (channel && r.channel !== channel) return false
      if (listingId && r.listingId !== listingId) return false
      if (category && !(r.categories && category in r.categories)) return false
      if (
        r.overall < clamp(ratingMin, 0, 5) ||
        r.overall > clamp(ratingMax, 0, 5)
      )
        return false
      const ts = new Date(r.submittedAt).getTime()
      if (from && ts < new Date(from).getTime()) return false
      if (to && ts > new Date(to).getTime()) return false
      if (!from && !to && presetDays) {
        if (now - ts > presetDays * MS_DAY) return false
      }
      return true
    }

    const reviews = all.filter(match)

    // Aggregates (light)
    const aggregates: Aggregates = {
      reviewsByListing: {},
      byChannel: {},
      byCategory: {},
      timelineMonthly: [],
    }

    const timeline: Record<string, { sum: number; count: number }> = {}
    for (const r of reviews) {
      // byListing
      const L = (aggregates.reviewsByListing[r.listingId] ||= {
        listingName: r.listingName,
        avg: 0,
        count: 0,
        channels: {},
      })
      L.count += 1
      L.avg += r.overall
      L.channels[r.channel] = (L.channels[r.channel] || 0) + 1

      // byChannel
      const C = (aggregates.byChannel[r.channel] ||= { avg: 0, count: 0 })
      C.count += 1
      C.avg += r.overall

      // byCategory
      for (const [cat, v] of Object.entries(r.categories || {})) {
        const T = (aggregates.byCategory[cat] ||= {
          catergoryName: cat,
          avg: 0,
          count: 0,
        })
        T.count += 1
        T.avg += v as number
      }

      // timeline month
      const m = r.submittedAt.slice(0, 7)
      const t = (timeline[m] ||= { sum: 0, count: 0 })
      t.sum += r.overall
      t.count += 1
    }
    for (const k of Object.keys(aggregates.reviewsByListing)) {
      const L = aggregates.reviewsByListing[k]
      L.avg = L.count ? L.avg / L.count : 0
    }
    for (const k of Object.keys(aggregates.byChannel)) {
      const C = aggregates.byChannel[k]
      C.avg = C.count ? C.avg / C.count : 0
    }
    for (const k of Object.keys(aggregates.byCategory)) {
      const T = aggregates.byCategory[k]
      T.avg = T.count ? T.avg / T.count : 0
    }
    aggregates.timelineMonthly = Object.entries(timeline)
      .map(([month, { sum, count }]) => ({
        month,
        avg: sum / Math.max(1, count),
        count,
      }))
      .sort((a, b) => a.month.localeCompare(b.month))

    const payload: ReviewPayload = {
      reviews,
      aggregates,
    }
    return NextResponse.json(payload)
  } else {
    const where: any = {
      ...(channel && { channel }),
      ...(Number.parseInt(listingId) && {
        listingId: Number.parseInt(listingId),
      }),
      ...(from && { submittedAt: { gte: new Date(from) } }),
      ...(to && {
        submittedAt: {
          ...(from ? {} : { gte: new Date(0) }),
          lte: new Date(to),
        },
      }),
      ...(typeof ratingMin === 'number' && { overall5: { gte: ratingMin } }),
      ...(typeof ratingMax === 'number' && {
        overall5: { ...(ratingMin ? {} : { gte: 0 }), lte: ratingMax },
      }),
      ...(category && {
        ReviewCategoryScore: {
          some: {
            category: { name: category },
          },
        },
      }),
    }

    const rows = await prisma.review.findMany({
      where,
      include: {
        ReviewCategoryScore: { include: { category: true } },
        Property: { select: { slug: true } },
      },
      orderBy: { submittedAt: 'asc' },
    })

    const reviews: NormalizedReview[] = rows.map((r) => ({
      id: String(r.id),
      overall: Number(r.overall5),
      text: r.publicReview || '',
      submittedAt: r.submittedAt.toISOString(),
      guestName: r.guestName ?? 'Guest',
      listingId: r.listingId,
      slug: r.Property.slug,
      listingName: r.listingName,
      channel: r.channel,
      type: r.type === 'guest_to_host' ? 'guest-to-host' : 'host-to-guest',
      status: r.status,
      categories: Object.fromEntries(
        r.ReviewCategoryScore.map(
          (cs: { category: { name: any }; score5: any }) => [
            cs.category.name,
            Number(cs.score5),
          ]
        )
      ),
    }))

    // Reuse your existing aggregate builder for timeline/monthlies/etc.
    const aggregates = buildAggregates(reviews)
    const payload: ApiResponse = {
      reviews,
      aggregates,
      applied: {
        channel,
        listingId,
        ratingMin,
        ratingMax,
        category,
        from,
        to,
      },
    }
    return new Response(JSON.stringify(payload, null, 2), {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store',
      },
    })
  }
}

