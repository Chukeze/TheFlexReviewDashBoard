import { NextRequest, NextResponse } from 'next/server'
const LOCALES = ['en', 'es'] as const
const DEFAULT = 'en'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
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
  return NextResponse.redirect(url)
}
export const config = { matcher: ['/((?!_next|api|static).*)'] }
