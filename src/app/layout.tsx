import type { Metadata } from "next";
import { Archivo, Archivo_Black, Caveat } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo-black",
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
    "Chosen-family dinners, big pots and extra chairs. Gather cooks supper clubs, fairs and neighbourhood catering across Amsterdam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${archivo.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
