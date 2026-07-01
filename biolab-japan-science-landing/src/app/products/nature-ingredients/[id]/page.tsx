import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientDetailArticle } from "@/components/CorporateParts";
import { JsonLd } from "@/components/JsonLd";
import { NavBar } from "@/components/NavBar";
import { natureProductItems } from "@/lib/corporate";
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

  return (
    <div className="dh-page">
      <NavBar />
      <JsonLd data={ingredientProductStructuredData(item, `/products/nature-ingredients/${item.id}`)} />
      <main>
        <CorporateSubHero title={item.name} copy={item.area} image="/images/biolab-global-factory-bg.png" compact />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">FUNCTIONAL NATURE&apos;S FOOD INGREDIENTS</p>
            <IngredientDetailArticle item={item} />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
