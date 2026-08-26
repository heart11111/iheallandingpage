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
      "女性の腟の健康をサポートするプロバイオティクス複合物です。",
      "腟炎の予防・改善と、腟内環境を健やかに保つのに役立ちます。",
      "韓国女性の腟から分離した乳酸菌で、101名のヒト臨床試験とSCI論文9編で確認されています。",
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
      "健康な韓国女性の腟から分離した、100%ヒト由来のプロバイオティクスです。",
      "19〜50歳の妊娠可能年齢の女性101名を対象にヒト臨床試験を行いました。",
      "韓国・米国・欧州で国際特許を取得し、日本でも特許を出願中です。",
      "腟炎の指標であるNugent score(腟分泌物のGram染色で腟内細菌叢を0〜10点で評価する指標)が改善しました。",
      "腟内の乳酸菌が増えて有害菌が抑えられ、腟内フローラが正常な状態に整います。",
      "腟分泌物や腟の灼熱感、排尿痛の軽減が見られました。",
    ],
    graphNotes: ["出典: Nutrients 2023, 15(2), 331"],
    evidenceImages: [
      {
        src: "/images/ingredients/med01-evidence-1.webp",
        caption: "排尿痛・腟分泌物・腟灼熱感の変化(MED-01群 vs プラセボ群)",
        source: "Nutrients 2023, 15(2), 331",
      },
      {
        src: "/images/ingredients/med01-evidence-2.png",
        caption: "Nugent scoreの変化(MED-01群 vs プラセボ群、スコアが低いほど感染程度が低い)",
        source: "Nutrients 2023, 15(2), 331",
      },
    ],
  },
  med02: {
    productName: "iHEAL DIT 2 Formula - MED02",
    healthClaims: [
      "脂肪細胞の分化を抑える特許プロバイオティクス複合物です。",
      "体重や体脂肪の減少、BMI(体格指数)の低下をサポートします。",
      "100名のヒト臨床試験とSCI論文6編で確認された、抗肥満向けの特許乳酸菌です。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. fermentum MG4231", "L. fermentum MG4244"],
    features: [
      "過体重または肥満の成人100名を対象にヒト臨床試験を行いました。",
      "韓国・米国・欧州で国際特許を取得しています。",
      "子どものうちから脂肪細胞の分化を抑え、小児肥満のリスクを下げます。",
      "大人になってからの中性脂肪の蓄積による肥満や脂質異常症のリスクも抑えます。",
      "臨床データ(12週): 体脂肪量 約-1,200g(プラセボ約-400g)、体脂肪率 約-0.85%(プラセボ約-0.15%)、体重 約-2.1kg(プラセボ約-1.2kg)。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/med02-evidence-1.webp",
        caption: "体脂肪量変化・体脂肪率変化・体重変化(MED-02群 vs プラセボ群)",
      },
      {
        src: "/images/ingredients/med02-evidence-2.png",
        caption: "BMI変化量(MED-02群 -0.70 kg/m2、プラセボ群 -0.44 kg/m2)",
      },
    ],
  },
  nvp2106: {
    productName: "NVP-2106",
    healthClaims: [
      "デュオバイオーム技術による、脳機能の改善に向けた2種の特許プロバイオティクス複合物です。",
      "60歳以上で記憶力が低下した高齢者120名のヒト臨床試験とSCI論文で確認されています。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. mucosae NK41", "B. longum NK46"],
    features: [
      "神経細胞の損傷や記憶力低下の原因とされる「アミロイドβ」の調整・低減に働きかけます。",
      "認知機能・記憶力・注意集中力の改善が見られました。",
      "アルツハイマー病の評価尺度ADAS-Cog13の総点が、12週間の摂取でプラセボ比202%改善しました(P=0.0318)。",
      "記憶力の総点はプラセボ比207%、遅延単語再生はプラセボ比1,514%改善しました(P=0.0037)。",
      "注意集中力は、正反応数315%・誤反応数147%・脱落誤謬数315%の改善が見られました(12週摂取時点)。",
    ],
    graphNotes: [],
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
      "デュオバイオーム技術による、肝機能の改善に向けた2種の特許プロバイオティクス複合物です。",
      "非アルコール性93名・アルコール性70名のヒト臨床試験2件とSCI論文で確認された、肝機能改善向けの特許乳酸菌です。",
      "アルコール性・非アルコール性で傷んだ肝臓のケアを考えた複合設計です。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. plantarum LC27", "B. longum LC67"],
    features: [
      "肝臓の解毒機能を高め、腸内・血中のエンドトキシンを改善します。",
      "非アルコール性肝障害: 肝障害の指標であるALT・AST・γ-GTPが低下しました(ALT P=0.0260/0.0397、AST P=0.0131、γ-GTP P=0.0229)。",
      "非アルコール性肝障害: 疲労指標と血中炎症指標もあわせて改善しました。",
      "アルコール性肝障害: 肝障害の指標であるALT・γ-GTPが低下しました(γ-GTP P=0.0292、ALT P=0.0332)。",
      "アルコール性肝障害: 血中中性脂肪と血中炎症指標もあわせて改善しました。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp1702-evidence-1.webp",
        caption: "アルコール性肝損傷群: γ-GTP・ALT・ASTの12週間変化(NVP-1702群 vs プラセボ群、γ-GTP P=0.0292、ALT P=0.0332)",
      },
      {
        src: "/images/ingredients/nvp1702-evidence-2.webp",
        caption: "非アルコール性肝損傷群: ALT・AST・γ-GTPの12週間変化(ALT P=0.0260/0.0397, AST P=0.0131, γ-GTP P=0.0229)",
      },
      {
        src: "/images/ingredients/nvp1702-evidence-3.png",
        caption: "肝損傷メカニズム: LPS/TNF-αとALT・AST・γ-GTP指標の関係",
      },
    ],
  },
  nvp1703: {
    productName: "NVP-1703",
    healthClaims: [
      "デュオバイオーム技術による、アレルギー性鼻炎の改善に向けた特許プロバイオティクス複合物です。",
      "小児・青少年81名、成人95名という大規模なヒト臨床試験を行いました。",
      "免疫の過敏な反応にともなう鼻の状態の改善を目指した特許プロバイオティクスです。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. plantarum IM76", "B. longum IM55"],
    features: [
      "小児・青少年: 鼻症状スコア(TNSS)がDaily・Weeklyともに有意に改善しました。",
      "小児・青少年: 炎症を抑えるサイトカインIL-10・IL-22も有意に改善しました。",
      "成人: 鼻の症状が全体的に改善しました。TNSS総点(P=0.029)、水様性の鼻水(P=0.007)、鼻づまり(P=0.0098)。",
      "成人: アレルギー反応に関わる免疫グロブリンIgEが減少しました。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/nvp1703-evidence-1.webp",
        caption: "小児・青少年対象ヒト適用試験: TNSS(Weekly/Daily)の有意な改善",
      },
      {
        src: "/images/ingredients/nvp1703-evidence-2.webp",
        caption: "成人対象ヒト適用試験: TNSS総点(P=0.029)、水様性鼻水(P=0.007)、鼻づまり(P=0.0098)の改善",
      },
      {
        src: "/images/ingredients/nvp1703-evidence-3.jpeg",
        caption: "免疫過敏反応および鼻状態改善メカニズム(IgE、IL-10、RCAT/TNSS評価の流れ)",
      },
    ],
  },
  nvp1704: {
    productName: "NVP-1704",
    healthClaims: [
      "ストレス性の不調やうつ・不安・不眠の改善に向けた特許プロバイオティクス複合物です。",
      "ストレスを抱える韓国人156名という大規模なヒト臨床試験を行いました。",
    ],
    originTitle: "使用菌株",
    originItems: ["L. reuteri NK33", "B. adolescentis NK98"],
    features: [
      "うつ・不安・不眠を含めた睡眠の質が向上し、腸内のストレス関連マイクロバイオームも改善しました。",
      "血中の炎症性サイトカインIL-6が減り、BDNFが増えて、IL-6/BDNF比が低下しました(P=0.041)。",
      "摂取後、主要な構成菌であるL. reuteri群とBifidobacterium群が増えました。",
    ],
    graphNotes: [],
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
      "腸の健康と快適なお通じをサポートする、ヒト由来のビフィズス菌です。",
      "母乳で育った健康な新生児の便から採取した、100%ヒト由来のビフィズス菌です。",
    ],
    originTitle: "使用菌株",
    originItems: [
      "B. bifidum BGN4 — 1,000億CFU/g · GRAS No.814 / NDI No.1079",
      "B. longum BORI — 1,000億CFU/g · GRAS No.813 / NDI No.1082",
      "B. lactis AD011 — 1,000億CFU/g · GRAS No.952 / NDI No.1118",
    ],
    features: [
      "米国食品医薬品局(FDA)の安全性認証(GRAS・NDI)に加え、HALAL・KOSHER認証も取得しています。",
      "症状別に10件のヒト臨床試験、80件の国際特許、260編以上のSCI論文を持つ世界的なビフィズス菌です。",
      "12週間の摂取で、ガスの排出頻度が上がり、お腹の張りが和らぎました。",
      "参考: BGN4・BORIをベースとしたプロバイオティクス(40億CFU/日、12週間)を65歳以上の高齢者が摂取した試験で、認知機能と気分の改善が確認されました(ソウル大学校盆唐病院実施)。",
    ],
    graphNotes: ["出典: J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40"],
    evidenceImages: [
      {
        src: "/images/ingredients/bifido-evidence-2.webp",
        caption: "12週摂取後、プラセボ対比でガス排出頻度が上昇し腹部膨満感が改善",
      },
      {
        src: "/images/ingredients/bifido-evidence-6.png",
        caption: "BGN4・BORI配合プロバイオティクスの高齢者対象ヒト臨床試験資料",
      },
      {
        src: "/images/ingredients/bifido-evidence-1.webp",
        caption: "米国食品医薬品局(FDA)GRAS・NDI認証(BGN4/BORI/AD011の登録番号)",
      },
    ],
  },
  testofen: {
    productName: "Testofen",
    healthClaims: [
      "更年期を迎えた男性の健康に向けた、他にない機能性素材です。",
      "男性更年期の症状を、精神・心理、身体機能、性機能の3つの面から改善します。",
    ],
    originTitle: "原料",
    originItems: ["ホロパ(フェヌグリーク)種子抽出物 Trigonella foenum-graecum"],
    features: [
      "43〜75歳の男性を対象に、12週間のヒト臨床試験を行いました。",
      "男性ホルモンであるテストステロンの恒常性を保ち、高めます。",
      "男性更年期の症状(精神・心理の安定、身体機能の向上、性機能の向上)が大きく改善しました。",
      "韓国内の男性更年期関連素材の中で最も高いAMSデータを持ち、米国でも最も普及している男性向け原料です。",
      "更年期の男性を対象とした追加の臨床データもそろえています。",
    ],
    graphNotes: [
      "出典: Rao A et al. The Aging Male. 2016 Jun;19(2):134-42",
      "出典: Muscle synthesis - Sachin Wankhede, et al., 2015",
      "出典: Sexual function - Elizabeth Steels, et al., 2011",
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
      {
        src: "/images/ingredients/testofen-evidence-3.webp",
        caption: "精神・心理スコアの変化(Testofen群 vs プラセボ群、12週間)",
        source: "Rao A et al. The Aging Male. 2016 Jun;19(2):134-42",
      },
    ],
  },
  thinkgin: {
    productName: "ThinkGIN",
    healthClaims: [
      "記憶力と認知機能の改善に役立ちます。",
      "一般紅参より高濃度の「ジンセノサイド」を含有。",
    ],
    originTitle: "原料",
    originItems: ["新芽人参抽出粉末 Panax ginseng C.A. Meyer sprout"],
    features: [
      "55〜75歳の男女を対象に、12週間のヒト臨床試験を行いました。",
      "記憶を保つ力を高め、神経細胞の炎症を抑えます。",
      "睡眠の質・効率が上がり、シナプス可塑性の向上によって記憶力や学習能力が高まります。",
      "即時想起力が向上し(SVLT総点でP<0.01)、記憶力低下に関わる血液指標AChEが減少しました。",
    ],
    graphNotes: [],
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
      "加齢によって低下した認知機能の改善に役立ちます。",
      "大脳の灰白質の容積が増えることを、f-MRIで確認・検証しています。",
    ],
    originTitle: "原料",
    originItems: ["白キクラゲ酵素分解抽出物 Tremella fuciformis Beck-extract"],
    features: [
      "40〜65歳の男女を対象に、12週間のヒト臨床試験を行いました。",
      "自覚される記憶力の低下が軽減しました。記憶減退の質問票(SMCQ)スコアが低下し、600mg・1,200mgともプラセボ比で有意(P=0.007/P=0.002)。",
      "短期記憶の遂行機能が改善しました(P=0.001)。",
      "計画を立てて実行する機能も改善しました(600mg P=0.08、1,200mg P=0.02)。",
      "f-MRI(機能的磁気共鳴画像)で、大脳の灰白質容積の増加を確認しました。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/neulearn-evidence-1-clean.png",
        caption: "f-MRIで確認された大脳灰白質容積増加のクラスター(右側縁上回・右側中前頭回・右側中心後回・左側楔前部)",
      },
      {
        src: "/images/ingredients/neulearn-evidence-2-clean.png",
        caption: "短期記憶の変化(P=0.001)・遂行計画機能の変化(P=0.02)",
      },
      {
        src: "/images/ingredients/neulearn-evidence-3-clean.png",
        caption: "主観的記憶減退症状質問票(SMCQ)の変化(600mg: P=0.007、1,200mg: P=0.002)",
      },
    ],
  },
  applephenon: {
    productName: "Applephenon",
    healthClaims: ["体脂肪を減らすのに役立つ、ダイエット向けの定番ロングセラー原料です。"],
    originTitle: "原料",
    originItems: ["未熟リンゴ抽出物(青リンゴポリフェノール)"],
    features: [
      "20〜55歳の男女を対象に、12週間のヒト臨床試験を行いました。",
      "未熟リンゴ250個分を濃縮する3種の米国特許技術で、高濃度のポリフェノールを含みます。",
      "中性脂肪の抑制・排出を通じた体脂肪減少効果。摂取終了後4週間も効果が持続。",
    ],
    graphNotes: ["出典: Journal of Oleo Science. 59(6) 321-338 (2010) / 56(8) 417-428 (2007)"],
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
      {
        src: "/images/ingredients/applephenon-evidence-4.jpeg",
        caption: "CT撮影による腹部内臓脂肪評価(摂取前後の比較)",
        source: "Journal of Oleo Science. 59(6) 321-338 (2010) / 56(8) 417-428 (2007)",
      },
    ],
  },
  collagen: {
    productName: "低分子コラーゲンペプチドAG",
    healthClaims: [
      "肌の潤いをサポートします。",
      "紫外線による肌ダメージから、肌の健康を守るのに役立ちます。",
    ],
    originTitle: "原料",
    originItems: ["Long-pep collagen peptide AG", "パンガシウス(Pangasius)の魚皮由来ゼラチン加水分解物", "500Da以下の低分子コラーゲンペプチド"],
    features: [
      "30〜65歳の女性を対象に、12週間のヒト臨床試験を行いました。",
      "皮膚保湿指標の改善、目元の小じわ減少が確認されました(肉眼評価・指標成分の両方で確認)。",
      "肌全体の弾力(生体弾力・純粋弾力)が高まり、肌のキメも整いました。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/collagen-evidence-1-clean.png",
        caption: "皮膚保湿の改善(46.229→48.245)・皮膚総弾力R2の改善(0.694→0.726)(いずれも摂取前後で有意差)",
      },
      {
        src: "/images/ingredients/collagen-evidence-2-clean.png",
        caption: "目元しわの専門家評価改善(2.585→2.366, P<0.01)・皮膚平均粗さRaの改善(12.845→12.404)",
      },
    ],
  },
  dermania: {
    productName: "DermaNia",
    healthClaims: ["しわの生成を抑えるケアと、肌の水分アップ・保湿の強化に役立ちます。"],
    originTitle: "原料",
    originItems: ["マコモ抽出物 Zizania latifolia(Wild rice)"],
    features: [
      "成人女性を対象に、12週間のヒト臨床試験を行いました。",
      "肌の水分が増え、しわが減りました(いずれもプラセボ比 P<0.05)。",
      "仕組み: コラーゲン遺伝子を活性化しMMPs遺伝子の働きを抑えることで、しわの形成を抑え、保湿力を高めます。",
    ],
    graphNotes: ["出典: 慶熙大学校皮膚バイオテクノロジーセンター実施試験"],
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
      {
        src: "/images/ingredients/dermania-evidence-3.png",
        caption: "メカニズム: コラーゲン遺伝子活性化とMMPs遺伝子非活性化によるしわ・保湿ケア",
      },
    ],
  },
  agrimony: {
    productName: "アグリモニー抽出物 (Agrimonia pilosa)",
    healthClaims: ["非アルコール性脂肪肝の改善に役立ちます。", "肝脂肪量やALT・ASTの低下を確認しています。"],
    originTitle: "原料",
    originItems: ["アグリモニー(仙鶴草)抽出物 Agrimonia pilosa"],
    features: [
      "19〜70歳の男女を対象に、13週間のヒト臨床試験を行いました。",
      "ALT値(P=0.025)・AST値(P=0.002)の改善が見られました。",
      "脂肪肝指数(HSI)も改善しました(P=0.044)。",
    ],
    graphNotes: [],
    evidenceImages: [
      {
        src: "/images/ingredients/agrimony-alt-evidence.png",
        caption: "ALT値の減少",
      },
      {
        src: "/images/ingredients/agrimony-ast-evidence.png",
        caption: "AST値の減少",
      },
      {
        src: "/images/ingredients/agrimony-hsi-evidence.png",
        caption: "HSI値の減少",
      },
      {
        src: "/images/ingredients/agrimony-evidence-2.jpeg",
        caption: "脂肪肝組織の比較画像(正常肝、脂肪肝、抽出物摂取後の組織変化)",
      },
    ],
  },
  pinitol: {
    productName: "Pinitol",
    healthClaims: ["非アルコール性脂肪肝の改善に役立ちます。", "肝臓の中性脂肪やコレステロールの減少を確認しています。"],
    originTitle: "原料",
    originItems: ["キャロブ(Carob)の鞘から抽出・精製"],
    features: [
      "脂肪肝のある成人60名を対象に、12週間のヒト臨床試験を行いました。",
      "傷んだ肝細胞の改善・増加が見られ、肝臓の中性脂肪細胞は数が減り、サイズも小さくなりました。",
      "肝臓に蓄積した脂肪が減りました。肝脂肪含量 17.9% → 15.2% (P=0.010)。",
      "肝障害の指標であるALT・AST値が低下しました。",
      "抗酸化力が高まりました。抗酸化酵素GPxの増加(P=0.015)、酸化ストレス指標MDAの減少(P=0.002)。",
    ],
    graphNotes: [],
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
    healthClaims: ["アセトアルデヒドをすばやく分解し、飲酒による肝臓の負担や二日酔いをやわらげます。"],
    originTitle: "原料",
    originItems: ["大豆発酵食酢培養物(酢酸菌由来)"],
    features: [
      "20〜40代の成人30名を対象にヒト臨床試験を行いました。",
      "飲んだ翌朝の、すっきりとした目覚めをサポートします。",
      "アルコールを分解する酵素ADH(アルコール脱水素酵素)が増え、血中アルコール濃度が下がります。",
      "アセトアルデヒドを分解する酵素ALDH(アセトアルデヒド脱水素酵素)が増え、二日酔いをやわらげます。",
    ],
    graphNotes: ["出典: Journal of Agriculture & Life Science. 2016,50,223-31"],
    evidenceImages: [
      {
        src: "/images/ingredients/acetobeta-evidence-1.webp",
        caption: "アルコールがアセトアルデヒドを経て酢酸へ分解される流れ",
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
    healthClaims: ["免疫機能を高めるのに役立ちます。", "自然免疫と獲得免疫、その両方への改善効果を実証しています。"],
    originTitle: "原料",
    originItems: ["霊芝菌糸体抽出粉末 Ganoderma lucidum mycelium extract powder"],
    features: [
      "18〜55歳の男女を対象に、13週間のヒト臨床試験を行いました。",
      "特許を取得した超音波抽出技術を用いています。",
      "自然免疫(NK細胞数・活性)と獲得免疫(総リンパ球・T細胞・CD4/CD8比・血清IgA)の両方で、8種の免疫指標が有意に改善しました。",
      "β-グルカンを77%以上と高濃度で含みます。",
      "構造の特徴: β-1,3およびβ-1,6の短い鎖と、Acetylationなどを含む複雑な鎖構造を持ちます。",
      "熱に強く(〜261°C)、pHにも安定(pH1〜11)で、無味・無臭です。",
      "韓国、米国(FDA GRAS)、欧州(EFSA)、台湾、中国、マレーシア、タイ、メキシコなどに登録されています。",
      "有機認証、Non-GMO、グルテンフリー、Kosher、HALALの各認証を取得しています。",
      "獲得免疫の改善: 総リンパ球数、Tリンパ球(CD3+)、ヘルパーTリンパ球(CD4+)、細胞傷害性Tリンパ球(CD8+)、CD4/CD8比、血清IgAグロブリン濃度が増えました。",
      "自然免疫の改善: NK細胞数とNK細胞活性が増えました。",
    ],
    graphNotes: ["出典: Foods 2023, 12(3), 659. doi:10.3390/foods12030659"],
    evidenceImages: [
      {
        src: "/images/ingredients/immulink-evidence-1.webp",
        caption: "自然免疫(NK細胞数・NK細胞細胞傷害活性)・獲得免疫(総リンパ球・T細胞・CD4/CD8比・血清IgA)8因子の有意な改善",
        source: "Foods 2023, 12(3), 659. doi:10.3390/foods12030659",
      },
    ],
  },
};
