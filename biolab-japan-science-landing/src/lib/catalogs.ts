export type CatalogFile = {
  href: string;
  fileName: string;
  titleJa: string;
  titleKo: string;
};

// Reserved filenames for official print catalogs. Generated HTML-to-PDF stubs
// must not be linked from the site; wire these hrefs only after real files exist.
export const productLineCatalogs = {
  probiotics: {
    href: "/downloads/catalogs/functional-probiotics.pdf",
    fileName: "BIOLAB-Japan-Functional-Probiotics.pdf",
    titleJa: "機能性プロバイオティクス カタログ",
    titleKo: "기능성 프로바이오틱스 카탈로그",
  },
  nature: {
    href: "/downloads/catalogs/nature-ingredients.pdf",
    fileName: "BIOLAB-Japan-Nature-Ingredients.pdf",
    titleJa: "機能性天然素材 カタログ",
    titleKo: "기능성 천연소재 카탈로그",
  },
} satisfies Record<string, CatalogFile>;

export const bifidoStrainCatalogs = {
  bgn4: {
    href: "/downloads/catalogs/bifido-bgn4.pdf",
    fileName: "BIOLAB-Japan-BGN4.pdf",
    titleJa: "B. bifidum BGN4 カタログ",
    titleKo: "B. bifidum BGN4 카탈로그",
  },
  bori: {
    href: "/downloads/catalogs/bifido-bori.pdf",
    fileName: "BIOLAB-Japan-BORI.pdf",
    titleJa: "B. longum BORI カタログ",
    titleKo: "B. longum BORI 카탈로그",
  },
  ad011: {
    href: "/downloads/catalogs/bifido-ad011.pdf",
    fileName: "BIOLAB-Japan-AD011.pdf",
    titleJa: "B. lactis AD011 カタログ",
    titleKo: "B. lactis AD011 카탈로그",
  },
} satisfies Record<string, CatalogFile>;
