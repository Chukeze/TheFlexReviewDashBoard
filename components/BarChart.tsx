'use client'
import { useEffect, useRef, useState } from 'react'

export default function BarChart({
  items,
}: {
  items: { label: string; value: number }[]
}) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(800)
  const h = 360
  const padL = 44,
    padR = 20,
    padB = 46,
    padT = 20

  useEffect(() => {
    if (!hostRef.current) return
    const ro = new ResizeObserver(([e]) =>
      setW(Math.max(480, e.contentRect.width))
    )
    ro.observe(hostRef.current)
    return () => ro.disconnect()
  }, [])

  const max = Math.max(1, ...items.map((i) => i.value))
  const innerW = Math.max(200, w - padL - padR)
  const innerH = h - padT - padB
  const barSpace = innerW / Math.max(1, items.length)
  const barW = Math.max(12, barSpace * 0.72)

  // y-ticks (0, 25%, 50%, 75%, max)
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(t * max))

  return (
    <div ref={hostRef} style={{ width: '100%', height: '100%' }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: 12,
        }}
      >
        {/* grid + axes */}
        <line
          x1={padL}
          y1={h - padB}
          x2={w - padR}
          y2={h - padB}
          stroke= "var(--border)"
        />
        <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="var(--border)" />
        {ticks.map((t, i) => {
          const y = h - padB - (t / max) * innerH
          return (
            <g key={i}>
              <line x1={padL} y1={y} x2={w - padR} y2={y} stroke="var(--border)" />
              <text
                x={padL - 8}
                y={y + 4}
                fontSize="11"
                textAnchor="end"
                fill="#64748b"
              >
                {t}
              </text>
            </g>
          )
        })}

        {/* bars */}
        {items.map((it, i) => {
          const x = padL + i * barSpace + (barSpace - barW) / 2
          const bh = (it.value / max) * innerH
          return (
            <g key={i}>
              <rect
                x={x}
                y={h - padB - bh}
                width={barW}
                height={bh}
                fill="var(--brand-700)"
              />
              <text
                x={x + barW / 2}
                y={h - 10}
                fontSize="10"
                textAnchor="middle"
                fill="#64748b"
              >
                {it.label}
              </text>
              <text
                x={x + barW / 2}
                y={h - padB - bh - 6}
                fontSize="10"
                textAnchor="middle"
                fill="#0f172a"
              >
                {it.value}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
