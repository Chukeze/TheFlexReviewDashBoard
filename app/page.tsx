'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="grid cols-2">
      <div className="card">
        <h2>{t('managerDashboard')}</h2>
        <p className="muted">{t('managerDashboardDescription')}</p>
        <Link className="button primary" href="/dashboard">Open Dashboard</Link>
      </div>
      <div className="card">
        <h2>{t('publicPropertyPage')}</h2>
        <p className="muted">{t('publicPropertyPageDescription')}</p>
        <Link className="button" href="/properties/soho-studio-king-bed">View Example</Link>
      </div>
    </main>
  )
}
