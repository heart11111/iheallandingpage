import { BadgeCheck, FlaskConical, Leaf, Network, ShieldCheck, Sprout, TrendingUp } from "lucide-react";
import type { Ingredient, IngredientLine } from "@/lib/ingredients";

type BadgeTone = "probiotics" | "nature" | "category";

function renderCategoryIcon(category: string, line?: IngredientLine) {
  const props = { "aria-hidden": true, size: 15, strokeWidth: 2.4 };

  if (["脳・記憶", "記憶", "認知", "ストレス"].includes(category)) return <Network {...props} />;
  if (["体脂肪", "男性"].includes(category)) return <TrendingUp {...props} />;
  if (["肝臓", "免疫", "鼻", "女性", "腸"].includes(category)) return <ShieldCheck {...props} />;
  if (category === "肌") return <Leaf {...props} />;
  if (line === "Functional Probiotics") return <FlaskConical {...props} />;
  if (line === "Nature-derived Ingredients") return <Sprout {...props} />;
  return <BadgeCheck {...props} />;
}

function getTone(line?: IngredientLine): BadgeTone {
  if (line === "Functional Probiotics") return "probiotics";
  if (line === "Nature-derived Ingredients") return "nature";
  return "category";
}

export function IngredientCategoryBadge({ category, line }: Pick<Ingredient, "category" | "line">) {
  return (
    <span className={`dh-category-badge is-${getTone(line)}`}>
      {renderCategoryIcon(category, line)}
      <span>{category}</span>
    </span>
  );
}

export function IngredientLineBadge({ line, label }: { line?: IngredientLine; label: string }) {
  return (
    <span className={`dh-category-badge dh-line-badge is-${getTone(line)}`}>
      {line === "Nature-derived Ingredients" ? (
        <Sprout aria-hidden="true" size={15} strokeWidth={2.4} />
      ) : (
        <FlaskConical aria-hidden="true" size={15} strokeWidth={2.4} />
      )}
      <span>{label}</span>
    </span>
  );
}
