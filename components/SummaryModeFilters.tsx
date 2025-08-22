'use client'
import { useEffect, useState } from 'react'

type Props = {
  channels: string[]
  categories: string[]
  listings: string[]
  onChange: (state: {
    channel?: string
    minStars?: number
    category?: string
    listing?: string
    search?: string
  }) => void
}

export default function SummaryModeFilters({
  channels,
  categories,
  listings,
  onChange,
}: Props) {
  const [channel, setChannel] = useState<string>('')
  const [minStars, setMinStars] = useState<number>(0)
  const [category, setCategory] = useState<string>('')
  const [listing, setListing] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    onChange({
      channel: channel || undefined,
      minStars: minStars || undefined,
      category: category || undefined,
      listing: listing || undefined,
      search: search || undefined,
    })
  }, [channel, minStars, category, listing, search, onChange])

  return (
    <div className="card filters-grid">
      <div className="field">
        <label className="label">Channel</label>
        <select
          className="input"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
        >
          <option value="">All</option>
          {channels.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label">Min stars</label>
        <input
          className="input"
          type="number"
          min={0}
          max={5}
          step={0.5}
          value={minStars}
          onChange={(e) => setMinStars(Number(e.target.value))}
        />
      </div>
      <div className="field">
        <label className="label">Category</label>
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label">Listing</label>
        <select
          className="input"
          value={listing}
          onChange={(e) => setListing(e.target.value)}
        >
          <option value="">All</option>
          {listings.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="text-xs text-slate-400 mb-1" htmlFor="f-search">
          Search text
        </label>
        <input
          type="search"
          id="f-search"
          className="input"
          placeholder="search in review text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
