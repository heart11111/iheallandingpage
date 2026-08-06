"use client";

import { ArrowRight, Globe2, Microscope, Rocket, ShieldCheck, Telescope } from "lucide-react";
import Link from "next/link";
import { CorporateFooter } from "@/components/CorporateParts";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { corporateNews } from "@/lib/corporate";
import { useLenis } from "@/lib/useLenis";
import { useReveal } from "@/lib/useReveal";

// Two evidence-backed ingredient lines lead; ODM/OEM is a service, so it is
// tagged and linked to the real service page rather than the empty
// /products/odm-oem ingredient list.
const featuredCards = [
  {
    kind: "material" as const,
    eyebrow: "Functional Probiotics",
    tag: "ヒト臨床試験完了・7種",
    koTag: "인체적용시험 완료 · 7종",
    title: "Application-specific strain portfolio",
    subtitle: "用途別プロバイオティクス",
    koTitle: "프로바이오틱스 소재",
    koSubtitle: "용도별 7개 영역",
    koDescription: "여성·체지방·인지 등 제품 목적에 맞춰 균주를 검토합니다.",
    // v2 has a "Microbiome Probiotics" wordmark burnt into the photograph, which
    // collided with the card’s own eyebrow and cannot be translated.
    image: "images/products-microbiome-probiotics-card-v3.webp",
    href: "/products/microbiome-probiotics",
  },
  {
    kind: "material" as const,
    eyebrow: "Functional Nature’s food ingredients",
    tag: "ヒト臨床試験完了・10種",
    koTag: "인체적용시험 완료 · 10종",
    title: "Nature-derived functional materials",
    subtitle: "自然由来機能性素材",
    koTitle: "기능성 천연소재",
    koSubtitle: "용도별 10개 영역",
    koDescription: "남성 건강·기억·인지 등 제품 목적에 맞춰 자연 유래 소재를 검토합니다.",
    image: "images/products-functional-nature-card-v2.webp",
    href: "/products/nature-ingredients",
  },
  {
    kind: "service" as const,
    eyebrow: "ODM / OEM",
    tag: "SERVICE",
    koTag: "서비스",
    title: "Market-ready product planning",
    subtitle: "商品化・供給設計",
    koTitle: "ODM/OEM",
    koSubtitle: "상품 개발 및 ODM / OEM 생산",
    koDescription: "한국 제조 네트워크를 바탕으로 제품 기획과 생산을 연결합니다.",
    image: "images/biolab-global-factory-bg.png",
    href: "/business/odm-oem",
  },
];

// Business map, from the corporate deck: Korea supplies and manufactures, Japan
// sells and distributes, and BIOLAB Japan is the link that makes the two work
// as one line.
const businessMapSides = [
  {
    side: "korea",
    region: "KOREA",
    mode: "B2B",
    role: "R&D ・ 製造",
    koRole: "R&D · 제조",
    items: [
      { ja: "素材開発・ソーシング", ko: "소재 개발·소싱" },
      { ja: "直接供給（メーカー直送）", ko: "직접 공급(제조사 직납)" },
      { ja: "生産", ko: "생산" },
      { ja: "ブランド管理", ko: "브랜드 관리" },
    ],
    note: "Together with the best manufacturers",
  },
  {
    side: "japan",
    region: "JAPAN",
    mode: "Commerce",
    role: "販売 ・ 流通",
    koRole: "판매 · 유통",
    items: [
      { ja: "販売・マーケティング", ko: "영업·마케팅" },
      { ja: "供給（販売代理店・メーカー・卸）", ko: "공급(판매사·제조사·도매)" },
      { ja: "販売ネットワークの拡大", ko: "판매 네트워크 확대" },
      { ja: "新規事業の開拓", ko: "신규 사업 개척" },
    ],
  },
];

const techValues = [
  {
    title: "研究開発",
    subtitle: "RESEARCH & DEVELOPMENT",
    copy: "韓国の素材開発、製造、ブランド管理を日本市場向けの事業設計につなげます。",
    koTitle: "연구개발",
    koCopy: "한국의 소재 개발, 제조, 브랜드 관리를 일본 시장용 사업 설계로 연결합니다.",
    href: "/business/materials",
    icon: Microscope,
  },
  {
    title: "根拠資料",
    subtitle: "EVIDENCE ARCHITECTURE",
    copy: "ヒト臨床試験、SCI論文、特許、認証資料を素材別に整理し、B2B提案に活用します。",
    koTitle: "근거 자료",
    koCopy: "인체적용시험, SCI 논문, 특허, 인증 자료를 소재별로 정리해 B2B 제안에 활용합니다.",
    href: "/products",
    icon: ShieldCheck,
  },
  {
    title: "事業連携",
    subtitle: "GLOBAL BUSINESS BRIDGE",
    copy: "日本の販売会社、メーカー、卸、ブランド事業者へ展開できる供給線を構築します。",
    koTitle: "사업 연계",
    koCopy: "일본 판매사, 제조사, 도매, 브랜드 사업자로 확장 가능한 공급선을 구축합니다.",
    href: "/business/odm-oem",
    icon: Globe2,
  },
];

export default function Home() {
  useLenis();
  useReveal();
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
                <span className="dh-hero-line">One-stop Solution</span>
                <span className="dh-hero-line">for Total Healthcare</span>
                <span className="dh-hero-accent">in JAPAN</span>
              </h1>
              <p className="dh-hero-support">
                {isKorean
                  ? "한국의 가능성을 일본 시장으로 연결합니다. 기능성 식품 원료 사업, ODM/OEM & Brand Royalty, 일본 B2B 유통을 이어 일본에서 헬스케어 사업을 여는 비즈니스 브리지 역할을 합니다."
                  : "韓国の可能性を、日本の市場価値へ。機能性素材、製造、ブランド、流通をつなぎ、次のヘルスケア事業をひらくビジネスブリッジです。"}
              </p>
              <div className="dh-hero-actions">
                <Link href="/products">{isKorean ? "소재 보기" : "素材を見る"}</Link>
                <Link href="/contact">{isKorean ? "제휴 상담" : "提携相談"}</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="dh-about dh-vision-section">
          <div className="dh-container">
            <div className="dh-vision-head" data-reveal="">
              <p className="dh-kicker">VISION &amp; MISSION</p>
              <h2>
                BIOLAB Japan&rsquo;s Vision &amp; Mission.
              </h2>
              <p className="dh-vision-lead">
                {isKorean
                  ? "무엇을 목표로 일본 시장에서 사업을 하는지에 대한 BIOLAB Japan의 답입니다."
                  : "BIOLAB Japanが日本市場で何を目指して事業を行うのか、その答えです。"}
              </p>
            </div>
            <div className="dh-vision-cards">
              <article data-kind="vision" data-reveal="0">
                <span className="dh-vision-icon" aria-hidden="true">
                  <Telescope size={22} strokeWidth={1.8} />
                </span>
                <p className="dh-vision-card-label">Vision</p>
                <h3>Beyond Functional Healthcare Solutions</h3>
                <p>
                  {isKorean
                    ? "기능성 소재의 공급을 넘어, 일본 시장에서 헬스케어 사업이 성립하도록 근거·제조·유통을 함께 설계합니다."
                    : "機能性素材を供給するだけでなく、日本市場でヘルスケア事業が成り立つように、エビデンス・製造・流通までを一体で設計します。"}
                </p>
              </article>
              <article data-kind="mission" data-reveal="1">
                <span className="dh-vision-icon" aria-hidden="true">
                  <Rocket size={22} strokeWidth={1.8} />
                </span>
                <p className="dh-vision-card-label">Our Mission</p>
                <h3>Leap to become a leading company for functional healthcare industry in Japan</h3>
                <p>
                  {isKorean
                    ? "일본 기능성 헬스케어 산업을 이끄는 기업으로 도약하는 것이 BIOLAB Japan의 목표입니다."
                    : "日本の機能性ヘルスケア産業をリードする企業へ飛躍することが、BIOLAB Japanの目標です。"}
                </p>
              </article>
            </div>
            <Link className="dh-text-link dh-vision-link" href="/company/vision">
              {isKorean ? "비전 및 목표 보기" : "Vision & Goalsを見る"}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="products" className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <h2>
                It all starts
                <br />
                with the ingredients.
              </h2>
              <p>{isKorean ? "제품을 만들기 전에 대한민국 식약처(KFDA) 인증 개별인정형 기능성 소재와 근거 정보에 집중합니다." : "商品開発の成功を支える素材と根拠情報に集中します。"}</p>
            </div>
            <div className="dh-product-grid">
              {featuredCards.map((card, index) => (
                <article className="dh-product-card" data-kind={card.kind} data-reveal={String(index)} key={card.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt="" aria-hidden="true" />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <span className="dh-product-tag" data-kind={card.kind}>
                      {isKorean ? card.koTag : card.tag}
                    </span>
                    <p className="dh-product-eyebrow">{card.eyebrow}</p>
                    <h3>{isKorean ? card.koTitle : card.title}</h3>
                    <strong>{isKorean ? card.koSubtitle : card.subtitle}</strong>
                    {isKorean && <p>{card.koDescription}</p>}
                  </div>
                  <a href={card.href} aria-label={`${card.title} 詳細`}>
                    {card.kind === "service" ? (isKorean ? "서비스 보기" : "サービスを見る") : "LEARN MORE"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="business-map" className="dh-bizmap">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <p className="dh-kicker">OUR BUSINESS MAP</p>
              <h2>
                Korea to Japan,
                <br />
                one continuous supply line.
              </h2>
              <p>
                {isKorean
                  ? "한국은 개발과 제조를, 일본은 판매와 유통을 맡고, BIOLAB Japan이 그 사이를 이어 하나의 공급선으로 만듭니다."
                  : "韓国が開発と製造を、日本が販売と流通を担い、BIOLAB Japanがその間をつないで一本の供給線にします。"}
              </p>
            </div>

            <div className="dh-bizmap-flow" data-reveal="">
              <div className="dh-bizmap-node" data-side="korea">
                <strong>KOREA</strong>
                <span>{isKorean ? businessMapSides[0].koRole : businessMapSides[0].role}</span>
              </div>
              <div className="dh-bizmap-link" aria-hidden="true">
                <b>B2B</b>
                <i />
              </div>
              <div className="dh-bizmap-node dh-bizmap-hub">
                <strong>
                  BIOLAB
                  <br />
                  Japan
                </strong>
                <span>{isKorean ? "브리지" : "ブリッジ"}</span>
              </div>
              <div className="dh-bizmap-link" aria-hidden="true">
                <b>Commerce</b>
                <i />
              </div>
              <div className="dh-bizmap-node" data-side="japan">
                <strong>JAPAN</strong>
                <span>{isKorean ? businessMapSides[1].koRole : businessMapSides[1].role}</span>
              </div>
            </div>

            <div className="dh-bizmap-panels">
              {businessMapSides.map((group, index) => (
                <article className="dh-bizmap-panel" data-side={group.side} data-reveal={String(index)} key={group.side}>
                  <p className="dh-bizmap-panel-head">
                    <b>{group.mode}</b>
                    <span>{group.region}</span>
                  </p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.ja}>{isKorean ? item.ko : item.ja}</li>
                    ))}
                  </ul>
                  {group.note ? <p className="dh-bizmap-note">&ldquo;{group.note}&rdquo;</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="dh-tech">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <h2>
                Empowering healthcare brands to build
                <br />
                <span>evidence-led growth</span> is what matters to us.
              </h2>
              <p>
                {isKorean
                  ? "더 확실한 소재를 더 넓은 일본 시장 전개로 연결하는 것이 BIOLAB Japan의 가치입니다."
                  : "より確かな素材情報を、より広い市場展開へつなげることがBIOLAB Japanの価値です。"}
              </p>
            </div>
            <div className="dh-tech-grid">
              {techValues.map((item, index) => (
                <article className="dh-tech-item" data-reveal={String(index)} key={item.title}>
                  <item.icon size={62} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{isKorean ? item.koTitle : item.title}</h3>
                  <p className="dh-tech-subtitle">{item.subtitle}</p>
                  <p>{isKorean ? item.koCopy : item.copy}</p>
                  <Link className="dh-tech-link" href={item.href}>
                    LEARN MORE
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="dh-news dh-home-news">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <h2>News</h2>
              <p>{isKorean ? "BIOLAB Japan의 사업 전개, 소재 정보, 제휴 상담 관련 최신 토픽입니다." : "BIOLAB Japanの事業展開、素材情報、提携相談に関する最新トピックです。"}</p>
            </div>
            <div className="dh-topic-grid">
              {corporateNews.map((item, index) => (
                <article className="dh-topic" data-reveal={String(index)} key={item.slug}>
                  {/* Light brand wash only — the previous duotone flattened all
                      three photos into the same washed-out blue. */}
                  <div className="dh-topic-visual" style={{ backgroundImage: `linear-gradient(160deg, rgba(13, 38, 66, 0.34), rgba(65, 171, 225, 0.12)), url(${item.image})` }} />
                  <p className="dh-topic-date">{item.date}</p>
                  <h3>{isKorean ? item.koTitle : item.title}</h3>
                  <p>{isKorean ? item.koSummary : item.summary}</p>
                  <a href="/news">LEARN MORE</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="dh-home-cta">
          <div className="dh-container" data-reveal="">
            <div>
              <p className="dh-kicker">CONTACT US</p>
              <h2>{isKorean ? "기능성 헬스케어 사업 프로젝트를 시작하세요." : "Start a Korea-to-Japan healthcare project."}</h2>
              <p>{isKorean ? "상담 항목: 기능성 식품 원료 사업, ODM/OEM, 일본 B2B 유통, Brand Royalty." : "素材調達、ODM/OEM、日本B2B流通、ブランド協業についてはお問い合わせページからご相談ください。"}</p>
            </div>
            <Link className="dh-outline-button" href="/contact">CONTACT US</Link>
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
