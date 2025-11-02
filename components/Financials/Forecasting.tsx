import { useFilters } from "@/hooks/providers/FiltersProviders"
import { useDashboardData } from "@/hooks/useDashboardData"
import { useURLSync } from "@/hooks/useURLSync"

export default function Forecasting() {
        const filters = useFilters()
        useURLSync(filters!)
    
        const {payload, error, isLoading, isValidating} = useDashboardData(filters!)
  /**
   * Key metrics/ scenario 1: User want to know how this specific review will impact forecasting
   * - Review sentiment (positive/negative)
   * - Review volume (number of reviews)
   * - Historical forecasting data for the listing
   * Key scenario 2: User wants to understand the overall impact of all similar reviews to this one reviews on forecasting
   * - Aggregate review sentiment
   * - Total review volume
   * - Trend analysis of historical forecasting data
   *
   * Key scenario 3: User wants to compare the impact of different types of reviews on forecasting across multiple listings
   * - Review categories (e.g., maintenance, management, amenities)
   * - Comparative forecasting across listings
   * - Correlation analysis between review types and forecasting
   *
   * Key scenario 4: User to know how review from specific channel impact forecasting from either a specific review or collated reviews
   * - Channel-specific review sentiment
   *
   * Key scenario 5: User wants to know how review of specific category impact forecasting from either a specific review or collated reviews
   * - Category-specific review sentiment
   * - Category-specific review volume
   *
   * Key scenario 6: User wants to understand the trend of forecasting over time for listings with similar reviews
   */
  return (
    <div className="card elevated">
      <h3>Financial Forecasting</h3>
      <p>Coming Soon...</p>
      <article>
        <h3>Demand Forecasting</h3>
        <p>Predict a Review&apos;s Impact on Demands</p>
      </article>
      <article>
        <h3>Supply Forecasting</h3>
        <p>Assess Market Trends and Supply Constraints</p>
      </article>
      <article>
        <h3>Revenue Projections</h3>
        <p>Estimate Future Revenue Based on Review Trends</p>
      </article>
    </div>
  )
}