import { getApprovedIds } from '@/lib/approvals';
import { DATA_MODE } from '@/lib/env';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs'

export async function GET() {
  if (DATA_MODE === 'Mock') {
    const ids = await getApprovedIds()
    return NextResponse.json({ approved: [...ids] })
  }
  // In real mode, fetch from the database
  const approvals = await prisma.approvedReview.findMany({
    where: { approved: true },
    select: { reviewId: true },
  });
  const ids = approvals.map(a => a.reviewId.toString());
  return NextResponse.json({ approved: ids });
}