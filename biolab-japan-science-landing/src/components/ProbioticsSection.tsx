import { probioticsIngredients } from "@/lib/ingredients";
import { SectionShell } from "./SectionShell";

export function ProbioticsSection() {
  return (
    <SectionShell
      id="probiotics"
      eyebrow="Functional Probiotics Line"
      title="用途別に設計されたプロバイオティクス菌株。"
      copy="各カードはB2B素材情報として、サポート領域、菌株、摂取量、参照資料を控えめな表現で整理しています。"
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
            <div className="abstract-chart" aria-hidden="true">
              <svg viewBox="0 0 180 54">
                <path d="M4 42 C 30 24, 48 36, 70 26 S 112 16, 136 23 S 160 36, 176 13" />
              </svg>
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
