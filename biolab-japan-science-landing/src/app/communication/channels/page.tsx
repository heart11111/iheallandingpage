import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const channels = [
  {
    label: "ビオラボジャパン",
    koLabel: "비오랩 재팬",
    ruby: "BIOLAB Japan",
    body: "日本B2B事業、機能性素材、ODM/OEM、ブランド協業の公式窓口です。",
    koBody: "일본 B2B 사업, 기능성 식품 소재 사업, ODM/OEM & Brand Royalty 공식 창구입니다.",
    href: "/communication/inquiries",
  },
  {
    label: "ビオラボコリア",
    koLabel: "비오랩 코리아",
    ruby: "BIOLAB Korea",
    body: "韓国側の企業情報と素材・製品ポートフォリオを確認できます。",
    koBody: "한국 측 기업 정보와 소재·제품 포트폴리오를 확인할 수 있습니다.",
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
          copy="BIOLAB Japan、BIOLAB Korea、iHEAL Mallの公式導線です。"
          koTitle="커뮤니케이션 채널"
          koCopy="BIOLAB Japan, BIOLAB Korea, iHEAL Mall 공식 연결 경로입니다."
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
