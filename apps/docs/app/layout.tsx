"use client";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { classNames } from "@rafty/ui";

import { Providers } from "./providers";
import { Layout } from "../components/Layout";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: "../fonts/lexend.woff2",
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Docs",
    default: "CacheAdvance - Never miss the cache again.",
  },
  description:
    "Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        "h-full antialiased",
        inter.variable,
        lexend.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white selection:bg-[#79ffe1] dark:bg-secondary-950 dark:selection:bg-[#f81ce5] dark:selection:text-white">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
