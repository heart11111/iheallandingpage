import { notFound } from "next/navigation";
import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { InkCopy } from "@/components/ProductInkObserver";
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

  const ingredientLinkBase =
    group.slug === "probiotics"
      ? "/products/microbiome-probiotics"
      : group.slug === "nature"
        ? "/products/nature-ingredients"
        : undefined;

  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title={group.title}
          copy={group.subtitle}
          koTitle={group.koTitle}
          koCopy={group.koSubtitle}
          image={group.image}
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">
              <LocalizedText ja={group.eyebrow} ko={group.koEyebrow} />
            </p>
            <h1>
              <LocalizedText ja={group.subtitle} ko={group.koSubtitle} />
            </h1>
            <p>
              <InkCopy ja={group.description} ko={group.koDescription} />
            </p>
            {group.items.length ? (
              <IngredientList items={group.items} linkBase={ingredientLinkBase} />
            ) : (
              <div className="dh-process-list">
                {[
                  [
                    "01",
                    "Planning",
                    "企画設計",
                    "상품 기획",
                    "カテゴリー、摂取量、剤形、販売チャネルを整理します。",
                    "카테고리, 섭취량, 제형, 판매 채널을 정리합니다.",
                  ],
                  [
                    "02",
                    "Manufacturing",
                    "製造連携",
                    "제조 연계",
                    "韓国主要メーカーとの製造・量産条件を調整します。",
                    "한국 Major 제조업체 Direct 생산 및 납품 조건을 조율합니다.",
                  ],
                  [
                    "03",
                    "Supply",
                    "供給設計",
                    "공급 설계",
                    "輸入、通関、卸供給、日本側販売導線を事業計画に接続します。",
                    "제조 상품 수입/통관, 도매 공급, 일본 판매 경로를 사업 계획에 연결합니다.",
                  ],
                ].map((row) => (
                  <article key={row[0]}>
                    <strong>{row[0]}</strong>
                    <h2>
                      <LocalizedText ja={row[2]} ko={row[3]} />
                    </h2>
                    <p>
                      <LocalizedText ja={row[4]} ko={row[5]} />
                    </p>
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
