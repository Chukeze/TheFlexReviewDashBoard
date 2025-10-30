'use client'

import React, { useEffect, useMemo, useRef } from 'react'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

type Namespaces = Record<string, Record<string, unknown>>

export default function TranslationsProvider({
  locale,
  resources,
  children,
}: {
  locale: string
  resources: Namespaces
  children: React.ReactNode
}) {
  const i18nRef = useRef(i18next.createInstance()).current
  const ns = useMemo(() => Object.keys(resources), [resources])

  useEffect(() => {
    if (!i18nRef.isInitialized) {
      i18nRef.use(initReactI18next).init({
        lng: locale,
        fallbackLng: 'en',
        resources: { [locale]: resources },
        ns,
        defaultNS: ns.includes('common') ? 'common' : ns[0],
        interpolation: { escapeValue: false },
        returnNull: false,
        react: { useSuspense: false },
      })
      return
    }
    i18nRef.changeLanguage(locale)
    ns.forEach((n) => {
      i18nRef.addResourceBundle(locale, n, resources[n], true, true)
    })
  }, [i18nRef, locale, ns, resources])

  return <I18nextProvider i18n={i18nRef}>{children}</I18nextProvider>
}
