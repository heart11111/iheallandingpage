import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
