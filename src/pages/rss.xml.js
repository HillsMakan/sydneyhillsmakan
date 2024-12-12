import rss from '@astrojs/rss'
import { getCollection, getEntry } from 'astro:content'
import { SiteMetadata } from '../config'

const defaultAuthor = {
  slug: 'default',
  collection: 'author'
}
export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return rss({
    // `<title>` field in output xml
    title: SiteMetadata.title,
    // `<description>` field in output xml
    description: SiteMetadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: context.site,
    // add `xmlns:media="http://search.yahoo.com/mrss/"`
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom'
    },
    // add atom:link to be compatible with atom
    customData: `<atom:link href="${import.meta.env.BASE_URL}rss.xml" rel="self" type="application/rss+xml" />`,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: await Promise.all(
      posts.map(async (post) => {
        const author = await getEntry(post.data.author || defaultAuthor)
        return {
          link: context.site + 'blog/' + post.id,
          title: post.data.title,
          description: post.data.description,
          author: `${author.data.title} (${author.data.contact})`,
          pubDate: post.data.pubDate.toString(),
          // custom data for media. The url must be the full url (including https://)
          customData: `<media:content
          type="image/${post.data.image.format == 'jpg' ? 'jpeg' : 'png'}"
          width="${post.data.image.width}"
          height="${post.data.image.height}"
          medium="image"
          url="${context.site + post.data.image.src.slice(1)}" />
      `
        }
      })
    )
  })
}
