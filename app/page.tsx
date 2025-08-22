import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid cols-2">
      <div className="card">
        <h2>Manager Dashboard</h2>
        <p className="muted">Filter, spot trends and approve reviews for the public site.</p>
        <Link className="button primary" href="/dashboard">Open Dashboard</Link>
      </div>
      <div className="card">
        <h2>Public Property Page</h2>
        <p className="muted">See how approved reviews appear in a property details layout.</p>
        <Link className="button" href="/properties/soho-studio-king-bed">View Example</Link>
      </div>
    </main>
  )
}
