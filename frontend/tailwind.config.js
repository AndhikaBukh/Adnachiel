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
				"background-light": "rgba(90, 111, 125, 0.15)",
				foreground: "rgba(20, 22, 39, 1)",
				"foreground-light": "rgba(27, 29, 52, 1)",

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

			boxShadow: {
				default: "1px 1px 6px rgba(0, 0, 0, 0.2);",
			},

			screens: {
				default: "1050px",
			},
		},
	},

	plugins: [],
};
