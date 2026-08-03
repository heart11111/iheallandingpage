export type GlossaryEntry = {
  term: string;
  ja: string;
  ko: string;
};

export const ingredientGlossary: Record<string, GlossaryEntry[]> = {
  testofen: [
    {
      term: "AMS",
      ja: "Aging Males Symptomsの略。中高年男性の更年期関連症状の程度を質問票で点数化した指標で、韓国食品医薬品安全処(KFDA)は男性更年期評価の主要バイオマーカーに指定しています。",
      ko: "Aging Males Symptoms의 약자로, 중장년층 남성의 갱년기 관련 증상 정도를 설문화한 점수입니다. 대한민국 식약처(KFDA)는 AMS를 남성 갱년기 평가의 주요 바이오마커로 지정했습니다.",
    },
  ],
  nvp2106: [
    {
      term: "ADAS-Cog13",
      ja: "アルツハイマー病の認知機能を13項目で評価する尺度。点数が低いほど認知機能が良好です。",
      ko: "알츠하이머병의 인지기능을 13개 항목으로 평가하는 척도로, 점수가 낮을수록 인지기능이 양호합니다.",
    },
  ],
  neulearn: [
    {
      term: "SMCQ",
      ja: "Subjective Memory Complaints Questionnaire。本人が感じる記憶減退の程度を質問票で評価する指標です。",
      ko: "Subjective Memory Complaints Questionnaire. 본인이 느끼는 기억 감퇴 정도를 설문으로 평가하는 지표입니다.",
    },
  ],
  nvp1703: [
    {
      term: "TNSS",
      ja: "Total Nasal Symptom Score。鼻づまり、鼻水、くしゃみ、かゆみの鼻症状を合算した点数です。",
      ko: "Total Nasal Symptom Score. 코막힘, 콧물, 재채기, 가려움 등 코 증상을 합산한 점수입니다.",
    },
    {
      term: "IgE",
      ja: "アレルギー反応に関与する免疫グロブリン。値が下がるほど免疫の過敏反応が抑えられていることを示します。",
      ko: "알레르기 반응에 관여하는 면역글로불린으로, 수치가 낮아질수록 면역 과민반응이 억제됨을 뜻합니다.",
    },
  ],
  nvp1704: [
    {
      term: "PSQI / ISI",
      ja: "PSQIは睡眠の質、ISIは不眠症の重症度を評価する質問票。いずれも点数が低いほど良好です。",
      ko: "PSQI는 수면의 질, ISI는 불면증 심각도를 평가하는 설문으로, 모두 점수가 낮을수록 양호합니다.",
    },
    {
      term: "BDI / BAI",
      ja: "BDIはうつ、BAIは不安の程度を評価する質問票です。",
      ko: "BDI는 우울, BAI는 불안 정도를 평가하는 설문입니다.",
    },
  ],
  agrimony: [
    {
      term: "HSI",
      ja: "Hepatic Steatosis Index。ALT/AST比、BMIなどから脂肪肝の程度を推定する指数です。",
      ko: "Hepatic Steatosis Index. ALT/AST 비율, BMI 등으로 지방간 정도를 추정하는 지수입니다.",
    },
  ],
  acetobeta: [
    {
      term: "ADH / ALDH",
      ja: "ADHはアルコールをアセトアルデヒドへ、ALDHはアセトアルデヒドを酢酸へ分解する酵素です。",
      ko: "ADH는 알코올을 아세트알데하이드로, ALDH는 아세트알데하이드를 초산으로 분해하는 효소입니다.",
    },
  ],
};
