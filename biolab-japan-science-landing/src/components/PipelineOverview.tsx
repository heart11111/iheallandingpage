"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import { filterCategories, natureIngredients, probioticsIngredients, type Ingredient } from "@/lib/ingredients";

function IngredientCard({ item, index }: { item: Ingredient; index: number }) {
  const list = item.strains ?? item.origin ?? [];

  return (
    <motion.article
      className="ingredient-card"
      style={{ "--float-index": index } as CSSProperties & Record<string, number>}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28 }}
    >
      <div className="card-meta">
        <span>{item.line}</span>
        <span>{item.category}</span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.summary}</p>
      <dl className="ingredient-specs">
        <div>
          <dt>用途領域</dt>
          <dd>{item.area}</dd>
        </div>
        <div>
          <dt>摂取目安</dt>
          <dd>{item.intake}</dd>
        </div>
        <div>
          <dt>{item.strains ? "菌株 / 素材" : "由来素材"}</dt>
          <dd>{list.slice(0, 2).join(" / ")}</dd>
        </div>
      </dl>
      <div className="tag-row">
        {item.evidenceTags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="section-backdrop-image pipeline-backdrop-image" src="images/biolab-cosmetic-science-bg.png" alt="" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Ingredient Pipeline / Global-ready Portfolio</p>
          <h2>根拠ある素材を、市場別の提案軸へ。</h2>
          <p className="section-copy">
            プロバイオティクスと自然由来機能性素材を、用途、摂取量、エビデンスタグごとに整理し、
            日本から広域B2B展開まで検討しやすい素材ポートフォリオとして見せます。
          </p>
        </div>

        <div className="portfolio-lens" aria-label="Portfolio organization axis">
          <div>
            <span>01</span>
            <strong>Evidence</strong>
            <p>臨床・論文・特許・認証で参照可能な根拠を先に確認します。</p>
          </div>
          <div>
            <span>02</span>
            <strong>Application</strong>
            <p>女性、体脂肪、脳、肝臓、鼻、肌、免疫など用途別に分類します。</p>
          </div>
          <div>
            <span>03</span>
            <strong>Formulation</strong>
            <p>菌株・由来素材・摂取目安を商品設計に落とし込みます。</p>
          </div>
          <div>
            <span>04</span>
            <strong>Market Route</strong>
            <p>日本B2B導入から広域市場展開までの提案軸に接続します。</p>
          </div>
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
            {items.map((item, index) => (
              <IngredientCard item={item} index={index} key={item.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
