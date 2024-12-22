import { getCollection } from 'astro:content'
import lunr from 'lunr'

const pages = await getCollection('pages', (page) => !page.data.draft)
const partners = await getCollection('partner', (partner) => !partner.data.draft)

let documents = await Promise.all(
  pages.map(async (page) => {
    return {
      url: import.meta.env.BASE_URL + '/' + page.id,
      title: page.data.title,
      description: page.data.description,
      content: page.body
    }
  })
)
documents = documents.concat(
  partners.map((partner) => ({
    url: import.meta.env.BASE_URL + 'partner/' + partner.id,
    title: partner.data.title,
    description: partner.data.description,
    categories: partner.data.categories.map((category) => category.id),
    cuisine: partner.data.cuisine,
    region: partner.data.region.id,
    discount_text: partner.data.discount_text,
    comment: partner.data.comment,
    content: partner.body
  }))
)

const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
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
