import { getApprovedIds } from '@/lib/approvals';

export async function GET() {
  const set = await getApprovedIds();
  return new Response(JSON.stringify({ approved: Array.from(set) }, null, 2), { headers: { 'content-type': 'application/json' } });
}
