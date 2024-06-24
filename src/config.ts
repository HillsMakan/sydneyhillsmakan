import type { CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: (CollectionEntry<'blog'> | CollectionEntry<'partner'>)[]
}

export const SiteMetadata = {
  title: 'Hills Makan Group (International)',
  description:
    'Indulge in the world of flavors with Hills Makan Group (International) – where culinary delights meet community spirit! 🍲 "Makan" meaning "Eat" in Malaysian & Singaporean Malay and Indonesian language.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Hills Makan Group (International)',
    twitter: '@hmgi',
    url: 'https://hmginternational.com',
    email: 'aaron_gan@hotmail.com',
    summary:
      "HMG International is a vibrant and diverse community brought together by our shared love for food and culture. So, anyone and everyone are welcome to join. Our group celebrates the beauty of diversity through a variety of cuisines. From tantalizing street food to gourmet delights, mouthwatering Asian street food to classic European dishes, there's always something new to savor."
  },
  location: 'Sydney, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/HillsMakan/sydneyhillsmakan',
  buildTime: new Date()
}

export { default as Logo } from './assets/site/logo.jpg'
export { default as DefaultImage } from './assets/site/HMGmembercard01.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  // { name: 'Partners', href: 'partner' },
  { name: 'Categories', href: 'categories' },
  { name: 'Cuisines', href: 'cuisines' },
  { name: 'Country', href: 'regions' },
  { name: 'About', href: 'about' },
  { name: 'Membership', href: 'membership' },
  { name: 'Partnership', href: 'partnership' }
]

export const PAGE_SIZE = 96
