import type { Metadata } from "next";
import { Archivo, Archivo_Black, Caveat } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo-black",
  display: "swap",
});

// Archivo Black has no Vietnamese letters (ỏ, ố, ...), so those fall back to a
// thin font. This heavy Archivo cut is used just for them (see --font-display).
const archivoVietnamese = Archivo({
  weight: "900",
  subsets: ["vietnamese"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${archivoVietnamese.variable} ${archivo.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
