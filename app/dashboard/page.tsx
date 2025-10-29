'use client'
import { useEffect, useMemo, useState, useRef } from 'react'
import Link from 'next/link'
import {
  ChartType,
  DerivedMetrics,
  PerListing,
  MonthChanPoint,
  TTRPair,
  HeatRow,
  TTRSummary,
  Review,
  ReviewPayload,
} from '@/lib/types'
import ChartSwitcher from '@/components/ChartSwitcher'
import OperationalFollowThroughCard from '@/components/OperationalFollowThroughCard'
import {
  mean,
  lastNDays,
  daysSince,
  bayesianScore,
  std,
  findKeyword,
  daysBetween,
  median,
  zClass,
  now,
  MS_DAY,
  toggleApproval,
  inCurrentWindow,
  slugify,
} from '@/lib/utils'
import Kpis from '@/components/Kpis'
import IssueSummaryCard from '@/components/IssueSummaryCard'
import NoticeBar from '@/components/NoticeBar'
import ReviewCard from '@/components/ReviewCard'
import SummaryModeFilters from '@/components/SummaryModeFilters'
import { FiltersProvider } from '@/hooks/providers/FiltersProviders'
import { ApprovedProvider } from '@/hooks/providers/ApprovedProviders'
import DashboardGrid from '@/components/Dashboard/DashboardGrid'
import Board from '@/components/Dashboard/Board'
import NoteContainer from '@/components/Notes/NotesContainer/NoteContainer'
import NotesModal from '@/components/Notes/Modal/NotesModal'
import BoardItem from '@/components/Dashboard/BoardItem'
import { reviewsFiltersSchema } from '@/validators/reviewsFilterSchema'

type ViewMode = 'detailed' | 'summary' | 'cleaned'

type ReviewFilterForSummaryView = {
  channel?: string
  minStars?: number
  category?: string
  listing?: string
  search?: string
}

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('detailed')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reviewsPayload, setReviewsPayload] = useState<ReviewPayload | null>(
    null
  )

  //Filters
  const [channel, setChannel] = useState('')
  const [listingId, setListingId] = useState('')
  const [ratingMin, setRatingMin] = useState(0)
  const [ratingMax, setRatingMax] = useState(5)
  const [category, setCategory] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [presetWindowDays, setPresetWindowDays] = useState<30 | 60 | 90 | null>(
    null
  ) // CHIP: 30/60/90
  const [approved, setApproved] = useState<Set<string>>(new Set())
  const [chart, setChart] = useState<ChartType>('trend')
  const [noticeMessage, setNoticeMessage] = useState<string>('')
  const lastReqRef = useRef<symbol | null>(null)

  const [reviewFilterForSummaryView, setReviewFilterForSummaryView] =
    useState<ReviewFilterForSummaryView>({})

  const filters = {
    channel,
    listingId,
    ratingMin,
    ratingMax,
    category,
    from,
    to,
    presetWindowDays,
  }

  const validation = reviewsFiltersSchema.safeParse(filters)

  const queryString = useMemo(() => {
    const p = new URLSearchParams()

    if (!validation.success) {
      //   console.log('Valid: ', { validationData: validation.data })
      console.log('Invalid: ', { validationError: validation.error })
      // console.log('Valid Value: ', { validationData: validation.success.valueOf() })
      return ''
    }

    const v = validation.data

    if (v?.channel) p.set('channel', v.channel)
    if (v?.listingId) p.set('listingId', v.listingId)
    if (typeof v?.ratingMin === 'number' && v.ratingMin !== 0)
      p.set('ratingMin', String(v.ratingMin))
    if (typeof v?.ratingMax === 'number' && v.ratingMax !== 5)
      p.set('ratingMax', String(v.ratingMax))
    if (v?.category) p.set('category', v.category)
    if (v?.from) p.set('from', v.from)
    if (v?.to) p.set('to', v.to)

    if (!v?.from && !v?.to && v?.presetWindowDays) {
      const end = new Date().toISOString()
      const start = new Date(
        Date.now() - v.presetWindowDays * MS_DAY
      ).toISOString()
      p.set('from', start)
      p.set('to', end)
    }
    return p.toString()
  }, [
    channel,
    listingId,
    ratingMin,
    ratingMax,
    category,
    from,
    to,
    presetWindowDays,
  ])

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    if (!validation.success) {
      setIsLoading(false)
      setError('Invalid filters')
      return
    }

    const abrtController = new AbortController()
    const reqToken = Symbol()
    lastReqRef.current = reqToken

    fetch('/api/reviews/combined?' + queryString, {
      signal: abrtController.signal,
      cache: 'no-store',
    })
      .then((r) => r.json())
      .then((payload) => {
        if (lastReqRef.current !== reqToken) return //ignore out-of-order responses
        setReviewsPayload(payload)
      })
      .catch((e) => {
        if (e?.name !== 'AbortError') setError(String(e))
      })
      .finally(() => {
        if (lastReqRef.current === reqToken) setIsLoading(false)
      })

    return () => abrtController.abort()
  }, [queryString, validation.success])

  useEffect(() => {
    fetch('/api/reviews/approved')
      .then((r) => r.json())
      .then((j) => setApproved(new Set(j.approved || [])))
      .catch(() => {})
  }, [])

  const listings = useMemo(
    () =>
      Object.entries(reviewsPayload?.aggregates.reviewsByListing || {}).map(
        ([id, v]) => ({
          id,
          name: v.listingName,
        })
      ),
    [reviewsPayload]
  )
  const channels = useMemo(
    () => Object.keys(reviewsPayload?.aggregates.byChannel || {}),
    [reviewsPayload]
  )
  const categories = useMemo(
    () => Object.keys(reviewsPayload?.aggregates.byCategory || {}),
    [reviewsPayload]
  )

  function showNotice(msg: string) {
    setNoticeMessage(msg)
    //auto-dismiss after 5s
    if (typeof window !== 'undefined') {
      window?.clearTimeout((showNotice as any)._timeout)
      ;(showNotice as any)._timeout = window.setTimeout(
        () => setNoticeMessage(''),
        5000
      )
    }
  }

  const issuesByPath = new Map(
    (validation.success ? [] : validation.error.issues).map((i) => [
      i.path.join('.'),
      i,
    ])
  )
  const minRatingIssue = issuesByPath.get('ratingMin')
  const maxRatingIssue = issuesByPath.get('ratingMax')
  const fromIssue = issuesByPath.get('from')
  const toIssue = issuesByPath.get('to')
  const presetIssue = issuesByPath.get('presetWindowDays')

  const hasCustomRange = Boolean(from || to)
  const hasPreset = presetWindowDays !== null

  /// --------- DERIVED METRICS ---------
  const metrics: DerivedMetrics | null = useMemo(() => {
    if (!reviewsPayload?.reviews?.length) return null

    // map listingId -> reviews
    const reviewsByListing = new Map<number, Review[]>()
    for (const r of reviewsPayload.reviews) {
      if (!reviewsByListing.has(r.listingId))
        reviewsByListing.set(r.listingId, [])
      reviewsByListing.get(r.listingId)!.push(r)
    }
    // ensure chronological for each listing
    for (const arr of reviewsByListing.values())
      arr.sort(
        (a, b) =>
          new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
      )

    // global stats
    const globalAvg = mean(reviewsPayload.reviews.map((r) => r.overall))

    // per listing metrics
    const perListing: PerListing[] = Array.from(reviewsByListing.entries()).map(
      ([id, arr]) => {
        const arr90 = lastNDays(arr, 90)
        const arr30 = lastNDays(arr, 30)
        const arr60 = lastNDays(arr, 60)

        const avg90 = mean(arr90.map((x) => x.overall))
        const vol30 = arr30.length,
          vol60 = arr60.length,
          vol90 = arr90.length

        const pct5 = arr90.length
          ? arr90.filter((x) => x.overall >= 4.5).length / arr90.length
          : 0
        const pct12 = arr90.length
          ? arr90.filter((x) => x.overall <= 2.0).length / arr90.length
          : 0

        const freshness = arr.length
          ? Math.min(...arr.map((x) => daysSince(x.submittedAt)))
          : Infinity

        const vAll = arr.length
        const RAll = mean(arr.map((x) => x.overall))
        const bayes = bayesianScore(RAll, vAll, globalAvg, 10)

        const vol90Std = std(arr90.map((x) => x.overall))
        const approvedRecent90 = arr.filter(
          (x) =>
            approved.has(x.id) &&
            now() - new Date(x.submittedAt).getTime() <= 90 * MS_DAY
        ).length

        return {
          listingId: id,
          listingName: arr[0]?.listingName,
          avg90,
          vol30,
          vol60,
          vol90,
          pct5,
          pct12,
          freshness,
          vAll,
          RAll,
          bayes,
          vol90Std,
          approvedRecent90,
        }
      }
    )

    // peers for z-scoring
    const peersAvg90 = perListing.map((p) => p.avg90)
    const peersFresh = perListing.map((p) => p.freshness)
    const peersVol90 = perListing.map((p) => p.vol90)
    const peersPct5 = perListing.map((p) => p.pct5)

    // coverage: >=2 approved in last 90d
    const coverageMin = 2
    const coverageCount = perListing.filter(
      (p) => p.approvedRecent90 >= coverageMin
    ).length

    // at-risk
    const RATING_MIN = 4.0,
      RECENCY_MAX = 45,
      VOL_MIN_90 = 3
    const atRisk = perListing.filter(
      (p) =>
        (p.avg90 && p.avg90 < RATING_MIN) ||
        p.freshness > RECENCY_MAX ||
        p.vol90 < VOL_MIN_90
    )

    const inWindow = (iso: string) =>
      inCurrentWindow(
        iso,
        hasCustomRange,
        hasPreset,
        presetWindowDays,
        from,
        to
      )

    const reviewsInWindow =
      reviewsPayload?.reviews.filter((r) => inWindow(r.submittedAt)) || []

    const acc: Record<string, { sum: number; n: number }> = {}
    for (const r of reviewsInWindow) {
      const m = r.submittedAt.slice(0, 7)
      const a = (acc[m] ||= { sum: 0, n: 0 })
      a.sum += r.overall
      a.n += 1
    }

    const timelineMonthlyWindowed = Object.entries(acc)
      .map(([month, { sum, n }]) => ({ month, avg: sum / Math.max(1, n) }))
      .sort((a, b) => a.month.localeCompare(b.month))

    const bins = [0, 1, 2, 3, 4, 5]
    const ratingDistribution = bins.map(
      (b) =>
        reviewsInWindow.filter((r) => r.overall >= b && r.overall < b + 1)
          .length
    )

    // volume by channel per month
    const monthChan: Record<string, Record<string, number>> = {}
    for (const r of reviewsInWindow) {
      const m = r.submittedAt.slice(0, 7)
      monthChan[m] ||= {}
      monthChan[m][r.channel] = (monthChan[m][r.channel] || 0) + 1
    }
    const monthChanPoints: MonthChanPoint[] = Object.entries(monthChan)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, counts]) => ({ month, counts }))

    // vol per listing in current window
    const volReviewsByListing: Array<{
      listingId: number
      name: string
      count: number
    }> = []

    for (const [id, arr] of reviewsByListing.entries()) {
      const c = arr.filter((r) =>
        inCurrentWindow(
          r.submittedAt,
          hasCustomRange,
          hasPreset,
          presetWindowDays,
          from,
          to
        )
      ).length

      volReviewsByListing.push({
        listingId: id,
        name: arr[0]?.listingName,
        count: c,
      })
    }
    volReviewsByListing.sort((a, b) => b.count - a.count)
    /*
    // rating distribution (0–1,1–2,...4–5)
    const bins = [0, 1, 2, 3, 4, 5]
    const ratingDistribution = bins.map(
      (b) =>
        reviewsPayload.reviews.filter(
          (r) => r.overall >= b && r.overall < b + 1
        ).length
    )
*/

    const effW =
      hasCustomRange && from && to
        ? Math.max(
            1,
            Math.ceil(
              (new Date(to).getTime() - new Date(from).getTime()) / MS_DAY
            )
          )
        : presetWindowDays ?? 90

    const fromTs = from ? new Date(from).getTime() : null
    const toTs = to ? new Date(to).getTime() : null

    const isInCurrent = (ts: number) => {
      if (hasCustomRange) {
        if (fromTs && ts < fromTs) return false
        if (toTs && ts > toTs) return false
        return true
      }
      return now() - ts <= effW * MS_DAY
    }

    const isInPrior = (ts: number) => {
      if (hasCustomRange && fromTs != null) {
        return ts >= fromTs - effW * MS_DAY && ts < fromTs
      }
      const d = now() - ts
      return d > effW * MS_DAY && d <= 2 * effW * MS_DAY
    }

    // category heatmap last 90d & delta vs prior 90d
    const cats = Object.keys(reviewsPayload.aggregates.byCategory || {})
    const heatRows: HeatRow[] = cats.map((cat) => {
      const cells = perListing.map((p) => {
        const arr = reviewsByListing.get(p.listingId) || []

        const cur = arr //lastNDays(arr, 90)
          .filter((r) => isInCurrent(new Date(r.submittedAt).getTime()))
          .map((r) => r.categories[cat])
          .filter((v): v is number => typeof v === 'number' && isFinite(v))

        const prev = arr
          /* .filter((r) => {
            const d = now() - new Date(r.submittedAt).getTime()
            return d > W * MS_DAY && d <= 2 * W * MS_DAY
          })*/
          .filter((r) => isInPrior(new Date(r.submittedAt).getTime()))
          .map((r) => r.categories[cat])
          .filter((v) => typeof v === 'number')

        const curAvg = mean(cur)
        const prevAvg = mean(prev)

        return {
          listingId: p.listingId,
          listingName: p.listingName,
          curAvg,
          delta: curAvg - prevAvg,
        }
      })

      const peerVals = cells
        .map((c) => c.curAvg)
        .filter(Number.isFinite) as number[]
      const catMean = mean(peerVals),
        catStd = std(peerVals) || 1
      return { category: cat, cells, catMean, catStd }
    })

    // --------- TTR (Time-To-Recovery) ---------
    const pairs: TTRPair[] = []
    for (const [listingId, arr] of reviewsByListing.entries()) {
      var slugComponent = listingId + arr[0]?.listingName
      const listingName = arr[0]?.listingName || slugify(slugComponent)
      for (let i = 0; i < arr.length; i++) {
        const r = arr[i]
        const kw = findKeyword(r.text)
        if (r.overall < 3 && kw) {
          const nextHigh = arr.find(
            (rr) =>
              new Date(rr.submittedAt) > new Date(r.submittedAt) &&
              rr.overall >= 4.5
          )
          pairs.push({
            reviewId: Number(r.id),
            listingId,
            slug: slugify(slugComponent),
            listingName,
            keyword: kw,
            issueId: r.id,
            issueAt: r.submittedAt,
            issueText: r.text,
            recoveryId: nextHigh?.id,
            recoveryAt: nextHigh?.submittedAt,
            days: nextHigh
              ? daysBetween(r.submittedAt, nextHigh.submittedAt)
              : undefined,
          })
        }
      }
    }
    const closedIssues = pairs.filter(
      (p) => typeof p.days === 'number'
    ) as Required<TTRPair>[]
    const openIssues = pairs.filter((p) => typeof p.days !== 'number')
    const ttr: TTRSummary = {
      avgDays: mean(closedIssues.map((p) => p.days)),
      medianDays: median(closedIssues.map((p) => p.days)),
      closedIssues: closedIssues.length,
      openIssues: openIssues.length,
      pairs,
    }

    return {
      perListing,
      peersAvg90,
      peersFresh,
      peersVol90,
      peersPct5,
      coverageCount,
      coverageMin,
      atRisk,
      monthChanPoints,
      volReviewsByListing,
      ratingDistribution,
      heatRows,
      globalAvg,
      ttr,
      timelineMonthlyWindowed,
    }
  }, [
    reviewsPayload,
    approved,
    presetWindowDays,
    hasCustomRange,
    hasPreset,
    from,
    to,
  ])

  const filteredReviews = useMemo(() => {
    if (!reviewsPayload?.reviews) return []

    const f = reviewFilterForSummaryView
    const q = (f.search || '').trim().toLowerCase()

    return reviewsPayload.reviews.filter((r) => {
      if (f.channel && r.channel !== f.channel) return false
      if (typeof f.minStars === 'number' && r.overall < f.minStars) return false
      if (f.listing && r.listingName !== f.listing) return false

      // If a category is selected: keep reviews that include that category score.
      if (f.category && !(r.categories && f.category in r.categories))
        return false

      if (q) {
        const hay =
          `${r.text} ${r.guestName} ${r.listingName} ${r.channel}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [reviewsPayload, reviewFilterForSummaryView])

  return (
    <main className="grid theme-flex-light" style={{ gap: 24 }}>
      <div>
        <span>ViewMode:</span>
        <button
          className={`button ghost small ${
            viewMode === 'detailed' ? 'active' : ''
          }`}
          onClick={() => setViewMode('detailed')}
          style={{ marginLeft: 8 }}
        >
          Detailed
        </button>
        <button
          className={`button ghost small ${
            viewMode === 'summary' ? 'active' : ''
          }`}
          onClick={() => setViewMode('summary')}
          style={{ marginLeft: 8 }}
        >
          Summary
        </button>
        <button
          className={`button ghost small ${
            viewMode === 'cleaned' ? 'active' : ''
          }`}
          onClick={() => setViewMode('cleaned')}
          style={{ marginLeft: 8 }}
          disabled={true}
        >
          Projections
        </button>
      </div>
      <div style={{ height: 30 }}>
        <span style={{ height: 8 }}>
          {(validation.error || !validation.success) && (
            <p className="error" style={{ margin: 0 }}>
              Invalid filter:
              {'Invalid filter parameters, showing all reviews'}
            </p>
          )}
        </span>
      </div>
      {viewMode && viewMode === 'detailed' && (
        <>
          <div className="card elevated">
            <h2 style={{ marginTop: 0 }}>Reviews Dashboard</h2>
            <p className="muted">
              Filter, spot trends, triage issues, and approve reviews for
              display on property pages.
            </p>
          </div>
          <NoticeBar
            message={noticeMessage}
            onClose={() => setNoticeMessage('')}
          />
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
                    <option key={l.id} value={l.id}>
                      {l.name}
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
                  value={ratingMin}
                  onChange={(e) =>
                    setRatingMin(
                      e.target.value === '' ? 0 : parseFloat(e.target.value)
                    )
                  }
                  style={{ borderColor: minRatingIssue && 'red' }}
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
                  value={ratingMax}
                  onChange={(e) =>
                    setRatingMax(
                      e.target.value === '' ? 5 : parseFloat(e.target.value)
                    )
                  }
                  style={{ borderColor: maxRatingIssue && 'red' }}
                />
              </div>
              <div />
              <div>
                <label className="label">From (ISO)</label>
                <input
                  className="input"
                  type="datetime-local"
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
                  style={{ borderColor: fromIssue && 'red' }}
                />
              </div>
              <div>
                <label className="label">To (ISO)</label>
                <input
                  className="input"
                  type="datetime-local"
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
                  style={{ borderColor: toIssue && 'red' }}
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
                        style={{ borderColor: presetIssue && 'red' }}
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
                      setRatingMin(0)
                      setRatingMax(5)
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
            <OperationalFollowThroughCard
              derived={metrics}
              rev={reviewsPayload?.reviews ?? []}
            />

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
                      <td
                        className={zClass(
                          p.freshness,
                          metrics.peersFresh,
                          true
                        )}
                      >
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
                              checked={r.status?.toString().toLowerCase?.() ===
                              'published'}
                              onChange={(e) =>
                                toggleApproval(
                                  r.id,
                                  e.target.checked,
                                  approved,
                                  setApproved,
                                  (serverStatus) => {
                                    // ensure local state matches server (in case of any divergence)
                                    setReviewsPayload((prev) => {
                                      if (!prev) return prev
                                      return {
                                        ...prev,
                                        reviews: prev.reviews.map((x) =>
                                          x.id === r.id
                                            ? { ...x, status: serverStatus }
                                            : x
                                        ),
                                      }
                                    })
                                  }
                                )
                              }
                            />
                            {(r.status?.toString().toLowerCase?.() === 'published'
                              ? 'Approved'
                              : 'Hidden') 
                              //||
                              //(approved.has(r.id) ? 'Approved' : 'Hidden')
                              }
                            <span className="sr-only">
                              {r.status?.toString().toLowerCase?.() ===
                              'published'
                                ? 'Approved (published to site)'
                                : 'Hidden (not published)'}
                            </span>
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
      )}
      {viewMode && viewMode === 'summary' && (
        <>
          <h2>Reviews</h2>
          <SummaryModeFilters
            channels={channels}
            categories={categories.map((cat) => cat)}
            listings={listings.map((l) => l.name)}
            onChange={setReviewFilterForSummaryView}
          />
          {!filteredReviews.length ? (
            <p className="muted">No reviews match the current filters.</p>
          ) : (
            filteredReviews.map((review, idx) => (
              <ReviewCard
                key={idx}
                id={review.id}
                guestName={review.guestName}
                text={review.text}
                stars5={review.overall}
                time={review.submittedAt}
                listingName={review.listingName}
                channel={review.channel}
                approved={approved.has(review.id)}
                onApprovedChange={function (a: boolean): void {
                  toggleApproval(review.id, a, approved, setApproved)
                }}
              />
            ))
          )}
        </>
      )}
      {viewMode === 'cleaned' && (
        <FiltersProvider>
          <ApprovedProvider>
            <DashboardGrid>
              <Board>
                <BoardItem
                  listing={listings.map((l) => l.name)}
                  listingDesc={'victor'}
                />
              </Board>
            </DashboardGrid>
          </ApprovedProvider>
        </FiltersProvider>
      )}
    </main>
  )
}
