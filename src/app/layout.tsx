import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarHome from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import React from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comissão de Festas S.Sebastião",
  description: "Comissão de Festas S.Sebastião '05",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarHome />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}