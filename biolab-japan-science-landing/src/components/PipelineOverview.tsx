"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { filterCategories, natureIngredients, probioticsIngredients, type Ingredient } from "@/lib/ingredients";

function IngredientCard({ item }: { item: Ingredient }) {
  const list = item.strains ?? item.origin ?? [];

  return (
    <motion.article className="ingredient-card" layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.28 }}>
      <div className="card-meta">
        <span>{item.line}</span>
        <span>{item.category}</span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.summary}</p>
      <div className="mini-chart" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <dl>
        <div>
          <dt>Area</dt>
          <dd>{item.area}</dd>
        </div>
        <div>
          <dt>Intake basis</dt>
          <dd>{item.intake}</dd>
        </div>
      </dl>
      <div className="tag-row">
        {item.evidenceTags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="strain-line">{list.slice(0, 3).join(" / ")}</p>
    </motion.article>
  );
}

export function PipelineOverview() {
  const [line, setLine] = useState<"all" | "probiotics" | "nature">("all");
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    const base =
      line === "probiotics"
        ? probioticsIngredients
        : line === "nature"
          ? natureIngredients
          : [...probioticsIngredients, ...natureIngredients];
    if (filter === "All") return base;
    return base.filter((item) => item.category === filter || item.area.includes(filter));
  }, [filter, line]);

  return (
    <section id="pipeline" className="pipeline-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Ingredient Pipeline</p>
          <h2>ヘルスファンクショナル素材パイプライン。</h2>
          <p className="section-copy">
            プロバイオティクスと自然由来機能性素材を、用途、摂取量、エビデンスタグごとに整理しました。
          </p>
        </div>

        <div className="pipeline-controls" aria-label="Ingredient filters">
          <div className="segmented">
            <button className={line === "all" ? "active" : ""} type="button" onClick={() => setLine("all")}>
              All
            </button>
            <button className={line === "probiotics" ? "active" : ""} type="button" onClick={() => setLine("probiotics")}>
              Functional Probiotics
            </button>
            <button className={line === "nature" ? "active" : ""} type="button" onClick={() => setLine("nature")}>
              Nature-derived
            </button>
          </div>
          <div className="filter-strip">
            {filterCategories.map((category) => (
              <button className={filter === category ? "active" : ""} key={category} type="button" onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="ingredient-grid" layout>
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <IngredientCard item={item} key={item.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
