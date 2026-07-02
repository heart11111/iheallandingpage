export type EvidenceMetric = {
  label: string;
  detail: string;
  value: number;
  displayValue?: string;
  direction?: "up" | "down" | "balanced";
};

export type IngredientEvidenceVisual = {
  title: string;
  sourceLabel: string;
  summary: string;
  metrics: EvidenceMetric[];
  footnote: string;
  slideRef?: string;
  pptDetail?: {
    productName: string;
    healthClaims: string[];
    originTitle: string;
    originItems: string[];
    features: string[];
    graphNotes: string[];
  };
  graphPanels?: Array<{
    title: string;
    subtitle: string;
    formula?: string;
    metrics: EvidenceMetric[];
  }>;
};

export const ingredientEvidenceVisuals: Record<string, IngredientEvidenceVisual> = {
  med01: {
    title: "Vaginal microbiome balance",
    sourceLabel: "101名ヒト試験 / Nugent score",
    summary: "膣内環境、Nugent score、有用菌・有害菌バランスをひとつの指標構造として整理します。",
    metrics: [
      { label: "Nugent score", detail: "膣炎指標の改善方向", value: 78, direction: "down" },
      { label: "Beneficial bacteria", detail: "有用菌増殖サポート", value: 72, direction: "up" },
      { label: "Patent strain set", detail: "5種特許乳酸菌", value: 86, displayValue: "5 strains", direction: "balanced" },
    ],
    footnote: "臨床・特許情報を、公開ページ向けに指標マップとして整理しています。",
  },
  med02: {
    title: "BMI reduction chart",
    sourceLabel: "100名ヒト試験 / BMI kg/m2",
    summary: "BMIチャートをHTMLバーで整理。MED-02群とPlacebo群の変化量を比較します。",
    metrics: [
      { label: "MED-02", detail: "BMI change", value: 70, displayValue: "-0.70 kg/m2", direction: "down" },
      { label: "Placebo", detail: "BMI change", value: 44, displayValue: "-0.44 kg/m2", direction: "down" },
      { label: "Body fat indicators", detail: "体脂肪量・体脂肪率・BMI", value: 76, direction: "down" },
    ],
    footnote: "BMI数値と評価指標を公開ページ向けに整理しています。",
  },
  nvp2106: {
    title: "Cognitive function markers",
    sourceLabel: "高齢者120名 / ADAS-Cog13",
    summary: "認知、記憶、注意集中を、脳機能プロバイオティクスの主要指標として可視化します。",
    metrics: [
      { label: "ADAS-Cog13", detail: "認知評価指標", value: 74, direction: "down" },
      { label: "Memory", detail: "記憶・学習関連", value: 70, direction: "up" },
      { label: "Attention", detail: "注意集中サポート", value: 66, direction: "up" },
    ],
    footnote: "高齢者対象試験・認知評価項目を、ウェブ表示用に整理しています。",
  },
  nvp1702: {
    title: "Liver health indicators",
    sourceLabel: "ALT / AST / gamma-GTP",
    summary: "アルコール性・非アルコール性の肝健康文脈で、肝酵素と炎症関連指標を整理します。",
    metrics: [
      { label: "ALT / AST", detail: "肝酵素指標", value: 74, direction: "down" },
      { label: "gamma-GTP", detail: "飲酒関連指標", value: 68, direction: "down" },
      { label: "Inflammation", detail: "炎症・中性脂肪関連", value: 62, direction: "down" },
    ],
    footnote: "資料内の肝健康評価項目を、方向性中心のHTMLチャートとして再構成しています。",
  },
  nvp1703: {
    title: "Nasal comfort response",
    sourceLabel: "小児・成人試験 / TNSS",
    summary: "鼻水、鼻づまり、TNSS、IgE・サイトカイン指標を鼻コンディションの評価軸として表示します。",
    metrics: [
      { label: "TNSS", detail: "鼻症状スコア", value: 76, direction: "down" },
      { label: "Nasal comfort", detail: "鼻水・鼻づまり", value: 70, direction: "down" },
      { label: "Immune markers", detail: "IgE / IL-10 / IL-22", value: 64, direction: "balanced" },
    ],
    footnote: "小児・青少年・成人試験資料を、B2B説明用の指標として整理しています。",
  },
  nvp1704: {
    title: "Stress and sleep profile",
    sourceLabel: "156名ヒト試験 / BDI, BAI, PSQI, ISI",
    summary: "ストレス、気分バランス、睡眠の質を複数の心理・睡眠指標で整理します。",
    metrics: [
      { label: "Stress mood", detail: "BDI / BAI", value: 72, direction: "down" },
      { label: "Sleep quality", detail: "PSQI / ISI", value: 68, direction: "down" },
      { label: "BDNF direction", detail: "BDNF増加方向", value: 64, direction: "up" },
    ],
    footnote: "ストレス成人対象試験の評価項目を、詳細ページ向けに簡潔な視覚構造へ変換しています。",
  },
  bifido: {
    title: "Bifidobacterium evidence map",
    sourceLabel: "GRAS / NDI / USP / clinical references",
    summary: "ヒト由来ビフィズス菌の認証、臨床、論文、特許規模を信頼性マップとして表示します。",
    metrics: [
      { label: "Clinical references", detail: "10 clinical studies", value: 62, displayValue: "10", direction: "balanced" },
      { label: "Patent scale", detail: "80 patents", value: 80, displayValue: "80", direction: "balanced" },
      { label: "SCI papers", detail: "260 SCI papers", value: 92, displayValue: "260", direction: "balanced" },
    ],
    footnote: "認証・論文・特許規模の情報を、ウェブ用の信頼性指標として整理しています。",
  },
  testofen: {
    title: "AMS score structure",
    sourceLabel: "男性43-75歳 / 12週間 / AMS",
    summary: "男性更年期評価で使われるAMSを、精神・身体・性機能の3軸で整理します。",
    metrics: [
      { label: "Mental / mood", detail: "精神・心理安定", value: 72, direction: "down" },
      { label: "Physical function", detail: "身体機能向上", value: 70, direction: "up" },
      { label: "Sexual function", detail: "男性健康領域", value: 68, direction: "up" },
    ],
    footnote: "AMS説明と機能評価文言を、公開ページ用の視覚要素として整理しています。",
  },
  thinkgin: {
    title: "Memory and sleep markers",
    sourceLabel: "55-75歳男女 / 12週間",
    summary: "記憶保存、即時回想、AChE、睡眠の質をThinkGINの評価軸として表示します。",
    metrics: [
      { label: "Immediate recall", detail: "即時回想力", value: 74, direction: "up" },
      { label: "AChE marker", detail: "記憶関連血液指標", value: 66, direction: "down" },
      { label: "Sleep quality", detail: "睡眠の質・効率", value: 70, direction: "up" },
    ],
    footnote: "記憶・睡眠関連指標を、ウェブ用HTMLグラフとして整理しています。",
  },
  neulearn: {
    title: "Cognitive function map",
    sourceLabel: "SMCQ / f-MRI / short-term memory",
    summary: "主観的記憶低下、短期記憶、実行・計画機能を認知機能の3軸で可視化します。",
    metrics: [
      { label: "SMCQ", detail: "主観的記憶感退", value: 72, direction: "down" },
      { label: "Short-term memory", detail: "短期記憶機能", value: 68, direction: "up" },
      { label: "Executive planning", detail: "f-MRI評価軸", value: 66, direction: "up" },
    ],
    footnote: "3つの認知評価グラフを、ひとつのHTML指標構造として整理しています。",
  },
  applephenon: {
    title: "Diet evidence timeline",
    sourceLabel: "12週間 + 終了後4週間 / BMI・CT",
    summary: "体脂肪、BMI、内臓脂肪を、12週摂取と4週持続の流れで見せます。",
    metrics: [
      { label: "Body fat", detail: "12週間体脂肪指標", value: 78, direction: "down" },
      { label: "BMI", detail: "16週間BMI推移", value: 70, direction: "down" },
      { label: "Visceral fat", detail: "CT撮影評価", value: 66, direction: "down" },
    ],
    footnote: "体脂肪・BMI・内臓脂肪グラフの見出しを基準に、ウェブチャート化しています。",
  },
  collagen: {
    title: "Skin health profile",
    sourceLabel: "皮膚水分 / R2 / Ra",
    summary: "皮膚水分、総弾力、平均粗さ、目元しわを美容素材の評価軸として整理します。",
    metrics: [
      { label: "Moisture", detail: "皮膚保湿", value: 76, direction: "up" },
      { label: "Elasticity R2", detail: "皮膚総弾力", value: 70, direction: "up" },
      { label: "Roughness Ra", detail: "平均粗さ", value: 64, direction: "down" },
    ],
    footnote: "皮膚指標グラフを、詳細ページ用HTMLプロファイルとして整理しています。",
  },
  pinitol: {
    title: "Liver and antioxidant markers",
    sourceLabel: "GPx / MDA / ALT / AST",
    summary: "脂肪肝、肝酵素、抗酸化指標を肝・血糖系素材の評価構造として表示します。",
    metrics: [
      { label: "GPx", detail: "抗酸化酵素", value: 70, direction: "up" },
      { label: "MDA", detail: "酸化ストレス指標", value: 66, direction: "down" },
      { label: "ALT / AST", detail: "肝酵素指標", value: 72, direction: "down" },
    ],
    footnote: "GPx/MDAおよび脂肪肝指標を、ひとつの視覚資料として整理しています。",
  },
  immulink: {
    title: "Innate and adaptive immunity",
    sourceLabel: "8 immune factors / beta-glucan rich",
    summary: "自然免疫と獲得免疫の両方を、8種免疫因子の改善方向としてまとめます。",
    metrics: [
      { label: "Innate immunity", detail: "自然免疫因子", value: 76, direction: "up" },
      { label: "Adaptive immunity", detail: "獲得免疫因子", value: 72, direction: "up" },
      { label: "Beta-glucan", detail: "β-グルカンリッチ", value: 82, direction: "balanced" },
    ],
    footnote: "免疫因子説明を、ウェブで読みやすい二軸構造として整理しています。",
  },
};
