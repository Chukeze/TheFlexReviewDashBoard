'use client'

import Link from 'next/link'
import { Notes } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { KeyboardEvent, MouseEvent } from 'react'
import FillMark from '../ColorBadge'
import { useNotesModal } from '../Modal/NotesModal'

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
  const { openEdit } = useNotesModal()
  const colorHex = PALETTE[note.color]

  const goEdit = () =>  openEdit(note.id)
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
      className={`card group ${
        note.completed ? 'opacity-80' : ''
      }`}
      style={{
        borderLeft: `6px solid ${colorHex}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        position: 'relative',
      }}
      onClick={goEdit}
      onKeyDown={onKey}
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-roledescription="Note"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {/* Accessible circular checkbox */}
          <label
            htmlFor={checkboxId}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
            }}
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
              className="a11y-focus"
              style={{
                borderColor: colorHex,
                display: 'inline-flex',
                height: '1.25rem',
                width: '1.25rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                borderWidth: '2px',
                borderStyle: 'solid',
                transitionProperty:
                  'color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              }}
            >
              {/* inner filled dot (visible only when checked) */}
              <span
                className={`${note.completed ? 'scale-100' : 'scale-0'}`}
                style={{
                  backgroundColor: colorHex,
                  height: '0.625rem',
                  width: '0.625rem',
                  borderRadius: '9999px',
                  transition: 'transform 0.15s ease-in-out',
                }}
              >
                <FillMark />
              </span>
            </span>
          </label>

          <h3
            id={titleId}
            className={`md:text-base ${
              note.completed ? 'line-through' : 'text-slate-200'
            }`}
            style={{
              fontSize: '.875rem',
              lineHeight: '1.25rem',
            }}
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
