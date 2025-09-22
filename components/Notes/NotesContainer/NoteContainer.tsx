import { useEffect, useMemo, useState } from 'react'
import NoteCard from '../NotesCard/NoteCard'
import { Color, Notes } from '@/lib/types'
import CreateNote from '../CTA/CreateNote'
import { useNotesModal } from '../Modal/NotesModal'
import NotesForm from '../Forms/NotesForm'

export default function NoteContainer() {
  const [notes, setNotes] = useState<Notes[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { view, openCreate, openList, openEdit, close } = useNotesModal()

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchNotes()
        setNotes(data)
      } catch (e: any) {
        setError(e?.message ?? 'Failed to load tasks')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  async function handle<T>(res: Response): Promise<T> {
    if (!res.ok) {
      const errText = await res.text()
      throw new Error(errText || res.statusText)
    }
    return res.json()
  }

  async function fetchNotes(): Promise<Notes[]> {
    const res = await fetch(`/reviews/notes`, {
      cache: 'no-store',
    })
    return handle<Notes[]>(res)
  }

  async function updateNotes(
    id: number,
    input: Partial<{ title: string; color: Color; completed: boolean }>
  ): Promise<Notes> {
    const res = await fetch(`/reviews/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return handle<Notes>(res)
  }

  async function deleteNotes(id: number): Promise<void> {
    const res = await fetch(`/reviews/notes/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      const errText = await res.text()
      throw new Error(errText || res.statusText)
    }
  }

  async function createNote(input: {
    title: string
    color: Color
    completed?: boolean
  }): Promise<Notes> {
    const res = await fetch(`reviews/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    return handle<Notes>(res)
  }

  const completedCount = useMemo(
    () => notes.filter((t) => t.completed).length,
    [notes]
  )

  const selected = useMemo(
    () =>
      view.mode === 'edit'
        ? notes.find((n) => n.id === view.noteId)
        : undefined,
    [notes, view]
  )

  const handleToggle = async (id: number, next: boolean) => {
    setNotes((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: next } : t))
    )
    try {
      await updateNotes(id, { completed: next })
    } catch {
      setNotes((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !next } : t))
      )
      alert('Failed to update task')
    }
  }

  const handleDelete = async (id: number) => {
    const prev = notes
    setNotes(prev.filter((t) => t.id !== id))
    try {
      await deleteNotes(id)
    } catch {
      alert('Failed to delete task')
      setNotes(prev)
    }
  }

  // Submit handlers for the form inside the modal
  const submitCreate = async (input: { title: string; color: Color }) => {
    const newNote = await createNote(input)
    setNotes((prev) => [newNote, ...prev])
    openList() // or close()
  }

  const submitEdit = async (input: { title: string; color: Color }) => {
    if (!selected) return
    const updated = await updateNotes(selected.id, input)
    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)))
    openList() // or close()
  }
  return (
    <>
      <article
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          }}
          aria-live="polite"
        >
          <span
            style={{
              color: '#94a3b8',
            }}
          >
            Notesk
          </span>
          <span className="chip">{notes.length}</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          }}
          aria-live="polite"
        >
          <span
            style={{
              color: '#94a3b8',
            }}
          >
            Completed
          </span>
          <span className="chip">
            {completedCount === 0 ? 0 : `${completedCount} of ${notes.length}`}
          </span>
        </div>
      </article>
      {loading && (
        <p
          style={{
            color: '#94a3b8',
          }}
        >
          Loading…
        </p>
      )}
      {error && (
        <p
          style={{
            color: '#f87171',
          }}
        >
          {error}
        </p>
      )}
      {view.mode === 'list' && (
        <>
          <ul>
            {notes.length === 0 ? (
              <>
                <p>No notes available</p>
                <CreateNote />
              </>
            ) : (
              notes.map((note, index) => (
                <NoteCard
                  key={index}
                  note={note}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))
            )}
          </ul>
        </>
      )}

      {view.mode === 'create' && (
        <NotesForm onSubmit={submitCreate} redirectOnSave={false} />
      )}

      {view.mode === 'edit' && selected && (
        <NotesForm
          initial={selected}
          onSubmit={submitEdit}
          redirectOnSave={false}
        />
      )}
    </>
  )
}
