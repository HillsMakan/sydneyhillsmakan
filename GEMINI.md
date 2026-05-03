# GEMINI.md - HMG International (v4.0.1)

## Project Overview

HMG (Hills Makan Group) International website, a dynamic platform connecting food, business, and community. Built using the [Astro](https://astro.build) web framework, it features a rich collection of partners, regions, and collaborations managed through Astro's Content Collections.

- **Purpose:** Showcase partners, regions, and community collaborations.
- **Architecture:** Astro (SSG) with Markdown-based content management.
- **Key Features:** Partner directory, regional categorization, Pagefind full-text search, responsive sidebar navigation, and a dark-mode responsive design.

## Tech Stack

- **Framework:** [Astro v6](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for prose content
- **Interactivity:** Vanilla JS Astro `<script>` blocks (no external UI framework)
- **Search:** [Pagefind](https://pagefind.app) — indexed at build time
- **Image Handling:** Astro's built-in `Image` component and [PhotoSwipe](https://photoswipe.com) for lightboxes.
- **Validation:** [Zod](https://zod.dev) for content collection schemas.
- **Testing:** [Vitest](https://vitest.dev) for unit tests, [Playwright](https://playwright.dev) for E2E tests.

## Project Structure

- `src/content/`: Markdown files for all content collections.
  - `categories/`: Business/Cuisine categories.
  - `collaborations/`: Community partnership details.
  - `pages/`: Static informational pages.
  - `partner/`: Partner/Business listings.
  - `region/`: Geographical regions (Countries, Cities, Districts).
- `src/components/`: Reusable Astro components (Hero, Cards, SEO, Search, Sidemenu, etc.).
- `src/layouts/`: Base and specialized page layouts (`base.astro`, `page.astro`, `partner.astro`).
- `src/pages/`: Astro routing, including dynamic routes for regions and partners.
- `src/site.ts`: Centralized site configuration and metadata.
- `src/utils.ts`: Shared utility helpers (e.g. `uniqBy<T>`).
- `src/utils.test.ts`: Vitest unit tests for `src/utils.ts`.
- `src/styles/global.css`: Global stylesheet and Tailwind CSS v4 entry point.
- `src/content.config.ts`: Zod schemas for all content collections.
- `tests/e2e/`: Playwright end-to-end tests covering home, navigation, categories, partners, and search.

## Development Commands

All commands are run from the project root using `pnpm`:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install all dependencies. |
| `pnpm run dev` | Start the local development server at `localhost:4321`. |
| `pnpm run build` | Generate the static production site in `./dist/`. |
| `pnpm run preview` | Preview the production build locally. |
| `pnpm run lint` | Run code formatting (Prettier) then linting (ESLint). |
| `pnpm run clean` | Remove `node_modules`, `.astro`, and `dist` directories. |
| `pnpm run refresh` | Upgrade Astro and dependencies to latest. |
| `pnpm run test` | Run Vitest unit tests. |
| `pnpm run test:e2e` | Run Playwright E2E tests. |

## Development Conventions

- **Content Updates:** Add or modify Markdown files in `src/content/`. Ensure they match the Zod schema defined in `src/content.config.ts`.
- **Styling:** Use Tailwind CSS v4 utility classes. Custom styles should be added sparingly to `src/styles/global.css`. No Flowbite or Alpine.js — all interactivity is vanilla JS inside Astro `<script>` blocks.
- **Components:** Create new UI elements as Astro components in `src/components/`.
- **SEO:** Every page should use the `SEO` component and provide appropriate frontmatter.
- **Images:** Prefer local images in `src/assets/images/` and use the Astro `Image` component for optimization.
- **Site Metadata:** Global site information should be referenced from `src/site.ts`.
- **Utilities:** Shared logic (e.g. array helpers) belongs in `src/utils.ts` with corresponding tests in `src/utils.test.ts`.
- **Linting:** `pnpm lint` runs Prettier first, then ESLint. The `better-tailwindcss/enforce-consistent-class-order` and `better-tailwindcss/enforce-consistent-line-wrapping` rules are disabled because `prettier-plugin-tailwindcss` already handles class formatting and the two tools conflict.
- **TypeScript:** Use `querySelector<HTMLElement>(...)` instead of plain `querySelector(...)` when accessing DOM properties like `.hidden` or `.click()` in `<script>` blocks.
