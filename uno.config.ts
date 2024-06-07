// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetTypography,
  presetUno
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    }),
    presetAttributify(), // required when using attributify mode
    presetUno(), // required
    presetForms(),
    presetTypography()
  ],
  safelist: [
    'i-heroicons-sparkles',
    'i-heroicons-puzzle-piece',
    'i-heroicons-presentation-chart-bar',
    'i-heroicons-clock',
    'i-simple-icons-facebook',
    'i-simple-icons-linktree',
  ]
})
