# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search widget >> pressing Enter in the search input opens the results panel
- Location: tests/e2e/search.spec.ts:26:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#search-panel')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#search-panel')
    2 × locator resolved to <div hidden="" role="dialog" id="search-panel" aria-modal="true" class="relative z-50" data-astro-source-loc="53:4" aria-labelledby="lunrsearchtitle" data-astro-source-file="/Volumes/Photos/Websites/sydneyhillsmakan/src/components/search.astro">…</div>
      - unexpected value "hidden"
    3 × locator resolved to <div hidden="" role="dialog" id="search-panel" aria-modal="true" class="relative z-50" aria-labelledby="lunrsearchtitle">…</div>
      - unexpected value "hidden"
    3 × locator resolved to <div role="dialog" id="search-panel" aria-modal="true" class="relative z-50" aria-labelledby="lunrsearchtitle">…</div>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - link "HMG International" [ref=e6] [cursor=pointer]:
            - /url: /
            - generic [ref=e7]: HMG International
          - generic [ref=e8]:
            - generic [ref=e11]:
              - searchbox "Search" [active] [ref=e12]: sweet
              - button "Search Button" [ref=e13]:
                - img [ref=e14]
            - dialog "Search results for 'sweet'":
              - generic [ref=e19]:
                - button "Close panel" [ref=e21]:
                  - generic [ref=e22]: Close panel
                  - img [ref=e23]
                - generic [ref=e25]:
                  - heading "Search results for 'sweet'" [level=2] [ref=e27]
                  - list [ref=e30]:
                    - listitem [ref=e31]:
                      - link "11:11 Sweet Lanecove Dessert Shop" [ref=e32] [cursor=pointer]:
                        - /url: /partner/11_11_sweet_lanecove
                        - paragraph [ref=e33]: 11:11 Sweet Lanecove
                        - paragraph [ref=e34]: Dessert Shop
                    - listitem [ref=e35]:
                      - link "11:11 Sweet Wahroonga Dessert Shop" [ref=e36] [cursor=pointer]:
                        - /url: /partner/11_11_sweet_wahroonga
                        - paragraph [ref=e37]: 11:11 Sweet Wahroonga
                        - paragraph [ref=e38]: Dessert Shop
                    - listitem [ref=e39]:
                      - link "Ranju's Square Malaysian Indian Cuisine & Catering. Halal" [ref=e40] [cursor=pointer]:
                        - /url: /partner/ranjus_square
                        - paragraph [ref=e41]: Ranju's Square
                        - paragraph [ref=e42]: Malaysian Indian Cuisine & Catering. Halal
                    - listitem [ref=e43]:
                      - link "Urban Durian Dessert Restaurant - Halal" [ref=e44] [cursor=pointer]:
                        - /url: /partner/urban-durian
                        - paragraph [ref=e45]: Urban Durian
                        - paragraph [ref=e46]: Dessert Restaurant - Halal
        - generic [ref=e47]:
          - button [ref=e48]:
            - img [ref=e49]
          - button "Open user menu logo" [ref=e51]:
            - generic [ref=e52]: Open user menu
            - img "logo" [ref=e53]
    - complementary "Sidenav" [ref=e54]:
      - generic [ref=e55]:
        - list [ref=e56]:
          - listitem [ref=e57]:
            - link "Home" [ref=e58] [cursor=pointer]:
              - /url: /
              - img [ref=e59]
              - generic [ref=e61]: Home
          - listitem [ref=e62]:
            - button "Australia" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e66]: Australia
              - img [ref=e67]
          - listitem [ref=e69]:
            - button "Indonesia" [ref=e70]:
              - img [ref=e71]
              - generic [ref=e73]: Indonesia
              - img [ref=e74]
          - listitem [ref=e76]:
            - link "International" [ref=e77] [cursor=pointer]:
              - /url: /international
              - img [ref=e78]
              - generic [ref=e80]: International
          - listitem [ref=e81]:
            - button "Japan" [ref=e82]:
              - img [ref=e83]
              - generic [ref=e85]: Japan
              - img [ref=e86]
          - listitem [ref=e88]:
            - button "Malaysia" [ref=e89]:
              - img [ref=e90]
              - generic [ref=e92]: Malaysia
              - img [ref=e93]
          - listitem [ref=e95]:
            - link "New Zealand" [ref=e96] [cursor=pointer]:
              - /url: /new_zealand
              - img [ref=e97]
              - generic [ref=e99]: New Zealand
          - listitem [ref=e100]:
            - link "Singapore" [ref=e101] [cursor=pointer]:
              - /url: /singapore
              - img [ref=e102]
              - generic [ref=e104]: Singapore
          - listitem [ref=e105]:
            - link "United Kingdom" [ref=e106] [cursor=pointer]:
              - /url: /united_kingdom
              - img [ref=e107]
              - generic [ref=e109]: United Kingdom
        - list [ref=e110]:
          - listitem [ref=e111]:
            - button "Collaborations" [ref=e112]:
              - img [ref=e113]
              - generic [ref=e115]: Collaborations
              - img [ref=e116]
          - listitem [ref=e118]:
            - link "About Us" [ref=e119] [cursor=pointer]:
              - /url: /about
              - img [ref=e120]
              - generic [ref=e122]: About Us
          - listitem [ref=e123]:
            - link "Membership" [ref=e124] [cursor=pointer]:
              - /url: /membership
              - img [ref=e125]
              - generic [ref=e127]: Membership
          - listitem [ref=e128]:
            - link "Partnership" [ref=e129] [cursor=pointer]:
              - /url: /partnership
              - img [ref=e130]
              - generic [ref=e132]: Partnership
          - listitem [ref=e133]:
            - link "Privacy" [ref=e134] [cursor=pointer]:
              - /url: /privacy
              - img [ref=e135]
              - generic [ref=e137]: Privacy
          - listitem [ref=e138]:
            - link "Contact Us" [ref=e139] [cursor=pointer]:
              - /url: /contact
              - img [ref=e140]
              - generic [ref=e142]: Contact Us
          - listitem [ref=e143]:
            - link "Join" [ref=e144] [cursor=pointer]:
              - /url: https://linktr.ee/hillsmakangroup
              - img [ref=e145]
              - generic [ref=e147]: Join
      - generic [ref=e149]:
        - text: © 2026
        - link "HMG International" [ref=e150] [cursor=pointer]:
          - /url: /
    - main [ref=e151]:
      - navigation "Breadcrumb" [ref=e152]:
        - list [ref=e153]:
          - listitem [ref=e154]:
            - link "Home" [ref=e155] [cursor=pointer]:
              - /url: /
              - img [ref=e156]
              - text: Home
      - generic [ref=e159]:
        - generic [ref=e160]:
          - heading "🍜 Welcome to HMG International – Where Flavor Meets Community! 🌏" [level=1] [ref=e161]
          - paragraph [ref=e162]: Step into a world of flavors with HMG (Hills Makan Group) International – a dynamic platform where food, business, and community come together. More than just a culinary experience, we foster connections across industries, uniting businesses and food lovers to support, collaborate, and grow. Join us in building a global network of flavors, friendships, and endless opportunities!
          - paragraph [ref=e163]: "Note: Site last updated 2/5/26, 2:58 pm. We currently have 218 partners."
          - link "Join" [ref=e164] [cursor=pointer]:
            - /url: https://linktr.ee/hillsmakangroup
            - text: Join
            - img [ref=e165]
          - link "About Us" [ref=e167] [cursor=pointer]:
            - /url: /about
        - img "hero" [ref=e169]
      - generic [ref=e171]:
        - generic [ref=e172]:
          - img [ref=e173]
          - heading "Australia" [level=2] [ref=e175]
        - generic [ref=e176]:
          - link "Australia National" [ref=e177] [cursor=pointer]:
            - /url: /australia
            - img "Australia" [ref=e179]
            - generic [ref=e181]: National
          - link "Australian Capital Territory Australian Capital Territory" [ref=e182] [cursor=pointer]:
            - /url: /australia/act
            - img "Australian Capital Territory" [ref=e184]
            - generic [ref=e186]: Australian Capital Territory
          - link "New South Wales New South Wales" [ref=e187] [cursor=pointer]:
            - /url: /australia/nsw
            - img "New South Wales" [ref=e189]
            - generic [ref=e191]: New South Wales
          - link "Queensland Queensland" [ref=e192] [cursor=pointer]:
            - /url: /australia/queensland
            - img "Queensland" [ref=e194]
            - generic [ref=e196]: Queensland
          - link "South Australia South Australia" [ref=e197] [cursor=pointer]:
            - /url: /australia/sa
            - img "South Australia" [ref=e199]
            - generic [ref=e201]: South Australia
          - link "Victoria Victoria" [ref=e202] [cursor=pointer]:
            - /url: /australia/victoria
            - img "Victoria" [ref=e204]
            - generic [ref=e206]: Victoria
          - link "Western Australia Western Australia" [ref=e207] [cursor=pointer]:
            - /url: /australia/wa
            - img "Western Australia" [ref=e209]
            - generic [ref=e211]: Western Australia
      - generic [ref=e213]:
        - generic [ref=e214]:
          - img [ref=e215]
          - heading "Indonesia" [level=2] [ref=e217]
        - generic [ref=e218]:
          - link "Indonesia National" [ref=e219] [cursor=pointer]:
            - /url: /indonesia
            - img "Indonesia" [ref=e221]
            - generic [ref=e223]: National
          - link "Bali Bali" [ref=e224] [cursor=pointer]:
            - /url: /indonesia/bali
            - img "Bali" [ref=e226]
            - generic [ref=e228]: Bali
      - generic [ref=e230]:
        - generic [ref=e231]:
          - img [ref=e232]
          - heading "International" [level=2] [ref=e234]
        - link "International International" [ref=e236] [cursor=pointer]:
          - /url: /international
          - img "International" [ref=e238]
          - generic [ref=e240]: International
      - generic [ref=e242]:
        - generic [ref=e243]:
          - img [ref=e244]
          - heading "Japan" [level=2] [ref=e246]
        - generic [ref=e247]:
          - link "Japan National" [ref=e248] [cursor=pointer]:
            - /url: /japan
            - img "Japan" [ref=e250]
            - generic [ref=e252]: National
          - link "Kyoto Kyoto" [ref=e253] [cursor=pointer]:
            - /url: /japan/kyoto
            - img "Kyoto" [ref=e255]
            - generic [ref=e257]: Kyoto
      - generic [ref=e259]:
        - generic [ref=e260]:
          - img [ref=e261]
          - heading "Malaysia" [level=2] [ref=e263]
        - generic [ref=e264]:
          - link "Malaysia National" [ref=e265] [cursor=pointer]:
            - /url: /malaysia
            - img "Malaysia" [ref=e267]
            - generic [ref=e269]: National
          - link "Johor Johor" [ref=e270] [cursor=pointer]:
            - /url: /malaysia/johor
            - img "Johor" [ref=e272]
            - generic [ref=e274]: Johor
          - link "Kuala Lumpur Kuala Lumpur" [ref=e275] [cursor=pointer]:
            - /url: /malaysia/kl
            - img "Kuala Lumpur" [ref=e277]
            - generic [ref=e279]: Kuala Lumpur
          - link "Malacca Malacca" [ref=e280] [cursor=pointer]:
            - /url: /malaysia/melaka
            - img "Malacca" [ref=e282]
            - generic [ref=e284]: Malacca
          - link "Penang Penang" [ref=e285] [cursor=pointer]:
            - /url: /malaysia/penang
            - img "Penang" [ref=e287]
            - generic [ref=e289]: Penang
          - link "Selangor Selangor" [ref=e290] [cursor=pointer]:
            - /url: /malaysia/selangor
            - img "Selangor" [ref=e292]
            - generic [ref=e294]: Selangor
      - generic [ref=e296]:
        - generic [ref=e297]:
          - img [ref=e298]
          - heading "New Zealand" [level=2] [ref=e300]
        - link "New Zealand New Zealand" [ref=e302] [cursor=pointer]:
          - /url: /new_zealand
          - img "New Zealand" [ref=e304]
          - generic [ref=e306]: New Zealand
      - generic [ref=e308]:
        - generic [ref=e309]:
          - img [ref=e310]
          - heading "Singapore" [level=2] [ref=e312]
        - link "Singapore Singapore" [ref=e314] [cursor=pointer]:
          - /url: /singapore
          - img "Singapore" [ref=e316]
          - generic [ref=e318]: Singapore
      - generic [ref=e320]:
        - generic [ref=e321]:
          - img [ref=e322]
          - heading "United Kingdom" [level=2] [ref=e324]
        - link "United Kingdom United Kingdom" [ref=e326] [cursor=pointer]:
          - /url: /united_kingdom
          - img "United Kingdom" [ref=e328]
          - generic [ref=e330]: United Kingdom
      - generic [ref=e332]:
        - generic [ref=e333]:
          - heading "Explore our Partners" [level=2] [ref=e334]
          - paragraph [ref=e335]: View Partners in various locations and categories
        - generic [ref=e336]:
          - link "Partners by Country Partners by Country" [ref=e337] [cursor=pointer]:
            - /url: /countries
            - img "Partners by Country" [ref=e339]
            - heading "Partners by Country" [level=3] [ref=e340]
          - link "Partners by Category Partners by Category" [ref=e341] [cursor=pointer]:
            - /url: /categories
            - img "Partners by Category" [ref=e343]
            - heading "Partners by Category" [level=3] [ref=e344]
          - link "Partners by Cuisine Partners by Cuisine" [ref=e345] [cursor=pointer]:
            - /url: /cuisines
            - img "Partners by Cuisine" [ref=e347]
            - heading "Partners by Cuisine" [level=3] [ref=e348]
          - link "Collaborations Collaborations" [ref=e349] [cursor=pointer]:
            - /url: /collaborations
            - img "Collaborations" [ref=e351]
            - heading "Collaborations" [level=3] [ref=e352]
      - generic [ref=e353]:
        - heading "Join Our Facebook Groups for Exclusive Benefits!" [level=2] [ref=e354]
        - generic [ref=e355]:
          - generic [ref=e356]:
            - paragraph [ref=e357]: If you are already a member, you can download our member card by clicking the image below.
            - link "Member Card" [ref=e358] [cursor=pointer]:
              - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/HMGmembercard01(INTERNATIONAL).jpg?origWidth=1300&origHeight=787&origFormat=jpg
              - img "Member Card" [ref=e359]
          - generic [ref=e360]:
            - generic [ref=e361]:
              - paragraph [ref=e362]: We’re excited to build a thriving community where members can enjoy exclusive benefits and connect with like-minded individuals. By joining our Facebook groups, you help us grow and enhance our offerings.
              - heading "Why Join?" [level=3] [ref=e363]
              - list [ref=e364]:
                - listitem [ref=e365]: Collaborations:Higher member numbers allow us to partner with more businesses for exclusive deals and perks.
                - listitem [ref=e366]: Community:Connect with others who share your interests and passions.
                - listitem [ref=e367]: Benefits:Gain access to special offers, events, and insider tips.
              - paragraph [ref=e368]: Your participation is crucial in helping us provide the best possible experience. Together, we can create a vibrant, supportive network.
              - paragraph [ref=e369]: Thank you for being a part of our community!
            - link "Join" [ref=e370] [cursor=pointer]:
              - /url: https://linktr.ee/hillsmakangroup
              - text: Join
              - img [ref=e371]
  - generic [ref=e375]:
    - button "Menu" [ref=e376]:
      - img [ref=e378]
      - generic: Menu
    - button "Inspect" [ref=e382]:
      - img [ref=e384]
      - generic: Inspect
    - button "Audit" [ref=e386]:
      - generic [ref=e387]:
        - img [ref=e388]
        - img [ref=e391]
      - generic: Audit
    - button "Settings" [ref=e394]:
      - img [ref=e396]
      - generic: Settings
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Search widget', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/')
  6  |   })
  7  | 
  8  |   test('search input is visible in the top nav', async ({ page }) => {
  9  |     await expect(page.locator('#lunrsearch')).toBeVisible()
  10 |   })
  11 | 
  12 |   test('search button is visible', async ({ page }) => {
  13 |     await expect(page.locator('#lunrbutton')).toBeVisible()
  14 |   })
  15 | 
  16 |   test('search panel is hidden by default', async ({ page }) => {
  17 |     await expect(page.locator('#search-panel')).toBeHidden()
  18 |   })
  19 | 
  20 |   test('clicking search button opens the results panel', async ({ page }) => {
  21 |     await page.locator('#lunrsearch').fill('sweet')
  22 |     await page.locator('#lunrbutton').click()
  23 |     await expect(page.locator('#search-panel')).toBeVisible()
  24 |   })
  25 | 
  26 |   test('pressing Enter in the search input opens the results panel', async ({ page }) => {
  27 |     await page.locator('#lunrsearch').fill('sweet')
  28 |     await page.locator('#lunrsearch').press('Enter')
> 29 |     await expect(page.locator('#search-panel')).toBeVisible()
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  30 |   })
  31 | 
  32 |   test('search results panel shows a heading', async ({ page }) => {
  33 |     await page.locator('#lunrsearch').fill('sweet')
  34 |     await page.locator('#lunrbutton').click()
  35 |     await expect(page.locator('#lunrsearchtitle')).toContainText(/search results/i)
  36 |   })
  37 | 
  38 |   test('search for a known partner returns a result', async ({ page }) => {
  39 |     await page.locator('#lunrsearch').fill('sweet')
  40 |     await page.locator('#lunrbutton').click()
  41 |     // Wait for results to load (fetches JSON)
  42 |     await page.waitForSelector('#lunrsearchresults a', { timeout: 10_000 })
  43 |     const results = page.locator('#lunrsearchresults a')
  44 |     const count = await results.count()
  45 |     expect(count).toBeGreaterThan(0)
  46 |   })
  47 | 
  48 |   test('search for a nonexistent term shows no-results message', async ({ page }) => {
  49 |     await page.locator('#lunrsearch').fill('zzznoresultsexpectedzzz')
  50 |     await page.locator('#lunrbutton').click()
  51 |     await expect(page.locator('#lunrsearchresults ul')).toBeVisible({ timeout: 10_000 })
  52 |     await expect(page.locator('#lunrsearchresults')).toContainText(/no results/i)
  53 |   })
  54 | 
  55 |   test('close button hides the results panel', async ({ page }) => {
  56 |     await page.locator('#lunrsearch').fill('sweet')
  57 |     await page.locator('#lunrbutton').click()
  58 |     await expect(page.locator('#search-panel')).toBeVisible()
  59 | 
  60 |     await page.locator('#search-close').click()
  61 |     // Panel hides after the CSS transition (500ms)
  62 |     await expect(page.locator('#search-panel')).toBeHidden({ timeout: 2000 })
  63 |   })
  64 | 
  65 |   test('search results panel title updates with query term', async ({ page }) => {
  66 |     const term = 'dessert'
  67 |     await page.locator('#lunrsearch').fill(term)
  68 |     await page.locator('#lunrbutton').click()
  69 |     await expect(page.locator('#lunrsearchtitle')).toContainText(term, { timeout: 10_000 })
  70 |   })
  71 | })
  72 | 
```