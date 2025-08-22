export type RawCategory = { category: string; rating: number }
export type RawReview = {
  id: number | string
  type: 'host-to-guest' | 'guest-to-host' | string
  status: 'published' | 'hidden' | string
  rating: number | null // 0–10 or null
  publicReview: string
  reviewCategory: RawCategory[]
  submittedAt: string // e.g., '2020-08-21 22:45:14'
  guestName: string
  listingName: string
  channel?: string // e.g., 'airbnb' | 'booking' | 'vrbo'
}

export type NormalizedReview = {
  id: string
  overall: number // 0–5 scale
  text: string
  submittedAt: string // ISO 8601
  guestName: string
  listingId: string // slug
  listingName: string
  channel: string
  type: string
  status: string
  categories: Record<string, number> // 0–5 per category
}
export type HostawayReview = {
  id: number
  type: 'guest-to-host' | 'host-to-guest'
  status: 'published' | 'hidden'
  rating: number | null // 0–10 or null
  publicReview: string
  reviewCategory: { category: string; rating: number }[]
  submittedAt: string // e.g., '2024-05-01 12:00:00'
  guestName: string
  listingName: string
  channel?: string // e.g., 'airbnb'
}

export type ApiResponse = {
  reviews: NormalizedReview[]
  aggregates: Aggregates
}

export type ChartType =
  | 'trend'
  | 'channelVolume'
  | 'volPerListing'
  | 'ratingDist'
  | 'categoryHeatmap'

export type Review = {
  id: string
  overall: number
  submittedAt: string
  guestName: string
  listingId: string
  listingName: string
  channel: string
  text: string
  categories: Record<string, number>
}

export type Aggregates = {
  reviewsByListing: Record<
    string,
    {
      listingName: string
      avg: number
      count: number
      channels: Record<string, number>
    }
  >
  byChannel: Record<string, { avg: number; count: number }>
  byCategory: Record<string, { avg: number; count: number }>
  timelineMonthly: Array<{ month: string; avg: number; count: number }>
}

export type DerivedMetrics = {
  perListing: PerListing[]
  peersAvg90: number[]
  peersFresh: number[]
  peersVol90: number[]
  peersPct5: number[]
  coverageCount: number
  coverageMin: number
  atRisk: PerListing[]
  monthChanPoints: MonthChanPoint[]
  volReviewsByListing: Array<{ listingId: string; name: string; count: number }>
  ratingDistribution: number[]
  heatRows: HeatRow[]
  globalAvg: number
  ttr: TTRSummary
}

export type PerListing = {
  listingId: string
  listingName: string
  avg90: number
  vol30: number
  vol60: number
  vol90: number
  pct5: number
  pct12: number
  freshness: number
  vAll: number
  RAll: number
  bayes: number
  vol90Std: number
  approvedRecent90: number
}

export type HeatRow = {
  category: string
  catMean: number
  catStd: number
  cells: Array<{
    listingId: string
    listingName: string
    curAvg: number
    delta: number
  }>
}
export type MonthChanPoint = { month: string; counts: Record<string, number> }

export type TTRPair = {
  listingId: string
  listingName: string
  keyword: string
  issueId: string
  issueAt: string
  issueText: string
  recoveryId?: string
  recoveryAt?: string
  days?: number
}
export type TTRSummary = {
  avgDays: number
  medianDays: number
  closedIssues: number
  openIssues: number
  pairs: TTRPair[]
}

export type IssueRow = {
  term: string
  count: number // total mentions
  listingsImpacted: number // unique listings
  topListingId: string
  topListingName: string
  topListingCount: number
  perChannel?: Record<string, number>
  last3?: Array<{ month: string; count: number }>
}
