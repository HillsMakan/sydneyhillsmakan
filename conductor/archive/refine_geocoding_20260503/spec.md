# Specification: Refine Geocoding Approach

## Overview
This track focuses on refining the geocoding logic to ensure every partner has valid coordinates while minimizing redundant API calls. It introduces a multi-step fallback strategy and moves storage entirely to Markdown frontmatter.

## Functional Requirements
- **Selective Geocoding:** Only geocode if coordinates are missing from partner frontmatter.
- **Multi-Step Fallback Strategy:**
  1. Geocode `address` field. Verify coordinates fall within the specified `region`.
  2. Simplify `address` iteratively (remove business name prefix, keep street address, then postcode/suburb, then city).
  3. Use partner `name` or `title`.
  4. Geocode capital city of the partner's `region`.
- **Validation:** Successful geocoding must resolve to a location within the partner's designated region.
- **Cleanup:** Remove `geocoding_failed` flag from all partner content files.
- **Build-Time Execution:** The geocoding script should run at build time or as a pre-build step.

## Non-Functional Requirements
- **Efficiency:** Avoid re-geocoding partners that already have valid coordinates.
- **Resilience:** Always provide a coordinate (even if it's the regional capital) to ensure markers appear on the map.

## Acceptance Criteria
- [ ] Script successfully populates missing coordinates in partner frontmatter.
- [ ] No partner contains the `geocoding_failed` flag.
- [ ] Partners with existing coordinates are not re-processed.
- [ ] Failed address lookups fallback gracefully to regional capitals.
- [ ] All partners appear on the `PartnerMap`.

## Out of Scope
- Real-time client-side geocoding.
- Modifying the map UI or filtering logic (handled in other tracks).
