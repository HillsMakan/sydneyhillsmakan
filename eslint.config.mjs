import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import * as astroParser from 'astro-eslint-parser'
import markdown from '@eslint/markdown'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { importX } from 'eslint-plugin-import-x'
import unicorn from 'eslint-plugin-unicorn'
import eslintConfigPrettier from 'eslint-config-prettier'

// parsers
const tsParser = tseslint.parser

const codeFiles = ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,astro}']

function onlyForCode(configs) {
  if (Array.isArray(configs)) {
    return configs.map(c => ({ ...c, files: codeFiles }))
  }
  return [{ ...configs, files: codeFiles }]
}

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // Base configs
  ...onlyForCode(js.configs.recommended),
  ...onlyForCode(tseslint.configs.recommended),
  ...onlyForCode(betterTailwindcss.configs.recommended),
  ...onlyForCode(importX.flatConfigs.recommended),
  ...onlyForCode(unicorn.configs.recommended),

  // Custom settings and rules
  {
    files: codeFiles,
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true
      },
      'better-tailwindcss': {
        entryPoint: './src/styles/global.css'
      }
    },
    rules: {
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/name-replacements': 'off',
      'unicorn/prefer-url-href': 'off',
      'unicorn/no-global-object-property-assignment': 'off',
      'unicorn/consistent-boolean-name': 'off',
      'unicorn/prefer-number-coercion': 'off',
      'unicorn/no-unnecessary-global-this': 'off',
      'unicorn/prefer-iterator-to-array': 'off',
      'unicorn/require-array-sort-compare': 'off',
      'better-tailwindcss/no-unknown-classes': 'off',
      // prettier-plugin-tailwindcss already handles class formatting and ordering; these rules conflict
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/enforce-consistent-class-order': 'off',
      'import-x/no-unresolved': [
        'error',
        {
          ignore: ['astro:content', 'astro:assets']
        }
      ]
    }
  },

  // astro setup with a11y
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json'
      }
    },
    rules: {
      'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      '@typescript-eslint/no-explicit-any': 'off' // you may want this as it can get annoying
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/gfm',
    processor: 'markdown/markdown',
    rules: {
      // Minimal rules for markdown to avoid conflicts
      'no-html': 'off'
    }
  },
  // Ignore patterns
  {
    ignores: ['dist/**', '**/*.d.ts', '.github/']
  },

  // Prettier config - MUST BE LAST
  eslintConfigPrettier
])
