import type { Metadata } from "next";
import { Inter, Manrope, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    title: "IGACMUN Session III - Game of Thorns: Green Dominion",
    description:
      "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.",
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${cinzel.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
