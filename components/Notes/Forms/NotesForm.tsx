'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Notes, Color } from '@/lib/types'
import { CheckMark } from '../ColorBadge'

type Props = {
  initial?: Partial<Notes>
  onSubmit: (input: { title: string; color: Color }) => Promise<void>
  redirectOnSave?: boolean
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

export default function NotesForm({ initial, onSubmit, redirectOnSave = true }: Props) {
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
      if (redirectOnSave) router.push('/')
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-6">
      <div
        style={{
          marginTop: '1.5rem',
        }}
      >
        <label
          htmlFor="title"
          style={{
            color: '#cbd5e1',
            fontSize: '.875rem',
            lineHeight: '1.25rem',
          }}
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex. Brush your teeth"
          required
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          style={{
            width: '100%',
            borderRadius: '0.375rem',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: '#101828',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            color: '#e2e8f0',
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(14,165,223,0.30)',
          }}
        />
        {error && (
          <p
            id={errorId}
            style={{
              color: '#f87171',
              fontSize: '.875rem',
              lineHeight: '1.25rem',
            }}
          >
            {error}
          </p>
        )}
      </div>

      <fieldset
        style={{
          marginTop: '1.5rem',
        }}
      >
        <legend
          style={{
            color: '#cbd5e1',
            fontSize: '.875rem',
            lineHeight: '1.25rem',
          }}
        >
          Color
        </legend>
        <div
          role="radiogroup"
          aria-label="Task color"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {COLORS.map((c) => {
            const checked = c === color
            const id = `color-${c}`
            return (
              <label
                key={c}
                htmlFor={id}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
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
                  style={{
                    height: '1.75rem',
                    width: '1.75rem',
                    borderRadius: '9999px',

                  }}
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
