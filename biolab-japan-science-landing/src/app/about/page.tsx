import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { ceoMessage } from "@/lib/corporate";

const aboutBlocks = [
  {
    label: "Vision",
    copy: "機能性素材の根拠を起点に、日本でヘルスケア事業を進めます。",
    koCopy: "기능성 소재의 근거를 출발점으로, 일본에서 헬스케어 사업을 진행합니다.",
  },
  {
    label: "Mission",
    copy: "韓国のR&D・製造と、日本の販売・商談をつなぎます。",
    koCopy: "한국의 R&D·제조와 일본의 판매·상담을 잇습니다.",
  },
  {
    label: "Business",
    copy: "韓国側の開発・製造・ブランド管理と、日本側の販売・卸・新規事業をつなぎます。",
    koCopy: "한국 측 개발·제조·브랜드 관리와 일본 측 판매·도매·신규 사업을 잇습니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Korea to Japan"
          copy="韓国の素材開発と、日本のB2B市場をつなぎます。"
          koTitle="Korea to Japan"
          koCopy="한국 소재 개발과 일본 B2B 시장을 잇습니다."
          image="/images/global-factory-bg.png"
          compact
        />
        <section className="dh-about-overview">
          <div className="dh-container dh-about-overview-grid">
            <div className="dh-about-overview-heading">
              <p className="dh-kicker">ABOUT BIOLAB JAPAN</p>
              <h2>
                <LocalizedText ja="根拠、素材、日本市場。" ko="근거, 소재, 일본 시장." />
              </h2>
            </div>
            <div className="dh-about-overview-copy">
              <p>
                <LocalizedText
                  ja={
                    <>
                      BIOLAB Japanは、韓国の機能性素材開発・製造・ブランド運営と、
                      日本の販売会社・メーカー・卸をつなぐB2B窓口です。
                    </>
                  }
                  ko="BIOLAB Japan은 한국의 기능성 소재 개발·제조·브랜드 운영과 일본의 판매회사·제조사·도매를 잇는 B2B 창구입니다."
                />
              </p>
              <div className="dh-about-card-grid">
                {aboutBlocks.map((block, index) => (
                  <article className="dh-about-card" key={block.label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{block.label}</h3>
                    <p>
                      <LocalizedText ja={block.copy} ko={block.koCopy} />
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="dh-ceo-message">
          <div className="dh-container dh-ceo-message-grid">
            <aside className="dh-ceo-message-aside">
              <div className="dh-ceo-message-label">
                <LocalizedText ja="会社紹介" ko="회사소개" />
                <span>(Company Overview)</span>
              </div>
              <blockquote>
                <LocalizedText
                  ja={
                    <>
                      {ceoMessage.quoteJa.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </>
                  }
                  ko={
                    <>
                      {ceoMessage.quoteKo.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </>
                  }
                />
              </blockquote>
            </aside>
            <div className="dh-ceo-message-copy">
              <p className="dh-kicker">CEO MESSAGE</p>
              <h2>
                <LocalizedText ja="代表取締役 ご挨拶" ko="대표이사 인사말" />
              </h2>
              <div>
                {ceoMessage.paragraphs.map((paragraph) => (
                  <p key={paragraph.ja}>
                    <LocalizedText ja={paragraph.ja} ko={paragraph.ko} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="dh-sub-band">
          <div className="dh-sub-bg" style={{ backgroundImage: "url(/images/biolab-global-factory-bg.png)" }} aria-hidden="true" />
          <div className="dh-sub-overlay" aria-hidden="true" />
          <div className="dh-container">
            <h2>
              <LocalizedText ja="素材から、日本の販路へ。" ko="소재에서 일본 판로로." />
            </h2>
            <p>
              <LocalizedText ja="根拠資料のある機能性素材," ko="근거 자료가 있는 기능성 소재," />
              <br />
              <LocalizedText ja="ODM/OEM、日本B2B流通。" ko="ODM/OEM, 일본 B2B 유통." />
            </p>
            <span>
              <LocalizedText
                ja="素材の根拠、商品化、供給、販売を扱います。"
                ko="소재 근거, 상품화, 공급, 판매를 다룹니다."
              />
            </span>
          </div>
        </section>
        <section className="dh-values-wrapper">
          <div className="dh-container">
            <div className="dh-tech-grid">
              <div>
                <p className="dh-value-title">
                  <LocalizedText ja="研究開発" ko="연구개발" />
                </p>
                <p>RESEARCH & DEVELOPMENT</p>
              </div>
              <div>
                <p className="dh-value-title">
                  <LocalizedText ja="根拠資料" ko="근거 자료" />
                </p>
                <p>EVIDENCE ARCHITECTURE</p>
              </div>
              <div>
                <p className="dh-value-title">
                  <LocalizedText ja="事業連携" ko="사업 연계" />
                </p>
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
