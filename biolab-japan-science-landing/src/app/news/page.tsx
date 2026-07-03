import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { corporateNews } from "@/lib/corporate";

export default function NewsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="News"
          copy="BIOLAB Japanの事業展開、素材情報、提携相談に関する最新トピックです。"
          koTitle="뉴스"
          koCopy="BIOLAB Japan의 사업 전개, 기능성 식품 원료 사업, 제휴 상담 관련 최신 토픽입니다."
          image="/images/global-evidence-bg.png"
          align="center"
        />
        <section className="dh-news-page">
          <div className="dh-container">
            <p className="dh-detail-primary">NEWS</p>
            <h1>
              <LocalizedText ja="Recent topics" ko="최근 소식" />
            </h1>
            <div className="dh-news-board">
              {corporateNews.map((item) => (
                <article key={item.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" aria-hidden="true" />
                  <div>
                    <p>{item.date}</p>
                    <h2>
                      <LocalizedText ja={item.title} ko={item.koTitle} />
                    </h2>
                    <span>
                      <LocalizedText ja={item.summary} ko={item.koSummary} />
                    </span>
                    <a href="/communication/inquiries">LEARN MORE</a>
                  </div>
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
