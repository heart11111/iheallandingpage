import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
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
          image="/images/global-evidence-bg.png"
          align="center"
        />
        <section className="dh-news-page">
          <div className="dh-container">
            <p className="dh-detail-primary">NEWS</p>
            <h1>Recent topics</h1>
            <div className="dh-news-board">
              {corporateNews.map((item) => (
                <article key={item.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" aria-hidden="true" />
                  <div>
                    <p>{item.date}</p>
                    <h2>{item.title}</h2>
                    <span>{item.summary}</span>
                    <a href="/contact">LEARN MORE</a>
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
