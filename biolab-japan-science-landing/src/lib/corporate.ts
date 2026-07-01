import type { Ingredient } from "@/lib/ingredients";
import { natureIngredients, probioticsIngredients } from "@/lib/ingredients";

export const companyPages = [
  {
    label: "代表取締役 ご挨拶",
    menuLabel: "CEO Message",
    href: "/company/greeting",
    summary: "BIOLAB Japanの代表メッセージと事業姿勢を紹介します。",
  },
  {
    label: "ビジョン及び目標",
    menuLabel: "Vision & Goals",
    href: "/company/vision",
    summary: "日本市場で目指すヘルスケア事業ブリッジの方向性を整理します。",
  },
];

export const businessPages = [
  {
    label: "機能性素材供給",
    menuLabel: "Ingredient Supply",
    href: "/business/materials",
    summary: "Functional ProbioticsとFunctional Nature's Food Ingredientsを製品目的別に提案します。",
  },
  {
    label: "OEM/ODMサービス",
    menuLabel: "OEM/ODM Service",
    href: "/business/odm-oem",
    summary: "韓国製造ネットワークを活用し、処方・剤形・量産・供給条件を設計します。",
  },
  {
    label: "ブランドマネジメント",
    menuLabel: "Brand Management",
    href: "/business/brand-management",
    summary: "iHEALブランド運営経験をもとに、商品資料・チャネル・パートナー対応を支援します。",
  },
];

export const communicationPages = [
  {
    label: "Eカタログ",
    menuLabel: "E-Catalog",
    href: "/communication/catalog",
    summary: "素材供給、OEM/ODM、ブランド協業の検討に必要な情報をまとめます。",
  },
  {
    label: "顧客お問い合わせ",
    menuLabel: "Customer Inquiries",
    href: "/communication/inquiries",
    summary: "機能性素材、ODM/OEM、日本B2B流通、ブランド協業の相談を受け付けます。",
  },
  {
    label: "コミュニケーションチャネル",
    menuLabel: "Channels",
    href: "/communication/channels",
    summary: "BIOLAB Japan、BIOLAB Korea、iHEAL Mallへの公式導線を案内します。",
  },
];

const natureProductIds = [
  "testofen",
  "thinkgin",
  "neulearn",
  "applephenon",
  "collagen",
  "dermania",
  "agrimony",
  "pinitol",
  "acetobeta",
  "immulink",
];

export const microbiomeProductItems = probioticsIngredients;
export const natureProductItems = natureIngredients.filter((item) => natureProductIds.includes(item.id));

export const productLinePages = [
  {
    label: "個別認定型プロバイオティクス",
    menuLabel: "Functional Probiotics",
    href: "/products/microbiome-probiotics",
    summary: "女性、体脂肪、脳・記憶、肝臓、鼻、ストレス、腸の7種を整理します。",
    items: microbiomeProductItems,
  },
  {
    label: "機能性天然素材",
    menuLabel: "Functional Nature's Food Ingredients",
    href: "/products/nature-ingredients",
    summary: "男性健康、記憶、認知、体脂肪、肌、肝臓・血糖、二日酔い、免疫の10種を整理します。",
    items: natureProductItems,
  },
];

export const siteMapGroups = [
  { label: "会社紹介", menuLabel: "COMPANY", href: "/company", children: companyPages },
  { label: "事業 & サービス", menuLabel: "BUSINESS", href: "/business", children: businessPages },
  { label: "供給製品", menuLabel: "PRODUCTS", href: "/products", children: productLinePages },
  { label: "お問い合わせ", menuLabel: "COMMUNICATION", href: "/communication", children: communicationPages },
];

export const productGroups = [
  {
    slug: "probiotics",
    menuLabel: "Functional Probiotics",
    eyebrow: "個別認定型・特許菌株",
    title: "Functional Probiotics",
    subtitle: "用途別プロバイオティクス",
    image: "/images/products-microbiome-probiotics-card-v2.webp",
    description:
      "女性、体脂肪、認知、肝臓、鼻、ストレス、腸のコンディションに合わせて、菌株レベルで素材情報を整理します。",
    items: probioticsIngredients,
  },
  {
    slug: "nature",
    menuLabel: "Functional Nature's Food Ingredients",
    eyebrow: "自然由来機能性素材",
    title: "Functional Nature's Food Ingredients",
    subtitle: "自然由来素材",
    image: "/images/products-functional-nature-card-v2.webp",
    description:
      "記憶、肌、肝臓、免疫、男性健康など、商品カテゴリーに合わせた自然由来機能性素材を提案します。",
    items: natureIngredients,
  },
  {
    slug: "odm-oem",
    menuLabel: "ODM/OEM",
    eyebrow: "商品化・供給設計",
    title: "ODM / OEM Planning",
    subtitle: "韓国製造ネットワーク連携",
    image: "/images/biolab-global-factory-bg.png",
    description:
      "韓国主要メーカーとの製造ネットワークを活用し、日本市場向けの処方、剤形、量産、供給条件を設計します。",
    items: [] as Ingredient[],
  },
  {
    slug: "brand-royalty",
    menuLabel: "Brand Royalty",
    eyebrow: "ブランド協業",
    title: "Brand Royalty",
    subtitle: "iHEALブランド活用",
    image: "/images/clinical-platform-hero.png",
    description:
      "iHEALブランド、共同商品化、販売会社向け商品展開を含めたロイヤリティ型の事業協業を検討します。",
    items: [] as Ingredient[],
  },
];

export const corporateNews = [
  {
    slug: "korea-japan-bridge",
    date: "2026.06.08",
    title: "韓国R&Dから日本B2B流通までをつなぐ事業構造を整理",
    summary:
      "BIOLAB Japanは、素材開発、製造、ブランド管理、日本側販売ネットワークを一体で設計する事業ブリッジとして機能します。",
    image: "/images/biolab-global-factory-bg.png",
  },
  {
    slug: "ingredient-portfolio",
    date: "2026.06.08",
    title: "用途別機能性素材ポートフォリオを日本向けに再構成",
    summary:
      "プロバイオティクスと自然由来機能性素材を、カテゴリー、摂取量、エビデンスタグ別に整理しました。",
    image: "/images/global-evidence-bg.png",
  },
  {
    slug: "partnership-inquiry",
    date: "2026.06.08",
    title: "ODM/OEM・素材調達・ブランド協業の相談受付を開始",
    summary:
      "機能性素材の調達、日本B2B流通、iHEALブランド協業に関する相談をWebフォームから受け付けます。",
    image: "/images/clinical-platform-hero.png",
  },
];

export const partnerRows = [
  ["募集領域", "機能性素材調達、ODM/OEM商品開発、日本B2B流通、ブランド協業"],
  ["対象企業", "販売会社、健康食品ブランド、メーカー、卸、商品企画会社"],
  ["提案素材", "プロバイオティクス、自然由来機能性素材、iHEALブランド活用"],
  ["進行方法", "問い合わせ受付後、カテゴリー、発売時期、必要資料を確認して個別にご案内します。"],
  ["提出資料", "会社概要、検討カテゴリー、希望素材、想定販売チャネル"],
  ["連絡方法", "CONTACTページのフォームよりお問い合わせください。"],
];

export function getProductGroup(slug: string) {
  return productGroups.find((group) => group.slug === slug);
}
