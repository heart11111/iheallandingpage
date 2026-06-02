import {
  BadgeCheck,
  BriefcaseBusiness,
  Factory,
  FlaskConical,
  Handshake,
  Leaf,
  Network,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IngredientLine = "Functional Probiotics" | "Nature-derived Ingredients";

export type Ingredient = {
  id: string;
  name: string;
  category: string;
  area: string;
  summary: string;
  intake: string;
  strains?: string[];
  origin?: string[];
  evidenceTags: string[];
  line: IngredientLine;
};

export const probioticsIngredients: Ingredient[] = [
  {
    id: "med01",
    name: "iHEAL GINO 5 Formula - MED01",
    category: "女性",
    area: "膣内マイクロバイオーム",
    summary:
      "膣内マイクロバイオームのバランス、有用菌の増殖、有害菌の抑制をサポートする特許乳酸菌ポートフォリオ。",
    intake: "50億 CFU/day",
    strains: [
      "L. plantarum MG989",
      "L. salivarius MG242",
      "L. fermentum MG901",
      "L. paracasei MG4272",
      "L. rhamnosus MG4288",
    ],
    evidenceTags: ["101名ヒト臨床試験", "SCI論文参照", "特許菌株"],
    line: "Functional Probiotics",
  },
  {
    id: "med02",
    name: "iHEAL DIT 2 Formula - MED02",
    category: "体脂肪",
    area: "体脂肪・抗肥満プロバイオティクス",
    summary:
      "体脂肪低減をサポートし、脂肪細胞分化制御と関連する特許プロバイオティクス複合物。",
    intake: "50億 CFU/day",
    strains: ["L. fermentum MG4231", "L. fermentum MG4244"],
    evidenceTags: ["100名ヒト臨床試験", "SCI論文参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp2106",
    name: "NVP-2106",
    category: "脳・記憶",
    area: "認知・記憶機能",
    summary:
      "認知機能、記憶、注意集中をサポートする脳機能向け特許プロバイオティクス複合物。",
    intake: "100億 CFU/day",
    strains: ["L. mucosae NK41", "B. longum NK46"],
    evidenceTags: ["120名高齢者臨床", "SCI論文参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1702",
    name: "NVP-1702",
    category: "肝臓",
    area: "肝の健康",
    summary:
      "アルコール性・非アルコール性の肝健康コンテキストに向けた特許プロバイオティクス複合物。",
    intake: "100億 CFU/day",
    strains: ["L. plantarum LC27", "B. longum LC67"],
    evidenceTags: ["ヒト臨床試験参照", "SCI論文参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1703",
    name: "NVP-1703",
    category: "鼻",
    area: "過敏な免疫反応に伴う鼻の状態",
    summary:
      "小児、青少年、成人を対象にした臨床試験資料をもとに、鼻のコンディションをサポート。",
    intake: "100億 CFU/day",
    strains: ["L. plantarum IM76", "B. longum IM55"],
    evidenceTags: ["大規模臨床試験参照", "小児・成人対象", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1704",
    name: "NVP-1704",
    category: "ストレス",
    area: "ストレス・睡眠・リラックス",
    summary:
      "ストレス、気分バランス、不安関連の不快感、睡眠の質をサポートする機能性菌株設計。",
    intake: "50億 CFU/day",
    strains: ["L. reuteri NK33", "B. adolescentis NK98"],
    evidenceTags: ["156名ヒト臨床試験", "睡眠品質指標参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "bifido",
    name: "Bifidobacterium Probiotics",
    category: "腸",
    area: "腸の健康・排便活動",
    summary:
      "健康な母乳栄養新生児由来の100%ヒト由来ビフィズス菌。腸の健康と排便活動をサポート。",
    intake: "用途別設計",
    strains: ["B. bifidum BGN4", "B. longum BORI", "B. lactis AD011"],
    evidenceTags: ["FDA GRAS/NDI/USP参照", "HALAL/KOSHER参照", "10臨床・80特許・260 SCI"],
    line: "Functional Probiotics",
  },
];

export const natureIngredients: Ingredient[] = [
  {
    id: "testofen",
    name: "Testofen",
    category: "男性",
    area: "男性更年期・男性健康",
    summary: "男性更年期の健康とテストステロン恒常性維持をサポートするフェヌグリーク種子抽出物。",
    intake: "600mg/day",
    origin: ["Fenugreek seed extract", "Trigonella foenum-graecum"],
    evidenceTags: ["個別認定型素材参照", "12週間臨床資料", "男性健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "thinkgin",
    name: "ThinkGIN",
    category: "記憶",
    area: "記憶・認知機能",
    summary: "記憶と認知機能、睡眠の質と睡眠効率をサポートする高麗人参スプラウト抽出粉末。",
    intake: "450mg/day",
    origin: ["Panax ginseng sprout extract powder"],
    evidenceTags: ["ヒト臨床試験参照", "記憶・睡眠", "ジンセノサイド"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "neulearn",
    name: "Neu learn",
    category: "認知",
    area: "加齢関連認知機能",
    summary: "主観的記憶不安、短期記憶、計画機能をサポートする白キクラゲ酵素分解抽出物。",
    intake: "600-1,200mg/day",
    origin: ["Tremella fuciformis enzymatic extract"],
    evidenceTags: ["f-MRI資料参照", "12週間臨床資料", "認知機能"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "applephenon",
    name: "Applephenon",
    category: "体脂肪",
    area: "ダイエット・体脂肪",
    summary: "体脂肪低減をサポートする代表的なダイエット向け未熟リンゴ抽出物。",
    intake: "600mg/day",
    origin: ["Unripe apple extract"],
    evidenceTags: ["体脂肪低減", "持続効果資料", "ポリフェノール"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "collagen",
    name: "Low-molecular Collagen Peptide AG",
    category: "肌",
    area: "皮膚水分・弾力",
    summary:
      "肌のうるおい、UV関連皮膚ダメージからの健康維持、目元のしわ・弾力をサポート。",
    intake: "1,000mg/day",
    origin: ["500Da以下の低分子コラーゲンペプチド", "Pangasius魚皮由来ゼラチン"],
    evidenceTags: ["皮膚水分", "弾力・しわ", "二重機能性素材参照"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "dermania",
    name: "DermaNia",
    category: "肌",
    area: "しわ・保湿ケア",
    summary: "しわケアと皮膚水分量の維持をサポートするマコモ抽出物。",
    intake: "250mg/day",
    origin: ["Wild rice extract", "Zizania latifolia"],
    evidenceTags: ["12週間臨床資料", "しわ・保湿", "皮膚健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "agrimony",
    name: "Agrimony extract",
    category: "肝臓",
    area: "非アルコール性脂肪肝健康",
    summary: "肝脂肪量、ALT/AST値低下をサポートするアグリモニー由来素材。",
    intake: "75mg/day",
    origin: ["Agrimonia pilosa"],
    evidenceTags: ["ALT/AST資料", "脂肪肝指数", "肝健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "pinitol",
    name: "Pinitol",
    category: "肝臓",
    area: "肝健康・血糖健康",
    summary: "非アルコール性脂肪肝、肝健康、血糖健康をサポートするキャロブ由来素材。",
    intake: "肝健康 300mg/day・血糖健康 1.2g/day",
    origin: ["Carob pod extract"],
    evidenceTags: ["脂肪肝資料", "GPx/MDA資料", "血糖健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "acetobeta",
    name: "Aceto Beta",
    category: "二日酔い",
    area: "アルコール代謝サポート",
    summary:
      "アセトアルデヒド分解をサポートし、飲酒関連の肝負担と二日酔いの不快感を軽減方向で設計。",
    intake: "1,000mg/day",
    origin: ["Soybean fermented vinegar culture", "Acetic acid bacteria"],
    evidenceTags: ["ADH/ALDH資料", "飲酒後ケア", "発酵素材"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "immulink",
    name: "Immulink MBG",
    category: "免疫",
    area: "免疫機能",
    summary: "自然免疫と獲得免疫の双方をサポートする霊芝菌糸体抽出粉末。",
    intake: "200mg/day",
    origin: ["Ganoderma lucidum mycelium extract powder"],
    evidenceTags: ["β-Glucan rich", "自然・獲得免疫", "超音波抽出技術"],
    line: "Nature-derived Ingredients",
  },
];

export const evidenceItems = [
  { label: "Human clinical trial referenced", title: "ヒト臨床試験資料", value: "Application-specific" },
  { label: "SCI paper referenced", title: "SCI論文参照", value: "Evidence-led" },
  { label: "International patent referenced", title: "国際特許資料", value: "Strain-level" },
  { label: "KFDA individually recognized", title: "KFDA個別認定型素材", value: "Supplier" },
  { label: "FDA GRAS / NDI / USP referenced", title: "FDA GRAS / NDI / USP", value: "Bifidobacterium" },
  { label: "HALAL / KOSHER referenced", title: "HALAL / KOSHER", value: "Referenced" },
  { label: "ODM/OEM capable", title: "ODM/OEM対応", value: "Korea network" },
  { label: "Japan B2B network", title: "日本B2B展開", value: "Distribution" },
];

export const businessServices: Array<{
  title: string;
  copy: string;
  icon: LucideIcon;
}> = [
  {
    title: "Ingredient Sourcing",
    copy: "用途別の機能性素材、特許菌株、自然由来素材を日本市場の企画に合わせて選定します。",
    icon: FlaskConical,
  },
  {
    title: "ODM/OEM Production",
    copy: "韓国主要メーカーとの生産ネットワークを活用し、ブランド専用商品の開発を支援します。",
    icon: Factory,
  },
  {
    title: "Brand Royalty",
    copy: "iHEALブランドの活用や共同商品化を含めたロイヤリティモデルを検討します。",
    icon: BadgeCheck,
  },
  {
    title: "Sales & Marketing",
    copy: "日本側の販売会社、卸、メーカーに向けたB2B提案と市場導入を設計します。",
    icon: TrendingUp,
  },
  {
    title: "Distributor Supply",
    copy: "ディストリビューター、製造会社、卸売会社への安定供給体制を組み立てます。",
    icon: Network,
  },
  {
    title: "New Business Discovery",
    copy: "機能性ヘルスケア領域での新規事業、カテゴリー拡張、共同開発を探索します。",
    icon: Handshake,
  },
];

export const filterCategories = [
  "All",
  "女性",
  "体脂肪",
  "脳・記憶",
  "肝臓",
  "鼻",
  "ストレス",
  "腸",
  "肌",
  "免疫",
  "男性",
];

export const routeStages = [
  {
    title: "KOREA",
    kicker: "韓国",
    subtitle: "研究開発・製造",
    points: ["素材開発・ソーシング", "メーカー直供給", "製造・量産対応", "ブランド管理"],
  },
  {
    title: "BIOLAB Japan",
    kicker: "事業ブリッジ",
    subtitle: "日韓ヘルスケア事業連携",
    points: ["規制を踏まえた調整", "機能性素材ポートフォリオ", "ODM/OEM企画", "ブランドロイヤリティ"],
  },
  {
    title: "JAPAN",
    kicker: "日本",
    subtitle: "B2B展開",
    points: ["販売・マーケティング", "販売会社・メーカー・卸への供給", "販売ネットワーク拡大", "新規事業の発掘"],
  },
];

export const scrollLabSteps = [
  {
    title: "Evidence",
    ruby: "根拠資料",
    copy: "ヒト臨床試験、SCI論文、特許、認証資料を整理し、用途別の根拠構造を明確にします。",
    icon: ShieldCheck,
  },
  {
    title: "Ingredient",
    ruby: "機能性素材",
    copy: "プロバイオティクスと自然由来機能性素材を、ターゲットカテゴリーに合わせて選定します。",
    icon: Sprout,
  },
  {
    title: "Formulation",
    ruby: "処方設計",
    copy: "ODM/OEM対応を前提に、摂取量、剤形、訴求領域、表示表現を実務レベルで設計します。",
    icon: FlaskConical,
  },
  {
    title: "Supply",
    ruby: "生産供給",
    copy: "韓国メーカーの生産ネットワークと供給条件をつなぎ、事業化に必要な供給線を整えます。",
    icon: BriefcaseBusiness,
  },
  {
    title: "Market",
    ruby: "市場展開",
    copy: "日本側の販売会社、メーカー、卸売会社へ展開するB2B導入プランを構築します。",
    icon: Leaf,
  },
];

export const heroLabels = ["MED01", "MED02", "NVP-2106", "NVP-1702", "NVP-1703", "NVP-1704", "BGN4", "BORI", "AD011", "ThinkGIN"];
