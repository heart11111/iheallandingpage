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
          <img src="images/biolab-global-factory-bg.png" alt="機能性素材の品質管理とグローバル供給を表現したビジュアル" />
          <div>
            <p>Quality / Factory / Global Route</p>
            <h3>公信性から製造品質、そして広域市場への導線を見せる。</h3>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
