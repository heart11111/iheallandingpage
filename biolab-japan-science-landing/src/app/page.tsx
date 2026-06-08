"use client";

import { ArrowRight, Globe2, Microscope, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CorporateFooter } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { corporateNews } from "@/lib/corporate";
import { useLenis } from "@/lib/useLenis";

const featuredCards = [
  {
    eyebrow: "Functional Probiotics",
    title: "Application-specific strain portfolio",
    subtitle: "用途別プロバイオティクス",
    image: "images/biolab-cosmetic-science-bg.png",
    href: "/products/probiotics",
  },
  {
    eyebrow: "Nature Ingredients",
    title: "Nature-derived functional materials",
    subtitle: "自然由来機能性素材",
    image: "images/nature-ingredients-lab.png",
    href: "/products/nature",
  },
  {
    eyebrow: "ODM / OEM",
    title: "Market-ready product planning",
    subtitle: "商品化・供給設計",
    image: "images/biolab-global-factory-bg.png",
    href: "/products/odm-oem",
  },
];

const techValues = [
  {
    title: "研究開発",
    subtitle: "RESEARCH & DEVELOPMENT",
    copy: "韓国の素材開発、製造、ブランド管理を日本市場向けの事業設計につなげます。",
    icon: Microscope,
  },
  {
    title: "根拠資料",
    subtitle: "EVIDENCE ARCHITECTURE",
    copy: "ヒト臨床試験、SCI論文、特許、認証資料を素材別に整理し、B2B提案に活用します。",
    icon: ShieldCheck,
  },
  {
    title: "事業連携",
    subtitle: "GLOBAL BUSINESS BRIDGE",
    copy: "日本の販売会社、メーカー、卸、ブランド事業者へ展開できる供給線を構築します。",
    icon: Globe2,
  },
];

export default function Home() {
  useLenis();

  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section id="top" className="dh-hero">
          <div className="dh-hero-image" aria-hidden="true" />
          <div className="dh-hero-overlay" aria-hidden="true" />
          <div className="dh-bridge-art" aria-hidden="true">
            <span>KOREA</span>
            <i />
            <strong>BIOLAB Japan</strong>
            <i />
            <span>JAPAN</span>
          </div>
          <div className="dh-container dh-hero-inner">
            <div className="dh-hero-copy">
              <p>WE ARE BRIDGE!</p>
              <h1>
                <span className="dh-hero-line">KOREA TO</span>
                <span className="dh-hero-accent">JAPAN</span>
              </h1>
              <h2>
                CONNECT KOREA
                <br />
                WITH JAPAN
              </h2>
              <p className="dh-hero-support">
                韓国の機能性素材開発・製造力を、日本のB2Bヘルスケア市場へつなぐ事業ブリッジ。
              </p>
              <div className="dh-hero-actions">
                <a href="#products">素材を見る</a>
                <a href="/contact">提携相談</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="dh-about">
          <div className="dh-container dh-about-grid">
            <div>
              <p className="dh-kicker">ABOUT BIOLAB JAPAN</p>
              <h2>
                Korea to Japan
                <br />
                Healthcare Bridge.
              </h2>
            </div>
            <div className="dh-about-text">
              <p>
                BIOLAB Japanは、韓国の機能性素材開発、製造、ODM/OEM、ブランド管理と、
                日本側の販売会社・メーカー・卸ネットワークをつなぐヘルスケア事業ブリッジです。
              </p>
              <Link className="dh-text-link" href="/about">
                ABOUTを見る
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="products" className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title">
              <h2>
                Before you create
                <br />
                the product,
                <br />
                we focus on the ingredients.
              </h2>
              <p>成功的な商品開発の核となる素材と根拠情報に集中します。</p>
            </div>
            <div className="dh-product-grid">
              {featuredCards.map((card) => (
                <article className="dh-product-card" key={card.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt="" aria-hidden="true" />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <p className="dh-product-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <strong>{card.subtitle}</strong>
                  </div>
                  <a href={card.href} aria-label={`${card.title} 詳細`}>
                    LEARN MORE
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="dh-tech">
          <div className="dh-container">
            <div className="dh-section-title">
              <h2>
                Empowering healthcare brands to build
                <br />
                <span>evidence-led growth</span> is what matters to us.
              </h2>
              <p>より確かな素材情報を、より広い市場展開へつなげることがBIOLAB Japanの価値です。</p>
            </div>
            <div className="dh-tech-grid">
              {techValues.map((item) => (
                <article className="dh-tech-item" key={item.title}>
                  <item.icon size={62} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p className="dh-tech-subtitle">{item.subtitle}</p>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="dh-center">
              <Link className="dh-outline-button" href="/about">LEARN MORE</Link>
            </div>
          </div>
        </section>

        <section id="news" className="dh-news dh-home-news">
          <div className="dh-container">
            <div className="dh-section-title dh-right">
              <h2>News</h2>
              <p>BIOLAB Japanの事業展開、素材情報、提携相談に関する最新トピックです。</p>
            </div>
            <div className="dh-topic-grid">
              {corporateNews.map((item) => (
                <article className="dh-topic" key={item.slug}>
                  <div className="dh-topic-visual" style={{ backgroundImage: `linear-gradient(135deg, rgba(31, 87, 164, 0.78), rgba(65, 171, 225, 0.68)), url(${item.image})` }} />
                  <p className="dh-topic-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <a href="/news">LEARN MORE</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="dh-home-cta">
          <div className="dh-container">
            <div>
              <p className="dh-kicker">CONTACT</p>
              <h2>Start a Korea-to-Japan healthcare project.</h2>
              <p>素材調達、ODM/OEM、日本B2B流通、ブランド協業についてはCONTACTページからご相談ください。</p>
            </div>
            <Link className="dh-outline-button" href="/contact">CONTACT</Link>
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
