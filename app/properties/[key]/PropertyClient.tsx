'use client'
import Image from 'next/image'
import InitGalleryButton from '@/components/InitGalleryButton'
import PropertyDetails from '@/components/PropertyDetails'
import { useFetch } from '@/hooks/useFetch'
import { initGallery } from '@/lib/compute'
import { PropertyResponse } from '@/lib/types'
import { useMemo } from 'react'
import './gallery.css'
import { Stars } from '@/components/ReviewCard'
import { altFromSlug, getPropertyImages } from '@/lib/propertyImages'

export default function PropertyClient({ slug }: { slug: string }) {
  const options = useMemo(
    () => ({
      method: 'GET',
      cache: 'no-store' as const,
    }),
    []
  )

  const { data, isLoading, isError } = useFetch<PropertyResponse>(
    `/api/property/${encodeURIComponent(slug)}`,
    options
  )

  if (isError) {
    return (
      <main className="theme-flex">
        <div className="card">
          <h3>Property not found</h3>
          <p className="muted">We couldn’t load this listing.</p>
        </div>
      </main>
    )
  }

  if (isLoading || !data) {
    return (
      <main className="theme-flex">
        <div className="card">
          <p className="muted">Loading…</p>
        </div>
      </main>
    )
  }

  const { listing, reviews } = data
  const listingName = listing?.name || slug
  const images = getPropertyImages(listing.slug)
  const reviewsRatings = reviews
    .map((r) => r.overall)
    .filter((s): s is number => s !== null)
  const averageRating =
    reviewsRatings.reduce((sum, r) => sum + r, 0) / (reviewsRatings.length || 1)

  return (
    <main className="theme-flex">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="gallery" id="property-gallery">
          <div
            className="gallery__mobile"
            role="region"
            aria-roledescription="carousel"
            aria-label="Property photos"
          >
            <div className="gallery__viewport" data-gallery-viewport>
              <div className="gallery__track" data-gallery-track>
                {images.map((src, i) => (
                  <div
                    key={`slide-${i}`}
                    className="gallery__slide"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${images.length}`}
                  >
                    <div className="gallery__ratio">
                      <div className="gallery__imgwrap">
                        <Image
                          src={src}
                          alt={altFromSlug(slug, i)}
                          className="gallery__img"
                          width={1200}
                          height={800}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="gallery__nav gallery__nav--prev"
              type="button"
              data-gallery-prev
              aria-label="Previous slide"
              title="Previous"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button
              className="gallery__nav gallery__nav--next"
              type="button"
              data-gallery-next
              aria-label="Next slide"
              title="Next"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
              >
                <path d="M9 6l6 6-6 6"></path>
              </svg>
            </button>

            <button className="gallery__viewall" type="button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m21 21-6-6M3 16.2V21h4.8L21 7.8V3h-4.8L3 16.2z"></path>
              </svg>
              View all
            </button>

            <div
              className="gallery__counter"
              aria-live="polite"
              data-gallery-counter
            >
              1 / {images.length}
            </div>
          </div>

          <div className="gallery__desktop">
            <div className="gallery-grid">
              {images.slice(0, 5).map((src, i) => (
                <figure
                  key={i}
                  className={[
                    'gallery-grid__item',
                    i === 0 ? 'gallery-grid__item--main' : '',
                    i === 3 ? 'gallery-grid__item--tr' : '',
                  ].join(' ')}
                >
                  <Image
                    src={src}
                    alt={altFromSlug(slug, i)}
                    width={i === 0 ? 1200 : 600}
                    height={i === 0 ? 800 : 400}
                    sizes={
                      i === 0
                        ? '(min-width: 1024px) 60vw, 90vw'
                        : '(min-width: 1024px) 20vw, 45vw'
                    }
                    className="gallery__img"
                    priority={i === 0}
                    unoptimized
                  />
                  <div className="gallery-grid__overlay" aria-hidden="true" />
                </figure>
              ))}
              <InitGalleryButton viewAll={initGallery} />
            </div>
          </div>
        </div>
        <div style={{ padding: '0 0 0 0' }}>
          <h2>{listingName}</h2>
          <p className="muted">
            Property details layout (simplified) with approved guest reviews
            below.
          </p>
        </div>
      </div>
      <div className="container" id="propertydetail__container">
        <main className="grid" style={{ gap: 24 }}>
          <PropertyDetails listing={listing} />
          <div className="card">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                <h3 className="header">Guest Reviews</h3>
                <Stars value={Number(averageRating.toFixed(2))} />
              </div>
              <span>
                <strong>{reviews.length}</strong>
              </span>
            </div>
            {!reviews.length && (
              <p className="muted">No approved reviews yet.</p>
            )}
            {reviews.map((r) => (
              <div key={r.id} className="border" style={{ marginBottom: 16 }}>
                <div
                  className="row small muted"
                  style={{ justifyContent: 'space-between' }}
                >
                  <span>
                    Channel: <span className="badge">{r.channel}</span>
                  </span>
                  <span>{new Date(r.submittedAt).toDateString()}</span>
                </div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>
                  {r.overall.toFixed(2)} / 5
                  <span>
                    <Stars value={Number(r.overall.toPrecision(4))} />
                  </span>
                </div>
                <p style={{ marginTop: 4 }}>{r.text}</p>
                <div className="small muted">— {r.guestName}</div>
                <hr />
              </div>
            ))}
          </div>
        </main>
        <aside>
          <div className="booking">
            <div
              style={{
                backgroundColor: 'var(--fx-brand)',
                width: '100%',
                padding: '4px 16px',
                borderRadius: '12px 12px 0 0',
                color: 'var(--brand-white)',
              }}
            >
              <h4>Book your stay</h4>
              <p className="small">Select dates to see the total price</p>
            </div>
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div className="grid w-full h-full [&amp;>button]:w-full [&amp;>button]:justify-start [&amp;>button]:text-left [&amp;>button]:h-[42px] [&amp;>button]:bg-[#F1F3EE] [&amp;>button]:border-0 [&amp;>button]:shadow-sm [&amp;>button]:hover:bg-[#FFFDF6] [&amp;>button]:rounded-l-md [&amp;>button]:rounded-r-none">
                <button
                  className="inline-flex items-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input px-4 py-2 w-full h-full justify-start text-left font-normal bg-transparent border-0 shadow-none transition-colors rounded-none group hover:bg-transparent hover:text-current text-muted-foreground"
                  id="date"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r64:"
                  data-state="closed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar mr-2 h-4 w-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>
                    <span>Select dates</span>
                  </span>
                </button>
              </div>
              <div className="w-[380px]">
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r65:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex w-full items-center justify-between rounded-md border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-[42px] bg-[#F1F3EE] border-0 shadow-sm hover:bg-[#FFFDF6] transition-colors text-[#333333] rounded-l-none rounded-r-md"
                  aria-label="Select number of guests"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span style={{ pointerEvents: 'none' }}>1</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <button className="button primary" style={{ width: '100%' }}>
                Check availability
              </button>
              <button className="button secondary" style={{ width: '100%' }}>
                Send Inquiry
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
