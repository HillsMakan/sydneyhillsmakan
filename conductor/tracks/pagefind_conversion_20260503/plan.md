# Implementation Plan: Convert Search Implementation from Lunr to Pagefind

## Phase 1: Dependency Updates & Build Configuration
- [x] Task: Remove Lunr dependencies from `package.json`. [d97ad21]
- [x] Task: Install `pagefind` as a dependency. [05ada10]
- [x] Task: Update `package.json` build scripts to execute Pagefind indexing after the Astro build (e.g., `"build": "astro build && pagefind --site dist"`). [80db1a9]
- [ ] Task: Conductor - User Manual Verification 'Dependency Updates & Build Configuration' (Protocol in workflow.md)

## Phase 2: Lunr Teardown
- [ ] Task: Delete Lunr API endpoints (`src/pages/search-docs.json.js`, `src/pages/search-index.json.js`).
- [ ] Task: Remove any custom utility functions related to Lunr indexing or searching.
- [ ] Task: Conductor - User Manual Verification 'Lunr Teardown' (Protocol in workflow.md)

## Phase 3: Pagefind Integration
- [ ] Task: Replace existing search UI in `src/components/search.astro` (or relevant component) with Pagefind's default UI component. Include necessary CSS and JS links.
- [ ] Task: Configure Astro components to include `data-pagefind-body` attributes where necessary to guide the indexer, and `data-pagefind-ignore` to exclude boilerplate.
- [ ] Task: Conductor - User Manual Verification 'Pagefind Integration' (Protocol in workflow.md)

## Phase 4: E2E Testing
- [ ] Task: Delete old Lunr-specific search tests in `tests/e2e/search.spec.ts`.
- [ ] Task: Write Failing Tests (Red Phase): Create new E2E tests in `tests/e2e/search.spec.ts` for the Pagefind default UI.
- [ ] Task: Implement to Pass Tests (Green Phase): Ensure tests interact correctly with the Pagefind UI elements and assert search results appear.
- [ ] Task: Conductor - User Manual Verification 'E2E Testing' (Protocol in workflow.md)