import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the top nav bar with site title', async ({ page }) => {
    await expect(page.getByRole('navigation').first()).toBeVisible()
    await expect(page.getByText('HMG International').first()).toBeVisible()
  })

  test('sidebar is visible on desktop (md+) by default', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    const sidebar = page.locator('#drawer-navigation')
    await expect(sidebar).toBeVisible()
  })

  test('sidebar is hidden on mobile and toggled by hamburger button', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    const sidebar = page.locator('#drawer-navigation')
    // On mobile the sidebar starts off-screen (not visually visible)
    await expect(sidebar).not.toHaveClass(/is-open/)

    const toggle = page.locator('#sidebar-toggle')
    await toggle.click()
    await expect(sidebar).toHaveClass(/is-open/)

    // Clicking again closes it
    await toggle.click()
    await expect(sidebar).not.toHaveClass(/is-open/)
  })

  test('sidebar contains Home link', async ({ page }) => {
    const homeLink = page.locator('#drawer-navigation').getByRole('link', { name: 'Home' })
    await expect(homeLink).toBeVisible()
    await expect(homeLink).toHaveAttribute('href', '/')
  })

  test('sidebar contains Partners link', async ({ page }) => {
    const partnersLink = page.locator('#drawer-navigation').getByRole('link', { name: /partner/i })
    await expect(partnersLink.first()).toBeVisible()
  })

  test('theme-toggle button is present in the top nav', async ({ page }) => {
    await expect(page.locator('#theme-toggle')).toBeVisible()
  })

  test('theme-toggle switches to dark mode and persists', async ({ page }) => {
    // Start in light mode
    await page.evaluate(() => localStorage.setItem('color-theme', 'light'))
    await page.reload()

    const html = page.locator('html')
    await expect(html).not.toHaveClass(/dark/)

    await page.locator('#theme-toggle').click()
    await expect(html).toHaveClass(/dark/)

    // Reload and check it persisted
    await page.reload()
    await expect(html).toHaveClass(/dark/)
  })

  test('theme-toggle switches back to light mode', async ({ page }) => {
    await page.evaluate(() => localStorage.setItem('color-theme', 'dark'))
    await page.reload()

    const html = page.locator('html')
    await expect(html).toHaveClass(/dark/)

    await page.locator('#theme-toggle').click()
    await expect(html).not.toHaveClass(/dark/)
  })

  test('user-menu button opens and closes the dropdown', async ({ page }) => {
    const btn = page.locator('#user-menu-button')
    const dropdown = page.locator('#user-dropdown')

    // Dropdown starts hidden
    await expect(dropdown).toBeHidden()

    await btn.click()
    await expect(dropdown).toBeVisible()

    // Clicking elsewhere closes it
    await page.locator('body').click({ position: { x: 10, y: 10 } })
    await expect(dropdown).toBeHidden()
  })

  test('sidebar accordion for a region expands and collapses', async ({ page }) => {
    // Australia has sub-regions (NSW, VIC, etc.)
    const australiaBtn = page
      .locator('#drawer-navigation [aria-controls^="dropdown-australia"]')
      .first()
    const btnCount = await australiaBtn.count()
    test.skip(btnCount === 0, 'Australia accordion button not found in sidebar')

    const dropdownId = await australiaBtn.getAttribute('aria-controls')
    const dropdown = page.locator(`#${dropdownId}`)

    await expect(dropdown).toBeHidden()
    await australiaBtn.click()
    await expect(dropdown).toBeVisible()
    await australiaBtn.click()
    await expect(dropdown).toBeHidden()
  })

  test('clicking a sidebar nav link navigates correctly', async ({ page }) => {
    const homeLink = page.locator('#drawer-navigation').getByRole('link', { name: 'Home' })
    await homeLink.click()
    await expect(page).toHaveURL('/')
  })
})
