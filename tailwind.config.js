module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				gray: "0 1px 2px 1px rgba(173, 173, 173)",
			},
			backgroundColor: {
				breakingGreen: "#07471d",
			},
			borderColor: {
				breakingGreen: "#07471d",
			},
			textColor: {
				breakingGreen: "#07471d",
			},
		},
	},
	variants: {
		extend: {
			height: ["responsive, hover", "focus"],
			transitionProperty: ["hover", "focus"],
		},
	},
	plugins: [],
}
