'use client'
import { normalizeWord } from '@/lib/normalize'
import { Review, IssueRow } from '@/lib/types'
import { MS_DAY, now, STOPWORDS, tokenizeWithBigrams } from '@/lib/utils'
import Link from 'next/link'
import { useMemo, useState } from 'react'


const CANON_RULES: Array<{
    when: (set: Set<string>) => boolean
    add: (set: Set<string>) => string
    prune?: string[]               // tokens to drop if rule matched
  }> = [
    {
      // "hot water" + ("bathroom" or "shower") -> "no hot water for shower"
      when: s => s.has('hot water') && (s.has('bathroom') || s.has('shower')),
      add:  _ => 'No hot water for shower',
      prune: ['hot', 'water', 'hot water', 'bathroom', 'shower'],
    },
    {
      when: s => s.has('hot water'),
      add:  _ => 'No hot water',
      prune: ['hot', 'water', 'hot water'],
    },
    {
      when: s => s.has('checkin') || s.has('check-in'),
      add:  _ => 'Check‑in problems',
      prune: ['checkin','check-in','check'],
    },
    { when: s => s.has('wifi'), add: _ => 'Wi‑Fi' },
    { when: s => s.has('noise'), add: _ => 'Noise' },
    { when: s => s.has('heating'), add: _ => 'Heating' },
    { when: s => s.has('ac'), add: _ => 'Air conditioning' },
  ];

  const DROP_GENERIC = new Set([
    'good',
    'morning',
    'evening',
    'day',
    'nice',
    'great',
  ])

  function condenseTokens(tokens: string[]): string[] {
    // start with bigrams + unigrams from your tokenizer
    const set = new Set(tokens)

    const out = new Set<string>()
    for (const rule of CANON_RULES) {
      if (rule.when(set)) {
        out.add(rule.add(set))
        for (const p of rule.prune || []) set.delete(p)
      }
    }

    // keep low categories (e.g., 'cleanliness') and any useful leftovers
    for (const t of set) {
      if (DROP_GENERIC.has(t)) continue
      // prefer bigrams or category names; filter short noise
      if (t.includes(' ') || t.length >= 3) out.add(t)
    }
    return Array.from(out)
  }


function inWindow(
  tsISO: string,
  windowDays: number | null,
  from?: string,
  to?: string
) {
  const ts = new Date(tsISO).getTime()
  if (from) {
    if (ts < new Date(from).getTime()) return false
  }
  if (to) {
    if (ts > new Date(to).getTime()) return false
  }
  if (windowDays) return now() - ts <= windowDays * MS_DAY
  // no preset and no dates => all time
  return !(from || to) ? true : true
}

function monthKey(iso: string) {
  return iso.slice(0, 7)
}

function extractTopIssues(
  reviews: Review[],
  windowDays: number | null,
  from?: string,
  to?: string,
  onlyChannel?: string
): IssueRow[] {
  // Filter to LOW ratings in the current time window
  const low = reviews.filter((r) => {
    if (onlyChannel && r.channel !== onlyChannel) return false
    const ok = r.overall < 4 && inWindow(r.submittedAt, windowDays, from, to)
    return ok
  })

  // 2) Aggregate terms
  const termCount = new Map<string, number>()
  const termListing = new Map<
    string,
    Map<string, { name: string; count: number }>
  >()
  const termChannel = new Map<string, Map<string, number>>()
  const termMonthly = new Map<string, Map<string, number>>()

  const NEGATORS =
    /\b(no|not|without|wasn'?t|didn'?t|couldn'?t|broken|out of|lack of)\b/i;
  const POSITIVE_FILTERS = new Set(['good','great','nice','love','morning','afternoon','evening','ok','okay'])
  const ISSUE_LEXICON = new Set(['wifi','internet','checkin','check-in','noise','noisy','loud','dirty','cleanliness','smell','odor','mold','mould','bathroom','shower','heating','heater','hot','cold','key','lock','ac','aircon','air conditioning'])
  const phraseify = (t:string, raw: string) => {
    const hasHotWater = /\bhot water\b/i.test(raw);
    const showerLike = /\b(shower|bathroom)\b/i.test(raw);
    if (hasHotWater && showerLike) return 'No hot water for shower';
  }
  for (const r of low) {
    // text tokens (with bigrams)
    const toks = tokenizeWithBigrams(r.text)
    const raw = r.text || ''

    // category-aware: add low categories (<=3.0) as tokens too
    for (const [cat, v] of Object.entries(r.categories || {})) {
      if (typeof v === 'number' && v <= 3.0) {
        toks.push(cat.toLowerCase())
      }
    }

    const uniq = Array.from(new Set(condenseTokens(toks))).filter( t => {
        if (POSITIVE_FILTERS.has(t)) return false; // skip positive noise
        const isBigram = t.includes(' ')
        const hasIssueWord = t.split(' ').some(w => ISSUE_LEXICON.has(normalizeWord(w)))
        const looksNeg = NEGATORS.test(raw)
        return (isBigram && hasIssueWord) || ISSUE_LEXICON.has(normalizeWord(t)) || !(STOPWORDS.has(t) || /^\d+$/.test(t))
    }).map( t => phraseify(t, raw) || t)
    const m = monthKey(r.submittedAt)

    for (const term of uniq) {
      // total
      termCount.set(term, (termCount.get(term) || 0) + 1)

      // listings
      if (!termListing.has(term)) termListing.set(term, new Map())
      const lm = termListing.get(term)!
      const entry = lm.get(r.listingId) || { name: r.listingName, count: 0 }
      entry.count += 1
      lm.set(r.listingId, entry)

      // channel
      if (!termChannel.has(term)) termChannel.set(term, new Map())
      const cm = termChannel.get(term)!
      cm.set(r.channel, (cm.get(r.channel) || 0) + 1)

      // monthly trend
      if (!termMonthly.has(term)) termMonthly.set(term, new Map())
      const mm = termMonthly.get(term)!
      mm.set(m, (mm.get(m) || 0) + 1)
    }
  }

  // Build rows and rank
  const rows: IssueRow[] = []
  for (const [term, count] of termCount.entries()) {
    if (count < 2) continue // skip 1-offs / noise
    const lm = termListing.get(term)!
    const top = Array.from(lm.entries()).sort(
      (a, b) => b[1].count - a[1].count
    )[0]


    // last-3 months trend snapshot (chronological)
    const mm = termMonthly.get(term) || new Map()
    const months = Array.from(mm.keys()).sort()
    const last3Keys = months.slice(-3)
    const last3 = last3Keys.map((k) => ({ month: k, count: mm.get(k)! }))

    rows.push({
      term,
      count,
      listingsImpacted: lm.size,
      topListingId: top?.[0] || '',
      topListingName: top?.[1]?.name || '',
      topListingCount: top?.[1]?.count || 0,
      perChannel: Object.fromEntries(termChannel.get(term) || []),
      last3,
    })
  }

  // Sort by total mentions desc, then by listings impacted
  rows.sort(
    (a, b) => b.count - a.count || b.listingsImpacted - a.listingsImpacted
  )
  return rows.slice(0, 5)
}

function TrendCells({
  last3,
}: {
  last3?: Array<{ month: string; count: number }>
}) {
  if (!last3?.length) return <span className="small muted">—</span>
  const [a, b, c] =
    last3.length === 3
      ? last3
      : [
          { month: '', count: 0 },
          { month: '', count: 0 },
          last3[last3.length - 1],
        ]
  const arrow =
    a && c ? (c.count > a.count ? '▲' : c.count < a.count ? '▼' : '→') : ''
  return (
    <span className="small">
      {a?.count ?? 0} → {b?.count ?? 0} → {c?.count ?? 0}{' '}
      <span className="muted">{arrow}</span>
    </span>
  )
}



export default function IssueSummaryCard({
  reviews,
  windowDays,
  from,
  to,
}: {
  reviews: Review[]
  windowDays: number | null
  from?: string
  to?: string
}) {
  // build channel list from data
  const channels = useMemo(
    () => Array.from(new Set(reviews.map((r) => r.channel))).sort(),
    [reviews]
  )
  const [activeChannel, setActiveChannel] = useState<string>('') // '' = All

  const issues = useMemo(
    () =>
      extractTopIssues(
        reviews,
        windowDays,
        from,
        to,
        activeChannel || undefined
      ),
    [reviews, windowDays, from, to, activeChannel]
  )
  return (
    <div className="card" id='issue-summary-card' style={{ minWidth: 0 }}>
      <div
        className="row"
        style={{ justifyContent: 'space-between', alignItems: 'baseline' }}
      >
        <h3 style={{ marginTop: 0 }}>
          Top Issues (ratings &lt; 4
          {windowDays
            ? `, last ${windowDays}d`
            : from || to
            ? `, custom range`
            : ''}
          )
        </h3>
        <div className="chips">
          <button
            className={`chip ${activeChannel === '' ? 'active' : ''}`}
            onClick={() => setActiveChannel('')}
          >
            All
          </button>
          {channels.map((c) => (
            <button
              key={c}
              className={`chip ${activeChannel === c ? 'active' : ''}`}
              onClick={() => setActiveChannel((prev) => (prev === c ? '' : c))}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {!issues.length ? (
        <p className="muted">
          No substantive issues detected in the current filters.
        </p>
      ) : (
        <table className="table" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: '28%' }}>Issue</th>
              <th>Mentions</th>
              <th>Listings</th>
              <th>Top Listing</th>
              <th>Trend (last 3 mo)</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((row) => (
              <tr key={row.term}>
                <td>
                  <strong>{row.term}</strong>
                </td>
                <td>{row.count}</td>
                <td
                  className={row.listingsImpacted >= 2 ? 'warning-level' : ''}
                >
                  {row.listingsImpacted}
                </td>
                <td>
                  {row.topListingName ? (
                    <Link href={`/properties/${row.topListingId}`}>
                      {row.topListingName}
                    </Link>
                  ) : (
                    '—'
                  )}{' '}
                  <span className="small muted">({row.topListingCount})</span>
                </td>
                <td>
                  <TrendCells last3={row.last3} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p className="small muted" style={{ marginTop: 8 }}>
        Bigram &amp; category‑aware: we merge phrase tokens (e.g.,{' '}
        <em>hot water</em>) and low category scores (≤3.0) into the same
        frequency table; use the channel chips to see underperformance by
        source.
      </p>
    </div>
  )
}
