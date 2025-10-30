import { NextRequest, NextResponse } from 'next/server'
import { SUPPORTED_LOCALES } from '@/lib/i18n'
//const LOCALES = ['en', 'es'] as const
//const DEFAULT = 'en'

export function middleware(req: NextRequest) {
    const url = new URL(req.url)
    const path = url.pathname

    const hasLocalePrefix = SUPPORTED_LOCALES.some(
      (l) => path === `/${l}` || path.startsWith(`/${l}/`)
    )
    if (hasLocalePrefix) return NextResponse.next()

    // naive default; you could detect from Accept-Language header
    const defaultLocale = 'en'
    return NextResponse.redirect(new URL(`/${defaultLocale}${path}`, req.url))
 /* const { pathname } = req.nextUrl
  if (
    LOCALES.some((l) => pathname.startsWith(`/${l}/`)) ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }
  const lang =
    req.headers.get('accept-language')?.split(',')[0].split('-')[0] ?? DEFAULT
  const locale = (LOCALES as readonly string[]).includes(lang) ? lang : DEFAULT
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)*/
}
export const config = { matcher: ['/((?!_next|api|static).*)'] }
