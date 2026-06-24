import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const goals = [
  ["Vision", "韓国の機能性素材、製造、ブランド運営と日本のB2B市場をつなぐヘルスケア事業ブリッジを構築します。"],
  ["Goal 01", "Microbiome Probioticsと自然由来機能性素材を、日本市場の製品企画に合わせて整理します。"],
  ["Goal 02", "ODM/OEM、ブランド協業、販売会社向け供給を一体で設計し、事業化の速度を高めます。"],
  ["Goal 03", "エビデンス、品質、供給安定性を重視し、長期的に信頼されるパートナーを目指します。"],
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
            <h1>ビジョン及び目標</h1>
            <div className="dh-process-list">
              {goals.map(([title, body]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <h2>{title}</h2>
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
