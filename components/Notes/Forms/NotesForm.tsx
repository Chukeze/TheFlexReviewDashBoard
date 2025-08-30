'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Task, Color } from '@/lib/types'
import { CheckMark } from './ColorBadge'

type Props = {
  initial?: Partial<Task>
  onSubmit: (input: { title: string; color: Color }) => Promise<void>
}

const COLORS: Color[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
]
const DOT_BG: Record<Color, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500',
  pink: 'bg-pink-500',
  brown: 'bg-brown-500',
}

export default function NotesForm({ initial, onSubmit }: Props) {
  const router = useRouter()
  const [title, setTitle] = useState(initial?.title ?? '')
  const [color, setColor] = useState<Color>((initial?.color as Color) ?? 'blue')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const errorId = 'title-error'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    try {
      setSaving(true)
      await onSubmit({ title: title.trim(), color })
      router.push('/')
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm text-slate-300">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex. Brush your teeth"
          className="w-full rounded-md border border-white/10 bg-[#101828] px-3 py-2 text-slate-200 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sky-500/30"
          required
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
        />
        {error && (
          <p id={errorId} className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm text-slate-300">Color</legend>
        <div
          role="radiogroup"
          aria-label="Task color"
          className="flex flex-wrap items-center gap-3"
        >
          {COLORS.map((c) => {
            const checked = c === color
            const id = `color-${c}`
            return (
              <label key={c} htmlFor={id} className="inline-flex items-center">
                <input
                  id={id}
                  type="radio"
                  name="color"
                  value={c}
                  checked={checked}
                  onChange={() => setColor(c)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`h-7 w-7 rounded-full ${
                    DOT_BG[c]
                  } ring-offset-2 ring-offset-[#0b1220] peer-focus-visible:ring-2 peer-focus-visible:ring-sky-400 ${
                    checked ? 'ring-2 ring-sky-400' : ''
                  }`}
                />
                <span className="sr-only">{c}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="flex justify-center items-center gap-2">
        <button
          type="submit"
          disabled={saving}
          className="btn-primary w-full md:w-96 a11y-focus"
        >
          {saving ? (
            'Saving…'
          ) : initial?.id ? (
            <span className="inline-flex items-center gap-2">
              Save
              <CheckMark />
            </span>
          ) : (
            'Add Task'
          )}
        </button>
      </div>
    </form>
  )
}
