
let cachedToken: { token: string; expiresAt: number } | null = null

export async function getHostawayAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt)
    return cachedToken.token

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.HOSTAWAY_ACCOUNT_ID!, 
    client_secret: process.env.HOSTAWAY_API_KEY!, 
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



export async function fetchHostawayReviews(params: URLSearchParams) {
  const token = await getHostawayAccessToken()
  const url = new URL(
    'https://api.hostaway.com/v1/reviews?' + params.toString()
  )
  // Forward selected filters to Hostaway if you like
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}`, 'Cache-control': 'no-cache' },
  })
  const json = await res.json()
  // Hostaway’s standard shape has { status, result: Review[] } — normalize next:
  return json.result ?? []
}