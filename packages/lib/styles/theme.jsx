import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
	theme: {
		colors: {
			gray800: "#1f2937",
			gray600: "#4b5563",
			gray300: "#d1d5db",
			gray100: "#f3f4f6",
			gray50: "#f9fafb",
			orange500: "#f97316",
			blue500: "#3b82f6",
			neutral50: "#fafafa",
			neutral900: "#171717",

			// token aliases
			text: "$gray800",
			textInverse: "$neutral50",
			accent: "$neutral900",
			background: "$gray100",
		},
		fontSizes: {
			xs: ".75rem",
			sm: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
      "3xl": "1.875rem"
		},
		lineHeights: {
			xs: "1rem",
			sm: "1.25rem",
			base: "1.5rem",
			lg: "1.75rem",
			xl: "1.74rem",
		},
		space: {
			1: "0.25rem",
			2: "0.5rem",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
		},
		sizes: {
			"max-w-2xl": "42rem",
			"max-w-3xl": "48rem",
			"max-w-4xl": "56rem",
			"max-w-5xl": "64rem",
		},
		radii: {
			sm: "0.125rem",
			base: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			full: "9999px",
		},
		borderWidths: {
			0: "0px",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px",
		},
		shadows: {
			sm: "0 1px 2px 0 rgb(0 0 0 / 0.5)",
			base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
			md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		},
		fontWeights: {
			light: "300",
			normal: "400",
			semibold: "600",
			bold: "700",
		},
		fonts: {
			poppins: "Poppins, menlo, sans-serif",
		},
	},
});
