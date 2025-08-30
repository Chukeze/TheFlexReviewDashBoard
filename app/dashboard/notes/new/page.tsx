'use client'

import TaskForm from '@/components/Notes/NotesForm'
import { createTask } from '@/api/reviews/notes'
import { useRouter } from 'next/navigation'

export default function NewTaskPage() {
  const router = useRouter()

  return (
    <main className="space-y-6 mx-auto max-w-2xl">
      <button
        className="btn-ghost"
        aria-label="Go back"
        onClick={() => router.back()}
      >
        ← Back
      </button>
      <TaskForm
        onSubmit={async (input) => {
          await createTask(input)
        }}
      />
    </main>
  )
}
