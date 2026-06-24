import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
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
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">COMMUNICATION</p>
            <h1>お問い合わせ</h1>
            <div className="dh-page-card-grid">
              {communicationPages.map((page) => (
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
