import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { natureProductItems } from "@/lib/corporate";

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
      <main>
        <CorporateSubHero title={item.name} copy={item.area} image="/images/biolab-global-factory-bg.png" compact />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">FUNCTIONAL NATURE&apos;S FOOD INGREDIENTS</p>
            <h1>{item.name}</h1>
            <p>{item.summary}</p>
            <IngredientList items={[item]} />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
