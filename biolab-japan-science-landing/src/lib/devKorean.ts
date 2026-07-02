import type { Ingredient, IngredientLine } from "@/lib/ingredients";

export type KoreanIngredientCopy = {
  name?: string;
  category: string;
  area: string;
  summary: string;
  healthClaims: string[];
  featurePoints: string[];
  evidenceTags: string[];
  origin?: string[];
};

export const devKoreanLabels = {
  language: "개발용 언어",
  ja: "JP",
  ko: "KR",
  materialLabel: {
    strains: "Probiotics Strain",
    origin: "Origin Ingredient",
  },
  detail: {
    summary: "소재 개요",
    claims: "기대 기능",
    specs: "기본 정보",
    area: "용도 영역",
    intake: "1일 섭취 기준",
    line: "소재 라인",
    evidence: "근거 정보",
    features: "상세 포인트",
    function: "기능성 내용",
    feature: "특징",
    rawMaterial: "원료 구성",
    documents: "근거 자료",
    materialName: "소재명",
    functionalContent: "기능성 내용",
    category: "용도 분류",
    documentType: "자료 구분",
  },
  line: {
    "Functional Probiotics": "Functional Probiotics line",
    "Nature-derived Ingredients": "Functional Nature‘s food ingredients Line",
  } satisfies Record<IngredientLine, string>,
};

export const devKoreanPageCopy = {
  microbiome: {
    title: "Functional Probiotics line",
    copy: "Probiotics Strain by Application (인체시험 완료) 소재 전체 목록입니다.",
    lead: "여성 질건강, 체지방 감소, 뇌건강, 코건강, 간건강, 스트레스·수면, 장건강 소재를 확인할 수 있습니다.",
    primary: "기능성 식품 소재 사업",
  },
  nature: {
    title: "Functional Nature‘s food ingredients Line",
    copy: "Nature’s food ingredients by Application (인체시험 완료) 소재 전체 목록입니다.",
    lead: "남성 갱년기, 체지방 감소, 인지 개선, 피부보습, 간건강, 홍삼 등 소재를 확인할 수 있습니다.",
    primary: "기능성 식품 소재 사업",
  },
  detailPrimary: {
    microbiome: "Probiotics Strain by Application",
    nature: "Nature’s food ingredients by Application",
  },
};

export const koreanIngredientCopy: Record<string, KoreanIngredientCopy> = {
  med01: {
    name: "iHEAL GINO 5 Formula – MED 01 (for Woman)",
    category: "여성",
    area: "여성 질건강",
    summary: "여성 질건강 향상(질내 유익균 증식 및 유해균억제)을 위한 한국 여성 질 유래 유산균입니다.",
    healthClaims: ["여성 질건강 향상", "질내 유익균 증식 및 유해균억제", "101명의 인체시험 완료 및 SCI 논문으로 검증 된 한국 여성 질 유래 유산균"],
    featurePoints: ["한국 여성의 질에서 유래한 100% 인체 유래 프로바이오틱스", "질염 지표(Nugent score) 개선", "질 내 유산균 증식 및 유해균 억제 및 내 균총 정상 회복"],
    evidenceTags: ["101명의 인체시험 완료", "SCI 논문", "Nugent score"],
  },
  med02: {
    name: "iHEAL DIT 2 Formula – MED02 (for anti-obesity)",
    category: "체지방",
    area: "체지방 감소",
    summary: "지방 세포 분화 억제를 위한 특허 프로바이오틱스 복합물이며, 항비만 특허 유산균으로 정리됩니다.",
    healthClaims: ["지방 세포 분화 억제를 위한 특허 프로바이오틱스 복합물", "100명의 인체시험 완료 및 SCI 논문으로 검증 된 항비만 특허 유산균", "체지방량, 체지방률, 체질량(BMI 지수)의 대폭 감소"],
    featurePoints: ["어린이 시기의 지방세포 분화 억제를 통한 소아비만 감소", "성인 시기의 중성지방 축적에 의한 비만 및 이상지질혈증 발생 위험 감소", "BMI ↓"],
    evidenceTags: ["100명의 인체시험 완료", "SCI 논문", "BMI ↓"],
  },
  nvp2106: {
    name: "NVP-2106 (for Brain)",
    category: "뇌·기억",
    area: "뇌건강",
    summary: "듀오바이옴 기술의 “뇌 기능 개선용” 2종 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["듀오바이옴 기술의 “뇌 기능 개선용” 2종 특허 프로바이오틱스 복합물", "120명의 인체시험(60세 이상 기억력 저하 노인)과 SCI 논문으로 검증 된 뇌기능 개선용 특허 유산균", "인지기능 및 기억력 개선"],
    featurePoints: ["신경세포 손상과 기억력 저하의 원인인 “아밀라이드 베타” 조절 / 저하", "주의 집중력 개선", "알츠하이머병의 평가 척도인 “ADAS-Cog13” 지표 총점 개선"],
    evidenceTags: ["120명의 인체시험", "SCI 논문", "ADAS-Cog13"],
  },
  nvp1702: {
    name: "NVP-17902 (for Liver)",
    category: "간",
    area: "간건강",
    summary: "듀오바이옴 기술의 “간 기능 개선용” 2종 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["듀오바이옴 기술의 “간 기능 개선용” 2종 특허 프로바이오틱스 복합물", "70명의 인체시험 완료와 SCI 논문으로 검증 된 간기능 개선용 특허 유산균", "알콜성, 비알콜성 손상된 간 개선용 특허 프로바이오틱스 복합물"],
    featurePoints: ["체내 간 해독 기능 강화", "장내 내독소 및 혈중 내독소 개선", "비알콜성 간손상 및 알콜성 간손상 지표 개선"],
    evidenceTags: ["70명의 인체시험 완료", "SCI 논문", "ALT/AST/yGTP"],
  },
  nvp1703: {
    category: "코",
    name: "NVP-1703 (for Nose)",
    area: "코건강",
    summary: "듀오바이옴 기술의 “알레르기성 비염 개선용” 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["듀오바이옴 기술의 “알레르기성 비염 개선용” 특허 프로바이오틱스 복합물", "소아, 청소년 81명 / 성인 95명의 대규모 인체시험 완료", "면역과민반응에 코상태 개선용 특허 프로바이오틱스"],
    featurePoints: ["TNSS(전체 코증상 점수)의 유의적 개선", "수양성 콧물, 코막힘 개선", "비염증상 개선, 면역글로빈 IgE 감소"],
    evidenceTags: ["소아·청소년 81명", "성인 95명", "TNSS"],
  },
  nvp1704: {
    name: "NVP-1704 (for Relax)",
    category: "스트레스",
    area: "스트레스, 수면",
    summary: "스트레스성 질환, 우울, 불안, 불면증 개선용 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["스트레스성 질환, 우울, 불안, 불면증 개선용 특허 프로바이오틱스 복합물", "스트레스를 가진 한국인 156명의 대규모 인체시험 완료", "우울, 불안 및 불면증을 포함한 수면의 질 향상"],
    featurePoints: ["장내 스트레스 마이크로바이옴 개선", "혈액내 염증성 사이토카인 IL-6 유의작 감소 실현", "BDNF 증가 및 IL-6/BDNF 비율 감소"],
    evidenceTags: ["156명의 대규모 인체시험", "IL-6", "BDNF"],
  },
  bifido: {
    name: "Bifidobacterium Probiotics",
    category: "장",
    area: "장건강",
    summary: "장건강과 배변활동에 도움을 줄 수 있는 100% 인체유래 비피더스 유산균입니다.",
    healthClaims: ["장건강과 배변활동에 도움을 줄 수 있음", "100% 인체유래 비피더스 유산균", "12주 섭취 후 가스 배출 빈더 상승, 복부 팽만감 개선"],
    featurePoints: ["미국 식품의약국(FDA) 안전성 인증 획득(GRAS, NDI 인증 획득)", "HALAL인증, KOSHER 인증 획득", "80개의 국제 특허 보유, 260개의 SCI논문 보유"],
    evidenceTags: ["FDA GRAS", "NDI 인증", "HALAL / KOSHER"],
  },
  testofen: {
    name: "Testofen® (for Men’s menopause)",
    category: "남성",
    area: "남성 갱년기",
    summary: "갱년기 남성 건강을 위한 차별화된 기능성 소재입니다.",
    healthClaims: ["갱년기 남성 건강을 위한 차별화된 기능성 소재", "남성 갱년기 증상 대폭 개선", "정신/심리안정, 신체기능 향상, 성기능 향상"],
    featurePoints: ["남성 호르몬인 테스토스테론 항상성 유지 및 향상", "한국내 남성 갱년기 관련 소재 중 가장 높은 AMS 데이터 보유", "미국에서 가장 대중적인 남성 건강 원료"],
    evidenceTags: ["대한민국 식약처(KFDA)", "AMS", "남성 갱년기"],
    origin: ["호로파종자추출물 (Trigonellafoenum-graecum)"],
  },
  thinkgin: {
    name: "ThinkGIN",
    category: "기억",
    area: "기억력 및 인지 기능",
    summary: "기억력 및 인지 기능 개선에 도움을 줄 수 있으며 일반 홍삼 대비 압도적인 “진세노사이드”를 함유합니다.",
    healthClaims: ["기억력 및 인지 기능 개선에 도움을 줄 수 있음", "일반 홍삼 대비 압도적인 “진세노사이드” 함유", "수면의 질, 수면 효율 증가"],
    featurePoints: ["기억 저장능력 강화", "신경세포 염증 억제", "즉각 회상력 증가, 기억력 저하 관련 혈액지표 AChE 감소"],
    evidenceTags: ["진세노사이드", "AChE", "수면의 질"],
    origin: ["새싹인삼추출분말 (Panx ginseng C.A Meyer sprout)"],
  },
  neulearn: {
    name: "Neu learn",
    category: "인지",
    area: "인지 개선",
    summary: "노화로 인한 저하된 인지기능 개선에 도움을 줄 수 있는 흰목이버섯효소분해추출물입니다.",
    healthClaims: ["노화로 인한 저하된 인지기능 개선에 도움을 줄 수 있음", "대뇌 회백질 용적증가 확인 및 검증(f-MRI)", "주관적 기억 감퇴 증상 설문 점수 평균 변화"],
    featurePoints: ["주간적 기억 감퇴 증상 설문(SMCQ) 감소 확인", "단기 기억집행 작업 개선", "계획 기능 개선"],
    evidenceTags: ["f-MRI", "SMCQ", "단기 기억기능"],
    origin: ["흰목이버섯효소분해추출물 (Tremella fuciformis Beck-extract)"],
  },
  applephenon: {
    name: "풋사과추출물 (Applephenon)",
    category: "체지방",
    area: "체지방 감소",
    summary: "체지방 감소에 도움을 줄 수 있는 다이어트를 위한 대표적인 스테드셀러 원료입니다.",
    healthClaims: ["체지방 감소에 도움을 줄 수 있음", "다이어트를 위한 대표적인 스테드셀러 원료", "12주간 체지방감소 + 섭취 종료 4주간 지속효과"],
    featurePoints: ["풋사과 250개 농축하는 세가지의 미국 특허기술", "압도적인 고농축 폴리페놀 함유", "중성지방 억제 및 배출을 통한 확실한 체지방 감소효과"],
    evidenceTags: ["체지방 감소", "BMI 감소", "내장지방량 감소"],
    origin: ["풋사과추출물"],
  },
  collagen: {
    name: "저분자콜라갠펩타이트 AG",
    category: "피부",
    area: "피부보습",
    summary: "피부보습과 자외선에 의한 피부손상으로부터 피부건강 유지에 도움을 줄 수 있는 소재입니다.",
    healthClaims: ["피부보습에 도움을 줄 수 있음", "자외선에 의한 피부손상으로부터 피부건강을 유지하는데 도움을 줄 수 있음", "눈가주름 감소 및 피부 총탄력 개선"],
    featurePoints: ["확연한 피부보습 개선", "눈가주름 감소", "피부 총탄력 개선, 피부 거칠기 개선"],
    evidenceTags: ["피부보습", "피부 총탄력(R2)", "피부 평균 거칠기(Ra)"],
    origin: ["가이양(Pangasiushypophthalmus)의 어피로 만든 젤라틴의 가수분해 공법"],
  },
  dermania: {
    name: "DermaNia (for Skin Health)",
    category: "피부",
    area: "피부 수분 / 주름",
    summary: "주름 생성 억제 및 주름 억제, 피부 수분 증가 및 피부 보습 강화에 도움을 줄 수 있는 소재입니다.",
    healthClaims: ["주름 생성 억제 및 주름 억제", "피부 수분 증가 및 피부 보습 강화", "피부 수분 증가, 주름 감소"],
    featurePoints: ["피부 수분 증가", "주름 감소(12주 임상)", "Wild rice(줄풀추출물) 기반"],
    evidenceTags: ["피부 수분 증가", "주름 감소", "12주 임상"],
    origin: ["Wild rice (줄풀추출물) (Zizanialactifolia)"],
  },
  agrimony: {
    name: "아그리모니 (Agrimonia pilosa)",
    category: "간",
    area: "비알콜성 지방간",
    summary: "비알콜성 지방간 개선에 도움을 줄 수 있으며 지방간 함량과 ALT 및 AST 함량 감소를 확인한 소재입니다.",
    healthClaims: ["비알콜성 지방간 개선에 도움을 줄 수 있음", "지방간 함량과 ALT 및 AST 함량 감소", "지방간 지수(HSI) 개선"],
    featurePoints: ["ALT & AST: ALT수치 개선 효과", "지방간 지수(HSI) 개선", "ALT 수치 감소, AST 수치 감소, HSI 수치 감소"],
    evidenceTags: ["ALT", "AST", "HSI"],
    origin: ["아그리모니 (Agrimonia pilosa)"],
  },
  pinitol: {
    name: "피니톨",
    category: "간",
    area: "간건강",
    summary: "비알콜성 지방간 개선에 도움을 줄 수 있으며 간의 중성지방과 콜레스테롤 감소를 확인한 소재입니다.",
    healthClaims: ["비알콜성 지방간 개선에 도움을 줄 수 있음", "간의 중성지방과 콜레스테롤의 감소", "지방간, ALT, AST 감소"],
    featurePoints: ["손상된 간세포 개선 및 증가 효과", "간의 중성지방 세포 감소 및 크기 저하", "항산화 활성효소인 GPx 증가"],
    evidenceTags: ["GPx 증가", "MDA 감소", "ALT / AST"],
    origin: ["캐롭(Carob)의 껍질에서 원료를 추출, 정제후 원료화"],
  },
  acetobeta: {
    name: "아세토베타 (Aceto Beta) (for Hangover cure)",
    category: "숙취",
    area: "숙취 감소",
    summary: "아세트알데하이드를 빠르게 분해하여 음주로 인한 간손상과 숙취 감소에 탁월한 효과를 보이는 소재입니다.",
    healthClaims: ["아세트알데하이드를 빠르게 분해", "음주로 인한 간손상과 숙취 감소", "음주 후 활기찬 아침관리(편안한 아침)"],
    featurePoints: ["ADH(Achohal Dehydrogenase): 알코올을 분해하는 효소 증가", "ALDH(Acetaldehyde Dehydrogenase): 아세트알데히드를 분해하는 효소의 증가", "대두발효식초배양물 기반"],
    evidenceTags: ["ADH", "ALDH", "Aceto Beta"],
    origin: ["초산균(Acetic acid bacteria)으로부터 생산된 “대두발효식초배양물”"],
  },
  immulink: {
    name: "Immulink MBG (for Strengthen immune)",
    category: "면역",
    area: "면역기능",
    summary: "면역기능 증진에 도움을 줄 수 있으며 선천적, 후천적 면역력 개선 효과를 입증한 소재입니다.",
    healthClaims: ["면역기능 증진에 도움을 줄 수 있음", "선천적, 후천적 면역력 개선 효과 입증", "선천 및 후천적 면역 모두에서 유의한 개선 효과 확인(8종)"],
    featurePoints: ["특허 받은 초음파 추출 기술", "영지버섯균사체 추출분말", "선천 및 후천적 면역 모두 개선"],
    evidenceTags: ["선천 면역", "후천 면역", "8종"],
    origin: ["영지균사체 추출분말"],
  },
};

export function getKoreanIngredient(item: Ingredient): Ingredient {
  const copy = koreanIngredientCopy[item.id];
  if (!copy) return item;

  return {
    ...item,
    name: copy.name || item.name,
    category: copy.category,
    area: copy.area,
    summary: copy.summary,
    origin: copy.origin || item.origin,
    healthClaims: copy.healthClaims,
    featurePoints: copy.featurePoints,
    evidenceTags: copy.evidenceTags,
  };
}
