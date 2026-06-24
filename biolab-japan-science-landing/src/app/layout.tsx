import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendardJp = localFont({
  src: [
    {
      path: "./fonts/PretendardJPVariable.woff2",
      weight: "45 920",
      style: "normal",
    },
  ],
  variable: "--font-ja",
  display: "swap",
  fallback: ["Hiragino Sans", "Yu Gothic", "system-ui", "sans-serif"],
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
      <body className={pretendardJp.variable}>{children}</body>
    </html>
  );
}
