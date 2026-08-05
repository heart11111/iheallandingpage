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
          copy="カタログ確認と公式チャネルを案内します。開発のご相談はCONTACT USからお問い合わせください。"
          koTitle="자료 및 채널"
          koCopy="E-카탈로그와 공식 커뮤니케이션 채널입니다. 개발 상담은 CONTACT US에서 문의해 주세요."
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">COMMUNICATION</p>
            <h1>
              <LocalizedText ja="資料 & チャネル" ko="자료 및 채널" />
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
