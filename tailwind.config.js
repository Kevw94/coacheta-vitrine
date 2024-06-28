/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		colors: {
			current: "currentColor",
			bg_primary: "#23262E",
			gray_light: "#D5E6E3",
			green_cyan: "#5BC0BE",
			green_light: "#9EFFF0",
		},
		extend: {
			flex: {
				'1': '1 1 100%'
			}
		},
	},
	plugins: [],
}

