import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { IngredientLineBadge } from "@/components/IngredientCategoryBadge";
import { NavBar } from "@/components/NavBar";
import { ProductIngredientExplorer } from "@/components/ProductIngredientExplorer";
import { microbiomeProductItems, natureProductItems, productLinePages } from "@/lib/corporate";

export default function ProductsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Products"
          copy="成功的な商品開発の核となる素材と根拠情報に集中します。"
          image="/images/biolab-cosmetic-science-bg.png"
          align="center"
        />
        <section className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title">
              <h2>
                Before you create the product,
                <br />
                we focus on the ingredients.
              </h2>
              <p>BIOLAB Japanの供給製品ラインは、Microbiome ProbioticsとFunctional Nature&apos;s Food Ingredientsを中心に構成します。</p>
            </div>
            <div className="dh-product-grid dh-product-grid-two">
              {productLinePages.map((group, index) => (
                <article className="dh-product-card" key={group.href}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      index === 0
                        ? "/images/products-microbiome-probiotics-card-v2.webp"
                        : "/images/products-functional-nature-card-v2.webp"
                    }
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <IngredientLineBadge
                      label={group.menuLabel}
                      line={index === 0 ? "Functional Probiotics" : "Nature-derived Ingredients"}
                    />
                    <h3>{group.label}</h3>
                    <strong>{group.items.length}素材</strong>
                    <p>{group.summary}</p>
                  </div>
                  <a href={group.href}>LEARN MORE</a>
                </article>
              ))}
            </div>
            <ProductIngredientExplorer
              description="上部のボタンでラインとカテゴリーを切り替え、各素材の詳細ページへ進めます。"
              items={[...microbiomeProductItems, ...natureProductItems]}
              title="素材別詳細インデックス"
            />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
