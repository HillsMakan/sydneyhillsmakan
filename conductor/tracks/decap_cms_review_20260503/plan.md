# Implementation Plan: Decap CMS Implementation Review & Alignment

## Phase 1: Analysis and Structural Refactoring
- [ ] Task: Analyze `src/content.config.ts` and document all required schema fields for each collection.
- [ ] Task: Refactor `public/admin/config.yml` to utilize YAML anchors/aliases for repeated field definitions (e.g., common SEO fields or draft flags) to improve maintainability.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Analysis and Structural Refactoring' (Protocol in workflow.md)

## Phase 2: Schema Parity and Data Validation
- [ ] Task: Update the `partner` collection configuration in `admin/config.yml` to include the `coordinates` object (with `lat` and `lng` number widgets).
- [ ] Task: Implement data validation for all collections: add `pattern` regex constraints to URL fields (like `link` in partners) and ensure `required` flags match Zod schemas.
- [ ] Task: Update configurations for `region`, `categories`, `collaborations`, and `pages` collections to ensure 100% parity with `src/content.config.ts`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Schema Parity and Data Validation' (Protocol in workflow.md)

## Phase 3: Media Handling and Editor Experience
- [ ] Task: Verify and update the `media_folder` and `public_folder` settings in `admin/config.yml` to ensure compatibility with Astro's image optimization.
- [ ] Task: Review widget configurations (e.g., using `markdown` vs `text` widgets appropriately) for optimal editor experience.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Media Handling and Editor Experience' (Protocol in workflow.md)
