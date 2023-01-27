/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			background: '#F0F3FA',
			white: '#fff',
			black: '#383838',
			orange: '#FF5722',
			tangerine: '#ED8B00',
			yellow: '#FFE577',
			blue: '#01A2E6',
			solidBlue: '#005DE9',
			purple: '#7928CA',
			neutral: {
				100: '#383838',
				90: '#383838E6',
				80: '#383838CC',
				70: '#383838B3',
				60: '#38383899',
				50: '#38383880',
				40: '#38383866',
				30: '#3838384D',
				20: '#38383833',
				10: '#3838381A',
			},
			success: {
				50: '#16C79A',
				25: '#16C79A40',
			},
			error: {
				50: '#F05454',
			},
			warning: {
				50: '#FF9C09',
			},
		},

		dropShadow: {
			default: '1px 1px 6px rgba(0, 0, 0, 0.2)',
		},
	},
	plugins: [],
};
