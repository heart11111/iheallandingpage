import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const services = [
  {
    label: "ブランド資産整理",
    ruby: "Brand Asset",
    body: "iHEALブランド運営経験をもとに、商品資料、訴求軸、チャネル別情報を整理します。",
  },
  {
    label: "パートナーシップ",
    ruby: "Partnership",
    body: "販売会社、メーカー、卸、商品企画会社との共同商品化やブランド協業を検討します。",
  },
  {
    label: "市場展開サポート",
    ruby: "Market Support",
    body: "日本市場での導入、商品説明、提案資料、販売ネットワーク拡大を支援します。",
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
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">BRAND MANAGEMENT</p>
            <h1>Brand Management</h1>
            <p>機能性素材、製品資料、販売チャネル、ブランド協業を一体で管理します。</p>
            <div className="dh-process-list">
              {services.map((service, index) => (
                <article key={service.ruby}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{service.ruby}</span>
                  <h2>{service.label}</h2>
                  <p>{service.body}</p>
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
