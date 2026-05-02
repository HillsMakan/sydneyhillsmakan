import { getCollection } from 'astro:content'
import lunr from 'lunr'

const pages = await getCollection('pages', (page) => !page.data.draft)
const partners = await getCollection('partner', (partner) => !partner.data.draft)

const documents = [
  ...pages.map((page) => ({
    url: import.meta.env.BASE_URL + '/' + page.id,
    title: page.data.title,
    description: page.data.description,
    content: page.body
  })),
  ...partners.map((partner) => ({
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
]

const index = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('content')

  for (const document_ of documents) {
    this.add(document_)
  }
})

export async function GET() {
  return Response.json(index, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
