import type { ReactNode } from 'react'
import TranslationsProvider from '@/components/TranslationsProvider'
import { SUPPORTED_LOCALES, NAMESPACES, type AppLocale } from '@/lib/i18n'

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

async function loadResourcesFor(locale: AppLocale) {
  // Dynamically import only what we need for the current locale
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      const mod = await import(`@/locales/${locale}/${ns}.json`)
      return [ns, mod.default] as const
    })
  )
  // { common: {...}, dashboard: {...} }
  return Object.fromEntries(entries) as Record<string, Record<string, unknown>>
}

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
  params: { locale }
}) {
  /*const [common, dashboard] = await Promise.all([
    import(`@/locales/${locale}/common.json`).then((m) => m.default),
    import(`@/locales/${locale}/dashboard.json`).then((m) => m.default),
  ])*/

  const resourcesForLocale = await loadResourcesFor(locale)   //{ [locale]: { common, dashboard } }
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
