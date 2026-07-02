import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { partnerRows } from "@/lib/corporate";

export default function RecruitmentPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="BIOLAB Japan."
          copy="素材、商品化、流通をともに展開するパートナーを募集しています。"
          koTitle="BIOLAB Japan."
          koCopy="소재, 상품화, 유통을 함께 전개할 파트너를 모집합니다."
          image="/images/biolab-global-factory-bg.png"
          align="right"
        />
        <section className="dh-recruitment-wrapper">
          <div className="dh-container">
            <p className="dh-detail-primary">RECRUITMENT</p>
            <div className="dh-recruitment-content">
              <h1>
                <LocalizedText ja="Become part of our business network." ko="BIOLAB Japan의 사업 네트워크에 함께해 주세요." />
              </h1>
              <span className="dh-recruitment-lead">
                <LocalizedText
                  ja="機能性ヘルスケア事業を日本市場で展開するための提携相談ページです。"
                  ko="기능성 헬스케어 사업을 일본 시장에서 전개하기 위한 제휴 상담 페이지입니다."
                />
              </span>
              <div className="dh-recruitment-list">
                {partnerRows.map((row) => (
                  <section key={row.label}>
                    <h2>
                      <LocalizedText ja={row.label} ko={row.koLabel} />
                    </h2>
                    <p>
                      <LocalizedText ja={row.value} ko={row.koValue} />
                    </p>
                  </section>
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
