import { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { normalizeMany } from '@/lib/normalize'
import { buildAggregates } from '@/lib/aggregates'
import { ApiResponse, RawReview } from '@/lib/types'
import { getHostawayAccessToken } from '@/lib/hostawayAuth'

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const channel = sp.get('channel')
  const listingId = sp.get('listingId')
  const ratingMin = sp.get('ratingMin')
    ? parseFloat(sp.get('ratingMin') as string)
    : undefined
  const ratingMax = sp.get('ratingMax')
    ? parseFloat(sp.get('ratingMax') as string)
    : undefined
  const category = sp.get('category')
  const from = sp.get('from')
  const to = sp.get('to')

  const file = path.join(process.cwd(), 'data', 'mock-hostaway-reviews.json')
  const raw = JSON.parse(await fs.readFile(file, 'utf-8')) as {
    status: string
    result: RawReview[]
  }
  let reviews = normalizeMany(raw.result)

  // filters
  if (channel)
    reviews = reviews.filter(
      (r) => r.channel.toLowerCase() === channel.toLowerCase()
    )
  if (listingId) reviews = reviews.filter((r) => r.listingId === listingId)
  if (ratingMin !== undefined)
    reviews = reviews.filter((r) => r.overall >= ratingMin)
  if (ratingMax !== undefined)
    reviews = reviews.filter((r) => r.overall <= ratingMax)
  if (category)
    reviews = reviews.filter((r) =>
      Object.prototype.hasOwnProperty.call(r.categories, category)
    )
  if (from) reviews = reviews.filter((r) => r.submittedAt >= from)
  if (to) reviews = reviews.filter((r) => r.submittedAt <= to)

  const aggregates = buildAggregates(reviews)
  const payload: ApiResponse = { reviews, aggregates }
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}

export async function fetchHostawayReviews(params: URLSearchParams) {
  const token = await getHostawayAccessToken()
  const url = new URL(
    'https://api.hostaway.com/v1/reviews?' + params.toString()
  )
  // Forward selected filters to Hostaway if you like
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}`, 'Cache-control': 'no-cache' },
  })
  const json = await res.json()
  // Hostaway’s standard shape has { status, result: Review[] } — normalize next:
  return json.result ?? []
}
