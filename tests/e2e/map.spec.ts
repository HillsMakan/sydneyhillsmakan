import { test, expect } from '@playwright/test'

test.describe('Map verification', () => {
  test('test-map page renders Leaflet map and markers', async ({ page }) => {
    await page.goto('/test-map')
    
    // Wait for the map container to be visible
    const mapContainer = page.locator('#partner-map')
    await expect(mapContainer).toBeVisible()
    
    // Wait for Leaflet to initialize (check for leaflet-container class)
    await expect(mapContainer).toHaveClass(/leaflet-container/)
    
    // Check for markers (img elements with leaflet-marker-icon class)
    const markers = page.locator('.leaflet-marker-icon')
    
    // We expect many markers since we just geocoded all partners
    await expect(markers.first()).toBeVisible({ timeout: 10000 })
    const count = await markers.count()
    console.log(`Found ${count} markers on the map.`)
    expect(count).toBeGreaterThan(200) // 262 partners, most should have markers now
  })
})
