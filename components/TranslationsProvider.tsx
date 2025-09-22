'use client'

import React, { useEffect, useRef } from 'react'
import i18next, { Resource } from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

export default function TranslationsProvider({
  locale,
  resources,
  children,
}: {
  locale: string
  resources: Resource
  children: React.ReactNode
}) {
  const i18nRef = useRef(i18next.createInstance())
  useEffect(() => {
    i18nRef.current.use(initReactI18next).init({
      lng: locale,
      fallbackLng: 'en',
      resources,
      interpolation: { escapeValue: false },
      returnNull: false,
    })
  }, [locale, resources])

  return <I18nextProvider i18n={i18nRef.current}>{children}</I18nextProvider>
}
