import { getCollection, getEntry } from 'astro:content'
import lunr from 'lunr'

const posts = await getCollection('blog', (p) => {
  return !p.data.draft
})
const documents = await Promise.all(
  posts.map(async (post) => {
    const author = await getEntry(post.data.author)
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
