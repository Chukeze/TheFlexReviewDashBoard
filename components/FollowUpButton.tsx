'use client'

import { useEffect, useRef, useState } from 'react'
import { useFollowUps } from '@/lib/followups'

export default function FollowUpButton({
  term,
  reviewId,
  listingId,
  listingName,
  onCreated, // optional callback to show a NoticeBar, etc.
  issueId,
}: {
  term: string
  reviewId?: number
  listingId?: number
  listingName?: string
  onCreated?: (msg: string) => void
  issueId?: string
}) {
  const [open, setOpen] = useState(false)
  const notesRef = useRef<HTMLTextAreaElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { add } = useFollowUps()

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open) {
      d.showModal()
      setTimeout(() => notesRef.current?.focus(), 0)
    } else if (d.open) {
      d.close()
    }
  }, [open])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget as HTMLFormElement)
    const notes = String(fd.get('notes') || '')
    add({ term, reviewId, listingId, listingName, notes, issueId })
    setOpen(false)
    onCreated?.(
      `Follow‑up created for “${term}”${
        listingName ? ` on ${listingName}` : ''
      }.`
    )
  }

  const dialogId = `fu-${term.replace(/\s+/g, '-')}-${listingId || 'all'}`
  const titleId = `${dialogId}-title`
  const descId = `${dialogId}-desc`

  return (
    <>
      <button
        type="button"
        className="button small"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={() => setOpen(true)}
      >
        Add follow‑up
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="dialog"
      >
        <form method="dialog" onSubmit={onSubmit}>
          <h3 id={titleId} style={{ marginTop: 0 }}>
            Create follow‑up
          </h3>
          <p id={descId} className="small muted">
            You’re creating a follow‑up for <strong>{term}</strong>
            {listingName ? (
              <>
                {' '}
                on <strong>{listingName}</strong>
              </>
            ) : null}
            .
          </p>

          <div className="field">
            <label htmlFor={`${dialogId}-notes`} className="label">
              Notes (optional)
            </label>
            <textarea
              id={`${dialogId}-notes`}
              name="notes"
              ref={notesRef}
              rows={4}
            />
          </div>

          <div className="row" style={{ justifyContent: 'flex-end', gap: 8 }}>
            <button
              type="button"
              className="button ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
