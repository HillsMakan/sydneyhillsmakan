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
    9 × locator resolved to <a href="/australia/nsw" data-astro-cid-y6oet657="" data-astro-source-loc="255:24" data-astro-source-file="/Volumes/Photos/Websites/sydneyhillsmakan/src/components/sidemenu.astro" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> New South Wales </a>
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
              - generic [ref=f2e6]:
                - generic:
                  - button "Keyboard shortcuts"
                - region "Map" [ref=f2e7]
                - generic [ref=f2e8]:
                  - iframe [ref=f2e39]:
                    
                  - button "Map camera controls" [ref=f2e41] [cursor=pointer]
                  - button "Show satellite imagery" [ref=f2e44] [cursor=pointer]:
                    - generic [ref=f2e48]:
                      - region [ref=f2e49]
                      - iframe [ref=f2e55]:
                        
                  - img "Google" [ref=f2e57]
                  - generic [ref=f2e58]:
                    - button "Keyboard shortcuts" [ref=f2e64] [cursor=pointer]
                    - generic [ref=f2e69]: Map data ©2026 Google
                    - link "Terms (opens in new tab)" [ref=f2e74] [cursor=pointer]:
                      - /url: https://www.google.com/intl/en-US_US/help/terms_maps.html
                      - text: Terms
                    - link "Report a map error" [ref=f2e79] [cursor=pointer]:
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
    - generic [ref=e278]:
      - checkbox "Use dark theme" [ref=e279]
      - generic [ref=e280] [cursor=pointer]:
        - img [ref=e281]
        - img [ref=e285]
        - generic [ref=e289]: Use dark theme
    - banner [ref=e290]:
      - generic [ref=e291]:
        - heading [level=2]
        - heading "An error occurred." [level=1] [ref=e292]
      - img [ref=e295]
    - generic [ref=e299]:
      - img [ref=e301]
      - generic [ref=e303]: Failed to resolve import "lunr" from "src/components/search.astro?astro&type=script&index=0&lang.ts". Does the file exist?
    - generic [ref=e304]:
      - generic [ref=e305]:
        - heading "components/search.astro:109:19" [level=2] [ref=e306]
        - button "Open in editor" [ref=e308]:
          - text: Open in editor
          - img [ref=e309]
      - code [ref=e314]:
        - generic [ref=e315]: "---"
        - generic [ref=e316]: "import { Icon } from 'astro-icon/components'"
        - generic [ref=e317]: "---"
        - generic [ref=e319]: <div id="search-widget">
        - generic [ref=e320]: <div class="flex justify-center">
        - generic [ref=e321]: <div class="w-48">
        - generic [ref=e322]: <div class="relative flex w-full items-stretch">
        - generic [ref=e323]: <input
        - generic [ref=e324]: type="search"
        - generic [ref=e325]: id="lunrsearch"
        - generic [ref=e326]: name="q"
        - generic [ref=e327]: maxlength="255"
        - generic [ref=e328]: value=""
        - generic [ref=e329]: placeholder="Search"
        - generic [ref=e330]: aria-label="Search"
        - generic [ref=e331]: aria-describedby="lunrbutton"
        - generic [ref=e332]: class="block w-full max-w-xs min-w-0 flex-auto rounded-sm border border-blue-300 bg-white px-3 py-1.5 text-base font-normal text-gray-500 transition ease-in-out focus:border-blue-500 focus:text-gray-700 focus:outline-hidden dark:border-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-600 dark:focus:text-gray-100"
        - generic [ref=e333]: />
        - generic [ref=e334]: <button
        - generic [ref=e335]: id="lunrbutton"
        - generic [ref=e336]: type="button"
        - generic [ref=e337]: name="search"
        - generic [ref=e338]: aria-label="Search Button"
        - generic [ref=e339]: class="inline-flex items-center rounded-sm bg-blue-600 p-2 text-xs/tight font-medium text-white uppercase shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring-0 focus:outline-hidden active:bg-blue-800 active:shadow-lg"
        - generic [ref=e340]: ">"
        - generic [ref=e341]: <svg
        - generic [ref=e342]: aria-hidden="true"
        - generic [ref=e343]: focusable="false"
        - generic [ref=e344]: class="size-4"
        - generic [ref=e345]: role="img"
        - generic [ref=e346]: xmlns="http://www.w3.org/2000/svg"
        - generic [ref=e347]: viewBox="0 0 512 512"
        - generic [ref=e348]: ">"
        - generic [ref=e349]: <path
        - generic [ref=e350]: fill="currentColor"
        - generic [ref=e351]: d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        - generic [ref=e352]: "></path>"
        - generic [ref=e353]: </svg>
        - generic [ref=e354]: </button>
        - generic [ref=e355]: </div>
        - generic [ref=e356]: </div>
        - generic [ref=e357]: </div>
        - generic [ref=e359]: <!-- Search results panel -->
        - generic [ref=e360]: <div
        - generic [ref=e361]: id="search-panel"
        - generic [ref=e362]: hidden
        - generic [ref=e363]: class="relative z-50"
        - generic [ref=e364]: aria-labelledby="lunrsearchtitle"
        - generic [ref=e365]: role="dialog"
        - generic [ref=e366]: aria-modal="true"
        - generic [ref=e367]: ">"
        - generic [ref=e368]: <div
        - generic [ref=e369]: id="search-backdrop"
        - generic [ref=e370]: class="fixed inset-0 bg-gray-500/75 opacity-0 transition-opacity duration-500"
        - generic [ref=e371]: ">"
        - generic [ref=e372]: </div>
        - generic [ref=e374]: <div class="fixed inset-0 overflow-hidden">
        - generic [ref=e375]: <div class="absolute inset-0 overflow-hidden">
        - generic [ref=e376]: <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        - generic [ref=e377]: <div
        - generic [ref=e378]: id="search-slideover"
        - generic [ref=e379]: class="pointer-events-auto relative w-screen max-w-md translate-x-full transition-transform duration-500"
        - generic [ref=e380]: ">"
        - generic [ref=e381]: <div
        - generic [ref=e382]: id="search-close-btn-wrap"
        - generic [ref=e383]: class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 opacity-0 transition-opacity duration-500 sm:-ml-10 sm:pr-4"
        - generic [ref=e384]: ">"
        - generic [ref=e385]: <button
        - generic [ref=e386]: id="search-close"
        - generic [ref=e387]: type="button"
        - generic [ref=e388]: class="rounded-md text-blue-300 hover:text-pink-300 focus:ring-2 focus:ring-white focus:outline-hidden"
        - generic [ref=e389]: ">"
        - generic [ref=e390]: <span class="sr-only">Close panel</span>
        - generic [ref=e391]: <Icon class="size-6" name="mdi:close-box" />
        - generic [ref=e392]: </button>
        - generic [ref=e393]: </div>
        - generic [ref=e395]: <div
        - generic [ref=e396]: class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-800"
        - generic [ref=e397]: ">"
        - generic [ref=e398]: <div class="px-4 sm:px-6">
        - generic [ref=e399]: <h2
        - generic [ref=e400]: id="lunrsearchtitle"
        - generic [ref=e401]: class="text-lg font-medium text-gray-900 dark:text-gray-100"
        - generic [ref=e402]: ">"
        - generic [ref=e403]: Search results
        - generic [ref=e404]: </h2>
        - generic [ref=e405]: </div>
        - generic [ref=e406]: <div id="lunrsearchmodal" class="relative mt-6 flex-1 px-4 sm:px-6">
        - generic [ref=e407]: <div
        - generic [ref=e408]: id="lunrsearchresults"
        - generic [ref=e409]: class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
        - generic [ref=e410]: ">"
        - generic [ref=e411]: <ul></ul>
        - generic [ref=e412]: </div>
        - generic [ref=e413]: </div>
        - generic [ref=e414]: </div>
        - generic [ref=e415]: </div>
        - generic [ref=e416]: </div>
        - generic [ref=e417]: </div>
        - generic [ref=e418]: </div>
        - generic [ref=e419]: </div>
        - generic [ref=e420]: </div>
        - generic [ref=e422]: <script>
        - generic [ref=e423]: import lunr from 'lunr'
        - generic [ref=e424]: ^
        - generic [ref=e426]: const BASE_URL = import.meta.env.BASE_URL
        - generic [ref=e428]: "let idx: ReturnType<(typeof lunr.Index)['load']> | undefined"
        - generic [ref=e429]: "let docs: Array<{ url: string; title: string; description: string }> | undefined"
        - generic [ref=e431]: "async function lunrSearch(term: string) {"
        - generic [ref=e432]: "if (!docs) {"
        - generic [ref=e433]: const res = await fetch(BASE_URL + 'search-docs.json')
        - generic [ref=e434]: docs = await res.json()
        - generic [ref=e435]: "}"
        - generic [ref=e436]: "if (!idx) {"
        - generic [ref=e437]: const res = await fetch(BASE_URL + 'search-index.json')
        - generic [ref=e438]: const data = await res.json()
        - generic [ref=e439]: idx = lunr.Index.load(data)
        - generic [ref=e440]: "}"
        - generic [ref=e442]: const resultsEl = document.querySelector('#lunrsearchresults')
        - generic [ref=e443]: const titleEl = document.querySelector('#lunrsearchtitle')
        - generic [ref=e444]: if (!resultsEl) return
        - generic [ref=e446]: resultsEl.innerHTML =
        - generic [ref=e447]: "'<ul class=\"relative grid gap-6 bg-white dark:bg-gray-700 dark:text-gray-100 px-5 py-6 sm:gap-8 sm:p-8\"></ul>'"
        - generic [ref=e449]: if (!term) return
        - generic [ref=e451]: "if (titleEl) titleEl.textContent = `Search results for '${term}'`"
        - generic [ref=e453]: const results = idx!.search(term)
        - generic [ref=e454]: const list = resultsEl.querySelector('ul')!
        - generic [ref=e455]: "if (results.length > 0) {"
        - generic [ref=e456]: "for (const result of results) {"
        - generic [ref=e457]: const doc = docs!.find((d) => d.url === result.ref)
        - generic [ref=e458]: if (!doc) continue
        - generic [ref=e459]: const li = document.createElement('li')
        - generic [ref=e460]: li.className =
        - generic [ref=e461]: "'-m-3 p-3 flex items-start rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900'"
        - generic [ref=e462]: "li.innerHTML = `<a href=\"${doc.url}\"><p class=\"text-base font-medium text-gray-900 dark:text-gray-100\">${doc.title}</p><p class=\"mt-1 text-sm text-gray-500 dark:text-gray-400\">${doc.description}</p></a>`"
        - generic [ref=e463]: list.append(li)
        - generic [ref=e464]: "}"
        - generic [ref=e465]: "} else {"
        - generic [ref=e466]: list.textContent = 'No results found...'
        - generic [ref=e467]: "}"
        - generic [ref=e468]: "}"
        - generic [ref=e470]: "function openPanel() {"
        - generic [ref=e471]: const panel = document.querySelector<HTMLElement>('#search-panel')
        - generic [ref=e472]: const backdrop = document.querySelector('#search-backdrop')
        - generic [ref=e473]: const slideover = document.querySelector('#search-slideover')
        - generic [ref=e474]: const closeBtnWrap = document.querySelector('#search-close-btn-wrap')
        - generic [ref=e475]: if (!panel) return
        - generic [ref=e476]: panel.hidden = false
        - generic [ref=e477]: // Trigger transitions on next frame
        - generic [ref=e478]: "requestAnimationFrame(() => {"
        - generic [ref=e479]: backdrop?.classList.replace('opacity-0', 'opacity-100')
        - generic [ref=e480]: slideover?.classList.replace('translate-x-full', 'translate-x-0')
        - generic [ref=e481]: closeBtnWrap?.classList.replace('opacity-0', 'opacity-100')
        - generic [ref=e482]: "})"
        - generic [ref=e483]: "}"
        - generic [ref=e485]: "function closePanel() {"
        - generic [ref=e486]: const panel = document.querySelector<HTMLElement>('#search-panel')
        - generic [ref=e487]: const backdrop = document.querySelector('#search-backdrop')
        - generic [ref=e488]: const slideover = document.querySelector('#search-slideover')
        - generic [ref=e489]: const closeBtnWrap = document.querySelector('#search-close-btn-wrap')
        - generic [ref=e490]: if (!panel) return
        - generic [ref=e491]: backdrop?.classList.replace('opacity-100', 'opacity-0')
        - generic [ref=e492]: slideover?.classList.replace('translate-x-0', 'translate-x-full')
        - generic [ref=e493]: closeBtnWrap?.classList.replace('opacity-100', 'opacity-0')
        - generic [ref=e494]: // Hide after transition ends
        - generic [ref=e495]: slideover?.addEventListener(
        - generic [ref=e496]: "'transitionend',"
        - generic [ref=e497]: "() => {"
        - generic [ref=e498]: panel.hidden = true
        - generic [ref=e499]: "},"
        - generic [ref=e500]: "{ once: true }"
        - generic [ref=e501]: )
        - generic [ref=e502]: "}"
        - generic [ref=e504]: "document.querySelector('#lunrbutton')?.addEventListener('click', async () => {"
        - generic [ref=e505]: const searchText = (document.querySelector('#lunrsearch') as HTMLInputElement)?.value || ''
        - generic [ref=e506]: await lunrSearch(searchText)
        - generic [ref=e507]: openPanel()
        - generic [ref=e508]: "})"
        - generic [ref=e510]: document.querySelector('#search-close')?.addEventListener('click', closePanel)
        - generic [ref=e512]: "document.querySelector('#lunrsearch')?.addEventListener('keypress', (e) => {"
        - generic [ref=e513]: "if ((e as KeyboardEvent).key === 'Enter') {"
        - generic [ref=e514]: e.preventDefault()
        - generic [ref=e515]: document.querySelector<HTMLElement>('#lunrbutton')?.click()
        - generic [ref=e516]: "}"
        - generic [ref=e517]: "})"
        - generic [ref=e518]: </script>
    - generic [ref=e520]:
      - generic [ref=e521]:
        - heading "Stack Trace" [level=2] [ref=e522]
        - img [ref=e524] [cursor=pointer]
      - generic [ref=e528]: at TransformPluginContext._formatLog (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:29003:43) at TransformPluginContext.error (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:29000:14) at normalizeUrl (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27123:18) at process.processTicksAndRejections (node:internal/process/task_queues:104:5) at async file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27181:32 at async Promise.all (index 0) at async TransformPluginContext.transform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27149:4) at async EnvironmentPluginContainer.transform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:28801:14) at async loadAndTransform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:22670:26) at async viteTransformMiddleware (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:24546:20)
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