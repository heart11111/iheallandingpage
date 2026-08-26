import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems, natureProductItems } from "@/lib/corporate";
import { getKoreanIngredient } from "@/lib/devKorean";

const lines = [
  {
    label: "個別認定型プロバイオティクス",
    koLabel: "Probiotics Strain by Application",
    ruby: "Functional Probiotics",
    koRuby: "Functional Probiotics",
    copy: "女性、体脂肪、認知、肝臓、鼻、ストレス、腸向けのプロバイオティクス素材です。",
    koCopy: "여성, 체지방, 인지, 간, 코, 스트레스, 장 용도의 인체적용시험 완료 프로바이오틱스입니다.",
    href: "/products/microbiome-probiotics",
    items: microbiomeProductItems,
  },
  {
    label: "機能性天然素材",
    koLabel: "Nature’s food ingredients by Application",
    ruby: "Functional Nature’s food ingredients",
    koRuby: "Functional Nature’s food ingredients",
    copy: "男性健康、記憶、認知、体脂肪、肌、肝・血糖、免疫などの自然由来機能性素材です。モロシル、発酵紅参、ジンセンベリーなど、掲載以外の韓国素材も相談できます。",
    koCopy: "남성 건강, 기억, 인지, 체지방, 피부, 간·혈당, 면역 등의 자연 유래 기능성 소재입니다. 모로실, 발효홍삼, 진생베리 등 게재 외 한국 소재도 상담할 수 있습니다.",
    href: "/products/nature-ingredients",
    items: natureProductItems,
  },
];

export default function MaterialsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Functional Ingredient Supply"
          copy="製品目的に合わせた機能性素材と根拠資料です。"
          koTitle="기능성 식품 원료 사업"
          koCopy="제품 목적에 맞춘 기능성 소재와 인체적용시험 근거입니다."
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">INGREDIENT SUPPLY</p>
            <h1>
              <LocalizedText ja="機能性素材供給" ko="기능성 식품 원료 사업" />
            </h1>
            <p className="dh-lead-copy">
              <LocalizedText
                ja={
                  <>
                    大韓民国食品医薬品安全処(KFDA)認証の個別認定型機能性素材を供給します。
                    用途別素材、摂取目安、根拠資料、商品化の相談に応じています。
                  </>
                }
                ko="대한민국 식약처(KFDA) 인증 개별인정형 기능성 소재를 공급합니다. 용도별 소재, 섭취 기준, 근거 자료, 상품화 상담에 응합니다."
              />
            </p>
            <div className="dh-supply-tabs">
              {lines.map((line) => (
                <article key={line.label}>
                  <span>
                    <LocalizedText ja={line.ruby} ko={line.koRuby} />
                  </span>
                  <h2>
                    <LocalizedText ja={line.label} ko={line.koLabel} />
                  </h2>
                  <p>
                    <LocalizedText ja={line.copy} ko={line.koCopy} />
                  </p>
                  <ul>
                    {line.items.map((item) => {
                      const koItem = getKoreanIngredient(item);
                      return (
                        <li key={item.id}>
                          <LocalizedText ja={item.name} ko={koItem.name} />
                        </li>
                      );
                    })}
                  </ul>
                  <a href={line.href}>
                    <LocalizedText ja="素材リストを見る" ko="소재 리스트 보기" />
                  </a>
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
