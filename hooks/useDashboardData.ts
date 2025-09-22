'use client'
import useSWR from 'swr'
import { Filters } from './providers/FiltersProviders'
import { ReviewPayload} from '@/lib/types'
import { useMemo } from 'react'
import { useQuery } from './useQuery'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useDashboardData(filters: Filters) {
  const qs = useMemo(() => useQuery(filters), [filters])
  const { data, error, isLoading, isValidating } = useSWR<ReviewPayload>(
    `/api/reviews/combined?${qs}`,
    fetcher,
    { keepPreviousData: true }
  )
  return {
    payload: data ?? null,
    error: error ? String(error) : null,
    isLoading,
    isValidating,
  }
}