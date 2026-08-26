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
          copy="商品開発に必要な素材と根拠情報です。"
          koTitle="제품"
          koCopy="상품 개발에 필요한 소재와 근거 정보입니다."
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
                      商品の前に、
                      <br />
                      素材と根拠です。
                    </>
                  }
                  ko={
                    <>
                      제품보다 먼저,
                      <br />
                      소재와 근거입니다.
                    </>
                  }
                />
              </h2>
              <p>
                <LocalizedText
                  ja="供給ラインはFunctional ProbioticsとFunctional Nature’s food ingredientsです。"
                  ko="공급 라인은 기능성 프로바이오틱스와 기능성 천연소재입니다."
                />
              </p>
            </div>
            <div className="dh-product-grid dh-product-grid-two">
              {productLinePages.map((group, index) => (
                <article className="dh-product-card" key={group.href}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      index === 0
                        ? "/images/products-microbiome-probiotics-card-v3.webp"
                        : "/images/products-functional-nature-card-v3.webp"
                    }
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="dh-product-shade" aria-hidden="true" />
                  <div className="dh-product-text">
                    <div className="dh-product-copy">
                      <IngredientLineBadge
                        label={group.menuLabel}
                        line={index === 0 ? "Functional Probiotics" : "Nature-derived Ingredients"}
                      />
                      <h3>
                        <LocalizedText
                          ja={group.label}
                          ko={index === 0 ? "기능성 프로바이오틱스" : "기능성 천연소재"}
                        />
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
              description="ラインとカテゴリー別の素材一覧です。"
              items={[...microbiomeProductItems, ...natureProductItems]}
              koDescription="라인과 카테고리별 소재 상세 인덱스입니다."
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
