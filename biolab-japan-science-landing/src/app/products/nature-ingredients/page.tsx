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
          title="機能性天然素材"
          englishTitle="Functional Nature’s food ingredients"
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
            <h1 className="dh-line-title">
              <LocalizedText ja="機能性天然素材" ko={devKoreanPageCopy.nature.title} />
              <small>Functional Nature’s food ingredients</small>
            </h1>
            <p>
              <LocalizedText
                ja="ヒト臨床試験を終えた自然由来の機能性素材10種です。男性の健康・記憶・認知・体脂肪・肌・肝臓・血糖・二日酔い・免疫の用途別に、原料と根拠資料を整理しています。"
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
