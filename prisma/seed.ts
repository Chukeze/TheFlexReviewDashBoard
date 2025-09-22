import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
//import { PrismaClient } from '@prisma/client/extension'
import { PrismaClient, $Enums, Prisma } from '@/app/generated/prisma'

const prisma = new PrismaClient()

// ---- helpers copied to match your app's logic ----
// Same slugify/toISO/clamp you already use:contentReference[oaicite:10]{index=10}
const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const toISO = (s: string) => (s.includes('Z') ? s : s.replace(' ', 'T') + 'Z')
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v))

const d1 = (value: number | null | undefined) =>
  value == null ? undefined : new Prisma.Decimal(value.toFixed(1))
const d2 = (value: number) => new Prisma.Decimal(value.toFixed(2))

// ---- raw file types (shape of your mock JSON) ----
type RawCategory = { category: string; rating: number }
type RawReview = {
  id: number | string
  type: 'guest-to-host' | 'host-to-guest'
  status: 'published' | 'hidden'
  rating: number | null
  publicReview: string
  reviewCategory: RawCategory[]
  submittedAt: string
  guestName: string
  listingName: string
  channel?:
    | 'airbnb'
    | 'booking'
    | 'vrbo'
    | 'direct'
    | 'google'
    | 'hostaway'
    | 'expedia'
}

async function main() {
  // Adjust path if you keep the file elsewhere
  const file = path.join(
    process.cwd(),
    'data',
    'mock-hostaway-reviews.json'
  )
  const raw = JSON.parse(await fs.readFile(file, 'utf-8')) as {
    status: string
    result: RawReview[]
  }

  for (const r of raw.result) {
    // 1) Upsert Listing by its slug (slug is unique; model is Listing but db table is mapped to "Property")
    const slug = slugify(r.listingName || 'unknown-listing')
    const listing = await prisma.listing.upsert({
      where: { slug },
      create: { slug, name: r.listingName || 'Unknown Listing' },
      update: { name: r.listingName || 'Unknown Listing' },
      select: { id: true },
    })

    // 2) Normalize enums to your TS enum identifiers
    const channel: $Enums.Channel = (r.channel ?? 'hostaway') as $Enums.Channel
    const reviewType: $Enums.ReviewType =
      r.type === 'guest-to-host' ? 'guest_to_host' : 'host_to_guest'
    const status: $Enums.ReviewStatus =
      r.status === 'published' ? 'PUBLISHED' : 'HIDDEN'

    // 3) Normalize category scores and compute overall5
    const cats = (r.reviewCategory ?? []).map((c) => {
      const s10 = typeof c.rating === 'number' ? clamp(c.rating, 0, 10) : 0
      return {
        name: c.category.trim(),
        s10,
        s5: clamp(s10 / 2, 0, 5),
      }
    })

    let overall5Num = 0
    if (typeof r.rating === 'number') {
      overall5Num = clamp(r.rating / 2, 0, 5)
    } else if (cats.length) {
      const mean10 = cats.reduce((acc, c) => acc + c.s10, 0) / cats.length
      overall5Num = clamp(mean10 / 2, 0, 5)
    }

    // 4) Hash raw payload for audit/dedupe
    const payloadHash = crypto
      .createHash('sha256')
      .update(JSON.stringify(r))
      .digest('hex')

    // 5) Upsert Review using your @@unique([sourceSystem, sourceReviewId, channel])
    const review = await prisma.review.upsert({
      where: {
        sourceSystem_sourceReviewId_channel: {
          sourceSystem: 'hostaway',
          sourceReviewId: String(r.id),
          channel,
        },
      },
      create: {
        sourceSystem: 'hostaway',
        sourceReviewId: String(r.id),
        channel,
        listingId: listing.id, // <-- Int FK, not a slug
        rating10: d1(r.rating ?? undefined), // Decimal(4,1)
        overall5: d2(overall5Num), // Decimal(3,2), required
        type: reviewType,
        publicReview: r.publicReview || '',
        submittedAt: new Date(toISO(r.submittedAt)),
        guestName: r.guestName || 'Guest',
        listingName: r.listingName || 'Unknown Listing',
        status,
        raw: {
          create: {
            payload: r as unknown as Prisma.InputJsonValue,
            payloadHash,
          },
        },
      },
      update: {
        listingId: listing.id,
        rating10: d1(r.rating ?? undefined),
        overall5: d2(overall5Num),
        type: reviewType,
        publicReview: r.publicReview || '',
        submittedAt: new Date(toISO(r.submittedAt)),
        guestName: r.guestName || 'Guest',
        listingName: r.listingName || 'Unknown Listing',
        status,
        raw: {
          upsert: {
            update: {
              payload: r as unknown as Prisma.InputJsonValue,
              payloadHash,
            },
            create: {
              payload: r as unknown as Prisma.InputJsonValue,
              payloadHash,
            },
          },
        },
      },
      select: { id: true },
    })

    // 6) Upsert Categories by name + their scores in the join table
    for (const c of cats) {
      const category = await prisma.category.upsert({
        where: { name: c.name },
        create: { name: c.name },
        update: {},
        select: { id: true },
      })

      await prisma.reviewCategoryScore.upsert({
        where: {
          reviewId_categoryId: {
            reviewId: review.id,
            categoryId: category.id,
          },
        },
        create: {
          reviewId: review.id,
          categoryId: category.id,
          score10: d1(c.s10), // Decimal(4,1)
          score5: d2(c.s5), // Decimal(3,2)
        },
        update: {
          score10: d1(c.s10),
          score5: d2(c.s5),
        },
      })
    }
  }

  console.log('Seed complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => prisma.$disconnect())
