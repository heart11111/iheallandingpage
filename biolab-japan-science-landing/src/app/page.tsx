"use client";

import { ArrowRight, Globe2, Microscope, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CorporateFooter } from "@/components/CorporateParts";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { corporateNews } from "@/lib/corporate";
import { useLenis } from "@/lib/useLenis";

const featuredCards = [
  {
    eyebrow: "Functional Probiotics",
    title: "Application-specific strain portfolio",
    subtitle: "用途別プロバイオティクス",
    koTitle: "용도별 프로바이오틱스",
    koSubtitle: "기능성 프로바이오틱스",
    image: "images/products-microbiome-probiotics-card-v2.webp",
    href: "/products/probiotics",
  },
  {
    eyebrow: "Functional Nature's Food Ingredients",
    title: "Nature-derived functional materials",
    subtitle: "自然由来機能性素材",
    koTitle: "자연 유래 기능성 소재",
    koSubtitle: "기능성 천연소재",
    image: "images/products-functional-nature-card-v2.webp",
    href: "/products/nature",
  },
  {
    eyebrow: "ODM / OEM",
    title: "Market-ready product planning",
    subtitle: "商品化・供給設計",
    koTitle: "시장 전개형 상품 기획",
    koSubtitle: "상품화 및 공급 설계",
    image: "images/biolab-global-factory-bg.png",
    href: "/products/odm-oem",
  },
];

const techValues = [
  {
    title: "研究開発",
    subtitle: "RESEARCH & DEVELOPMENT",
    copy: "韓国の素材開発、製造、ブランド管理を日本市場向けの事業設計につなげます。",
    koTitle: "연구개발",
    koCopy: "한국의 소재 개발, 제조, 브랜드 관리를 일본 시장용 사업 설계로 연결합니다.",
    icon: Microscope,
  },
  {
    title: "根拠資料",
    subtitle: "EVIDENCE ARCHITECTURE",
    copy: "ヒト臨床試験、SCI論文、特許、認証資料を素材別に整理し、B2B提案に活用します。",
    koTitle: "근거 자료",
    koCopy: "인체적용시험, SCI 논문, 특허, 인증 자료를 소재별로 정리해 B2B 제안에 활용합니다.",
    icon: ShieldCheck,
  },
  {
    title: "事業連携",
    subtitle: "GLOBAL BUSINESS BRIDGE",
    copy: "日本の販売会社、メーカー、卸、ブランド事業者へ展開できる供給線を構築します。",
    koTitle: "사업 연계",
    koCopy: "일본 판매사, 제조사, 도매, 브랜드 사업자로 확장 가능한 공급선을 구축합니다.",
    icon: Globe2,
  },
];

export default function Home() {
  useLenis();
  const { language } = useDevLanguage();
  const isKorean = language === "ko";

  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <section id="top" className="dh-hero">
          <div className="dh-hero-image" aria-hidden="true" />
          <div className="dh-hero-overlay" aria-hidden="true" />
          <div className="dh-hero-lattice" aria-hidden="true" />
          <div className="dh-hero-particles" aria-hidden="true">
            {Array.from({ length: 32 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="dh-hero-route" aria-hidden="true">
            <span className="dh-route-point dh-route-korea">KOREA</span>
            <i className="dh-route-line" />
            <span className="dh-route-core">BIOLAB JAPAN</span>
            <i className="dh-route-line" />
            <span className="dh-route-point dh-route-japan">JAPAN</span>
          </div>
          <div className="dh-container dh-hero-inner">
            <div className="dh-hero-copy">
              <p className="dh-hero-kicker">WE ARE BRIDGE!</p>
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
                {isKorean
                  ? "한국의 가능성을 일본 시장 가치로 연결합니다. 기능성 소재, 제조, 브랜드, 유통을 이어 다음 헬스케어 사업을 여는 비즈니스 브리지입니다."
                  : "韓国の可能性を、日本の市場価値へ。機能性素材、製造、ブランド、流通をつなぎ、次のヘルスケア事業をひらくビジネスブリッジです。"}
              </p>
              <div className="dh-hero-actions">
                <a href="#products">{isKorean ? "소재 보기" : "素材を見る"}</a>
                <a href="/communication/inquiries">{isKorean ? "제휴 상담" : "提携相談"}</a>
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
                {isKorean
                  ? "BIOLAB Japan은 한국의 기능성 소재 개발, 제조, ODM/OEM, 브랜드 관리와 일본의 판매사·제조사·도매 네트워크를 연결하는 헬스케어 사업 브리지입니다."
                  : "BIOLAB Japanは、韓国の機能性素材開発、製造、ODM/OEM、ブランド管理と、日本側の販売会社・メーカー・卸ネットワークをつなぐヘルスケア事業ブリッジです。"}
              </p>
              <Link className="dh-text-link" href="/about">
                {isKorean ? "회사 소개 보기" : "ABOUTを見る"}
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
              <p>{isKorean ? "성공적인 상품 개발의 핵심이 되는 소재와 근거 정보에 집중합니다." : "成功的な商品開発の核となる素材と根拠情報に集中します。"}</p>
            </div>
            <div className="dh-product-grid">
              {featuredCards.map((card) => (
                <article className="dh-product-card" key={card.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt="" aria-hidden="true" />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <p className="dh-product-eyebrow">{card.eyebrow}</p>
                    <h3>{isKorean ? card.koTitle : card.title}</h3>
                    <strong>{isKorean ? card.koSubtitle : card.subtitle}</strong>
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
                  <h3>{isKorean ? item.koTitle : item.title}</h3>
                  <p className="dh-tech-subtitle">{item.subtitle}</p>
                  <p>{isKorean ? item.koCopy : item.copy}</p>
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
              <p>{isKorean ? "BIOLAB Japan의 사업 전개, 소재 정보, 제휴 상담 관련 최신 토픽입니다." : "BIOLAB Japanの事業展開、素材情報、提携相談に関する最新トピックです。"}</p>
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
              <p>{isKorean ? "소재 조달, ODM/OEM, 일본 B2B 유통, 브랜드 협업은 CONTACT 페이지에서 상담해 주세요." : "素材調達、ODM/OEM、日本B2B流通、ブランド協業についてはCONTACTページからご相談ください。"}</p>
            </div>
            <Link className="dh-outline-button" href="/communication/inquiries">CONTACT</Link>
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
