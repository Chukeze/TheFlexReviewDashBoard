'use client'

import { Review, Aggregates } from '@/lib/types'
import { mean, zClass, bayesianScore } from '@/lib/utils'
import { useMemo } from 'react'

export default function Kpis({
  derived,
  data,
  loading,
}: {
  derived: ReturnType<typeof useMemo> | null
  data: { reviews: Review[]; aggregates: Aggregates } | undefined | null
  loading: boolean
}) {
  if (loading)
    return (
      <div className="card">
        <p className="muted">Loading KPIs…</p>
      </div>
    )
  if (!data || !derived) return null

  //const total = Object.values(aggregates.byListing).reduce((a, b) => a + b.count, 0);
  const total = data.reviews.length
  const avgAll = mean(data.reviews.map((r) => r.overall))
  const avg90Peers = derived.perListing.map((p) => p.avg90)
  const freshnessPeers = derived.perListing.map((p) => p.freshness)

  // Topline (peer-colored)
  const worstCat =
    Object.entries(data.aggregates.byCategory).sort(
      (a, b) => a[1].avg - b[1].avg
    )[0]?.[0] ?? 'n/a'

  const bestListing = [...derived.perListing]
    .filter((p) => isFinite(p.avg90))
    .sort((a, b) => b.avg90 - a.avg90)[0]
  const worstListing = [...derived.perListing]
    .filter((p) => isFinite(p.avg90))
    .sort((a, b) => a.avg90 - b.avg90)[0]

  return (
    <div className="grid cols-3">
      <div className="card">
        <div className="kpi">{total}</div>
        <div className="muted small">Total Reviews</div>
      </div>

      <div className="card">
        <div className="kpi">{avgAll.toFixed(2)}</div>
        <div className="muted small">Average Rating (all‑time, filtered)</div>
      </div>

      <div className="card">
        <div className="kpi">{worstCat}</div>
        <div className="muted small">Lowest Avg Category</div>
      </div>

      <div className="card">
        <div className={`kpi ${zClass(bestListing?.avg90 ?? 0, avg90Peers)}`}>
          {isFinite(bestListing?.avg90 ?? NaN) ? bestListing!.avg90.toFixed(2) : '—'}
        </div>
        <div className="muted small">
          Best Listing Avg (90d): {bestListing?.listingName || '—'}
        </div>
      </div>

      <div className="card">
        <div className={`kpi ${zClass(worstListing?.avg90 ?? 0, avg90Peers)}`}>
          {isFinite(worstListing?.avg90 ?? NaN) ? worstListing!.avg90.toFixed(2) : '—'}
        </div>
        <div className="muted small">
          Worst Listing Avg (90d): {worstListing?.listingName || '—'}
        </div>
      </div>

      <div className="card">
        <div className="kpi">{derived.coverageCount}</div>
        <div className="muted small">
          Property Coverage (≥{derived.coverageMin} approved in last 90d)
        </div>
      </div>
      
      {worstListing && (
        <>
          <div className="card">
            <div
              className={`kpi ${zClass(worstListing.freshness, freshnessPeers, true)}`}
            >
              {worstListing.freshness}
            </div>
            <div className="muted small">
              Freshness (days since last review)
            </div>
          </div>
          <div className="card">
            <div className="kpi">{Math.round((worstListing.pct5 || 0) * 100)}%</div>
            <div className="muted small">
              % 5‑Star (last 90d, worst listing)
            </div>
          </div>
          <div className="card">
            <div className={`kpi ${worstListing.pct12 > 0.2 ? 'warning-level' : ''}`}>
              {Math.round((worstListing.pct12 || 0) * 100)}%
            </div>
            <div className="muted small">% 1–2★ (last 90d, worst listing)</div>
          </div>
        </>
      )}

      <div className="card">
        <div className="kpi">Top by Fair Rank</div>
        <div className="small">
          {derived.perListing
            .map((p) => ({
              ...p,
              fair: bayesianScore(p.RAll, p.vAll, derived.globalAvg, 10),
            }))
            .sort((a, b) => b.fair - a.fair)
            .slice(0, 3)
            .map((p) => (
              <div
                key={p.listingId}
                className="row"
                style={{ justifyContent: 'space-between' }}
              >
                <span>{p.listingName}</span>
                <span className="muted small">{p.fair.toFixed(2)}</span>
              </div>
            ))}
        </div>
        <div className="muted small">
          Bayesian average (m=10) to reduce small‑sample bias
        </div>
      </div>

      <div className="card">
        <div className="kpi">Most Volatile (90d)</div>
        <div className="small">
          {[...derived.perListing]
            .sort((a, b) => b.vol90Std - a.vol90Std)
            .slice(0, 3)
            .map((p) => (
              <div
                key={p.listingId}
                className="row"
                style={{ justifyContent: 'space-between' }}
              >
                <span>{p.listingName}</span>
                <span className="muted small">σ {p.vol90Std.toFixed(2)}</span>
              </div>
            ))}
        </div>
        <div className="muted small">
          Higher σ = more variation in recent ratings
        </div>
      </div>
    </div>
  )
}
