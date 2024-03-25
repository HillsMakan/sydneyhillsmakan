import type { CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Hello Astro',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.'
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedImage } from './assets/images/Alpine lake sunset.jpg'
export { default as DefaultImage } from './assets/images/Alpine lake sunset.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' }
]

export const PAGE_SIZE = 6
