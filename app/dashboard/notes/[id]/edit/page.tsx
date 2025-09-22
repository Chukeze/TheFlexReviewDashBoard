'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import type { Color, Notes} from '@/lib/types'
import NotesForm from '@/components/Notes/Forms/NotesForm'

export default function EditNotesPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const [note, setNote] = useState<Notes | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function handle<T>(res: Response): Promise<T> {
    if (!res.ok) {
      const errText = await res.text()
      throw new Error(errText || res.statusText)
    }
    return res.json()
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


    async function fetchNote(id: number): Promise<Notes> {
      const res = await fetch(`/reviews/notes/${id}`, { cache: 'no-store' })
      return handle<Notes>(res)
    }

  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetchNote(id)
        setNote(data)
      } catch (e: any) {
        setError(e?.message ?? 'Failed to load note')
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  if (loading)
    return (
      <main className="p-2">
        <p>Loading…</p>
      </main>
    )
  if (error)
    return (
      <main className="p-2">
        <p className="text-red-400">{error}</p>
      </main>
    )
  if (!note)
    return (
      <main className="p-2">
        <p>Note not found.</p>
      </main>
    )

  return (
    <main className="space-y-6 mx-auto max-w-2xl">
      <button
        className="btn-ghost"
        aria-label="Go back"
        onClick={() => router.back()}
      >
        ← Back
      </button>
      <NotesForm
        initial={note}
        onSubmit={async (input) => {
          await updateNotes(id, input)
        }}
      />
    </main>
  )
}
