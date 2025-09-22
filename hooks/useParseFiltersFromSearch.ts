import { Filters, Preset } from "./providers/FiltersProviders"

export function useParseFiltersFromSearch(search: string): Partial<Filters> {
  const p = new URLSearchParams(search)
  const minRating = parseFloat(p.get('ratingMin') || '')
  const maxRating = parseFloat(p.get('ratingMax') || '')
  const preset = p.get('preset')
  const presetWindowDays = (preset ? Number(preset) : null) as Preset
  return {
    channel: p.get('channel') || '',
    listingId: p.get('listingId') || '',
    category: p.get('category') || '',
    minRating: Number.isFinite(minRating) ? minRating : 0,
    maxRating: Number.isFinite(maxRating) ? maxRating : 5,
    from: p.get('from') || '',
    to: p.get('to') || '',
    presetWindowDays,
  }
}
