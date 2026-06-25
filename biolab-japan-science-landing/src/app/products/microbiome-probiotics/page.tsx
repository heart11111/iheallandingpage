import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems } from "@/lib/corporate";

export default function MicrobiomeProbioticsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Microbiome Probiotics"
          copy="用途別プロバイオティクス素材の全体リストです。"
          image="/images/biolab-cosmetic-science-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">PRODUCTS</p>
            <h1>Microbiome Probiotics</h1>
            <p>女性、体脂肪、認知、肝臓、鼻、ストレス、腸の7カテゴリを素材別に確認できます。</p>
            <IngredientList items={microbiomeProductItems} linkBase="/products/microbiome-probiotics" />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
