import type { Ingredient } from "@/lib/ingredients";

const SPEC_IDS = new Set(["med01", "med02", "bifido"]);

export function usesSpecLabel(item: Ingredient) {
  return item.specKind === "spec" || SPEC_IDS.has(item.id);
}

export function getIngredientSpecLabel(item: Ingredient, isKorean: boolean) {
  if (usesSpecLabel(item)) {
    return isKorean ? "규격" : "規格";
  }

  return isKorean ? "1일 섭취 기준" : "一日摂取目安";
}
