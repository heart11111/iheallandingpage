"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IngredientLineBadge } from "@/components/IngredientCategoryBadge";
import type { Ingredient, IngredientLine } from "@/lib/ingredients";

type LineFilter = "All" | IngredientLine;

type ProductIngredientExplorerProps = {
  items: Ingredient[];
  title: string;
  description: string;
};

const lineOptions: Array<{ label: string; value: LineFilter }> = [
  { label: "All", value: "All" },
  { label: "Functional Probiotics", value: "Functional Probiotics" },
  { label: "Functional Nature's Food Ingredients", value: "Nature-derived Ingredients" },
];

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

export function ProductIngredientExplorer({ items, title, description }: ProductIngredientExplorerProps) {
  const [activeLine, setActiveLine] = useState<LineFilter>("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleCategories = useMemo(() => {
    const next = new Set<string>(["All"]);
    items.forEach((item) => {
      if (activeLine === "All" || item.line === activeLine) {
        next.add(item.category);
      }
    });
    return next;
  }, [activeLine, items]);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(items.map((item) => item.category))).filter((category) => visibleCategories.has(category))];
  }, [items, visibleCategories]);

  const selectedCategory = visibleCategories.has(activeCategory) ? activeCategory : "All";

  const visibleItems = useMemo(() => {
    return items.filter((item) => {
      const lineMatch = activeLine === "All" || item.line === activeLine;
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      return lineMatch && categoryMatch;
    });
  }, [activeLine, items, selectedCategory]);

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
    <section className="dh-ingredient-explorer" aria-label="Ingredient detail index" data-ingredient-filter-root>
      <div className="dh-explorer-head">
        <p className="dh-detail-primary">INGREDIENT INDEX</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="dh-filter-stack" aria-label="Product filters">
        <div className="dh-filter-row" aria-label="Product line">
          {lineOptions.map((option) => (
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
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="dh-ingredient-count" data-ingredient-count>
        {visibleItems.length}素材
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
            <Image alt="" aria-hidden="true" height={320} src={item.image} width={480} />
            <div>
              <IngredientLineBadge
                label={item.line === "Functional Probiotics" ? "FUNCTIONAL PROBIOTICS" : "FUNCTIONAL NATURE'S FOOD INGREDIENTS"}
                line={item.line}
              />
              <h3>{item.name}</h3>
              <strong>{item.area}</strong>
              <span>{item.intake}</span>
              <em>DETAIL</em>
            </div>
          </Link>
        ))}
      </div>

      <script dangerouslySetInnerHTML={{ __html: getFilterFallbackScript() }} />
    </section>
  );
}
