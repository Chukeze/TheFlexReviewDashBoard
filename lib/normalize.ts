import { RawReview, NormalizedReview } from './types';
import { slugify, toISO, clamp, STEM } from './utils';

export function normalizeOne(raw: RawReview): NormalizedReview {
  const listingId = slugify(raw.listingName || 'unknown-listing');
  const channel = raw.channel || 'hostaway';
  // Compute overall on 0–5 scale
  let overall = 0;
  if (raw.rating !== null && raw.rating !== undefined) {
    // If Hostaway rating is 0–10, compress to 0–5
    overall = clamp(raw.rating / 2, 0, 5);
  } else if (raw.reviewCategory?.length) {
    const mean10 = raw.reviewCategory.reduce((acc, c) => acc + (c.rating ?? 0), 0) / raw.reviewCategory.length;
    overall = clamp(mean10 / 2, 0, 5);
  }
  const categories: Record<string, number> = {};
  for (const c of raw.reviewCategory || []) {
    // convert each cat 0–10 → 0–5
    categories[c.category] = clamp((c.rating ?? 0) / 2, 0, 5);
  }
  return {
    id: String(raw.id),
    overall: Number(overall.toFixed(2)),
    text: raw.publicReview || '',
    submittedAt: toISO(raw.submittedAt),
    guestName: raw.guestName || 'Guest',
    listingId,
    listingName: raw.listingName,
    channel,
    type: raw.type,
    status: raw.status,
    categories
  };
}

export function normalizeMany(raws: RawReview[]): NormalizedReview[] {
  return raws.map(normalizeOne).sort((a, b) => a.submittedAt.localeCompare(b.submittedAt));
}


export function normalizeWord(w: string): string {
  const base = w.toLowerCase().replace(/[^a-z0-9]/g, '')
  return STEM[base] || base
}

// --- BIGRAM TOKENIZER & PHRASE MATCHING ---
export function normalizePhrase(s: string): string {
  return s.split(/\s+/).map(normalizeWord).filter(Boolean).join(' ');
}