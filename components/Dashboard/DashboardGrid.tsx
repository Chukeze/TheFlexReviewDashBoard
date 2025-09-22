'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

type Size = number // px
const STEPS: Size[] = [240, 320, 420, 560, 720] // snap points

function snap(px: number) {
  return STEPS.reduce(
    (prev, cur) => (Math.abs(cur - px) < Math.abs(prev - px) ? cur : prev),
    STEPS[0]
  )
}

export default function DashboardGrid({
  children,
}: {
  children: React.ReactNode
}) {
  const [col1, setCol1] = useState<Size>(
    () => Number(localStorage.getItem('col1')) || 420
  )
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const start = useRef(col1)

  // SSR-safe read of localStorage
  useEffect(() => {
    try {
      const raw =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('col1')
          : null
      if (raw) setCol1(Number(raw) || 420)
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('col1', String(col1))
  }, [col1])

  const template = useMemo(() => `${col1}px 8px 1fr`, [col1]) // [left] [handle] [right]

  const onDown = (e: React.PointerEvent) => {
    setDragging(true)
    startX.current = e.clientX
    start.current = col1
    ;(e.target as Element).setPointerCapture(e.pointerId)
  }
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return
    const next = snap(start.current + (e.clientX - startX.current))
    setCol1(Math.max(STEPS[0], Math.min(STEPS[STEPS.length - 1], next)))
  }
  const onUp = () => setDragging(false)

  return (
    <div
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: template,
        gridTemplateRows: 'auto',
        gap: 8,
        minHeight: '60vh',
      }}
      onPointerMove={onMove}
      onPointerUp={onUp}
    >
      <div className="panel a" aria-label="Primary panel">
        {children instanceof Array ? children[0] : children}
      </div>
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panels"
        tabIndex={0}
        onPointerDown={onDown}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setCol1(snap(col1 - 40))
          if (e.key === 'ArrowRight') setCol1(snap(col1 + 40))
        }}
        style={{ cursor: 'col-resize', background: 'var(--gray-200)' }}
      />
      <div className="panel b" aria-label="Secondary panel">
        {children instanceof Array ? children.slice(1) : null}
      </div>
    </div>
  )
}
