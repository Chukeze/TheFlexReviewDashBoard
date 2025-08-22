import { NextRequest } from 'next/server';
import { readApprovalMap, writeApprovalMap } from '@/lib/approvalStore';

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  const body = await req.json().catch(() => ({}));
  const approved = !!body.approved;
  const map = readApprovalMap();
  map[id] = approved;
  writeApprovalMap(map);
  return new Response(JSON.stringify({ id, approved }), { headers: { 'Content-Type': 'application/json' } });
}
