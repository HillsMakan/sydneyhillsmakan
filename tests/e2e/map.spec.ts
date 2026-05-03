import { test, expect } from '@playwright/test'

test.describe('Map verification', () => {
  test('test-map page renders Leaflet map and markers', async ({ page }) => {
    await page.goto('/test-map')

    const mapRoot = page.locator('[data-partner-map-root]')
    await expect(mapRoot).toBeVisible()

    // Wait for the map canvas to be visible
    const mapContainer = mapRoot.locator('[data-map-canvas]')
    await expect(mapContainer).toBeVisible()

    // Wait for Leaflet to initialize (check for leaflet-container class)
    await expect(mapContainer).toHaveClass(/leaflet-container/)

    // Check for markers (img elements with leaflet-marker-icon class)
    const markers = mapRoot.locator('.leaflet-marker-icon')

    // We expect many markers since we just geocoded all partners
    await expect(markers.first()).toBeVisible({ timeout: 10_000 })
    const count = await markers.count()
    expect(count).toBeGreaterThan(200) // Most partners should have markers
  })
})
