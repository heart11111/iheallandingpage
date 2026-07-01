import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const catalogItems = [
  {
    label: "個別認定型プロバイオティクス",
    ruby: "Functional Probiotics",
    body: "用途別プロバイオティクス7種の素材情報を確認できます。",
    href: "/products/microbiome-probiotics",
  },
  {
    label: "機能性天然素材",
    ruby: "Functional Nature's Food Ingredients",
    body: "自然由来機能性素材10種の素材情報を確認できます。",
    href: "/products/nature-ingredients",
  },
  {
    label: "OEM/ODMサービス",
    ruby: "OEM/ODM Service",
    body: "商品化、製造、供給条件の相談導線を確認できます。",
    href: "/business/odm-oem",
  },
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
              {catalogItems.map((item) => (
                <a className="dh-page-card" href={item.href} key={item.href}>
                  <span>{item.ruby}</span>
                  <h2>{item.label}</h2>
                  <p>{item.body}</p>
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
