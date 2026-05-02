# Specification: Partner Map Component

## Objective
Implement a versatile Astro component that displays partners on an interactive map. The component must support dynamic filtering (by country, region, category, or cuisine) and handle partner locations intelligently.

## Functional Requirements
- **Interactive Map:** Users can zoom and pan.
- **Partner Markers:** Display partners as markers on the map.
- **Dynamic Filtering:** Users can filter partners by Country, Region, Category, or Cuisine using on-page controls.
- **Automatic Coordinates:** Partner locations should be automatically geocoded at build time based on their address/location information, rather than requiring manual input in the Markdown frontmatter.

## Technical Approach
- **Map Library:** Use a lightweight, open-source library like Leaflet or similar (vanilla JS for Astro compatibility).
- **Geocoding:** Implement a build-time script or integration that uses a geocoding API (e.g., OpenStreetMap/Nominatim or Google Maps) to fetch coordinates for partners and store them in a cache or inject them into the data layer.
- **Content Collection Update:** Extend the partner content collection schema to include an optional `location` field (for the address) and a build-time populated `coordinates` field.

## Components
- `MapContainer.astro`: Main component that initializes the map and handles filters.
- `MapFilter.astro`: UI for selecting filters.
- `MapMarkers.astro`: Handles the rendering and updating of markers based on current filters.