import { getCollection } from 'astro:content'

const pages = await getCollection('pages', (page) => !page.data.draft)
const partners = await getCollection('partner', (partner) => !partner.data.draft)

let documents = await Promise.all(
  pages.map(async (page) => {
    return {
      url: import.meta.env.BASE_URL + '/' + page.id,
      title: page.data.title,
      description: page.data.description
    }
  })
)
documents = documents.concat(
  partners.map((partner) => ({
    url: import.meta.env.BASE_URL + 'partner/' + partner.id,
    title: partner.data.title,
    description: partner.data.description,
    title: partner.data.title,
    categories: partner.data.categories.map((category) => category.id),
    cuisine: partner.data.cuisine,
    region: partner.data.region.id,
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
