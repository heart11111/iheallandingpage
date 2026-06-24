import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
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
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">BUSINESS & SERVICE</p>
            <h1>事業 & サービス</h1>
            <div className="dh-page-card-grid">
              {businessPages.map((page) => (
                <a className="dh-page-card" href={page.href} key={page.href}>
                  <span>{page.menuLabel}</span>
                  <h2>{page.label}</h2>
                  <p>{page.summary}</p>
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
