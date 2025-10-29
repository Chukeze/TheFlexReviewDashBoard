import { useFilters } from '@/hooks/providers/FiltersProviders'
import { useDashboardData } from '@/hooks/useDashboardData'
import { useURLSync } from '@/hooks/useURLSync'
import Image from 'next/image'
import { useState } from 'react'
import VacancyRateCharts from '../Financials/VacancyRateCharts'

export default function BoardItem({ listing, listingDesc }:{ listing: string[], listingDesc: string }) {
  const [review, setReview] = useState<string>()
  //when they use the filter it, filter and then bring up the listing info alongside the reviews for that listing
  const filters = useFilters()
  useURLSync(filters!)

  const { payload } = useDashboardData(filters!)

  function handleReviewClick(reviewId: string) {
    setReview(reviewId)
    //navigate or change to the financials impact of that specific review
    return (
      <VacancyRateCharts
        reviewId={Number.parseInt(review!)}
        reviewContent={payload?.reviews[Number.parseInt(review!)].text!}
      />
    )
  }
  return (
    <div className="board-item">
      <header>
        <h3>{listing.length < 2 && listing}</h3>
        {/*<Image
          src="/path/to/image.jpg"
          alt={listing ?? 'lising'}
          width={100}
          height={100}
        />*/}
        <p>{listingDesc}</p>
      </header>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
        {payload?.reviews?.map((rev, index) => (
          <>
            <div
              onClick={() => handleReviewClick(rev.id)}
              className="card elevated"
              key={index}
              style={{ width: 'fit-content', cursor: 'pointer' }}
            >
              <li key={index} >
                {rev.text}
              </li>
            </div>
            {/* // Review that when clicked navigates or changes to the finaincials
            impact of that specific review}*/}
          </>
        ))}
      </ul>
    </div>
  )
}
