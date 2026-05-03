# Specification: Convert Search Implementation from Lunr to Pagefind

## Overview
This track focuses on migrating the project's local full-text search implementation from Lunr to Pagefind. The primary motivations for this transition are to achieve better performance (as Pagefind is optimized for static sites and loads data in chunks), faster build times via Pagefind's Rust-based post-build indexing, and to leverage Pagefind's pre-built UI components for a robust search experience out-of-the-box.

## Functional Requirements
- **Search Engine Replacement:** Integrate `pagefind` to index the static site output (`dist/` directory) as a post-build step.
- **UI Implementation:** Drop in and configure Pagefind's default search UI component into the site's layout or dedicated search page, replacing the existing custom search interface.
- **Lunr Removal:** Completely remove all Lunr-related dependencies, indexing scripts (e.g., endpoints in `src/pages/search-docs.json.js`, `src/pages/search-index.json.js`), and frontend logic.
- **Testing:** Rewrite the existing Playwright E2E search tests (`tests/e2e/search.spec.ts`) to validate the new Pagefind UI and its functionality.

## Non-Functional Requirements
- **Performance:** Post-build indexing should be fast, and the client-side search footprint should be minimized compared to loading a full Lunr index upfront.
- **Build Process:** The CI/CD pipeline and local build scripts (`pnpm run build`) must be updated to execute the Pagefind indexing step after Astro finishes building the static files.

## Acceptance Criteria
- [ ] Running `pnpm run build` successfully compiles the Astro site and subsequently runs the Pagefind indexer without errors.
- [ ] The Pagefind default search UI is visible and fully functional on the frontend.
- [ ] Users can search for content (partners, categories, etc.) and receive accurate, fast results via the Pagefind UI.
- [ ] All code, scripts, endpoints, and dependencies related to Lunr have been completely removed from the repository.
- [ ] New Playwright E2E tests for the Pagefind search functionality are written, executed, and pass successfully.

## Out of Scope
- Creating a heavily customized search UI from scratch using Pagefind's JS API (we are opting for the default UI).