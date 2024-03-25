# Astro Blog

Simple blog theme based on [Hello Astro](https://hellotham.github.io/hello-astro) but supports only Markdown and does not have the extra integrations. Uses UnoCSS instead of Tailwind.

Uses the following integrations:

- @astrojs/sitemap
- @astrojs/rss
- @astrojs/alpinejs
- astro-seo
- astro-robots-txt

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance low overhead with minimal Javascript (AlpineJS)
- Full text client based search of blog pages via lunrjs (search index only loaded on first invocation of search on a page)
- Index page and individual pages for authors, categories and tags, including pagination
- Support for RSS feed, sitemap and robots.txt
- Full SEO support including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Full support for Light and dark UI modes, as well as following system preferences, in accordance to TailwindCSS recommendation
- Customised 404 error page
- Calculates and show reading time for blog posts
- CSS/JS assets of external libraries loaded only when needed on a per page and per package basis - no unnecessary bloat
- Photo gallery and lightbox using PhotoSwipe (including display of EXIF tags)
- Carousel component using Swiper

## External Packages

The start uses the following external packages:

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [AlpineJS](https://alpinejs.dev)
- Local full text search using [Lunr](https://lunrjs.com)
- [reading-time](https://github.com/ngryman/reading-time)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Swiper](https://swiperjs.com/)
- [Remark Emoji](https://github.com/rhysd/remark-emoji)
- [UnoCSS](https://unocss.dev)

It follows the [JAMstack architecture](https://jamstack.org) by automatically building a static version from the Git repository. The demo is deployed on Github Pages.

## 🚀 Project Structure

Inside this starter, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── image.png
│   │   └── gallery/
│   │       └── gallery-name/
│   │           └── image.jpg
│   ├── components/
│   │   └── header.astro
│   ├── content/
│   │   ├── blog/
│   │   |   └── 2022-08-01-post.md
│   │   ├── doc/
│   │   |   └── documentation-page.md
|   │   └── config.ts
│   ├── layouts/
│   │   ├── base.astro
│   │   ├── blog.astro
│   │   └── doc.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── contact.astro
│   └── config.ts
└── package.json
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/assets/`.

Blog and documentation content are created as collections of Markdown or MDX files in `src/content`.

Any static assets, eg. images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Installs dependencies                              |
| `pnpm dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm build`        | Build your production site to `./dist/`            |
| `pnpm preview`      | Preview your build locally, before deploying       |
| `pnpm lint`         | Pretty print the source code                       |
| `pnpm check`        | Check the source code for errors                   |  |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help` | Get help using the Astro CLI                       |

## Release History

- 1.0.0: Initial Release
