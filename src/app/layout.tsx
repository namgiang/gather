import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Caveat } from "next/font/google";
import "./globals.css";
import ChopsticksCursor from "./_components/ChopsticksCursor";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo-black",
  display: "swap",
});

// Archivo Black has no Vietnamese (ỏ, ố, …). Display headings use Archivo 900
// instead — same family, heavy enough, full Vietnamese coverage. (A Black→900
// fallback stack fails: headings are weight 400 for Black, so 900 never matches
// and accents fall through to a thin system face.)
const archivoDisplay = Archivo({
  weight: "900",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-archivo-vn",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gather",
  description:
    "A community food collective in Amsterdam. We cook TCM dinners, street food snacks and Iftar dinners, and bring people together over good food and stories.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="gl-bounce-gingham">
      <body
        className={`${archivoBlack.variable} ${archivoDisplay.variable} ${archivo.variable} ${caveat.variable} relative antialiased`}
      >
        {children}
        <ChopsticksCursor />
      </body>
    </html>
  );
}
