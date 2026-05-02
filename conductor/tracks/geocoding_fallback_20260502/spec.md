# Specification: Geocoding Fallback Logic

## Objective
Enhance the geocoding logic to ensure all partners are assigned location coordinates. The script should rely on the `address` field first, but if no valid address is available, it should fall back to searching based on the partner's `title` (name) and `region`.

## Functional Requirements
- **Primary Geocoding:** Geocode using the `address` field if present.
- **Fallback Geocoding:** If `address` is missing or fails, construct a search query using the partner's `title` and `region`.
- **Complete Coverage:** Attempt to geocode every partner to ensure maximum map coverage.
- **Cache Failures:** Continue using the `geocoding_failed: true` flag for partners that completely fail both methods to avoid redundant API calls.

## Technical Approach
- **Script Update:** Modify `scripts/geocode.mjs`.
- **Query Construction:** For the fallback query, combine `p.data.title` and `p.data.region` (translating region IDs to human-readable names if necessary, e.g., "NSW", "Singapore").
- **Retry Logic:** If the first geocoding attempt (by address) yields no results or is skipped, immediately execute a second attempt using the fallback query.