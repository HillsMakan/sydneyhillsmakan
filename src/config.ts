import type { CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[] | CollectionEntry<'partner'>[]
}

export const SiteMetadata = {
  title: 'Sydney Hills Makan Group',
  description:
    'Indulge in the world of flavors with SHMG – where culinary delights meet community spirit! 🍲 "Makan" meaning "Eat" in Malaysian & Singaporean Malay and Indonesian language.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Sydney Hills Makan',
    twitter: '@sydneyhillsmakan',
    url: 'https://sydneyhillsmakan.netlify.app',
    email: 'info@hellotham.com',
    summary:
      "SHMG is a vibrant and diverse community brought together by our shared love for food and culture. So, anyone and everyone are welcome to join. Our group celebrates the beauty of diversity through a variety of cuisines. From tantalizing street food to gourmet delights, mouthwatering Asian street food to classic European dishes, there's always something new to savor."
  },
  location: 'Sydney, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/ChristineTham/sydneyhillsmakan',
  buildTime: new Date()
}

export { default as Logo } from './assets/site/logo.jpg'
export { default as DefaultImage } from './assets/site/banner.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Partners', href: 'partner' },
  { name: 'Cuisines', href: 'cuisines' },
  { name: 'Regions', href: 'regions' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' }
]

export const PAGE_SIZE = 96
