/* prisma/seed.ts */
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { PrismaClient, Prisma, $Enums } from '@prisma/client'

const prisma = new PrismaClient()

/* ---------- Helpers (same spirit as your current seed) ---------- */
const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v))

const toISO = (s: string) => (s.includes('Z') ? s : s.replace(' ', 'T') + 'Z')

const d1 = (v: number | null | undefined) => {
  if (v == null || Number.isNaN(v)) return undefined
  const vv = clamp(v, 0, 10)
  return new Prisma.Decimal(vv.toFixed(1))
}
const d2 = (v: number) => new Prisma.Decimal(clamp(v, 0, 5).toFixed(2))

/* ---------- Raw file types (your mock JSON shape) ---------- */
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

/* ---------- Simple catalogs (you can tweak these) ---------- */
const DEFAULT_AMENITIES = [
  'Internet',
  'Wireless',
  'Kitchen',
  'Washing Machine',
  'Hair Dryer',
  'Heating',
  'Smoke detector',
  'Carbon Monoxide Detector',
  'Essentials',
]

const DEFAULT_POLICIES = [
  'Cancellation: Flexible (48h)',
  'Refund: Partial after 7 days',
  'Security Deposit: $250 hold',
]

const DEFAULT_RULES = [
  'No smoking',
  'No pets',
  'No parties or events',
  'Quiet hours 22:00–07:00',
  'Self check‑in with smart lock',
]

/** Optional: override defaults for specific listings (match by name substring) */
const LISTING_OVERRIDES: Array<{
  match: string
  amenities?: string[]
  policies?: string[]
  rules?: string[]
}> = [
  {
    match: 'Soho Studio',
    amenities: [...DEFAULT_AMENITIES, 'Air conditioning'],
    policies: ['Cancellation: Moderate (5 days)', ...DEFAULT_POLICIES.slice(1)],
  },
  {
    match: 'Borough Market',
    rules: ['No smoking', 'No pets', 'Quiet hours 21:00–07:00'],
  },
]

function pickAssignmentFor(listingName: string) {
  const found = LISTING_OVERRIDES.find((o) =>
    listingName.toLowerCase().includes(o.match.toLowerCase())
  )
  return {
    amenities: found?.amenities ?? DEFAULT_AMENITIES,
    policies: found?.policies ?? DEFAULT_POLICIES,
    rules: found?.rules ?? DEFAULT_RULES,
  }
}

/* ---------- Ensure catalog rows exist; cache IDs by name ---------- */
async function ensureAmenityIds(names: string[]) {
  const map = new Map<string, number>()
  await Promise.all(
    names.map(async (name) => {
      const row = await prisma.amenity.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      map.set(name, row.id)
    })
  )
  return map
}
async function ensurePolicyIds(names: string[]) {
  const map = new Map<string, number>()
  await Promise.all(
    names.map(async (name) => {
      const row = await prisma.policy.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      map.set(name, row.id)
    })
  )
  return map
}
async function ensureRuleIds(names: string[]) {
  const map = new Map<string, number>()
  await Promise.all(
    names.map(async (name) => {
      const row = await prisma.rule.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      map.set(name, row.id)
    })
  )
  return map
}

/* ---------- Attach catalogs to a listing (idempotent via upsert) ---------- */
async function attachCatalogsToListing(
  listingId: number,
  assignment: { amenities: string[]; policies: string[]; rules: string[] },
  caches: {
    amenityIds: Map<string, number>
    policyIds: Map<string, number>
    ruleIds: Map<string, number>
  }
) {
  // Amenities
  for (const name of assignment.amenities) {
    let amenityId = caches.amenityIds.get(name)
    if (!amenityId) {
      const row = await prisma.amenity.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      amenityId = row.id
      caches.amenityIds.set(name, amenityId)
    }
    await prisma.propertyAmenities.upsert({
      where: { listingId_amenityId: { listingId, amenityId } },
      update: {},
      create: { listingId, amenityId },
    })
  }

  // Policies
  for (const name of assignment.policies) {
    let policyId = caches.policyIds.get(name)
    if (!policyId) {
      const row = await prisma.policy.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      policyId = row.id
      caches.policyIds.set(name, policyId)
    }
    await prisma.propertyPolicies.upsert({
      where: { listingId_policyId: { listingId, policyId } },
      update: {},
      create: { listingId, policyId },
    })
  }

  // Rules
  for (const name of assignment.rules) {
    let ruleId = caches.ruleIds.get(name)
    if (!ruleId) {
      const row = await prisma.rule.upsert({
        where: { name },
        update: {},
        create: { name },
        select: { id: true },
      })
      ruleId = row.id
      caches.ruleIds.set(name, ruleId)
    }
    await prisma.propertyRules.upsert({
      where: { listingId_ruleId: { listingId, ruleId } },
      update: {},
      create: { listingId, ruleId },
    })
  }
}

/* ---------- Main seeding ---------- */
async function main() {
  // You can seed multiple files if you want:
  const files = [
    path.resolve(process.cwd(), 'data', 'mock-hostaway-reviews.json'), // {status,result:[...]}
    // path.resolve(process.cwd(), 'data', 'more-reviews.json'),        // optionally an array [...]
  ]

  const all: RawReview[] = []
  for (const file of files) {
    const raw = JSON.parse(await fs.readFile(file, 'utf-8'))
    const chunk: RawReview[] = Array.isArray(raw) ? raw : raw.result
    all.push(...chunk)
  }

  // Pre-create base catalogs (combined unique names across all assignments)
  const allAmenityNames = new Set<string>(DEFAULT_AMENITIES)
  const allPolicyNames = new Set<string>(DEFAULT_POLICIES)
  const allRuleNames = new Set<string>(DEFAULT_RULES)
  // Add overrides too
  for (const o of LISTING_OVERRIDES) {
    o.amenities?.forEach((n) => allAmenityNames.add(n))
    o.policies?.forEach((n) => allPolicyNames.add(n))
    o.rules?.forEach((n) => allRuleNames.add(n))
  }

  const amenityIds = await ensureAmenityIds([...allAmenityNames])
  const policyIds = await ensurePolicyIds([...allPolicyNames])
  const ruleIds = await ensureRuleIds([...allRuleNames])

  const attachedListings = new Set<number>() // ensure we attach catalogs once per listing

  for (const r of all) {
    const slug = slugify(r.listingName || 'unknown-listing')
    const listing = await prisma.listing.upsert({
      where: { slug },
      create: { slug, name: r.listingName || 'Unknown Listing' },
      update: { name: r.listingName || 'Unknown Listing' },
      select: { id: true, name: true },
    })

    // Attach amenities/policies/rules to this listing (once)
    if (!attachedListings.has(listing.id)) {
      const assignment = pickAssignmentFor(r.listingName || '')
      await attachCatalogsToListing(listing.id, assignment, {
        amenityIds,
        policyIds,
        ruleIds,
      })
      attachedListings.add(listing.id)
    }

    // Normalize enums
    const channel: $Enums.Channel = (r.channel ?? 'hostaway') as $Enums.Channel
    const reviewType: $Enums.ReviewType =
      r.type === 'guest-to-host' ? 'guest_to_host' : 'host_to_guest'
    const status: $Enums.ReviewStatus =
      r.status === 'published' ? 'PUBLISHED' : 'HIDDEN'

    // Compute overall (0–5) from rating or category mean
    const categories = (r.reviewCategory ?? []).map((c) => {
      const s10 = typeof c.rating === 'number' ? clamp(c.rating, 0, 10) : 0
      return { name: c.category.trim(), s10, s5: clamp(s10 / 2, 0, 5) }
    })
    let overall5 = 0
    if (typeof r.rating === 'number') {
      overall5 = clamp(r.rating / 2, 0, 5)
    } else if (categories.length) {
      const mean10 =
        categories.reduce((acc, c) => acc + c.s10, 0) / categories.length
      overall5 = clamp(mean10 / 2, 0, 5)
    }

    const payloadHash = crypto
      .createHash('sha256')
      .update(JSON.stringify(r))
      .digest('hex')

    // Upsert review (unique on [sourceSystem, sourceReviewId, channel])
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
        listingId: listing.id,
        rating10: d1(r.rating ?? undefined), // Decimal?
        overall5: d2(overall5), // Decimal(3,2)
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
        overall5: d2(overall5),
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

    // Upsert categories and their scores in join table
    for (const c of categories) {
      const category = await prisma.category.upsert({
        where: { name: c.name },
        update: {},
        create: { name: c.name },
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
          score10: d1(c.s10),
          score5: d2(c.s5),
        },
        update: {
          score10: d1(c.s10),
          score5: d2(c.s5),
        },
      })
    }
  }

  console.log(
    `✅ Seed complete. Listings attached with amenities/policies/rules: ${attachedListings.size}`
  )
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => prisma.$disconnect())
