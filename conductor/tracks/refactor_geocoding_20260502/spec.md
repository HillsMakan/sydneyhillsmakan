# Specification: Geocoding Logic Refactor

## Objective
Refactor the geocoding logic to store geographic coordinates directly within each partner's Markdown frontmatter. This eliminates the need for an external JSON cache (`src/data/geo-cache.json`) and ensures the data remains self-contained within the content collection.

## Functional Requirements
- **No External Cache:** Remove dependencies on `geo-cache.json`.
- **Markdown-First Storage:** Coordinates should be written directly to the Markdown frontmatter of each partner file.
- **Skip if Geocoded:** If `coordinates` exist in the frontmatter, the geocoding process must skip the file.
- **Handle Failures Gracefully:** If geocoding fails, add a `geocoded: false` flag to the frontmatter to prevent redundant API calls in subsequent builds.
- **Build Integration:** Ensure the refactored script still runs during the `prebuild` hook.

## Technical Approach
- **Script Update:** Modify `scripts/geocode.mjs` to read and write directly to `src/content/partner/*.md`.
- **Frontmatter Parsing:** Enhance regex/parsing to identify `coordinates` and `geocoded` fields.
- **Rate Limiting:** Maintain the 1.2s delay for Nominatim API compliance.
- **Migration:** Optionally perform one last run using existing cache data before deleting the file. (Actually, it's safer to just re-geocode or manually verify if important coordinates are missing).
- **Quality Gates:** Verify that `pnpm run build` still works and coordinates are correctly injected into files.