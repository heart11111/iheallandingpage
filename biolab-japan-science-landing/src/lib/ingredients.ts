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
  healthClaims?: string[];
  featurePoints?: string[];
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
    image: "/images/ingredients/med01.webp",
    strains: [
      "L. plantarum MG989",
      "L. salivarius MG242",
      "L. fermentum MG901",
      "L. paracasei MG4272",
      "L. rhamnosus MG4288",
    ],
    healthClaims: ["女性の膣内環境をサポート", "Nugent score改善方向の臨床資料", "有用菌増殖と有害菌抑制を考慮"],
    featurePoints: ["健康な韓国女性由来の特許乳酸菌", "101名・19〜50歳女性対象のヒト試験資料", "韓国・米国・欧州特許、日本特許出願中"],
    evidenceTags: ["101名ヒト臨床試験", "SCI論文参照", "国際特許"],
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
    image: "/images/ingredients/med02.webp",
    strains: ["L. fermentum MG4231", "L. fermentum MG4244"],
    healthClaims: ["体脂肪・体重・BMI管理をサポート", "脂肪細胞分化抑制コンセプト", "抗肥満向け特許乳酸菌複合物"],
    featurePoints: ["健康な韓国人由来の特許乳酸菌", "100名・過体重または肥満成人対象のヒト試験資料", "体脂肪量・体脂肪率・BMI指標を整理"],
    evidenceTags: ["100名ヒト臨床試験", "SCI論文参照", "国際特許"],
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
    image: "/images/ingredients/nvp2106.webp",
    strains: ["L. mucosae NK41", "B. longum NK46"],
    healthClaims: ["認知機能・記憶機能をサポート", "注意集中力を考慮した脳機能向け設計", "ADAS-Cog13指標資料を参照"],
    featurePoints: ["60歳以上・記憶低下高齢者120名対象のヒト試験資料", "L. mucosae NK41とB. longum NK46の複合設計", "記憶・学習と関連する資料を整理"],
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
    image: "/images/ingredients/nvp1702.webp",
    strains: ["L. plantarum LC27", "B. longum LC67"],
    healthClaims: ["アルコール性・非アルコール性肝健康コンテキスト", "ALT/AST/γ-GTP指標資料を参照", "中性脂肪と炎症指標の管理方向"],
    featurePoints: ["L. plantarum LC27とB. longum LC67の複合設計", "肝解毒機能と腸内エンドトキシン関連資料を整理", "肝健康向けプロバイオティクス提案に活用"],
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
    image: "/images/ingredients/nvp1703.webp",
    strains: ["L. plantarum IM76", "B. longum IM55"],
    healthClaims: ["アレルギー性鼻炎関連の鼻コンディションをサポート", "TNSS指標資料を参照", "小児・青少年・成人対象資料を整理"],
    featurePoints: ["L. plantarum IM76とB. longum IM55の複合設計", "鼻水・鼻づまりなどの不快感に関する資料", "IgEやサイトカイン関連データを提案資料に整理"],
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
    image: "/images/ingredients/nvp1704.webp",
    strains: ["L. reuteri NK33", "B. adolescentis NK98"],
    healthClaims: ["ストレス・気分バランス・睡眠の質をサポート", "BDI/BAI/PSQI/ISI指標資料を参照", "腸内ストレスマイクロバイオームを考慮"],
    featurePoints: ["156名・ストレス成人対象のヒト試験資料", "IL-6減少、BDNF増加方向の資料を整理", "L. reuteriとBifidobacteriumグループを中心に提案"],
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
    image: "/images/ingredients/bifido.webp",
    strains: ["B. bifidum BGN4", "B. longum BORI", "B. lactis AD011"],
    healthClaims: ["腸の健康と排便活動をサポート", "100%ヒト由来ビフィズス菌コンセプト", "ガス排出・腹部膨満感関連資料を参照"],
    featurePoints: ["健康な母乳栄養新生児由来", "FDA GRAS/NDI/USP、HALAL、KOSHER資料を整理", "120以上のSCI論文、80特許規模の根拠情報を参照"],
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
    image: "/images/ingredients/testofen.webp",
    origin: ["Fenugreek seed extract", "Trigonella foenum-graecum"],
    healthClaims: ["男性更年期の健康をサポート", "テストステロン恒常性維持コンセプト", "AMS指標資料を参照"],
    featurePoints: ["43〜75歳男性対象の12週間資料", "ホロパ種子抽出物を中心に設計", "韓国内男性更年期関連素材としての提案資料を整理"],
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
    image: "/images/ingredients/thinkgin.webp",
    origin: ["Panax ginseng sprout extract powder"],
    healthClaims: ["記憶力・認知機能をサポート", "睡眠の質と睡眠効率を考慮", "ジンセノサイド含有を訴求軸に整理"],
    featurePoints: ["55〜75歳男女対象の12週間資料", "一般紅参より高いジンセノサイド含有コンセプト", "即時回想力、AChEなどの資料を整理"],
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
    image: "/images/ingredients/neulearn.webp",
    origin: ["Tremella fuciformis enzymatic extract"],
    healthClaims: ["加齢に伴う認知機能低下をサポート", "主観的記憶不安・短期記憶・計画機能を考慮", "f-MRI資料を参照"],
    featurePoints: ["40〜65歳男女対象の12週間資料", "白キクラゲ酵素分解抽出物", "SMCQ、短期記憶、実行作業関連データを整理"],
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
    image: "/images/ingredients/applephenon.webp",
    origin: ["Unripe apple extract"],
    healthClaims: ["体脂肪低減をサポート", "BMI・内臓脂肪量関連資料を参照", "ポリフェノール高濃縮コンセプト"],
    featurePoints: ["20〜55歳男女対象の12週間資料", "未熟リンゴ抽出物を250倍濃縮するコンセプト", "摂取終了後4週間の持続資料を整理"],
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
    image: "/images/ingredients/collagen.webp",
    origin: ["500Da以下の低分子コラーゲンペプチド", "Pangasius魚皮由来ゼラチン"],
    healthClaims: ["皮膚水分と弾力をサポート", "UV関連皮膚ダメージからの健康維持", "目元しわ・肌荒れ指標資料を参照"],
    featurePoints: ["30〜65歳女性対象の12週間資料", "500Da以下の低分子コラーゲンペプチド", "韓国初の二重機能性素材としての資料を整理"],
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
    image: "/images/ingredients/dermania.webp",
    origin: ["Wild rice extract", "Zizania latifolia"],
    healthClaims: ["皮膚のしわ・保湿ケアをサポート", "皮膚水分量と目元しわ指標資料を参照", "美容インナーケア向け素材として整理"],
    featurePoints: ["成人女性対象の12週間資料", "マコモ由来抽出物", "肌カテゴリーの商品設計に活用しやすい自然由来素材"],
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
    image: "/images/ingredients/agrimony.webp",
    origin: ["Agrimonia pilosa"],
    healthClaims: ["非アルコール性脂肪肝の健康をサポート", "肝脂肪量・ALT/AST指標資料を参照", "肝健康カテゴリー向け自然由来素材"],
    featurePoints: ["アグリモニー由来抽出物", "脂肪肝指数と肝酵素指標の資料を整理", "低摂取量設計の素材候補として提案可能"],
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
    image: "/images/ingredients/pinitol.webp",
    origin: ["Carob pod extract"],
    healthClaims: ["非アルコール性脂肪肝の健康をサポート", "肝健康・血糖健康の両軸で提案可能", "ALT/AST、GPx/MDA資料を参照"],
    featurePoints: ["脂肪肝がある成人60名対象の12週間資料", "キャロブの鞘由来抽出・精製素材", "肝中性脂肪、ALT、AST関連資料を整理"],
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
    image: "/images/ingredients/acetobeta.webp",
    origin: ["Soybean fermented vinegar culture", "Acetic acid bacteria"],
    healthClaims: ["飲酒後の不快感ケアをサポート", "アセトアルデヒド分解コンセプト", "ADH/ALDH指標資料を参照"],
    featurePoints: ["大豆発酵酢培養物と酢酸菌を中心に設計", "飲酒後ケア商品に展開しやすい素材", "発酵由来素材として企画資料を整理"],
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
    image: "/images/ingredients/immulink.webp",
    origin: ["Ganoderma lucidum mycelium extract powder"],
    healthClaims: ["免疫機能をサポート", "自然免疫と獲得免疫の双方を考慮", "β-グルカンリッチな素材設計"],
    featurePoints: ["18〜55歳男女対象の13週間資料", "霊芝菌糸体抽出粉末", "特許超音波抽出技術と8種免疫因子資料を整理"],
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
