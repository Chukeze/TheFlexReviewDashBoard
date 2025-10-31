import { ChartType, DerivedMetrics, ReviewPayload } from "@/lib/types"
import { zClass, toggleApproval } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import ChartSwitcher from "../ChartSwitcher"
import IssueSummaryCard from "../IssueSummaryCard"
import Kpis from "../Kpis"
import NotesModal from "../Notes/Modal/NotesModal"
import NoteContainer from "../Notes/NotesContainer/NoteContainer"
import NoticeBar from "../NoticeBar"
import OperationalFollowThroughCard from "../OperationalFollowThroughCard"

type DetailedModeProps = {
  channels: string[]
  listings: string[]
  categories: string[]
  isLoading: boolean
  reviewsPayload: ReviewPayload | null
  metrics: DerivedMetrics | null 
  error?: string | null
}

export default function DetailedMode({channels, listings, categories, isLoading, reviewsPayload, metrics, error}: DetailedModeProps) {
      const [channel, setChannel] = useState('')
      const [listingId, setListingId] = useState('')
      const [minRating, setMinRating] = useState(0)
      const [maxRating, setMaxRating] = useState(5)
      const [category, setCategory] = useState('')
      const [from, setFrom] = useState('')
      const [to, setTo] = useState('')
      const [presetWindowDays, setPresetWindowDays] = useState<30 | 60 | 90 | null>(
        null
      ) // CHIP: 30/60/90
      const [approved, setApproved] = useState<Set<string>>(new Set())
      const [chart, setChart] = useState<ChartType>('trend')
      const [noticeMessage, setNoticeMessage] = useState<string>('')

      function showNotice(msg: string) {
        setNoticeMessage(msg)
        //auto-dismiss after 5s
        window.clearTimeout((showNotice as any)._timeout)
        ;(showNotice as any)._timeout = window.setTimeout(
          () => setNoticeMessage(''),
          5000
        )
      }

       const hasCustomRange = Boolean(from || to)
       const hasPreset = presetWindowDays !== null
  return (
    <>
      <div className="card elevated">
        <h2 style={{ marginTop: 0 }}>Reviews Dashboard</h2>
        <p className="muted">
          Filter, spot trends, triage issues, and approve reviews for display on
          property pages.
        </p>
      </div>
      <NoticeBar message={noticeMessage} onClose={() => setNoticeMessage('')} />
      <div className="card">
        <h3>Filters</h3>
        <article className="grid cols-3 filters">
          <div>
            <label className="label">Channel</label>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option value="">All</option>
              {channels.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Listing</label>
            <select
              value={listingId}
              onChange={(e) => setListingId(e.target.value)}
            >
              <option value="">All</option>
              {listings.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Any</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Rating Min</label>
            <input
              className="input"
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="label">Rating Max</label>
            <input
              className="input"
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={maxRating}
              onChange={(e) => setMaxRating(parseFloat(e.target.value))}
            />
          </div>
          <div />
          <div>
            <label className="label">From (ISO)</label>
            <input
              className="input"
              type="text"
              placeholder="2023-01-01T00:00:00Z"
              value={from}
              readOnly={hasPreset}
              onFocus={() => {
                if (hasPreset)
                  showNotice(
                    'Custom date fields are disabled while a preset chip is active. Click “Clear preset” to enable custom dates.'
                  )
              }}
              onChange={(e) => {
                if (hasPreset) return
                setFrom(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="label">To (ISO)</label>
            <input
              className="input"
              type="text"
              placeholder="2025-01-01T00:00:00Z"
              value={to}
              readOnly={hasPreset}
              onFocus={() => {
                if (hasPreset)
                  showNotice(
                    'Custom date fields are disabled while a preset chip is active. Click “Clear preset” to enable custom dates.'
                  )
              }}
              onChange={(e) => {
                if (hasPreset) return
                setTo(e.target.value)
              }}
            />
          </div>
          <div className="row" style={{ alignItems: 'flex-end' }}>
            {/* Preset chips for quick windows */}
            <div className="chips">
              {[30, 60, 90].map((d) => {
                const blocked = hasCustomRange // dates present => chip is blocked
                const isActive = presetWindowDays === d
                return (
                  <button
                    key={d}
                    className={`chip ${isActive ? 'active' : ''} ${
                      blocked ? 'disabled' : ''
                    }`}
                    aria-disabled={blocked}
                    onClick={() => {
                      if (blocked) {
                        showNotice(
                          'Preset date chips are disabled while a custom dat`e range is set. Clear From/To to use presets.'
                        )
                        return
                      }
                      setPresetWindowDays((prev) =>
                        prev === d ? null : (d as 30 | 60 | 90)
                      )
                    }}
                  >
                    Last {d} days
                  </button>
                )
              })}
              {hasPreset && (
                <button
                  className="button ghost small"
                  onClick={() => setPresetWindowDays(null)}
                >
                  Clear preset
                </button>
              )}
              {hasCustomRange && (
                <button
                  className="button ghost small"
                  onClick={() => {
                    setFrom('')
                    setTo('')
                  }}
                >
                  Clear dates
                </button>
              )}
              <button
                className="button ghost"
                onClick={() => {
                  setChannel('')
                  setListingId('')
                  setCategory('')
                  setMinRating(0)
                  setMaxRating(5)
                  setFrom('')
                  setTo('')
                }}
              >
                Reset Filters
              </button>
            </div>
            <div className="small muted" style={{ marginTop: 8 }}>
              <strong>Active time control:</strong>{' '}
              {hasCustomRange ? (
                <>
                  ISO {from ? 'From' : 'To'}: {from || '…'} → {to || '…'}
                </>
              ) : presetWindowDays ? (
                <>Preset: Last {presetWindowDays} days</>
              ) : (
                <>All time</>
              )}
            </div>
          </div>
        </article>
      </div>
      <section>
        <Kpis derived={metrics} data={reviewsPayload} loading={isLoading} />
        <aside>
          <h3> Notes </h3>
          <NotesModal>
            <NoteContainer />
          </NotesModal>
        </aside>
      </section>

      <div className="card">
        <h3>Trend (Monthly Average Rating)</h3>
        {isLoading && <p className="muted">Loading…</p>}
        {!isLoading && reviewsPayload && (
          <ChartSwitcher
            chart={chart}
            setChart={setChart}
            timeline={
              metrics?.timelineMonthlyWindowed ??
              reviewsPayload.aggregates.timelineMonthly
            }
            channels={channels}
            derived={metrics}
            windowDays={hasCustomRange ? null : presetWindowDays}
          />
        )}
      </div>
      <article
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          height: 'fit-content',
        }}
      >
        <OperationalFollowThroughCard derived={metrics} rev={reviewsPayload?.reviews ?? []} />

        {!isLoading && reviewsPayload && (
          <IssueSummaryCard
            reviews={reviewsPayload.reviews}
            windowDays={presetWindowDays}
            from={from}
            to={to}
            onlyChannel={channel || undefined}
          />
        )}
      </article>
      <div className="card" style={{ height: 'fit-content' }}>
        <h3 style={{ marginTop: 0 }}>At‑Risk Listings</h3>
        {!metrics || !metrics.atRisk.length ? (
          <p className="muted">None flagged.</p>
        ) : (
          <table style={{ width: '100%' }}>
            <thead style={{ textAlign: 'left', left: '0' }}>
              <tr>
                <th>Listing</th>
                <th>Avg 90d</th>
                <th>Vol 90d</th>
                <th>Freshness (days)</th>
              </tr>
            </thead>
            <tbody>
              {metrics.atRisk.map((p) => (
                <tr key={p.listingId}>
                  <td>
                    <Link href={`/properties/${p.listingId}`}>
                      {p.listingName}
                    </Link>
                  </td>
                  <td className={zClass(p.avg90, metrics.peersAvg90)}>
                    {p.avg90.toFixed(2)}
                  </td>
                  <td>{p.vol90}</td>
                  <td className={zClass(p.freshness, metrics.peersFresh, true)}>
                    {p.freshness}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="card">
        <h3>Reviews</h3>
        {error && <p className="muted">Error: {error}</p>}
        {isLoading && <p className="muted">Loading…</p>}
        {!isLoading && reviewsPayload && (
          <div className="table-wrap">
            <table className="tables reviews">
              <colgroup>
                <col style={{ width: '260px' }} />
                <col style={{ width: '110px' }} />
                <col style={{ width: '180px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '160px' }} />
                <col style={{ width: '160px' }} />
                <col style={{ width: '140px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Listing</th>
                  <th className="channel">Channel</th>
                  <th>Guest</th>
                  <th className="rating" style={{ minWidth: 70 }}>
                    Rating
                  </th>
                  <th className="submitted">Submitted</th>
                  <th className="excerpt">Excerpt</th>
                  <th className="approved">Approved</th>
                </tr>
              </thead>
              <tbody>
                {reviewsPayload.reviews.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <Link href={`/properties/${r.listingId}`}>
                        {r.listingName}
                      </Link>
                    </td>
                    <td>
                      <span className="badge">{r.channel}</span>
                    </td>
                    <td>{r.guestName}</td>
                    <td>{r.overall.toFixed(2)}</td>
                    <td className="small muted">{r.submittedAt}</td>
                    <td className="small">
                      {r.text.slice(0, 200)}
                      {r.text.length > 200 ? '…' : ''}
                    </td>
                    <td className="approved">
                      <label className="row small" style={{ gap: 8 }}>
                        <input
                          type="checkbox"
                          checked={approved.has(r.id)}
                          onChange={(e) =>
                            toggleApproval(
                              r.id,
                              e.target.checked,
                              approved,
                              setApproved
                            )
                          }
                        />
                        {approved.has(r.id) ? 'Approved' : 'Hidden'}
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
