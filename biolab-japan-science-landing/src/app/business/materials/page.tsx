import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems, natureProductItems } from "@/lib/corporate";

const lines = [
  {
    label: "個別認定型プロバイオティクス",
    ruby: "Functional Probiotics",
    copy: "女性、体脂肪、認知、肝臓、鼻、ストレス、腸のコンディションに合わせたプロバイオティクス素材を検討します。",
    href: "/products/microbiome-probiotics",
    items: microbiomeProductItems,
  },
  {
    label: "機能性天然素材",
    ruby: "Functional Nature's Food Ingredients",
    copy: "男性健康、記憶、認知、体脂肪、肌、肝・血糖、免疫などの自然由来機能性素材を提案します。モロシル、発酵紅参、ジンセンベリーなど、韓国の幅広い機能性素材ネットワークへのアクセスもご相談いただけます。",
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
          image="/images/global-evidence-bg.png"
          compact
        />
        <section className="dh-sitemap-section">
          <div className="dh-container">
            <p className="dh-detail-primary">INGREDIENT SUPPLY</p>
            <h1>機能性素材供給</h1>
            <p className="dh-lead-copy">
              BIOLAB Japanは、大韓民国 食品医薬品安全処(KFDA)認証の個別認定型機能性素材の公式供給社として、
              韓国の素材開発・製造ネットワークと日本市場のB2Bニーズを接続し、
              用途別素材、摂取目安、根拠資料、商品化可能性を統合的に検討します。
            </p>
            <div className="dh-supply-tabs">
              {lines.map((line) => (
                <article key={line.label}>
                  <span>{line.ruby}</span>
                  <h2>{line.label}</h2>
                  <p>{line.copy}</p>
                  <ul>
                    {line.items.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                  <a href={line.href}>素材リストを見る</a>
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
