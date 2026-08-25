import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const visionItems = [
  {
    title: "Vision",
    koTitle: "비전",
    body: ["韓国の素材開発・製造力と", "日本市場の事業機会をつなぎ、", "信頼されるヘルスケア事業基盤をつくります。"],
    koBody: [
      "한국의 소재 개발·제조력과",
      "일본 시장의 사업 기회를 연결해,",
      "신뢰할 수 있는 헬스케어 사업 기반을 만듭니다.",
    ],
  },
  {
    title: "Mission",
    koTitle: "미션",
    body: ["Functional Probiotics、", "自然由来機能性素材、OEM/ODMを", "一体で整理し、製品化までの流れを支えます。"],
    koBody: [
      "Functional Probiotics,",
      "Functional Nature’s food ingredients,",
      "ODM/OEM & Brand Royalty를",
      "하나로 정리해 제품화까지의 흐름을 지원합니다.",
    ],
  },
  {
    title: "Goal",
    koTitle: "목표",
    body: ["BIOLAB KoreaとBIOLAB Japanの", "ネットワークを活用し、", "エビデンス・品質・供給安定性を備えた", "事業基盤を広げます。"],
    koBody: [
      "BIOLAB Korea와 BIOLAB Japan의",
      "네트워크를 활용해,",
      "근거·품질·공급 안정성을 갖춘",
      "사업 기반을 넓혀 갑니다.",
    ],
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
          koTitle="비전 및 목표"
          koCopy="BIOLAB Japan의 Vision & Mission과 사업 목표입니다."
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
                  <span>
                    <LocalizedText ja={item.title} ko={item.koTitle} />
                  </span>
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
