'use client'
import { useRouter } from 'next/navigation'
import NotesModal from '@/components/Notes/Modal/NotesModal'
import { Color, Notes } from '@/lib/types'
import NotesForm from '@/components/Notes/Forms/NotesForm'

export default function NewNotesPage() {
  const router = useRouter()

  async function handle<T>(res: Response): Promise<T> {
    if (!res.ok) {
      const errText = await res.text()
      throw new Error(errText || res.statusText)
    }
    return res.json()
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

  
  return (
    <NotesModal>
      <button
        className="btn-ghost"
        aria-label="Go back"
        onClick={() => router.back()}
      >
        ← Back
      </button>
      <NotesForm
        onSubmit={async (input) => {
          await createNote(input)
        }}
      />
    </NotesModal>
  )
}
