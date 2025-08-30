import React from 'react'

export function KpiRankList({
  title,
  caption,
  items,
}: {
  title: string
  caption?: string
  items: Array<{ id: string; name: string; right: string }>
}) {
  const headingId = React.useId()
  const captionId = React.useId()

  return (
    <section
      className="kpi-ranklist"
      role="group"
      aria-labelledby={headingId}
      aria-describedby={caption ? captionId : undefined}
    >
      <h3 id={headingId} className="kpi-subtitle">
        {title}
      </h3>
      {caption ? (
        <p id={captionId} className="muted small">
          {caption}
        </p>
      ) : null}

      <ol className="kpi-list" role="list">
        {items.map((it, idx) => (
          <li key={it.id} className="kpi-list-row">
            <span className="kpi-list-rank" aria-hidden="true">
              {idx + 1}
            </span>
            <span className="kpi-list-name">{it.name}</span>
            <span className="kpi-list-value" aria-label={`${title} value`}>
              {it.right}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
