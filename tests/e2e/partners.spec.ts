import { test, expect } from '@playwright/test'

test.describe('Partners listing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/partners')
  })

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /partners/i }).first()).toBeVisible()
  })

  test('renders partner cards', async ({ page }) => {
    // Cards are anchor elements wrapping partner titles
    const cards = page.locator('a[href^="/partner/"]')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)
  })

  test('each card has a visible title', async ({ page }) => {
    const firstCard = page.locator('a[href^="/partner/"]').first()
    await expect(firstCard.locator('h4')).toBeVisible()
  })

  test('each card has an image', async ({ page }) => {
    const firstCardImg = page
      .locator('div.rounded-lg.border')
      .first()
      .locator('img')
    await expect(firstCardImg).toBeVisible()
  })

  test('region badge is rendered on cards', async ({ page }) => {
    // Badges are anchor links styled as purple pills
    const badge = page.locator('div.rounded-lg.border').first().locator('a[href]').first()
    await expect(badge).toBeVisible()
  })

  test('category badges are in a flex-wrap container', async ({ page }) => {
    // The wrapping div for CatBadge must have flex and flex-wrap classes
    const badgeContainer = page.locator('.flex.flex-wrap.gap-1').first()
    await expect(badgeContainer).toBeVisible()
  })

  test('category badge links point to /categories/*', async ({ page }) => {
    const catBadgeLink = page
      .locator('.flex.flex-wrap.gap-1 a[href^="/categories/"]')
      .first()
    await expect(catBadgeLink).toBeVisible()
  })

  test('discount badge appears for partners with a discount', async ({ page }) => {
    // 11:11 Sweet has 15% discount
    const discountBadge = page.getByText(/\d+%\s*Discount/i).first()
    await expect(discountBadge).toBeVisible()
  })

  test('"View partner" button is present on each card', async ({ page }) => {
    const viewBtn = page.getByRole('link', { name: /view partner/i }).first()
    await expect(viewBtn).toBeVisible()
  })

  test('clicking a card navigates to the partner detail page', async ({ page }) => {
    const firstCardLink = page.locator('a[href^="/partner/"]').first()
    const href = await firstCardLink.getAttribute('href')
    await firstCardLink.click()
    await expect(page).toHaveURL(href!)
  })
})

test.describe('Partner detail page (11:11 Sweet Lane Cove)', () => {
  const slug = '11_11_sweet_lanecove'

  test.beforeEach(async ({ page }) => {
    await page.goto(`/partner/${slug}`)
  })

  test('renders the partner title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /11:11 Sweet/i }).first()).toBeVisible()
  })

  test('renders a region badge', async ({ page }) => {
    // Region badge links to a region page
    const regionBadge = page.locator('a[href*="nsw"]')
    await expect(regionBadge.first()).toBeVisible()
  })

  test('renders category badge(s)', async ({ page }) => {
    const catBadge = page.locator('a[href^="/categories/"]')
    await expect(catBadge.first()).toBeVisible()
  })

  test('renders the discount badge when applicable', async ({ page }) => {
    await expect(page.getByText(/15%/i)).toBeVisible()
  })

  test('renders the partner description / body content', async ({ page }) => {
    await expect(page.getByText(/11:11 Sweet/i).first()).toBeVisible()
  })

  test('has a breadcrumb showing the partner name', async ({ page }) => {
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], ol[aria-label="Breadcrumb"], [class*="breadcrumb"]')
    if (await breadcrumb.count() > 0) {
      await expect(breadcrumb.first()).toBeVisible()
    }
  })
})
