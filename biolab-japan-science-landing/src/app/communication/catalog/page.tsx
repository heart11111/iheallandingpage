import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const catalogItems = [
  ["Microbiome Probiotics", "用途別プロバイオティクス7カテゴリの素材情報を確認できます。", "/products/microbiome-probiotics"],
  ["Functional Nature's Food Ingredients", "自然由来機能性素材7カテゴリの素材情報を確認できます。", "/products/nature-ingredients"],
  ["OEM/ODM Service", "商品化、製造、供給条件の相談導線を確認できます。", "/business/odm-oem"],
];

export default function CatalogPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="E-Catalog"
          copy="素材供給、OEM/ODM、ブランド協業の検討に必要な情報をまとめます。"
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">E-CATALOG</p>
            <h1>E-Catalog</h1>
            <div className="dh-page-card-grid">
              {catalogItems.map(([title, body, href]) => (
                <a className="dh-page-card" href={href} key={title}>
                  <span>CATALOG</span>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
