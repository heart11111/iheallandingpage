export type SupplySpecRow = {
  ja: string;
  ko: string;
};

export type IngredientSupplySpec = {
  forms?: SupplySpecRow;
  standard?: SupplySpecRow;
  certification?: SupplySpecRow;
  studyDesign?: SupplySpecRow;
};

export const supplySpecLabels = {
  eyebrow: "Supply Specification",
  titleJa: "供給スペック",
  titleKo: "공급 스펙",
  rows: {
    forms: { ja: "適用可能な剤形", ko: "제형" },
    standard: { ja: "規格・指標成分", ko: "규격 · 지표성분" },
    certification: { ja: "認証・審査", ko: "인증 · 심의" },
    studyDesign: { ja: "試験設計", ko: "시험 설계" },
  },
} as const;

export const ingredientSupplySpecs: Record<string, IngredientSupplySpec> = {
  med01: {
    certification: {
      ja: "韓国・米国・欧州で国際特許を取得、日本でも出願中",
      ko: "한국 · 미국 · 유럽 국제특허 보유, 일본 특허 출원 중",
    },
    studyDesign: {
      ja: "19〜50歳の妊娠可能年齢の女性101名を対象としたヒト適用試験",
      ko: "19~50세 가임기 여성 101명 대상 인체적용시험",
    },
  },
  med02: {
    certification: {
      ja: "韓国・米国・欧州で国際特許を取得",
      ko: "한국 · 미국 · 유럽 국제특허 보유",
    },
    studyDesign: {
      ja: "過体重または肥満の成人100名、12週間",
      ko: "과체중 또는 비만 성인 100명, 12주",
    },
  },
  nvp2106: {
    certification: {
      ja: "韓国個別認定型素材(MFDS 第2025-15号)",
      ko: "건강기능식품 개별인정형(식약처 제2025-15호)",
    },
    studyDesign: {
      ja: "認知機能・記憶力の低下を訴える120名、12週間。二重盲検・無作為割付・プラセボ対照",
      ko: "인지기능·기억력 저하를 호소하는 120명, 12주. 이중눈가림 · 무작위배정 · 위약대조",
    },
  },
  nvp1702: {
    certification: {
      ja: "韓国個別認定型素材(MFDS 第2023-19号)。アルコール性・非アルコール性の機能性2件を取得",
      ko: "건강기능식품 개별인정형(식약처 제2023-19호). 알코올성 · 비알코올성 기능성 2건 인정",
    },
    studyDesign: {
      ja: "非アルコール性93名・アルコール性70名の2件。各12週間、多施設・二重盲検・無作為割付・プラセボ対照",
      ko: "비알코올성 93명 · 알코올성 70명 2건. 각 12주, 다기관 · 이중눈가림 · 무작위배정 · 위약대조",
    },
  },
  nvp1703: {
    certification: {
      ja: "韓国個別認定型素材(MFDS 第2019-28号)",
      ko: "건강기능식품 개별인정형(식약처 제2019-28호)",
    },
    studyDesign: {
      ja: "成人95名・小児青少年81名の2件。各4週間、多施設・二重盲検・無作為割付・プラセボ対照",
      ko: "성인 95명 · 소아청소년 81명 2건. 각 4주, 다기관 · 이중눈가림 · 무작위배정 · 위약대조",
    },
  },
  nvp1704: {
    studyDesign: {
      ja: "ストレス症状のある健康な成人156名、8週間。二重盲検・無作為割付・プラセボ対照",
      ko: "스트레스 증상이 있는 건강한 성인 156명, 8주. 이중눈가림 · 무작위배정 · 위약대조",
    },
  },
  bifido: {
    certification: {
      ja: "FDA GRAS(No.814 / 813 / 952)・NDI(No.1079 / 1082 / 1118)、HALAL・KOSHER",
      ko: "FDA GRAS(No.814 / 813 / 952) · NDI(No.1079 / 1082 / 1118), HALAL · KOSHER",
    },
    studyDesign: {
      ja: "症状別に10件のヒト適用試験、国際特許80件、SCI論文260編以上",
      ko: "증상별 인체적용시험 10건, 국제특허 80건, SCI 논문 260편 이상",
    },
  },
  testofen: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)",
      ko: "한국 개별인정형 소재(KFDA)",
    },
    studyDesign: {
      ja: "43〜75歳の男性、12週間",
      ko: "43~75세 남성, 12주",
    },
  },
  thinkgin: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)",
      ko: "한국 개별인정형 소재(KFDA)",
    },
    studyDesign: {
      ja: "55〜75歳の男女、12週間",
      ko: "55~75세 남녀, 12주",
    },
  },
  neulearn: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)",
      ko: "한국 개별인정형 소재(KFDA)",
    },
    studyDesign: {
      ja: "40〜65歳の男女、12週間(600mg・1,200mgの2用量)",
      ko: "40~65세 남녀, 12주(600mg · 1,200mg 2개 용량)",
    },
  },
  applephenon: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)、濃縮に関わる米国特許技術3種",
      ko: "한국 개별인정형 소재(KFDA), 농축 관련 미국 특허기술 3종",
    },
    studyDesign: {
      ja: "20〜55歳の男女、12週間(摂取終了後4週間まで追跡)",
      ko: "20~55세 남녀, 12주(섭취 종료 후 4주까지 추적)",
    },
  },
  collagen: {
    standard: {
      ja: "指標成分GPH(Gly-Pro-Hyp) 32.9mg/g、コラーゲントリペプチド(CTP) 20%以上、307Da・500Da以下の低分子ペプチド",
      ko: "지표성분 GPH(Gly-Pro-Hyp) 32.9mg/g, 콜라겐트리펩타이드(CTP) 20% 이상, 307Da · 500Da 이하 저분자 펩타이드",
    },
    certification: {
      ja: "韓国個別認定型素材(MFDS 第2023-10号)、韓国初の二重機能性素材。特許 第10-1831431号・第10-1980361号",
      ko: "건강기능식품 개별인정형(식약처 제2023-10호), 한국 최초의 이중 기능성 소재. 특허 제10-1831431호 · 제10-1980361호",
    },
    studyDesign: {
      ja: "30〜65歳の女性78名(試験群41名・対照群37名)、12週間。二重盲検・無作為割付・プラセボ対照",
      ko: "30~65세 여성 78명(시험군 41명 · 대조군 37명), 12주. 이중맹검 · 무작위배정 · 위약대조",
    },
  },
  dermania: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)",
      ko: "한국 개별인정형 소재(KFDA)",
    },
    studyDesign: {
      ja: "成人女性、12週間(慶熙大学校皮膚バイオテクノロジーセンター実施)",
      ko: "성인 여성, 12주(경희대학교 피부바이오테크놀로지센터 실시)",
    },
  },
  agrimony: {
    certification: {
      ja: "韓国個別認定型素材(KFDA)",
      ko: "한국 개별인정형 소재(KFDA)",
    },
    studyDesign: {
      ja: "19〜70歳の男女、13週間",
      ko: "19~70세 남녀, 13주",
    },
  },
  pinitol: {
    standard: {
      ja: "ピニトール95%以上(HPLC)",
      ko: "피니톨 95% 이상(HPLC)",
    },
    certification: {
      ja: "韓国個別認定型素材(KFDA)。特許 第10-0753982号・第10-0809584号",
      ko: "건강기능식품 개별인정형(KFDA). 특허 제10-0753982호 · 제10-0809584호",
    },
    studyDesign: {
      ja: "脂肪肝があり肝酵素値が高い成人60名(試験群30名・対照群30名)、12週間。二重盲検・無作為割付・プラセボ対照",
      ko: "지방간이 있고 간효소 수치가 높은 성인 60명(시험군 30명 · 대조군 30명), 12주. 이중눈가림 · 무작위배정 · 위약대조",
    },
  },
  acetobeta: {
    forms: {
      ja: "ゼリー / 液状 / 水に溶かす粉末 / 丸剤",
      ko: "젤리 / 액상 / 물에 타먹는 분말 / 환",
    },
    standard: {
      ja: "ベタイン 0.2mg/g以上、総酸(酢酸として) 4.0〜20.0 W/W%",
      ko: "베타인 0.2mg/g 이상, 총산(초산으로서) 4.0~20.0 W/W%",
    },
    certification: {
      ja: "韓国食品産業協会(KFIA)広告審査完了(2025年1月23日、審査番号2501F017)、機能性表示食品の届出完了。食品類型は発酵食酢",
      ko: "한국식품산업협회(KFIA) 광고심의 완료(2025년 1월 23일, 심의번호 2501F017), 기능성표시식품 보고 완료. 식품유형은 발효식초",
    },
    studyDesign: {
      ja: "満19歳以上40歳未満の男女30名。層化無作為割付・二重盲検・クロスオーバー設計",
      ko: "만 19세 이상 40세 미만 남녀 30명. 층화 무작위배정 · 이중눈가림 · 교차설계",
    },
  },
  immulink: {
    standard: {
      ja: "β-グルカン77%以上",
      ko: "베타글루칸 77% 이상",
    },
    certification: {
      ja: "韓国、米国(FDA GRAS)、欧州(EFSA)、台湾、中国、マレーシア、タイ、メキシコ等に登録。有機認証・Non-GMO・グルテンフリー・Kosher・HALAL",
      ko: "한국, 미국(FDA GRAS), 유럽(EFSA), 대만, 중국, 말레이시아, 태국, 멕시코 등 등재. 유기농 인증 · Non-GMO · 글루텐 프리 · Kosher · HALAL",
    },
    studyDesign: {
      ja: "18〜55歳の男女、13週間",
      ko: "18~55세 남녀, 13주",
    },
  },
};
