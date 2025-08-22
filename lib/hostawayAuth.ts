// lib/hostawayAuth.ts
let cachedToken: { token: string; expiresAt: number } | null = null

export async function getHostawayAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt)
    return cachedToken.token

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.HOSTAWAY_ACCOUNT_ID!, // e.g., 61148 (from brief)
    client_secret: process.env.HOSTAWAY_API_KEY!, // from brief/dashboard
    scope: 'general',
  })

  const res = await fetch('https://api.hostaway.com/v1/accessTokens', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Cache-control': 'no-cache',
    },
    body,
  })
  if (!res.ok) throw new Error('Hostaway token error: ' + (await res.text()))
  const json = await res.json() 
  cachedToken = {
    token: json.access_token,
    expiresAt: Date.now() + json.expires_in * 1000,
  }
  return json.access_token
}
