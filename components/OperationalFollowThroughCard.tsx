'use client'

import { useFollowUps } from '@/lib/followups'
import { DerivedMetrics, TTRPair } from '@/lib/types'
import { daysSince, ISSUE_KEYWORDS } from '@/lib/utils'
import Link from 'next/link'
import FollowUpButton from './FollowUpButton'

export default function OperationalFollowThroughCard({
  derived,
}: {
  derived: DerivedMetrics | null
}) {
  const { items, toggle } = useFollowUps()

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

  const fuKey = (t: string, l: string,  issueId?: string) => `${t}::${l || ''}::${issueId || ''}`
  const statusByKey = new Map(
    items.map((f) => [fuKey(f.term, f.listingId || '', f.issueId), f.status])
  )

  // slowest 5 recoveries
  const slowest = [...closed].sort((a, b) => b.days - a.days).slice(0, 5)

  // top 5 open issues (most days since issue)
  const openRanked = [...open]
    .filter((p) => statusByKey.get(fuKey(p.keyword, p.listingId, p.issueId)) !== 'closed') // only those with open follow-ups
    .sort((a, b) => daysSince(a.issueAt) - daysSince(b.issueAt))
    .slice(0, 5)

  const manuallyClosed = open.filter(
    (p) => statusByKey.get(fuKey(p.keyword, p.listingId)) === 'closed'
  ).length

  const closedCount = closed.length + manuallyClosed
  const totalCount = open.length + closed.length

  const findFU = (keyword: string, listingId: string, issueId?: string) => {
    return items.find(
      (followups) =>
        followups.term === keyword &&
        followups.listingId === listingId &&
        followups.issueId === issueId &&
        followups.status === 'open'
    ) || items.find( (followups) => followups.issueId === issueId && followups.status === 'open' )
  }

  const manuallyClosedRows = open
    .filter((p) => statusByKey.get(fuKey(p.keyword, p.listingId)) === 'closed')
    .map((p) => ({
      listingId: p.listingId,
      listingName: p.listingName,
      keyword: p.keyword,
      issueAt: p.issueAt,
    }))

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
            {/*derived.ttr.closedIssues} /{' '}
            {//derived.ttr.closedIssues + derived.ttr.openIssues*/}
            {closedCount} / {totalCount}
          </div>
          <div className="muted small">Closed / Total Issues</div>
        </div>
      </div>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        <div>
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
          {manuallyClosedRows.length > 0 && 
            <div className="card">
              <h4 style={{ margin: '4px 0' }}>Manually Resolved</h4>            
                <table className="table">
                  <thead>
                    <tr>
                      <th>Listing</th>
                      <th>Keyword</th>
                      <th>Issue Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manuallyClosedRows.map((p, i) => (
                      <tr key={`${p.listingId}:${p.keyword}:${i}`}>
                        <td>
                          <Link href={`/properties/${p.listingId}`}>
                            {p.listingName}
                          </Link>
                        </td>
                        <td>{p.keyword}</td>
                        <td className="small muted">
                          {new Date(p.issueAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          }
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {openRanked.map((p) => {
                  const followUp = findFU(p.keyword, p.listingId, p.issueId)
                  console.log('followUp', followUp)
                  return (
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
                      <td>
                        {followUp ? (
                          <button
                            className="button small"
                            aria-pressed="true"
                            onClick={() => toggle(followUp.id!)}
                            aria-label={`Mark resolved: ${p.keyword} on ${p.listingName}`}
                          >
                            Mark Resolved
                          </button>
                        ) : (
                          <FollowUpButton
                            term={p.keyword}
                            listingId={p.listingId}
                            listingName={p.listingName}
                            issueId={p.issueId}
                            // onCreated={()  => add({
                            //   term: p.keyword,
                            //   listingId: p.listingId,
                            //   listingName: p.listingName
                            // })}
                          />
                        )}
                      </td>
                    </tr>
                  )
                })}
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
