'use client'
import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react'

export type ViewMode = 'Projection' | 'summary'
export type Preset = 30 | 60 | 90 | null

export type Filters = {
  channel: string // '' means All
  listingId: string // '' means All
  category: string // '' means Any
  from: string // ISO or ''
  to: string // ISO or ''
  minRating: number
  maxRating: number
  presetWindowDays: Preset // 30|60|90|null
}

type Action = { type: 'set'; patch: Partial<Filters> } | { type: 'reset' }

const defaultFilters: Filters = {
  channel: '',
  listingId: '',
  category: '',
  from: '',
  to: '',
  minRating: 0,
  maxRating: 5,
  presetWindowDays: null,
}

function reducer(s: Filters, a: Action): Filters {
  switch (a.type) {
    case 'set':
      return { ...s, ...a.patch }
    case 'reset':
      return { ...defaultFilters }
    default:
      return s
  }
}

const FiltersCtx = createContext<Filters | null>(null)
const DispatchCtx = createContext<React.Dispatch<Action> | null>(null)

export function FiltersProvider({
  children,
  initial,
}: {
  children: React.ReactNode
  initial?: Partial<Filters>
}) {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultFilters,
    ...initial,
  })
  return (
    <FiltersCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </FiltersCtx.Provider>
  )
}

export function useFilters() {
  const v = useContext(FiltersCtx)
  if (!v) throw new Error('useFilters must be used within FiltersProvider')
  return v
}
export function useFiltersDispatch() {
  const d = useContext(DispatchCtx)
  if (!d)
    throw new Error('useFiltersDispatch must be used within FiltersProvider')
  return d
}
