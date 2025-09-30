import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGACMUN Session III - Game of Thorns: Green Dominion",
  description:
    "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence. Join us for IGACMUN Session III.",
  authors: [{ name: "IGAC" }],
  keywords: [
    "MUN",
    "Model United Nations",
    "IGAC",
    "Conference",
    "Diplomacy",
    "Youth",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "IGACMUN Session III - Game of Thorns: Green Dominion",
    description:
      "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    images: [
      {
        url: "https://igacmun-session-3.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "IGACMUN Session III Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGACMUN Session III - Game of Thorns: Green Dominion",
    description:
      "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    images: ["https://igacmun-session-3.netlify.app/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
