import ApproveToggle from './ApproveToggle';

export function Stars({ value }: { value: number | null }) {
  const raw = value ?? 0
  const v = Math.max(0, Math.min(5, raw)) // clamp 0..5
  const rounded = Math.round(v * 2) / 2 // nearest 0.5

  const full = Math.floor(rounded) // ★ count
  const half = rounded % 1 === 0.5 ? 1 : 0 // ✬ count (0 or 1)
  const empty = 5 - full - half // ☆ count

  return (
    <div
      style={{ marginTop: '1rem', color: 'var(--full-star)' }}
      className="text-sm text-amber-400"
      aria-label={`${v} out of 5 stars`}
    >
      {'★'.repeat(full)}
      <span style={{color: '#f5ed00'}}>{half ? '✬' : ''}</span>
      {'☆'.repeat(empty)}
      <span className="text-slate-400">({v})</span>
    </div>
  )
}

export default function ReviewCard({
  id, guestName, text, stars5, time, listingName, channel, approved, onApprovedChange
}: {
  id: string;
  guestName: string;
  text: string;
  stars5: number | null;
  time: string;
  listingName: string;
  channel: string;
  approved: boolean;
  onApprovedChange: (a: boolean) => void;
}) {
  return (
    <div className="card">
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          gap: '3rem',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div className="font-medium">{guestName}</div>
          <div
            style={{
              marginTop: '1rem',
              color: 'var(--text-brand)',
              fontSize: '0.475rem',
            }}
          >
            {listingName} • {channel} • {new Date(time).toLocaleDateString()}
          </div>
        </div>
        <ApproveToggle
          id={id}
          approved={approved}
          onChanged={onApprovedChange}
        />
      </div>
      <div
        style={{
          marginTop: '.75rem',
        }}
      >
        <Stars value={stars5} />
      </div>
      <p style={{ marginTop: '1rem', color: 'var(--text-brand)' }}>{text}</p>
    </div>
  )
}
        