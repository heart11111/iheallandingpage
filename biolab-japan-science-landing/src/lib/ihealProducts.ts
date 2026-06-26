export type IhealProduct = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  summary: string;
  features: string[];
  specRows: Array<{ label: string; value: string }>;
  highlights: Array<{ value: string; label: string }>;
  ingredients: string;
  badges: string[];
  note: string;
};

export const ihealProducts: IhealProduct[] = [
  {
    id: "venus",
    name: "アイヒール ヴィーナス",
    subtitle: "女性のための膣由来乳酸菌（プロバイオティクス）",
    image: "/images/iheal-products/venus-probiotics.webp",
    imageAlt: "アイヒール ヴィーナス乳酸菌の商品パッケージ",
    summary:
      "韓国で継続的に支持されている、女性のための膣由来乳酸菌。健康な韓国女性の膣に由来する特許乳酸菌3種を配合し、デリケートゾーンのコンディションを日常的に整えたい方に向けて設計したインナーケア製品です。",
    features: [
      "デリケートゾーンのニオイ・膣内フローラのケア",
      "妊活中の体調管理や、抗生物質服用後のケアを意識した設計",
      "かゆみ・生理周期前後の悩みに着目した女性向けフォーミュラ",
    ],
    specRows: [
      { label: "原産国", value: "韓国" },
      { label: "内容量", value: "500mg×30カプセル（30日分）" },
      { label: "参考価格", value: "¥2,990〜" },
    ],
    highlights: [
      { value: "300億", label: "投入菌数" },
      { value: "3種", label: "膣由来特許乳酸菌" },
      { value: "30日分", label: "500mg×30カプセル" },
    ],
    ingredients:
      "主な配合：L.クリスパタスMG242、L.ファーメンタムMG901、L.プランタラムMG989、鉄分、クランベリー濃縮粉末、ビタミンB群 ほか",
    badges: ["KFDA認証", "累積レビュー・販売実績", "毎月2万箱以上販売", "1日1カプセル"],
    note:
      "本製品は疾病の診断・治療・予防を目的とするものではありません。摂取方法や注意事項は製品表示をご確認ください。",
  },
  {
    id: "line-n",
    name: "アイヒール ラインエン",
    subtitle: "ガルシニア × 抗肥満特許菌株のダイエット用プロバイオティクス",
    image: "/images/iheal-products/line-n-probiotics.webp",
    imageAlt: "アイヒール ラインエン乳酸菌の商品パッケージ",
    summary:
      "「何を食べてもダイエット」を続けるための、体重管理向けプロバイオティクス。ガルシニア由来HCAと抗肥満特許菌株を組み合わせ、外食や間食が多い日常でも続けやすいスティック型に整えています。",
    features: [
      "無理な食事制限ではなく、毎日の管理習慣を支える設計",
      "体脂肪・体型の悩みに着目したダイエット用フォーミュラ",
      "炭水化物の摂取が多いライフスタイルにも取り入れやすい粉末スティック",
    ],
    specRows: [
      { label: "原産国", value: "韓国" },
      { label: "内容量", value: "750mg×30スティック（30日分）" },
      { label: "参考価格", value: "¥3,840〜" },
    ],
    highlights: [
      { value: "300億", label: "投入CFU" },
      { value: "2種", label: "抗肥満特許菌株" },
      { value: "30日分", label: "粉末スティック" },
    ],
    ingredients:
      "主な配合：ガルシニアカンボジア抽出物（HCA）、抗肥満特許菌株MG4231・MG4244、17種混合乳酸菌、セレニウム、ビタミンB群 ほか",
    badges: ["KFDA認証", "累積レビュー実績", "1日1スティック", "乳酸菌27日分"],
    note:
      "ダイエット中の食生活管理と併用する製品です。体質や健康状態に合わせ、製品表示の摂取目安をご確認ください。",
  },
  {
    id: "mediobiome",
    name: "アイヒール メディバイオーム",
    subtitle: "Mediobiome Inner Clean V｜デリケートゾーン用フェミニンソープ 150ml",
    image: "/images/iheal-products/mediobiome-inner-clean-v.webp",
    imageAlt: "メディバイオーム インナークリーンVの商品ボトル",
    summary:
      "健康なデリケートゾーンのための弱酸性・低刺激クレンザー。特殊取得のラクトバチルス発酵ろ過物と13種の発酵ハーブを組み合わせ、清潔感としっとり感を両立するデイリーケアとして設計しています。",
    features: [
      "弱酸性・低刺激で、毎日のデリケートゾーン洗浄に使いやすい処方",
      "有益菌バランスとpHバランスを意識し、うるおいをキープ",
      "13種の自然由来ハーブ発酵成分をやさしく配合",
    ],
    specRows: [
      { label: "原産国", value: "韓国" },
      { label: "内容量", value: "150ml（ソープ）" },
      { label: "参考価格", value: "¥1,990〜" },
    ],
    highlights: [
      { value: "99%↑", label: "洗浄満足度" },
      { value: "99.93%", label: "有害菌減少率" },
      { value: "99.87%", label: "膣炎ケア満足度" },
    ],
    ingredients:
      "主な配合：ラクトバチルス発酵ろ過物、13種の発酵ハーブエキス、ラウリルグルコシド系洗浄成分、デシルグルコシド、クエン酸 ほか",
    badges: ["弱酸性", "低刺激", "フェミニンウォッシュ", "150ml"],
    note:
      "使用感には個人差があります。肌に異常がある場合や使用中に違和感がある場合は使用を中止してください。",
  },
];
