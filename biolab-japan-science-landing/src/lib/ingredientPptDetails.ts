import type { EvidenceMetric } from "@/lib/ingredientEvidence";

export type PptGraphPanel = {
  title: string;
  subtitle: string;
  formula?: string;
  metrics: EvidenceMetric[];
};

export type IngredientPptDetail = {
  slideRef: string;
  productName: string;
  healthClaims: string[];
  originTitle: string;
  originItems: string[];
  features: string[];
  graphNotes: string[];
  graphPanels: PptGraphPanel[];
};

export const ingredientPptDetails: Record<string, IngredientPptDetail> = {
  med01: {
    slideRef: "PPTX Slide 07",
    productName: "iHEAL GINO 5 Formula - MED01",
    healthClaims: [
      "女性の膣内健康向上を目的に、膣内有益菌の増殖と有害菌抑制の資料を整理。",
      "101名のヒト適用試験とSCI論文で確認された、韓国女性の膣由来プロバイオティクス。",
    ],
    originTitle: "Probiotics Strain",
    originItems: [
      "L. plantarum MG989",
      "L. salivarius MG242",
      "L. fermentum MG901",
      "L. paracasei MG4272",
      "L. rhamnosus MG4288",
    ],
    features: [
      "韓国女性の膣から分離した100%ヒト由来プロバイオティクス。",
      "Nugent scoreを膣内環境評価の主要指標として整理。",
      "膣内乳酸菌の増殖、有害菌抑制、菌叢バランス回復の資料を提示。",
      "膣分泌物、灼熱感、排尿時の不快感に関する評価項目を確認。",
    ],
    graphNotes: [
      "Nugent scoreは生殖器感染の程度を示す指標で、スコアが低いほど感染程度が低いと説明されています。",
      "参照: Nutrients 2023, 15(2), 331",
    ],
    graphPanels: [
      {
        title: "Nugent score",
        subtitle: "膣内環境指標の低下方向",
        formula: "Nugent score ↓ = lower infection index",
        metrics: [
          { label: "Nugent score", detail: "スコア低下方向", value: 78, direction: "down" },
          { label: "Beneficial bacteria", detail: "有益菌増殖方向", value: 72, direction: "up" },
          { label: "Harmful bacteria", detail: "有害菌抑制方向", value: 66, direction: "down" },
        ],
      },
    ],
  },
  med02: {
    slideRef: "PPTX Slide 08",
    productName: "iHEAL DIT 2 Formula - MED02",
    healthClaims: [
      "脂肪細胞分化抑制を目的に設計された特許プロバイオティクス複合物。",
      "100名のヒト試験とSCI論文で検証された抗肥満向け特許乳酸菌。",
    ],
    originTitle: "Probiotics Strain",
    originItems: ["L. fermentum MG4231", "L. fermentum MG4244"],
    features: [
      "小児期の脂肪細胞分化抑制を通じた肥満リスク管理コンセプト。",
      "成人期の中性脂肪蓄積、肥満、脂質異常症リスクに関する評価項目を整理。",
      "体脂肪量、体脂肪率、体重、BMIの変化を複数グラフで提示。",
    ],
    graphNotes: [
      "BMIグラフはPPTXのネイティブチャートXMLから抽出した実数値を使用。",
      "体脂肪量、体脂肪率、体重はスライド画像内グラフの方向性をHTMLで再構成。",
    ],
    graphPanels: [
      {
        title: "BMI change",
        subtitle: "MED-02群とPlacebo群の比較",
        formula: "ΔBMI = BMI_after - BMI_baseline",
        metrics: [
          { label: "MED-02", detail: "BMI change", value: 70, displayValue: "-0.70 kg/m²", direction: "down" },
          { label: "Placebo", detail: "BMI change", value: 44, displayValue: "-0.44 kg/m²", direction: "down" },
        ],
      },
      {
        title: "Body composition",
        subtitle: "スライド内サブグラフの評価軸",
        metrics: [
          { label: "Fat mass", detail: "体脂肪量", value: 78, direction: "down" },
          { label: "Fat percentage", detail: "体脂肪率", value: 72, direction: "down" },
          { label: "Body weight", detail: "体重", value: 68, direction: "down" },
        ],
      },
    ],
  },
  nvp2106: {
    slideRef: "PPTX Slide 09",
    productName: "NVP-2106",
    healthClaims: [
      "デュオバイオーム技術の脳機能改善用2種特許プロバイオティクス複合物。",
      "60歳以上の記憶力低下高齢者120名を対象にしたヒト試験とSCI論文で検証。",
    ],
    originTitle: "Probiotics Strain",
    originItems: ["L. mucosae NK41", "B. longum NK46"],
    features: [
      "神経細胞損傷と記憶力低下の原因として説明されるAmyloid beta調整・低下の評価軸。",
      "認知機能、記憶力、注意集中力の改善方向を整理。",
      "アルツハイマー病評価尺度であるADAS-Cog13総点の改善を主要指標として提示。",
    ],
    graphNotes: ["スライドの評価項目を、脳機能関連の3指標グラフとしてHTML化。"],
    graphPanels: [
      {
        title: "Brain function markers",
        subtitle: "記憶・認知・注意集中",
        formula: "Cognitive profile = ADAS-Cog13 + memory + attention",
        metrics: [
          { label: "ADAS-Cog13", detail: "総点改善方向", value: 74, direction: "down" },
          { label: "Memory", detail: "記憶力", value: 70, direction: "up" },
          { label: "Attention", detail: "注意集中力", value: 66, direction: "up" },
        ],
      },
    ],
  },
  nvp1702: {
    slideRef: "PPTX Slide 10",
    productName: "NVP-1702 / NVP-17902",
    healthClaims: [
      "デュオバイオーム技術の肝機能改善用2種特許プロバイオティクス複合物。",
      "70名のヒト試験とSCI論文で検証された、肝機能改善用特許乳酸菌。",
      "アルコール性・非アルコール性の損傷肝コンテキストに向けた複合設計。",
    ],
    originTitle: "Probiotics Strain",
    originItems: ["L. plantarum LC27", "B. longum LC67"],
    features: [
      "体内の肝解毒機能強化を評価軸として整理。",
      "腸内エンドトキシンおよび血中エンドトキシン改善方向を提示。",
      "非アルコール性肝損傷: ALT、AST、γ-GTP、疲労指標、血中炎症指標を整理。",
      "アルコール性肝損傷: ALT、AST、γ-GTP、血中中性脂肪、血中炎症指標を整理。",
    ],
    graphNotes: ["スライド内のアルコール性・非アルコール性肝損傷の二軸構造をHTMLで再構成。"],
    graphPanels: [
      {
        title: "Liver enzyme panel",
        subtitle: "ALT / AST / γ-GTP",
        formula: "Liver profile = ALT + AST + γ-GTP",
        metrics: [
          { label: "ALT / AST", detail: "肝酵素指標", value: 74, direction: "down" },
          { label: "γ-GTP", detail: "飲酒関連指標", value: 68, direction: "down" },
          { label: "Inflammation", detail: "血中炎症指標", value: 62, direction: "down" },
        ],
      },
    ],
  },
  nvp1703: {
    slideRef: "PPTX Slide 11",
    productName: "NVP-1703",
    healthClaims: [
      "デュオバイオーム技術のアレルギー性鼻炎改善用特許プロバイオティクス複合物。",
      "小児・青少年81名、成人95名の大規模ヒト試験資料を整理。",
      "免疫過敏反応に伴う鼻の状態改善を目的とした特許プロバイオティクス。",
    ],
    originTitle: "Probiotics Strain",
    originItems: ["L. plantarum IM76", "B. longum IM55"],
    features: [
      "小児・青少年: TNSSのDaily / Weekly評価で有意的改善方向を提示。",
      "IL-10、IL-22など炎症調節サイトカインの改善方向を整理。",
      "成人: TNSS、鼻水、鼻づまり、鼻炎症状、IgE減少方向を整理。",
    ],
    graphNotes: ["PPTの小児・成人2群構造を、TNSSと免疫マーカーの比較パネルとして復元。"],
    graphPanels: [
      {
        title: "TNSS response",
        subtitle: "Daily / Weekly nasal symptom score",
        metrics: [
          { label: "Children / teens", detail: "TNSS改善方向", value: 76, direction: "down" },
          { label: "Adults", detail: "TNSS改善方向", value: 72, direction: "down" },
          { label: "IgE", detail: "免疫グロブリン指標", value: 62, direction: "down" },
        ],
      },
    ],
  },
  nvp1704: {
    slideRef: "PPTX Slide 12",
    productName: "NVP-1704",
    healthClaims: [
      "ストレス性疾患、気分、不安、睡眠不調コンテキストに向けた特許プロバイオティクス複合物。",
      "ストレスを持つ韓国人156名の大規模ヒト試験資料を整理。",
    ],
    originTitle: "Probiotics Strain",
    originItems: ["L. reuteri NK33", "B. adolescentis NK98"],
    features: [
      "気分、不安、睡眠の質に関する評価項目を整理。",
      "腸内ストレスマイクロバイオーム改善方向を提示。",
      "血中炎症性サイトカインIL-6の減少、BDNF増加、IL-6/BDNF比率低下を整理。",
      "摂取後のL. reuteriグループとBifidobacteriumグループの増加方向を提示。",
    ],
    graphNotes: ["ストレス・睡眠・炎症指標を、PPTの評価軸に沿ってHTML指標化。"],
    graphPanels: [
      {
        title: "Stress-sleep axis",
        subtitle: "Mood / sleep / inflammatory markers",
        formula: "Stress profile = IL-6 ↓ + BDNF ↑ + sleep quality ↑",
        metrics: [
          { label: "Sleep quality", detail: "睡眠の質", value: 70, direction: "up" },
          { label: "IL-6", detail: "炎症性サイトカイン", value: 64, direction: "down" },
          { label: "BDNF", detail: "脳由来神経栄養因子", value: 68, direction: "up" },
        ],
      },
    ],
  },
  bifido: {
    slideRef: "PPTX Slide 13",
    productName: "Bifidobacterium Probiotics",
    healthClaims: [
      "腸の健康と排便活動をサポートするヒト由来ビフィズス菌。",
      "母乳を摂取した健康な新生児の便由来、100%ヒト由来ビフィズス菌として整理。",
    ],
    originTitle: "Probiotics Strain",
    originItems: [
      "B. bifidum BGN4 - GRAS No.814 / NDI No.1079",
      "B. longum BORI - GRAS No.813 / NDI No.1082",
      "B. lactis AD011 - GRAS No.952 / NDI No.1118",
    ],
    features: [
      "FDA安全性認証資料: GRAS、NDI。",
      "HALAL、KOSHER認証資料を整理。",
      "症状別10件のヒト試験、80件の国際特許、260件のSCI論文規模を提示。",
      "12週摂取後のガス排出頻度、腹部膨満感に関する評価項目を確認。",
    ],
    graphNotes: ["スライド内の認証・臨床・特許・SCI規模を信頼性ダッシュボードとしてHTML化。"],
    graphPanels: [
      {
        title: "Evidence scale",
        subtitle: "Certification / clinical / paper scale",
        metrics: [
          { label: "Clinical studies", detail: "症状別ヒト試験", value: 52, displayValue: "10", direction: "balanced" },
          { label: "Patents", detail: "国際特許", value: 80, displayValue: "80", direction: "balanced" },
          { label: "SCI papers", detail: "SCI論文", value: 92, displayValue: "260", direction: "balanced" },
        ],
      },
    ],
  },
  testofen: {
    slideRef: "PPTX Slide 15",
    productName: "Testofen",
    healthClaims: [
      "更年期男性の健康に向けた差別化された機能性素材。",
      "男性更年期症状の精神・心理、身体機能、性機能の3軸改善を訴求軸として整理。",
    ],
    originTitle: "Origin Ingredient",
    originItems: ["Fenugreek seed extract", "Trigonella foenum-graecum"],
    features: [
      "男性ホルモンであるテストステロンの恒常性維持・向上を評価軸として整理。",
      "韓国内男性更年期関連素材の中で高いAMSデータを保有する素材として提示。",
      "米国で大衆的に使われる男性健康原料として整理。",
      "男性更年期向け追加臨床資料を保有。",
    ],
    graphNotes: ["AMSはAging Males Symptomsの略で、中高年男性の更年期関連症状を質問票化した評価指標として説明されています。"],
    graphPanels: [
      {
        title: "AMS questionnaire score",
        subtitle: "Mental / physical / sexual function",
        formula: "AMS total = mental + physical + sexual symptoms",
        metrics: [
          { label: "Mental", detail: "精神・心理安定", value: 72, direction: "down" },
          { label: "Physical", detail: "身体機能", value: 70, direction: "up" },
          { label: "Sexual", detail: "性機能", value: 68, direction: "up" },
        ],
      },
    ],
  },
  thinkgin: {
    slideRef: "PPTX Slide 16",
    productName: "ThinkGIN",
    healthClaims: [
      "記憶力および認知機能改善をサポートする素材として整理。",
      "一般紅参比で高いジンセノサイド含有を訴求軸として提示。",
    ],
    originTitle: "Origin Ingredient",
    originItems: ["Ginseng sprout extract powder", "Panax ginseng C.A. Meyer sprout"],
    features: [
      "記憶保存能力の強化。",
      "神経細胞炎症抑制。",
      "睡眠の質、睡眠効率の増加。",
      "シナプス可塑性増加による記憶力・学習能力の向上方向。",
      "即時回想力の増加、記憶力低下関連血液指標AChEの減少。",
    ],
    graphNotes: ["PPTの記憶・睡眠・AChE評価項目を、読みやすいHTML指標グラフとして整理。"],
    graphPanels: [
      {
        title: "Memory and sleep profile",
        subtitle: "Recall / sleep quality / AChE",
        formula: "Memory profile = recall ↑ + sleep efficiency ↑ + AChE ↓",
        metrics: [
          { label: "Immediate recall", detail: "即時回想力", value: 74, direction: "up" },
          { label: "Sleep efficiency", detail: "睡眠効率", value: 70, direction: "up" },
          { label: "AChE", detail: "記憶関連血液指標", value: 66, direction: "down" },
        ],
      },
    ],
  },
  neulearn: {
    slideRef: "PPTX Slide 17",
    productName: "Neu learn",
    healthClaims: [
      "加齢により低下した認知機能改善をサポートする素材として整理。",
      "大脳灰白質容積増加をf-MRIで確認・検証した資料を提示。",
    ],
    originTitle: "Origin Ingredient",
    originItems: ["Tremella fuciformis enzymatic extract", "White jelly mushroom enzymatic extract"],
    features: [
      "主観的記憶低下症状質問票SMCQの低下方向を確認。",
      "短期記憶実行作業の改善。",
      "計画機能改善をf-MRI画像評価軸とともに整理。",
    ],
    graphNotes: ["PPTの3グラフ構成を、SMCQ、短期記憶、実行・計画機能の3パネルとしてHTML化。"],
    graphPanels: [
      {
        title: "Cognitive function charts",
        subtitle: "SMCQ / short-term memory / executive planning",
        formula: "Cognitive response = SMCQ ↓ + short-term memory ↑ + planning ↑",
        metrics: [
          { label: "SMCQ", detail: "主観的記憶低下", value: 72, direction: "down" },
          { label: "Short-term memory", detail: "短期記憶機能", value: 68, direction: "up" },
          { label: "Planning", detail: "実行・計画機能", value: 66, direction: "up" },
        ],
      },
    ],
  },
  applephenon: {
    slideRef: "PPTX Slide 18",
    productName: "Applephenon",
    healthClaims: [
      "体脂肪低減をサポートするダイエット向け代表素材として整理。",
      "ダイエットカテゴリーの定番素材として提示。",
    ],
    originTitle: "Origin Ingredient",
    originItems: ["Unripe apple extract", "High-concentration apple polyphenol"],
    features: [
      "未熟リンゴ250個を濃縮する米国特許技術により、高濃度ポリフェノールを含有する素材として提示。",
      "中性脂肪抑制・排出を通じた体脂肪低減コンセプト。",
      "体脂肪量低減の評価資料を整理。",
    ],
    graphNotes: ["12週摂取、摂取終了後4週持続、16週BMI、CTによる内臓脂肪評価のスライド構造をHTMLで再構成。"],
    graphPanels: [
      {
        title: "Diet evidence timeline",
        subtitle: "12 weeks intake + 4 weeks follow-up",
        formula: "Diet profile = body fat ↓ + BMI ↓ + visceral fat ↓",
        metrics: [
          { label: "Body fat", detail: "12週間体脂肪", value: 78, direction: "down" },
          { label: "BMI", detail: "16週間BMI", value: 70, direction: "down" },
          { label: "Visceral fat", detail: "CT撮影評価", value: 66, direction: "down" },
        ],
      },
    ],
  },
  collagen: {
    slideRef: "PPTX Slide 19",
    productName: "Low-molecular Collagen Peptide AG",
    healthClaims: [
      "皮膚保湿をサポートする素材として整理。",
      "紫外線による皮膚ダメージから皮膚健康を維持するコンセプトを提示。",
    ],
    originTitle: "Origin Ingredient",
    originItems: ["Pangasius fish skin gelatin hydrolysate", "Low-molecular collagen peptide"],
    features: [
      "皮膚保湿改善。",
      "目元しわ減少を、肉眼評価と指標成分の両面で整理。",
      "皮膚総弾力改善: 生体弾力、純粋弾力。",
      "皮膚平均粗さ改善。",
    ],
    graphNotes: ["皮膚保湿、総弾力R2、平均粗さRa、目元しわの評価グラフをHTMLパネルとして整理。"],
    graphPanels: [
      {
        title: "Skin health charts",
        subtitle: "Moisture / elasticity / roughness",
        formula: "Skin profile = moisture ↑ + R2 ↑ + Ra ↓",
        metrics: [
          { label: "Moisture", detail: "皮膚保湿", value: 76, direction: "up" },
          { label: "Elasticity R2", detail: "皮膚総弾力", value: 70, direction: "up" },
          { label: "Roughness Ra", detail: "平均粗さ", value: 64, direction: "down" },
        ],
      },
    ],
  },
  dermania: {
    slideRef: "PPTX Slide 20",
    productName: "DermaNia",
    healthClaims: ["しわ生成抑制、しわケア、皮膚水分増加、保湿強化を訴求軸として整理。"],
    originTitle: "Origin Ingredient",
    originItems: ["Wild rice extract", "Zizania latifolia"],
    features: ["皮膚水分増加。", "12週臨床でのしわ低減評価。", "コラーゲン遺伝子活性化、MMPs遺伝子非活性化のメカニズム構造。"],
    graphNotes: ["PPTのメカニズム図を、活性化/非活性化の二軸図としてHTML化。"],
    graphPanels: [
      {
        title: "Skin mechanism",
        subtitle: "Collagen gene / MMPs gene",
        metrics: [
          { label: "Collagen gene", detail: "活性化", value: 74, direction: "up" },
          { label: "MMPs gene", detail: "非活性化", value: 66, direction: "down" },
          { label: "Skin moisture", detail: "保湿増加", value: 70, direction: "up" },
        ],
      },
    ],
  },
  agrimony: {
    slideRef: "PPTX Slide 21",
    productName: "Agrimony extract",
    healthClaims: ["非アルコール性脂肪肝改善をサポートする素材として整理。", "肝脂肪量、ALT、ASTの低下方向を提示。"],
    originTitle: "Origin Ingredient",
    originItems: ["Agrimonia pilosa extract"],
    features: ["ALT・AST、とくにALT数値の改善効果を評価。", "脂肪肝指数HSIの改善方向を整理。"],
    graphNotes: ["Before / After、ALT、AST、HSIのスライド構造をHTMLグラフとして整理。"],
    graphPanels: [
      {
        title: "Before / after liver markers",
        subtitle: "ALT / AST / HSI",
        formula: "Liver index = ALT ↓ + AST ↓ + HSI ↓",
        metrics: [
          { label: "ALT", detail: "Before → After", value: 72, direction: "down" },
          { label: "AST", detail: "Before → After", value: 66, direction: "down" },
          { label: "HSI", detail: "脂肪肝指数", value: 68, direction: "down" },
        ],
      },
    ],
  },
  pinitol: {
    slideRef: "PPTX Slide 22",
    productName: "Pinitol",
    healthClaims: ["非アルコール性脂肪肝改善をサポートする素材として整理。", "肝の中性脂肪とコレステロール低下方向を提示。"],
    originTitle: "Origin Ingredient",
    originItems: ["Carob pod extract", "Carob peel extract refined into functional ingredient"],
    features: [
      "損傷した肝細胞の改善・増加効果。",
      "肝の中性脂肪細胞の減少とサイズ低下。",
      "脂肪肝含量、ALT、ASTの低下方向。",
      "抗酸化活性酵素GPxの増加、MDAの低下方向。",
    ],
    graphNotes: ["GPx/MDA、脂肪肝、ALT、ASTのスライド内評価軸をHTMLに再構成。"],
    graphPanels: [
      {
        title: "Antioxidant and liver charts",
        subtitle: "GPx / MDA / fatty liver / ALT / AST",
        formula: "Liver response = GPx ↑ + MDA ↓ + ALT/AST ↓",
        metrics: [
          { label: "GPx", detail: "抗酸化活性酵素", value: 72, direction: "up" },
          { label: "MDA", detail: "酸化ストレス指標", value: 64, direction: "down" },
          { label: "ALT / AST", detail: "肝酵素", value: 70, direction: "down" },
        ],
      },
    ],
  },
  acetobeta: {
    slideRef: "PPTX Slide 23",
    productName: "Aceto Beta",
    healthClaims: ["アセトアルデヒドを速やかに分解し、飲酒による肝負担と二日酔い不快感の低減をサポートする素材として整理。"],
    originTitle: "Origin Ingredient",
    originItems: ["Soybean fermented vinegar culture", "Acetic acid bacteria"],
    features: [
      "飲酒後のすっきりした朝をサポートするコンセプト。",
      "ADH: アルコール分解酵素の増加方向。",
      "ALDH: アセトアルデヒド分解酵素の増加方向。",
    ],
    graphNotes: ["ADHとALDHの二酵素構造をHTMLで視覚化。"],
    graphPanels: [
      {
        title: "Alcohol metabolism enzymes",
        subtitle: "ADH / ALDH",
        formula: "Alcohol care = ADH ↑ + ALDH ↑",
        metrics: [
          { label: "ADH", detail: "Alcohol Dehydrogenase", value: 72, direction: "up" },
          { label: "ALDH", detail: "Acetaldehyde Dehydrogenase", value: 76, direction: "up" },
        ],
      },
    ],
  },
  immulink: {
    slideRef: "PPTX Slide 24",
    productName: "Immulink MBG",
    healthClaims: ["免疫機能増進をサポートする素材として整理。", "自然免疫と獲得免疫の両方の改善効果を提示。"],
    originTitle: "Origin Ingredient",
    originItems: ["Ganoderma lucidum mycelium extract powder"],
    features: ["特許超音波抽出技術。", "自然免疫と獲得免疫の双方で、8種免疫因子の有意な改善方向を確認。"],
    graphNotes: ["適応免疫因子と自然免疫因子の二群を、免疫ダッシュボードとしてHTML化。"],
    graphPanels: [
      {
        title: "Immune factor map",
        subtitle: "Innate and adaptive immunity",
        formula: "Immune profile = innate factors ↑ + adaptive factors ↑",
        metrics: [
          { label: "Innate immunity", detail: "自然免疫因子", value: 76, direction: "up" },
          { label: "Adaptive immunity", detail: "獲得免疫因子", value: 72, direction: "up" },
          { label: "8 factors", detail: "8種免疫因子", value: 84, direction: "balanced" },
        ],
      },
    ],
  },
};
