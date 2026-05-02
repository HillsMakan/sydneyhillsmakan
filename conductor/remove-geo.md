# Plan: Remove `geo` Field from Region Collection

## Objective
Remove the unused `geo` field from the `region` content collection schema.

## Key Files & Context
- `src/content.config.ts`: Contains the schema definitions for Astro content collections, including the `region` collection where the `geo` field is currently defined.

## Implementation Steps
1. Edit `src/content.config.ts`.
2. Locate the `region` collection definition (around line 63).
3. Remove the line defining the `geo` field: `geo: z.string().optional(),`.

## Verification & Testing
1. Run `pnpm run build` to verify that the project builds successfully without the `geo` field in the schema.
2. Run `pnpm run test` to ensure existing utility tests pass.
3. Run `pnpm run test:e2e` to ensure no UI breakages occurred.