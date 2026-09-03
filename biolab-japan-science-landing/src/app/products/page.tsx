import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
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
          copy="商品開発の成功を支える素材と根拠情報に集中します。"
          koTitle="제품"
          koCopy="성공적인 상품 개발의 핵심이 되는 소재와 근거 정보입니다."
          image="/images/biolab-cosmetic-science-bg.png"
          align="center"
        />
        <section className="dh-products">
          <div className="dh-container">
            <div className="dh-section-title">
              <p className="dh-kicker">Ingredient Supply Lines</p>
              <h2>
                <LocalizedText
                  ja={
                    <>
                      商品をつくる前に、
                      <br />
                      素材と根拠が先です。
                    </>
                  }
                  ko={
                    <>
                      제품을 만들기 전에,
                      <br />
                      소재와 근거가 먼저입니다.
                    </>
                  }
                />
              </h2>
              <p>
                <LocalizedText
                  ja="BIOLAB Japanの供給製品ラインは、機能性プロバイオティクスと機能性天然素材を中心に構成します。"
                  ko="BIOLAB Japan의 공급 제품 라인은 기능성 프로바이오틱스와 기능성 천연소재를 중심으로 구성합니다."
                />
              </p>
            </div>
            <div className="dh-product-grid dh-product-grid-two">
              {productLinePages.map((group, index) => (
                <article className="dh-product-card" key={group.href}>
                  <a className="dh-product-card-catalog" href={group.href}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        index === 0
                          ? "/images/products-microbiome-probiotics-card-v3.webp"
                          : "/images/products-functional-nature-card-v3.webp"
                      }
                      alt=""
                    />
                  </a>
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <div className="dh-product-copy">
                      <LocalizedText
                        ja={
                          <IngredientLineBadge
                            label={group.menuLabel}
                            line={index === 0 ? "Functional Probiotics" : "Nature-derived Ingredients"}
                          />
                        }
                        ko={
                          <IngredientLineBadge
                            label={group.koLabel}
                            line={index === 0 ? "Functional Probiotics" : "Nature-derived Ingredients"}
                          />
                        }
                      />
                      <h3>
                        <LocalizedText ja={group.label} ko={group.koLabel} />
                      </h3>
                      <strong>
                        <LocalizedText
                          ja={`${group.items.length}素材・ヒト臨床試験完了`}
                          ko={`${group.items.length}개 소재 · 인체적용시험 완료`}
                        />
                      </strong>
                      <p>
                        <LocalizedText ja={group.summary} ko={group.koSummary} />
                      </p>
                    </div>
                    <a href={group.href}>
                      <LocalizedText ja="ラインを見る" ko="라인 상세 보기" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <ProductIngredientExplorer
              description="プロバイオティクスと天然素材、用途別に絞り込めます。カードから各素材の詳細へ進めます。"
              items={[...microbiomeProductItems, ...natureProductItems]}
              koDescription="프로바이오틱스와 천연소재, 용도별로 골라 볼 수 있습니다. 카드를 누르면 소재 상세로 갑니다."
              koTitle="소재별 상세 인덱스"
              title="素材別詳細インデックス"
            />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
