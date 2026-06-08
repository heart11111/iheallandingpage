"use client";

import { useEffect, useState } from "react";
import { Globe2, Menu, Search, X } from "lucide-react";

const productLinks = [
  "Functional Probiotics",
  "Nature-derived Ingredients",
  "ODM/OEM",
  "Brand Royalty",
];

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products", children: productLinks },
  { label: "TECHNOLOGY", href: "#technology" },
  { label: "BUSINESS", href: "#business" },
  { label: "CONTACT", href: "#contact" },
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
        <a className="dh-logo" href="#top" aria-label="BIOLAB Japan home">
          <span>BIOLAB</span>
          <b>Japan</b>
        </a>

        <nav className="dh-menu" aria-label="Primary navigation">
          {links.map((link) => (
            <div className="dh-menu-item" key={link.label}>
              <a href={link.href}>{link.label}</a>
              {link.children ? (
                <div className="dh-submenu">
                  {link.children.map((child) => (
                    <a href="#pipeline" key={child}>
                      {child}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="dh-nav-tools">
          <Search size={17} aria-hidden="true" />
          <a href="#contact" aria-label="Language">
            <Globe2 size={17} aria-hidden="true" />
          </a>
          <button type="button" className="dh-mobile-toggle" aria-label="メニュー" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="dh-mobile-panel">
          {links.map((link) => (
            <a href={link.href} key={link.label} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
