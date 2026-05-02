# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partners.spec.ts >> Partner detail page (11:11 Sweet Lane Cove) >> renders a region badge
- Location: tests/e2e/partners.spec.ts:82:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a[href*="nsw"]').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href*="nsw"]').first()
    9 × locator resolved to <a href="/australia/nsw" data-astro-cid-y6oet657="" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> New South Wales </a>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - link "HMG International" [ref=e6] [cursor=pointer]:
            - /url: /
            - generic [ref=e7]: HMG International
          - generic [ref=e11]:
            - searchbox "Search" [ref=e12]
            - button "Search Button" [ref=e13]:
              - img [ref=e14]
        - generic [ref=e16]:
          - button [ref=e17]:
            - img [ref=e18]
          - button "Open user menu logo" [ref=e20]:
            - generic [ref=e21]: Open user menu
            - img "logo" [ref=e22]
    - complementary "Sidenav" [ref=e23]:
      - generic [ref=e24]:
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Home" [ref=e27] [cursor=pointer]:
              - /url: /
              - img [ref=e28]
              - generic [ref=e30]: Home
          - listitem [ref=e31]:
            - button "Australia" [ref=e32]:
              - img [ref=e33]
              - generic [ref=e35]: Australia
              - img [ref=e36]
          - listitem [ref=e38]:
            - button "Indonesia" [ref=e39]:
              - img [ref=e40]
              - generic [ref=e42]: Indonesia
              - img [ref=e43]
          - listitem [ref=e45]:
            - link "International" [ref=e46] [cursor=pointer]:
              - /url: /international
              - img [ref=e47]
              - generic [ref=e49]: International
          - listitem [ref=e50]:
            - button "Japan" [ref=e51]:
              - img [ref=e52]
              - generic [ref=e54]: Japan
              - img [ref=e55]
          - listitem [ref=e57]:
            - button "Malaysia" [ref=e58]:
              - img [ref=e59]
              - generic [ref=e61]: Malaysia
              - img [ref=e62]
          - listitem [ref=e64]:
            - link "New Zealand" [ref=e65] [cursor=pointer]:
              - /url: /new_zealand
              - img [ref=e66]
              - generic [ref=e68]: New Zealand
          - listitem [ref=e69]:
            - link "Singapore" [ref=e70] [cursor=pointer]:
              - /url: /singapore
              - img [ref=e71]
              - generic [ref=e73]: Singapore
          - listitem [ref=e74]:
            - link "United Kingdom" [ref=e75] [cursor=pointer]:
              - /url: /united_kingdom
              - img [ref=e76]
              - generic [ref=e78]: United Kingdom
        - list [ref=e79]:
          - listitem [ref=e80]:
            - button "Collaborations" [ref=e81]:
              - img [ref=e82]
              - generic [ref=e84]: Collaborations
              - img [ref=e85]
          - listitem [ref=e87]:
            - link "About Us" [ref=e88] [cursor=pointer]:
              - /url: /about
              - img [ref=e89]
              - generic [ref=e91]: About Us
          - listitem [ref=e92]:
            - link "Membership" [ref=e93] [cursor=pointer]:
              - /url: /membership
              - img [ref=e94]
              - generic [ref=e96]: Membership
          - listitem [ref=e97]:
            - link "Partnership" [ref=e98] [cursor=pointer]:
              - /url: /partnership
              - img [ref=e99]
              - generic [ref=e101]: Partnership
          - listitem [ref=e102]:
            - link "Privacy" [ref=e103] [cursor=pointer]:
              - /url: /privacy
              - img [ref=e104]
              - generic [ref=e106]: Privacy
          - listitem [ref=e107]:
            - link "Contact Us" [ref=e108] [cursor=pointer]:
              - /url: /contact
              - img [ref=e109]
              - generic [ref=e111]: Contact Us
          - listitem [ref=e112]:
            - link "Join" [ref=e113] [cursor=pointer]:
              - /url: https://linktr.ee/hillsmakangroup
              - img [ref=e114]
              - generic [ref=e116]: Join
      - generic [ref=e118]:
        - text: © 2026
        - link "HMG International" [ref=e119] [cursor=pointer]:
          - /url: /
    - main [ref=e120]:
      - navigation "Breadcrumb" [ref=e121]:
        - list [ref=e122]:
          - listitem [ref=e123]:
            - link "Home" [ref=e124] [cursor=pointer]:
              - /url: /
              - img [ref=e125]
              - text: Home
          - listitem [ref=e127]:
            - generic [ref=e128]:
              - img [ref=e129]
              - link "Partner" [ref=e131] [cursor=pointer]:
                - /url: /partners
          - listitem [ref=e132]:
            - generic [ref=e133]:
              - img [ref=e134]
              - link "11:11 Sweet Lanecove" [ref=e136] [cursor=pointer]:
                - /url: /partner/11_11_sweet_lanecove
      - article [ref=e137]:
        - generic [ref=e139]:
          - heading "11:11 Sweet Lanecove" [level=1] [ref=e140]
          - generic [ref=e141]:
            - link "New South Wales" [ref=e142] [cursor=pointer]:
              - /url: /australia/nsw
              - img [ref=e143]
              - text: New South Wales
            - link "Food and Drinks" [ref=e145] [cursor=pointer]:
              - /url: /categories/foodanddrinks
              - img [ref=e146]
              - text: Food and Drinks
          - paragraph [ref=e148]: Dessert Shop
        - generic [ref=e149]:
          - generic [ref=e150]:
            - iframe [ref=e154]:
              - generic [ref=f1e6]:
                - generic:
                  - button "Keyboard shortcuts"
                - region "Map" [ref=f1e7]
                - generic [ref=f1e8]:
                  - iframe [ref=f1e39]:
                    
                  - button "Map camera controls" [ref=f1e41] [cursor=pointer]
                  - button "Show satellite imagery" [ref=f1e44] [cursor=pointer]:
                    - generic [ref=f1e48]:
                      - region [ref=f1e49]
                      - iframe [ref=f1e55]:
                        
                  - img "Google" [ref=f1e57]
                  - generic [ref=f1e58]:
                    - button "Keyboard shortcuts" [ref=f1e64] [cursor=pointer]
                    - generic [ref=f1e69]: Map data ©2026 Google
                    - link "Terms (opens in new tab)" [ref=f1e74] [cursor=pointer]:
                      - /url: https://www.google.com/intl/en-US_US/help/terms_maps.html
                      - text: Terms
                    - link "Report a map error" [ref=f1e79] [cursor=pointer]:
                      - /url: https://www.google.com/maps/@-33.8143772,151.1694956,19z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3
            - generic [ref=e155]:
              - img "11:11 Sweet Lanecove" [ref=e156]
              - generic [ref=e157]:
                - generic [ref=e158]:
                  - term [ref=e159]: Cuisine
                  - definition [ref=e160]:
                    - list [ref=e161]:
                      - listitem [ref=e162]:
                        - img [ref=e163]
                        - paragraph [ref=e165]: Dessert
                - generic [ref=e166]:
                  - term [ref=e167]: 15% Discount
                  - definition [ref=e168]: Excluding Promotions
          - generic [ref=e169]:
            - paragraph [ref=e170]:
              - strong [ref=e171]: A Taste of Something New - Homemade Asian Dessert & Cafe
            - paragraph [ref=e172]: At 11:11 Sweet, we specialise in handcrafted desserts made from the finest, carefully selected ingredients.
            - paragraph [ref=e173]: Our culinary team has taken inspiration from the best dessert houses across Asia to curate a distinctive menu filled with flavour, creativity, and heart.
            - paragraph [ref=e174]: We’re dedicated to offering exceptional food and memorable service — and we can’t wait for you to experience it.
            - paragraph [ref=e175]:
              - strong [ref=e176]: "Location :"
              - text: Shop C, 123-125 Longuevelle Road, 2066, Lane Cove, NSW, Australia (11:11 Sweet is located at the top of the Plaza between La Piazza and Sushi Maru)
            - paragraph [ref=e177]:
              - strong [ref=e178]: "Trading :"
              - text: Monday to Sunday from 8 am to 8 pm
        - paragraph [ref=e179]: Please click on any photo to view full image. Use arrow keys or swipe to navigate.
        - generic [ref=e182]:
          - figure [ref=e184]:
            - link "sweet-1111-square-1200" [ref=e185] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/sweet-1111-square-1200.png?origWidth=1200&origHeight=1200&origFormat=png
              - img "sweet-1111-square-1200" [ref=e186]
          - figure [ref=e188]:
            - link "screenshot_20251204_213011_samsung_internet" [ref=e189] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213011_samsung_internet.jpg?origWidth=3868&origHeight=3596&origFormat=jpg
              - img "screenshot_20251204_213011_samsung_internet" [ref=e190]
          - figure [ref=e192]:
            - link "screenshot_20251204_213016_samsung_internet" [ref=e193] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213016_samsung_internet.jpg?origWidth=3876&origHeight=3608&origFormat=jpg
              - img "screenshot_20251204_213016_samsung_internet" [ref=e194]
          - figure [ref=e196]:
            - link "screenshot_20251204_213019_samsung_internet" [ref=e197] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213019_samsung_internet.jpg?origWidth=3860&origHeight=3588&origFormat=jpg
              - img "screenshot_20251204_213019_samsung_internet" [ref=e198]
          - figure [ref=e200]:
            - link "screenshot_20251204_213023_samsung_internet" [ref=e201] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213023_samsung_internet.jpg?origWidth=3872&origHeight=3228&origFormat=jpg
              - img "screenshot_20251204_213023_samsung_internet" [ref=e202]
          - figure [ref=e204]:
            - link "screenshot_20251204_213028_samsung_internet" [ref=e205] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213028_samsung_internet.jpg?origWidth=3880&origHeight=3236&origFormat=jpg
              - img "screenshot_20251204_213028_samsung_internet" [ref=e206]
          - figure [ref=e208]:
            - link "screenshot_20251204_213032_samsung_internet" [ref=e209] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213032_samsung_internet.jpg?origWidth=3868&origHeight=3236&origFormat=jpg
              - img "screenshot_20251204_213032_samsung_internet" [ref=e210]
          - figure [ref=e212]:
            - link "screenshot_20251204_213035_samsung_internet" [ref=e213] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213035_samsung_internet.jpg?origWidth=3872&origHeight=3220&origFormat=jpg
              - img "screenshot_20251204_213035_samsung_internet" [ref=e214]
          - figure [ref=e216]:
            - link "screenshot_20251204_213037_samsung_internet" [ref=e217] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/screenshot_20251204_213037_samsung_internet.jpg?origWidth=3860&origHeight=3216&origFormat=jpg
              - img "screenshot_20251204_213037_samsung_internet" [ref=e218]
          - figure [ref=e220]:
            - link "2025-07-09" [ref=e221] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/2025-07-09.png?origWidth=1500&origHeight=1200&origFormat=png
              - img "2025-07-09" [ref=e222]
          - figure [ref=e224]:
            - link "img-20251204-wa0006" [ref=e225] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/img-20251204-wa0006.jpg?origWidth=1536&origHeight=2048&origFormat=jpg
              - img "img-20251204-wa0006" [ref=e226]
          - figure [ref=e228]:
            - link "img-20251204-wa0008" [ref=e229] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/img-20251204-wa0008.jpg?origWidth=2048&origHeight=1536&origFormat=jpg
              - img "img-20251204-wa0008" [ref=e230]
          - figure [ref=e232]:
            - link "img-20251204-wa0013" [ref=e233] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/img-20251204-wa0013.jpg?origWidth=1536&origHeight=2048&origFormat=jpg
              - img "img-20251204-wa0013" [ref=e234]
          - figure [ref=e236]:
            - link "20251207_123155" [ref=e237] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_123155.jpg?origWidth=3000&origHeight=4000&origFormat=jpg
              - img "20251207_123155" [ref=e238]
          - figure [ref=e240]:
            - link "20251207_124137" [ref=e241] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_124137.jpg?origWidth=3000&origHeight=4000&origFormat=jpg
              - img "20251207_124137" [ref=e242]
          - figure [ref=e244]:
            - link "20251207_125155" [ref=e245] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_125155.jpg?origWidth=3000&origHeight=3321&origFormat=jpg
              - img "20251207_125155" [ref=e246]
          - figure [ref=e248]:
            - link "20251207_161117" [ref=e249] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_161117.jpg?origWidth=3000&origHeight=4000&origFormat=jpg
              - img "20251207_161117" [ref=e250]
          - figure [ref=e252]:
            - link "20251207_130850" [ref=e253] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_130850.jpg?origWidth=1984&origHeight=2626&origFormat=jpg
              - img "20251207_130850" [ref=e254]
          - figure [ref=e256]:
            - link "20251207_124943" [ref=e257] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_124943.jpg?origWidth=1548&origHeight=2256&origFormat=jpg
              - img "20251207_124943" [ref=e258]
          - figure [ref=e260]:
            - link "20251207_124955" [ref=e261] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/20251207_124955.jpg?origWidth=1617&origHeight=2441&origFormat=jpg
              - img "20251207_124955" [ref=e262]
          - figure [ref=e264]:
            - link "images-25" [ref=e265] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/images-25.jpeg?origWidth=2524&origHeight=1920&origFormat=jpg
              - img "images-25" [ref=e266]
          - figure [ref=e268]:
            - link "img-20251204-wa0007" [ref=e269] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/img-20251204-wa0007.jpg?origWidth=1536&origHeight=2048&origFormat=jpg
              - img "img-20251204-wa0007" [ref=e270]
          - figure [ref=e272]:
            - link "img-20251204-wa0005" [ref=e273] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/img-20251204-wa0005.jpg?origWidth=1962&origHeight=1354&origFormat=jpg
              - img "img-20251204-wa0005" [ref=e274]
  - generic [ref=e277]:
    - button "Menu" [ref=e278]:
      - img [ref=e280]
      - generic: Menu
    - button "Inspect" [ref=e284]:
      - img [ref=e286]
      - generic: Inspect
    - button "Audit" [ref=e288]:
      - generic [ref=e289]:
        - img [ref=e290]
        - img [ref=e293]
      - generic: Audit
    - button "Settings" [ref=e296]:
      - img [ref=e298]
      - generic: Settings
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.describe('Partners listing page', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/partners')
  6   |   })
  7   | 
  8   |   test('has correct heading', async ({ page }) => {
  9   |     await expect(page.getByRole('heading', { name: /partners/i }).first()).toBeVisible()
  10  |   })
  11  | 
  12  |   test('renders partner cards', async ({ page }) => {
  13  |     // Cards are anchor elements wrapping partner titles
  14  |     const cards = page.locator('a[href^="/partner/"]')
  15  |     await expect(cards.first()).toBeVisible()
  16  |     const count = await cards.count()
  17  |     expect(count).toBeGreaterThan(0)
  18  |   })
  19  | 
  20  |   test('each card has a visible title', async ({ page }) => {
  21  |     const firstCard = page.locator('a[href^="/partner/"]').first()
  22  |     await expect(firstCard.locator('h4')).toBeVisible()
  23  |   })
  24  | 
  25  |   test('each card has an image', async ({ page }) => {
  26  |     const firstCardImg = page
  27  |       .locator('div.rounded-lg.border')
  28  |       .first()
  29  |       .locator('img')
  30  |     await expect(firstCardImg).toBeVisible()
  31  |   })
  32  | 
  33  |   test('region badge is rendered on cards', async ({ page }) => {
  34  |     // Badges are anchor links styled as purple pills
  35  |     const badge = page.locator('div.rounded-lg.border').first().locator('a[href]').first()
  36  |     await expect(badge).toBeVisible()
  37  |   })
  38  | 
  39  |   test('category badges are in a flex-wrap container', async ({ page }) => {
  40  |     // The wrapping div for CatBadge must have flex and flex-wrap classes
  41  |     const badgeContainer = page.locator('.flex.flex-wrap.gap-1').first()
  42  |     await expect(badgeContainer).toBeVisible()
  43  |   })
  44  | 
  45  |   test('category badge links point to /categories/*', async ({ page }) => {
  46  |     const catBadgeLink = page
  47  |       .locator('.flex.flex-wrap.gap-1 a[href^="/categories/"]')
  48  |       .first()
  49  |     await expect(catBadgeLink).toBeVisible()
  50  |   })
  51  | 
  52  |   test('discount badge appears for partners with a discount', async ({ page }) => {
  53  |     // 11:11 Sweet has 15% discount
  54  |     const discountBadge = page.getByText(/\d+%\s*Discount/i).first()
  55  |     await expect(discountBadge).toBeVisible()
  56  |   })
  57  | 
  58  |   test('"View partner" button is present on each card', async ({ page }) => {
  59  |     const viewBtn = page.getByRole('link', { name: /view partner/i }).first()
  60  |     await expect(viewBtn).toBeVisible()
  61  |   })
  62  | 
  63  |   test('clicking a card navigates to the partner detail page', async ({ page }) => {
  64  |     const firstCardLink = page.locator('a[href^="/partner/"]').first()
  65  |     const href = await firstCardLink.getAttribute('href')
  66  |     await firstCardLink.click()
  67  |     await expect(page).toHaveURL(href!)
  68  |   })
  69  | })
  70  | 
  71  | test.describe('Partner detail page (11:11 Sweet Lane Cove)', () => {
  72  |   const slug = '11_11_sweet_lanecove'
  73  | 
  74  |   test.beforeEach(async ({ page }) => {
  75  |     await page.goto(`/partner/${slug}`)
  76  |   })
  77  | 
  78  |   test('renders the partner title', async ({ page }) => {
  79  |     await expect(page.getByRole('heading', { name: /11:11 Sweet/i }).first()).toBeVisible()
  80  |   })
  81  | 
  82  |   test('renders a region badge', async ({ page }) => {
  83  |     // Region badge links to a region page
  84  |     const regionBadge = page.locator('a[href*="nsw"]')
> 85  |     await expect(regionBadge.first()).toBeVisible()
      |                                       ^ Error: expect(locator).toBeVisible() failed
  86  |   })
  87  | 
  88  |   test('renders category badge(s)', async ({ page }) => {
  89  |     const catBadge = page.locator('a[href^="/categories/"]')
  90  |     await expect(catBadge.first()).toBeVisible()
  91  |   })
  92  | 
  93  |   test('renders the discount badge when applicable', async ({ page }) => {
  94  |     await expect(page.getByText(/15%/i)).toBeVisible()
  95  |   })
  96  | 
  97  |   test('renders the partner description / body content', async ({ page }) => {
  98  |     await expect(page.getByText(/11:11 Sweet/i).first()).toBeVisible()
  99  |   })
  100 | 
  101 |   test('has a breadcrumb showing the partner name', async ({ page }) => {
  102 |     const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], ol[aria-label="Breadcrumb"], [class*="breadcrumb"]')
  103 |     if (await breadcrumb.count() > 0) {
  104 |       await expect(breadcrumb.first()).toBeVisible()
  105 |     }
  106 |   })
  107 | })
  108 | 
```