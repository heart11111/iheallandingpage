import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const catalogItems = [
  {
    label: "個別認定型プロバイオティクス",
    koLabel: "Probiotics Strain by Application",
    ruby: "Functional Probiotics",
    body: "用途別プロバイオティクス7種の素材情報を確認できます。",
    koBody: "질내 마이크로바이옴, 체지방·항비만, 인지·기억, 간건강, 면역 과민반응에 따른 코 상태, 스트레스·수면·릴랙스, 장건강·배변활동 영역의 Probiotics Strain 7종을 확인할 수 있습니다.",
    href: "/products/microbiome-probiotics",
  },
  {
    label: "機能性天然素材",
    koLabel: "Nature’s food ingredients by Application",
    ruby: "Functional Nature’s food ingredients",
    body: "自然由来機能性素材10種の素材情報を確認できます。",
    koBody: "남성 갱년기·남성 건강, 기억·인지 기능, 노화 관련 인지기능, 다이어트·체지방, 피부 수분·탄력, 주름·보습, 간·혈당 건강, 알코올 대사 지원, 면역기능 영역의 Nature’s food ingredients 10종을 확인할 수 있습니다.",
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
          copy="素材供給、OEM/ODM、ブランド協業の資料です。"
          koTitle="E-카탈로그"
          koCopy="기능성 식품 원료, ODM/OEM, Brand Royalty 자료입니다."
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
