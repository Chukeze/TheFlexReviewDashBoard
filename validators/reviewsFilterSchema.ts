import { z } from 'zod'

const emptyToUndefined = <T extends z.ZodTypeAny>(inner: T) =>
  z.preprocess((v) => (v === '' || v == null ? undefined : v), inner.optional())

const presetWindowDaysSchema = z.preprocess((v) => {
  if (v === '' || v == null) return undefined

  const n = typeof v === 'string' ? Number(v) : v

  return n
}, z.union([z.literal(30), z.literal(60), z.literal(90)]).optional())

const datetimeLocalOrIso = emptyToUndefined(
  z.preprocess((v) => {
    if (typeof v === 'string') {
      const s = v.trim()
      if (!s) return undefined

      const hasTz = /[zz]|[+-]\d{2}:\d{2}$/.test(s)

      if (!hasTz) {
        const d = new Date(s)
        if (!Number.isNaN(d.getTime())) return d.toISOString()
      }
      return s
    }
    return v
  }, z.iso.datetime()) //end as iso datetime
)

export const reviewsFiltersSchema = z
  .object({
    channel: emptyToUndefined(z.string().min(2).max(100)),
    listingId: emptyToUndefined(
      z.string().regex(/^\d+$/, 'Listing ID must be a number string')
    ),
    category: emptyToUndefined(z.string().min(2).max(100)),
    ratingMin: emptyToUndefined(z.coerce.number().min(0).max(5)),
    ratingMax: emptyToUndefined(z.coerce.number().min(0).max(5)),
    from: datetimeLocalOrIso, //emptyToUndefined(z.iso.datetime()),
    to: datetimeLocalOrIso, //emptyToUndefined(z.iso.datetime()),
    presetWindowDays: presetWindowDaysSchema, //emptyToUndefined(z.literal([30, 60, 90]).nullish()),
  })
  .superRefine((data, ctx) => {
    if (
      data.ratingMin != null &&
      data.ratingMax != null &&
      data.ratingMin > data.ratingMax
    ) {
      ctx.addIssue({
        path: ['ratingMin'],
        code: 'custom',
        message: 'ratingMin must be ≤ ratingMax',
      })
    }
    if (data.from && data.to && new Date(data.from) > new Date(data.to)) {
      ctx.addIssue({
        path: ['from'],
        code: 'custom',
        message: 'From date must be before To date',
      })
    }
  });
/*
  .refine(
    (data) =>
      data.ratingMin == null ||
      data.ratingMax == null ||
      data.ratingMin <= data.ratingMax,
    {
      message: 'ratingMin must be less than or equal to ratingMax',
    }
  )
  .refine(
    (data) =>
      !data.from || !data.to || new Date(data.from) <= new Date(data.to),
    {
      message: 'From date must be before To date',
    }
  );
*/
