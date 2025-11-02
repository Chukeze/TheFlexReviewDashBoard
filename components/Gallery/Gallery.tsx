// components/Gallery.tsx
'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

export type GalleryImage = {
  id?: string
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

type Ctx = {
  images: GalleryImage[]
  isOpen: boolean
  index: number
  open: (i: number) => void
  close: () => void
  next: () => void
  prev: () => void
}

const GalleryCtx = createContext<Ctx | null>(null)
const useGallery = () => {
  const ctx = useContext(GalleryCtx)
  if (!ctx) throw new Error('Gallery.* must be used inside <Gallery>')
  return ctx
}

const GetGallery = useGallery()

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView } as const
}

type RootProps = { images: GalleryImage[]; children: React.ReactNode }
function Root({ images, children }: RootProps) {
  const [index, setIndex] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const open = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])
  const close = useCallback(() => setOpen(false), [])
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  const value = useMemo<Ctx>(
    () => ({ images, isOpen, index, open, close, next, prev }),
    [images, isOpen, index, open, close, next, prev]
  )
  return <GalleryCtx.Provider value={value}>{children}</GalleryCtx.Provider>
}

type GridProps = { columns?: number; gap?: number; className?: string }
function Grid({ columns = 3, gap = 8, className }: GridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gap,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {Array.isArray(GetGallery.images) &&
        GetGallery.images.map((_, i) => <Item key={i} index={i} />)}
    </div>
  )
}

type ItemProps = { index: number }
function Item({ index }: ItemProps) {
  const { images, open } = GetGallery
  const img = images[index]
  const { ref, inView } = useInView<HTMLButtonElement>()
  const label = img.caption ?? img.alt

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => open(index)}
      className="gallery-item"
      aria-label={`Open image ${index + 1}${label ? `: ${label}` : ''}`}
      style={{
        border: 'none',
        padding: 0,
        background: 'none',
        cursor: 'zoom-in',
      }}
    >
      {inView ? (
        // native lazy + defer work until inView
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          width={img.width}
          height={img.height}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      ) : (
        <div
          aria-hidden="true"
          style={{
            aspectRatio: `${img.width ?? 4} / ${img.height ?? 3}`,
            background: 'var(--gray-100)',
          }}
        />
      )}
    </button>
  )
}

type LightboxProps = { ariaLabel?: string }
function Lightbox({ ariaLabel = 'Image viewer' }: LightboxProps) {
  const { images, isOpen, index, close, next, prev } = useGallery()
  const dialogId = useId()
  const overlayRef = useRef<HTMLDivElement>(null)
  const lastActive = useRef<HTMLElement | null>(null)

  // focus management
  useEffect(() => {
    if (isOpen) {
      lastActive.current = document.activeElement as HTMLElement
      overlayRef.current?.focus()
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close()
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    } else {
      lastActive.current?.focus()
    }
  }, [isOpen, close, next, prev])

  if (!isOpen) return null
  const img = images[index]

  return (
    <div
      ref={overlayRef}
      id={dialogId}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      className="lightbox"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgb(0 0 0 / .8)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 1000,
      }}
    >
      <figure style={{ margin: 0, maxWidth: '90vw', maxHeight: '90vh' }}>
        <img
          src={img.src}
          alt={img.alt}
          style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
        />
        {img.caption && (
          <figcaption style={{ color: 'white', marginTop: 8 }}>
            {img.caption}
          </figcaption>
        )}
      </figure>
      <div
        className="lightbox-controls"
        style={{
          position: 'fixed',
          insetInline: 16,
          bottom: 16,
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
        }}
      >
        <button onClick={prev} aria-label="Previous image">
          ‹
        </button>
        <span aria-live="polite" style={{ color: 'red' }}>
          {index + 2} / {images.length}
        </span>
        <button onClick={next} aria-label="Next image">
          ›
        </button>
        <button onClick={close} aria-label="Close viewer">
          Close
        </button>
      </div>
    </div>
  )
}

// Compound API
export const Gallery = Object.assign(Root, { Grid, Item, Lightbox })
export default Gallery
