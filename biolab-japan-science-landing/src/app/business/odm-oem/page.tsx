import { CorporateFooter, CorporateSubHero } from "@/components/CorporateParts";
import { NavBar } from "@/components/NavBar";

const steps = [
  ["01", "Planning", "対象カテゴリー、摂取量、剤形、販売チャネル、表示表現の方向性を整理します。"],
  ["02", "Manufacturing", "韓国GMP製造ネットワークと連携し、試作、量産、供給条件を調整します。"],
  ["03", "Supply", "日本側の販売会社、メーカー、卸に合わせた輸入・通関・供給導線を設計します。"],
];

export default function OdmOemPage() {
  return (
    <div className="dh-page">
      <NavBar />
      <main>
        <CorporateSubHero
          title="OEM / ODM Service"
          copy="韓国製造ネットワークを活用し、日本市場向けの商品化を支援します。"
          image="/images/biolab-global-factory-bg.png"
          compact
        />
        <section className="dh-product-detail">
          <div className="dh-container">
            <p className="dh-detail-primary">OEM / ODM</p>
            <h1>OEM/ODM Service</h1>
            <p>素材選定から処方、剤形、製造、供給条件までを事業化の流れとして設計します。</p>
            <div className="dh-process-list">
              {steps.map(([num, title, body]) => (
                <article key={num}>
                  <strong>{num}</strong>
                  <h2>{title}</h2>
                  <p>{body}</p>
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
