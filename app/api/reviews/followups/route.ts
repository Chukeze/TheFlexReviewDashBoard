import { NextResponse } from 'next/server'
//import { PrismaClient } from '@/generated/prisma'
//import { PrismaClient } from '@/prisma/client'
import prisma from '@/lib/prisma';
import { followUpCreateSchema } from '@/validators/followUps'

//const prisma = new PrismaClient()
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
    console.log('Received follow-up creation request:', json)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = followUpCreateSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { term, reviewId, issueId, notes } = parsed.data

  try {
    const created = await prisma.followUps.create({
      data: {
        term,
        reviewId: reviewId ?? 0,        
        issueId: issueId,
        content: notes ?? '',
        completed: false, // if you use an enum, e.g. FollowUpStatus, set the enum value
        createdAt: new Date().toISOString(),
        closedAt: null,
      },
    });

    // Return minimal payload the UI needs
    return NextResponse.json(
      {
        id: created.id,
        term: created.term,
        reviewId: created.reviewId,
        issueId: created.issueId,
        content: created.content,
        completed: created.completed,
        createdAt: created.createdAt,
        closedAt: created.closedAt ?? null,
      },
      { status: 201 }
    )
  } catch (err: any) {
    // Hide internal details but log on server
    console.error('POST /api/followups error:', err)
    return NextResponse.json(
      { error: 'Could not create follow-up' },
      { status: 500 }
    )
  }
}
