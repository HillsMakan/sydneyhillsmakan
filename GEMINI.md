# GEMINI.md - HMG International

## Project Overview

HMG (Hills Makan Group) International website, a dynamic platform connecting food, business, and community. Built using the [Astro](https://astro.build) web framework, it features a rich collection of partners, regions, and collaborations managed through Astro's Content Collections.

- **Purpose:** Showcase partners, regions, and community collaborations.
- **Architecture:** Astro (SSG) with Markdown-based content management.
- **Key Features:** Partner directory, regional categorization, search functionality, and a responsive design.

## Tech Stack

- **Framework:** [Astro v6](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com), [Flowbite](https://flowbite.com)
- **Interactivity:** [Alpine.js](https://alpinejs.dev)
- **Search:** [Lunr](https://lunrjs.com)
- **Image Handling:** Astro's built-in `Image` component and [PhotoSwipe](https://photoswipe.com) for lightboxes.
- **Validation:** [Zod](https://zod.dev) for content collection schemas.

## Project Structure

- `src/content/`: Markdown files for all content collections.
  - `categories/`: Business/Cuisine categories.
  - `collaborations/`: Community partnership details.
  - `pages/`: Static informational pages.
  - `partner/`: Partner/Business listings.
  - `region/`: Geographical regions (Countries, Cities, Districts).
- `src/components/`: Reusable Astro components (Hero, Cards, SEO, etc.).
- `src/layouts/`: Base and specialized page layouts.
- `src/pages/`: Astro routing, including dynamic routes for regions and partners.
- `src/site.ts`: Centralized site configuration and metadata.

## Development Commands

All commands are run from the project root using `pnpm`:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install all dependencies. |
| `pnpm run dev` | Start the local development server at `localhost:4321`. |
| `pnpm run build` | Generate the static production site in `./dist/`. |
| `pnpm run preview` | Preview the production build locally. |
| `pnpm run lint` | Run code formatting (Prettier) and linting (ESLint). |
| `pnpm run clean` | Remove `node_modules`, `.astro`, and `dist` directories. |
| `pnpm run refresh` | Upgrade Astro and dependencies to latest. |

## Development Conventions

- **Content Updates:** Add or modify Markdown files in `src/content/`. Ensure they match the Zod schema defined in `src/content.config.ts`.
- **Styling:** Use Tailwind CSS utility classes. Custom styles should be added sparingly to `src/styles/global.css`.
- **Components:** Create new UI elements as Astro components in `src/components/`.
- **SEO:** Every page should use the `SEO` component and provide appropriate frontmatter.
- **Images:** Prefer local images in `src/assets/images/` and use the Astro `Image` component for optimization.
- **Site Metadata:** Global site information should be referenced from `src/site.ts`.
