import { styled } from "@stitches/react";
import React from "react";
import { Box } from "./Box";

const CloseButton = styled("button", {
	padding: "$1",
	border: "none",
	background: "$gray100",
	"&:hover": {
		backgroundColor: "$gray300",
	},
});

export const Modal = ({ isShow, children, hide }) => {
	if (!isShow) return null;
	return (
		<Box
			css={{
				position: "absolute",
				inset: "0 0 0 0",
				backgroundColor: "#4b5563aa",
				height: "100%",
			}}
		>
			<Box
				css={{
					width: "$max-w-5xl",
					backgroundColor: "$gray100",
					margin: "0 auto",
					marginTop: "4rem",
					borderRadius: "$base",
					padding: "$4",
				}}
			>
				<CloseButton
					onClick={hide}
					css={{
						float: "right",
					}}
				>
					X
				</CloseButton>
				{children}
			</Box>
		</Box>
	);
};
