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
      </div>
    </SectionShell>
  );
}
