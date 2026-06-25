import Image from "next/image";
import Link from "next/link";
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
  { label: "Microbiome Probiotics", value: "Functional Probiotics" },
  { label: "Nature Ingredients", value: "Nature-derived Ingredients" },
];

function getIngredientHref(item: Ingredient) {
  const base =
    item.line === "Functional Probiotics"
      ? "/products/microbiome-probiotics"
      : "/products/nature-ingredients";

  return `${base}/${item.id}`;
}

function getFilterScript() {
  return `
(() => {
  const root = document.currentScript.closest(".dh-ingredient-explorer");
  if (!root) return;

  const cards = Array.from(root.querySelectorAll("[data-ingredient-card]"));
  const lineButtons = Array.from(root.querySelectorAll("[data-line-filter]"));
  const categoryButtons = Array.from(root.querySelectorAll("[data-category-filter]"));
  const count = root.querySelector("[data-ingredient-count]");
  let activeLine = "All";
  let activeCategory = "All";

  function markActive(buttons, attr, value) {
    buttons.forEach((button) => {
      const isActive = button.getAttribute(attr) === value;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyFilter() {
    const visibleCategories = new Set(["All"]);
    cards.forEach((card) => {
      if (activeLine === "All" || card.getAttribute("data-line") === activeLine) {
        visibleCategories.add(card.getAttribute("data-category"));
      }
    });

    if (!visibleCategories.has(activeCategory)) activeCategory = "All";

    categoryButtons.forEach((button) => {
      const category = button.getAttribute("data-category-filter");
      button.hidden = !visibleCategories.has(category);
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const lineMatch = activeLine === "All" || card.getAttribute("data-line") === activeLine;
      const categoryMatch = activeCategory === "All" || card.getAttribute("data-category") === activeCategory;
      const visible = lineMatch && categoryMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    markActive(lineButtons, "data-line-filter", activeLine);
    markActive(categoryButtons, "data-category-filter", activeCategory);
    if (count) count.textContent = visibleCount + "素材";
  }

  lineButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeLine = button.getAttribute("data-line-filter") || "All";
      activeCategory = "All";
      applyFilter();
    });
  });

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.getAttribute("data-category-filter") || "All";
      applyFilter();
    });
  });

  applyFilter();
})();
`;
}

export function ProductIngredientExplorer({ items, title, description }: ProductIngredientExplorerProps) {
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  return (
    <section className="dh-ingredient-explorer" aria-label="Ingredient detail index">
      <div className="dh-explorer-head">
        <p className="dh-detail-primary">INGREDIENT INDEX</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="dh-filter-stack" aria-label="Product filters">
        <div className="dh-filter-row" aria-label="Product line">
          {lineOptions.map((option) => (
            <button
              aria-pressed={option.value === "All"}
              className={option.value === "All" ? "is-active" : ""}
              data-line-filter={option.value}
              key={option.value}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="dh-filter-row dh-filter-row-soft" aria-label="Ingredient category">
          {categories.map((option) => (
            <button
              aria-pressed={option === "All"}
              className={option === "All" ? "is-active" : ""}
              data-category-filter={option}
              key={option}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="dh-ingredient-count" data-ingredient-count>
        {items.length}素材
      </div>

      <div className="dh-ingredient-card-grid">
        {items.map((item) => (
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
                label={item.line === "Functional Probiotics" ? "MICROBIOME PROBIOTICS" : "NATURE INGREDIENTS"}
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

      <script dangerouslySetInnerHTML={{ __html: getFilterScript() }} />
    </section>
  );
}
