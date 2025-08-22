import ApproveToggle from './ApproveToggle';

export function Stars({ value }: { value: number | null }) {
  const v = value ?? 0;
  return (
    <div
      style={{ marginTop: '1rem', color: 'var(--full-star)' }}
      className="text-sm text-amber-400"
      aria-label={`${v} out of 5 stars`}
    >
      {'★'.repeat(Math.round(v))}
      {'☆'.repeat(5 - Math.round(v))}{' '}
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
        