'use client'

import Link from 'next/link'
import { Notes } from '@/lib/types'
import FillMark from './ColorBadge'
import { useRouter } from 'next/navigation'
import { KeyboardEvent, MouseEvent } from 'react'

type Props = {
  note: Notes
  onToggle: (id: number, next: boolean) => void
  onDelete: (id: number) => void
}

// consistent palette with left accent, checkbox ring, and filled dot
const PALETTE: Record<Notes['color'], string> = {
  red: '#ef4444', // tailwind red-500
  blue: '#60a5fa', // tailwind blue-400/500 mix for dark bg legibility
  green: '#34d399',
  orange: '#f97316',
  purple: '#a855f7',
  yellow: '#fbbf24',
  pink: '#ec4899',
  brown: '#14b8a6',
  indigo: '#818cf8',
}

export default function NoteCard({ note, onToggle, onDelete }: Props) {
  const router = useRouter()
  const colorHex = PALETTE[note.color]

  const goEdit = () => router.push(`/notes/${note.id}/edit`)
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      goEdit()
    }
  }

  // keep card click to edit; stop event on internal controls
  const stop = (e: MouseEvent) => e.stopPropagation()

  const checkboxId = `note-${note.id}-chk`
  const titleId = `note-${note.id}-title`
  const descId = `note-${note.id}-desc`

  return (
    <li
      role="listitem"
      className={`card relative group cursor-pointer transition ${
        note.completed ? 'opacity-80' : ''
      }`}
      style={{ borderLeft: `6px solid ${colorHex}` }}
      onClick={goEdit}
      onKeyDown={onKey}
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-roledescription="Note"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {/* Accessible circular checkbox */}
          <label
            htmlFor={checkboxId}
            className="relative inline-flex items-center"
            onClick={stop}
          >
            <input
              id={checkboxId}
              type="checkbox"
              checked={note.completed}
              onChange={(e) => {
                onToggle(note.id, e.target.checked)
              }}
              className="sr-only"
              aria-labelledby={titleId}
              aria-describedby={descId}
            />
            {/* outer ring */}
            <span
              aria-hidden="true"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors a11y-focus"
              style={{ borderColor: colorHex }}
            >
              {/* inner filled dot (visible only when checked) */}
              <span
                className={`h-2.5 w-2.5 rounded-full transition-transform ${
                  note.completed ? 'scale-100' : 'scale-0'
                }`}
                style={{ backgroundColor: colorHex }}
              >
                <FillMark />
              </span>
            </span>
          </label>

          <h3
            id={titleId}
            className={`text-sm md:text-base ${
              note.completed ? 'line-through text-slate-500' : 'text-slate-200'
            }`}
          >
            {note.title}
          </h3>
        </div>

        <button
          onClick={(e) => {
            stop(e)
            if (confirm('Delete this note?')) onDelete(note.id)
          }}
          className="btn-ghost a11y-focus"
          aria-label={`Delete note: ${note.title}`}
        >
          Delete
        </button>
      </div>

      <Link
        href={`/notes/${note.id}/edit`}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        Edit note
      </Link>
    </li>
  )
}
