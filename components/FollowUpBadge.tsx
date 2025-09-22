'use client'

import { useMemo } from 'react'
import { useFollowUps } from '@/lib/followups'

export default function FollowUpBadges({
  term,
  listingId,
  reviewId,
  followUpId,
}: {
  term: string
  reviewId?: number
  followUpId?: string
  listingId?: number
}) {
  const { items } = useFollowUps()
  const { openCount, closedCount } = useMemo(() => {
    const hits = items.filter(
      (f) => f.term === term && ((!listingId || f.listingId === listingId) || (!followUpId || f.id === followUpId))
    )
    return {
      openCount: hits.filter((h) => h.status === 'open').length,
      closedCount: hits.filter((h) => h.status === 'closed').length,
    }
  }, [items, term, listingId, followUpId])

  if (!openCount && !closedCount) return null
  return (
    <span aria-live="polite" className="small muted">
      {openCount ? <span className="badge">{openCount} open</span> : null}
      {closedCount ? (
        <span className="badge" style={{ marginLeft: 6 }}>
          {closedCount} closed
        </span>
      ) : null}
    </span>
  )
}
