import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const channels = [
  {
    label: "ビオラボコリア",
    koLabel: "비오랩 코리아",
    ruby: "BIOLAB Korea",
    body: "韓国側の企業情報と素材・製品ポートフォリオを確認できます。",
    koBody: "한국 측 기업 정보와 소재·제품 포트폴리오 페이지입니다.",
    href: "https://biolabkr.com/",
  },
  {
    label: "アイヒールモール",
    koLabel: "아이힐몰",
    ruby: "iHEAL Mall",
    body: "iHEALブランド商品の購入ページへ移動します。",
    koBody: "iHEAL 브랜드 상품 구매 페이지로 이동합니다.",
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
          copy="BIOLAB Korea、iHEAL Mallの公式導線です。"
          koTitle="커뮤니케이션 채널"
          koCopy="BIOLAB Korea, iHEAL Mall 공식 연결 경로입니다."
          image="/images/clinical-platform-hero.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">CHANNELS</p>
            <h1>
              <LocalizedText ja="コミュニケーションチャネル" ko="커뮤니케이션 채널" />
            </h1>
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
                  <h2>
                    <LocalizedText ja={channel.label} ko={channel.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={channel.body} ko={channel.koBody} />
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
