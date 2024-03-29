import { getCollection, getEntry } from 'astro:content'
import lunr from 'lunr'

const defaultAuthor = {
  slug: 'default',
  collection: 'author'
}
const posts = await getCollection('blog', (p) => {
  return !p.data.draft
})
const partners = await getCollection('partner', (p) => {
  return !p.data.draft
})
let documents = await Promise.all(
  posts.map(async (post) => {
    const author = await getEntry(post.data.author || defaultAuthor)
    return {
      url: import.meta.env.BASE_URL + 'blog/' + post.slug,
      title: post.data.title,
      description: post.data.description,
      author: `${author.data.title} (${author.data.contact})`,
      categories:
        post.data.categories && post.data.categories.map((category) => category.slug).join(' '),
      tags: post.data.tags && post.data.tags.join(' '),
      content: post.body
    }
  })
)
documents = documents.concat(partners.map(partner => ({
  url: import.meta.env.BASE_URL + 'partner/' + partner.slug,
  title: partner.data.title,
  description: partner.data.description,
  title: partner.data.title,
  categories: partner.data.categories.map((category) => category.slug),
  cuisine: partner.data.cuisine,
  region: partner.data.region,
  discount_text: partner.data.discount_text,
  comment: partner.data.comment,
  content: partner.body
})))

const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('categories')
  this.field('tags')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

export async function GET() {
  return new Response(JSON.stringify(idx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
