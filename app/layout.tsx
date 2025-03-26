import type React from "react";
import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Catering & Decor",
  description: "Beyond catering and decor. Catering with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
