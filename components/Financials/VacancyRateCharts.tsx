import { useFilters } from "@/hooks/providers/FiltersProviders"
import { useDashboardData } from "@/hooks/useDashboardData"
import { useURLSync } from "@/hooks/useURLSync"

//Estimate future vacancy periods, often assumed around 5%–7%, adjusted for historical data and lease expirations.
export default function VacancyRateCharts({
  reviewId,
  reviewContent,
}: {
  reviewId: number //used to filter to bring up the selected review
  reviewContent: string //used to assist with the analysis
}) {
        const filters = useFilters()
        useURLSync(filters!)
    
        const {payload, error, isLoading, isValidating} = useDashboardData(filters!)
  //Estimate future vacancy rates based on review trends
  /**
   * Key metrics/ scenario 1: User want to know how this specific review will impact vacancy rates
   * - Review sentiment (positive/negative)
   * - Review volume (number of reviews)
   * - Historical vacancy rates for the listing
   * Key scenario 2: User wants to understand the overall impact of all similar reviews to this one reviews on vacancy rates
   * - Aggregate review sentiment
   * - Total review volume
   * - Trend analysis of historical vacancy rates
   *
   * Key scenario 3: User wants to compare the impact of different types of reviews on vacancy rates across multiple listings
   * - Review categories (e.g., maintenance, management, amenities)
   * - Comparative vacancy rates across listings
   * - Correlation analysis between review types and vacancy rates
   *
   * Key scenario 4: User to know how review from specific channel impact vacancy rate rate from either a specific review or collated reviews
   * - Channel-specific review sentiment
   *
   * Key scenario 5: User wants to know how review of specific category impact vacancy rate from either a specific review or collated reviews
   * - Category-specific review sentiment
   * - Category-specific review volume
   *
   * Key scenario 6: User wants to understand the trend of vacancy rates over time for listings with similar reviews
   */
  return (
    <article>
      <h3>Vacancy Rate Charts</h3>
      <button onClick={() => {}}>Download Report</button>
      <button>Collate Similar Reviews</button>
      <section>
        <legend>Predicted Vacancy Rates</legend>
      </section>
      <section>
        <legend>Review Impact Analysis</legend>
        <div>
          <aside>How reviews impact vacancy rates</aside>
          <aside>Correlation Between negative reviews and vacancy rates</aside>
          <aside>Sentiment Analysis Impact</aside>
          <aside>Impact Absorption Rate</aside>
        </div>
      </section>
      <section>
        <legend>
          Trend Over Time <small>for type of review</small>
        </legend>
      </section>
      <section>
        <legend>
          Comparative Analysis <small>across listing for review types</small>
        </legend>
      </section>
      <section>
        {/* Forecast tenant turnover rates, lease expirations, and time to lease new tenants, impacting revenue stability. */}
        <legend>Occupancy and Turnover</legend>
      </section>
    </article>
  )
}
