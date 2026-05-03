# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search widget >> clicking search button opens the results panel
- Location: tests/e2e/search.spec.ts:20:7

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
    8 × locator resolved to <div hidden="" role="dialog" id="search-panel" aria-modal="true" class="relative z-50" data-astro-source-loc="53:4" aria-labelledby="lunrsearchtitle" data-astro-source-file="/Volumes/Photos/Websites/sydneyhillsmakan/src/components/search.astro">…</div>
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
          - generic [ref=e11]:
            - searchbox "Search" [ref=e12]: sweet
            - button "Search Button" [active] [ref=e13]:
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
  - generic [ref=e344]:
    - generic [ref=e345]:
      - checkbox "Use dark theme" [ref=e346]
      - generic [ref=e347] [cursor=pointer]:
        - img [ref=e348]
        - img [ref=e352]
        - generic [ref=e356]: Use dark theme
    - banner [ref=e357]:
      - generic [ref=e358]:
        - heading [level=2]
        - heading "An error occurred." [level=1] [ref=e359]
      - img [ref=e362]
    - generic [ref=e366]:
      - img [ref=e368]
      - generic [ref=e370]: Failed to resolve import "lunr" from "src/components/search.astro?astro&type=script&index=0&lang.ts". Does the file exist?
    - generic [ref=e371]:
      - generic [ref=e372]:
        - heading "components/search.astro:109:19" [level=2] [ref=e373]
        - button "Open in editor" [ref=e375]:
          - text: Open in editor
          - img [ref=e376]
      - code [ref=e381]:
        - generic [ref=e382]: "---"
        - generic [ref=e383]: "import { Icon } from 'astro-icon/components'"
        - generic [ref=e384]: "---"
        - generic [ref=e386]: <div id="search-widget">
        - generic [ref=e387]: <div class="flex justify-center">
        - generic [ref=e388]: <div class="w-48">
        - generic [ref=e389]: <div class="relative flex w-full items-stretch">
        - generic [ref=e390]: <input
        - generic [ref=e391]: type="search"
        - generic [ref=e392]: id="lunrsearch"
        - generic [ref=e393]: name="q"
        - generic [ref=e394]: maxlength="255"
        - generic [ref=e395]: value=""
        - generic [ref=e396]: placeholder="Search"
        - generic [ref=e397]: aria-label="Search"
        - generic [ref=e398]: aria-describedby="lunrbutton"
        - generic [ref=e399]: class="block w-full max-w-xs min-w-0 flex-auto rounded-sm border border-blue-300 bg-white px-3 py-1.5 text-base font-normal text-gray-500 transition ease-in-out focus:border-blue-500 focus:text-gray-700 focus:outline-hidden dark:border-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-600 dark:focus:text-gray-100"
        - generic [ref=e400]: />
        - generic [ref=e401]: <button
        - generic [ref=e402]: id="lunrbutton"
        - generic [ref=e403]: type="button"
        - generic [ref=e404]: name="search"
        - generic [ref=e405]: aria-label="Search Button"
        - generic [ref=e406]: class="inline-flex items-center rounded-sm bg-blue-600 p-2 text-xs/tight font-medium text-white uppercase shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring-0 focus:outline-hidden active:bg-blue-800 active:shadow-lg"
        - generic [ref=e407]: ">"
        - generic [ref=e408]: <svg
        - generic [ref=e409]: aria-hidden="true"
        - generic [ref=e410]: focusable="false"
        - generic [ref=e411]: class="size-4"
        - generic [ref=e412]: role="img"
        - generic [ref=e413]: xmlns="http://www.w3.org/2000/svg"
        - generic [ref=e414]: viewBox="0 0 512 512"
        - generic [ref=e415]: ">"
        - generic [ref=e416]: <path
        - generic [ref=e417]: fill="currentColor"
        - generic [ref=e418]: d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        - generic [ref=e419]: "></path>"
        - generic [ref=e420]: </svg>
        - generic [ref=e421]: </button>
        - generic [ref=e422]: </div>
        - generic [ref=e423]: </div>
        - generic [ref=e424]: </div>
        - generic [ref=e426]: <!-- Search results panel -->
        - generic [ref=e427]: <div
        - generic [ref=e428]: id="search-panel"
        - generic [ref=e429]: hidden
        - generic [ref=e430]: class="relative z-50"
        - generic [ref=e431]: aria-labelledby="lunrsearchtitle"
        - generic [ref=e432]: role="dialog"
        - generic [ref=e433]: aria-modal="true"
        - generic [ref=e434]: ">"
        - generic [ref=e435]: <div
        - generic [ref=e436]: id="search-backdrop"
        - generic [ref=e437]: class="fixed inset-0 bg-gray-500/75 opacity-0 transition-opacity duration-500"
        - generic [ref=e438]: ">"
        - generic [ref=e439]: </div>
        - generic [ref=e441]: <div class="fixed inset-0 overflow-hidden">
        - generic [ref=e442]: <div class="absolute inset-0 overflow-hidden">
        - generic [ref=e443]: <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        - generic [ref=e444]: <div
        - generic [ref=e445]: id="search-slideover"
        - generic [ref=e446]: class="pointer-events-auto relative w-screen max-w-md translate-x-full transition-transform duration-500"
        - generic [ref=e447]: ">"
        - generic [ref=e448]: <div
        - generic [ref=e449]: id="search-close-btn-wrap"
        - generic [ref=e450]: class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 opacity-0 transition-opacity duration-500 sm:-ml-10 sm:pr-4"
        - generic [ref=e451]: ">"
        - generic [ref=e452]: <button
        - generic [ref=e453]: id="search-close"
        - generic [ref=e454]: type="button"
        - generic [ref=e455]: class="rounded-md text-blue-300 hover:text-pink-300 focus:ring-2 focus:ring-white focus:outline-hidden"
        - generic [ref=e456]: ">"
        - generic [ref=e457]: <span class="sr-only">Close panel</span>
        - generic [ref=e458]: <Icon class="size-6" name="mdi:close-box" />
        - generic [ref=e459]: </button>
        - generic [ref=e460]: </div>
        - generic [ref=e462]: <div
        - generic [ref=e463]: class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-800"
        - generic [ref=e464]: ">"
        - generic [ref=e465]: <div class="px-4 sm:px-6">
        - generic [ref=e466]: <h2
        - generic [ref=e467]: id="lunrsearchtitle"
        - generic [ref=e468]: class="text-lg font-medium text-gray-900 dark:text-gray-100"
        - generic [ref=e469]: ">"
        - generic [ref=e470]: Search results
        - generic [ref=e471]: </h2>
        - generic [ref=e472]: </div>
        - generic [ref=e473]: <div id="lunrsearchmodal" class="relative mt-6 flex-1 px-4 sm:px-6">
        - generic [ref=e474]: <div
        - generic [ref=e475]: id="lunrsearchresults"
        - generic [ref=e476]: class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
        - generic [ref=e477]: ">"
        - generic [ref=e478]: <ul></ul>
        - generic [ref=e479]: </div>
        - generic [ref=e480]: </div>
        - generic [ref=e481]: </div>
        - generic [ref=e482]: </div>
        - generic [ref=e483]: </div>
        - generic [ref=e484]: </div>
        - generic [ref=e485]: </div>
        - generic [ref=e486]: </div>
        - generic [ref=e487]: </div>
        - generic [ref=e489]: <script>
        - generic [ref=e490]: import lunr from 'lunr'
        - generic [ref=e491]: ^
        - generic [ref=e493]: const BASE_URL = import.meta.env.BASE_URL
        - generic [ref=e495]: "let idx: ReturnType<(typeof lunr.Index)['load']> | undefined"
        - generic [ref=e496]: "let docs: Array<{ url: string; title: string; description: string }> | undefined"
        - generic [ref=e498]: "async function lunrSearch(term: string) {"
        - generic [ref=e499]: "if (!docs) {"
        - generic [ref=e500]: const res = await fetch(BASE_URL + 'search-docs.json')
        - generic [ref=e501]: docs = await res.json()
        - generic [ref=e502]: "}"
        - generic [ref=e503]: "if (!idx) {"
        - generic [ref=e504]: const res = await fetch(BASE_URL + 'search-index.json')
        - generic [ref=e505]: const data = await res.json()
        - generic [ref=e506]: idx = lunr.Index.load(data)
        - generic [ref=e507]: "}"
        - generic [ref=e509]: const resultsEl = document.querySelector('#lunrsearchresults')
        - generic [ref=e510]: const titleEl = document.querySelector('#lunrsearchtitle')
        - generic [ref=e511]: if (!resultsEl) return
        - generic [ref=e513]: resultsEl.innerHTML =
        - generic [ref=e514]: "'<ul class=\"relative grid gap-6 bg-white dark:bg-gray-700 dark:text-gray-100 px-5 py-6 sm:gap-8 sm:p-8\"></ul>'"
        - generic [ref=e516]: if (!term) return
        - generic [ref=e518]: "if (titleEl) titleEl.textContent = `Search results for '${term}'`"
        - generic [ref=e520]: const results = idx!.search(term)
        - generic [ref=e521]: const list = resultsEl.querySelector('ul')!
        - generic [ref=e522]: "if (results.length > 0) {"
        - generic [ref=e523]: "for (const result of results) {"
        - generic [ref=e524]: const doc = docs!.find((d) => d.url === result.ref)
        - generic [ref=e525]: if (!doc) continue
        - generic [ref=e526]: const li = document.createElement('li')
        - generic [ref=e527]: li.className =
        - generic [ref=e528]: "'-m-3 p-3 flex items-start rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900'"
        - generic [ref=e529]: "li.innerHTML = `<a href=\"${doc.url}\"><p class=\"text-base font-medium text-gray-900 dark:text-gray-100\">${doc.title}</p><p class=\"mt-1 text-sm text-gray-500 dark:text-gray-400\">${doc.description}</p></a>`"
        - generic [ref=e530]: list.append(li)
        - generic [ref=e531]: "}"
        - generic [ref=e532]: "} else {"
        - generic [ref=e533]: list.textContent = 'No results found...'
        - generic [ref=e534]: "}"
        - generic [ref=e535]: "}"
        - generic [ref=e537]: "function openPanel() {"
        - generic [ref=e538]: const panel = document.querySelector<HTMLElement>('#search-panel')
        - generic [ref=e539]: const backdrop = document.querySelector('#search-backdrop')
        - generic [ref=e540]: const slideover = document.querySelector('#search-slideover')
        - generic [ref=e541]: const closeBtnWrap = document.querySelector('#search-close-btn-wrap')
        - generic [ref=e542]: if (!panel) return
        - generic [ref=e543]: panel.hidden = false
        - generic [ref=e544]: // Trigger transitions on next frame
        - generic [ref=e545]: "requestAnimationFrame(() => {"
        - generic [ref=e546]: backdrop?.classList.replace('opacity-0', 'opacity-100')
        - generic [ref=e547]: slideover?.classList.replace('translate-x-full', 'translate-x-0')
        - generic [ref=e548]: closeBtnWrap?.classList.replace('opacity-0', 'opacity-100')
        - generic [ref=e549]: "})"
        - generic [ref=e550]: "}"
        - generic [ref=e552]: "function closePanel() {"
        - generic [ref=e553]: const panel = document.querySelector<HTMLElement>('#search-panel')
        - generic [ref=e554]: const backdrop = document.querySelector('#search-backdrop')
        - generic [ref=e555]: const slideover = document.querySelector('#search-slideover')
        - generic [ref=e556]: const closeBtnWrap = document.querySelector('#search-close-btn-wrap')
        - generic [ref=e557]: if (!panel) return
        - generic [ref=e558]: backdrop?.classList.replace('opacity-100', 'opacity-0')
        - generic [ref=e559]: slideover?.classList.replace('translate-x-0', 'translate-x-full')
        - generic [ref=e560]: closeBtnWrap?.classList.replace('opacity-100', 'opacity-0')
        - generic [ref=e561]: // Hide after transition ends
        - generic [ref=e562]: slideover?.addEventListener(
        - generic [ref=e563]: "'transitionend',"
        - generic [ref=e564]: "() => {"
        - generic [ref=e565]: panel.hidden = true
        - generic [ref=e566]: "},"
        - generic [ref=e567]: "{ once: true }"
        - generic [ref=e568]: )
        - generic [ref=e569]: "}"
        - generic [ref=e571]: "document.querySelector('#lunrbutton')?.addEventListener('click', async () => {"
        - generic [ref=e572]: const searchText = (document.querySelector('#lunrsearch') as HTMLInputElement)?.value || ''
        - generic [ref=e573]: await lunrSearch(searchText)
        - generic [ref=e574]: openPanel()
        - generic [ref=e575]: "})"
        - generic [ref=e577]: document.querySelector('#search-close')?.addEventListener('click', closePanel)
        - generic [ref=e579]: "document.querySelector('#lunrsearch')?.addEventListener('keypress', (e) => {"
        - generic [ref=e580]: "if ((e as KeyboardEvent).key === 'Enter') {"
        - generic [ref=e581]: e.preventDefault()
        - generic [ref=e582]: document.querySelector<HTMLElement>('#lunrbutton')?.click()
        - generic [ref=e583]: "}"
        - generic [ref=e584]: "})"
        - generic [ref=e585]: </script>
    - generic [ref=e587]:
      - generic [ref=e588]:
        - heading "Stack Trace" [level=2] [ref=e589]
        - img [ref=e591] [cursor=pointer]
      - generic [ref=e595]: at TransformPluginContext._formatLog (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:29003:43) at TransformPluginContext.error (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:29000:14) at normalizeUrl (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27123:18) at process.processTicksAndRejections (node:internal/process/task_queues:104:5) at async file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27181:32 at async Promise.all (index 0) at async TransformPluginContext.transform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:27149:4) at async EnvironmentPluginContainer.transform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:28801:14) at async loadAndTransform (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:22670:26) at async viteTransformMiddleware (file:///Volumes/Photos/Websites/sydneyhillsmakan/node_modules/.pnpm/vite@7.3.2_@types+node@25.6.0_jiti@2.6.1_lightningcss@1.32.0_yaml@2.8.3/node_modules/vite/dist/node/chunks/config.js:24546:20)
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
> 23 |     await expect(page.locator('#search-panel')).toBeVisible()
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  24 |   })
  25 | 
  26 |   test('pressing Enter in the search input opens the results panel', async ({ page }) => {
  27 |     await page.locator('#lunrsearch').fill('sweet')
  28 |     await page.locator('#lunrsearch').press('Enter')
  29 |     await expect(page.locator('#search-panel')).toBeVisible()
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