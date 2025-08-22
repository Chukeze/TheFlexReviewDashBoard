'use client'
import { useState } from "react"
import '@/styles/property.css'
import PropertyAmenities from "./PropertyAmenities"
import StayPolicy from "./StayPolicy"

export default function PropertyDetails() {
    const [expanded, setExpanded] = useState(false)
    const [data, setData] = useState()
    
  const about =
    `Located in Finsbury, this spacious apartment is perfect for your stay. ` +
    `The location is great – close to public transport, local shops, and parks. ` +
    `It’s fully equipped with quality amenities to ensure a comfortable stay. ` +
    `I’ve made sure everything is clean, tidy, and ready for you to enjoy. If you need...`

  return (
    <>
      {/* About */}
      <section className="fx-card">
        <h2 className="fx-h2">About this property</h2>
        <p className="fx-body">
          <span className={expanded ? '' : 'fx-clamp'}>{about}</span>
          <button
            type="button"
            className="fx-link"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="about-more"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </p>
      </section>
      <PropertyAmenities/>
      <StayPolicy/>
    </>
  )
}