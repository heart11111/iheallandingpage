import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
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
          koTitle="회사 소개"
          koCopy="BIOLAB Japan의 메시지, Vision & Mission, 사업 목표를 소개합니다."
          image="/images/global-factory-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">COMPANY OVERVIEW</p>
            <h1>
              <LocalizedText ja="会社紹介" ko="회사 소개" />
            </h1>
            <div className="dh-page-card-grid">
              {companyPages.map((page) => (
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
