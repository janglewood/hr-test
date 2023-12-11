import { Open_Sans, Playfair_Display } from "next/font/google";

// custom font file
const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});

const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const fonts = {
  OpenSans,
  PlayfairDisplay,
};
