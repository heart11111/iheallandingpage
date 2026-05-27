"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "ビジョン", href: "#vision" },
  { label: "素材", href: "#pipeline" },
  { label: "エビデンス", href: "#evidence" },
  { label: "事業", href: "#business" },
  { label: "お問い合わせ", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <a className="brand-lockup" href="#top" aria-label="BIOLAB Japan ホーム">
        <span className="brand-symbol">B</span>
        <span>
          BIOLAB <b>Japan</b>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        提携相談
        <ArrowRight size={16} aria-hidden="true" />
      </a>

      <button className="mobile-toggle" type="button" aria-label="メニューを開閉" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            提携相談
          </a>
        </div>
      ) : null}
    </header>
  );
}
