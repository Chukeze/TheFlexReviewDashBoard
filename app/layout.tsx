import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Flex Living – Reviews',
  description: 'Manager dashboard and public reviews page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header
          className="row"
          style={{
            padding: 15,
            backgroundColor: 'var(--brand-700)',
            justifyContent: 'space-between',
            marginBottom: 24,
            width: '100%',
            position:'sticky'
          }}
        >
          <div className="row" style={{ gap: 12 }}>
            <Link href="/">
              <strong>The Flex</strong>
            </Link>
            <span className="muted">Reviews Suite</span>
          </div>
          <nav className="row" style={{ gap: 12 }}>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/properties/soho-studio-king-bed">
              Example Property
            </Link>
          </nav>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
