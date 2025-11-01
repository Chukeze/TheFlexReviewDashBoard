'use client'
import { useState } from 'react'
import '@/styles/property.css'
import PropertyAmenities from './PropertyAmenities'
import StayPolicy from './StayPolicy'
import { useTranslation } from 'react-i18next'

type ListingLike = {
  name?: string
  propertyDesc?: string | null
  amenities?: string[]
  rules?: string[]
  policies?: string[]
} | undefined

export default function PropertyDetails({ listing }: { listing?: ListingLike}) {

  const { t } = useTranslation('common')

  const [expanded, setExpanded] = useState(false)

  const about = (listing?.propertyDesc && String(listing.propertyDesc)) ||
    `Located in Finsbury, this spacious apartment is perfect for your stay. ` +
    `The location is great – close to public transport, local shops, and parks. ` +
    `It’s fully equipped with quality amenities to ensure a comfortable stay. ` +
    `I’ve made sure everything is clean, tidy, and ready for you to enjoy. If you need`

  return (
    <>
      {/* About */}
      <section className="fx-card">
        <h2 className="fx-h2">{t('About This Property')}</h2>
        <p className="fx-body">
          <span className={expanded ? '' : 'fx-clamp'}>{t(`${about}`)}</span>
          <button
            type="button"
            className="fx-link"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="about-more"
          >
            {expanded ? t('ShowLess') : t('readMore')}
          </button>
        </p>
      </section>
      <PropertyAmenities amenities={listing?.amenities} />
      <StayPolicy />
    </>
  )
}
