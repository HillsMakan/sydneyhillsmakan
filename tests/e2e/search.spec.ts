import { test, expect } from '@playwright/test'

test.describe('Search widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('search input is visible in the top nav', async ({ page }) => {
    const searchHost = page.locator('nav').first().locator('pagefind-searchbox')
    await expect(searchHost).toBeVisible({ timeout: 10_000 })

    const searchInput = page.locator('nav').first().getByRole('combobox', { name: /search/i })
    await expect(searchInput).toBeVisible({ timeout: 10_000 })
  })

  test('typing in search input shows results', async ({ page }) => {
    const searchInput = page.locator('nav').first().getByRole('combobox', { name: /search/i })
    await searchInput.fill('sweet')

    const resultItems = page.getByRole('option')
    await expect(resultItems.first()).toBeVisible({ timeout: 10_000 })

    const count = await resultItems.count()
    expect(count).toBeGreaterThan(0)
  })
})
