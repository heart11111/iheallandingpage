import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { ceoMessage } from "@/lib/corporate";

export default function GreetingPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="CEO Message"
          copy="BIOLAB Japanの代表ご挨拶です。"
          koTitle="대표이사 인사말"
          koCopy="BIOLAB Japan 대표 인사말입니다."
          image="/images/global-factory-bg.png"
          compact
        />
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
      </main>
      <CorporateFooter />
    </div>
  );
}
