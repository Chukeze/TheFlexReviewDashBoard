import { ChartType, DerivedMetrics } from '@/lib/types'
import LineChart from './LineChart'
import BarChart from './BarChart'
import ChannelVolumeChart from './ChannelVolumeChart'
import CategoryHeatmap from './CategoryHeatmap'

export default function ChartSwitcher({
  chart,
  setChart,
  timeline,
  channels,
  derived,
  windowDays,
}: {
  chart: ChartType
  setChart: (c: ChartType) => void
  timeline: Array<{ month: string; avg: number }>
  channels: string[]
  derived: DerivedMetrics | null
  windowDays: number | null
}) {
  const options: { value: ChartType; label: string }[] = [
    { value: 'trend', label: 'Average Rating (Monthly)' },
    { value: 'channelVolume', label: 'Review Volume by Channel' },
    {
      value: 'volPerListing',
      label: `Review Volume per Listing (Last ${windowDays ?? ''}${
        windowDays ? 'd' : ''
      })`,
    },
    { value: 'ratingDist', label: 'Rating Distribution' },
    {
      value: 'categoryHeatmap',
      label: `Category Heatmap (${windowDays ?? ''}${
        windowDays ? 'd' : ''
      } Δ vs prior ${windowDays ?? ''}${windowDays ? 'd' : ''})`,
    },
  ]
  const current = options.find((o) => o.value === chart)!
  const cycle = () => {
    const idx = options.findIndex((o) => o.value === chart)
    setChart(options[(idx + 1) % options.length].value)
  }

  return (
    <div className="card">
      <div
        className="row"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h3 style={{ marginTop: 0 }}>Insights</h3>
        <select
          value={chart}
          onChange={(e) => setChart(e.target.value as ChartType)}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div
        onClick={cycle}
        style={{ cursor: 'pointer' }}
        title="Click to switch chart"
        className="chart-area"
      >
        {chart === 'trend' && <LineChart points={timeline} />}
        {chart === 'channelVolume' &&
          (!!derived ? (
            <ChannelVolumeChart
              points={derived.monthChanPoints}
              channels={channels}
            />
          ) : (
            <p className="muted">No data.</p>
          ))}
        {chart === 'volPerListing' &&
          (!!derived ? (
            <BarChart
              items={derived.volReviewsByListing
                .slice(0, 12)
                .map((x) => ({ label: x.name, value: x.count }))}
            />
          ) : (
            <p className="muted">No data.</p>
          ))}
        {chart === 'ratingDist' &&
          (!!derived ? (
            <BarChart
              items={derived.ratingDistribution.map((c, i) => ({
                label: `${i}–${i + 1}`,
                value: c,
              }))}
            />
          ) : (
            <p className="muted">No data.</p>
          ))}
        {chart === 'categoryHeatmap' &&
          (!!derived ? (
            <CategoryHeatmap
              heat={derived.heatRows}
              peersCount={derived.heatRows[0]?.cells.length || 0}
            />
          ) : (
            <p className="muted">No data.</p>
          ))}
      </div>

      <div className="small muted">
        Showing: {current.label} • Click chart to cycle
      </div>
    </div>
  )
}
