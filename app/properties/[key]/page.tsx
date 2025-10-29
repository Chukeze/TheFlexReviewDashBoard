import PropertyClient from './PropertyClient'


export default async function PropertyPage({
  params,
}: {
  params: Promise<{ key: string }>
}) {
  const { key } = await params
  console.log("PROPERTY PAGE KEY:", key);
  //const raw = await getHostawayReviews();
  if (key == "") return;

  //const approved = await getApprovedIds()

  /*const listing = data.find((property) => property.id === slug)

  const all = normalizeMany(data)
  const reviews = all.filter((r) => r.slug === slug && (r.status === 'approved' || r.status === 'published'))

  const listingName = reviews[0]?.listingName || slug*/
  return (
      <PropertyClient slug={key} />
  )
}
/*
async function getHostawayReviews() {
  const file = path.join(process.cwd(), 'data', 'mock-hostaway-reviews.json')
  return JSON.parse(await fs.readFile(file, 'utf-8')) as {
    status: string
    result: RawReview[]
  }
}*/
