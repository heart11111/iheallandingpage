import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientDetailArticle } from "@/components/CorporateParts";
import { JsonLd } from "@/components/JsonLd";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems } from "@/lib/corporate";
import { koreanIngredientCopy } from "@/lib/devKorean";
import { ingredientProductStructuredData } from "@/lib/structuredData";

export function generateStaticParams() {
  return microbiomeProductItems.map((item) => ({ id: item.id }));
}

export default async function MicrobiomeProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = microbiomeProductItems.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  const koItem = koreanIngredientCopy[item.id];

  return (
    <div className="dh-page">
      <NavBar />
      <JsonLd data={ingredientProductStructuredData(item, `/products/microbiome-probiotics/${item.id}`)} />
      <main>
        <CorporateSubHero
          title={item.name}
          copy={item.area}
          koTitle={koItem?.name || item.name}
          koCopy={koItem?.area}
          image="/images/biolab-cosmetic-science-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <IngredientDetailArticle item={item} />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
