import React, { useId } from 'react'


type MeterProps = { min: number; max: number; now: number }

export function KpiStat({
  label,
  value,
  description,
  statusClass,
  srSuffix,
  meter,
}: {
  label: string
  value: string | number
  description?: string
  statusClass?: string // e.g. 'warning-level', 'danger-level', 'success-level'
  srSuffix?: string // e.g. 'out of 5' for screen readers
  meter?: MeterProps // optional <meter> for numeric scale
}) {
  const kpiId = useId()
  const descId = useId()

  return (
    <div
      className={`kpi-stat ${statusClass || ''}`}
      role="group"
      aria-labelledby={`${kpiId}-label`}
      aria-describedby={description ? `${descId}-desc` : undefined}
      data-status={statusClass || 'neutral'}
    >
      <p id={`${kpiId}-label`} className="kpi-label">
        {label}
      </p>

      <div className="kpi-value-wrap">
        <output
          className="kpi"
          aria-label={`${label}${
            typeof value === 'number' ? ` ${value}` : ` ${value}`
          }${srSuffix ? ` ${srSuffix}` : ''}`}
        >
          {value}
          {srSuffix ? (
            <span className="visually-hidden"> {srSuffix}</span>
          ) : null}
        </output>

        {meter && (
          <meter
            className="kpi-meter"
            min={meter.min}
            max={meter.max}
            value={meter.now}
            aria-hidden="true"
          />
        )}
      </div>

      {description ? (
        <p id={`${descId}-desc`} className="muted small kpi-desc">
          {description}
        </p>
      ) : null}
    </div>
  )
}
