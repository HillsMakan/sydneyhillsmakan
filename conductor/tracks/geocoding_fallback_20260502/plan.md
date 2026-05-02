# Implementation Plan: Geocoding Fallback Logic

## Phase 1: Script Enhancement [checkpoint: 8a2aadd]
- [x] Task: Update `scripts/geocode.mjs` to extract `title` and `region` from the Markdown frontmatter. (8a2aadd)
- [x] Task: Implement fallback geocoding logic in `scripts/geocode.mjs` to search by `title` and `region` when `address` is unavailable or fails. (8a2aadd)

## Phase 2: Execution and Verification [checkpoint: 8a2aadd]
- [x] Task: Clear `geocoding_failed` flags from previously failed files to allow the new fallback logic to attempt geocoding them. (8a2aadd)
- [x] Task: Run `scripts/geocode.mjs` to process all partners. (8a2aadd)
- [x] Task: Verify that `pnpm run build` succeeds and the map component displays the newly geocoded partners. (8a2aadd)

## Phase 3: Finalization [checkpoint: 1c61d7e]
- [x] Task: Conductor - User Manual Verification 'Geocoding Fallback' (Protocol in workflow.md) (1c61d7e)