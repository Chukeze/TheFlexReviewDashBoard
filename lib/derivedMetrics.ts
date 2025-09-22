import type {
  Aggregates,
  DerivedMetrics,
  Review,
  PerListing,
  HeatRow,
  MonthChanPoint,
  TTRPair,
  TTRSummary,
} from '@/lib/types'
import {
  mean,
  std,
  median,
  bayesianScore,
  lastNDays,
  daysBetween,
  findKeyword,
  inCurrentWindow,
  now,
  MS_DAY,
} from '@/lib/utils'

export type TimeWindow = {
  hasCustomRange: boolean
  hasPreset: boolean
  presetWindowDays: 30 | 60 | 90 | null
  from: string
  to: string
}

/** Build derived metrics from reviews that are already filtered. */
export function deriveMetrics(
  reviews: Review[],
  approved: Set<string>,
  window: TimeWindow
): DerivedMetrics {
  // map listingId -> reviews (chronological)
  const reviewsByListing = new Map<string, Review[]>()
  for (const r of reviews) {
    if (!reviewsByListing.has(r.listingId))
      reviewsByListing.set(r.listingId, [])
    reviewsByListing.get(r.listingId)!.push(r)
  }
  for (const arr of reviewsByListing.values())
    arr.sort(
      (a, b) =>
        new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    )

  const globalAvg = mean(reviews.map((r) => r.overall))

  const perListing: PerListing[] = Array.from(reviewsByListing.entries()).map(
    ([id, arr]) => {
      const arr30 = lastNDays(arr, 30)
      const arr60 = lastNDays(arr, 60)
      const arr90 = lastNDays(arr, 90)
      const avg90 = mean(arr90.map((x) => x.overall))
      const vAll = arr.length
      const RAll = mean(arr.map((x) => x.overall))
      const bayes = bayesianScore(RAll, vAll, globalAvg, 10)
      const pct5 = arr90.length
        ? arr90.filter((x) => x.overall >= 4.5).length / arr90.length
        : 0
      const pct12 = arr90.length
        ? arr90.filter((x) => x.overall <= 2.0).length / arr90.length
        : 0
      const freshness = arr.length
        ? Math.min(
            ...arr.map((x) =>
              Math.round((now() - new Date(x.submittedAt).getTime()) / MS_DAY)
            )
          )
        : Infinity
      const vol90Std = std(arr90.map((x) => x.overall))
      const approvedRecent90 = arr.filter(
        (x) =>
          approved.has(x.id) &&
          now() - new Date(x.submittedAt).getTime() <= 90 * MS_DAY
      ).length
      return {
        listingId: id,
        listingName: arr[0]?.listingName || id,
        avg90,
        vol30: arr30.length,
        vol60: arr60.length,
        vol90: arr90.length,
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
  const peersAvg90 = perListing.map((p) => p.avg90)
  const peersFresh = perListing.map((p) => p.freshness)
  const peersVol90 = perListing.map((p) => p.vol90)
  const peersPct5 = perListing.map((p) => p.pct5)

  const coverageMin = 2
  const coverageCount = perListing.filter(
    (p) => p.approvedRecent90 >= coverageMin
  ).length

  // Build time‑windowed subset for timeline/volume/channel views
  const inWin = (iso: string) =>
    inCurrentWindow(
      iso,
      window.hasCustomRange,
      window.hasPreset,
      window.presetWindowDays,
      window.from,
      window.to
    )
  const reviewsInWindow = reviews.filter((r) => inWin(r.submittedAt))

  // (a) Monthly timeline avg
  const acc: Record<string, { sum: number; n: number }> = {}
  for (const r of reviewsInWindow) {
    const m = r.submittedAt.slice(0, 7)
    const a = (acc[m] ||= { sum: 0, n: 0 })
    a.sum += r.overall
    a.n += 1
  }
  const timelineMonthlyWindowed = Object.entries(acc)
    .map(([month, { sum, n }]) => ({
      month,
      avg: sum / Math.max(1, n),
      count: n,
    }))
    .sort((a, b) => a.month.localeCompare(b.month))

  // (b) Rating distribution
  const bins = [0, 1, 2, 3, 4, 5]
  const ratingDistribution = bins.map(
    (b) =>
      reviewsInWindow.filter((r) => r.overall >= b && r.overall < b + 1).length
  )

  // (c) volume by channel month
  const monthChan: Record<string, Record<string, number>> = {}
  for (const r of reviewsInWindow) {
    const m = r.submittedAt.slice(0, 7)
    monthChan[m] ||= {}
    monthChan[m][r.channel] = (monthChan[m][r.channel] || 0) + 1
  }
  const monthChanPoints: MonthChanPoint[] = Object.entries(monthChan)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, counts]) => ({ month, counts }))

  // (d) volume per listing
  const volReviewsByListing = Array.from(reviewsByListing.entries())
    .map(([id, arr]) => {
      const count = arr.filter((r) => inWin(r.submittedAt)).length
      return { listingId: id, name: arr[0]?.listingName || id, count }
    })
    .sort((a, b) => b.count - a.count)

  // (e) heatmap by category (cur vs prior equal window)
  const effW =
    window.hasCustomRange && window.from && window.to
      ? Math.max(
          1,
          Math.ceil(
            (new Date(window.to).getTime() - new Date(window.from).getTime()) /
              MS_DAY
          )
        )
      : window.presetWindowDays ?? 90
  const fromTs = window.from ? new Date(window.from).getTime() : null
  const toTs = window.to ? new Date(window.to).getTime() : null
  const isInCurrent = (ts: number) => {
    if (window.hasCustomRange) {
      if (fromTs && ts < fromTs) return false
      if (toTs && ts > toTs) return false
      return true
    }
    return now() - ts <= effW * MS_DAY
  }
  const isInPrior = (ts: number) => {
    if (window.hasCustomRange && fromTs != null) {
      return ts >= fromTs - effW * MS_DAY && ts < fromTs
    }
    const d = now() - ts
    return d > effW * MS_DAY && d <= 2 * effW * MS_DAY
  }

  const cats = Array.from(
    new Set(reviews.flatMap((r) => Object.keys(r.categories || {})))
  )
  const heatRows: HeatRow[] = cats.map((cat) => {
    const cells = perListing.map((p) => {
      const arr = reviewsByListing.get(p.listingId) || []
      const cur = arr
        .filter((r) => isInCurrent(new Date(r.submittedAt).getTime()))
        .map((r) => r.categories[cat])
        .filter((v): v is number => typeof v === 'number' && isFinite(v))
      const prev = arr
        .filter((r) => isInPrior(new Date(r.submittedAt).getTime()))
        .map((r) => r.categories[cat])
        .filter((v): v is number => typeof v === 'number' && isFinite(v))
      const curAvg = mean(cur),
        prevAvg = mean(prev)
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

  // (f) TTR pairs
  const pairs: TTRPair[] = []
  for (const [listingId, arr] of reviewsByListing.entries()) {
    const listingName = arr[0]?.listingName || listingId
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
          listingId,
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
  const closed = pairs.filter(
    (p) => typeof p.days === 'number'
  ) as Required<TTRPair>[]
  const ttr: TTRSummary = {
    avgDays: mean(closed.map((p) => p.days)),
    medianDays: median(closed.map((p) => p.days)),
    closedIssues: closed.length,
    openIssues: pairs.length - closed.length,
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
    atRisk: perListing.filter(
      (p) => (p.avg90 && p.avg90 < 4.0) || p.freshness > 45 || p.vol90 < 3
    ),
    monthChanPoints,
    volReviewsByListing,
    ratingDistribution,
    heatRows,
    globalAvg,
    ttr,
    timelineMonthlyWindowed,
  }
}
