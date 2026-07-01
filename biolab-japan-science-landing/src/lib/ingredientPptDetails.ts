export type PptEvidenceImage = {
  src: string;
  caption: string;
  source?: string;
};

export type IngredientPptDetail = {
  productName: string;
  healthClaims: string[];
  originTitle: string;
  originItems: string[];
  features: string[];
  graphNotes: string[];
  evidenceImages: PptEvidenceImage[];
};

export const ingredientPptDetails: Record<string, IngredientPptDetail> = {
  med01: {
    productName: "iHEAL GINO 5 Formula - MED01",
    healthClaims: [
      "女性の膣健康向上に役立つプロバイオティクス複合物。",
      "膣炎の予防および改善に役立つ。膣内環境の改善に役立つ。",
      "101名のヒト適用試験とSCI論文(9編)で確認された、韓国女性の膣由来プロバイオティクス。",
    ],
    originTitle: "使用菌株",
    originItems: [
      "L. plantarum MG989",
      "L. salivarius MG242",
      "L. fermentum MG901",
      "L. paracasei MG4272",
      "L. rhamnosus MG4288",
    ],
    features: [
      "健康な韓国女性の膣から分離した100%ヒト由来プロバイオティクス。",
      "101名対象のヒト適用試験完了(19歳〜50歳の可妊期女性)。",
      "国際特許保有(韓国・米国・欧州)、日本特許出願中。",
      "膣炎指標(Nugent score)の改善。",
      "膣内乳酸菌の増殖と有害菌の抑制による膣内細菌叢の正常化。",
      "膣分泌物の減少、膣灼熱感の減少、排尿痛の減少。",
    ],
    graphNotes: [
      "Nugent scoreは生殖器感染の程度を示す指標で、スコアが低いほど感染程度が低いとされる。",
      "出典: Nutrients 2023, 15(2), 331",
    ],
    evidenceImages: [
      {
        src: "/images/ingredients/med01-evidence-1.webp",
        caption: "排尿痛(生理痛)・膣分泌物・膣灼熱感の変化(MED-01群 vs プラセボ群)",
        source: "Nutrients 2023, 15(2), 331",
      },
    ],
  },
  med02: {
    productName: "iHEAL DIT 2 Formula - MED02",
    healthClaims: [
      "脂肪細胞の分化抑制のための特許プロバイオティクス複合物。",
      "体重、体脂肪の減少および体質量の減少に役立つ。",
      "100名のヒト適用試験とSCI論文(6編)で検証された抗肥満向け特許乳酸菌。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. fermentum MG4231", "L. fermentum MG4244"],
    features: [
      "100名対象のヒト適用試験完了(過体重または肥満の成人)。",
      "国際特許保有(韓国・米国・欧州)。",
      "小児期の脂肪細胞分化抑制による小児肥満リスクの減少。",
      "成人期の中性脂肪蓄積による肥満・脂質異常症発生リスクの減少。",
      "臨床データ(12週): 体脂肪量 約-1,200g(プラセボ約-400g)、体脂肪率 約-0.85%(プラセボ約-0.15%)、体重 約-2.1kg(プラセボ約-1.2kg)。",
    ],
    graphNotes: ["バーグラフは提供資料に掲載された実測値をもとに再現。単位: 体脂肪量(g)、体脂肪率(%)、体重(kg)。"],
    evidenceImages: [
      {
        src: "/images/ingredients/med02-evidence-1.webp",
        caption: "体脂肪量変化・体脂肪率変化・体重変化(MED-02群 vs プラセボ群)",
      },
    ],
  },
  nvp2106: {
    productName: "NVP-2106",
    healthClaims: [
      "デュオバイオーム技術による脳機能改善用2種特許プロバイオティクス複合物。",
      "60歳以上の記憶力低下高齢者120名を対象にしたヒト適用試験とSCI論文で検証。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. mucosae NK41", "B. longum NK46"],
    features: [
      "神経細胞損傷と記憶力低下の原因とされる「アミロイドベータ」の調整・低下。",
      "認知機能、記憶力、注意集中力の改善。",
      "アルツハイマー病評価尺度ADAS-Cog13総点: 12週摂取でプラセボ対比202%改善(P=0.0318)。",
      "記憶力総点: プラセボ対比207%改善。遅延単語再生: プラセボ対比1,514%改善(P=0.0037)。",
      "注意集中力: 正反応数315%改善、誤反応数147%改善、脱落誤謬数315%改善(12週摂取時点)。",
    ],
    graphNotes: ["12週摂取時点でのADAS-Cog13総点、記憶力総点、遅延単語再生、注意集中力の実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp2106-evidence-1.webp",
        caption: "ADAS-Cog13総点の改善(12週摂取時点でプラセボ対比202%改善, P=0.0318)",
      },
      {
        src: "/images/ingredients/nvp2106-evidence-2.webp",
        caption: "記憶力総点の改善(プラセボ対比207%改善)と遅延単語再生の改善(プラセボ対比1,514%改善)",
      },
      {
        src: "/images/ingredients/nvp2106-evidence-3.webp",
        caption: "注意集中力: 正反応数315%改善、誤反応数147%改善、脱落誤謬数315%改善(12週摂取時点)",
      },
    ],
  },
  nvp1702: {
    productName: "NVP-1702",
    healthClaims: [
      "デュオバイオーム技術による肝機能改善用2種特許プロバイオティクス複合物。",
      "93名のヒト適用試験とSCI論文で検証された、肝機能改善用特許乳酸菌。",
      "アルコール性・非アルコール性の損傷した肝の改善に向けた複合設計。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. plantarum LC27", "B. longum LC67"],
    features: [
      "体内の肝解毒機能強化、腸内エンドトキシンおよび血中エンドトキシンの改善。",
      "非アルコール性肝損傷: ALT・AST・γ-GTP・疲労指標・血中炎症指標の改善(γ-GTP P=0.0292、ALT P=0.0332)。",
      "アルコール性肝損傷: ALT・AST・γ-GTP・血中中性脂肪・血中炎症指標の改善(ALT P=0.0260/0.0397、AST P=0.0131、γ-GTP P=0.0229)。",
    ],
    graphNotes: ["非アルコール性・アルコール性それぞれの肝損傷グループのALT/AST/γ-GTP実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp1702-evidence-1.webp",
        caption: "非アルコール性肝損傷群: γ-GTP・ALT・ASTの12週間変化(NVP-1702群 vs プラセボ群、P=0.0292/P=0.0332)",
      },
      {
        src: "/images/ingredients/nvp1702-evidence-2.webp",
        caption: "アルコール性肝損傷群: ALT・AST・γ-GTPの12週間変化(P=0.0260/0.0397, P=0.0131, P=0.0229)",
      },
    ],
  },
  nvp1703: {
    productName: "NVP-1703",
    healthClaims: [
      "デュオバイオーム技術によるアレルギー性鼻炎改善用特許プロバイオティクス複合物。",
      "小児・青少年81名、成人95名の大規模ヒト適用試験を実施。",
      "免疫過敏反応に伴う鼻の状態改善を目的とした特許プロバイオティクス。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. plantarum IM76", "B. longum IM55"],
    features: [
      "小児・青少年: TNSS(全体鼻症状点数)のDaily/Weekly評価で有意な改善、炎症調節サイトカインIL-10・IL-22の有意な改善。",
      "成人: TNSS総点(P=0.029)、水様性鼻水(P=0.007)、鼻づまり(P=0.0098)の改善、免疫グロブリンIgEの減少。",
    ],
    graphNotes: ["小児・青少年群と成人群、それぞれのTNSS実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp1703-evidence-1.webp",
        caption: "小児・青少年対象ヒト適用試験: TNSS(Weekly/Daily)の有意な改善",
      },
      {
        src: "/images/ingredients/nvp1703-evidence-2.webp",
        caption: "成人対象ヒト適用試験: TNSS総点(P=0.029)、水様性鼻水(P=0.007)、鼻づまり(P=0.0098)の改善",
      },
    ],
  },
  nvp1704: {
    productName: "NVP-1704",
    healthClaims: [
      "ストレス性疾患、うつ、不安、不眠症の改善に向けた特許プロバイオティクス複合物。",
      "ストレスを抱える韓国人156名の大規模ヒト適用試験を実施。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. reuteri NK33", "B. adolescentis NK98"],
    features: [
      "うつ、不安、不眠症を含む睡眠の質の向上、腸内ストレスマイクロバイオームの改善。",
      "血中炎症性サイトカインIL-6の減少およびBDNFの増加、IL-6/BDNF比率の減少(P=0.041)。",
      "摂取後の主要構成菌株 L. reuteri群とBifidobacterium群の増加。",
    ],
    graphNotes: ["BDI/BAI、PSQI/ISI、IL-6/BDNFの実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp1704-evidence-1.webp",
        caption: "うつ・不安尺度BDI-II/BAI/BDI-II+BAIの改善(NVP-1704群 vs プラセボ群)",
      },
      {
        src: "/images/ingredients/nvp1704-evidence-2.webp",
        caption: "睡眠の質尺度PSQI(総合・日中機能不全)・不眠症重症度尺度ISIの改善",
      },
      {
        src: "/images/ingredients/nvp1704-evidence-3.webp",
        caption: "血液内炎症性サイトカインIL-6の減少およびBDNFの増加(P=0.041)",
      },
    ],
  },
  bifido: {
    productName: "Bifidobacterium Probiotics",
    healthClaims: [
      "腸の健康と排便活動に役立つヒト由来ビフィズス菌。",
      "母乳を与えられた健康な新生児の便由来、100%ヒト由来ビフィズス菌。",
    ],
    originTitle: "使用菌株",
    originItems: [
      "B. bifidum BGN4 - GRAS No.814 / NDI No.1079",
      "B. longum BORI - GRAS No.813 / NDI No.1082",
      "B. lactis AD011 - GRAS No.952 / NDI No.1118",
    ],
    features: [
      "米国食品医薬品局(FDA)安全性認証取得(GRAS・NDI)、HALAL・KOSHER認証も取得。",
      "症状別10件のヒト試験、80件の国際特許、260編以上のSCI論文を保有する世界的なビフィズス菌。",
      "12週間摂取後、ガス排出頻度の上昇と腹部膨満感の改善。",
      "参考: BGN4・BORIをベースとしたプロバイオティクス(40億CFU/日、12週間)を65歳以上の高齢者が摂取した試験で、認知機能と気分の改善が確認された(ソウル大学校盆唐再生病院実施)。",
    ],
    graphNotes: [
      "12週摂取後のガス排出頻度・腹部膨満感の実測データをそのまま掲載。",
      "出典: J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40",
    ],
    evidenceImages: [
      {
        src: "/images/ingredients/bifido-evidence-1.webp",
        caption: "米国食品医薬品局(FDA)GRAS・NDI認証(BGN4/BORI/AD011の登録番号)",
      },
      {
        src: "/images/ingredients/bifido-evidence-2.webp",
        caption: "12週摂取後、プラセボ対比でガス排出頻度が上昇し腹部膨満感が改善",
      },
    ],
  },
  testofen: {
    productName: "Testofen",
    healthClaims: [
      "更年期男性の健康に向けた差別化された機能性素材。",
      "男性更年期症状の精神・心理、身体機能、性機能の3軸改善を提示。",
    ],
    originTitle: "原料",
    originItems: ["ホロパ(フェヌグリーク)種子抽出物 Trigonella foenum-graecum"],
    features: [
      "43歳〜75歳男性対象、12週間のヒト適用試験。",
      "男性ホルモンであるテストステロンの恒常性維持・向上。",
      "男性更年期症状(精神・心理の安定、身体機能の向上、性機能の向上)の大幅な改善。",
      "韓国内の男性更年期関連素材の中で最も高いAMSデータを保有。米国で最も普及している男性健康原料。",
      "更年期男性向けの追加臨床データを保有。",
    ],
    graphNotes: [
      "AMSはAging Males Symptomsの略で、中高年男性の更年期関連症状を質問票化した評価指標。韓国食品医薬品安全処(KFDA)はAMSを男性更年期評価の主要バイオマーカーに指定している。",
      "出典: Rao A et al. The Aging Male. 2016 Jun;19(2):134-42",
    ],
    evidenceImages: [
      {
        src: "/images/ingredients/testofen-evidence-1.webp",
        caption: "AMS総点の変化(Testofen群 vs プラセボ群、12週間)",
        source: "Rao A et al. The Aging Male. 2016 Jun;19(2):134-42",
      },
      {
        src: "/images/ingredients/testofen-evidence-2.webp",
        caption: "身体機能スコア・性機能スコアの変化(12週間)",
        source: "Rao A et al. The Aging Male. 2016 Jun;19(2):134-42",
      },
    ],
  },
  thinkgin: {
    productName: "ThinkGIN",
    healthClaims: [
      "記憶力および認知機能の改善に役立つ。",
      "一般紅参対比で圧倒的な「ジンセノサイド」を含有。",
    ],
    originTitle: "原料",
    originItems: ["新芽人参抽出粉末 Panax ginseng C.A. Meyer sprout"],
    features: [
      "55歳〜75歳男女対象、12週間のヒト適用試験。",
      "記憶保存能力の強化、神経細胞の炎症抑制。",
      "睡眠の質・睡眠効率の増加、シナプス可塑性の増加による記憶力・学習能力の向上。",
      "即時想起力の増加(SVLT総点でP<0.01)、記憶力低下関連血液指標AChEの減少。",
    ],
    graphNotes: ["SVLT即時想起点数、PSQI-K睡眠潜時、AChEの実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/thinkgin-evidence-1.webp",
        caption: "記憶力低下関連血液指標AChEの減少(ThinkGIN群 vs プラセボ群)",
      },
      {
        src: "/images/ingredients/thinkgin-evidence-2.webp",
        caption: "SVLT即時想起点数の変化(総点でP<0.01、2次試行でP<0.05)",
      },
      {
        src: "/images/ingredients/thinkgin-evidence-3.webp",
        caption: "PSQI-K睡眠潜時スコアの改善(P<0.05)。睡眠の質と記憶力には深い関連があるとされる。",
      },
    ],
  },
  neulearn: {
    productName: "Neu learn",
    healthClaims: [
      "加齢により低下した認知機能の改善に役立つ。",
      "大脳灰白質容積の増加をf-MRIで確認・検証。",
    ],
    originTitle: "原料",
    originItems: ["白キクラゲ酵素分解抽出物 Tremella fuciformis Beck-extract"],
    features: [
      "40歳〜65歳男女対象、12週間のヒト適用試験。",
      "主観的記憶減退症状質問票(SMCQ)の低下(600mg・1,200mgともにプラセボ対比有意差 P=0.007/P=0.002)。",
      "短期記憶遂行機能の改善(P=0.001)、計画機能の改善(600mg P=0.08、1,200mg P=0.02)。",
      "f-MRI(機能的磁気共鳴画像)で大脳灰白質容積の増加を確認。",
    ],
    graphNotes: ["SMCQ、短期記憶、遂行・計画機能、f-MRI画像の実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/neulearn-evidence-1.webp",
        caption: "f-MRIで確認された大脳灰白質容積増加のクラスター(右側縁上回・右側中前頭回・右側頭頂回・左側被蓋)",
      },
      {
        src: "/images/ingredients/neulearn-evidence-2.webp",
        caption: "短期記憶の変化(P=0.001)・遂行計画機能の変化(P=0.02)",
      },
      {
        src: "/images/ingredients/neulearn-evidence-3.webp",
        caption: "主観的記憶減退症状質問票(SMCQ)の変化(600mg: P=0.007、1,200mg: P=0.002)",
      },
    ],
  },
  applephenon: {
    productName: "Applephenon",
    healthClaims: ["体脂肪低減に役立つダイエット向けの代表的なロングセラー原料。"],
    originTitle: "原料",
    originItems: ["未熟リンゴ抽出物(青リンゴポリフェノール)"],
    features: [
      "20歳〜55歳男女対象、12週間のヒト適用試験。",
      "未熟リンゴ250個分を濃縮する米国特許技術3種により、圧倒的な高濃縮ポリフェノールを含有。",
      "中性脂肪の抑制・排出を通じた確実な体脂肪減少効果。摂取終了後4週間も効果が持続。",
    ],
    graphNotes: [
      "12週間の体脂肪減少と摂取終了後4週間の持続効果、16週間のBMI変化、CT撮影による内臓脂肪評価の実測データをそのまま掲載。",
      "出典: Journal of Oleo Science. 59(6) 321-338 (2010) / 56(8) 417-428 (2007)",
    ],
    evidenceImages: [
      {
        src: "/images/ingredients/applephenon-evidence-1.webp",
        caption: "体重・ウエスト周囲径・BMI・臀囲・腹部内臓脂肪・総腹部脂肪面積の減少(12週間摂取)",
      },
      {
        src: "/images/ingredients/applephenon-evidence-2.webp",
        caption: "12週摂取時のウエスト周囲径変化とその後の持続効果(摂取終了後4週間まで)",
        source: "Journal of Oleo Science. 59(6) 321-338 (2010)",
      },
      {
        src: "/images/ingredients/applephenon-evidence-3.webp",
        caption: "16週間のBMI変化(Applephenon群 vs プラセボ群)",
        source: "Journal of Oleo Science. 56(8) 417-428 (2007)",
      },
    ],
  },
  collagen: {
    productName: "Low-molecular Collagen Peptide AG",
    healthClaims: [
      "肌の潤いに役立つ。",
      "紫外線による皮膚ダメージからの皮膚健康維持に役立つ。",
    ],
    originTitle: "原料",
    originItems: ["パンガシウス(Pangasius)の魚皮由来ゼラチン加水分解物", "500Da以下の低分子コラーゲンペプチド"],
    features: [
      "30歳〜65歳女性対象、12週間のヒト適用試験。",
      "明確な皮膚保湿の改善、目元のしわ減少(肉眼評価・指標成分の両方で確認)。",
      "皮膚総弾力の改善(生体弾力・純粋弾力)、皮膚の粗さ改善。",
    ],
    graphNotes: ["皮膚保湿、総弾力(R2)、平均粗さ(Ra)、目元しわの実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/collagen-evidence-1.webp",
        caption: "皮膚保湿の改善(46.229→48.245)・皮膚総弾力R2の改善(0.694→0.726)(いずれも摂取前後で有意差)",
      },
      {
        src: "/images/ingredients/collagen-evidence-2.webp",
        caption: "目元しわの専門家評価改善(2.585→2.366, P<0.01)・皮膚平均粗さRaの改善(12.845→12.404)",
      },
    ],
  },
  dermania: {
    productName: "DermaNia",
    healthClaims: ["しわの生成抑制・しわケア、皮膚水分増加・保湿強化に役立つ。"],
    originTitle: "原料",
    originItems: ["マコモ抽出物 Zizania latifolia(Wild rice)"],
    features: [
      "成人女性対象、12週間のヒト適用試験。",
      "皮膚水分の増加、しわ減少(いずれもプラセボ対比 P<0.05)。",
      "メカニズム: コラーゲン遺伝子の活性化とMMPs遺伝子の非活性化により、しわ形成を抑制し保湿力を高める。",
    ],
    graphNotes: [
      "しわ減少・皮膚水分増加の実測データをそのまま掲載。",
      "出典: 慶熙大学校皮膚バイオテクノロジーセンター実施試験",
    ],
    evidenceImages: [
      {
        src: "/images/ingredients/dermania-evidence-1.webp",
        caption: "しわ減少(ベースラインから12週間の変化、DermaNiA群 vs プラセボ群、P<0.05)",
        source: "慶熙大学校皮膚バイオテクノロジーセンター実施",
      },
      {
        src: "/images/ingredients/dermania-evidence-2.webp",
        caption: "皮膚水分量の増加(ベースラインから12週間の変化、P<0.05)",
        source: "慶熙大学校皮膚バイオテクノロジーセンター実施",
      },
    ],
  },
  agrimony: {
    productName: "Agrimony extract",
    healthClaims: ["非アルコール性脂肪肝の改善に役立つ。", "肝脂肪量、ALT、ASTの低下を確認。"],
    originTitle: "原料",
    originItems: ["アグリモニー(仙鶴草)抽出物 Agrimonia pilosa"],
    features: [
      "19歳〜70歳男女対象、13週間のヒト適用試験。",
      "ALT値(P=0.025)・AST値(P=0.002)の改善効果。",
      "脂肪肝指数(HSI)の改善(P=0.044)。",
    ],
    graphNotes: ["ALT、AST、HSIのベースライン対8週間の実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/agrimony-evidence-1.webp",
        caption: "ALT値(P=0.025)・AST値(P=0.002)・脂肪肝指数HSI(P=0.044)の改善(ベースライン対8週間)",
      },
    ],
  },
  pinitol: {
    productName: "Pinitol",
    healthClaims: ["非アルコール性脂肪肝の改善に役立つ。", "肝の中性脂肪とコレステロールの減少を確認。"],
    originTitle: "原料",
    originItems: ["キャロブ(Carob)の鞘から抽出・精製"],
    features: [
      "脂肪肝のある成人60名対象、12週間のヒト適用試験。",
      "損傷した肝細胞の改善・増加効果、肝の中性脂肪細胞の減少とサイズの縮小。",
      "脂肪肝含量・ALT・AST値の低下(脂肪肝含量17.9%→15.2%, P=0.010)、抗酸化活性酵素GPxの増加(P=0.015)とMDAの低下(P=0.002)。",
    ],
    graphNotes: ["GPx/MDA、脂肪肝含量、ALT/ASTの実測データをそのまま掲載。"],
    evidenceImages: [
      {
        src: "/images/ingredients/pinitol-evidence-1.webp",
        caption: "血漿GPxの増加(P=0.015)・尿中MDAの減少(P=0.002)(Pinitol群 vs プラセボ群)",
      },
      {
        src: "/images/ingredients/pinitol-evidence-2.webp",
        caption: "肝脂肪含量の減少(17.9%→15.2%, P=0.010)・ALT/AST値の減少(P=0.030/0.018, プラセボ対比P=0.040)",
      },
    ],
  },
  acetobeta: {
    productName: "Aceto Beta",
    healthClaims: ["アセトアルデヒドを速やかに分解し、飲酒による肝負担と二日酔いの軽減に優れた効果。"],
    originTitle: "原料",
    originItems: ["大豆発酵食酢培養物(酢酸菌由来)"],
    features: [
      "20代〜40代成人40名対象のヒト適用試験。",
      "飲酒後のすっきりした朝の実感をサポート。",
      "ADH(アルコール脱水素酵素)の増加による血中アルコール濃度の減少。",
      "ALDH(アセトアルデヒド脱水素酵素)の増加による二日酔いの軽減。",
    ],
    graphNotes: ["ADHとALDHの酵素変化、飲酒後のアセトアルデヒド・吐き気の実測データをそのまま掲載。", "出典: Journal of Agriculture & Life Science. 2016,50,223-31"],
    evidenceImages: [
      {
        src: "/images/ingredients/acetobeta-evidence-1.webp",
        caption: "ADH・ALDHの増加メカニズム(アルコール→アセトアルデヒド→酢酸の分解経路)",
        source: "Journal of Agriculture & Life Science. 2016,50,223-31",
      },
      {
        src: "/images/ingredients/acetobeta-evidence-2.webp",
        caption: "飲酒0.25時間後の血中アセトアルデヒド変化量: プラセボ対比5倍の差",
      },
      {
        src: "/images/ingredients/acetobeta-evidence-3.webp",
        caption: "吐き気の改善効果 約70%(13名中9名)",
      },
    ],
  },
  immulink: {
    productName: "Immulink MBG",
    healthClaims: ["免疫機能の増進に役立つ。", "自然免疫と獲得免疫の両方の改善効果を実証。"],
    originTitle: "原料",
    originItems: ["霊芝菌糸体抽出粉末 Ganoderma lucidum mycelium extract powder"],
    features: [
      "18歳〜55歳男女対象、13週間のヒト適用試験。",
      "特許取得済みの超音波抽出技術。",
      "自然免疫(NK細胞数・活性)と獲得免疫(総リンパ球・T細胞・CD4/CD8比・血清IgA)の両方で8種の免疫因子の有意な改善を確認。",
      "高含有量のβ-グルカン(77%以上)。",
    ],
    graphNotes: ["自然免疫因子・獲得免疫因子8種の実測データをそのまま掲載。", "出典: Foods 2023, 12(3), 659. doi:10.3390/foods12030659"],
    evidenceImages: [
      {
        src: "/images/ingredients/immulink-evidence-1.webp",
        caption: "自然免疫(NK細胞数・NK細胞細胞傷害活性)・獲得免疫(総リンパ球・T細胞・CD4/CD8比・血清IgA)8因子の有意な改善",
        source: "Foods 2023, 12(3), 659. doi:10.3390/foods12030659",
      },
      {
        src: "/images/ingredients/immulink-evidence-2.webp",
        caption: "特長(β-グルカン77%以上、熱・pH安定性)とグローバル認証・登録状況(韓国・米国FDA GRAS・EU EFSA・台湾・中国ほか、Kosher・HALAL)",
      },
    ],
  },
};
