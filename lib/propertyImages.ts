export const PROPERTY_IMAGES: Record<string, string[]> = {
  'soho-studio-king-bed': [
    '/images/properties/soho-studio-king-bed/soho.webp',
    '/images/properties/soho-studio-king-bed/soho2.webp',
    '/images/properties/soho-studio-king-bed/soho3.webp',
    '/images/properties/soho-studio-king-bed/soho4.webp',
    '/images/properties/soho-studio-king-bed/soho5.webp',
    '/images/properties/soho-studio-king-bed/soho6.webp',
  ],
  'shoreditch-heights-2br-loft': [
    '/images/properties/shoreditch-heights-2br-loft/shore.webp',
    '/images/properties/shoreditch-heights-2br-loft/shore2.webp',
    '/images/properties/shoreditch-heights-2br-loft/shore3.webp',
    '/images/properties/shoreditch-heights-2br-loft/shore4.webp',
    '/images/properties/shoreditch-heights-2br-loft/shore5.webp',
    '/images/properties/shoreditch-heights-2br-loft/shore6.webp',
  ],
  'kensington-garden-flat': [
    '/images/properties/kensington-garden-flat/kens1.webp',
    '/images/properties/kensington-garden-flat/kens2.webp',
    '/images/properties/kensington-garden-flat/kens3.webp',
    '/images/properties/kensington-garden-flat/kens4.webp',
    '/images/properties/kensington-garden-flat/kens5.webp',
    '/images/properties/kensington-garden-flat/kens6.webp',
  ],
  '3a-se1-borough-market-loft': [
    '/images/properties/3a-se1-borough-market-loft/boro1.webp',
    '/images/properties/3a-se1-borough-market-loft/boro2.webp',
    '/images/properties/3a-se1-borough-market-loft/boro3.webp',
    '/images/properties/3a-se1-borough-market-loft/boro4.webp',
    '/images/properties/3a-se1-borough-market-loft/boro5.webp',
    '/images/properties/3a-se1-borough-market-loft/boro6.webp',
  ],
  '2br-finsbury-gardens-apt': [
    '/images/properties/2br-finsbury-gardens-apt/fins1.webp',
    '/images/properties/2br-finsbury-gardens-apt/fins2.webp',
    '/images/properties/2br-finsbury-gardens-apt/fins3.webp',
    '/images/properties/2br-finsbury-gardens-apt/fins4.webp',
    '/images/properties/2br-finsbury-gardens-apt/fins5.webp',
    '/images/properties/2br-finsbury-gardens-apt/fins6.webp',
  ],
  '2br-ridge-gardens-apt': [
    `/images/properties/2br-ridge-gardens-apt/ridge1.webp`,
    '/images/properties/2br-ridge-gardens-apt/ridge2.webp',
    '/images/properties/2br-ridge-gardens-apt/ridge3.webp',
    '/images/properties/2br-ridge-gardens-apt/ridge4.webp',
    '/images/properties/2br-ridge-gardens-apt/ridge5.webp',
    '/images/properties/2br-ridge-gardens-apt/ridge6.webp',
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
    console.log("GET PROPERTY IMAGES KEY:", key);
    return PROPERTY_IMAGES[key] ?? FALLBACK;
}

export function altFromSlug(slug: string, index: number): string {
    const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    const labels = ['Main', 'Garden', 'Bedroom', 'Kitchen', 'Bathroom', 'Living Room', 'Dining', 'Exterior'];
    return `${readable} - ${labels[index] ?? `Photo ${index + 1}`}`;
}