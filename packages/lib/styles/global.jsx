import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*, *::before, *:;after": {
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
    padding: 0,
    font: "inherit"
  },
  "img, picture, svg, video": {
    display: "block",
    maxWidth: "100%",
    height: "auto",
  },
  body: {
    fontFamily: "$poppins",
    color: "$primary",
    backgroundColor: "$background",
    lineHeight: "$base",
  },
  "@import": 
   "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap')"
})