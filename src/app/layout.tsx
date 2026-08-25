import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import CommandCenterMount from "@/components/layout/CommandCenterMount";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://ramanasree.dev";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramana Sree K V | Enterprise AI & Automation Engineer",
    template: "%s | Ramana Sree K V",
  },
  description:
    "Applying analytical thinking, automation, and AI to solve complex real-world data challenges. IBM Champion 2025 & 2026, IEEE Best Paper awardee.",
  keywords: [
    "AI Engineer",
    "Automation",
    "IBM Champion",
    "Machine Learning",
    "Enterprise",
    "Portfolio",
    "IBM Z",
    "Mainframe",
    "Deep Learning",
  ],
  authors: [{ name: "Ramana Sree K V" }],
  creator: "Ramana Sree K V",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ramana Sree K V | Enterprise AI & Automation Engineer",
    description:
      "Applying analytical thinking, automation, and AI to solve complex real-world data challenges.",
    url: siteUrl,
    siteName: "AETHER_ENG",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramana Sree K V | Enterprise AI & Automation Engineer",
    description:
      "Applying analytical thinking, automation, and AI to solve complex real-world data challenges.",
    creator: "@ramanasreekv",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased bg-background text-on-surface overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary-container focus:text-white focus:rounded-lg focus:outline-none font-mono text-mono-label"
          >
            Skip to main content
          </a>
          <div className="film-grain" aria-hidden="true" />
          {children}
          <CommandCenterMount />
        </SmoothScroll>
      </body>
    </html>
  );
}
