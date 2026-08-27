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
          copy="適時開示と報道です。"
          koTitle="뉴스"
          koCopy="공시와 보도입니다."
          image="/images/global-evidence-bg.png"
          align="center"
        />
        <section className="dh-news-page">
          <div className="dh-container">
            <p className="dh-detail-primary">NEWS</p>
            <h1>
              <LocalizedText ja="お知らせ" ko="소식" />
            </h1>
            <div className="dh-news-board">
              {corporateNews.map((item) => (
                <article key={item.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" aria-hidden="true" />
                  <div>
                    <p>
                      {item.date}
                      {" · "}
                      <LocalizedText ja={item.source} ko={item.koSource} />
                    </p>
                    <h2>
                      <LocalizedText ja={item.title} ko={item.koTitle} />
                    </h2>
                    <span>
                      <LocalizedText ja={item.summary} ko={item.koSummary} />
                    </span>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <LocalizedText ja="記事を見る" ko="기사 보기" />
                    </a>
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
