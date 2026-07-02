"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { siteMapGroups } from "@/lib/corporate";
import { devKoreanLabels } from "@/lib/devKorean";

const externalLinks = [
  { label: "BIOLAB Korea", href: "https://biolabkr.com/" },
  { label: "iHEAL Mall", href: "https://iheal.co.kr/main/index.php" },
];

const koreanMenuLabels: Record<string, string> = {
  "/company": "회사소개",
  "/company/greeting": "대표 인사말",
  "/company/vision": "비전 및 목표",
  "/business": "사업/서비스",
  "/business/materials": "기능성 식품 소재 사업",
  "/business/odm-oem": "OEM/ODM 서비스",
  "/business/brand-management": "Brand Royalty",
  "/products": "제품",
  "/products/microbiome-probiotics": "Functional Probiotics line",
  "/products/nature-ingredients": "Nature’s food ingredients Line",
  "/communication": "문의",
  "/communication/catalog": "E-카탈로그",
  "/communication/inquiries": "고객 문의",
  "/communication/channels": "채널",
};

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useDevLanguage();
  const menuLabel = (href: string, fallback: string) => (language === "ko" ? koreanMenuLabels[href] || fallback : fallback);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`dh-nav ${scrolled ? "dh-nav-scrolled" : ""}`}>
      <div className="dh-nav-inner">
        <Link className="dh-logo" href="/" aria-label="BIOLAB Japan home">
          <Image src="/images/biolab-japan-ci.png" alt="BIOLAB Japan" width={508} height={96} priority />
        </Link>

        <nav className="dh-menu" aria-label="Primary navigation">
          {siteMapGroups.map((link) => (
            <div className="dh-menu-item" key={link.label}>
              <Link href={link.href}>{menuLabel(link.href, link.menuLabel)}</Link>
              {link.children ? (
                <div className="dh-submenu">
                  {link.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      {menuLabel(child.href, child.menuLabel)}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="dh-nav-tools">
          {externalLinks.map((link) => (
            <a className="dh-top-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <div className="dh-dev-language-toggle" aria-label={devKoreanLabels.language}>
            <button
              type="button"
              className={language === "ja" ? "is-active" : ""}
              aria-pressed={language === "ja"}
              onClick={() => setLanguage("ja")}
            >
              {devKoreanLabels.ja}
            </button>
            <button
              type="button"
              className={language === "ko" ? "is-active" : ""}
              aria-pressed={language === "ko"}
              onClick={() => setLanguage("ko")}
            >
              {devKoreanLabels.ko}
            </button>
          </div>
          <button type="button" className="dh-mobile-toggle" aria-label="メニュー" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="dh-mobile-panel">
          {siteMapGroups.map((link) => (
            <Link href={link.href} key={link.label} onClick={() => setOpen(false)}>
              {menuLabel(link.href, link.menuLabel)}
            </Link>
          ))}
          {siteMapGroups.flatMap((link) => link.children).map((child) => (
            <Link className="dh-mobile-sub-link" href={child.href} key={child.href} onClick={() => setOpen(false)}>
              {menuLabel(child.href, child.menuLabel)}
            </Link>
          ))}
          {externalLinks.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="dh-mobile-language-toggle" aria-label={devKoreanLabels.language}>
            <button type="button" className={language === "ja" ? "is-active" : ""} onClick={() => setLanguage("ja")}>
              일본어
            </button>
            <button type="button" className={language === "ko" ? "is-active" : ""} onClick={() => setLanguage("ko")}>
              한국어
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
