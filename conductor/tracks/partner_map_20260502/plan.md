# Implementation Plan: Partner Map Component

## Phase 1: Research and Infrastructure [checkpoint: 678278c]
- [x] Task: Research map libraries and geocoding APIs suitable for build-time execution. (678278c)
- [x] Task: Update the `partner` content collection schema in `src/content.config.ts` to support location data. (f983054)
- [x] Task: Implement a build-time utility to fetch and cache geocoordinates for partners. (a246a32)

## Phase 2: Core Map Component [checkpoint: 0adf702]
- [x] Task: Create a basic `PartnerMap.astro` component that renders a map. (0adf702)
- [x] Task: Implement logic to pass partner data from Astro to the client-side map script. (1bf8c34)
- [x] Task: Implement marker rendering for partners with valid coordinates. (86cbcb9)

## Phase 3: Filtering and Interactivity [checkpoint: 8fc352e]
- [x] Task: Implement the UI for dynamic filtering (Country, Region, Category, Cuisine). (8fc352e)
- [x] Task: Implement client-side logic to filter map markers based on user selection. (9476013)
- [x] Task: Implement zoom and pan controls. (9ac1bdd)

## Phase 4: Finalization and Verification [checkpoint: c7363f0]
- [x] Task: Verify map performance with a large number of partners. (3effdeb)
- [x] Task: Ensure the geocoding process is robust and handles API limits or missing addresses gracefully. (a13df81)
- [x] Task: Conductor - User Manual Verification 'Finalization and Verification' (Protocol in workflow.md) (c7363f0)

## Phase 5: Bug Fix (Map Tiles) [checkpoint: 7749e89]
- [x] Task: Fix Leaflet tile rendering issue by invalidating map size after initialization. (7749e89)