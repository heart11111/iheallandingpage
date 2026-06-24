import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const channels = [
  {
    label: "ビオラボジャパン",
    ruby: "BIOLAB Japan",
    body: "日本B2B事業、機能性素材、ODM/OEM、ブランド協業の公式窓口です。",
    href: "/communication/inquiries",
  },
  {
    label: "ビオラボコリア",
    ruby: "BIOLAB Korea",
    body: "韓国側の企業情報と素材・製品ポートフォリオを確認できます。",
    href: "https://biolabkr.com/",
  },
  {
    label: "アイヒールモール",
    ruby: "iHEAL Mall",
    body: "iHEALブランド商品の購入ページへ移動します。",
    href: "https://iheal.co.kr/main/index.php",
  },
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
              {channels.map((channel) => (
                <a
                  className="dh-page-card"
                  href={channel.href}
                  key={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>{channel.ruby}</span>
                  <h2>{channel.label}</h2>
                  <p>{channel.body}</p>
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
