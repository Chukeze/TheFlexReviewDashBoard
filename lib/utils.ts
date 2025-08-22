import { normalizeWord, normalizePhrase } from "./normalize";
import { Review } from "./types";

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function toISO(s: string): string {
  // input format: 'YYYY-MM-DD hh:mm:ss'
  const t = s.replace(' ', 'T');
  // assume UTC if not specified
  return t.endsWith('Z') ? t : t + 'Z';
}

export function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function  normalizeHostawayReviews(raws: any[]): Review[] {
  return raws.map((raw) => {
    const listingId = slugify(raw.listingName || 'unknown-listing');
    const channel = raw.channel || 'hostaway';
    const overall = raw.rating !== null ? clamp(raw.rating / 2, 0, 5) : 0;
    const categories: Record<string, number> = {};
    for (const c of raw.reviewCategory || []) {
      categories[c.category] = clamp((c.rating ?? 0) / 2, 0, 5);
    }
    return {
      id: String(raw.id),
      overall,
      text: raw.publicReview || '',
      submittedAt: toISO(raw.submittedAt),
      guestName: raw.guestName || 'Guest',
      listingId,
      listingName: raw.listingName,
      channel,
      categories
    };
  });
}

export const MS_DAY = 86_400_000;
export const now = () => Date.now();
export const daysSince = (iso: string) => Math.round((now() - new Date(iso).getTime()) / MS_DAY);
export const lastNDays = (r: Review[], d: number) => r.filter(x => (now() - new Date(x.submittedAt).getTime()) <= d * MS_DAY);
export const daysBetween = (a: string, b: string) =>
  Math.max(
    0,
    Math.round((new Date(b).getTime() - new Date(a).getTime()) / MS_DAY)
  )


export function mean(a: number[]) {
  return a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0
}
export function median(a: number[]) { if (!a.length) return 0; const s=[...a].sort((x,y)=>x-y); const n=s.length; return n%2 ? s[(n-1)/2] : (s[n/2-1]+s[n/2])/2; };
export function std(a: number[]) {
  const m = mean(a)
  const v = mean(a.map((x) => (x - m) * (x - m)))
  return Math.sqrt(v)
}
export function zClass(value: number, peers: number[], invert = false) {
  const m = mean(peers),
    s = std(peers) || 1
  const z = invert ? (m - value) / s : (value - m) / s
  if (z <= -5.0) return 'danger-level'
  if (z <= -0.5) return 'warning-level'
  if (z >= 2.8) return 'success-level'
  return ''
}

export function bayesianScore( R: number, v: number, C: number, m = 10) {
  return (v/(v + m)) * R + (m/(v + m)) * C;
}

/** --- ISSUE KEYWORDS for TTR (simple heuristic) --- */
export const ISSUE_KEYWORDS = [
  'clean', 'dirty', 'bathroom', 'shower', 'mold', 'smell', 'odor',
  'wifi', 'wi-fi', 'internet', 'noise', 'noisy', 'loud',
  'check-in', 'check in', 'key', 'lock',
  'heating', 'heater', 'hot', 'cold', 'ac', 'aircon', 'air con', 'air conditioning',
  'bed', 'mattress', 'uncomfortable', 'bugs', 'cockroach', 'communication', 'rude'
];

// Bigram-aware keyword finder (keeps your old API name for compatibility)
export function findKeyword(text?: string): string | null {
  return findIssueKeyword(text);
}



/** --- Issue extraction helpers --- */
export const STOPWORDS = new Set([
  'a','an','the','and','or','but','if','then','else','when','while','for','to','of','in','on','at','by','with','from','as',
  'is','are','was','were','be','been','being','has','have','had','do','does','did','can','could','should','would',
  'this','that','these','those','it','its','we','our','you','your','they','their','i','me','my','he','she','his','her',
  'so','very','too','also','just','not','no','yes','than','more','most','less','least','much','many','some','any','all',
  'there','here','about','into','over','under','again','out','up','down','across','after','before','between','because'
]);

// simple stem/synonym mapping for common hospitality issues
export const STEM: Record<string,string> = {
  'wi-fi':'wifi','wifi':'wifi','internet':'wifi',
  'noisy':'noise','loud':'noise','noise':'noise',
  'dirty':'dirty','cleanliness':'cleanliness',
  'smell':'odor','odour':'odor','odor':'odor',
  'mould':'mold','mold':'mold',
  'bathroom':'bathroom','toilet':'bathroom','shower':'bathroom',
  'check-in':'checkin','checkin':'checkin','check':'check',
  'heating':'heating','heater':'heating',
  'ac':'ac','aircon':'ac','airconditioning':'ac','airconditioner':'ac'
};

/** Tokenize text into unigrams and bigrams, with stopword/stem filtering applied */
export function tokenizeWithBigrams(text?: string): string[] {
  if (!text) return [];
  let t = text.toLowerCase()
    .replace(/\bcheck[-\s]?in\b/g, 'checkin')
    .replace(/\bwi[-\s]?fi\b/g, 'wifi')
    .replace(/[^\w\s]/g, ' ');
  const raw = t.split(/\s+/)
    .map(normalizeWord)
    .filter(w => w && w.length >= 2 && !STOPWORDS.has(w) && !/^\d+$/.test(w));

  // bigrams
  const bigrams: string[] = [];
  for (let i=0; i<raw.length-1; i++) {
    bigrams.push(`${raw[i]} ${raw[i+1]}`);
  }
  return Array.from(new Set([...raw, ...bigrams]));
}

export function findIssueKeyword(text?: string): string | null {
  if (!text) return null
  const tokens = new Set(tokenizeWithBigrams(text))
  // normalize the KEYWORDS the same way
  for (const kw of ISSUE_KEYWORDS) {
    const norm = normalizePhrase(kw)
    if (tokens.has(norm)) return kw
  }
  // fallback: contains raw substring
  const t = text.toLowerCase()
  const hit = ISSUE_KEYWORDS.find((k) => t.includes(k))
  return hit || null
}

export function toggleApproval(id: string, next: boolean, approved?: Set<string>, setApproved?: (s: Set<string>) => void) {
  fetch('/api/reviews/approve', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ reviewId: id, approved: next }),
  })
    .then(() => {
      const copy = new Set(approved)
      if (next) copy.add(id)
      else copy.delete(id)
      if (setApproved) setApproved(copy)
    })
    .catch(() => {})
}


export   function inCurrentWindow(iso: string, hasCustomRange: boolean, hasPreset: boolean, windowDays: number | null, from?: string, to?: string): boolean {
    const timeStamp = new Date(iso).getTime()
    if (hasCustomRange) {
      if (from && timeStamp < new Date(from).getTime()) return false
      if (to && timeStamp > new Date(to).getTime()) return false
      return true
    }
    if (hasPreset && windowDays) {
      return now() - timeStamp <= windowDays * MS_DAY
    }
    return true // no filter neither preset nor dates => no time constraint
  }