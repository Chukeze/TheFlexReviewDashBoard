import { NextRequest, NextResponse } from 'next/server'
import { setApproved } from '@/lib/approvals'
import prisma from '@/lib/prisma'
import { DATA_MODE } from '@/lib/env'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const { reviewId, approved } = (await req.json()) as {
    reviewId: number
    approved: boolean
  }
  if (!reviewId || typeof approved !== 'boolean') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  if (DATA_MODE === 'Mock') {
    const next = await setApproved(reviewId, approved)
    return NextResponse.json(next, { status: 200 })
  } else {
    await prisma.approvedReview.upsert({
      where: { reviewId: Number(reviewId) },
      create: {
        reviewId: reviewId,
        name: 'manual', // placeholder
        approved: !!approved,
        approvedAt: !!approved ? new Date() : null,
      },
      update: {
        approved: !!approved,
        approvedAt: !!approved ? new Date() : null,
      },
    })
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'content-type': 'application/json' },
    })
  }
}
