# Specification: Fix Map Filters and Markers

## Objective
Fix the bugs in `PartnerMap.astro` where map filters (Region, Category, Cuisine) are not working correctly, sometimes displaying incorrect regions, and markers are not displaying correctly.

## Functional Requirements
- **Accurate Filtering:** Ensure the client-side logic correctly filters partners by Region, Category, and Cuisine. The regions need to be matched correctly with the option values.
- **Marker Display:** Fix any issues causing markers to not display correctly. This could involve checking Leaflet icon paths again or data types passed to `L.marker`.

## Technical Approach
- **Inspect Filter Values:** Check how the option values in the `<select>` elements match the `region`, `categories`, and `cuisine` data passed in `data-partners`. The region might be an object instead of a string in the frontmatter, or the ID might not match exactly.
- **Inspect Marker Icons:** The previous Leaflet default icon fix using Vite imports might be failing in production build or throwing 404s. Check the browser console. A more robust way to fix Leaflet icons is to redefine `iconUrl`, `iconRetinaUrl`, and `shadowUrl` pointing to public assets, or using `L.Icon.Default.imagePath`.
- **Implement Fixes:** Update the UI and script logic in `src/components/PartnerMap.astro` accordingly.