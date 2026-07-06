import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { natureProductItems } from "@/lib/corporate";
import { devKoreanPageCopy } from "@/lib/devKorean";

export default function NatureIngredientsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Functional Nature‘s food ingredients"
          copy="自然由来機能性素材の全体リストです。"
          koTitle={devKoreanPageCopy.nature.title}
          koCopy={devKoreanPageCopy.nature.copy}
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">
              <LocalizedText ja="PRODUCTS" ko={devKoreanPageCopy.nature.primary} />
            </p>
            <h1>
              <LocalizedText ja="Functional Nature‘s food ingredients" ko={devKoreanPageCopy.nature.title} />
            </h1>
            <p>
              <LocalizedText
                ja="男性健康、記憶、認知、体脂肪、肌、肝・血糖、免疫の7カテゴリを素材別に確認できます。"
                ko={devKoreanPageCopy.nature.lead}
              />
            </p>
            <IngredientList items={natureProductItems} linkBase="/products/nature-ingredients" />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
