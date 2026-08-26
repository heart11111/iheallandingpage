import type { Ingredient } from "@/lib/ingredients";

const siteUrl = "https://biolabjp.com";

export function ingredientProductStructuredData(item: Ingredient, route: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}${route}/#product`,
    name: item.name,
    description: item.summary,
    category: item.category,
    image: `${siteUrl}${item.image}`,
    url: `${siteUrl}${route}/`,
    brand: {
      "@type": "Brand",
      name: "BIOLAB Japan",
    },
    manufacturer: {
      "@id": `${siteUrl}/#organization`,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Material line",
        value: item.line,
      },
      {
        "@type": "PropertyValue",
        name: "Application area",
        value: item.area,
      },
      {
        "@type": "PropertyValue",
        name: item.specKind === "spec" ? "Specification" : "Suggested intake",
        value: item.intake,
      },
      {
        "@type": "PropertyValue",
        name: "Evidence tags",
        value: item.evidenceTags.join(", "),
      },
    ],
  };
}
