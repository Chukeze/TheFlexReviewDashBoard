'use client'

export default function StayPolicy() {
  return (
    <section className="fx-card">
      <h2 className="fx-h2">Stay Policies</h2>

      <article className="fx-panel">
        <div className="fx-row fx-gap">
          <svg
            className="fx-icon fx-icon-brand"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h3 className="fx-h3">Check‑in &amp; Check‑out</h3>
        </div>

        <div className="fx-grid fx-grid-2">
          <div className="fx-tile">
            <p className="fx-label">Check‑in time</p>
            <p className="fx-value">3:00 PM</p>
          </div>
          <div className="fx-tile">
            <p className="fx-label">Check‑out time</p>
            <p className="fx-value">10:00 AM</p>
          </div>
        </div>
      </article>

      <article className="fx-panel">
        <div className="fx-row fx-gap">
          <svg
            className="fx-icon fx-icon-brand"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h3 className="fx-h3">House Rules</h3>
        </div>

        <div className="fx-grid fx-grid-4">
          <div className="fx-tile">
            <p className="fx-value">No Smoking</p>
          </div>
          <div className="fx-tile">
            <p className="fx-value">No pets</p>
          </div>
          <div className="fx-tile">
            <p className="fx-value">No parties or events</p>
          </div>
          <div className="fx-tile">
            <p className="fx-value">Security deposit required</p>
          </div>
        </div>
      </article>

      <article className="fx-panel">
        <div className="fx-row fx-gap">
          <svg
            className="fx-icon fx-icon-brand"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h3 className="fx-h3">Cancellation Policy</h3>
        </div>

        <div className="fx-grid">
          <div className="fx-tile">
            <p className="fx-value">For stays less than 28 days </p>
            <p className="fx-label"> Full refund up to </p>
          </div>
          <div className="fx-tile">
            <p className="fx-value">For stays of 28 days or more</p>
            <p className="fx-label">
             
              Full refund up to 24 hours before check-in
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}