# HMG International

HMG (Hills Makan Group) International website, built using [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

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
│   │   ├── search.astro        # Lunr-powered search panel
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
│   │   ├── search-docs.json.js # Search document index (JSON endpoint)
│   │   └── search-index.json.js# Lunr search index (JSON endpoint)
│   ├── content.config.ts       # Zod content collection schemas
│   ├── site.ts                 # Centralised site metadata
│   ├── styles/
│   │   └── global.css          # Global styles and Tailwind entry point
│   ├── utils.ts                # Shared utility helpers (e.g. uniqBy)
│   └── utils.test.ts           # Vitest unit tests for utils
├── tests/
│   └── e2e/                    # Playwright end-to-end tests
│       ├── home.spec.ts
│       ├── categories.spec.ts
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
| `pnpm run dev` | Start local dev server at `localhost:4321` |
| `pnpm run build` | Build production site to `./dist/` |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Format with Prettier then lint with ESLint |
| `pnpm run test` | Run Vitest unit tests |
| `pnpm run test:e2e` | Run Playwright E2E tests |
| `pnpm run clean` | Remove `node_modules`, `.astro`, and `dist` |
| `pnpm run refresh` | Upgrade Astro and all dependencies to latest |

## Release History

* 1.0.0: Initial version
* 2.0.0: Rewritten using additional content collections
* 3.0.0: Complete redesign — removed Flowbite, replaced with Tailwind CSS v4 and vanilla JS components; removed Alpine.js; added Vitest + Playwright test suite; Astro v6 best-practice refactor
* 4.0.0: TypeScript type fixes, ESLint/Prettier conflict resolution, dependency cleanup
