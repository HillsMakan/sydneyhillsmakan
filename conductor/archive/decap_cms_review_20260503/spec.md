# Specification: Decap CMS Implementation Review & Alignment

## Overview
This track focuses on reviewing and updating the existing Decap CMS implementation. The primary goal is to ensure the CMS configuration (`admin/config.yml`) achieves strict parity with the project's Astro v6 Content Collection schemas (Zod). Additionally, the track will address media handling, editor experience, and implement robust data validation rules within the CMS to prevent invalid data entry.

## Functional Requirements
- **Schema Parity:** Update `admin/config.yml` to perfectly mirror the Zod schemas defined in `src/content.config.ts` for all collections (partners, regions, categories, collaborations, pages).
- **New Field Support:** Ensure recently added frontmatter fields, such as `coordinates` (lat/lng) for partners, are supported and editable in the CMS.
- **Data Validation:** Implement field-level validation rules in the CMS config (e.g., `pattern` constraints for URLs, required fields, preventing blank submissions where inappropriate).
- **Media Handling:** Review and update how media (images) are handled by the CMS to ensure compatibility with Astro's built-in image optimization and the PhotoSwipe implementation.
- **Editor Experience:** Improve the rich text editor setup, ensuring custom shortcodes or Astro components used in Markdown are supported or handled gracefully.

## Non-Functional Requirements
- **Config Maintainability:** Refactor and organize `admin/config.yml` (e.g., using YAML anchors/aliases if appropriate) to make it easier to read and maintain.

## Acceptance Criteria
- [ ] `admin/config.yml` accurately reflects all fields defined in `src/content.config.ts`.
- [ ] The `coordinates` field can be successfully edited via the CMS.
- [ ] Form validation prevents the saving of invalid URLs and blank required fields.
- [ ] Images uploaded via the CMS work seamlessly with the local Astro build and optimized image components.
- [ ] No regressions in the ability to create, edit, or delete content across all collections.

## Out of Scope
- Major redesign of the CMS interface (Decap CMS UI is fixed).
- Changing the static site generator from Astro.
- Migrating to a different CMS.
