import { evidenceItems } from "@/lib/ingredients";
import { SectionShell } from "./SectionShell";

export function EvidenceDashboard() {
  return (
    <SectionShell
      id="evidence"
      eyebrow="Evidence Dashboard"
      title="エビデンス主導のポートフォリオ設計。"
      copy="数値を誇張せず、資料内で参照されている臨床、論文、特許、認証、ODM/OEM対応をB2Bの検討項目として整理します。"
    >
      <div className="evidence-grid">
        {evidenceItems.map((item) => (
          <article className="evidence-card" key={item.title}>
            <p>{item.label}</p>
            <h3>{item.title}</h3>
            <strong>{item.value}</strong>
          </article>
        ))}
        <article className="evidence-card evidence-feature">
          <p>Bifidobacterium Probiotics source reference</p>
          <h3>Bifidobacterium evidence cluster</h3>
          <div className="evidence-numbers">
            <span>
              <b>10</b>
              human clinical trials
            </span>
            <span>
              <b>80</b>
              international patents
            </span>
            <span>
              <b>260</b>
              SCI papers
            </span>
          </div>
        </article>
        <article className="evidence-visual-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="images/clinical-platform-hero.png" alt="機能性素材と臨床研究を表現したカプセル型ビジュアル" />
          <div>
            <p>Clinical platform visual</p>
            <h3>素材情報を、研究・処方・供給の文脈で見せる。</h3>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
