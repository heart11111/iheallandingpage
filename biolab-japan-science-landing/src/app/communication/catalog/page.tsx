import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const catalogItems = [
  {
    label: "個別認定型プロバイオティクス",
    koLabel: "Probiotics Strain by Application",
    ruby: "Functional Probiotics",
    body: "用途別プロバイオティクス7種の素材情報を確認できます。",
    koBody: "여성 질건강, 체지방 감소, 뇌건강 등 7종의 Probiotics Strain 정보를 확인할 수 있습니다.",
    href: "/products/microbiome-probiotics",
  },
  {
    label: "機能性天然素材",
    koLabel: "Nature’s food ingredients by Application",
    ruby: "Functional Nature's Food Ingredients",
    body: "自然由来機能性素材10種の素材情報を確認できます。",
    koBody: "남성 갱년기, 체지방 감소, 인지 개선, 피부보습 등 자연 유래 기능성 소재 정보를 확인할 수 있습니다.",
    href: "/products/nature-ingredients",
  },
  {
    label: "OEM/ODMサービス",
    koLabel: "ODM/OEM & Brand Royalty",
    ruby: "OEM/ODM Service",
    body: "商品化、製造、供給条件の相談導線を確認できます。",
    koBody: "상품화, 제조, 공급 조건과 iHEAL 브랜드 사용에 대한 상품 로열티 사업 상담 도선을 확인할 수 있습니다.",
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
          koTitle="E-카탈로그"
          koCopy="기능성 식품 소재 사업, ODM/OEM & Brand Royalty 검토에 필요한 정보를 정리합니다."
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">E-CATALOG</p>
            <h1>
              <LocalizedText ja="E-Catalog" ko="E-카탈로그" />
            </h1>
            <div className="dh-page-card-grid">
              {catalogItems.map((item) => (
                <a className="dh-page-card" href={item.href} key={item.href}>
                  <span>{item.ruby}</span>
                  <h2>
                    <LocalizedText ja={item.label} ko={item.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={item.body} ko={item.koBody} />
                  </p>
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
