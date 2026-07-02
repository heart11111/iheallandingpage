import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const services = [
  {
    label: "ブランド資産整理",
    koLabel: "브랜드 자산 정리",
    ruby: "Brand Asset",
    body: "iHEALブランド運営経験をもとに、商品資料、訴求軸、チャネル別情報を整理します。",
    koBody: "iHEAL 브랜드 운영 경험을 바탕으로 상품 자료, 소구 축, 채널별 정보를 정리합니다.",
  },
  {
    label: "パートナーシップ",
    koLabel: "브랜드 협업",
    ruby: "Partnership",
    body: "販売会社、メーカー、卸、商品企画会社との共同商品化やブランド協業を検討します。",
    koBody: "일본 내 브랜드 유통사 전용 상품 개발과 공동 상품화, 브랜드 협업을 검토합니다.",
  },
  {
    label: "市場展開サポート",
    koLabel: "상품 로열티 사업",
    ruby: "Market Support",
    body: "日本市場での導入、商品説明、提案資料、販売ネットワーク拡大を支援します。",
    koBody: "iHEAL 브랜드 사용에 대한 상품 로열티 사업, 제안 자료, 판매 네트워크 확대를 지원합니다.",
  },
];

export default function BrandManagementPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Brand Management"
          copy="iHEALブランド運営経験を、パートナー向け商品化と市場展開に接続します。"
          koTitle="Brand Royalty"
          koCopy="iHEAL 브랜드 운영 경험을 파트너 상품화와 일본 시장 전개에 연결합니다."
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
                ja="機能性素材、製品資料、販売チャネル、ブランド協業を一体で管理します。"
                ko="기능성 소재, 제품 자료, 판매 채널, iHEAL 브랜드 사용에 대한 상품 로열티 사업을 일체형으로 관리합니다."
              />
            </p>
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
