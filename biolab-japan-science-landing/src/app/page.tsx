"use client";

import { BadgeCheck, Factory, FlaskConical, Globe2, Microscope, Network, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CorporateFooter } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { corporateNews, productGroups } from "@/lib/corporate";
import { businessServices, natureIngredients, probioticsIngredients } from "@/lib/ingredients";
import { useLenis } from "@/lib/useLenis";

const featuredCards = [
  {
    eyebrow: "Functional Probiotics",
    title: "Application-specific strain portfolio",
    subtitle: "用途別プロバイオティクス",
    copy: "女性、体脂肪、肝臓、鼻、ストレス、腸のコンディションに合わせて、菌株レベルで素材情報を整理します。",
    image: "images/biolab-cosmetic-science-bg.png",
    href: "/products/probiotics",
    tags: ["MED01", "NVP-1702", "NVP-1703"],
  },
  {
    eyebrow: "Nature Ingredients",
    title: "Nature-derived functional materials",
    subtitle: "自然由来機能性素材",
    copy: "記憶、肌、肝臓、免疫、男性健康など、製品カテゴリーに合わせた自然由来素材を提案します。",
    image: "images/global-evidence-bg.png",
    href: "/products/nature",
    tags: ["ThinkGIN", "Applephenon", "Immulink MBG"],
  },
  {
    eyebrow: "ODM / OEM",
    title: "Market-ready product planning",
    subtitle: "商品化・供給設計",
    copy: "韓国メーカーの製造ネットワーク、日本側B2B販売、輸入・供給調整まで事業化の実務をつなぎます。",
    image: "images/biolab-global-factory-bg.png",
    href: "/products/odm-oem",
    tags: ["Manufacturing", "Supply", "B2B"],
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

const topics = [
  {
    date: "01",
    title: "Korea R&D to Japan B2B",
    copy: "素材開発・ソーシング、メーカー直供給、製造、ブランド管理をBIOLAB Japanが日本側の流通へ接続します。",
    icon: Network,
  },
  {
    date: "02",
    title: "Evidence-backed ingredient portfolio",
    copy: `${probioticsIngredients.length}件のプロバイオティクス素材と${natureIngredients.length}件の自然由来素材を用途別に整理しています。`,
    icon: FlaskConical,
  },
  {
    date: "03",
    title: "ODM/OEM and brand royalty",
    copy: "主要韓国メーカーとのODM/OEM生産、iHEALブランド活用、輸入・通関を含む事業相談に対応します。",
    icon: Factory,
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
                <a href="#contact">提携相談</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="dh-about">
          <div className="dh-container dh-about-grid">
            <div>
              <p className="dh-kicker">ABOUT BIOLAB JAPAN</p>
              <h2>
                One-stop Solution for
                <br />
                Total Healthcare in
                <br />
                JAPAN
              </h2>
            </div>
            <div className="dh-about-text">
              <p>
                BIOLAB Japanは、韓国の機能性素材開発、製造、ODM/OEM、ブランド管理と、
                日本側の販売会社・メーカー・卸ネットワークをつなぐヘルスケア事業ブリッジです。
              </p>
              <ul>
                <li>KFDA個別認定型素材、ヒト臨床試験、SCI論文、特許資料を参照した素材ポートフォリオ</li>
                <li>プロバイオティクスと自然由来機能性素材の用途別提案</li>
                <li>日本市場向けの商品化、供給、販売拡大、ブランドロイヤリティ設計</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="products" className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title">
              <h2>
                Before you create the product,
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
                    <p>{card.copy}</p>
                    <div>
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
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
              <a className="dh-outline-button" href="#business">
                LEARN MORE
              </a>
            </div>
          </div>
        </section>

        <section id="business" className="dh-news">
          <div className="dh-container">
            <div className="dh-section-title dh-right">
              <h2>Business</h2>
              <p>韓国R&Dから日本B2B市場まで、BIOLAB Japanがつなぐ主要事業領域です。</p>
            </div>
            <div className="dh-topic-grid">
              {topics.map((topic) => (
                <article className="dh-topic" key={topic.title}>
                  <div className="dh-topic-visual">
                    <topic.icon size={44} strokeWidth={1.35} aria-hidden="true" />
                  </div>
                  <p className="dh-topic-date">{topic.date}</p>
                  <h3>{topic.title}</h3>
                  <p>{topic.copy}</p>
                  <a href="/contact">LEARN MORE</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pipeline" className="dh-pipeline">
          <div className="dh-container">
            <p className="dh-kicker">INGREDIENT PIPELINE</p>
            <h2>用途別に整理された機能性素材ポートフォリオ。</h2>
            <div className="dh-pipeline-grid">
              {productGroups.slice(0, 2).flatMap((group) => group.items.slice(0, 6)).map((ingredient) => (
                <article key={ingredient.id}>
                  <div>
                    <span>{ingredient.category}</span>
                    <span>{ingredient.intake}</span>
                  </div>
                  <h3>{ingredient.name}</h3>
                  <p>{ingredient.summary}</p>
                  <strong>{ingredient.area}</strong>
                </article>
              ))}
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

        <section id="services" className="dh-services">
          <div className="dh-container">
            <p className="dh-kicker">SERVICES</p>
            <h2>B2B services for functional healthcare growth in Japan.</h2>
            <div className="dh-service-grid">
              {businessServices.map((service) => (
                <article key={service.title}>
                  <BadgeCheck size={22} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="dh-contact">
          <div className="dh-container dh-contact-grid">
            <div>
              <p className="dh-kicker">CONTACT</p>
              <h2>
                Looking to develop
                <br />
                a functional healthcare product?
              </h2>
              <p>
                機能性素材、ODM/OEM、日本側B2B流通、iHEALブランド協業についてご相談ください。
                受信用メール設定前でもフォーム画面は動作確認できます。
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
