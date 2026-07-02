import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { businessPages } from "@/lib/corporate";

export default function BusinessPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Business & Service"
          copy="機能性素材供給、OEM/ODM、Brand Managementを日本市場向けに設計します。"
          koTitle="사업/서비스"
          koCopy="기능성 식품 소재 사업, ODM/OEM & Brand Royalty를 일본 시장 기준으로 설계합니다."
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">BUSINESS & SERVICE</p>
            <h1>
              <LocalizedText ja="事業 & サービス" ko="사업/서비스" />
            </h1>
            <div className="dh-page-card-grid">
              {businessPages.map((page) => (
                <a className="dh-page-card" href={page.href} key={page.href}>
                  <span>{page.menuLabel}</span>
                  <h2>
                    <LocalizedText ja={page.label} ko={page.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={page.summary} ko={page.koSummary} />
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
