'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function LineChart({
  points,
}: {
  points: Array<{ month: string; avg: number }>
}) {

  const hostRef = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(800)
  useEffect(() => {
    if (!hostRef.current) return
    const ro = new ResizeObserver(([e]) =>
      setW(Math.max(520, e.contentRect.width))
    )
    ro.observe(hostRef.current)
    return () => ro.disconnect()
  }, [])

  // optional thinning if there are too many points
  const data = useMemo(() => {
    const maxPts = 160
    if (points.length <= maxPts) return points
    const step = Math.ceil(points.length / maxPts)
    return points.filter((_, i) => i % step === 0)
  }, [points])


  const h = 360
  const padL = 44,
    padR = 16,
    padB = 46,
    padT = 20


    if (!points?.length) return <p className="muted">No data.</p>

  const innerW = Math.max(200, w - padL - padR)
  const innerH = h - padT - padB
  const xs = data.map(
    (_, i) => padL + (i * innerW) / Math.max(1, data.length - 1)
  )
  const ys = data.map((p) => h - padB - (p.avg / 5) * innerH)
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x} ${ys[i]}`).join(' ')

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
        <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
        {xs.map((x, i) => (
          <circle key={i} cx={x} cy={ys[i]} r="3" fill="currentColor" />
        ))}

        {/* axes */}
        <line
          x1={padL}
          y1={h - padB}
          x2={w - padR}
          y2={h - padB}
          stroke="#28324a"
        />
        <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="#28324a" />

        {/* y labels 0..5 */}
        {[0, 1, 2, 3, 4, 5].map((v) => {
          const y = h - padB - (v / 5) * innerH
          return (
            <g key={v}>
              <line
                x1={padL}
                y1={y}
                x2={w - padR}
                y2={y}
                stroke="#1e293b"
                opacity="0.25"
              />
              <text
                x={padL - 8}
                y={y + 4}
                fontSize="11"
                textAnchor="end"
                fill="#7a8599"
              >
                {v}
              </text>
            </g>
          )
        })}

        {/* x labels */}
        {data.map((p, i) => (
          <text
            key={i}
            x={xs[i]}
            y={h - 10}
            fontSize="10"
            textAnchor="middle"
            fill="#7a8599"
          >
            {p.month}
          </text>
        ))}
      </svg>
    </div>
  )
}
