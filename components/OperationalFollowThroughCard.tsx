'use client'

import { DerivedMetrics, TTRPair } from '@/lib/types'
import { daysSince, ISSUE_KEYWORDS } from '@/lib/utils'
import Link from 'next/link'

export default function OperationalFollowThroughCard({
  derived,
}: {
  derived: DerivedMetrics | null
}) {
  if (!derived)
    return (
      <div className="card">
        <p className="muted">No data.</p>
      </div>
    )
  const closed = derived.ttr.pairs.filter(
    (p) => typeof p.days === 'number'
  ) as Required<TTRPair>[]
  const open = derived.ttr.pairs.filter((p) => typeof p.days !== 'number')

  // slowest 5 recoveries
  const slowest = [...closed].sort((a, b) => b.days - a.days).slice(0, 5)
  // top 5 open issues (most days since issue)
  const openRanked = [...open]
    .sort((a, b) => daysSince(a.issueAt) - daysSince(b.issueAt))
    .slice(0, 5)

  return (
    <div className="card" id="OpsFollowThrough">
      <h3 style={{ marginTop: 0 }}>
        Operational Follow‑Through (Time‑to‑Recovery)
      </h3>
      <div className="grid cols-3">
        <div className="card">
          <div className="kpi">
            {isFinite(derived.ttr.avgDays)
              ? derived.ttr.avgDays.toFixed(1)
              : '—'}{' '}
            d
          </div>
          <div className="muted small">
            Avg TTR (issue 3★ with keyword → next ≥4.5★)
          </div>
        </div>
        <div className="card">
          <div className="kpi">
            {isFinite(derived.ttr.medianDays)
              ? derived.ttr.medianDays.toFixed(1)
              : '—'}{' '}
            d
          </div>
          <div className="muted small">Median TTR</div>
        </div>
        <div className="card">
          <div className="kpi">
            {derived.ttr.closedIssues} / {derived.ttr.closedIssues + derived.ttr.openIssues}
          </div>
          <div className="muted small">Closed / Total Issues</div>
        </div>
      </div>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        <div className="card">
          <h4 style={{ margin: '4px 0' }}>Slowest Recoveries</h4>
          {slowest.length === 0 ? (
            <p className="muted">No closed issues.</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Keyword</th>
                  <th>Days</th>
                  <th>Issue → Recovery</th>
                </tr>
              </thead>
              <tbody>
                {slowest.map((p) => (
                  <tr key={p.issueId}>
                    <td>
                      <Link href={`/properties/${p.listingId}`}>
                        {p.listingName}
                      </Link>
                    </td>
                    <td>{p.keyword}</td>
                    <td className={p.days > 14 ? 'warning-level' : ''}>
                      {p.days}
                    </td>
                    <td className="small muted">
                      {new Date(p.issueAt).toLocaleDateString()} →{' '}
                      {new Date(p.recoveryAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card">
          <h4 style={{ margin: '4px 0' }}>Open Issues (oldest first)</h4>
          {openRanked.length === 0 ? (
            <p className="muted">No open issues.</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Keyword</th>
                  <th>Days since</th>
                  <th>Issue Excerpt</th>
                </tr>
              </thead>
              <tbody>
                {openRanked.map((p) => (
                  <tr key={p.issueId}>
                    <td>
                      <Link href={`/properties/${p.listingId}`}>
                        {p.listingName}
                      </Link>
                    </td>
                    <td>{p.keyword}</td>
                    <td
                      className={
                        daysSince(p.issueAt) > 30 ? 'warning-level' : ''
                      }
                    >
                      {daysSince(p.issueAt)}
                    </td>
                    <td className="small">
                      {p.issueText.slice(0, 80)}
                      {p.issueText.length > 80 ? '…' : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <p className="small muted" style={{ marginTop: 8 }}>
        Heuristic: issues are <strong>&lt;3★</strong> reviews that mention one
        of {ISSUE_KEYWORDS.length}+ keywords (e.g., cleanliness, Wi‑Fi, noise,
        check‑in…); recovery is the next <strong>≥4.5★</strong> review on the
        same listing. Tune the keyword list and thresholds as needed.
      </p>
    </div>
  )
}
