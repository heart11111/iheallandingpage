export type OriginMaterialFit = "cover" | "contain";

export type OriginMaterial = {
  badgesJa: string[];
  badgesKo: string[];
  factsJa: string[];
  factsKo: string[];
  fit: OriginMaterialFit;
  image: string;
  latin?: string;
  noteJa?: string;
  noteKo?: string;
  titleJa: string;
  titleKo: string;
};

/**
 * Origin Ingredient block for nature-derived materials.
 * Copy and photos follow the BIOLAB Japan Introducing PPTX (Origin Ingredient
 * slides + pipeline table). Extra origin notes from partner brochures are
 * included only when they describe the raw material itself.
 */
export const originMaterials: Record<string, OriginMaterial> = {
  testofen: {
    image: "/images/ingredients/testofen.webp",
    fit: "cover",
    titleJa: "ホロパ(フェヌグリーク)種子抽出物",
    titleKo: "호로파종자추출물",
    latin: "Trigonella foenum-graecum",
    badgesJa: ["インド産", "韓国個別認定型素材"],
    badgesKo: ["인도산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  thinkgin: {
    image: "/images/ingredients/thinkgin-upscaled.png",
    fit: "contain",
    titleJa: "新芽人参抽出粉末",
    titleKo: "새싹인삼추출분말",
    latin: "Panax ginseng C.A. Meyer sprout",
    badgesJa: ["韓国産", "韓国個別認定型素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  neulearn: {
    image: "/images/ingredients/neulearn.webp",
    fit: "contain",
    titleJa: "白キクラゲ酵素分解抽出物",
    titleKo: "흰목이버섯효소분해추출물",
    latin: "Tremella fuciformis Beck-extract",
    badgesJa: ["中国産", "韓国個別認定型素材"],
    badgesKo: ["중국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  applephenon: {
    image: "/images/ingredients/applephenon.webp",
    fit: "contain",
    titleJa: "未熟リンゴ抽出物",
    titleKo: "풋사과추출물",
    latin: "Applephenon®",
    badgesJa: ["韓国産", "韓国個別認定型素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  collagen: {
    image: "/images/ingredients/collagen.webp",
    fit: "cover",
    titleJa: "低分子コラーゲンペプチド AG",
    titleKo: "저분자콜라겐펩타이드 AG",
    latin: "Pangasius hypophthalmus",
    badgesJa: ["韓国産", "韓国個別認定型素材", "韓国初の二重機能性素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재", "한국 최초의 이중 기능성 소재"],
    factsJa: ["パンガシウスの魚皮由来ゼラチンを加水分解", "500Da以下の低分子コラーゲンペプチド"],
    factsKo: ["가이양(Pangasius)의 어피로 만든 젤라틴의 가수분해 공법", "500Da 이하 저분자 콜라겐 펩타이드"],
  },
  dermania: {
    image: "/images/ingredients/dermania.webp",
    fit: "cover",
    titleJa: "マコモ抽出物",
    titleKo: "줄풀추출물",
    latin: "Zizania latifolia (Wild rice)",
    badgesJa: ["韓国産", "韓国個別認定型素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  agrimony: {
    image: "/images/ingredients/agrimony.webp",
    fit: "cover",
    titleJa: "アグリモニー(仙鶴草)抽出物",
    titleKo: "아그리모니추출물",
    latin: "Agrimonia pilosa",
    badgesJa: ["韓国産", "韓国個別認定型素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
  pinitol: {
    image: "/images/ingredients/pinitol-clean.webp",
    fit: "contain",
    titleJa: "Pinitol",
    titleKo: "피니톨",
    latin: "Carob",
    badgesJa: ["韓国産", "韓国個別認定型素材"],
    badgesKo: ["한국산", "한국 개별인정형 소재"],
    noteJa: "地中海沿岸に自生するマメ科植物キャロブの鞘から抽出・精製します。",
    noteKo: "지중해 연안에서 자생하는 콩과 식물 캐롭(Carob)의 껍질에서 추출·정제합니다.",
    factsJa: [],
    factsKo: [],
  },
  acetobeta: {
    image: "/images/ingredients/acetobeta.webp",
    fit: "contain",
    titleJa: "大豆発酵食酢培養物",
    titleKo: "대두발효식초배양물",
    latin: "Acetic acid bacteria",
    badgesJa: [],
    badgesKo: [],
    noteJa: "酢酸菌から生産した大豆発酵食酢培養物です。",
    noteKo: "초산균(Acetic acid bacteria)으로부터 생산한 대두발효식초배양물입니다.",
    factsJa: [],
    factsKo: [],
  },
  immulink: {
    image: "/images/ingredients/immulink.webp",
    fit: "cover",
    titleJa: "霊芝菌糸体抽出粉末",
    titleKo: "영지버섯 균사체 추출분말",
    latin: "Ganoderma lucidum",
    badgesJa: ["米国産", "韓国個別認定型素材"],
    badgesKo: ["미국산", "한국 개별인정형 소재"],
    factsJa: [],
    factsKo: [],
  },
};
