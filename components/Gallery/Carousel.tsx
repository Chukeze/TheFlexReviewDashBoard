// components/Carousel.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'

export type Slide = {
  id: string
  content: React.ReactNode
  label?: string // e.g., “Living room photo”
}

type Props = {
  slides: Slide[]
  ariaLabel?: string
  loop?: boolean
  autoPlayMs?: number | null // null = off (recommended)
}

export default function Carousel({
  slides,
  ariaLabel = 'Image carousel',
  loop = true,
  autoPlayMs = null,
}: Props) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isPointerDown = useRef(false)
  const startX = useRef(0)

  const prev = () =>
    setIndex((i) => (i === 0 ? (loop ? slides.length - 1 : 0) : i - 1))
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? (loop ? 0 : i) : i + 1))

  // Stop auto-rotate when focused (per APG guidance).
  useEffect(() => {
    if (!autoPlayMs) return
    const node = containerRef.current
    let timer: any

    const start = () => (timer = setInterval(next, autoPlayMs))
    const stop = () => timer && clearInterval(timer)

    start()
    const onFocusIn = () => stop()
    node?.addEventListener('focusin', onFocusIn)
    node?.addEventListener('mouseenter', stop)
    node?.addEventListener('mouseleave', start)

    return () => {
      stop()
      node?.removeEventListener('focusin', onFocusIn)
      node?.removeEventListener('mouseenter', stop)
      node?.removeEventListener('mouseleave', start)
    }
  }, [autoPlayMs])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  // Basic swipe
  const onPointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true
    startX.current = e.clientX
    ;(e.target as Element).setPointerCapture(e.pointerId)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return
    const dx = e.clientX - startX.current
    if (dx > 40) prev()
    if (dx < -40) next()
    isPointerDown.current = false
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="carousel"
      onKeyDown={onKeyDown}
    >
      <div className="carousel-viewport">
        {slides.map((s, i) => (
          <div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}${
              s.label ? ` — ${s.label}` : ''
            }`}
            className="carousel-slide"
            data-active={i === index || undefined}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {s.content}
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button type="button" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <span aria-live="polite" aria-atomic="true">
          {index + 1} / {slides.length}
        </span>
        <button type="button" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>

      <ul
        className="carousel-dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((s, i) => (
          <li key={s.id} role="presentation">
            <button
              role="tab"
              aria-selected={i === index}
              aria-controls={`slide-${s.id}`}
              onClick={() => setIndex(i)}
              title={`Go to slide ${i + 1}`}
            >
              •
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .carousel {
          display: grid;
          gap: 0.5rem;
        }
        .carousel-viewport {
          position: relative;
          overflow: hidden;
        }
        .carousel-slide {
          display: none;
          touch-action: pan-y;
        }
        .carousel-slide[data-active] {
          display: block;
        }
        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .carousel-dots {
          display: flex;
          gap: 0.25rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        @media (prefers-reduced-motion: no-preference) {
          .carousel-slide[data-active] {
            animation: fade 0.2s linear;
          }
          @keyframes fade {
            from {
              opacity: 0.6;
            }
            to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  )
}
