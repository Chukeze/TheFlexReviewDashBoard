'use client'
import { useEffect, useRef, useState } from 'react'

export default function ChannelVolumeChart({
  points,
  channels,
}: {
  points: { month: string; counts: Record<string, number> }[]
  channels: string[]
}) {
  if (!points.length) return <p className="muted">No data.</p>

  const hostRef = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(820)
  const h = 360
  const padL = 48,
    padR = 20,
    padB = 60,
    padT = 20

  useEffect(() => {
    if (!hostRef.current) return
    const ro = new ResizeObserver(([e]) =>
      setW(Math.max(520, e.contentRect.width))
    )
    ro.observe(hostRef.current)
    return () => ro.disconnect()
  }, [])

  const months = points.map((p) => p.month)
  const innerW = Math.max(200, w - padL - padR)
  const innerH = h - padT - padB
  const groupW = innerW / months.length
  const barW = Math.max(8, (groupW - 8) / Math.max(1, channels.length))
  const max = Math.max(1, ...points.flatMap((p) => Object.values(p.counts)))
  const rotateLabels = months.length > 10

  return (
    <div ref={hostRef} style={{ width: '100%', height: '100%' }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
        }}
      >
        {/* axes */}
        <line
          x1={padL}
          y1={h - padB}
          x2={w - padR}
          y2={h - padB}
          stroke="var(--border)"
        />
        <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="var(--border)" />

        {/* bars + month labels */}
        {points.map((p, i) => {
          const gx = padL + i * groupW
          return (
            <g key={p.month}>
              {channels.map((c, j) => {
                const v = p.counts[c] || 0
                const bh = (v / max) * innerH
                const x = gx + j * barW + 3
                return (
                  <rect
                    key={c}
                    x={x}
                    y={h - padB - bh}
                    width={barW - 3}
                    height={bh}
                    fill="var(--brand-700)"
                    opacity={0.4 + (0.5 * j) / Math.max(1, channels.length - 1)}
                  />
                )
              })}
              <text
                x={gx + groupW / 2}
                y={h - 8}
                fontSize="10"
                textAnchor={rotateLabels ? 'end' : 'middle'}
                transform={
                  rotateLabels
                    ? `rotate(-45 ${gx + groupW / 2},${h - 8})`
                    : undefined
                }
                fill="#64748b"
              >
                {p.month}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
