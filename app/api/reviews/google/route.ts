import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get('placeId');
  const limit = Number(searchParams.get('limit') || 5);

  if (!placeId) {
    return new Response(JSON.stringify({ error: 'placeId is required' }), { status: 400 });
  }

  if (!apiKey) {
    return new Response(JSON.stringify({
      status: 'disabled',
      reason: 'GOOGLE_PLACES_API_KEY not set',
      hint: 'Set GOOGLE_PLACES_API_KEY in your environment to enable live Google Reviews fetch.'
    }, null, 2), { status: 501 });
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'reviews,user_ratings_total,rating');
  url.searchParams.set('key', apiKey);

  const res = await fetch(url.toString());
  const json = await res.json();
  const reviews = (json.result?.reviews || []).slice(0, limit).map((r: any, idx: number) => ({
    id: String(r.time || idx),
    type: 'guest-to-host',
    status: 'published',
    submittedAtISO: new Date(r.time * 1000).toISOString(),
    timeBucket: new Date(r.time * 1000).toISOString().slice(0, 7),
    guestName: r.author_name || 'Google user',
    listingName: 'Google Place',
    listingSlug: 'google-place',
    channel: 'google',
    text: r.text || '',
    categoryScores: {},
    overallScore10: (r.rating / 5) * 10,
    stars5: r.rating,
    approved: false
  }));

  return new Response(JSON.stringify({ source: 'google', count: reviews.length, reviews }, null, 2), {
    headers: { 'Content-Type': 'application/json' }
  });
}
