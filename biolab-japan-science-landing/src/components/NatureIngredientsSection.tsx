import { natureIngredients } from "@/lib/ingredients";
import { SectionShell } from "./SectionShell";

export function NatureIngredientsSection() {
  return (
    <SectionShell
      id="nature"
      eyebrow="Functional Nature‘s food ingredients Line"
      title="自然由来機能性素材のポートフォリオ。"
      copy="男性健康、記憶、体脂肪、肌、肝臓、免疫など、日本市場向けの商品企画に活用できる素材群です。"
      dark
    >
      <div className="sheet-grid">
        {natureIngredients.map((item) => (
          <article className="ingredient-sheet" key={item.id}>
            <div className="sheet-top">
              <span>{item.category}</span>
              <span>{item.intake}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <div>
              <h4>Origin ingredient</h4>
              <ul>
                {(item.origin ?? []).map((origin) => (
                  <li key={origin}>{origin}</li>
                ))}
              </ul>
            </div>
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
