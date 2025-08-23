import { promises as fs } from 'fs'
import path from 'path'
import { normalizeMany } from '@/lib/normalize'
import { getApprovedIds } from '@/lib/approvals'
import { RawReview } from '@/lib/types'
import PropertyDetails from '@/components/PropertyDetails'
import './gallery.css'
import { initGallery } from '@/lib/compute'
import InitGalleryButton from '@/components/InitGalleryButton'

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const raw = await getHostawayReviews();
  const approved = await getApprovedIds();

  const all = normalizeMany(raw.result);
  const reviews = all.filter(
    (r) => r.listingId === slug && approved.has(r.id)
  );

  const listingName = reviews[0]?.listingName || slug;
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
                <div
                  className="gallery__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 8"
                >
                  <div className="gallery__ratio">
                    <div className="gallery__imgwrap">
                      <img
                        className="gallery__img"
                        alt="Living room"
                        src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-w83Mggip99tDcTo76asx4ziO1lK4w-4X6nM-gLYWw-I-65c113682d237"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="gallery__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 8"
                >
                  <div className="gallery__ratio">
                    <div className="gallery__imgwrap">
                      <img
                        className="gallery__img"
                        alt="Garden"
                        src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-LBwCMi04KLS1A0jhfSdFBwE4--kvXN2aIzDP-QB9Esuw-65c12e9c2bcaf"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="gallery__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 8"
                >
                  <div className="gallery__ratio">
                    <div className="gallery__imgwrap">
                      <img
                        className="gallery__img"
                        alt="Bedroom"
                        src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-6WoZ8GoH8HjYGTzvEZL6nVYNSXFSp3kHrUtxx9XerG0-65c12e9b1cf2e"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="gallery__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 of 8"
                >
                  <div className="gallery__ratio">
                    <div className="gallery__imgwrap">
                      <img
                        className="gallery__img"
                        alt="Bedroom 2"
                        src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-6--BUI8Arsxy2JvcypGNzlvnOP334qapcRSyi0A--GrkI-65c12e9a03073"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="gallery__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 of 8"
                >
                  <div className="gallery__ratio">
                    <div className="gallery__imgwrap">
                      <img
                        className="gallery__img"
                        alt="Bathroom"
                        src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-DFAbYalIYdOMK94HjcY6qtNrOx0pBBaSxh--46iHvDX4-65c12e98dc2bd"
                      />
                    </div>
                  </div>
                </div>
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
              1 / 8
            </div>
          </div>

          <div className="gallery__desktop">
            <div className="gallery-grid">
              <figure className="gallery-grid__item gallery-grid__item--main">
                <img
                  alt="Main living area"
                  src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-w83Mggip99tDcTo76asx4ziO1lK4w-4X6nM-gLYWw-I-65c113682d237"
                />
                <div className="gallery-grid__overlay" aria-hidden="true"></div>
              </figure>

              <figure className="gallery-grid__item">
                <img
                  alt="Garden"
                  src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-LBwCMi04KLS1A0jhfSdFBwE4--kvXN2aIzDP-QB9Esuw-65c12e9c2bcaf"
                />
                <div className="gallery-grid__overlay" aria-hidden="true"></div>
              </figure>

              <figure className="gallery-grid__item">
                <img
                  alt="Bedroom"
                  src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-6WoZ8GoH8HjYGTzvEZL6nVYNSXFSp3kHrUtxx9XerG0-65c12e9b1cf2e"
                />
                <div className="gallery-grid__overlay" aria-hidden="true"></div>
              </figure>

              <figure className="gallery-grid__item gallery-grid__item--tr">
                <img
                  alt="Bedroom 2"
                  src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-6--BUI8Arsxy2JvcypGNzlvnOP334qapcRSyi0A--GrkI-65c12e9a03073"
                />
                <div className="gallery-grid__overlay" aria-hidden="true"></div>
              </figure>

              <figure className="gallery-grid__item">
                <img
                  alt="Bathroom"
                  src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-181888-DFAbYalIYdOMK94HjcY6qtNrOx0pBBaSxh--46iHvDX4-65c12e98dc2bd"
                />
                <div className="gallery-grid__overlay" aria-hidden="true"></div>
              </figure>

              <InitGalleryButton viewAll={initGallery}/>
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
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: 24 }}
      >
        <main className="grid" style={{ gap: 24 }}>
          <PropertyDetails />
          <div className="card">
            <h3 className="header">Guest Reviews</h3>
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
                </div>
                <p style={{ marginTop: 4 }}>{r.text}</p>
                <div className="small muted">— {r.guestName}</div>
                <hr />
              </div>
            ))}
          </div>
        </main>
        {/* Right column: placeholder booking card */}
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


async function getHostawayReviews() {
  const file = path.join(
    process.cwd(),
    'data',
    'mock-hostaway-reviews.json'
  )
  return JSON.parse(await fs.readFile(file, 'utf-8')) as {
    status: string
    result: RawReview[]
  } 
}
