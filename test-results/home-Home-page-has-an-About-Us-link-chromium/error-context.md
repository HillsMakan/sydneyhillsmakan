# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Home page >> has an "About Us" link
- Location: tests/e2e/home.spec.ts:31:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'About Us' })
Expected: visible
Error: strict mode violation: getByRole('link', { name: 'About Us' }) resolved to 2 elements:
    1) <a href="/about" data-astro-cid-y6oet657="" data-astro-source-loc="322:14" data-astro-source-file="/Volumes/Photos/Websites/sydneyhillsmakan/src/components/sidemenu.astro" class="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">…</a> aka getByLabel('Sidenav').getByRole('link', { name: 'About Us' })
    2) <a href="/about" data-astro-source-loc="55:8" data-astro-source-file="/Volumes/Photos/Websites/sydneyhillsmakan/src/components/hero.astro" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">↵About Us↵</a> aka getByRole('main').getByRole('link', { name: 'About Us' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'About Us' })

```

# Page snapshot

```yaml
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
    - generic [ref=e128]:
      - generic [ref=e129]:
        - heading "🍜 Welcome to HMG International – Where Flavor Meets Community! 🌏" [level=1] [ref=e130]
        - paragraph [ref=e131]: Step into a world of flavors with HMG (Hills Makan Group) International – a dynamic platform where food, business, and community come together. More than just a culinary experience, we foster connections across industries, uniting businesses and food lovers to support, collaborate, and grow. Join us in building a global network of flavors, friendships, and endless opportunities!
        - paragraph [ref=e132]: "Note: Site last updated 3/5/26, 12:24 pm. We currently have 218 partners."
        - link "Join" [ref=e133] [cursor=pointer]:
          - /url: https://linktr.ee/hillsmakangroup
          - text: Join
          - img [ref=e134]
        - link "About Us" [ref=e136] [cursor=pointer]:
          - /url: /about
      - img "hero" [ref=e138]
    - generic [ref=e140]:
      - generic [ref=e141]:
        - img [ref=e142]
        - heading "Australia" [level=2] [ref=e144]
      - generic [ref=e145]:
        - link "Australia National" [ref=e146] [cursor=pointer]:
          - /url: /australia
          - img "Australia" [ref=e148]
          - generic [ref=e150]: National
        - link "Australian Capital Territory Australian Capital Territory" [ref=e151] [cursor=pointer]:
          - /url: /australia/act
          - img "Australian Capital Territory" [ref=e153]
          - generic [ref=e155]: Australian Capital Territory
        - link "New South Wales New South Wales" [ref=e156] [cursor=pointer]:
          - /url: /australia/nsw
          - img "New South Wales" [ref=e158]
          - generic [ref=e160]: New South Wales
        - link "Queensland Queensland" [ref=e161] [cursor=pointer]:
          - /url: /australia/queensland
          - img "Queensland" [ref=e163]
          - generic [ref=e165]: Queensland
        - link "South Australia South Australia" [ref=e166] [cursor=pointer]:
          - /url: /australia/sa
          - img "South Australia" [ref=e168]
          - generic [ref=e170]: South Australia
        - link "Victoria Victoria" [ref=e171] [cursor=pointer]:
          - /url: /australia/victoria
          - img "Victoria" [ref=e173]
          - generic [ref=e175]: Victoria
        - link "Western Australia Western Australia" [ref=e176] [cursor=pointer]:
          - /url: /australia/wa
          - img "Western Australia" [ref=e178]
          - generic [ref=e180]: Western Australia
    - generic [ref=e182]:
      - generic [ref=e183]:
        - img [ref=e184]
        - heading "Indonesia" [level=2] [ref=e186]
      - generic [ref=e187]:
        - link "Indonesia National" [ref=e188] [cursor=pointer]:
          - /url: /indonesia
          - img "Indonesia" [ref=e190]
          - generic [ref=e192]: National
        - link "Bali Bali" [ref=e193] [cursor=pointer]:
          - /url: /indonesia/bali
          - img "Bali" [ref=e195]
          - generic [ref=e197]: Bali
    - generic [ref=e199]:
      - generic [ref=e200]:
        - img [ref=e201]
        - heading "International" [level=2] [ref=e203]
      - link "International International" [ref=e205] [cursor=pointer]:
        - /url: /international
        - img "International" [ref=e207]
        - generic [ref=e209]: International
    - generic [ref=e211]:
      - generic [ref=e212]:
        - img [ref=e213]
        - heading "Japan" [level=2] [ref=e215]
      - generic [ref=e216]:
        - link "Japan National" [ref=e217] [cursor=pointer]:
          - /url: /japan
          - img "Japan" [ref=e219]
          - generic [ref=e221]: National
        - link "Kyoto Kyoto" [ref=e222] [cursor=pointer]:
          - /url: /japan/kyoto
          - img "Kyoto" [ref=e224]
          - generic [ref=e226]: Kyoto
    - generic [ref=e228]:
      - generic [ref=e229]:
        - img [ref=e230]
        - heading "Malaysia" [level=2] [ref=e232]
      - generic [ref=e233]:
        - link "Malaysia National" [ref=e234] [cursor=pointer]:
          - /url: /malaysia
          - img "Malaysia" [ref=e236]
          - generic [ref=e238]: National
        - link "Johor Johor" [ref=e239] [cursor=pointer]:
          - /url: /malaysia/johor
          - img "Johor" [ref=e241]
          - generic [ref=e243]: Johor
        - link "Kuala Lumpur Kuala Lumpur" [ref=e244] [cursor=pointer]:
          - /url: /malaysia/kl
          - img "Kuala Lumpur" [ref=e246]
          - generic [ref=e248]: Kuala Lumpur
        - link "Malacca Malacca" [ref=e249] [cursor=pointer]:
          - /url: /malaysia/melaka
          - img "Malacca" [ref=e251]
          - generic [ref=e253]: Malacca
        - link "Penang Penang" [ref=e254] [cursor=pointer]:
          - /url: /malaysia/penang
          - img "Penang" [ref=e256]
          - generic [ref=e258]: Penang
        - link "Selangor Selangor" [ref=e259] [cursor=pointer]:
          - /url: /malaysia/selangor
          - img "Selangor" [ref=e261]
          - generic [ref=e263]: Selangor
    - generic [ref=e265]:
      - generic [ref=e266]:
        - img [ref=e267]
        - heading "New Zealand" [level=2] [ref=e269]
      - link "New Zealand New Zealand" [ref=e271] [cursor=pointer]:
        - /url: /new_zealand
        - img "New Zealand" [ref=e273]
        - generic [ref=e275]: New Zealand
    - generic [ref=e277]:
      - generic [ref=e278]:
        - img [ref=e279]
        - heading "Singapore" [level=2] [ref=e281]
      - link "Singapore Singapore" [ref=e283] [cursor=pointer]:
        - /url: /singapore
        - img "Singapore" [ref=e285]
        - generic [ref=e287]: Singapore
    - generic [ref=e289]:
      - generic [ref=e290]:
        - img [ref=e291]
        - heading "United Kingdom" [level=2] [ref=e293]
      - link "United Kingdom United Kingdom" [ref=e295] [cursor=pointer]:
        - /url: /united_kingdom
        - img "United Kingdom" [ref=e297]
        - generic [ref=e299]: United Kingdom
    - generic [ref=e301]:
      - generic [ref=e302]:
        - heading "Explore our Partners" [level=2] [ref=e303]
        - paragraph [ref=e304]: View Partners in various locations and categories
      - generic [ref=e305]:
        - link "Partners by Country Partners by Country" [ref=e306] [cursor=pointer]:
          - /url: /countries
          - img "Partners by Country" [ref=e308]
          - heading "Partners by Country" [level=3] [ref=e309]
        - link "Partners by Category Partners by Category" [ref=e310] [cursor=pointer]:
          - /url: /categories
          - img "Partners by Category" [ref=e312]
          - heading "Partners by Category" [level=3] [ref=e313]
        - link "Partners by Cuisine Partners by Cuisine" [ref=e314] [cursor=pointer]:
          - /url: /cuisines
          - img "Partners by Cuisine" [ref=e316]
          - heading "Partners by Cuisine" [level=3] [ref=e317]
        - link "Collaborations Collaborations" [ref=e318] [cursor=pointer]:
          - /url: /collaborations
          - img "Collaborations" [ref=e320]
          - heading "Collaborations" [level=3] [ref=e321]
    - generic [ref=e322]:
      - heading "Join Our Facebook Groups for Exclusive Benefits!" [level=2] [ref=e323]
      - generic [ref=e324]:
        - generic [ref=e325]:
          - paragraph [ref=e326]: If you are already a member, you can download our member card by clicking the image below.
          - link "Member Card" [ref=e327] [cursor=pointer]:
            - /url: /@fs/Volumes/Photos/Websites/sydneyhillsmakan/src/assets/images/HMGmembercard01(INTERNATIONAL).jpg?origWidth=1300&origHeight=787&origFormat=jpg
            - img "Member Card" [ref=e328]
        - generic [ref=e329]:
          - generic [ref=e330]:
            - paragraph [ref=e331]: We’re excited to build a thriving community where members can enjoy exclusive benefits and connect with like-minded individuals. By joining our Facebook groups, you help us grow and enhance our offerings.
            - heading "Why Join?" [level=3] [ref=e332]
            - list [ref=e333]:
              - listitem [ref=e334]: Collaborations:Higher member numbers allow us to partner with more businesses for exclusive deals and perks.
              - listitem [ref=e335]: Community:Connect with others who share your interests and passions.
              - listitem [ref=e336]: Benefits:Gain access to special offers, events, and insider tips.
            - paragraph [ref=e337]: Your participation is crucial in helping us provide the best possible experience. Together, we can create a vibrant, supportive network.
            - paragraph [ref=e338]: Thank you for being a part of our community!
          - link "Join" [ref=e339] [cursor=pointer]:
            - /url: https://linktr.ee/hillsmakangroup
            - text: Join
            - img [ref=e340]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Home page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/')
  6  |   })
  7  | 
  8  |   test('has correct page title', async ({ page }) => {
  9  |     await expect(page).toHaveTitle(/Hills Makan Group/i)
  10 |   })
  11 | 
  12 |   test('renders the hero heading', async ({ page }) => {
  13 |     await expect(page.getByRole('heading', { level: 1 })).toContainText('HMG International')
  14 |   })
  15 | 
  16 |   test('displays a site description paragraph', async ({ page }) => {
  17 |     await expect(page.getByText(/food, business, and community/i)).toBeVisible()
  18 |   })
  19 | 
  20 |   test('shows the partner count in the hero', async ({ page }) => {
  21 |     await expect(page.getByText(/we currently have \d+ partners/i)).toBeVisible()
  22 |   })
  23 | 
  24 |   test('has a "Join" CTA link pointing to linktr.ee', async ({ page }) => {
  25 |     const joinLink = page.getByRole('link', { name: 'Join' }).first()
  26 |     await expect(joinLink).toBeVisible()
  27 |     const href = await joinLink.getAttribute('href')
  28 |     expect(href).toMatch(/linktr\.ee/)
  29 |   })
  30 | 
  31 |   test('has an "About Us" link', async ({ page }) => {
> 32 |     await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible()
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  33 |   })
  34 | 
  35 |   test('renders the regions section', async ({ page }) => {
  36 |     // Regions component renders country/region cards
  37 |     await expect(page.locator('section, [class*="region"]').first()).toBeVisible()
  38 |   })
  39 | })
  40 | 
```