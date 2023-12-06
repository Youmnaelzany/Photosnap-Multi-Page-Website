/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      colors: {
        'pure-black': '#000000',
        'light-gray': '#DFDFDF',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      }
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}