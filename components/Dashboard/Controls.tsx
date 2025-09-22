'use client'
import { useMemo, useState } from 'react'
import {
  useFilters,
  useFiltersDispatch,
  Preset,
  Filters,
} from '@/hooks/providers/FiltersProviders'

type Option = { value: string; label: string }
type FilterKey = keyof Filters
type Control =
  | {
      key: 'channel' | 'listingId' | 'category'
      label: string
      value: string
      options: Option[]
      kind: 'select'
    }
  | {
      key: 'presetWindowDays'
      label: string
      value: string
      options: Option[]
      kind: 'select'
    }
  | { key: 'from' | 'to'; label: string; value: string; kind: 'date' }

function humanize(s: string) {
  return s.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function ensureSelected<T extends Option>(
  opts: T[],
  value: string,
  label?: string
) {
  if (!value) return opts
  return opts.some((o) => o.value === value)
    ? opts
    : [{ value, label: label ?? value }, ...opts]
}

export default function Controls({
  payload,
  isLoading,
}: {
  payload: any | null
  isLoading?: boolean
}) {
  const filters = useFilters()
  const dispatch = useFiltersDispatch()
    const [noticeMessage, setNoticeMessage] = useState<string>('')

  // Options from DB (payload.aggregates is coming from your API)
  const channelOptions: Option[] = useMemo(() => {
    const keys = Object.keys(payload?.aggregates?.byChannel ?? {}).sort()
    return keys.map((k) => ({ value: k, label: humanize(k) }))
  }, [payload])

  const listingOptions: Option[] = useMemo(() => {
    const map = payload?.aggregates?.reviewsByListing ?? {}
    // map is { [listingId]: { listingName, ... } }
    const arr = Object.entries(map).map(([id, v]: any) => ({
      value: id,
      label: v.listingName,
    }))
    // sort by label
    arr.sort((a, b) => a.label.localeCompare(b.label))
    return arr
  }, [payload])

  const categoryOptions: Option[] = useMemo(() => {
    const keys = Object.keys(payload?.aggregates?.byCategory ?? {}).sort()
    return keys.map((k) => ({ value: k, label: humanize(k) }))
  }, [payload])

  const presetOptions: Option[] = [
    { value: '30', label: 'Last 30 days' },
    { value: '60', label: 'Last 60 days' },
    { value: '90', label: 'Last 90 days' },
  ]

  // Make sure the selected (possibly URL-synced) value remains visible even if not in the current options
  const controls: Control[] = useMemo(
    () => [
      {
        key: 'channel',
        label: 'Channel',
        kind: 'select',
        value: filters.channel,
        options: ensureSelected(
          channelOptions,
          filters.channel,
          humanize(filters.channel)
        ),
      },
      {
        key: 'listingId',
        label: 'Listing',
        kind: 'select',
        value: filters.listingId,
        options: ensureSelected(listingOptions, filters.listingId),
      },
      {
        key: 'category',
        label: 'Category',
        kind: 'select',
        value: filters.category,
        options: ensureSelected(
          categoryOptions,
          filters.category,
          humanize(filters.category)
        ),
      },
      {
        key: 'presetWindowDays',
        label: 'Window',
        kind: 'select',
        value: String(filters.presetWindowDays ?? ''),
        options: presetOptions,
      },
      { key: 'from', label: 'From', kind: 'date', value: filters.from },
      { key: 'to', label: 'To', kind: 'date', value: filters.to },
    ],
    [filters, channelOptions, listingOptions, categoryOptions]
  )

  const onChange = (key: FilterKey, raw: string) => {
    // Normalize types
    if (key === 'presetWindowDays') {
      const pv = raw ? (Number(raw) as Preset) : null
      // When using a preset, clear custom range
      dispatch({
        type: 'set',
        patch: { presetWindowDays: pv, from: '', to: '' },
      })
      return
    }
    if (key === 'from' || key === 'to') {
      // When using custom range, clear preset
      dispatch({
        type: 'set',
        patch: { [key]: raw, presetWindowDays: null } as Partial<Filters>,
      })
      return
    }
    dispatch({ type: 'set', patch: { [key]: raw } as Partial<Filters> })
  }

  const hasPreset = payload.aggregates.presetWindowDays != null
  return (
    <div
      className="card"
      aria-busy={isLoading || undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '12px',
      }}
    >
      {controls.map((c) => {
        const id = `filter-${c.key}`
        if (c.kind === 'select') {
          return (
            <div key={c.key} className="field" style={{ width: '8em' }}>
              <label className="label" htmlFor={id}>
                {c.label}
              </label>
              <select
                id={id}
                className="input"
                value={c.value}
                onChange={(e) => onChange(c.key, e.target.value)}
              >
                <option value="">{c.key === 'category' ? 'Any' : 'All'}</option>
                {c.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )
        }
        // date fields
        return (
          <div key={c.key} className="field">
            <label className="label" htmlFor={id}>
              {c.label}
            </label>
            <input
              id={id}
              className="input"
              type="date"
              value={c.value}
              onChange={(e) => {
                if (hasPreset) return
                onChange(c.key, e.target.value)
              }}
              size={60}
              readOnly={hasPreset}
              onFocus={() => {
                if (hasPreset)
                  showNotice(
                    'Custom date fields are disabled while a preset chip is active. Click “Clear preset” to enable custom dates.'
                  )
              }}
            />
          </div>
        )
      })}

      <div className="field" style={{ alignSelf: 'end' }}>
        <button className="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
    </div>
  )
}
