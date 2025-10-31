'use client'
import Gallery, { GalleryImage } from '@/components/Gallery/Gallery'

const images: GalleryImage[] = [
  {
    src: '',
    alt: 'Bedroom',
    width: 1600,
    height: 1066,
    caption: 'Primary bedroom',
  },
  // ...
]

export default function PropertyGallery() {
  return (
    <Gallery images={images}>
      <Gallery.Grid columns={3} gap={10} />
      <Gallery.Lightbox />
    </Gallery>
  )
}
