import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Hills Makan Group/i)
  })

  test('renders the hero heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('HMG International')
  })

  test('displays a site description paragraph', async ({ page }) => {
    await expect(page.getByText(/food, business, and community/i)).toBeVisible()
  })

  test('shows the partner count in the hero', async ({ page }) => {
    await expect(page.getByText(/we currently have \d+ partners/i)).toBeVisible()
  })

  test('has a "Join" CTA link pointing to linktr.ee', async ({ page }) => {
    const joinLink = page.getByRole('link', { name: 'Join' }).first()
    await expect(joinLink).toBeVisible()
    const href = await joinLink.getAttribute('href')
    expect(href).toMatch(/linktr\.ee/)
  })

  test('has an "About Us" link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible()
  })

  test('renders the regions section', async ({ page }) => {
    // Regions component renders country/region cards
    await expect(page.locator('section, [class*="region"]').first()).toBeVisible()
  })
})
