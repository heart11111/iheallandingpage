import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const channels = [
  ["BIOLAB Japan", "日本B2B事業、機能性素材、ODM/OEM、ブランド協業の公式窓口です。", "/communication/inquiries"],
  ["BIOLAB Korea", "韓国側の企業情報と素材・製品ポートフォリオを確認できます。", "https://biolabkr.com/"],
  ["iHEAL Mall", "iHEALブランド商品の購入ページへ移動します。", "https://iheal.co.kr/main/index.php"],
];

export default function ChannelsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Communication Channels"
          copy="BIOLAB Japan、BIOLAB Korea、iHEAL Mallの公式導線です。"
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">CHANNELS</p>
            <h1>コミュニケーションチャネル</h1>
            <div className="dh-page-card-grid">
              {channels.map(([title, body, href]) => (
                <a className="dh-page-card" href={href} key={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <span>CHANNEL</span>
                  <h2>{title}</h2>
                  <p>{body}</p>
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
