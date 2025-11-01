'use client'

import React, { useMemo } from 'react'
import { Review, Aggregates, DerivedMetrics, PerListing } from '@/lib/types'
import { mean, zClass, bayesianScore } from '@/lib/utils'
import { KpiGrid } from './parts/KpiGrid'
import { KpiStat } from './parts/KpiStat'
import { KpiRankList } from './parts/KpiRankList'
import { usePer } from '@/hooks/usePer'
import { stateText } from '@/lib/helpers'

type Props = {
  derived: DerivedMetrics | (DerivedMetrics & { perListing?: DerivedMetrics['perListing'] }) | null
  data: { reviews: Review[]; aggregates: Aggregates } | null | undefined
  loading: boolean
}

interface PerItem {
  RAll: number
  vAll: number
  listingId: string | number
  listingName?: string
  avg90?: number
  freshness?: number
  pct5?: number
  pct12?: number
  vol90Std?: number
}
/*
type PerItem = Partial<PerListing> & {
  listingId: number
  listingName?: string
}*/

export default function Kpi({ derived, data, loading }: Props) {
  if (loading) {
    return (
      <section
        className="card"
        aria-busy="true"
        aria-live="polite"
        aria-label="KPIs loading"
      >
        <p className="muted">Loading KPIs…</p>
      </section>
    )
  }
  if (!data || !derived) return null

  const per = usePer(derived)

  // -------- Topline aggregates ----------
  const totalReviews = data.reviews.length
  const overallAvgRating = mean(data.reviews.map((r) => r.overall))

  // lowest average category label (across all data)
  const lowestAvgCategory =
    Object.entries(data.aggregates.byCategory).sort(
      (a, b) => a[1].avg - b[1].avg
    )[0]?.[0] ?? 'n/a'

  // Peers arrays (for z-scoring CSS & state text)
  const peerAvg90s = per.map((p: PerItem) => p.avg90)
  const peerFreshnessDays = per.map((p: PerItem) => p.freshness)

  // Best/worst listings by 90‑day average
  const bestListingByAvg90 = useMemo(
    () =>
      [...per]
        .filter((p) => Number.isFinite(p.avg90))
        .sort((a, b) => b.avg90 - a.avg90)[0],
    [per]
  )
  const worstListingByAvg90 = useMemo(
    () =>
      [...per]
        .filter((p) => Number.isFinite(p.avg90))
        .sort((a, b) => a.avg90 - b.avg90)[0],
    [per]
  )

  // Fair rank (bayesian) and volatility lists
  const topByFairRank = useMemo(
    () =>
      per
        .map((p: PerItem) => ({
          ...p,
          fair: bayesianScore(p.RAll, p.vAll, derived.globalAvg, 10),
        }))
        .sort((a: { fair: number }, b: { fair: number }) => b.fair - a.fair)
        .slice(0, 3),
    [per, derived.globalAvg]
  )

  const mostVolatile90d = useMemo(
    () => [...per].sort((a, b) => b.vol90Std - a.vol90Std).slice(0, 3),
    [per]
  )

  return (
    <section
      className="kpis-section"
      role="region"
      aria-labelledby="kpis-heading"
      aria-describedby="kpis-desc"
    >
      <h2 id="kpis-heading" className="visually-hidden">
        Key performance indicators
      </h2>
      <p id="kpis-desc" className="visually-hidden">
        Summary statistics for reviews across listings with peer-comparison
        indicators.
      </p>

      <KpiGrid>
        {/* Topline */}
        <KpiStat
          label="Total Reviews"
          value={totalReviews.toLocaleString()}
          description="Count of reviews in current dataset/filters"
        />
        <KpiStat
          label="Average Rating (all‑time, filtered)"
          value={overallAvgRating.toFixed(2)}
          description="Arithmetic mean of all visible review ratings"
          srSuffix="out of 5"
          meter={{ min: 0, max: 5, now: overallAvgRating }}
        />
        <KpiStat
          label="Lowest Avg Category"
          value={lowestAvgCategory}
          description="Category with lowest average score across reviews"
        />

        {/* Best & Worst by 90d average */}
        <KpiStat
          label={`Best Listing Avg (90d)${
            bestListingByAvg90?.listingName
              ? `: ${bestListingByAvg90.listingName}`
              : ''
          }`}
          value={
            Number.isFinite(bestListingByAvg90?.avg90)
              ? bestListingByAvg90!.avg90.toFixed(2)
              : '—'
          }
          description={stateText(bestListingByAvg90?.avg90 ?? 0, peerAvg90s)}
          statusClass={zClass(bestListingByAvg90?.avg90 ?? 0, peerAvg90s)}
          srSuffix="out of 5"
          meter={{ min: 0, max: 5, now: bestListingByAvg90?.avg90 ?? 0 }}
        />
        <KpiStat
          label={`Worst Listing Avg (90d)${
            worstListingByAvg90?.listingName
              ? `: ${worstListingByAvg90.listingName}`
              : ''
          }`}
          value={
            Number.isFinite(worstListingByAvg90?.avg90)
              ? worstListingByAvg90!.avg90.toFixed(2)
              : '—'
          }
          description={stateText(worstListingByAvg90?.avg90 ?? 0, peerAvg90s)}
          statusClass={zClass(worstListingByAvg90?.avg90 ?? 0, peerAvg90s)}
          srSuffix="out of 5"
          meter={{ min: 0, max: 5, now: worstListingByAvg90?.avg90 ?? 0 }}
        />
        <KpiStat
          label={`Property Coverage (≥${derived.coverageMin} approved in last 90d)`}
          value={derived.coverageCount.toString()}
          description="Listings with enough recent, approved reviews to show"
        />

        {/* Worst listing detail (freshness, star shares) */}
        {worstListingByAvg90 && (
          <>
            <KpiStat
              label="Freshness (days since last review)"
              value={worstListingByAvg90.freshness.toString()}
              description={stateText(
                worstListingByAvg90.freshness,
                peerFreshnessDays,
                /*invert*/ true
              )}
              statusClass={zClass(
                worstListingByAvg90.freshness,
                peerFreshnessDays,
                true
              )}
            />
            <KpiStat
              label="% 5‑Star (last 90d, worst listing)"
              value={`${Math.round((worstListingByAvg90.pct5 || 0) * 100)}%`}
            />
            <KpiStat
              label="% 1–2★ (last 90d, worst listing)"
              value={`${Math.round((worstListingByAvg90.pct12 || 0) * 100)}%`}
              statusClass={
                (worstListingByAvg90.pct12 || 0) > 0.2 ? 'warning-level' : ''
              }
            />
          </>
        )}

        {/* Rank lists */}
        <KpiRankList
          title="Top by Fair Rank"
          caption="Bayesian average (m=10) to reduce small‑sample bias"
          items={topByFairRank.map((p: PerItem & { fair: number }) => ({
            id: p.listingId,
            name: p.listingName,
            right: p.fair.toFixed(2),
          }))}
        />
        <KpiRankList
          title="Most Volatile (90d)"
          caption="Higher σ = more variation in recent ratings"
          items={mostVolatile90d.map((p) => ({
            id: p.listingId,
            name: p.listingName,
            right: `σ ${p.vol90Std.toFixed(2)}`,
          }))}
        />
      </KpiGrid>
    </section>
  )
}
