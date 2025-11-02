'use client'
import  { useMemo } from 'react'
import { Review, Aggregates, DerivedMetrics } from '@/lib/types'

type Props = {
  derived: DerivedMetrics | (DerivedMetrics & { perListing?: DerivedMetrics['perListing'] }) | null
  data: { reviews: Review[]; aggregates: Aggregates } | null | undefined
  loading: boolean
}
/** Normalize shape to introduce flexibility for `perListing` */
export  function usePer(derived: Props['derived']): DerivedMetrics['perListing'] {
    return useMemo(() => {
      if (!derived) return [] as unknown as DerivedMetrics['perListing'];
      // Backward compatibility: allow either `per` or `perListing`
      const candidate: any = derived as any;
      return Array.isArray(candidate.perListing) ? candidate.perListing : candidate.per;
    }, [derived]);
  }