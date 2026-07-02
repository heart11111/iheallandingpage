import { CorporateFooter, CorporateSubHero, IngredientList } from "@/components/CorporateParts";
import { LocalizedText } from "@/components/DevLanguageProvider";
import { NavBar } from "@/components/NavBar";
import { microbiomeProductItems } from "@/lib/corporate";
import { devKoreanPageCopy } from "@/lib/devKorean";

export default function MicrobiomeProbioticsPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="Functional Probiotics"
          copy="用途別プロバイオティクス素材の全体リストです。"
          koTitle={devKoreanPageCopy.microbiome.title}
          koCopy={devKoreanPageCopy.microbiome.copy}
          image="/images/biolab-cosmetic-science-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">
              <LocalizedText ja="PRODUCTS" ko={devKoreanPageCopy.microbiome.primary} />
            </p>
            <h1>
              <LocalizedText ja="Microbiome Probiotics" ko={devKoreanPageCopy.microbiome.title} />
            </h1>
            <p>
              <LocalizedText
                ja="女性、体脂肪、認知、肝臓、鼻、ストレス、腸の7カテゴリを素材別に確認できます。"
                ko={devKoreanPageCopy.microbiome.lead}
              />
            </p>
            <IngredientList items={microbiomeProductItems} linkBase="/products/microbiome-probiotics" />
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
