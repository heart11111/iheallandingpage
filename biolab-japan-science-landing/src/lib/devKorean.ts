import type { Ingredient, IngredientLine } from "@/lib/ingredients";

export type KoreanIngredientCopy = {
  name?: string;
  category: string;
  area: string;
  intake?: string;
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
    origin: "원료",
  },
  detail: {
    summary: "소재 개요",
    claims: "Health Claim",
    specs: "기본 정보",
    area: "용도 영역",
    intake: "1일 섭취 기준",
    spec: "규격",
    line: "소재 라인",
    evidence: "근거 정보",
    features: "Features / 인체효능 평가",
    function: "Health Claim",
    feature: "Features / 인체효능 평가",
    rawMaterial: "원료 구성",
    documents: "근거 자료",
    materialName: "소재명",
    functionalContent: "기능성 내용",
  },
  line: {
    "Functional Probiotics": "기능성 프로바이오틱스",
    "Nature-derived Ingredients": "기능성 천연소재",
  } satisfies Record<IngredientLine, string>,
};

export const devKoreanPageCopy = {
  microbiome: {
    title: "기능성 프로바이오틱스",
    copy: "용도별 프로바이오틱스 소재 전체 목록입니다.",
    lead: "인체적용시험을 마친 개별인정형 프로바이오틱스 7종입니다. 여성·체지방·인지·간·코·스트레스·장 용도별로 균주와 근거 자료(인체적용시험·SCI 논문·특허)를 정리했습니다.",
    primary: "제품",
  },
  nature: {
    title: "기능성 천연소재",
    copy: "자연 유래 기능성 소재 전체 목록입니다.",
    lead: "인체적용시험을 마친 자연 유래 기능성 소재 10종입니다. 남성 건강·기억·인지·체지방·피부·간·혈당·숙취·면역 용도별로 원료와 근거 자료를 정리했습니다.",
    primary: "제품",
  },
  detailPrimary: {
    microbiome: "용도별 프로바이오틱스 소재",
    nature: "자연 유래 기능성 소재",
  },
};

export const koreanIngredientCopy: Record<string, KoreanIngredientCopy> = {
  med01: {
    name: "iHEAL GINO 5 Formula – MED01",
    category: "여성",
    area: "여성 질건강",
    intake: "2000억CFU/gr.",
    summary: "한국 여성의 질에서 분리한 유산균으로, 여성 질건강을 돕는 프로바이오틱스 복합물입니다.",
    healthClaims: [
      "여성의 질건강을 돕는 프로바이오틱스 복합물입니다.",
      "질염 예방·개선과 질 내 환경을 건강하게 유지하는 데 도움을 줍니다.",
      "한국 여성의 질에서 분리한 유산균으로, 101명 인체적용시험과 SCI 논문 9편으로 확인됐습니다.",
    ],
    featurePoints: [
      "건강한 한국 여성의 질에서 분리한 100% 인체 유래 프로바이오틱스입니다.",
      "19~50세 가임기 여성 101명을 대상으로 인체적용시험을 진행했습니다.",
      "한국·미국·유럽에서 국제 특허를 보유하고, 일본에도 특허를 출원 중입니다.",
      "질염 지표인 Nugent score(질 분비물 그람염색으로 질내 균총을 0~10점으로 평가하는 지표)가 개선됐습니다.",
      "질 내 유산균이 늘고 유해균이 억제되어 질 내 균총이 정상 상태로 회복됩니다.",
      "질 분비물, 질 작열감, 배뇨통이 줄었습니다.",
    ],
    evidenceTags: ["101명 인체적용시험", "SCI 논문 9편", "국제 특허 3개국"],
  },
  med02: {
    name: "iHEAL DIT 2 Formula – MED02",
    category: "체지방",
    area: "체지방 감소",
    intake: "2000억CFU/gr.",
    summary: "지방세포의 분화를 억제하는 특허 프로바이오틱스 복합물로, 항비만 특허 유산균입니다.",
    healthClaims: [
      "지방세포의 분화를 억제하는 특허 프로바이오틱스 복합물입니다.",
      "체중·체지방 감소와 BMI(체질량지수) 저하에 도움을 줍니다.",
      "100명 인체적용시험과 SCI 논문 6편으로 검증된 항비만 특허 유산균입니다.",
    ],
    featurePoints: [
      "과체중 또는 비만 성인 100명을 대상으로 인체적용시험을 진행했습니다.",
      "한국·미국·유럽에서 국제 특허를 보유하고 있습니다.",
      "어린 시기부터 지방세포 분화를 억제해 소아비만 위험을 낮춥니다.",
      "성인기 중성지방 축적으로 인한 비만·이상지질혈증 위험도 줄여줍니다.",
      "임상 데이터(12주): 체지방량 약 -1,200g(위약 약 -400g), 체지방률 약 -0.85%(위약 약 -0.15%), 체중 약 -2.1kg(위약 약 -1.2kg).",
    ],
    evidenceTags: ["100명 인체적용시험", "SCI 논문 6편", "국제 특허 3개국"],
  },
  nvp2106: {
    name: "NVP-2106",
    category: "뇌·기억",
    area: "인지·기억력 개선",
    intake: "100억 CFU/day (1×10¹⁰ CFU/day)",
    summary: "듀오바이옴 기술로 만든 뇌 기능 개선용 2종 특허 프로바이오틱스 복합물입니다.",
    healthClaims: [
      "듀오바이옴 기술로 만든 뇌 기능 개선용 2종 특허 프로바이오틱스 복합물입니다.",
      "60세 이상 기억력 저하 노인 120명의 인체적용시험과 SCI 논문으로 검증됐습니다.",
    ],
    featurePoints: [
      "신경세포 손상과 기억력 저하의 원인으로 꼽히는 ‘아밀로이드 베타’를 조절·저하시킵니다.",
      "인지기능, 기억력, 주의 집중력이 개선됐습니다.",
      "알츠하이머병 평가 척도 ADAS-Cog13 총점이 12주 섭취 시 위약 대비 202% 개선됐습니다(P=0.0318).",
      "기억력 총점은 위약 대비 207%, 지연 단어 회상은 위약 대비 1,514% 개선됐습니다(P=0.0037).",
      "주의 집중력은 정반응 수 315%, 오반응 수 147%, 누락 오류 수 315% 개선됐습니다(12주 섭취 시점).",
    ],
    evidenceTags: ["120명 인체적용시험", "ADAS-Cog13", "기억력 개선"],
  },
  nvp1702: {
    name: "NVP-1702",
    category: "간",
    area: "알코올성·비알코올성 간기능 개선",
    intake: "100억 CFU/day (1×10¹⁰ CFU/day)",
    summary: "듀오바이옴 기술로 만든 간 기능 개선용 2종 특허 프로바이오틱스 복합물입니다.",
    healthClaims: [
      "듀오바이옴 기술로 만든 간 기능 개선용 2종 특허 프로바이오틱스 복합물입니다.",
      "비알코올성 93명·알코올성 70명 인체적용시험 2건과 SCI 논문으로 검증된 간기능 개선용 특허 유산균입니다.",
      "알코올성·비알코올성으로 손상된 간을 함께 고려한 복합 설계입니다.",
    ],
    featurePoints: [
      "간의 해독 기능을 높이고, 장내·혈중 내독소(엔도톡신)를 개선합니다.",
      "비알코올성 간손상: 간 손상 지표인 ALT·AST·γ-GTP가 낮아졌습니다(ALT P=0.0260/0.0397, AST P=0.0131, γ-GTP P=0.0229).",
      "비알코올성 간손상: 피로지표와 혈중 염증지표도 함께 개선됐습니다.",
      "알코올성 간손상: 간 손상 지표인 ALT·AST·γ-GTP가 낮아졌습니다(γ-GTP P=0.0292, ALT P=0.0332).",
      "알코올성 간손상: 혈중 중성지방과 혈중 염증지표도 함께 개선됐습니다.",
    ],
    evidenceTags: ["비알코올성 93명", "알코올성 70명", "SCI 논문"],
  },
  nvp1703: {
    category: "코",
    name: "NVP-1703",
    area: "코 상태 개선",
    intake: "100억 CFU/day (1×10¹⁰ CFU/day)",
    summary: "듀오바이옴 기술로 만든 알레르기성 비염 개선용 특허 프로바이오틱스 복합물입니다.",
    healthClaims: [
      "듀오바이옴 기술로 만든 알레르기성 비염 개선용 특허 프로바이오틱스 복합물입니다.",
      "소아·청소년 81명, 성인 95명 규모의 대규모 인체적용시험을 진행했습니다.",
      "면역 과민반응에 따른 코 상태 개선을 목표로 한 특허 프로바이오틱스입니다.",
    ],
    featurePoints: [
      "소아·청소년: 코 증상 점수(TNSS)가 Daily·Weekly 모두 유의하게 개선됐습니다.",
      "소아·청소년: 염증을 조절하는 사이토카인 IL-10·IL-22도 유의하게 개선됐습니다.",
      "성인: 코 증상이 전반적으로 개선됐습니다. TNSS 총점(P=0.029), 맑은 콧물(P=0.007), 코막힘(P=0.0098).",
      "성인: 알레르기 반응과 관련된 면역글로불린 IgE가 감소했습니다.",
    ],
    evidenceTags: ["소아·청소년 81명", "성인 95명", "TNSS"],
  },
  nvp1704: {
    name: "NVP-1704",
    category: "스트레스",
    area: "스트레스·수면 개선",
    intake: "50억 CFU/day (5×10⁹ CFU/day)",
    summary: "스트레스성 질환과 우울·불안·불면 개선용 특허 프로바이오틱스 복합물입니다.",
    healthClaims: [
      "스트레스성 질환과 우울·불안·불면 개선용 특허 프로바이오틱스 복합물입니다.",
      "스트레스를 겪는 한국인 156명 규모의 대규모 인체적용시험을 진행했습니다.",
    ],
    featurePoints: [
      "우울·불안·불면을 포함한 수면의 질이 좋아지고, 장내 스트레스 관련 마이크로바이옴도 개선됐습니다.",
      "혈중 염증성 사이토카인 IL-6가 줄고 BDNF가 늘어, IL-6/BDNF 비율이 낮아졌습니다(P=0.041).",
      "섭취 후 주요 구성균인 L. reuteri 그룹과 Bifidobacterium 그룹이 늘었습니다.",
    ],
    evidenceTags: ["156명 인체적용시험", "IL-6", "BDNF"],
  },
  bifido: {
    name: "Bifidobacterium Probiotics",
    category: "장",
    area: "장건강",
    intake: "B. bifidum BGN4 1000억CFU/gr.\nB. longum BORI 1000억CFU/gr.\nB. lactis AD011 1000억CFU/gr.",
    summary: "모유를 먹고 자란 건강한 신생아의 분변에서 얻은 100% 인체 유래 비피더스 유산균입니다.",
    healthClaims: [
      "장건강과 원활한 배변활동에 도움을 주는 인체 유래 비피더스 유산균입니다.",
      "모유를 먹고 자란 건강한 신생아의 분변에서 얻은 100% 인체 유래 비피더스 유산균입니다.",
    ],
    featurePoints: [
      "미국 식품의약국(FDA) 안전성 인증(GRAS·NDI)에 더해 HALAL·KOSHER 인증도 받았습니다.",
      "증상별 10건의 인체적용시험, 80건의 국제 특허, 260편 이상의 SCI 논문을 보유한 세계적인 비피더스 유산균입니다.",
      "12주 섭취 후 가스 배출 빈도가 늘고 복부 팽만감이 줄었습니다.",
      "참고: BGN4·BORI를 배합한 프로바이오틱스(40억 CFU/일)를 65세 이상 고령자가 12주간 섭취한 시험에서 인지기능과 기분 개선이 확인됐습니다(서울대학교 분당병원 실시).",
    ],
    evidenceTags: ["FDA GRAS·NDI", "HALAL·KOSHER", "임상 10건·특허 80건·SCI 논문 260편"],
  },
  testofen: {
    name: "Testofen®",
    category: "남성",
    area: "남성 갱년기 증상 완화",
    summary: "갱년기 남성 건강을 위한 차별화된 기능성 소재입니다.",
    healthClaims: [
      "갱년기를 맞은 남성 건강을 위한 차별화된 기능성 소재입니다.",
      "남성 갱년기 증상을 정신·심리, 신체기능, 성기능 세 방면에서 개선합니다.",
    ],
    featurePoints: [
      "43~75세 남성을 대상으로 12주간 인체적용시험을 진행했습니다.",
      "남성 호르몬인 테스토스테론의 항상성을 유지하고 높여줍니다.",
      "남성 갱년기 증상(정신·심리 안정, 신체기능 향상, 성기능 향상)이 크게 개선됐습니다.",
      "한국 내 남성 갱년기 관련 소재 중 가장 높은 AMS 데이터를 보유하고, 미국에서도 가장 대중적인 남성 건강 원료입니다.",
      "갱년기 남성을 위한 추가 임상 데이터도 갖추고 있습니다.",
    ],
    evidenceTags: ["KFDA 개별인정", "AMS", "12주 인체적용시험"],
    origin: ["호로파종자추출물 (Trigonella foenum-graecum)", "인도산 · 한국 개별인정형 소재"],
  },
  thinkgin: {
    name: "ThinkGIN",
    category: "기억",
    area: "기억력·인지기능 개선",
    summary: "기억력·인지 기능 개선에 도움을 줄 수 있으며, 일반 홍삼보다 고농도의 진세노사이드를 함유한 새싹인삼추출분말입니다.",
    healthClaims: [
      "기억력과 인지 기능 개선에 도움을 줄 수 있습니다.",
      "일반 홍삼에 비해 고농도의 ‘진세노사이드’를 함유합니다.",
    ],
    featurePoints: [
      "55~75세 남녀를 대상으로 12주간 인체적용시험을 진행했습니다.",
      "기억을 저장하는 능력을 강화하고 신경세포의 염증을 억제합니다.",
      "수면의 질과 효율이 높아지고, 시냅스 가소성 향상으로 기억력·학습능력이 좋아집니다.",
      "즉각 회상력이 향상되고(SVLT 총점 P<0.01), 기억력 저하 관련 혈액지표 AChE가 감소했습니다.",
    ],
    evidenceTags: ["진세노사이드", "SVLT", "AChE 감소"],
    origin: ["새싹인삼추출분말 (Panax ginseng C.A. Meyer sprout)", "한국산 · 한국 개별인정형 소재"],
  },
  neulearn: {
    name: "Neu learn",
    category: "인지",
    area: "인지기능 개선",
    summary: "노화로 저하된 인지기능 개선에 도움을 줄 수 있는 흰목이버섯 효소분해추출물입니다.",
    healthClaims: [
      "노화로 저하된 인지기능 개선에 도움을 줄 수 있습니다.",
      "대뇌 회백질 용적 증가를 f-MRI로 확인·검증했습니다.",
    ],
    featurePoints: [
      "40~65세 남녀를 대상으로 12주간 인체적용시험을 진행했습니다.",
      "스스로 느끼는 기억력 저하가 줄었습니다. 기억 감퇴 설문(SMCQ) 점수 감소, 600mg·1,200mg 모두 위약 대비 유의(P=0.007/P=0.002).",
      "단기 기억 수행 기능이 개선됐습니다(P=0.001).",
      "계획을 세우고 실행하는 기능도 개선됐습니다(600mg P=0.08, 1,200mg P=0.02).",
      "f-MRI(기능적 자기공명영상)로 대뇌 회백질 용적 증가를 확인했습니다.",
    ],
    evidenceTags: ["f-MRI", "SMCQ", "단기 기억"],
    origin: ["흰목이버섯효소분해추출물 (Tremella fuciformis Beck-extract)", "중국산 · 한국 개별인정형 소재"],
  },
  applephenon: {
    name: "풋사과추출물 애플페논(Applephenon®)",
    category: "체지방",
    area: "체지방 감소",
    summary: "체지방 감소에 도움을 줄 수 있는, 다이어트 대표 스테디셀러 원료입니다.",
    healthClaims: [
      "체지방 감소에 도움을 줄 수 있습니다.",
      "다이어트를 위한 대표적인 스테디셀러 원료입니다.",
    ],
    featurePoints: [
      "20~55세 남녀를 대상으로 12주간 인체적용시험을 진행했습니다.",
      "풋사과 250개분을 농축하는 3종의 미국 특허기술로, 고농축 폴리페놀을 함유합니다.",
      "중성지방 억제·배출과 관련된 체지방 감소 데이터를 보유하고, 섭취를 멈춘 뒤에도 4주간 효과가 지속됐습니다.",
    ],
    evidenceTags: ["체지방 감소", "고농축 폴리페놀", "지속 효과"],
    origin: ["풋사과추출물", "한국산 · 한국 개별인정형 소재"],
  },
  collagen: {
    name: "저분자콜라겐펩타이드 AG",
    category: "피부",
    area: "피부보습·피부건강",
    summary: "피부보습과 자외선 손상으로부터의 피부건강 유지, 눈가 주름·피부 윤기에 도움을 줄 수 있는 저분자 콜라겐 펩타이드입니다.",
    healthClaims: [
      "피부보습에 도움을 줄 수 있습니다.",
      "자외선에 의한 피부 손상으로부터 피부건강을 유지하는 데 도움을 줄 수 있습니다.",
    ],
    featurePoints: [
      "30~65세 여성을 대상으로 12주간 인체적용시험을 진행했습니다.",
      "피부 보습이 뚜렷하게 개선되고 눈가 주름도 감소했습니다(육안 평가·지표 성분 모두 확인).",
      "피부 전체 탄력(생체 탄력·순수 탄력)이 높아지고 피부 결도 매끄러워졌습니다.",
    ],
    evidenceTags: ["피부보습", "탄력(R2)", "눈가 주름"],
    origin: ["가이양(Pangasius)의 어피로 만든 젤라틴의 가수분해 공법", "500Da 이하 저분자 콜라겐 펩타이드", "한국산 · 한국 개별인정형 · 한국 최초의 이중 기능성 소재"],
  },
  dermania: {
    name: "DermaNia",
    category: "피부",
    area: "피부 수분·주름 개선",
    summary: "주름 생성 억제와 피부 수분 증가·보습 강화에 도움을 줄 수 있는 줄풀(Wild rice) 추출물입니다.",
    healthClaims: [
      "주름 생성 억제와 주름 케어에 도움을 줄 수 있습니다.",
      "피부 수분을 늘리고 보습을 강화하는 데 도움을 줄 수 있습니다.",
    ],
    featurePoints: [
      "성인 여성을 대상으로 12주간 인체적용시험을 진행했습니다.",
      "피부 수분이 늘고 주름이 감소했습니다(모두 위약 대비 P<0.05).",
      "원리: 콜라겐 유전자를 활성화하고 MMPs 유전자 작용을 억제해 주름 형성을 막고 보습력을 높입니다.",
    ],
    evidenceTags: ["피부 수분", "주름 감소", "12주 임상"],
    origin: ["줄풀추출물 Zizania latifolia (Wild rice)", "한국산 · 한국 개별인정형 소재"],
  },
  agrimony: {
    name: "아그리모니추출물 (Agrimonia pilosa)",
    category: "간",
    area: "비알코올성 지방간 개선",
    summary: "비알코올성 지방간 개선에 도움을 줄 수 있으며, 지방간 함량과 ALT·AST 감소를 확인한 소재입니다.",
    healthClaims: [
      "비알코올성 지방간 개선에 도움을 줄 수 있습니다.",
      "지방간 함량과 ALT·AST 수치의 감소를 확인했습니다.",
    ],
    featurePoints: [
      "19~70세 남녀를 대상으로 13주간 인체적용시험을 진행했습니다.",
      "ALT 수치(P=0.025)와 AST 수치(P=0.002)가 개선됐습니다.",
      "지방간 지수(HSI)도 개선됐습니다(P=0.044).",
    ],
    evidenceTags: ["ALT", "AST", "HSI"],
    origin: ["아그리모니추출물 (Agrimonia pilosa)", "한국산 · 한국 개별인정형 소재"],
  },
  pinitol: {
    name: "피니톨",
    category: "간",
    area: "간건강·혈당건강 개선",
    intake: "간건강 300mg/day·혈당건강 1.2g/day",
    summary: "비알코올성 지방간 개선과 간·혈당 건강 유지에 도움을 줄 수 있으며, 간의 중성지방과 콜레스테롤 감소를 확인한 소재입니다.",
    healthClaims: [
      "비알코올성 지방간 개선에 도움을 줄 수 있습니다.",
      "간의 중성지방과 콜레스테롤 감소를 확인했습니다.",
    ],
    featurePoints: [
      "지방간이 있는 성인 60명을 대상으로 12주간 인체적용시험을 진행했습니다.",
      "손상된 간세포가 개선·증가하고, 간의 중성지방 세포는 수가 줄고 크기도 작아졌습니다.",
      "간에 쌓인 지방이 줄었습니다. 지방간 함량 17.9% → 15.2% (P=0.010).",
      "간 손상 지표인 ALT·AST 수치가 낮아졌습니다.",
      "항산화 능력이 좋아졌습니다. 항산화 효소 GPx 증가(P=0.015), 산화 스트레스 지표 MDA 감소(P=0.002).",
    ],
    evidenceTags: ["GPx 증가", "MDA 감소", "ALT/AST"],
    origin: ["캐롭(Carob)의 껍질에서 추출·정제", "한국산 · 한국 개별인정형 소재"],
  },
  acetobeta: {
    name: "아세토베타 (Aceto Beta)",
    category: "숙취",
    area: "숙취 감소",
    summary: "아세트알데하이드를 빠르게 분해해 음주로 인한 간 부담과 숙취를 줄여주는 소재입니다.",
    healthClaims: [
      "아세트알데하이드를 빠르게 분해해 음주로 인한 간 부담과 숙취를 줄여줍니다.",
    ],
    featurePoints: [
      "20~40대 성인 30명을 대상으로 인체적용시험을 진행했습니다.",
      "음주 다음 날 아침의 개운한 컨디션을 돕습니다.",
      "알코올을 분해하는 효소 ADH(알코올 탈수소효소)가 늘어 혈중 알코올 농도가 낮아집니다.",
      "아세트알데하이드를 분해하는 효소 ALDH(아세트알데하이드 탈수소효소)가 늘어 숙취를 줄여줍니다.",
    ],
    evidenceTags: ["ADH", "ALDH", "숙취 감소"],
    origin: ["초산균(Acetic acid bacteria)으로 만든 대두발효식초배양물"],
  },
  immulink: {
    name: "Immulink MBG",
    category: "면역",
    area: "면역기능 증진",
    summary: "선천면역과 후천면역 양쪽 개선에 도움을 줄 수 있는 영지버섯 균사체 추출분말입니다.",
    healthClaims: [
      "면역기능 증진에 도움을 줄 수 있습니다.",
      "선천면역과 후천(적응)면역 양쪽 모두에서 개선 효과를 입증했습니다.",
    ],
    featurePoints: [
      "18~55세 남녀를 대상으로 13주간 인체적용시험을 진행했습니다.",
      "특허받은 초음파 추출 기술을 사용합니다.",
      "선천면역(NK세포 수·활성)과 후천면역(총 림프구·T세포·CD4/CD8 비율·혈청 IgA) 양쪽에서 8종 면역지표가 유의하게 개선됐습니다.",
      "베타글루칸을 77% 이상 고함량으로 함유합니다.",
      "구조적 특징: β-1,3 및 β-1,6 짧은 사슬과 Acetylation 등을 포함한 복잡한 사슬 구조를 가집니다.",
      "열에 강하고(~261°C) pH에도 안정적이며(pH 1~11), 무미·무취입니다.",
      "한국, 미국(FDA GRAS), 유럽(EFSA), 대만, 중국, 말레이시아, 태국, 멕시코 등에 등재돼 있습니다.",
      "유기농 인증, Non-GMO, 글루텐 프리, 코셔(Kosher), 할랄(HALAL) 인증을 받았습니다.",
      "후천(적응)면역 개선: 총 림프구 수, T림프구(CD3+), 보조 T림프구(CD4+), 세포독성 T림프구(CD8+), CD4/CD8 비율, 혈청 IgA 글로불린 농도가 증가했습니다.",
      "선천면역 개선: NK세포 수와 NK세포 활성이 증가했습니다.",
    ],
    evidenceTags: ["베타글루칸 77%+", "선천면역", "후천면역"],
    origin: ["영지버섯 균사체 추출분말 (Ganoderma lucidum)", "미국산 · 한국 개별인정형 소재"],
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
    intake: copy.intake || item.intake,
    specKind: item.specKind,
    summary: copy.summary,
    origin: copy.origin || item.origin,
    healthClaims: copy.healthClaims,
    featurePoints: copy.featurePoints,
    evidenceTags: copy.evidenceTags,
  };
}
