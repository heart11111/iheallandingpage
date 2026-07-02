import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { communicationPages } from "@/lib/corporate";

export default function CommunicationPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Communication"
          copy="カタログ確認、顧客問い合わせ、公式チャネルを案内します。"
          koTitle="문의사항"
          koCopy="E-카탈로그, 고객 문의, 공식 커뮤니케이션 채널을 안내합니다."
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">COMMUNICATION</p>
            <h1>
              <LocalizedText ja="お問い合わせ" ko="문의사항" />
            </h1>
            <div className="dh-page-card-grid">
              {communicationPages.map((page) => (
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
