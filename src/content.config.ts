import { z, defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      image: image()
    })
})

const collaborations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collaborations' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date().optional(),
      image: image().optional()
    })
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      menutitle: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date().optional(),
      image: image().optional(),
      icon: z.string().optional(),
      order: z.number().optional()
    })
})

const partner = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partner' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      link: z.string().url().optional(),
      image: image(),
      images: z.array(image()).optional(),
      categories: z.array(reference('categories')),
      cuisine: z.array(z.string()).optional(),
      region: reference('region'),
      discount_pct: z.number().optional(),
      discount_text: z.string().optional(),
      comment: z.string().optional()
    })
})

const region = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/region' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      country: reference('region').optional(),
      geo: z.string().optional(),
      icon: z.string(),
      image: image()
    })
})

export const collections = { categories, collaborations, pages, partner, region }
