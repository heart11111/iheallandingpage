import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";
import { productGroups } from "@/lib/corporate";

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
              <p>BIOLAB Japanの機能性素材、商品化、ブランド協業カテゴリです。</p>
            </div>
            <div className="dh-product-grid">
              {productGroups.slice(0, 3).map((group) => (
                <article className="dh-product-card" key={group.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={group.image} alt="" aria-hidden="true" />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <p className="dh-product-eyebrow">{group.eyebrow}</p>
                    <h3>{group.title}</h3>
                    <strong>{group.subtitle}</strong>
                    <p>{group.description}</p>
                  </div>
                  <a href={`/products/${group.slug}`}>LEARN MORE</a>
                </article>
              ))}
            </div>
            <div className="dh-product-grid dh-product-grid-single">
              {productGroups.slice(3).map((group) => (
                <article className="dh-product-card" key={group.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={group.image} alt="" aria-hidden="true" />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <p className="dh-product-eyebrow">{group.eyebrow}</p>
                    <h3>{group.title}</h3>
                    <strong>{group.subtitle}</strong>
                    <p>{group.description}</p>
                  </div>
                  <a href={`/products/${group.slug}`}>LEARN MORE</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
