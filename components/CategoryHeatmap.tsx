'use client'

export default function CategoryHeatmap({
  heat,
  peersCount,
}: {
  heat: Array<{
    category: string
    catMean: number
    catStd: number
    cells: Array<{
      listingId: string
      listingName: string
      curAvg: number
      delta: number
    }>
  }>
  peersCount: number
}) {
  if (!heat.length) return <p className="muted">No data.</p>
  return (
    <div className="grid" style={{ gap: 12 }}>
      <div style={{ overflowX: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              {heat[0].cells.map((c) => (
                <th key={c.listingId}>{c.listingName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heat.map((row) => (
              <tr key={row.category}>
                <td>
                  <strong>{row.category}</strong>
                </td>
                {row.cells.map((cell) => {
                  const z = (cell.curAvg - row.catMean) / (row.catStd || 1)
                  const cls =
                    z <= -1
                      ? 'danger-level'
                      : z <= -0.5
                      ? 'warning-level'
                      : z >= 0.8
                      ? 'success-level'
                      : ''
                  // a soft background based on score (0–5)
                  const pct = isFinite(cell.curAvg)
                    ? Math.max(0, Math.min(1, cell.curAvg / 5))
                    : 0
                  const bg = `rgba(2, 132, 199, ${0.1 + 0.25 * pct})`
                  const delta = isFinite(cell.delta)
                    ? cell.delta > 0
                      ? `+${cell.delta.toFixed(2)}`
                      : cell.delta.toFixed(2)
                    : '—'
                  return (
                    <td
                      key={cell.listingId}
                      title={`avg ${
                        cell.curAvg?.toFixed(2) || '—'
                      } | Δ ${delta}`}
                    >
                      <span
                        className={`heat ${cls}`}
                        style={{
                          background: bg,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 36,
                        }}
                      >
                        {isFinite(cell.curAvg) ? cell.curAvg.toFixed(1) : '—'}
                      </span>
                      <span className="small muted" style={{ marginLeft: 6 }}>
                        {delta}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
