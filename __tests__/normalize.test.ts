import { normalizeHostawayReviews } from '@/lib/utils';
import type { HostawayReview } from '@/lib/types';

const sample: HostawayReview[] = [{
  id: 1,
  type: 'guest-to-host',
  status: 'published',
  rating: null,
  publicReview: 'Great!',
  reviewCategory: [{ category: 'cleanliness', rating: 8 }, { category: 'communication', rating: 10 }],
  submittedAt: '2024-05-01 12:00:00',
  guestName: 'Alex',
  listingName: 'Test Listing',
  channel: 'airbnb'
}];

test('normalizes and computes overall score', () => {
  const out = normalizeHostawayReviews(sample);
  expect(out[0].overall).toBe(9);
  expect(out[0].overall).toBe(4.5);
  expect(out[0].listingName).toBe('test-listing');
  expect(out[0].channel).toBe('airbnb');
});
