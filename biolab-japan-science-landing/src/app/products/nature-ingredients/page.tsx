import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { natureProductItems } from "@/lib/corporate";

export default function NatureIngredientsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Functional Nature's Food Ingredients"
          copy="自然由来機能性素材の全体リストです。"
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">PRODUCTS</p>
            <h1>Functional Nature&apos;s Food Ingredients</h1>
            <p>男性健康、記憶、認知、体脂肪、肌、肝・血糖、免疫の7カテゴリを素材別に確認できます。</p>
            <IngredientList items={natureProductItems} linkBase="/products/nature-ingredients" />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
