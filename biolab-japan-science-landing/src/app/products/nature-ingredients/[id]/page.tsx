import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientDetailArticle } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { JsonLd } from "@/components/JsonLd";
import { NavBar } from "@/components/NavBar";
import { natureProductItems } from "@/lib/corporate";
import { devKoreanPageCopy, koreanIngredientCopy } from "@/lib/devKorean";
import { ingredientProductStructuredData } from "@/lib/structuredData";

export function generateStaticParams() {
  return natureProductItems.map((item) => ({ id: item.id }));
}

export default async function NatureIngredientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = natureProductItems.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  const koItem = koreanIngredientCopy[item.id];

  return (
    <div className="dh-page">
      <NavBar />
      <JsonLd data={ingredientProductStructuredData(item, `/products/nature-ingredients/${item.id}`)} />
      <main>
        <CorporateSubHero
          title={item.name}
          copy={item.area}
          koTitle={koItem?.name || item.name}
          koCopy={koItem?.area}
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">
              <LocalizedText ja="FUNCTIONAL NATURE'S FOOD INGREDIENTS" ko={devKoreanPageCopy.detailPrimary.nature} />
            </p>
            <h1>
              <LocalizedText ja={item.name} ko={koItem?.name || item.name} />
            </h1>
            <p>
              <LocalizedText ja={item.summary} ko={koItem?.summary || item.summary} />
            </p>
            <IngredientDetailArticle item={item} />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
