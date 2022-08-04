/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			rose: colors.rose,
			magnolia: '#f7f0f5',
			cyan: '#e0fbfcff',
			keppel: '#36C4B0',
			yonder: '#587291',
			uranium: '#ADD7F6',
			uraniumBlue: '#CFECF6',
			lightGreen: '#EDF5E1',
			spanish: '#F8C1B9',
			crimson: '#A71D31',
		},
	},
	plugins: [],
};
