"use client";

import { ArrowRight, Globe2, Microscope, Rocket, ShieldCheck, Telescope } from "lucide-react";
import Link from "next/link";
import { CorporateFooter } from "@/components/CorporateParts";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { corporateNews } from "@/lib/corporate";
import { useLenis } from "@/lib/useLenis";
import { useReveal } from "@/lib/useReveal";

// News is temporarily hidden until real press articles are ready.
// Flip this back to `true` to restore the homepage News section instantly.
const SHOW_NEWS = false;

// Business map section is temporarily hidden. Flip to `true` to restore.
const SHOW_BUSINESS_MAP = false;

// Two evidence-backed ingredient lines lead; ODM/OEM is a service, so it is
// tagged and linked to the real service page rather than the empty
// /products/odm-oem ingredient list.
const featuredCards = [
  {
    kind: "material" as const,
    eyebrow: "Functional Probiotics",
    tag: "ヒト臨床試験完了・7種",
    koTag: "인체적용시험 완료 · 7종",
    title: "用途別プロバイオティクス",
    subtitle: "7種",
    description: "女性・体脂肪・認知など、製品目的に合わせた菌株です。",
    koTitle: "프로바이오틱스 소재",
    koSubtitle: "용도별 7종",
    koDescription: "여성·체지방·인지 등 제품 목적에 맞춘 균주입니다.",
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
    title: "自然由来機能性素材",
    subtitle: "10種",
    description: "男性健康・記憶・認知など、製品目的に合わせた自然由来素材です。",
    koTitle: "기능성 천연소재",
    koSubtitle: "용도별 10종",
    koDescription: "남성 건강·기억·인지 등 제품 목적에 맞춘 자연 유래 소재입니다.",
    image: "images/products-functional-nature-card-v2.webp",
    href: "/products/nature-ingredients",
  },
  {
    kind: "service" as const,
    eyebrow: "ODM / OEM",
    tag: "SERVICE",
    koTag: "서비스",
    title: "ODM / OEM",
    subtitle: "商品化・供給",
    description: "韓国の製造ネットワークで、製品企画と生産を進めます。",
    koTitle: "ODM/OEM",
    koSubtitle: "상품 개발 및 ODM/OEM 생산",
    koDescription: "한국 제조 네트워크로 제품 기획과 생산을 진행합니다.",
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
    note: "",
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
    copy: "韓国の素材開発、製造、ブランド管理を、日本市場向けの事業に合わせます。",
    koTitle: "연구개발",
    koCopy: "한국의 소재 개발, 제조, 브랜드 관리를 일본 시장 사업에 맞춥니다.",
    href: "/business/materials",
    icon: Microscope,
  },
  {
    title: "根拠資料",
    subtitle: "EVIDENCE",
    copy: "ヒト臨床試験、SCI論文、特許、認証資料を素材別に整理し、B2B提案に使います。",
    koTitle: "근거 자료",
    koCopy: "인체적용시험, SCI 논문, 특허, 인증 자료를 소재별로 정리해 B2B 제안에 사용합니다.",
    href: "/products",
    icon: ShieldCheck,
  },
  {
    title: "事業連携",
    subtitle: "BUSINESS",
    copy: "日本の販売会社、メーカー、卸、ブランド事業者向けの供給です。",
    koTitle: "사업 연계",
    koCopy: "일본 판매사, 제조사, 도매, 브랜드 사업자 대상 공급입니다.",
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
              <p className="dh-hero-kicker">BIOLAB JAPAN</p>
              <h1>
                {isKorean ? (
                  <>
                    <span className="dh-hero-line">한국의 기능성 소재를</span>
                    <span className="dh-hero-accent">일본 B2B로</span>
                  </>
                ) : (
                  <>
                    <span className="dh-hero-line">韓国の機能性素材を</span>
                    <span className="dh-hero-accent">日本のB2Bへ</span>
                  </>
                )}
              </h1>
              <p className="dh-hero-support">
                {isKorean
                  ? "기능성 소재, 제조, 브랜드, 유통을 다루는 일본 현지법인입니다."
                  : "機能性素材、製造、ブランド、流通を扱う日本現地法人です。"}
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
                {isKorean ? "비전과 미션" : "ビジョンとミッション"}
              </h2>
              <p className="dh-vision-lead">
                {isKorean ? "일본 시장에서 지향하는 사업 방향입니다." : "日本市場で目指す事業の方向です。"}
              </p>
            </div>
            <div className="dh-vision-cards">
              <article data-kind="vision" data-reveal="0">
                <span className="dh-vision-icon" aria-hidden="true">
                  <Telescope size={22} strokeWidth={1.8} />
                </span>
                <p className="dh-vision-card-label">{isKorean ? "비전" : "Vision"}</p>
                <h3>
                  {isKorean ? "소재, 근거, 제조, 유통" : "素材、根拠、製造、流通"}
                </h3>
                <p>
                  {isKorean
                    ? "기능성 소재만이 아니라, 근거·제조·유통까지 일본 사업에 맞춥니다."
                    : "機能性素材だけでなく、根拠・製造・流通まで日本の事業に合わせます。"}
                </p>
              </article>
              <article data-kind="mission" data-reveal="1">
                <span className="dh-vision-icon" aria-hidden="true">
                  <Rocket size={22} strokeWidth={1.8} />
                </span>
                <p className="dh-vision-card-label">{isKorean ? "미션" : "Our Mission"}</p>
                <h3>
                  {isKorean ? "일본에서 사업을 넓히는 것" : "日本で事業を広げること"}
                </h3>
                <p>
                  {isKorean
                    ? "일본 기능성 헬스케어 시장에서 사업을 넓히는 것이 목표입니다."
                    : "日本の機能性ヘルスケア市場で事業を広げることが目標です。"}
                </p>
              </article>
            </div>
            <Link className="dh-text-link dh-vision-link" href="/company/vision">
              {isKorean ? "비전 및 목표 보기" : "ビジョンと目標を見る"}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="products" className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <h2>
                {isKorean ? (
                  <>
                    제품보다 먼저,
                    <br />
                    소재와 근거입니다.
                  </>
                ) : (
                  <>
                    商品の前に、
                    <br />
                    素材と根拠です。
                  </>
                )}
              </h2>
              <p>{isKorean ? "상품 개발에 필요한 소재와 근거 정보입니다." : "商品開発に必要な素材と根拠情報です。"}</p>
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
                    <p>{isKorean ? card.koDescription : card.description}</p>
                  </div>
                  <a href={card.href} aria-label={isKorean ? `${card.koTitle} 상세` : `${card.title} 詳細`}>
                    {card.kind === "service"
                      ? isKorean
                        ? "서비스 보기"
                        : "サービスを見る"
                      : isKorean
                        ? "자세히 보기"
                        : "詳しく見る"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {SHOW_BUSINESS_MAP && (
        <section id="business-map" className="dh-bizmap">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <p className="dh-kicker">OUR BUSINESS MAP</p>
              <h2>
                {isKorean ? (
                  <>
                    한국에서 일본으로,
                    <br />
                    하나의 연속된 공급선.
                  </>
                ) : (
                  <>
                    Korea to Japan,
                    <br />
                    one continuous supply line.
                  </>
                )}
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
                <span>{isKorean ? "창구" : "窓口"}</span>
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
        )}

        <section id="technology" className="dh-tech">
          <div className="dh-container">
            <div className="dh-section-title" data-reveal="">
              <h2>
                {isKorean ? (
                  <>
                    근거 자료가 있는 소재를
                    <br />
                    일본 시장으로.
                  </>
                ) : (
                  <>
                    根拠資料のある素材を、
                    <br />
                    日本市場へ。
                  </>
                )}
              </h2>
              <p>
                {isKorean ? "소재 정보와 시장 전개입니다." : "素材情報と市場展開です。"}
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
                    {isKorean ? "자세히 보기" : "詳しく見る"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {SHOW_NEWS && (
          <section id="news" className="dh-news dh-home-news">
            <div className="dh-container">
              <div className="dh-section-title" data-reveal="">
                <h2>News</h2>
                <p>{isKorean ? "BIOLAB Japan의 사업 전개, 소재 정보, 제휴 상담입니다." : "BIOLAB Japanの事業展開、素材情報、提携相談です。"}</p>
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
                    <a href="/news">{isKorean ? "자세히 보기" : "詳しく見る"}</a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="contact" className="dh-home-cta">
          <div className="dh-container" data-reveal="">
            <div>
              <p className="dh-kicker">CONTACT US</p>
              <h2>{isKorean ? "소재, ODM/OEM, 일본 유통 상담" : "素材、ODM/OEM、日本流通のご相談"}</h2>
              <p>{isKorean ? "기능성 식품 원료, ODM/OEM, 일본 B2B 유통, Brand Royalty." : "機能性素材、ODM/OEM、日本B2B流通、ブランド協業。"}</p>
            </div>
            <Link className="dh-outline-button" href="/contact">CONTACT US</Link>
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
