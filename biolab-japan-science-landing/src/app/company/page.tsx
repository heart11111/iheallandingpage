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
          copy="代表ご挨拶と、ビジョン・目標です。"
          koTitle="회사 소개"
          koCopy="대표 인사말과 비전·목표입니다."
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
