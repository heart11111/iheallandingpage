import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const visionItems = [
  {
    title: "Vision",
    body: ["韓国の素材開発・製造力と", "日本市場の事業機会をつなぎ、", "信頼されるヘルスケア事業基盤をつくります。"],
    koBody: ["한국과 일본의", "B2B 사업 기회를 연결합니다."],
  },
  {
    title: "Mission",
    body: ["Functional Probiotics、", "自然由来機能性素材、OEM/ODMを", "一体で整理し、製品化までの流れを支えます。"],
    koBody: [
      "Functional Probiotics,",
      "Functional Nature‘s food ingredients,",
      "ODM/OEM & Brand Royalty 등 통합 솔루션을 제공합니다.",
    ],
  },
  {
    title: "Goal",
    body: ["BIOLAB KoreaとBIOLAB Japanの", "ネットワークを活用し、", "エビデンス・品質・供給安定性を備えた", "事業基盤を広げます。"],
    koBody: ["대한민국 식약처(KFDA) 인증", "개별인정형 기능성 소재를", "일본 헬스케어 파트너에게 제공합니다."],
  },
];

export default function VisionPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Vision & Goals"
          copy="Korea to Japan Healthcare Bridgeとして目指す方向性です。"
          koTitle="Vision & Mission"
          koCopy="BIOLAB Japan’s Vision & Mission과 사업 목표입니다."
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">VISION</p>
            <h1>
              <LocalizedText
                ja="Beyond Functional Healthcare Solutions"
                ko={
                  <>
                    한국과 일본의
                    <br />
                    B2B 사업 기회를 연결합니다.
                  </>
                }
              />
            </h1>
            <p className="dh-lead-copy">
              <LocalizedText
                ja={
                  <>
                    BIOLAB Japanは、機能性素材、製品化、ブランド運営、日本市場への導入を接続し、
                    健康機能食品事業における信頼性の高いパートナーとなることを目指します。
                  </>
                }
                ko="BIOLAB Japan은 기능성 식품 원료 사업, ODM/OEM & Brand Royalty, 일본 B2B 유통을 연결해 일본 기능성 헬스케어 산업의 리딩 기업으로 도약하는 것을 목표로 합니다."
              />
            </p>
            <div className="dh-vision-card-grid">
              {visionItems.map((item) => (
                <article className="dh-vision-card" key={item.title}>
                  <span>{item.title}</span>
                  <p>
                    <LocalizedText
                      ja={item.body.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                      ko={item.koBody.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    />
                  </p>
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
