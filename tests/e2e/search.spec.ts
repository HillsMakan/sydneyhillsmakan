import { test, expect } from '@playwright/test'

test.describe('Search widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('search input is visible in the top nav', async ({ page }) => {
    await expect(page.locator('#lunrsearch')).toBeVisible()
  })

  test('search button is visible', async ({ page }) => {
    await expect(page.locator('#lunrbutton')).toBeVisible()
  })

  test('search panel is hidden by default', async ({ page }) => {
    await expect(page.locator('#search-panel')).toBeHidden()
  })

  test('clicking search button opens the results panel', async ({ page }) => {
    await page.locator('#lunrsearch').fill('sweet')
    await page.locator('#lunrbutton').click()
    await expect(page.locator('#search-panel')).toBeVisible()
  })

  test('pressing Enter in the search input opens the results panel', async ({ page }) => {
    await page.locator('#lunrsearch').fill('sweet')
    await page.locator('#lunrsearch').press('Enter')
    await expect(page.locator('#search-panel')).toBeVisible()
  })

  test('search results panel shows a heading', async ({ page }) => {
    await page.locator('#lunrsearch').fill('sweet')
    await page.locator('#lunrbutton').click()
    await expect(page.locator('#lunrsearchtitle')).toContainText(/search results/i)
  })

  test('search for a known partner returns a result', async ({ page }) => {
    await page.locator('#lunrsearch').fill('sweet')
    await page.locator('#lunrbutton').click()
    // Wait for results to load (fetches JSON)
    await page.waitForSelector('#lunrsearchresults a', { timeout: 10_000 })
    const results = page.locator('#lunrsearchresults a')
    const count = await results.count()
    expect(count).toBeGreaterThan(0)
  })

  test('search for a nonexistent term shows no-results message', async ({ page }) => {
    await page.locator('#lunrsearch').fill('zzznoresultsexpectedzzz')
    await page.locator('#lunrbutton').click()
    await expect(page.locator('#lunrsearchresults ul')).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('#lunrsearchresults')).toContainText(/no results/i)
  })

  test('close button hides the results panel', async ({ page }) => {
    await page.locator('#lunrsearch').fill('sweet')
    await page.locator('#lunrbutton').click()
    await expect(page.locator('#search-panel')).toBeVisible()

    await page.locator('#search-close').click()
    // Panel hides after the CSS transition (500ms)
    await expect(page.locator('#search-panel')).toBeHidden({ timeout: 2000 })
  })

  test('search results panel title updates with query term', async ({ page }) => {
    const term = 'dessert'
    await page.locator('#lunrsearch').fill(term)
    await page.locator('#lunrbutton').click()
    await expect(page.locator('#lunrsearchtitle')).toContainText(term, { timeout: 10_000 })
  })
})
