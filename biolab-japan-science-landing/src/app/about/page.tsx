import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const aboutBlocks = [
  {
    label: "Vision",
    copy:
      "Beyond Functional Healthcare Solutions. BIOLAB Japanは、機能性素材の根拠情報を起点に、日本市場で展開できるヘルスケア事業を設計します。",
  },
  {
    label: "Mission",
    copy:
      "日本の機能性ヘルスケア産業において、韓国R&D、製造、ODM/OEM、ブランド運営をつなぐリーディングカンパニーを目指します。",
  },
  {
    label: "Business",
    copy:
      "韓国側の開発・ソーシング・製造・ブランド管理と、日本側の販売・マーケティング・卸供給・新規事業開拓を接続します。",
  },
];

export default function AboutPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="leading the way for functional healthcare"
          copy="韓国素材開発と日本B2B市場をつなぐ、BIOLAB Japanの事業構造です。"
          image="/images/global-factory-bg.png"
        />
        <section className="dh-content-wrapper">
          <div className="dh-container">
            {aboutBlocks.map((block) => (
              <div className="dh-about-row" key={block.label}>
                <p>{block.label}</p>
                <ul>
                  <li>
                    <span>{block.copy}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="dh-sub-band">
          <div className="dh-sub-bg" style={{ backgroundImage: "url(/images/biolab-global-factory-bg.png)" }} aria-hidden="true" />
          <div className="dh-sub-overlay" aria-hidden="true" />
          <div className="dh-container">
            <h2>A bridge to the future.</h2>
            <p>
              Evidence-backed ingredients,
              <br />
              ODM/OEM planning, and Japan-side B2B growth.
            </p>
            <span>
              BIOLAB Japanは、素材の根拠、商品化、供給、販売ネットワークを一つの流れとして設計します。
            </span>
          </div>
        </section>
        <section className="dh-values-wrapper">
          <div className="dh-container">
            <div className="dh-tech-grid">
              <div>
                <p className="dh-value-title">研究開発</p>
                <p>RESEARCH & DEVELOPMENT</p>
              </div>
              <div>
                <p className="dh-value-title">根拠資料</p>
                <p>EVIDENCE ARCHITECTURE</p>
              </div>
              <div>
                <p className="dh-value-title">事業連携</p>
                <p>GLOBAL BUSINESS BRIDGE</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
