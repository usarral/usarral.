/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  darkBg: '#20252C',
		  darkBgHover: '#3c4654'
		}
	  }
	},
	plugins: []
  }
  