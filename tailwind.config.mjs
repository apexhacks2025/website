import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        apexblue: "#175CBC",
        lessblue: "#2F62A8"
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
        display: ['Bruno Ace SC', ...defaultTheme.fontFamily.serif]
      }
    },
	},
	plugins: [],
}
