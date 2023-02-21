/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: {
    content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  },
  content: [
    // './renderer/**/*.{js,ts,jsx,tsx}',
    // './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
