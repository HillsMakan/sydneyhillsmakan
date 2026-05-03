import { test, expect } from '@playwright/test'

test.describe('Search widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('search input is visible in the top nav', async ({ page }) => {
    const searchInput = page.locator('.pagefind-ui__search-input')
    await expect(searchInput).toBeVisible({ timeout: 10_000 })
  })

  test('typing in search input shows results', async ({ page }) => {
    const searchInput = page.locator('.pagefind-ui__search-input')
    await searchInput.fill('sweet')

    // Wait for results to appear in the drawer
    const drawer = page.locator('.pagefind-ui__drawer')
    await expect(drawer).toBeVisible({ timeout: 10_000 })

    const resultItems = page.locator('.pagefind-ui__result')
    await expect(resultItems.first()).toBeVisible({ timeout: 10_000 })

    const count = await resultItems.count()
    expect(count).toBeGreaterThan(0)
  })
})
