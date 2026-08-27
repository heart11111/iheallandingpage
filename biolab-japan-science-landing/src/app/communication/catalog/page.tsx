import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const catalogItems = [
  {
    label: "機能性プロバイオティクス",
    koLabel: "기능성 프로바이오틱스",
    ruby: "Functional Probiotics",
    body: "用途別プロバイオティクス7種の素材情報を確認できます。",
    koBody: "용도별 프로바이오틱스 7종의 소재 정보를 확인할 수 있습니다.",
    href: "/products/microbiome-probiotics",
  },
  {
    label: "機能性天然素材",
    koLabel: "기능성 천연소재",
    ruby: "Functional Nature’s food ingredients",
    body: "自然由来機能性素材10種の素材情報を確認できます。",
    koBody: "자연 유래 기능성 소재 10종의 소재 정보를 확인할 수 있습니다.",
    href: "/products/nature-ingredients",
  },
  {
    label: "OEM/ODMサービス",
    koLabel: "ODM/OEM",
    ruby: "OEM/ODM Service",
    body: "商品化、製造、供給条件の相談導線を確認できます。",
    koBody: "상품화, 제조, 공급 조건과 iHEAL 브랜드 사용에 대한 상품 로열티 사업 상담 경로입니다.",
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
          koCopy="기능성 식품 원료 사업, ODM/OEM, Brand Royalty 검토에 필요한 정보를 안내합니다."
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
