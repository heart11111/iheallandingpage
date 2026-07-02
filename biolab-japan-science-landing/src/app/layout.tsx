import type { Metadata } from "next";
import localFont from "next/font/local";
import { DevLanguageProvider } from "@/components/DevLanguageProvider";
import { JsonLd } from "@/components/JsonLd";
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
  metadataBase: new URL("https://biolabjp.com"),
  title: "BIOLAB Japan | Functional Healthcare Platform",
  description:
    "BIOLAB Japan connects Korean functional ingredients, ODM/OEM manufacturing, and Japan-side B2B healthcare distribution.",
  alternates: {
    canonical: "/",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://biolabjp.com/#organization",
  name: "BIOLAB Japan",
  url: "https://biolabjp.com/",
  logo: "https://biolabjp.com/images/biolab-japan-ci.png",
  parentOrganization: {
    "@type": "Organization",
    name: "BIOLAB Korea",
    url: "https://biolabkr.com/",
  },
  email: "iheal.official@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "iheal.official@gmail.com",
    contactType: "business inquiry",
    availableLanguage: ["ja", "ko"],
  },
  sameAs: ["https://biolabkr.com/", "https://iheal.co.kr/main/index.php"],
};

const webSiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://biolabjp.com/#website",
  name: "BIOLAB Japan",
  url: "https://biolabjp.com/",
  publisher: {
    "@id": "https://biolabjp.com/#organization",
  },
  inLanguage: "ja-JP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={pretendardJp.variable}>
        <DevLanguageProvider>
          <JsonLd data={[organizationStructuredData, webSiteStructuredData]} />
          {children}
        </DevLanguageProvider>
      </body>
    </html>
  );
}
