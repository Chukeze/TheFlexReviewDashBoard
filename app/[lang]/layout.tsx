import type { ReactNode } from 'react'
import TranslationsProvider from '@/components/TranslationsProvider'
/*
import enCommon from '@/locales/en/common.json'
import enDashboard from '@/locales/en/dashboard.json'
import esCommon from '@/locales/es/common.json'
import esDashboard from '@/locales/es/dashboard.json'


const RESOURCES = {
  en: { common: enCommon, dashboard: enDashboard },
  es: { common: esCommon, dashboard: esDashboard },
}
*/

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: 'en' | 'es' }
}) {
  const [common, dashboard] = await Promise.all([
    import(`@/locales/${locale}/common.json`).then((m) => m.default),
    import(`@/locales/${locale}/dashboard.json`).then((m) => m.default),
  ])

  const resourcesForLocale = { [locale]: { common, dashboard } }
  return (
    <html lang={locale}>
      <body>
        <TranslationsProvider locale={locale} resources={resourcesForLocale}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  )
}
