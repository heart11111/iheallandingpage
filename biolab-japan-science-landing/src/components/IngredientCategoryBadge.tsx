import {
  Activity,
  BadgeCheck,
  Brain,
  FlaskConical,
  Mars,
  Moon,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Venus,
  Waves,
  Wind,
} from "lucide-react";
import type { Ingredient, IngredientLine } from "@/lib/ingredients";

type BadgeTone = "probiotics" | "nature" | "category";

function renderCategoryIcon(category: string, line?: IngredientLine) {
  const props = { "aria-hidden": true, size: 15, strokeWidth: 2.4 };

  if (["脳・記憶", "記憶", "認知", "뇌·기억", "기억", "인지"].includes(category)) return <Brain {...props} />;
  if (["ストレス", "스트레스"].includes(category)) return <Moon {...props} />;
  if (["体脂肪", "체지방"].includes(category)) return <TrendingUp {...props} />;
  if (["男性", "남성"].includes(category)) return <Mars {...props} />;
  if (["女性", "여성"].includes(category)) return <Venus {...props} />;
  if (["肝臓", "二日酔い", "간", "숙취"].includes(category)) return <Activity {...props} />;
  if (["免疫", "면역"].includes(category)) return <ShieldCheck {...props} />;
  if (["鼻", "코"].includes(category)) return <Wind {...props} />;
  if (["腸", "장"].includes(category)) return <Waves {...props} />;
  if (["肌", "피부"].includes(category)) return <Sparkles {...props} />;
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
