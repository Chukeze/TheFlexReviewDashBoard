'use client'

import { initGallery } from "@/lib/compute"

export default function InitGalleryButton({ viewAll }: {viewAll: () => void}) {
    
  return (
    <button className="gallery-grid__cta" type="button" onClick={() => viewAll()}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m21 21-6-6m6 6v-4.8h-4.8M3 16.2V21h4.8"></path>
      <path d="M21 7.8V3h-4.8M3 7.8V3h4.8"></path>
    </svg>
    View all photos
  </button>
  )
}
