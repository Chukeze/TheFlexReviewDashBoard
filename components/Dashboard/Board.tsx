import { useFilters } from '@/hooks/providers/FiltersProviders'
import { useDashboardData } from '@/hooks/useDashboardData'
import { useURLSync } from '@/hooks/useURLSync'
import NoticeBar from '../NoticeBar'
import { useState } from 'react'
import Controls from './Controls'

export default function Board({ children }: { children?: React.ReactNode }) {
  const [noticeMessage, setNoticeMessage] = useState<string>('')
  const filters = useFilters()
  useURLSync(filters!)

  const { payload, error, isLoading, isValidating } = useDashboardData(filters!)

  console.log('Dashboard payload:', filters)

  function showNotice(msg: string) {
    setNoticeMessage(msg)
    //auto-dismiss after 5s
    window.clearTimeout((showNotice as any)._timeout)
    ;(showNotice as any)._timeout = window.setTimeout(
      () => setNoticeMessage(''),
      5000
    )
  }

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!payload) return <p>No data</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {isValidating && <p>Refreshing...</p>}
      {
        <>
          <div className="card elevated">
            <h2 style={{ marginTop: 0 }}>Reviews Dashboard</h2>
            <p className="muted">
              Filter, spot trends, triage issues, and approve reviews for
              display on property pages.
            </p>
          </div>
          <NoticeBar
            message={noticeMessage}
            onClose={() => setNoticeMessage('')}
          />
          <Controls payload={payload} isLoading={isLoading} />

          {children}
        </>
      }
    </div>
  )
}
