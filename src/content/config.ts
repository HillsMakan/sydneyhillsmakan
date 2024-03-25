// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

// 2. Define your collections
const blog = defineCollection({
  schema: ({ image }) =>
    rssSchema.extend({
      draft: z.boolean().optional(),
      author: reference('author').optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      minutesRead: z.string().optional()
    })
})

const partner = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      image: image().optional(),
      categories: z.array(z.string()).optional(),
      cuisine: z.array(z.string()).optional(),
      region: z.array(z.string()).optional(),
      discount_pct: z.number().optional(),
      discount_text: z.string().optional(),
      comment: z.string().optional()
    })
})

const page = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date().optional(),
      author: reference('author').optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      tags: z.array(z.string()).optional()
    })
})

const category = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image()
    })
})

const author = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      contact: z.string()
    })
})

const social = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    link: z.string(),
    icon: z.string()
  })
})

// 3. Export multiple collections to register them
export const collections = {
  blog,
  page,
  partner,
  category,
  author,
  social
}
