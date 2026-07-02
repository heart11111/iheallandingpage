import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";

const steps = [
  {
    num: "01",
    label: "企画設計",
    koLabel: "상품 개발",
    ruby: "Planning",
    body: "対象カテゴリー、摂取量、剤形、販売チャネル、表示表現の方向性を整理します。",
    koBody: "일본 내 브랜드 유통사 전용 상품 개발을 위해 대상 카테고리, 섭취량, 제형, 판매 채널을 정리합니다.",
  },
  {
    num: "02",
    label: "製造連携",
    koLabel: "ODM / OEM 생산",
    ruby: "Manufacturing",
    body: "韓国GMP製造ネットワークと連携し、試作、量産、供給条件を調整します。",
    koBody: "한국 Major 제조업체 Direct 생산 및 납품 네트워크와 연계해 시제품, 양산, 공급 조건을 조율합니다.",
  },
  {
    num: "03",
    label: "供給設計",
    koLabel: "수입 / 통관 / 공급",
    ruby: "Supply",
    body: "韓国Major製造業者からの直接生産・納品、製造商品の輸入・通関、日本側の販売会社・メーカー・卸に合わせた供給導線を設計します。",
    koBody: "제조 상품 수입/통관부터 일본 판매회사, 제조사, 도매에 맞춘 공급 도선을 설계합니다.",
  },
];

export default function OdmOemPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="OEM / ODM Service"
          copy="韓国製造ネットワークを活用し、日本市場向けの商品化を支援します。"
          koTitle="ODM/OEM & Brand Royalty"
          koCopy="한국 제조 네트워크를 활용해 일본 시장용 상품화와 브랜드 로열티 사업을 지원합니다."
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">OEM / ODM</p>
            <h1>
              <LocalizedText ja="OEM/ODM Service" ko="ODM/OEM & Brand Royalty" />
            </h1>
            <p>
              <LocalizedText
                ja="素材選定から処方、剤形、製造、供給条件までを事業化の流れとして設計します。"
                ko="소재 선정부터 처방, 제형, 제조, 공급 조건까지 BIOLAB Japan 소재를 활용한 건강기능식품 완제품 개발 및 유통 흐름으로 설계합니다."
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
