import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientDetailArticle } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems } from "@/lib/corporate";

export function generateStaticParams() {
  return microbiomeProductItems.map((item) => ({ id: item.id }));
}

export default async function MicrobiomeProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = microbiomeProductItems.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero title={item.name} copy={item.area} image="/images/biolab-cosmetic-science-bg.png" compact />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">MICROBIOME PROBIOTICS</p>
            <h1>{item.name}</h1>
            <p>{item.summary}</p>
            <IngredientDetailArticle item={item} />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
