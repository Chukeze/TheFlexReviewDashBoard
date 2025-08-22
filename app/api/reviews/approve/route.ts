import { NextRequest } from 'next/server';
import { setApproved } from '@/lib/approvals';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.reviewId !== 'string' || typeof body.approved !== 'boolean') {
    return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
  }
  await setApproved(body.reviewId, body.approved);
  return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } });
}
