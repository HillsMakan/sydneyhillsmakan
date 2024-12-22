# HMG International

HMG (Hills Makan Group) International website, built using [Astro](https://astro.build) and  [Flowbite](https://flowbite.com)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── astro.config.mjs          # Astro configuration file 
├── public/                   # Location of static assets
│   └── favicon.svg
├── src/
│   ├── assets/               # Location of dynamic assets (eg. images)
│   │   └── screenshot.png
│   ├── components/           # Astro components
│   │   └── header.astro
│   ├── content/              # Location of content (markdown, data and images)
│   │   └── config.ts
│   ├── layouts/              # Location of layouts for pages
│   │   └── Layout.astro
│   └── pages/                # Location of pages
│       └── index.astro
├── package.json
└── tailwind.config.cjs             # UnoCSS configuration file
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Release History

* 1.0.0: Initial version
* 2.0.0: Rewritten using additional content collections