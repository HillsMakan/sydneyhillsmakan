import { getCollection, getEntry } from 'astro:content'

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
      pubDate: post.data.pubDate,
      categories: post.data.categories.map((category) => category.slug),
      tags: post.data.tags
    }
  })
)
documents = documents.concat(
  partners.map((partner) => ({
    url: import.meta.env.BASE_URL + 'partner/' + partner.slug,
    title: partner.data.title,
    description: partner.data.description,
    title: partner.data.title,
    categories: partner.data.categories.map((category) => category.slug),
    cuisine: partner.data.cuisine,
    region: partner.data.region,
    discount_text: partner.data.discount_text,
    comment: partner.data.comment
  }))
)

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
