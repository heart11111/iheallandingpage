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
    koRuby: "Ⅰ. Functional Probiotics line",
    copy: "女性、体脂肪、認知、肝臓、鼻、ストレス、腸のコンディションに合わせたプロバイオティクス素材を検討します。",
    koCopy: "여성 질건강, 체지방 감소, 뇌건강, 코건강, 간건강, 스트레스·수면, 장건강 소재를 인체시험 완료 기준으로 검토합니다.",
    href: "/products/microbiome-probiotics",
    items: microbiomeProductItems,
  },
  {
    label: "機能性天然素材",
    koLabel: "Nature’s food ingredients by Application",
    ruby: "Functional Nature's Food Ingredients",
    koRuby: "Ⅱ. Functional Nature‘s food ingredients Line",
    copy: "男性健康、記憶、認知、体脂肪、肌、肝・血糖、免疫などの自然由来機能性素材を提案します。モロシル、発酵紅参、ジンセンベリーなど、韓国の幅広い機能性素材ネットワークへのアクセスもご相談いただけます。",
    koCopy: "남성 갱년기, 체지방 감소, 인지 개선, 피부보습, 간건강, 홍삼 등 자연 유래 기능성 소재를 제안합니다. 모로오렌지추출물(Morosil), 발효홍삼, 진생베리 등 한국 기능성 소재 네트워크도 상담 가능합니다.",
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
          copy="製品目的に合わせた機能性素材と根拠資料を一緒に検討します。"
          koTitle="기능성 식품 소재 사업"
          koCopy="제품 목적에 맞춘 기능성 소재와 인체시험 완료 근거 자료를 함께 검토합니다."
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">INGREDIENT SUPPLY</p>
            <h1>
              <LocalizedText ja="機能性素材供給" ko="기능성 식품 소재 사업" />
            </h1>
            <p className="dh-lead-copy">
              <LocalizedText
                ja={
                  <>
                    BIOLAB Japanは、大韓民国 食品医薬品安全処(KFDA)認証の個別認定型機能性素材の公式供給社として、
                    韓国の素材開発・製造ネットワークと日本市場のB2Bニーズを接続し、
                    用途別素材、摂取目安、根拠資料、商品化可能性を統合的に検討します。
                  </>
                }
                ko="BIOLAB Japan은 대한민국 식약처(KFDA) 인증 개별인정형 기능성 소재 공식 공급사로서 한국의 소재 개발·제조 네트워크와 일본 시장의 B2B 니즈를 연결합니다."
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
