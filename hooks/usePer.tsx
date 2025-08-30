'use client'
import  { useMemo } from 'react'
import { Review, Aggregates, Derived } from '@/lib/types'

type Props = {
  derived: Derived | (Derived & { perListing?: Derived['perListing'] }) | null
  data: { reviews: Review[]; aggregates: Aggregates } | null | undefined
  loading: boolean
}
/** Normalize shape to introduce flexibility for `perListing` */
export  async function usePer(derived: Props['derived']): Derived['per'] {
    return useMemo(() => {
      if (!derived) return [] as unknown as Derived['per'];
      // Backward compatibility: allow either `per` or `perListing`
      const candidate: any = derived as any;
      return Array.isArray(candidate.perListing) ? candidate.perListing : candidate.per;
    }, [derived]);
  }