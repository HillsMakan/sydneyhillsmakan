import { test, expect } from '@playwright/test'

test.describe('Categories listing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/categories')
  })

  test('has a Categories heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /categories/i }).first()).toBeVisible()
  })

  test('renders category cards / links', async ({ page }) => {
    const catLinks = page.locator('a[href^="/categories/"]')
    await expect(catLinks.first()).toBeVisible()
    const count = await catLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('displays the Food and Drinks category', async ({ page }) => {
    await expect(page.getByText(/food and drinks/i)).toBeVisible()
  })

  test('clicking a category navigates to its detail page', async ({ page }) => {
    const firstCatLink = page.locator('a[href^="/categories/"]').first()
    const href = await firstCatLink.getAttribute('href')
    await firstCatLink.click()
    await expect(page).toHaveURL(href!)
  })
})

test.describe('Category detail page (Food and Drinks)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/categories/foodanddrinks')
  })

  test('renders the Food and Drinks heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /food and drinks/i }).first()).toBeVisible()
  })

  test('shows partner cards for that category', async ({ page }) => {
    const cards = page.locator('a[href^="/partner/"]')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)
  })

  test('partner cards have category badges wrapped in flex container', async ({ page }) => {
    const badgeWrap = page.locator('.flex.flex-wrap.gap-1').first()
    await expect(badgeWrap).toBeVisible()
  })

  test('breadcrumb shows Category and Food and Drinks', async ({ page }) => {
    await expect(page.getByRole('link', { name: /category/i })).toBeVisible()
    await expect(page.getByText(/food and drinks/i).first()).toBeVisible()
  })
})
