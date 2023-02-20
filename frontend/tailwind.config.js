module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},

			colors: {
				background: "rgba(24, 26, 46, 1)",
				foreground: "rgba(20, 22, 39, 1)",
				foreground2: "rgba(27, 29, 52, 1)",

				content: {
					100: "rgba(255, 255, 255, 1)",
					80: "rgba(255, 255, 255, 0.8)",
					60: "rgba(255, 255, 255, 0.6)",
				},

				active: {
					100: "rgba(0, 93, 233, 1)",
					20: "rgba(0, 93, 233, 0.2)",
				},

				borderLine: {
					30: "rgba(37, 42, 67, 0.3)",
				},
			},
		},
	},

	plugins: [],
};
