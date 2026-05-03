# GEMINI.md - HMG International (v4.2.0)

## Project Overview

HMG (Hills Makan Group) International website, a dynamic platform connecting food, business, and community. Built using the [Astro](https://astro.build) web framework, it features a rich collection of partners, regions, and collaborations managed through Astro's Content Collections.

- **Purpose:** Showcase partners, regions, and community collaborations.
- **Architecture:** Astro (SSG) with Markdown-based content management.
- **Key Features:** Partner directory, interactive responsive partner map with dynamic filtering, regional categorization, Pagefind Component UI full-text search, automated build-time geocoding, responsive sidebar navigation, and a dark-mode responsive design.

## Tech Stack

- **Framework:** [Astro v6](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for prose content
- **Interactivity:** Vanilla JS Astro `<script>` blocks (no external UI framework)
- **Map Library:** [Leaflet](https://leafletjs.com) for interactive partner mapping
- **Geocoding:** Custom build-time script (`src/utils/geocode.mts`) using Nominatim (OpenStreetMap)
- **Search:** [Pagefind](https://pagefind.app) Component UI — indexed at build time and synced into `public/pagefind` for local dev
- **Image Handling:** Astro's built-in `Image` component and [PhotoSwipe](https://photoswipe.com) for lightboxes.
- **Validation:** [Zod](https://zod.dev) for content collection schemas.
- **Testing:** [Vitest](https://vitest.dev) for unit tests, [Playwright](https://playwright.dev) for E2E tests.

## Project Structure

- `src/content/`: Markdown files for all content collections.
  - `categories/`: Business/Cuisine categories.
  - `collaborations/`: Community partnership details.
  - `pages/`: Static informational pages.
  - `partner/`: Partner/Business listings (includes geocoded coordinates).
  - `region/`: Geographical regions (Countries, Cities, Districts).
- `src/components/`: Reusable Astro components (Hero, Cards, SEO, Search, Sidemenu, PartnerMap, etc.).
- `src/layouts/`: Base and specialized page layouts (`base.astro`, `page.astro`, `partner.astro`).
- `src/pages/`: Astro routing, including dynamic routes for regions and partners.
- `src/pages/test-map.astro`: Dedicated verification page for the responsive Leaflet partner map.
- `src/site.ts`: Centralized site configuration and metadata.
- `src/geocoding-utils.ts`: Shared geocoding helpers and region validation logic.
- `src/geocoding-utils.test.ts`: Vitest tests for geocoding helpers.
- `src/geocode-script.test.ts`: Vitest tests for geocode script helpers.
- `src/utils.ts`: Shared utility helpers (e.g. `uniqBy<T>`).
- `src/utils.test.ts`: Vitest unit tests for `src/utils.ts`.
- `src/utils/geocode.mts`: Geocoding script for automated partner coordinate generation.
- `src/utils/verify-geocoding.mjs`: Script for geocoding status verification.
- `src/styles/global.css`: Global stylesheet and Tailwind CSS v4 entry point.
- `src/content.config.ts`: Zod schemas for all content collections.
- `tests/e2e/`: Playwright end-to-end tests covering home, navigation, categories, partners, search, and map verification.

## Development Commands

All commands are run from the project root using `pnpm`:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install all dependencies. |
| `pnpm run dev` | Build geocoding + Pagefind index, sync `dist/pagefind` to `public/pagefind`, then start the local development server at `localhost:4321`. |
| `pnpm run geocode` | Manually trigger partner geocoding. |
| `pnpm run build:search-index` | Generate the Astro build and Pagefind index together. |
| `pnpm run sync:pagefind:dev` | Copy generated Pagefind assets into `public/pagefind` for local development. |
| `pnpm run build` | Generate the static production site in `./dist/` and build the Pagefind index. |
| `pnpm run preview` | Preview the production build locally. |
| `pnpm run lint` | Run code formatting (Prettier) then linting (ESLint). |
| `pnpm astro check` | Run Astro type/content diagnostics. |
| `pnpm run clean` | Remove `node_modules`, `.astro`, and `dist` directories. |
| `pnpm run refresh` | Upgrade Astro and dependencies to latest. |
| `pnpm run test` | Run Vitest unit tests. |
| `pnpm run test:e2e` | Run Playwright E2E tests against a clean build + preview server. |

## Development Conventions

- **Content Updates:** Add or modify Markdown files in `src/content/`. Ensure they match the Zod schema defined in `src/content.config.ts`. Partner coordinates are automatically populated by the geocoding script; manual overrides are supported in frontmatter.
- **Styling:** Use Tailwind CSS v4 utility classes. Custom styles should be added sparingly to `src/styles/global.css`. No Flowbite or Alpine.js — all interactivity is vanilla JS inside Astro `<script>` blocks.
- **Components:** Create new UI elements as Astro components in `src/components/`. For interactive components like `PartnerMap`, prefer root-scoped `data-*` selectors over global IDs so multiple instances can coexist safely.
- **Map Filtering:** `PartnerMap` now applies currently selected filters during initial render, so default bounds/zoom reflect any preselected region.
- **SEO:** Every page should use the `SEO` component and provide appropriate frontmatter.
- **Images:** Prefer local images in `src/assets/images/` and use the Astro `Image` component for optimization.
- **Site Metadata:** Global site information should be referenced from `src/site.ts`.
- **Utilities:** Shared logic (e.g. array helpers) belongs in `src/utils.ts` with corresponding tests in `src/utils.test.ts`.
- **Linting:** `pnpm lint` runs Prettier first, then ESLint. The `better-tailwindcss/enforce-consistent-class-order` and `better-tailwindcss/enforce-consistent-line-wrapping` rules are disabled because `prettier-plugin-tailwindcss` already handles class formatting and the two tools conflict.
- **Search:** Pagefind assets are loaded from `src/layouts/base.astro`, and local search depends on the generated `public/pagefind` directory created by `pnpm run sync:pagefind:dev`.
- **Testing:** Playwright is configured to run against `pnpm build && pnpm preview` with a clean `dist`/`.astro` directory to keep search and other build-time behavior deterministic.
- **TypeScript:** Use `querySelector<HTMLElement>(...)` instead of plain `querySelector(...)` when accessing DOM properties like `.hidden` or `.click()` in `<script>` blocks.
