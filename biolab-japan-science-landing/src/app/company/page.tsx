import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { companyPages } from "@/lib/corporate";

export default function CompanyPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Company Overview"
          copy="BIOLAB Japanのメッセージ、ビジョン、事業目標を紹介します。"
          image="/images/global-factory-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">COMPANY OVERVIEW</p>
            <h1>会社紹介</h1>
            <div className="dh-page-card-grid">
              {companyPages.map((page) => (
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
