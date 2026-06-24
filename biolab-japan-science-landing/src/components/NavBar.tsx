"use client";

import { useEffect, useState } from "react";
import { Globe2, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productGroups } from "@/lib/corporate";

const links = [
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products", children: productGroups },
  { label: "NEWS", href: "/news" },
  { label: "RECRUITMENT", href: "/recruitment" },
  { label: "CONTACT", href: "/contact" },
];

const externalLinks = [
  { label: "BIOLAB Korea", href: "https://biolabkr.com/" },
  { label: "iHEAL Mall", href: "https://iheal.co.kr/main/index.php" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          {links.map((link) => (
            <div className="dh-menu-item" key={link.label}>
              <Link href={link.href}>{link.label}</Link>
              {link.children ? (
                <div className="dh-submenu">
                  {link.children.map((child) => (
                    <Link href={`/products/${child.slug}`} key={child.slug}>
                      {child.menuLabel}
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
          <Search size={17} aria-hidden="true" />
          <Link href="/contact" aria-label="Language">
            <Globe2 size={17} aria-hidden="true" />
          </Link>
          <button type="button" className="dh-mobile-toggle" aria-label="メニュー" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="dh-mobile-panel">
          {links.map((link) => (
            <Link href={link.href} key={link.label} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          {externalLinks.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
