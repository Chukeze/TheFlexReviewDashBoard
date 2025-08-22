import { NextRequest } from 'next/server'
import { buildAggregates } from '@/lib/aggregates'
import { NormalizedReview, ApiResponse } from '@/lib/types'
import { PLACE_IDS } from '@/lib/placeIds'
import { normalizeMany } from '@/lib/normalize' 
import { promises as fs } from 'fs'
import path from 'path'

async function getHostawayReviews() {
  const file = path.join(process.cwd(), 'data', 'mock-hostaway-reviews.json')
  const raw = JSON.parse(await fs.readFile(file, 'utf-8')) as {
    status: string
    result: any[]
  }
  return normalizeMany(raw.result) // returns NormalizedReview[]
}

async function getGoogleReviews(placeId: string): Promise<NormalizedReview[]> {
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

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const listingId = sp.get('listingId') || ''
  const placeId = listingId ? PLACE_IDS[listingId] : ''

  const [hostaway, google] = await Promise.all([
    getHostawayReviews(),
    placeId ? getGoogleReviews(placeId) : Promise.resolve([]),
  ])

  // Merge & de-dupe (by id), then aggregate
  const seen = new Set<string>()
  const merged: NormalizedReview[] = [...hostaway, ...google].filter((r) => {
    if (seen.has(r.id)) return false
    seen.add(r.id)
    return true
  })

  const aggregates = buildAggregates(merged)
  const payload: ApiResponse = { reviews: merged, aggregates }
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
