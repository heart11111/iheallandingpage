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
  image: string;
  strains?: string[];
  origin?: string[];
  evidenceTags: string[];
  healthClaims?: string[];
  featurePoints?: string[];
  line: IngredientLine;
};

export const probioticsIngredients: Ingredient[] = [
  {
    id: "med01",
    name: "iHEAL GINO 5 Formula - MED01",
    category: "女性",
    area: "女性の腟の健康",
    summary: "健康な韓国女性の腟から分離した特許乳酸菌。女性の腟の健康維持をサポートするプロバイオティクス複合物です。",
    intake: "50億 CFU/day (5×10⁹ CFU/day)",
    image: "/images/ingredients/med01.webp",
    strains: [
      "L. plantarum MG989",
      "L. salivarius MG242",
      "L. fermentum MG901",
      "L. paracasei MG4272",
      "L. rhamnosus MG4288",
    ],
    evidenceTags: ["101名ヒト臨床試験", "SCI論文9編", "国際特許3か国"],
    line: "Functional Probiotics",
  },
  {
    id: "med02",
    name: "iHEAL DIT 2 Formula - MED02",
    category: "体脂肪",
    area: "体脂肪低減",
    summary: "健康な韓国人由来の特許乳酸菌。脂肪細胞分化抑制のためのプロバイオティクス。",
    intake: "50億 CFU/day (5×10⁹ CFU/day)",
    image: "/images/ingredients/med02.webp",
    strains: ["L. fermentum MG4231", "L. fermentum MG4244"],
    evidenceTags: ["100名ヒト臨床試験", "SCI論文6編", "国際特許3か国"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp2106",
    name: "NVP-2106",
    category: "脳・記憶",
    area: "認知・記憶力改善",
    summary: "デュオバイオーム技術による脳機能改善用2種特許プロバイオティクス複合物。",
    intake: "100億 CFU/day (1×10¹⁰ CFU/day)",
    image: "/images/ingredients/nvp2106.webp",
    strains: ["L. mucosae NK41", "B. longum NK46"],
    evidenceTags: ["120名高齢者ヒト臨床試験", "SCI論文参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1702",
    name: "NVP-1702",
    category: "肝臓",
    area: "アルコール性・非アルコール性の肝機能改善",
    summary: "デュオバイオーム技術による、アルコール性・非アルコール性の肝機能改善を目的とした2菌株の特許プロバイオティクス複合物です。",
    intake: "100億 CFU/day (1×10¹⁰ CFU/day)",
    image: "/images/ingredients/nvp1702.webp",
    strains: ["L. plantarum LC27", "B. longum LC67"],
    evidenceTags: ["非アルコール性93名", "アルコール性70名", "SCI論文参照"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1703",
    name: "NVP-1703",
    category: "鼻",
    area: "鼻の状態改善",
    summary: "デュオバイオーム技術によるアレルギー性鼻炎改善用特許プロバイオティクス複合物。",
    intake: "100億 CFU/day (1×10¹⁰ CFU/day)",
    image: "/images/ingredients/nvp1703.webp",
    strains: ["L. plantarum IM76", "B. longum IM55"],
    evidenceTags: ["大規模ヒト臨床試験(小児・成人)", "SCI論文参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "nvp1704",
    name: "NVP-1704",
    category: "ストレス",
    area: "ストレス・睡眠改善",
    summary: "ストレス性疾患、うつ、不安、不眠症改善用特許プロバイオティクス複合物。",
    intake: "50億 CFU/day (5×10⁹ CFU/day)",
    image: "/images/ingredients/nvp1704.webp",
    strains: ["L. reuteri NK33", "B. adolescentis NK98"],
    evidenceTags: ["156名ヒト臨床試験", "睡眠の質指標参照", "特許複合菌"],
    line: "Functional Probiotics",
  },
  {
    id: "bifido",
    name: "Bifidobacterium Probiotics",
    category: "腸",
    area: "腸の健康",
    summary: "母乳を与えられた健康な新生児の便由来、100%ヒト由来ビフィズス菌。",
    intake: "用途別設計",
    image: "/images/ingredients/bifido.webp",
    strains: ["B. bifidum BGN4", "B. longum BORI", "B. lactis AD011"],
    evidenceTags: ["FDA GRAS/NDI認証", "HALAL/KOSHER認証", "臨床10件・特許80件・SCI論文260編"],
    line: "Functional Probiotics",
  },
];

export const natureIngredients: Ingredient[] = [
  {
    id: "testofen",
    name: "Testofen",
    category: "男性",
    area: "男性更年期症状の軽減",
    summary: "更年期男性の健康に向けた差別化された機能性素材。フェヌグリーク種子抽出物。",
    intake: "600mg/day",
    image: "/images/ingredients/testofen.webp",
    origin: ["ホロパ(フェヌグリーク)種子抽出物 Trigonella foenum-graecum", "インド産・韓国個別認定型素材"],
    evidenceTags: ["個別認定型素材", "12週間ヒト臨床試験", "AMS指標"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "thinkgin",
    name: "ThinkGIN",
    category: "記憶",
    area: "記憶力・認知機能改善",
    summary: "記憶力・認知機能改善に役立つ、一般紅参より高濃度のジンセノサイドを含む新芽人参抽出粉末。",
    intake: "450mg/day",
    image: "/images/ingredients/thinkgin-upscaled.png",
    origin: ["新芽人参抽出粉末 Panax ginseng C.A. Meyer sprout", "韓国産・韓国個別認定型素材"],
    evidenceTags: ["ヒト臨床試験", "記憶・睡眠", "ジンセノサイド高含有"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "neulearn",
    name: "Neu learn",
    category: "認知",
    area: "認知機能改善",
    summary: "加齢により低下した認知機能の改善に役立つ、白キクラゲ酵素分解抽出物。",
    intake: "600-1,200mg/day",
    image: "/images/ingredients/neulearn.webp",
    origin: ["白キクラゲ酵素分解抽出物 Tremella fuciformis Beck-extract", "中国産・韓国個別認定型素材"],
    evidenceTags: ["f-MRI検証", "12週間ヒト臨床試験", "認知機能"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "applephenon",
    name: "Applephenon",
    category: "体脂肪",
    area: "体脂肪低減",
    summary: "体脂肪低減に役立つ、ダイエット向けの代表的なロングセラー原料。未熟リンゴ抽出物。",
    intake: "600mg/day",
    image: "/images/ingredients/applephenon.webp",
    origin: ["未熟リンゴ抽出物(青リンゴポリフェノール)", "韓国産・韓国個別認定型素材"],
    evidenceTags: ["体脂肪減少", "持続効果データ", "高濃縮ポリフェノール"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "collagen",
    name: "低分子コラーゲンペプチドAG",
    category: "肌",
    area: "皮膚保湿・皮膚健康",
    summary: "紫外線による皮膚ダメージからの皮膚健康維持、目元のしわ・肌の潤いに役立つ低分子コラーゲンペプチド。",
    intake: "1,000mg/day",
    image: "/images/ingredients/collagen.webp",
    origin: ["500Da以下の低分子コラーゲンペプチド", "パンガシウス(Pangasius)の魚皮由来ゼラチン", "韓国産・韓国個別認定型素材・韓国初の二重機能性素材"],
    evidenceTags: ["皮膚保湿", "弾力・しわ改善", "二重機能性素材"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "dermania",
    name: "DermaNia",
    category: "肌",
    area: "皮膚水分・しわ改善",
    summary: "しわの生成抑制、皮膚水分量の維持に役立つマコモ(Wild rice)抽出物。",
    intake: "250mg/day",
    image: "/images/ingredients/dermania.webp",
    origin: ["マコモ抽出物 Zizania latifolia(Wild rice)", "韓国産・韓国個別認定型素材"],
    evidenceTags: ["12週間ヒト臨床試験", "しわ・保湿改善", "皮膚健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "agrimony",
    name: "アグリモニー抽出物 (Agrimonia pilosa)",
    category: "肝臓",
    area: "非アルコール性脂肪肝改善",
    summary: "非アルコール性脂肪肝の改善に役立つアグリモニー(仙鶴草)由来素材。",
    intake: "75mg/day",
    image: "/images/ingredients/agrimony.webp",
    origin: ["アグリモニー(仙鶴草)抽出物 Agrimonia pilosa", "韓国産・韓国個別認定型素材"],
    evidenceTags: ["ALT/AST改善データ", "脂肪肝指数(HSI)", "肝機能"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "pinitol",
    name: "Pinitol",
    category: "肝臓",
    area: "肝臓と血糖値の健康維持",
    summary: "非アルコール性脂肪肝の改善や、肝臓と血糖値の健康維持に役立つキャロブ由来素材です。",
    intake: "肝臓の健康 300mg/day・血糖値の健康 1.2g/day",
    image: "/images/ingredients/pinitol-clean.webp",
    origin: ["キャロブ(Carob)の鞘から抽出・精製", "韓国産・韓国個別認定型素材"],
    evidenceTags: ["脂肪肝改善データ", "GPx/MDA改善データ", "血糖健康"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "acetobeta",
    name: "Aceto Beta",
    category: "二日酔い",
    area: "二日酔い軽減",
    summary: "アセトアルデヒドを速やかに分解し、飲酒による肝負担と二日酔いの軽減に優れた効果を持つ大豆発酵酢培養物。",
    intake: "1,000mg/day",
    image: "/images/ingredients/acetobeta.webp",
    origin: ["大豆発酵食酢培養物(酢酸菌 Acetic acid bacteria由来)"],
    evidenceTags: ["ADH/ALDHデータ", "飲酒後ケア", "発酵素材"],
    line: "Nature-derived Ingredients",
  },
  {
    id: "immulink",
    name: "Immulink MBG",
    category: "免疫",
    area: "免疫機能増進",
    summary: "自然免疫と獲得免疫の両方の向上に役立つ霊芝(レイシ)菌糸体抽出粉末。",
    intake: "200mg/day",
    image: "/images/ingredients/immulink.webp",
    origin: ["霊芝菌糸体抽出粉末 Ganoderma lucidum mycelium extract powder", "米国産・韓国個別認定型素材"],
    evidenceTags: ["β-グルカン77%以上", "自然・獲得免疫8因子改善", "超音波抽出技術"],
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
  "記憶",
  "認知",
  "肝臓",
  "鼻",
  "ストレス",
  "腸",
  "肌",
  "二日酔い",
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
