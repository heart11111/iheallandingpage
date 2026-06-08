import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { partnerRows } from "@/lib/corporate";

export default function RecruitmentPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="BIOLAB Japan."
          copy="素材、商品化、流通をともに展開するパートナーを募集しています。"
          image="/images/biolab-global-factory-bg.png"
          align="right"
        />
        <section className="dh-recruitment-wrapper">
          <div className="dh-container">
            <p className="dh-detail-primary">RECRUITMENT</p>
            <div>
              <h1>Become part of our business network.</h1>
              <span>機能性ヘルスケア事業を日本市場で展開するための提携相談ページです。</span>
              {partnerRows.map(([label, value]) => (
                <section key={label}>
                  <h2>{label}</h2>
                  <p>{value}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
