import React from 'react'

export function KpiGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="kpi-grid" role="list" aria-label="KPI cards">
      {React.Children.map(children, (child, i) => (
        <div role="listitem" className="card kpi-card" key={i}>
          {child}
        </div>
      ))}
    </div>
  )
}
