import type { Metadata } from "next";
import { Geist, Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gather",
  description: "We create dining experiences that bring people together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} antialiased`}>{children}</body>
    </html>
  );
}
