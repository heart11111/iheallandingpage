import { probioticsIngredients } from "@/lib/ingredients";
import { SectionShell } from "./SectionShell";

export function ProbioticsSection() {
  return (
    <SectionShell
      id="probiotics"
      eyebrow="Functional Probiotics line"
      title="菌株を、訴求ではなく検討順で整理する。"
      copy="装飾的なチャートではなく、用途領域、根拠タイプ、菌株構成、摂取目安の順にB2B検討情報を読み取れる構成です。"
    >
      <div className="deep-card-grid">
        {probioticsIngredients.map((item) => (
          <article className="deep-card" key={item.id}>
            <div className="card-meta">
              <span>{item.category}</span>
              <span>{item.intake}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>

            <div className="evidence-flow" aria-label={`${item.name} information structure`}>
              <div>
                <span>01</span>
                <strong>用途領域</strong>
                <p>{item.area}</p>
              </div>
              <div>
                <span>02</span>
                <strong>根拠タイプ</strong>
                <p>{item.evidenceTags.slice(0, 2).join(" / ")}</p>
              </div>
              <div>
                <span>03</span>
                <strong>菌株構成</strong>
                <p>{(item.strains ?? []).slice(0, 2).join(" / ")}</p>
              </div>
              <div>
                <span>04</span>
                <strong>摂取目安</strong>
                <p>{item.intake}</p>
              </div>
            </div>

            <h4>Strain portfolio</h4>
            <ul>
              {(item.strains ?? []).map((strain) => (
                <li key={strain}>{strain}</li>
              ))}
            </ul>
            <div className="tag-row">
              {item.evidenceTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
