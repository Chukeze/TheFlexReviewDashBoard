export default function NoticeBar({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) {
  if (!message) return null
  return (
    <div
      className="card"
      role="status"
      aria-live="polite"
      style={{ borderLeft: '4px solid var(--brand-700)' }}
    >
      <div
        className="row"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div className="small">{message}</div>
        <button className="button ghost small" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  )
}
