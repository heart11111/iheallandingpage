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
    strains: "균주 구성",
    origin: "유래 원료",
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
    "Functional Probiotics": "기능성 프로바이오틱스",
    "Nature-derived Ingredients": "기능성 천연소재",
  } satisfies Record<IngredientLine, string>,
};

export const devKoreanPageCopy = {
  microbiome: {
    title: "개별인정형 및 특허 균주 프로바이오틱스",
    copy: "용도별 프로바이오틱스 소재 전체 목록입니다.",
    lead: "여성, 체지방, 인지, 간, 코, 스트레스, 장 건강의 7개 카테고리를 소재별로 확인할 수 있습니다.",
    primary: "제품",
  },
  nature: {
    title: "기능성 천연소재",
    copy: "자연 유래 기능성 소재 전체 목록입니다.",
    lead: "남성 건강, 기억, 인지, 체지방, 피부, 간·혈당, 면역 카테고리를 소재별로 확인할 수 있습니다.",
    primary: "제품",
  },
  detailPrimary: {
    microbiome: "기능성 프로바이오틱스",
    nature: "기능성 천연소재",
  },
};

export const koreanIngredientCopy: Record<string, KoreanIngredientCopy> = {
  med01: {
    name: "iHEAL GINO 5 Formula - MED01",
    category: "여성",
    area: "질 내 마이크로바이옴",
    summary: "질 내 마이크로바이옴 균형과 유익균 증식, 유해균 억제를 고려한 특허 유산균 포트폴리오입니다.",
    healthClaims: ["여성 질 내 환경 관리 보조", "Nugent score 개선 방향의 임상 자료", "질염 지표와 질 내 환경 개선 자료 기반"],
    featurePoints: ["건강한 한국 여성의 질에서 분리한 특허 유산균", "19~50세 여성 101명 대상 임상시험 자료", "한국·미국·유럽 특허 보유 및 일본 특허 출원 중"],
    evidenceTags: ["101명 인체적용시험", "SCI 논문 참조", "국제 특허"],
  },
  med02: {
    name: "iHEAL DIT 2 Formula - MED02",
    category: "체지방",
    area: "체지방 및 항비만 프로바이오틱스",
    summary: "체지방 감소와 지방세포 분화 억제 컨셉을 중심으로 정리한 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["체중·체지방·BMI 관리 보조", "지방세포 분화 억제 컨셉", "항비만 소재 기획에 활용 가능한 균주 조합"],
    featurePoints: ["건강한 한국인 유래 특허 유산균", "과체중 또는 비만 성인 100명 대상 임상시험 자료", "체지방량, 체지방률, BMI 지표 자료 정리"],
    evidenceTags: ["100명 인체적용시험", "SCI 논문 참조", "국제 특허"],
  },
  nvp2106: {
    category: "뇌·기억",
    area: "인지 및 기억 기능",
    summary: "인지 기능, 기억력, 주의 집중을 보조하는 뇌 기능용 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["인지 기능과 기억 기능 관리 보조", "주의 집중력 개선 방향 자료", "ADAS-Cog13 지표 자료 참조"],
    featurePoints: ["60세 이상 기억력 저하 고령자 120명 대상 시험 자료", "L. mucosae NK41과 B. longum NK46 복합 설계", "기억력, 학습, 주의 집중 관련 자료 정리"],
    evidenceTags: ["120명 고령자 임상", "SCI 논문 참조", "특허 복합균"],
  },
  nvp1702: {
    category: "간",
    area: "간 건강",
    summary: "알코올성 및 비알코올성 간 건강 컨텍스트에 활용 가능한 특허 프로바이오틱스 복합물입니다.",
    healthClaims: ["간 건강 관리 보조", "혈중 중성지방과 간 손상 지표 자료 참조", "알코올성·비알코올성 간 건강 자료 기반"],
    featurePoints: ["L. plantarum LC27과 B. longum LC67 복합 설계", "간 해독 기능과 염증 지표 관련 자료 정리", "간 건강용 프로바이오틱스 제안에 활용"],
    evidenceTags: ["인체적용시험 참조", "SCI 논문 참조", "특허 복합균"],
  },
  nvp1703: {
    category: "코",
    area: "알레르기성 비염 관련 코 건강",
    summary: "성인과 소아·청소년 대상 자료를 바탕으로 코 건강과 비염 증상 관리를 보조하는 프로바이오틱스입니다.",
    healthClaims: ["알레르기성 비염 관련 코 컨디션 관리", "TNSS 지표 자료 참조", "콧물, 코막힘, 비염 증상 자료 정리"],
    featurePoints: ["L. plantarum IM76과 B. longum IM55 복합 설계", "성인 및 소아·청소년 대상 시험 자료", "IgE와 사이토카인 관련 데이터를 제안 자료로 정리"],
    evidenceTags: ["임상시험 참조", "소아·성인 대상", "특허 복합균"],
  },
  nvp1704: {
    category: "스트레스",
    area: "스트레스·수면·기분 밸런스",
    summary: "스트레스, 기분 밸런스, 불안감, 수면의 질을 함께 고려한 기능성 균주 설계입니다.",
    healthClaims: ["스트레스와 수면의 질 관리 보조", "BDI, BAI, PSQI, ISI 지표 자료 참조", "장내 스트레스 마이크로바이옴 컨셉"],
    featurePoints: ["스트레스 성인 156명 대상 인체적용시험 자료", "IL-6 감소와 BDNF 증가 방향 자료 정리", "L. reuteri와 Bifidobacterium 그룹 중심 제안"],
    evidenceTags: ["156명 인체적용시험", "수면 품질 지표", "특허 복합균"],
  },
  bifido: {
    name: "Bifidobacterium Probiotics",
    category: "장",
    area: "장 건강 및 배변활동",
    summary: "건강한 모유 수유 신생아 유래의 100% 인체 유래 비피더스균으로, 장 건강과 배변활동을 보조합니다.",
    healthClaims: ["장 건강과 배변활동 관리 보조", "인체 유래 비피더스균 컨셉", "가스 배출과 복부 팽만감 관련 자료 참조"],
    featurePoints: ["건강한 모유 수유 신생아 유래", "FDA GRAS, NDI, USP 및 HALAL, KOSHER 자료 정리", "120편 이상 SCI 논문 자료 참조"],
    evidenceTags: ["FDA GRAS/NDI/USP 참조", "HALAL/KOSHER 참조", "120편 이상 SCI 논문"],
  },
  testofen: {
    category: "남성",
    area: "남성 갱년기 및 남성 건강",
    summary: "남성 갱년기 건강과 테스토스테론 항상성 유지 컨셉을 중심으로 정리한 호로파 종자 추출물입니다.",
    healthClaims: ["남성 갱년기 건강 관리 보조", "테스토스테론 항상성 유지 컨셉", "AMS 지표 자료 참조"],
    featurePoints: ["43~75세 남성 12주 시험 자료", "호로파 종자 추출물 기반 소재", "대한민국 개별인정형 소재 자료 정리"],
    evidenceTags: ["개별인정형 소재 참조", "12주 임상 자료", "남성 건강"],
    origin: ["호로파 종자 추출물", "Trigonella foenum-graecum"],
  },
  thinkgin: {
    category: "기억",
    area: "기억 및 인지 기능",
    summary: "기억력, 인지 기능, 수면의 질과 수면 효율을 보조하는 새싹인삼 추출분말입니다.",
    healthClaims: ["기억력과 인지 기능 관리 보조", "수면의 질과 수면 효율 고려", "진세노사이드 함유 컨셉"],
    featurePoints: ["55~75세 남녀 12주 시험 자료", "새싹인삼 추출분말 기반", "즉시 회상력과 AChE 관련 자료 정리"],
    evidenceTags: ["인체적용시험 참조", "기억·수면", "진세노사이드"],
    origin: ["새싹인삼 추출분말"],
  },
  neulearn: {
    name: "Neu learn",
    category: "인지",
    area: "노화 관련 인지 기능",
    summary: "주관적 기억 불안, 단기 기억, 계획 기능을 보조하는 흰목이버섯 효소분해 추출물입니다.",
    healthClaims: ["노화로 저하된 인지 기능 관리 보조", "주관적 기억 저하와 단기 기억 자료 참조", "계획 기능 관련 평가 자료 정리"],
    featurePoints: ["40~65세 남녀 12주 시험 자료", "흰목이버섯 효소분해 추출물", "SMCQ, 단기 기억, 실행 과제 관련 자료 정리"],
    evidenceTags: ["f-MRI 자료 참조", "12주 임상 자료", "인지 기능"],
    origin: ["흰목이버섯 효소분해 추출물"],
  },
  applephenon: {
    category: "체지방",
    area: "다이어트 및 체지방",
    summary: "체지방 감소를 보조하는 다이어트용 미숙 사과 추출물입니다.",
    healthClaims: ["체지방 감소 관리 보조", "BMI와 내장지방량 관련 자료 참조", "고농축 폴리페놀 컨셉"],
    featurePoints: ["20~55세 남녀 12주 시험 자료", "풋사과 추출물 기반", "섭취 종료 후 지속 자료 정리"],
    evidenceTags: ["체지방 감소", "지속 자료", "폴리페놀"],
    origin: ["풋사과 추출물"],
  },
  collagen: {
    name: "저분자 콜라겐 펩타이드 AG",
    category: "피부",
    area: "피부 수분 및 탄력",
    summary: "피부 보습, 자외선 관련 피부 손상으로부터의 건강 유지, 눈가 주름과 탄력 관리를 보조하는 소재입니다.",
    healthClaims: ["피부 수분과 탄력 관리 보조", "자외선 관련 피부 건강 자료 참조", "눈가 주름과 피부 거칠기 지표 자료 정리"],
    featurePoints: ["30~65세 여성 12주 시험 자료", "500Da 이하 저분자 콜라겐 펩타이드", "대한민국 개별인정형 이중 기능성 소재 자료"],
    evidenceTags: ["피부 수분", "탄력·주름", "이중 기능성 소재 참조"],
    origin: ["500Da 이하 저분자 콜라겐 펩타이드", "팡가시우스 어피 유래 젤라틴"],
  },
  dermania: {
    name: "DermaNia",
    category: "피부",
    area: "주름 및 보습 케어",
    summary: "주름 관리와 피부 수분량 유지를 보조하는 마코모 추출물입니다.",
    healthClaims: ["피부 주름과 보습 케어 보조", "피부 수분량과 눈가 주름 지표 자료 참조", "이너뷰티 소재로 활용 가능"],
    featurePoints: ["30~50세 여성 12주 시험 자료", "마코모 추출물", "피부 건강 카테고리용 자연 유래 소재"],
    evidenceTags: ["12주 임상 자료", "주름·보습", "피부 건강"],
    origin: ["마코모 추출물", "Zizania latifolia"],
  },
  agrimony: {
    name: "짚신나물 추출물",
    category: "간",
    area: "비알코올성 지방간 건강",
    summary: "간 지방량과 ALT, AST 지표 관리를 보조하는 짚신나물 유래 소재입니다.",
    healthClaims: ["비알코올성 지방간 건강 관리 보조", "간 지방량과 ALT/AST 지표 자료 참조", "간 건강 카테고리용 자연 유래 소재"],
    featurePoints: ["19~70세 남녀 13주 시험 자료", "Agrimonia pilosa 유래 추출물", "지방간 지수와 간 효소 지표 자료 정리"],
    evidenceTags: ["ALT/AST 자료", "지방간 지수", "간 건강"],
    origin: ["Agrimonia pilosa"],
  },
  pinitol: {
    name: "피니톨",
    category: "간",
    area: "간 건강 및 혈당 건강",
    summary: "비알코올성 지방간, 간 건강, 혈당 건강을 함께 고려할 수 있는 캐롭 유래 소재입니다.",
    healthClaims: ["비알코올성 지방간 건강 관리 보조", "간 건강과 혈당 건강 양축 제안 가능", "ALT/AST, GPx/MDA 자료 참조"],
    featurePoints: ["지방간이 있는 성인 60명 대상 12주 자료", "캐롭 껍질 유래 추출·정제 소재", "간 중성지방, ALT, AST 관련 자료 정리"],
    evidenceTags: ["지방간 자료", "GPx/MDA 자료", "혈당 건강"],
    origin: ["캐롭 껍질 추출물"],
  },
  acetobeta: {
    name: "아세토베타",
    category: "숙취",
    area: "알코올 대사 보조",
    summary: "음주로 인한 간 부담과 숙취 불편감 관리를 보조하는 대두 발효초 배양물 소재입니다.",
    healthClaims: ["음주 후 불편감 케어 보조", "혈중 알코올 및 아세트알데히드 관련 자료 참조", "숙취 케어 상품 기획에 활용 가능"],
    featurePoints: ["20~40대 성인 대상 자료", "대두 발효초 배양물 기반", "AHS 설문 변화와 혈중 농도 자료 정리"],
    evidenceTags: ["음주 후 케어", "발효 소재", "AHS 설문 자료"],
    origin: ["대두 발효초 배양물"],
  },
  immulink: {
    name: "Immulink MBG",
    category: "면역",
    area: "면역 기능",
    summary: "선천 면역과 후천 면역을 함께 고려한 영지균사체 추출분말입니다.",
    healthClaims: ["면역 기능 관리 보조", "선천 면역과 후천 면역 양축 고려", "β-글루칸 70% 이상 컨셉"],
    featurePoints: ["18~55세 남녀 13주 시험 자료", "영지균사체 추출분말", "미국산 개별인정형 소재 자료 정리"],
    evidenceTags: ["β-Glucan 70% 이상", "선천·후천 면역", "13주 자료"],
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
