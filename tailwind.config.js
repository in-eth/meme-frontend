import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xxs': '350px',
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        '200': '210vh',
        '150': '130vh'
      },
      width: {
        'half': '70vw'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
