'use client'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

type View =
  | { mode: 'list' }
  | { mode: 'create' }
  | { mode: 'edit'; noteId: number }

type NotesModalContext = {
  open: boolean
  view: View
  openList: () => void
  openCreate: () => void
  openEdit: (noteId: number) => void
  close: () => void
}

const context = createContext<NotesModalContext | null>(null)

export function useNotesModal() {
  const ctx = useContext(context)
  if (!ctx)
    throw new Error('useNotesModal must be used within a NotesModalProvider')
  return ctx
}

export default function NotesModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>({ mode: 'list' })
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
    }
    if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onClose = (e: Event) => {
      e.preventDefault()
      setOpen(false)
      setView({ mode: 'list' })
    }
    dialog.addEventListener('cancel', onClose)
    dialog.addEventListener('close', onClose)
    return () => {
      dialog.removeEventListener('cancel', onClose)
      dialog.removeEventListener('close', onClose)
    }
  }, [])

  const openList = useCallback(() => {
    setView({ mode: 'list' })
    setOpen(true)
  }, [])

  const openCreate = useCallback(() => {
    setView({ mode: 'create' })
    setOpen(true)
  }, [])

  const openEdit = useCallback((noteId: number) => {
    setView({ mode: 'edit', noteId })
    setOpen(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    setView({ mode: 'list' })
  }, [])

  const value = useMemo<NotesModalContext>(
    () => ({
      open,
      view,
      openList,
      openCreate,
      openEdit,
      close,
    }),
    [open, view, openList, openCreate, openEdit, close]
  )
  return (
    <context.Provider value={value}>
      <dialog ref={ref} open={open} onClose={() => setOpen(false)}>
        <header>
          <h2>
            {view.mode === 'create'
              ? 'Create note'
              : view.mode === 'edit'
              ? 'Edit note'
              : 'Notes'}
          </h2>
          <button
          type="button"
          className="btn-ghost a11y-focus"
          onClick={close}
          aria-label="Close">
            X
          </button>
        </header>
        <article>
            {children}
        </article>
      </dialog>
    </context.Provider>
  )
}
