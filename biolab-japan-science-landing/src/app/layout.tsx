import type { Metadata } from "next";
import { Noto_Sans_JP, Tenor_Sans, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-ja",
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIOLAB Japan | Functional Healthcare Platform",
  description:
    "BIOLAB Japan connects Korean functional ingredients, ODM/OEM manufacturing, and Japan-side B2B healthcare distribution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${zenOldMincho.variable} ${tenorSans.variable}`}>{children}</body>
    </html>
  );
}
