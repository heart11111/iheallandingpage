"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { IngredientLineBadge } from "@/components/IngredientCategoryBadge";
import { devKoreanLabels, getKoreanIngredient } from "@/lib/devKorean";
import { getIngredientCardImage } from "@/lib/ingredientImages";
import type { Ingredient, IngredientLine } from "@/lib/ingredients";

type LineFilter = "All" | IngredientLine;

type ProductIngredientExplorerProps = {
  items: Ingredient[];
  title: string;
  description: string;
  koTitle?: string;
  koDescription?: string;
};

const lineOptions: Array<{ label: string; value: LineFilter }> = [
  { label: "All", value: "All" },
  { label: "Functional Probiotics", value: "Functional Probiotics" },
  { label: "Functional Nature’s food ingredients", value: "Nature-derived Ingredients" },
];

const individuallyRecognizedProbiotics = new Set(["med01", "med02", "nvp2106", "nvp1702", "nvp1703", "nvp1704"]);

function isIndividuallyRecognized(item: Ingredient) {
  if (individuallyRecognizedProbiotics.has(item.id)) return true;

  const searchable = [...(item.origin ?? []), ...item.evidenceTags, ...(item.healthClaims ?? []), ...(item.featurePoints ?? [])];
  return searchable.some((value) => /個別認定型|개별인정|KFDA/.test(value));
}

function getIngredientHref(item: Ingredient) {
  const base =
    item.line === "Functional Probiotics"
      ? "/products/microbiome-probiotics"
      : "/products/nature-ingredients";

  return `${base}/${item.id}`;
}

function getFilterFallbackScript() {
  return `
(() => {
  const roots = Array.from(document.querySelectorAll("[data-ingredient-filter-root]"));
  if (roots.length === 0) return;

  function sync(root, activeLine, activeCategory) {
    if (root.dataset.reactFilterReady === "true") return;

    const cards = Array.from(root.querySelectorAll("[data-ingredient-card]"));
    const lineButtons = Array.from(root.querySelectorAll("[data-line-filter]"));
    const categoryButtons = Array.from(root.querySelectorAll("[data-category-filter]"));
    const count = root.querySelector("[data-ingredient-count]");
    const visibleCategories = new Set(["All"]);

    cards.forEach((card) => {
      if (activeLine === "All" || card.getAttribute("data-line") === activeLine) {
        visibleCategories.add(card.getAttribute("data-category") || "");
      }
    });

    if (!visibleCategories.has(activeCategory)) activeCategory = "All";

    lineButtons.forEach((button) => {
      const isActive = button.getAttribute("data-line-filter") === activeLine;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    categoryButtons.forEach((button) => {
      const category = button.getAttribute("data-category-filter") || "All";
      const visible = visibleCategories.has(category);
      button.hidden = !visible;
      const isActive = category === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const lineMatch = activeLine === "All" || card.getAttribute("data-line") === activeLine;
      const categoryMatch = activeCategory === "All" || card.getAttribute("data-category") === activeCategory;
      const visible = lineMatch && categoryMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (count) count.textContent = visibleCount + "素材";
    root.dataset.fallbackLine = activeLine;
    root.dataset.fallbackCategory = activeCategory;
  }

  roots.forEach((root) => {
    root.dataset.fallbackLine = root.dataset.fallbackLine || "All";
    root.dataset.fallbackCategory = root.dataset.fallbackCategory || "All";
    sync(root, root.dataset.fallbackLine, root.dataset.fallbackCategory);
  });

  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-line-filter], [data-category-filter]") : null;
    if (!button) return;

    const root = button.closest("[data-ingredient-filter-root]");
    if (!root || root.dataset.reactFilterReady === "true") return;

    event.preventDefault();
    if (button.hasAttribute("data-line-filter")) {
      sync(root, button.getAttribute("data-line-filter") || "All", "All");
    } else {
      sync(root, root.dataset.fallbackLine || "All", button.getAttribute("data-category-filter") || "All");
    }
  });
})();
`;
}

export function ProductIngredientExplorer({ items, title, description, koTitle, koDescription }: ProductIngredientExplorerProps) {
  const { language } = useDevLanguage();
  const [activeLine, setActiveLine] = useState<LineFilter>("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const displayItems = useMemo(() => {
    return language === "ko" ? items.map((item) => getKoreanIngredient(item)) : items;
  }, [items, language]);

  const individuallyRecognizedIds = useMemo(() => {
    return new Set(items.filter((item) => isIndividuallyRecognized(item)).map((item) => item.id));
  }, [items]);

  const displayLineOptions = useMemo(() => {
    return lineOptions.map((option) => ({
      ...option,
      label:
        language === "ko" && option.value !== "All"
          ? devKoreanLabels.line[option.value]
          : language === "ko"
            ? "전체"
            : option.label,
    }));
  }, [language]);

  const visibleCategories = useMemo(() => {
    const next = new Set<string>(["All"]);
    displayItems.forEach((item) => {
      if (activeLine === "All" || item.line === activeLine) {
        next.add(item.category);
      }
    });
    return next;
  }, [activeLine, displayItems]);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(displayItems.map((item) => item.category))).filter((category) => visibleCategories.has(category))];
  }, [displayItems, visibleCategories]);

  const selectedCategory = visibleCategories.has(activeCategory) ? activeCategory : "All";

  const visibleItems = useMemo(() => {
    return displayItems.filter((item) => {
      const lineMatch = activeLine === "All" || item.line === activeLine;
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      return lineMatch && categoryMatch;
    });
  }, [activeLine, displayItems, selectedCategory]);

  function handleLineChange(nextLine: LineFilter) {
    setActiveLine(nextLine);
    setActiveCategory("All");
  }

  useEffect(() => {
    document.querySelectorAll("[data-ingredient-filter-root]").forEach((root) => {
      if (root instanceof HTMLElement) {
        root.dataset.reactFilterReady = "true";
      }
    });
  }, []);

  return (
    <section
      className="dh-ingredient-explorer"
      aria-label="Ingredient detail index"
      data-fallback-category="All"
      data-fallback-line="All"
      data-ingredient-filter-root
    >
      <div className="dh-explorer-head">
        <p className="dh-detail-primary">INGREDIENT INDEX</p>
        <h2>{language === "ko" && koTitle ? koTitle : title}</h2>
        <p>{language === "ko" && koDescription ? koDescription : description}</p>
      </div>

      <div className="dh-filter-stack" aria-label="Product filters">
        <div className="dh-filter-row" aria-label="Product line">
          {displayLineOptions.map((option) => (
            <button
              aria-pressed={activeLine === option.value}
              className={activeLine === option.value ? "is-active" : ""}
              data-line-filter={option.value}
              key={option.value}
              onClick={() => handleLineChange(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="dh-filter-row dh-filter-row-soft" aria-label="Ingredient category">
          {categories.map((option) => (
            <button
              aria-pressed={selectedCategory === option}
              className={selectedCategory === option ? "is-active" : ""}
              data-category-filter={option}
              key={option}
              onClick={() => setActiveCategory(option)}
              type="button"
            >
              {language === "ko" && option === "All" ? "전체" : option}
            </button>
          ))}
        </div>
      </div>

      <div className="dh-ingredient-count" data-ingredient-count>
        {language === "ko" ? `${visibleItems.length}개 소재` : `${visibleItems.length}素材`}
      </div>

      <div className="dh-ingredient-card-grid">
        {visibleItems.map((item) => (
          <Link
            className="dh-ingredient-card"
            data-category={item.category}
            data-ingredient-card
            data-line={item.line}
            href={getIngredientHref(item)}
            key={item.id}
          >
            <Image
              alt=""
              aria-hidden="true"
              height={320}
              loading="eager"
              src={getIngredientCardImage(item.image)}
              width={480}
            />
            <div>
              <div className="dh-ingredient-card-badges">
                <IngredientLineBadge
                  label={
                    item.line === "Functional Probiotics"
                      ? "Functional Probiotics"
                      : "Functional Nature’s food ingredients"
                  }
                  line={item.line}
                />
                {individuallyRecognizedIds.has(item.id) ? (
                  <span className="dh-recognition-chip">{language === "ko" ? "개별인정형" : "個別認定型素材"}</span>
                ) : null}
              </div>
              <h3>{item.name}</h3>
              <strong>{item.area}</strong>
              <span className="dh-ingredient-card-intake">
                <em>{language === "ko" ? "1일 섭취 기준" : "一日摂取目安"}</em>
                {item.intake}
              </span>
              <em className="dh-ingredient-card-cta">
                DETAIL
                <ArrowRight aria-hidden="true" size={12} strokeWidth={3} />
              </em>
            </div>
          </Link>
        ))}
      </div>

      <script dangerouslySetInnerHTML={{ __html: getFilterFallbackScript() }} />
    </section>
  );
}
