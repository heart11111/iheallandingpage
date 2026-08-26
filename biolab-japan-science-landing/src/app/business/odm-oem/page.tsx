import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const steps = [
  {
    num: "01",
    label: "企画設計",
    koLabel: "상품 개발",
    ruby: "Planning",
    body: "対象カテゴリー、摂取量、剤形、販売チャネル、表示の方向です。",
    koBody: "대상 카테고리, 섭취량, 제형, 판매 채널, 표시 방향.",
  },
  {
    num: "02",
    label: "製造連携",
    koLabel: "ODM / OEM 생산",
    ruby: "Manufacturing",
    body: "韓国GMP製造ネットワークで試作、量産、供給条件を合わせます。",
    koBody: "한국 주요 제조사 직납 네트워크로 시제품, 양산, 공급 조건을 맞춥니다.",
  },
  {
    num: "03",
    label: "供給設計",
    koLabel: "수입 / 통관 / 공급",
    ruby: "Supply",
    body: "韓国メーカー直納、輸入・通関、日本の販売会社・メーカー・卸への供給です。",
    koBody: "한국 제조사 직납, 수입·통관, 일본 판매회사·제조사·도매 공급입니다.",
  },
];

export default function OdmOemPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="OEM / ODM Service"
          copy="韓国製造ネットワークで、日本向け商品化に応じています。"
          koTitle="ODM/OEM"
          koCopy="한국 제조 네트워크로 일본 시장용 상품화에 응합니다."
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">OEM / ODM</p>
            <h1>
              <LocalizedText ja="OEM/ODM Service" ko="ODM/OEM" />
            </h1>
            <p>
              <LocalizedText
                ja="素材選定から処方、剤形、製造、供給条件まで対応します。"
                ko="소재 선정부터 처방, 제형, 제조, 공급 조건까지 대응합니다."
              />
            </p>
            <div className="dh-process-list">
              {steps.map((step) => (
                <article key={step.num}>
                  <strong>{step.num}</strong>
                  <span>{step.ruby}</span>
                  <h2>
                    <LocalizedText ja={step.label} ko={step.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={step.body} ko={step.koBody} />
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
