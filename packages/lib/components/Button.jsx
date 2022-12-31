import { styled } from "../styles/theme";
import { Icon } from "./Icon";

export const Button = styled("button", {
	padding: "$2 $5",
	fontSize: "$sm",
	fontWeight: "$semibold",
	color: "$textInverse",
	backgroundColor: "$accent",
	border: "none",
	borderRadius: "$md",
	textTransform: "uppercase",
	cursor: "pointer",
	"&:hover": {
		opacity: "0.8",
	},
	variants: {
		outlined: {
			true: {
				backgroundColor: "$background",
				border: "2px solid $accent",
				color: "$text",
			},
		},
		icon: {
			true: {
				color: "$gray100",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				marginLeft: "$10",
				text: "$semibold",
				fontSize: "$6",
			},
		},
	},
	[`& ${Icon}`]: {},
});
