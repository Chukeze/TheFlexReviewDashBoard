export function TrendCells({
  last3,
}: {
  last3?: Array<{ month: string; count: number }>
}) {
  if (!last3?.length) return <span className="small muted">—</span>
  const [a, b, c] =
    last3.length === 3
      ? last3
      : [
          { month: '', count: 0 },
          { month: '', count: 0 },
          last3[last3.length - 1],
        ]
  const arrow =
    a && c ? (c.count > a.count ? '▲' : c.count < a.count ? '▼' : '→') : ''
  return (
    <span className="small">
      {a?.count ?? 0} → {b?.count ?? 0} → {c?.count ?? 0}{' '}
      <span className="muted">{arrow}</span>
    </span>
  )
}