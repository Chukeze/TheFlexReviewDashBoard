import { useNotesModal } from '../Modal/NotesModal'

export default function CreateNote() {
  const {openCreate} = useNotesModal()
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={openCreate}
        className="button ghost small a11y-focus"
      >
        Create Note
        <span style={{ marginLeft: '0.5rem' }}>＋</span>
      </button>
    </div>
  )
}
