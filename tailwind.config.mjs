import typography from '@tailwindcss/typography'
import chroma from 'chroma-js'
import {addDynamicIconSelectors} from '@iconify/tailwind'

const colors = [
  ['neutral', '#383a36'],
  ['brand', '#1DE9B6'],
].reduce((acc, [name, color]) => {
  const shades = chroma
  .scale(['black', color, 'white'])
  .mode('hsl')
  .correctLightness()
  .colors(26, 'hex')

  return {
    ...acc,
    [name]: shades.reduce((acc, shade, idx) => ({
      ...acc,
      [idx * 4]: shade,
    }), {})
  }
}, {});

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors,
      screens: {
        sm: '480px',
        md: '720px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        sans: ['Outfit Variable', 'system-ui', 'sans-serif'],
        serif: ['Outfit Variable', 'system-ui', 'serif'],
      },
    },
  },
  plugins: [
    typography({ className: 'typo' }),
    addDynamicIconSelectors(),
  ],
}
