import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const visionItems = [
  [
    "Vision",
    "機能性ヘルスケアソリューションを超えて、韓国の素材開発・製造力と日本市場の事業機会をつなぐ信頼性の高い基準をつくります。",
  ],
  [
    "Mission",
    "Functional Probiotics、自然由来機能性素材、OEM/ODM、ブランド協業を一つの流れとして整理し、パートナーの製品化可能性を高めます。",
  ],
  [
    "Goal",
    "BIOLAB KoreaとBIOLAB Japanのネットワークを活用し、エビデンス、品質、供給安定性を備えた日韓ヘルスケア事業基盤を拡張します。",
  ],
];

export default function VisionPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Vision & Goals"
          copy="Korea to Japan Healthcare Bridgeとして目指す方向性です。"
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">VISION</p>
            <h1>Beyond Functional Healthcare Solutions</h1>
            <p className="dh-lead-copy">
              BIOLAB Japanは、機能性素材、製品化、ブランド運営、日本市場への導入を接続し、
              健康機能食品事業における信頼性の高いパートナーとなることを目指します。
            </p>
            <div className="dh-vision-card-grid">
              {visionItems.map(([title, body]) => (
                <article className="dh-vision-card" key={title}>
                  <span>{title}</span>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
