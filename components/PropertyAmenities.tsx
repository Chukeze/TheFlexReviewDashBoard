'use client'
import { useState } from 'react'
import '@/styles/property.css'

export default function PropertyAmenities() {
  return (
    <>
      {/* Amenities */}
      <section className="fx-card">
        <header className="fx-row fx-space">
          <h2 className="fx-h2">Amenities</h2>
          <button type="button" className="fx-btn fx-btn-outline">
            <span>View all amenities</span>
            <svg
              className="fx-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </header>

        <div className="fx-grid fx-grid-amenities">
          <Amenity icon="network" label="Internet" />
          <Amenity icon="wifi" label="Wireless" />
          <Amenity icon="kitchen" label="Kitchen" />
          <Amenity icon="washer" label="Washing Machine" />
          <Amenity icon="wind" label="Hair Dryer" />
          <Amenity icon="thermo" label="Heating" />
          <Amenity icon="shield" label="Smoke detector" />
          <Amenity icon="shield" label="Carbon Monoxide Detector" />
          <Amenity icon="bath" label="Essentials" />
        </div>
      </section>
    </>
  )
}

/* Small amenity item */
function Amenity({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="fx-amenity">
      <span className="fx-amenity-icon">{renderIcon(icon)}</span>
      <span className="fx-amenity-text">{label}</span>
    </div>
  )
}

/* Icons as inline SVG (React-friendly) */
function renderIcon(name: string) {
  switch (name) {
    case 'network':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
          <path d="M12 12V8" />
        </svg>
      )
    case 'wifi':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M8.5 16.43a5 5 0 0 1 7 0" />
        </svg>
      )
    case 'kitchen':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
          <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
          <path d="m2.1 21.8 6.4-6.3" />
          <path d="m19 5-7 7" />
        </svg>
      )
    case 'washer':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h3" />
          <path d="M17 6h.01" />
          <rect width="18" height="20" x="3" y="2" rx="2" />
          <circle cx="12" cy="13" r="5" />
          <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
        </svg>
      )
    case 'wind':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
          <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
          <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
      )
    case 'thermo':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'bath':
      return (
        <svg
          className="fx-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          <line x1="10" x2="8" y1="5" y2="7" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <line x1="7" x2="7" y1="19" y2="21" />
          <line x1="17" x2="17" y1="19" y2="21" />
        </svg>
      )
    default:
      return null
  }
}
