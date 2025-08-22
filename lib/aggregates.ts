import { Aggregates, NormalizedReview } from './types';

export function buildAggregates(items: NormalizedReview[]): Aggregates {
  const byListing: Aggregates['byListing'] = {};
  const byChannel: Aggregates['byChannel'] = {};
  const catSum: Record<string, { sum: number; count: number }> = {};
  const monthMap: Record<string, { sum: number; count: number }> = {};

  for (const r of items) {
    // by listing
    byListing[r.listingId] ||= { listingName: r.listingName, avg: 0, count: 0, channels: {} };
    byListing[r.listingId].count++;
    byListing[r.listingId].avg += r.overall;
    byListing[r.listingId].channels[r.channel] = (byListing[r.listingId].channels[r.channel] || 0) + 1;

    // by channel
    byChannel[r.channel] ||= { avg: 0, count: 0 };
    byChannel[r.channel].count++;
    byChannel[r.channel].avg += r.overall;

    // by category
    for (const [cat, val] of Object.entries(r.categories)) {
      catSum[cat] ||= { sum: 0, count: 0 };
      catSum[cat].sum += val;
      catSum[cat].count++;
    }

    // monthly timeline
    const month = r.submittedAt.slice(0, 7); // YYYY-MM
    monthMap[month] ||= { sum: 0, count: 0 };
    monthMap[month].sum += r.overall;
    monthMap[month].count++;
  }

  for (const k of Object.keys(byListing)) {
    byListing[k].avg = Number((byListing[k].avg / Math.max(1, byListing[k].count)).toFixed(2));
  }
  for (const k of Object.keys(byChannel)) {
    byChannel[k].avg = Number((byChannel[k].avg / Math.max(1, byChannel[k].count)).toFixed(2));
  }

  const byCategory: Aggregates['byCategory'] = {};
  for (const [cat, s] of Object.entries(catSum)) {
    byCategory[cat] = { avg: Number((s.sum / Math.max(1, s.count)).toFixed(2)), count: s.count };
  }

  const timelineMonthly = Object.entries(monthMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, s]) => ({ month, avg: Number((s.sum / Math.max(1, s.count)).toFixed(2)), count: s.count }));

  return { byListing, byChannel, byCategory, timelineMonthly };
}
