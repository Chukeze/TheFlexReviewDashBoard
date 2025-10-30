import type { ReactNode } from 'react'
import TranslationsProvider from '@/components/TranslationsProvider'
//import enCommon from '@/locales/en/common.json'
//import enDashboard from '@/locales/en/dashboard.json'
//import esCommon from '@/locale/es/common.json'
//import esDashboard from '@/locales/es/dashboard.json'

const RESOURCES = {
  //en: { common: enCommon, dashboard: enDashboard },
 // es: { common: esCommon, dashboard: esDashboard },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: 'en' | 'es' }
}) {
  return (
    <html lang={locale}>
      <body>
        <TranslationsProvider locale={locale} resources={RESOURCES[locale]}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  )
}
