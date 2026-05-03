# HMG International

HMG (Hills Makan Group) International website, built using [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

The current site includes a responsive Leaflet-based partner map with filter controls, build-time geocoding, and Pagefind Component UI search with a local development indexing workflow.

## 🚀 Project Structure

```text
/
├── astro.config.mjs            # Astro configuration
├── eslint.config.mjs           # ESLint flat config
├── playwright.config.ts        # Playwright E2E test config
├── vitest.config.ts            # Vitest unit test config
├── public/                     # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/                 # Dynamic assets (images, icons)
│   ├── components/             # Reusable Astro components
│   │   ├── banner.astro        # Notification banner
│   │   ├── breadcrumb.astro    # Breadcrumb navigation
│   │   ├── cards.astro         # Partner/category card grid
│   │   ├── hero.astro          # Homepage hero section
│   │   ├── PartnerMap.astro    # Responsive Leaflet partner map with filters
│   │   ├── search.astro        # Search widget
│   │   ├── sidemenu.astro      # Responsive sidebar navigation
│   │   ├── seo.astro           # SEO meta tags component
│   │   └── ...                 # Other UI components
│   ├── content/                # Markdown content collections
│   │   ├── categories/         # Business/cuisine categories
│   │   ├── collaborations/     # Community partnerships
│   │   ├── pages/              # Static informational pages
│   │   ├── partner/            # Partner/business listings
│   │   └── region/             # Regions (countries, cities, districts)
│   ├── layouts/                # Page layouts
│   │   ├── base.astro          # Base HTML shell
│   │   ├── page.astro          # General content page layout
│   │   └── partner.astro       # Partner profile layout
│   ├── pages/                  # Astro file-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── [region].astro      # Dynamic region pages
│   │   ├── [region]/           # Nested region routes
│   │   ├── categories/         # Category listing & detail pages
│   │   ├── collaborations/     # Collaboration pages
│   │   ├── partner/            # Partner detail pages
│   │   └── test-map.astro      # Map verification page for Leaflet/filters
│   ├── content.config.ts       # Zod content collection schemas
│   ├── geocoding-utils.ts      # Geocoding helpers and region validation
│   ├── geocoding-utils.test.ts # Vitest tests for geocoding helpers
│   ├── site.ts                 # Centralised site metadata
│   ├── styles/
│   │   └── global.css          # Global styles and Tailwind entry point
│   ├── utils.ts                # Shared utility helpers (e.g. uniqBy)
│   └── utils.test.ts           # Vitest unit tests for utils
├── tests/
│   └── e2e/                    # Playwright end-to-end tests
│       ├── home.spec.ts
│       ├── categories.spec.ts
│       ├── map.spec.ts
│       ├── navigation.spec.ts
│       ├── partners.spec.ts
│       └── search.spec.ts
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Build geocoding + Pagefind index, sync `dist/pagefind` to `public/pagefind`, then start local dev server at `localhost:4321` |
| `pnpm run geocode` | Run the build-time partner geocoding script |
| `pnpm run build:search-index` | Build the Astro site and generate the Pagefind index |
| `pnpm run sync:pagefind:dev` | Copy generated Pagefind assets from `dist/pagefind` to `public/pagefind` for local dev |
| `pnpm run build` | Build production site to `./dist/` and generate Pagefind index |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Format with Prettier then lint with ESLint |
| `pnpm astro check` | Run Astro type/content diagnostics |
| `pnpm run test` | Run Vitest unit tests |
| `pnpm run test:e2e` | Run Playwright E2E tests against a clean build + preview server |
| `pnpm run clean` | Remove `node_modules`, `.astro`, and `dist` |
| `pnpm run refresh` | Upgrade Astro and all dependencies to latest |

## Notes

- Search uses Pagefind Component UI assets loaded from the shared base layout rather than per-component script tags.
- Local `dev` search works by generating the Pagefind index first and syncing it into `public/pagefind`.
- Playwright E2E tests intentionally run against `pnpm build && pnpm preview` so Pagefind and other build-time assets behave the same as production.
- The partner map component is root-scoped with data-attribute selectors, so it can be rendered more than once on a page without ID collisions.

## Release History

* 1.0.0: Initial version
* 2.0.0: Rewritten using additional content collections
* 3.0.0: Complete redesign — removed Flowbite, replaced with Tailwind CSS v4 and vanilla JS components; removed Alpine.js; added Vitest + Playwright test suite; Astro v6 best-practice refactor
* 4.0.0: TypeScript type fixes, ESLint/Prettier conflict resolution, dependency cleanup
* 4.0.1: Removed unused `geo` field from region collection schema
* 4.1.0: Integrated interactive partner map with dynamic filtering; implemented automated build-time geocoding with multi-step fallback strategy; moved coordinates to Markdown frontmatter; updated tech stack with Leaflet and custom geocoding scripts; added Pagefind Component UI search with local dev indexing support and stabilized E2E coverage for search and map flows
