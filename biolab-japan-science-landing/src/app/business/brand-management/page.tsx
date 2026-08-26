import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const services = [
  {
    label: "ブランド資産整理",
    koLabel: "브랜드 자산 정리",
    ruby: "Brand Asset",
    body: "iHEALブランドの商品資料、訴求、チャネル別情報です。",
    koBody: "iHEAL 브랜드 상품 자료, 소구 포인트, 채널별 정보입니다.",
  },
  {
    label: "パートナーシップ",
    koLabel: "브랜드 협업",
    ruby: "Partnership",
    body: "販売会社、メーカー、卸、商品企画会社との共同商品化、ブランド協業です。",
    koBody: "일본 브랜드 유통사 전용 상품 개발, 공동 상품화, 브랜드 협업입니다.",
  },
  {
    label: "市場展開サポート",
    koLabel: "상품 로열티 사업",
    ruby: "Market Support",
    body: "日本市場での導入、商品説明、提案資料、販売網の拡大です。",
    koBody: "iHEAL 브랜드 상품 로열티, 제안 자료, 판매망 확대입니다.",
  },
];

export default function BrandManagementPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Brand Management"
          copy="iHEALブランドの商品化と市場展開です。"
          koTitle="Brand Royalty"
          koCopy="iHEAL 브랜드 상품화와 일본 시장 전개입니다."
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">BRAND MANAGEMENT</p>
            <h1>
              <LocalizedText ja="Brand Management" ko="Brand Royalty" />
            </h1>
            <p>
              <LocalizedText
                ja="機能性素材、製品資料、販売チャネル、ブランド協業です。"
                ko="기능성 소재, 제품 자료, 판매 채널, iHEAL 브랜드 상품 로열티입니다."
              />
            </p>
            <figure className="dh-brand-royalty-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand-royalty-support.webp"
                alt=""
                aria-hidden="true"
              />
            </figure>
            <div className="dh-process-list">
              {services.map((service, index) => (
                <article key={service.ruby}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{service.ruby}</span>
                  <h2>
                    <LocalizedText ja={service.label} ko={service.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={service.body} ko={service.koBody} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
