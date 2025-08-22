# Flex Living – Reviews Dashboard

A small Next.js app that implements the Flex Living assessment:

- **Mock Hostaway integration** with data normalization
- **Manager dashboard** to filter/sort, spot trends and analyze metrics, and **approve** reviews
- **Public property page** that shows only approved reviews
- exploration for **Google Reviews**

> The app exposes an API route to fetch and normalize reviews (e.g., `GET /api/reviews/hostaway`). This app providess a route for getting hostaway and google reviews


## Tech stack
- Next.js 14 (App Router), React 18, TypeScript
- No external charting dependency (lightweight SVG line chart)
- File-backed persistence for approvals in `data/approvals.json`

## Getting started
```bash
npm install
npm run dev
# open http://localhost:3000/dashboard
```
The example property page is at:  e.g. `http://localhost:3000/properties/soho-studio-king-bed`

## API
### `GET /api/reviews/hostaway`
Query params: `channel`, `listingId`, `ratingMin`, `ratingMax`, `category`, `from`, `to`  
Response: 
```ts
type ApiResponse = {
  reviews: NormalizedReview[];
  aggregates: {
    byListing: Record<string, { listingName: string; avg: number; count: number; channels: Record<string, number> }>;
    byChannel: Record<string, { avg: number; count: number }>;
    byCategory: Record<string, { avg: number; count: number }>;
    timelineMonthly: Array<{ month: string; avg: number; count: number }>;
  };
};
```

### `POST /api/reviews/approve`
Body: `{ reviewId: string, approved: boolean }`  
Effect: Updates `data/approvals.json` (created on first use).

### `GET /api/reviews/approved`
Returns `{ approved: string[] }`

## Notes
- Ratings from category items (0–10) are converted to a 0–5 scale and averaged when the overall is missing.
- Server components are used where convenient; the dashboard is a client page for interactive filters.
- For Google Reviews exploration, see `docs/GOOGLE_REVIEWS.md`.

## Folder structure
```
__tests__/
app/
  api/reviews/hostaway/route.ts
  api/reviews/hostaway/[id]/route.ts
  api/reviews/approve/route.ts
  api/reviews/approved/route.ts
  api/reviews/combined/route.ts
  api/reviews/google/route.ts
  dashboard/page.tsx
  properties/[slug]/page.tsx
  properties/[slug]/gallery.css
  global.css
  layout.tsx
  page.tsx
components/
  ApproveToggle.tsx, BarChart.tsx, etc
lib/
  normalize.ts, aggregates.ts, approvals.ts, types.ts, utils.ts, placeIds.ts, hostawayAuth.ts
data/
  approvals.json   <-- in-file store to mimic db persistence
  mock_hostaway_reviews.json  <-- a large return 
  mock-hostaway-reviews.json  <- a small slice for dev purpose
docs/
  GOOGLE_REVIEWS.md
styles/
  property.css  <--App wide styling purposes
```
