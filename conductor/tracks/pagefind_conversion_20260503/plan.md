# Implementation Plan: Convert Search Implementation from Lunr to Pagefind

## Phase 1: Dependency Updates & Build Configuration [checkpoint: e879b9f]
- [x] Task: Remove Lunr dependencies from `package.json`. [d97ad21]
- [x] Task: Install `pagefind` as a dependency. [05ada10]
- [x] Task: Update `package.json` build scripts to execute Pagefind indexing after the Astro build (e.g., `"build": "astro build && pagefind --site dist"`). [80db1a9]
- [x] Task: Conductor - User Manual Verification 'Dependency Updates & Build Configuration' (Protocol in workflow.md) [e879b9f]

## Phase 2: Lunr Teardown [checkpoint: 2ace057]
- [x] Task: Delete Lunr API endpoints (`src/pages/search-docs.json.js`, `src/pages/search-index.json.js`). [0c59307]
- [x] Task: Remove any custom utility functions related to Lunr indexing or searching. [3016024]
- [x] Task: Conductor - User Manual Verification 'Lunr Teardown' (Protocol in workflow.md) [2ace057]

## Phase 3: Pagefind Integration
- [x] Task: Replace existing search UI in `src/components/search.astro` (or relevant component) with Pagefind's default UI component. Include necessary CSS and JS links. [0ce2dfe]
- [x] Task: Configure Astro components to include `data-pagefind-body` attributes where necessary to guide the indexer, and `data-pagefind-ignore` to exclude boilerplate. [89c5c50]
- [~] Task: Conductor - User Manual Verification 'Pagefind Integration' (Protocol in workflow.md)

## Phase 4: E2E Testing
- [ ] Task: Delete old Lunr-specific search tests in `tests/e2e/search.spec.ts`.
- [ ] Task: Write Failing Tests (Red Phase): Create new E2E tests in `tests/e2e/search.spec.ts` for the Pagefind default UI.
- [ ] Task: Implement to Pass Tests (Green Phase): Ensure tests interact correctly with the Pagefind UI elements and assert search results appear.
- [ ] Task: Conductor - User Manual Verification 'E2E Testing' (Protocol in workflow.md)