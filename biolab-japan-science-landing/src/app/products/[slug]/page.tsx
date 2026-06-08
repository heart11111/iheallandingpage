import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { getProductGroup, productGroups } from "@/lib/corporate";

export function generateStaticParams() {
  return productGroups.map((group) => ({ slug: group.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = getProductGroup(slug);

  if (!group) {
    notFound();
  }

  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero title={group.title} copy={group.description} image={group.image} />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">{group.eyebrow}</p>
            <h1>{group.title}</h1>
            <span>{group.subtitle}</span>
            <p>{group.description}</p>
            {group.items.length ? (
              <IngredientList items={group.items} />
            ) : (
              <div className="dh-process-list">
                {[
                  ["01", "Planning", "カテゴリー、摂取量、剤形、販売チャネルを整理します。"],
                  ["02", "Manufacturing", "韓国主要メーカーとの製造・量産条件を調整します。"],
                  ["03", "Supply", "輸入、通関、卸供給、日本側販売導線を事業計画に接続します。"],
                ].map((row) => (
                  <article key={row[0]}>
                    <strong>{row[0]}</strong>
                    <h2>{row[1]}</h2>
                    <p>{row[2]}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
