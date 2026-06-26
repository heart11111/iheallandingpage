import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { IngredientLineBadge } from "@/components/IngredientCategoryBadge";
import { NavBar } from "@/components/NavBar";
import { ProductIngredientExplorer } from "@/components/ProductIngredientExplorer";
import { microbiomeProductItems, natureProductItems, productLinePages } from "@/lib/corporate";
import { ihealProducts } from "@/lib/ihealProducts";

export default function ProductsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Products"
          copy="iHEALブランドの商品と、製品化を支える機能性素材ラインを紹介します。"
          image="/images/biolab-cosmetic-science-bg.png"
          align="center"
        />
        <section className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title dh-iheal-title">
              <p className="dh-kicker">iHEAL Brand Products</p>
              <h2>日本市場に展開するiHEAL商品ライン</h2>
              <p>
                女性プロバイオティクス、体重管理プロバイオティクス、デリケートゾーンケアを中心に、商品情報を比較しやすい形で整理しています。
              </p>
            </div>

            <div className="dh-iheal-product-list">
              {ihealProducts.map((product) => (
                <article className="dh-iheal-product" id={product.id} key={product.id}>
                  <div className="dh-iheal-product-head">
                    <p>{product.subtitle}</p>
                    <h2>{product.name}</h2>
                  </div>

                  <div className="dh-iheal-product-body">
                    <div className="dh-iheal-product-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={product.image} alt={product.imageAlt} />
                      <dl>
                        {product.specRows.map((row) => (
                          <div key={row.label}>
                            <dt>{row.label}</dt>
                            <dd>{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="dh-iheal-product-copy">
                      <p>{product.summary}</p>

                      <section>
                        <h3>特徴・想定される用途</h3>
                        <ul>
                          {product.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h3>成分・スペック</h3>
                        <div className="dh-iheal-highlight-grid">
                          {product.highlights.map((highlight) => (
                            <div key={highlight.label}>
                              <strong>{highlight.value}</strong>
                              <span>{highlight.label}</span>
                            </div>
                          ))}
                        </div>
                        <p className="dh-iheal-ingredients">{product.ingredients}</p>
                      </section>

                      <section>
                        <h3>実績・使い方</h3>
                        <div className="dh-iheal-badges">
                          {product.badges.map((badge) => (
                            <span key={badge}>{badge}</span>
                          ))}
                        </div>
                      </section>

                      <p className="dh-iheal-note">{product.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="dh-section-title">
              <p className="dh-kicker">Ingredient Supply Lines</p>
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
