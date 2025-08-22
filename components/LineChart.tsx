'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function LineChart({
  points,
}: {
  points: Array<{ month: string; avg: number }>
}) {
  if (!points?.length) return <p className="muted">No data.</p>

  const hostRef = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(800)
  const h = 360
  const padL = 44,
    padR = 16,
    padB = 46,
    padT = 20

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

// /* 'use client'

// type Pt = { month: string; avg: number }

// export default function LineChart({ points }: { points: Pt[] }) {
//   if (!points?.length) return <p className="muted">No data.</p>

//   // ---- Configs
//   const MAX_POINTS = 250 // target after decimation
//   const TARGET_X_TICKS = 10 // ~10 x labels
//   const w = 900,
//     h = 260
//   const padL = 46,
//     padR = 16,
//     padT = 16,
//     padB = 34
//   const plotW = w - padL - padR
//   const plotH = h - padT - padB
//   const maxY = 5

//   // ---- LTTB decimation (Largest-Triangle-Three-Buckets) for time series
//   function lttb(
//     data: { x: number; y: number; i: number }[],
//     threshold: number
//   ) {
//     const n = data.length
//     if (threshold >= n || threshold <= 0) return data
//     const sampled: { x: number; y: number; i: number }[] = []
//     let a = 0 // always include first
//     sampled.push(data[a])
//     const bucketSize = (n - 2) / (threshold - 2)
//     for (let i = 0; i < threshold - 2; i++) {
//       const rangeStart = Math.floor((i + 1) * bucketSize) + 1
//       const rangeEnd = Math.floor((i + 2) * bucketSize) + 1
//       const range = data.slice(rangeStart, rangeEnd)

//       const nextStart = Math.floor((i + 2) * bucketSize) + 1
//       const nextEnd = Math.floor((i + 3) * bucketSize) + 1
//       const nextRange = data.slice(nextStart, nextEnd)
//       const avgX =
//         nextRange.reduce((s, p) => s + p.x, 0) / Math.max(1, nextRange.length)
//       const avgY =
//         nextRange.reduce((s, p) => s + p.y, 0) / Math.max(1, nextRange.length)

//       let maxArea = -1,
//         maxIdx = rangeStart
//       for (let j = 0; j < range.length; j++) {
//         const p = range[j]
//         // area of triangle (data[a], p, avg)
//         const area = Math.abs(
//           (data[a].x - avgX) * (p.y - data[a].y) -
//             (data[a].x - p.x) * (avgY - data[a].y)
//         )
//         if (area > maxArea) {
//           maxArea = area
//           maxIdx = rangeStart + j
//         }
//       }
//       sampled.push(data[maxIdx])
//       a = maxIdx
//     }
//     sampled.push(data[n - 1]) // last
//     return sampled
//   }

//   // Prepare numeric x for decimation (index as x)
//   const raw = points.map((p, i) => ({ x: i, y: p.avg, i }))
//   const dense = raw.length > MAX_POINTS
//   const ds = dense ? lttb(raw, MAX_POINTS) : raw

//   // Scales
//   const xForRawIndex = (idx: number) => {
//     const t = raw.length > 1 ? idx / (raw.length - 1) : 0
//     return padL + t * plotW
//   }
//   const yFor = (v: number) => padT + (plotH - (v / maxY) * plotH)

//   // Path (decimated points only)
//   const path = ds
//     .map((p, k) => `${k === 0 ? 'M' : 'L'} ${xForRawIndex(p.i)} ${yFor(p.y)}`)
//     .join(' ')

//   // Y axis ticks
//   const yTicks = [0, 1, 2, 3, 4, 5]

//   // X axis ticks (stride over RAW indices for even spacing)
//   const stride = Math.max(1, Math.ceil(raw.length / TARGET_X_TICKS))
//   const xTickIdxs: number[] = []
//   for (let i = 0; i < raw.length; i += stride) xTickIdxs.push(i)
//   if (xTickIdxs[xTickIdxs.length - 1] !== raw.length - 1)
//     xTickIdxs.push(raw.length - 1)

//   return (
//     <svg
//       viewBox={`0 0 ${w} ${h}`}
//       style={{
//         width: '100%',
//         height: "100%",
//         background: '#0b1220',
//         border: '1px solid #1b2333',
//         borderRadius: 12,
//       }}
//     >
//       {/* grid + y labels */}
//       {yTicks.map((t) => (
//         <g key={t}>
//           <line
//             x1={padL}
//             y1={yFor(t)}
//             x2={w - padR}
//             y2={yFor(t)}
//             stroke="#28324a"
//           />
//           <text
//             x={padL - 8}
//             y={yFor(t) + 3}
//             fontSize="10"
//             textAnchor="end"
//             fill="#7a8599"
//           >
//             {t}
//           </text>
//         </g>
//       ))}

//       {/* series */}
//       <path d={path} fill="none" stroke="currentColor" strokeWidth="2" />
//       {!dense &&
//         ds.map((p) => (
//           <circle
//             key={p.i}
//             cx={xForRawIndex(p.i)}
//             cy={yFor(p.y)}
//             r="3"
//             fill="currentColor"
//           />
//         ))}

//       {/* axes */}
//       <line
//         x1={padL}
//         y1={h - padB}
//         x2={w - padR}
//         y2={h - padB}
//         stroke="#28324a"
//       />
//       <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="#28324a" />

//       {/* x labels (stride) */}
//       {xTickIdxs.map((idx) => (
//         <text
//           key={idx}
//           x={xForRawIndex(idx)}
//           y={h - 8}
//           fontSize="10"
//           textAnchor="middle"
//           fill="#7a8599"
//         >
//           {points[idx].month}
//         </text>
//       ))}

//       {/* density badge */}
//       {dense && (
//         <text
//           x={w - padR}
//           y={padT + 10}
//           fontSize="10"
//           textAnchor="end"
//           fill="#7a8599"
//         >
//           {raw.length}→{ds.length} pts (LTTB)
//         </text>
//       )}
//     </svg>
//   )
// }
//  */
