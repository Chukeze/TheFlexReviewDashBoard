'use client'

import { Filters} from "./providers/FiltersProviders"


export function useQuery(f: Filters) {
  const p = new URLSearchParams()
  if (f.channel) p.set('channel', f.channel)
  if (f.listingId) p.set('listingId', f.listingId)
  if (f.category) p.set('category', f.category)

  // guard NaN for numeric filters
  const min = Number.isFinite(f.minRating) ? f.minRating : 0
  const max = Number.isFinite(f.maxRating) ? f.maxRating : 5
  if (min !== 0) p.set('ratingMin', String(min))
  if (max !== 5) p.set('ratingMax', String(max))

  if (f.from) p.set('from', f.from)
  if (f.to) p.set('to', f.to)

  if (!f.from && !f.to && f.presetWindowDays) {
    p.set('preset', String(f.presetWindowDays))
  }
  return p.toString()
}