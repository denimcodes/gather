import { styled } from "../styles/theme";

export const Input = styled("input", {
	border: "1px solid $gray300",
	backgroundColor: "$gray100",
	borderRadius: "$2",
	width: "98%",
	height: "2.6rem",
	padding: "0 $3",
});

export const Label = styled("label", {
	padding: "$4 0",
	fontSize: "$base",
	fontWeight: "bold",
	lineHeight: "$sm",
	display: "block",
});

export const TextArea = styled("textarea", {
	border: "1px solid $gray300",
	backgroundColor: "$gray100",
	borderRadius: "$2",
	width: "98%",
	padding: "$2 $3",
});
