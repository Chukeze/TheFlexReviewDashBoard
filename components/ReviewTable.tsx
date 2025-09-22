'use client'
import type { NormalizedReview } from '@/lib/types'
import { toggleApproval } from '@/lib/utils'
import Link from 'next/link'

export default function ReviewTable({
  rows,
  approved,
  onToggle,
}: {
  rows: NormalizedReview[]
  approved: Set<string>
  onToggle: (id: string, approved: boolean) => void
}) {
  if (!rows.length)
    return <p className="muted">No reviews match the current filters.</p>
  return (
    <table role="table" aria-label="Filtered reviews">
      <colgroup>
        <col style={{ width: '260px' }} />
        <col style={{ width: '110px' }} />
        <col style={{ width: '180px' }} />
        <col style={{ width: '80px' }} />
        <col style={{ width: '160px' }} />
        <col style={{ width: '160px' }} />
        <col style={{ width: '140px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Listing</th>
          <th className="channel">Channel</th>
          <th>Guest</th>
          <th className="rating" style={{ minWidth: 70 }}>
            Rating
          </th>
          <th className="submitted">Submitted</th>
          <th className="excerpt">Excerpt</th>
          <th className="approved">Approved</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id}>
            <td>
              <Link href={`/properties/${r.listingId}`}>{r.listingName}</Link>
            </td>
            <td>{new Date(r.submittedAt).toLocaleDateString()}</td>
            <td>
              <span className="badge">{r.channel}</span>
            </td>
            <td>{r.guestName}</td>
            <td>{r.overall.toFixed(2)}</td>
            <td className="small">
              {r.text && r.text.slice(0, 200)}
              {r.text && r.text.length > 200 ? '…' : ''}
            </td>
            <td className="approved">
              <label className="row small" style={{ gap: 8 }}>
                <input
                  type="checkbox"
                  checked={approved.has(r.id)}
                  onChange={(e) => onToggle(r.id, e.target.checked)}
                  aria-label={
                    approved.has(r.id) ? 'Mark Hidden' : 'Mark Approved'
                  }
                />
                {approved.has(r.id) ? 'Approved' : 'Hidden'}
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
