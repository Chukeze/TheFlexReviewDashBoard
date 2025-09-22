import { z } from 'zod';
import { COLORS } from '@/lib/constants';

export const NoteCreateSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
    content: z.string().min(1, 'Content is required').max(1000, 'Content is too long'),
    reviewId: z.number().int().positive('Invalid review ID').optional(),
    color: z.enum(COLORS),
    completed: z.boolean().optional().default(false)
});

export const NoteUpdateSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100, 'Title is too long').optional(),
    content: z.string().min(1, 'Content is required').max(1000, 'Content is too long').optional(),
    color: z.enum(COLORS).optional(),
    completed: z.boolean().optional()
})

export type NoteCreateInput = z.infer<typeof NoteCreateSchema>;
export type NoteUpdateInput = z.infer<typeof NoteUpdateSchema>;