# Implementation Plan: Refine Geocoding Approach

## Phase 1: Preparation and Environment Setup [checkpoint: bbbc8cf]
- [x] Task: Create a reproduction script `scripts/verify-geocoding.mjs` to identify current missing or incorrect coordinates. [fa246d3]
    - [x] List all partners missing `coordinates` or having `geocoding_failed: true`.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Preparation and Environment Setup' (Protocol in workflow.md) [bbbc8cf]

## Phase 2: Core Refactor & Unit Testing [checkpoint: 7772758]
- [x] Task: Create `scripts/geocode.test.ts` to test the logic before implementation. [1d352c7]
    - [x] Mock Nominatim API responses.
    - [x] Test address simplification steps.
    - [x] Test regional capital fallback logic.
- [x] Task: Refactor `scripts/geocode.mjs` core logic. [aadf667]
    - [x] Implement iterative address simplification (regex/string manipulation).
    - [x] Implement `isCoordInRegion` using rough bounding boxes for regions defined in `scripts/geocode.mjs`.
    - [x] Implement step-by-step strategy: (1) Address -> (2) Simplified Address -> (3) Name/Title -> (4) Regional Capital.
- [x] Task: Update the main execution loop in `scripts/geocode.mjs`. [aadf667]
    - [x] Ensure it only processes files missing `coordinates`.
    - [x] Remove `geocoding_failed` flags upon successful update.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Core Refactor & Unit Testing' (Protocol in workflow.md) [7772758]

## Phase 3: Global Execution & Cleanup
- [x] Task: Execute the refactored geocoding script on all partners. [4ef9565]
    - [x] Run `pnpm run geocode`.
    - [x] Monitor logs for successful fallbacks to regional capitals.
- [x] Task: Perform global frontmatter cleanup. [4ef9565]
    - [x] Create a surgical script/one-liner to remove `geocoding_failed: true` lines from all `.md` files in `src/content/partner/`.
- [x] Task: Final verification and E2E testing. [4ef9565]
    - [x] Run `pnpm run test:e2e` to ensure the map renders all markers correctly.
    - [x] Check `src/content/partner/` to confirm all files have coordinates.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Global Execution & Cleanup' (Protocol in workflow.md)
