import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { toNormalized } from '@/lib/utils'
import { buildAggregates } from '@/lib/aggregates'

//get a property either by id or slug and then query the listing table to get the listing
//if the table doesn't include the reviews for the property it then queries the reviews table
//to get reviews for the property then it will filter the reviews for that property based on
//if that review has been approved or not

export async function GET(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  console.log('PROPERTY ROUTE REQ:', req)
  console.log('PROPERTY ROUTE PARAMS:', params)
  const raw = await params?.key?.trim()
  console.log('PROPERTY ROUTE KEY:', raw)
  if (!raw) {
    return NextResponse.json({ error: 'No slug provided' }, { status: 400 })
  }

/*  const bySlug = await prisma.listing.findUnique({ where: { slug: raw } })
  const listing =
    bySlug ??
    (/^\d+$/.test(raw)
      ? await prisma.listing.findUnique({ where: { id: Number(raw) } })
      : null)
*/
  const where = /^\d+$/.test(raw) ? { id: Number(raw) } : { slug: raw }
  //  listing ?? ()

  try {
    const base = await prisma.listing.findFirst({
      where: where,
      include: {
        amenities: { include: { amenity: true } },
        policies: { include: { policy: true } },
        rules: { include: { rule: true } },
      },
    })

    if (!base) {
      return NextResponse.json(
        { error: 'Listing not found' },
        {
          status: 404,
        }
      )
    }

    let dbReviews = await prisma.review.findMany({
      where: {
        listingId: base.id,
        ApprovedReview: {
          approved: true,
        },
      },
      include: {
        ApprovedReview: true,
        ReviewCategoryScore: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        submittedAt: 'desc',
      },
    })

    if (dbReviews.length === 0) {
      dbReviews = await prisma.review.findMany({
        where: {
          listingId: base.id,
          status: 'PUBLISHED',
        },
        include: {
          ReviewCategoryScore: {
            include: {
              category: true,
            },
          },
          ApprovedReview: true,
        },
        orderBy: {
          submittedAt: 'desc',
        },
      })
    }

    const reviews = dbReviews.map((rev) => toNormalized(rev, base))

    const aggregates = buildAggregates(reviews)

    const listing = {
      id: base.id,
      slug: base.slug,
      name: base.name,
      address: base.address,
      city: base.city,
      state: base.state,
      country: base.country,
      propertyDesc: base.propertyDesc,
      amenities: base.amenities.map((a) => a.amenity),
      policies: base.policies.map((p) => p.policy),
      rules: base.rules.map((r) => r.rule),
    }
    return NextResponse.json(
      {
        listing,
        reviews,
        aggregates,
      },
      {
        headers: {
          'cache-control': 'no-store',
        },
      }
    )
  } catch (err: any) {
    console.error('Error fetching property:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST() {
  return NextResponse.json({ ok: true })
}

export async function PUT() {
  return NextResponse.json({ ok: true })
}
