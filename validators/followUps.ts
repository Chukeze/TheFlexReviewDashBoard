import { z } from 'zod'

/** Server-side sanitizer: drop HTML tags and control chars. Keep plain text only. */
export function sanitizeNotes(input?: string): string | undefined {
  if (!input) return undefined
  // Remove null/ctrl chars
  let s = input.replace(/[\u0000-\u001F\u007F]/g, '')
  // Drop all HTML tags (prevents <script> and inline HTML)
  s = s.replace(/<[^>]*>/g, '')
  // Normalize whitespace
  s = s.replace(/\s+/g, ' ').trim()
  return s.length ? s : undefined
}

/** Accepts string or number for reviewId; normalizes to number (or undefined). */
const reviewIdField = z
  .union([z.string().regex(/^\d+$/), z.number().int().nonnegative()])
  .optional()
  .transform((v) => (v === undefined ? undefined : Number(v)))

export const followUpCreateSchema = z.object({
  term: z.string().trim().min(1).max(100),
  reviewId: reviewIdField,
  listingName: z.string().trim().max(200).optional(),
  issueId: z.string().trim().max(128).optional(),
  // Cap note length, strip HTML/controls; keep plain text only
  notes: z
    .string()
    .max(2000, 'Notes can be at most 2000 characters')
    .optional()
    .transform(sanitizeNotes),
})
export type FollowUpCreateInput = z.infer<typeof followUpCreateSchema>
