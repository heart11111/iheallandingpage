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
              <LocalizedText ja="Functional Probiotics" ko={devKoreanPageCopy.microbiome.title} />
            </h1>
            <p>
              <LocalizedText
                ja="ヒト臨床試験を終えた個別認定型プロバイオティクス7種です。女性・体脂肪・認知・肝臓・鼻・ストレス・腸の用途別に、菌株と根拠資料（ヒト臨床試験・SCI論文・特許）を整理しています。"
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
