export const PROPERTY_IMAGES: Record<string, string[]> = {
  'soho-studio-king-bed': [
    '/images/properties/soho.webp',
    '/images/properties/soho2.webp',
    '/images/properties/soho3.webp',
    '/images/properties/soho4.webp',
    '/images/properties/soho5.webp',
    '/images/properties/soho6.webp',
  ],
  'shoreditch-heights-2br-loft': [
    '/images/properties/shore.webp',
    '/images/properties/shore2.webp',
    '/images/properties/shore3.webp',
    '/images/properties/shore4.webp',
    '/images/properties/shore5.webp',
    '/images/properties/shore6.webp',
  ],
  'kensington-garden-flat': [
    '/images/properties/kens1.webp',
    '/images/properties/kens2.webp',
    '/images/properties/kens3.webp',
    '/images/properties/kens4.webp',
    '/images/properties/kens5.webp',
    '/images/properties/kens6.webp',
  ],
  '3a-se1-borough-market-loft': [
    '/images/properties/boro1.webp',
    '/images/properties/boro2.webp',
    '/images/properties/boro3.webp',
    '/images/properties/boro4.webp',
    '/images/properties/boro5.webp',
    '/images/properties/boro6.webp',
  ],
  '2br-finsbury-gardens-apt': [
    '/images/properties/fins1.webp',
    '/images/properties/fins2.webp',
    '/images/properties/fins3.webp',
    '/images/properties/fins4.webp',
    '/images/properties/fins5.webp',
    '/images/properties/fins6.webp',
  ],
  'br-ridge-gardens-apt': [
    '/images/properties/ridge1.webp',
    '/images/properties/ridge2.webp',
    '/images/properties/ridge3.webp',
    '/images/properties/ridge4.webp',
    '/images/properties/ridge5.webp',
    '/images/properties/ridge6.webp',
  ],
} as const

export type KnownSlug = keyof typeof PROPERTY_IMAGES

const FALLBACK = [
  '/images/placeholders/cover.webp',
  '/images/placeholders/room1.webp',
  '/images/placeholders/room2.webp',
]

export function getPropertyImages(slug: string): string[] {
    const key = slug.toLowerCase() as KnownSlug;
    return PROPERTY_IMAGES[key] ?? FALLBACK;
}

export function altFromSlug(slug: string, index: number): string {
    const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    const labels = ['Main', 'Garden', 'Bedroom', 'Kitchen', 'Bathroom', 'Living Room', 'Dining', 'Exterior'];
    return `${readable} - ${labels[index] ?? `Photo ${index + 1}`}`;
}