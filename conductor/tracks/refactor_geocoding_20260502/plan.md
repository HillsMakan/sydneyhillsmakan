# Implementation Plan: Geocoding Logic Refactor

## Phase 1: Script Refactoring [checkpoint: 3abc405]
- [x] Task: Update `scripts/geocode.mjs` to eliminate `src/data/geo-cache.json` and work directly with Markdown frontmatter. (3abc405)
- [x] Task: Implement `geocoded: false` flag for failed attempts to avoid redundant API calls. (3abc405)

## Phase 2: Execution and Cleanup [checkpoint: 3abc405]
- [x] Task: Run the refactored script to populate Markdown files with missing coordinates. (3abc405)
- [x] Task: Delete `src/data/geo-cache.json` and remove it from Git. (3abc405)
- [x] Task: Verify that `pnpm run build` succeeds and the map component correctly uses the in-file coordinates. (3abc405)

## Phase 3: Finalization [checkpoint: e4b4798]
- [x] Task: Conductor - User Manual Verification 'Geocoding Refactor' (Protocol in workflow.md) (e4b4798)