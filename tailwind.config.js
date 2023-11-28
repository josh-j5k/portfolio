module.exports = {
	content: ["./src/**/*.{html,js,vue}"],
	theme: {
		extend: {
			fontFamily: {
				aldrich: ["Aldrich", "system-ui", "sans-serif"],
				saira: ["Saira", "system-ui", "sans-serif"],
			},
			screens: {
				"-2xl": { max: "1535px" },
				// => @media (max-width: 1536px) { ... }
				"-xl": { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
				"-lg": { max: "1023px" },
				// => @media (max-width: 1023px) { ... }
				"-md": { max: "769px" },
				// => @media (max-width: 769px) { ... }
				"-sm": { max: "639px" },
				// => @media (max-width: 639px) { ... }
				tablet: { min: "639px", max: "1023px" },
				// => @media (width: > 639 <= 1023) { ... }
			},
			colors: {
				primary: "#192BC2",
				secondary: "#00BFFF",
				"hero-bg": "#deedf3",
			},
			content: {
				string: "''",
			},
		},
	},
	plugins: [],
}
