import { promises as fs } from 'node:fs'
import path from 'node:path'

const ROOT = path.join(process.cwd(), 'public', 'properties')
const OUT = path.join(process.cwd(), 'app', 'data', 'image-manifest.json')

function isImage(f) {
  return /\.(png|jpe?g|webp|avif|gif)$/i.test(f)
}

async function main() {
  let manifest = {}
  let slugs = []
  try {
    slugs = await fs.readdir(ROOT, { withFileTypes: true })
  } catch {
    // no properties folder yet
  }
  for (const dirent of slugs) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const files = (await fs.readdir(path.join(ROOT, slug)))
      .filter(isImage)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      // public/ files are served from root (/). Build absolute URLs:
      .map((f) => `/properties/${slug}/${f}`)

    if (files.length) manifest[slug] = files
  }
  await fs.mkdir(path.dirname(OUT), { recursive: true })
  await fs.writeFile(OUT, JSON.stringify(manifest, null, 2))
  console.log(`Wrote ${Object.keys(manifest).length} slugs to ${OUT}`)
}

main()
