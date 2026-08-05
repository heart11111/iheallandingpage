# BIOLAB 그래프 원본 위치 및 실험/논문 출처 추적 리포트

작성일: 2026-07-07
대상: `charts-review.html`의 원본 그래프 이미지/HTML 재구성 블록 0~45
검수 방식: 키워드 검색만으로 끝내지 않고, 기업 제공 PDF를 `pypdfium2`로 페이지 이미지 렌더링한 뒤 컨택트시트와 주요 페이지를 시각 확인했습니다. 텍스트 추출이 가능한 자료는 페이지/슬라이드 텍스트도 함께 대조했습니다.

## 사용한 기업측 원본 자료

- `C:\Users\우지윤\Downloads\BIOLAB Japan - Introducing - 20260515.pptx`
- `C:\Users\우지윤\Downloads\Introduction for MED-01 - KOR.pptx`
- `C:\Users\우지윤\Downloads\Introducing for MED-02 - KOR.pptx`
- `C:\Users\우지윤\Downloads\질 건강에 대한 MED-01 프로바이오틱스의 효능과 안전성_ 12주간 다기관 무작위 이중맹.pdf`
- `C:\Users\우지윤\Downloads\74. Efficacy and Safety of MED-01 Probiotics on Vaginal Health A 12-Week, Multicenter, Randomized, Double-Blind, Placebo-Controlled Clinical.pdf`
- `C:\Users\우지윤\Downloads\NVP\NVP-Healthcare Probiotics Catalog\NVP-Healthcare Probiotics Catalog_KR.pdf`
- `C:\Users\우지윤\Downloads\NVP\NVP-2106(BRAIN)\NVP-2106(BRAIN)_KR.pdf`
- `C:\Users\우지윤\Downloads\NVP\NVP-1702(LIVER)\NVP-1702(LIVER)_KR.pdf`
- `C:\Users\우지윤\Downloads\NVP\NVP-1703(NOSE)\NVP-1703(NOSE)_KR.pdf`
- `C:\Users\우지윤\Downloads\NVP\NVP-1704(RELAX)\NVP-1704(RELAX)_KR.pdf`
- `C:\Users\우지윤\Downloads\1. [BTC] 비티씨 카탈로그 2025년.pdf`
- `C:\Users\우지윤\Downloads\1. [BTC] 비티씨 카탈로그 2025년.pptx`
- `C:\Users\우지윤\Downloads\아미코젠_원료소개서\원료소개서.pdf`
- `C:\Users\우지윤\Downloads\아미코젠_원료소개서\아세토베타_원료제안서 (1).pdf`
- `C:\Users\우지윤\Downloads\아미코젠_원료소개서\피니톨 간건강 소개자료.pdf`
- `C:\Users\우지윤\Downloads\아미코젠_원료소개서\저분자콜라겐펩타이드_AG_영업용_제안서(정제,_액상_포함).pdf`

렌더링 산출물:
`C:\Users\우지윤\AppData\Roaming\Claude\local-agent-mode-sessions\532c80a8-6b00-4474-adfb-33697e0d96fb\c1870c32-7ec3-4c7d-8c05-a2cf526ad246\local_f21da482-7ea3-48d8-99d0-433723d1b122\outputs\biolab-charts-project\source-reference-index\pdf-contact-sheets`

---

## 1. 그래프별 출처 맵

| 블록 | 제품/그래프 | 원본 위치 | 실험/논문/출처 표기 | 확인 상태 |
|---:|---|---|---|---|
| 0 | MED-01: 질 분비물/작열감/배뇨통 증상 평가 | MED-01 논문 EN PDF p7 Figure 3, KR PDF p7 | `Efficacy and Safety of MED-01 Probiotics on Vaginal Health: A 12-Week, Multicenter, Randomized, Double-Blind, Placebo-Controlled Clinical Trial`, Nutrients 2023, 15, 331 | 논문 PDF에 직접 존재 |
| 1 | MED-01: Nugent score / BV 상태 | MED-01 논문 EN PDF p6 Figure 2, p7 Table 3 / MED-01 KOR PPTX slide 17 | Nutrients 2023, 15(2), 331. 대상: Nugent score 4~6 가임기 여성, MED-01 5.0x10^9 CFU, 12주 | 논문 PDF와 PPTX 양쪽 확인 |
| 2 | MED-02: 체지방량/체지방률/체중 | `Introducing for MED-02 - KOR.pptx` slide 16 | 인제대학교 서울백병원, BMI 25~31.9 kg/m2, 75명, 12주 인체효능 평가. 원문 슬라이드에는 논문명 직접 표기 없음 | PPTX 원본 확인. 논문명 별도 미표기 |
| 3 | MED-02: BMI 및 2차 지표 | `Introducing for MED-02 - KOR.pptx` slide 17~18 | 같은 MED-02 인체효능 평가. 동물효능 슬라이드 14에는 `Beneficial Microbes 2021; 12(5):479-491`가 별도 표기됨 | 인체 그래프 출처는 PPTX 기준. 논문명은 미표기 |
| 4 | NVP-2106: ADAS-Cog13 Total Score | NVP Healthcare Catalog KR p10 / NVP-2106 KR PDF p6~p7 | `NVP-2106 인체적용시험 결과보고서(국내 대학 병원)`, 대상자 120명, 12주, 이중눈가림·무작위·위약대조. 동물시험 쪽은 `Nutrients. 2023 Jul 29;15(15):3381` | 카탈로그 p10 텍스트/시각 확인 |
| 5 | NVP-2106: Memory Score / Delayed Recall | NVP Healthcare Catalog KR p10 / NVP-2106 KR PDF p6~p7 | 위와 동일. 경도인지장애 대상 인지기능 및 기억력 개선 효과, ADAS-Cog/CNT 계열 | 확인 |
| 6 | NVP-2106: Attention | NVP Healthcare Catalog KR p10 / NVP-2106 KR PDF p6~p7 | 위와 동일. 페이지 내 `인지기능 및 기억력 유의적 개선`, `Aβ42, Aβ42/40` 문구 확인 | 확인 |
| 7 | NVP-1702: 알코올성 간기능 ALT/AST/gamma-GTP | NVP Healthcare Catalog KR p8 / NVP-1702 KR PDF p6~p7 | `NVP-1702-2 인체적용시험 결과보고서(국내 대학 병원 4곳)`, 대상자 70명, 12주, 다기관·이중눈가림·무작위·위약대조 | 확인 |
| 8 | NVP-1702: 비알코올성 간기능 ALT/AST/gamma-GTP + LPS/TNF-alpha | NVP Healthcare Catalog KR p8 / NVP-1702 KR PDF p6~p7 | `NVP-1702-1 인체적용시험 결과보고서(국내 대학 병원 4곳)`, 대상자 93명, 12주, 다기관·이중눈가림·무작위·위약대조 | 확인. 70명/93명은 서로 다른 시험 |
| 9 | NVP-1702: gut-liver axis / 간 기전 도식 | NVP-1702 KR PDF p3 | 기전 설명용 도식. 별도 논문명은 도식 페이지에서 확인되지 않음 | 원본 PDF 위치 확인 |
| 10 | NVP-1703: 소아청소년 TNSS/NSDS/QoL-KCAR | NVP Healthcare Catalog KR p6 / NVP-1703 KR PDF p6~p7 | `NVP-1703 인체적용시험(소아청소년) 결과보고서(국내 대학 병원 2곳)` / `J Korean Med Sci. 2024;39(40)` / 대상자 81명 | 확인 |
| 11 | NVP-1703: 성인 TNSS/비염 증상/IgE/IL-10 | NVP Healthcare Catalog KR p6 / NVP-1703 KR PDF p6~p7 | `NVP-1703 인체적용시험(성인) 결과보고서(국내 대학 병원 2곳)` / `Nutrients. 2020 May 15;12(5):1427` / 대상자 95명 | 확인 |
| 12 | NVP-1703: gut-immune axis / 코 기전 도식 | NVP-1703 KR PDF p3 | 기전 설명용 도식. 별도 논문명은 도식 페이지에서 확인되지 않음 | 원본 PDF 위치 확인 |
| 13 | NVP-1704: BDI-II/BAI/BDI-II+BAI | NVP Healthcare Catalog KR p7 / NVP-1704 KR PDF p3 | `NVP-1704 인체적용시험 결과보고서(국내 대학 병원)`, `Nutrients(2021, 13, 2660)`, 대상자 156명, 8주, 이중눈가림·무작위·위약대조 | 확인 |
| 14 | NVP-1704: PSQI/ISI | NVP Healthcare Catalog KR p7 / NVP-1704 KR PDF p3 | 위와 동일. 수면의 질 및 불면증 척도 유의적 개선 | 확인 |
| 15 | NVP-1704: IL-6/BDNF | NVP Healthcare Catalog KR p7 / NVP-1704 KR PDF p3 | 위와 동일. 혈액 내 IL-6 감소 및 BDNF 증가 | 확인 |
| 16 | Bifido: gas passage / abdominal distention | 원본 그래프 이미지 `16_bifido-evidence-2` 및 BIOLAB Japan PPTX 계열 이미지 | 그래프 자체에는 별도 논문명 보이지 않음. 같은 Bifido 묶음의 별도 원본 이미지에 고령자 시험 출처가 표기됨 | 원본 이미지 확인, 논문명은 같은 묶음에서 추적 |
| 17 | Bifido: 고령자 인지/기분/장내균총 시험 안내 | 원본 이미지 `17_bifido-evidence-6` | 대상: 65세 이상 노인, 12주, BGN4+BORI 40억 CFU/day, 서울대학교 분당재생병원. 출처: `Probiotic Supplementation Improves Cognitive Function and Mood with Changes in Gut Microbiota in Community-Dwelling Older Adults: A Randomized, Double-Blind, Placebo-Controlled, Multicenter Trial. J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40` | 원본 이미지 내 출처 확인 |
| 18 | Bifido: FDA/GRAS/NDI 등 인증 이미지 | BIOLAB Japan PPTX 계열 원본 이미지 | 그래프가 아니라 인증/설명 이미지. 별도 논문 출처 대상 아님 | 문헌 출처 불필요 |
| 19 | Testofen: AMS total | BTC catalog PDF p6 | 그래프 캡션: `Rao A et al. The Aging Male. 2016 Jun;19(2):134-42` | 시각 확인 |
| 20 | Testofen: physical/sexual score | BTC catalog PDF p6 | 위와 동일. 보조 참고: Sachin Wankhede et al. 2015, Elizabeth Steels et al. 2011가 AMS 설명 아래 표기 | 시각 확인 |
| 21 | Testofen: mental score | BTC catalog PDF p6 | 위와 동일 | 시각 확인 |
| 22 | ThinkGIN: AChE | BTC catalog PDF p8 | 페이지 하단 표기: `Nutrients, 2024, 16(12):1952` | 시각 확인 |
| 23 | ThinkGIN: SVLT | BTC catalog PDF p8 | 위와 동일 | 시각 확인 |
| 24 | ThinkGIN: PSQI-K | BTC catalog PDF p8 | 위와 동일 | 시각 확인 |
| 25 | Neulearn: f-MRI 이미지 | BIOLAB Japan deck slide 17 / 원본 이미지 `25_neulearn-evidence-1-clean` | PPTX에는 `Tremella fuciformis Beck-extract`, 40~65세 남녀 12주, f-MRI 촬영 이미지라고만 표기. 논문명/저널명은 제공자료 내 미확인 | 출처 보강 필요 |
| 26 | Neulearn: 단기기억/집행·계획 기능 | BIOLAB Japan deck slide 17 / 원본 이미지 `NEULEARN_memory-executive.jpeg` | PPTX에는 SMCQ, 단기 기억집행 작업, 계획 기능 개선 문구만 있음. 논문명/저널명 미확인 | 출처 보강 필요 |
| 27 | Neulearn: SMCQ | BIOLAB Japan deck slide 17 / 원본 이미지 `NEULEARN_SMCQ.jpeg` | 위와 동일 | 출처 보강 필요 |
| 28 | Applephenon: 12주 체지방 감소 + 섭취 종료 4주 지속 | BTC catalog PDF p7 / BIOLAB Japan deck slide 18 | BTC p7에는 풋사과추출물 Applephenon 페이지에 그래프 배치. CT 이미지 쪽 참고문헌: `Journal of Oleo Science. 59(6)321-338 (2010)`, `Journal of Oleo Science. 56(8)417-428 (2007)` | 페이지 확인. 개별 선그래프와 참고문헌 직접 연결은 페이지상 간접 |
| 29 | Applephenon: 16주 BMI | BTC catalog PDF p7 / BIOLAB Japan deck slide 18 | 위와 동일 | 확인 |
| 30 | Applephenon: CT 내장지방 이미지 | BTC catalog PDF p7 | CT 이미지 아래 `Fig. 1D CT Scan Image in the Subject (D male)` 및 Journal of Oleo Science 2010/2007 표기 | 확인 |
| 31 | 저분자콜라겐펩타이드 AG: 피부 보습/탄력 | 아미코젠 `저분자콜라겐펩타이드_AG_영업용_제안서` PDF p5~p6 / `원료소개서.pdf` p6~p7 | 시험명: 30~65세 여성 78명, 12주, 이중맹검·무작위·위약대조 인체적용시험. 외부 논문명은 페이지에 미표기 | 원본 PDF 확인 |
| 32 | 저분자콜라겐펩타이드 AG: 주름/거칠기 | 위와 동일 | 위와 동일 | 확인 |
| 33 | DermaNia: wrinkle reduction | 원본 그래프 이미지 `DERMANIA_wrinkle.png` / BIOLAB Japan deck slide 20 | 그래프 자체에 `DermaNiA versus placebo`, `12-week`만 표기. 외부 논문명은 없음 | 논문 출처 미확인 |
| 34 | DermaNia: skin moisture increase | 원본 그래프 이미지 `DERMANIA_moisture.png` / BIOLAB Japan deck slide 20 | 그래프 하단: `It was conducted by Kyung Hee University Skin Biotechnology Center` | 수행기관 확인, 논문명 미확인 |
| 35 | DermaNia: 기전 이미지 | BIOLAB Japan deck slide 20 계열 | 기전 설명 이미지. 논문명 미확인 | 출처 보강 필요 |
| 36 | Agrimony: ALT | 원본 그래프 이미지 `AGRIMONY_ALT-AST-HSI.png` / BIOLAB Japan deck slide 21 | 그래프에 ALT baseline vs 8 weeks, p=0.025 표기. 논문명/기관명은 그래프에 없음 | 출처 보강 필요 |
| 37 | Agrimony: AST | 위와 동일 | AST p=0.002 표기. 논문명/기관명 미표기 | 출처 보강 필요 |
| 38 | Agrimony: HSI | 위와 동일 | HSI p=0.044 표기. 논문명/기관명 미표기 | 출처 보강 필요 |
| 39 | Agrimony: 조직/전후 이미지 | BIOLAB Japan deck slide 21 계열 원본 이미지 | 이미지 출처/논문명 미확인 | 출처 보강 필요 |
| 40 | Pinitol: GPx/MDA | 아미코젠 `피니톨 간건강 소개자료.pdf` p15 | `Lee et al. (2019). J Nutr Biochem 68, 33-41. Pinitol consumption improves liver health status by reducing oxidative stress and fatty acid accumulation in subjects with non-alcoholic fatty liver disease: A randomized, double-blind, placebo-controlled trial.` | 확인 |
| 41 | Pinitol: liver fat / ALT / AST | 아미코젠 `피니톨 간건강 소개자료.pdf` p14 | 위와 동일. 대상자 60명, 피니톨 300mg/day, 12주 | 확인 |
| 42 | AcetoBeta: 알코올 분해 경로 도식 | 아미코젠 `아세토베타_원료제안서 (1).pdf` p3 | 도식 하단 표기: `Journal of Agriculture & Life Science. 2016,50,223-31`로 보임. 원문 이미지에는 오탈자 `Jouamal`, `Agricculture`, `Alcohal` 존재 | 확인, 오탈자 주의 |
| 43 | AcetoBeta: 혈중 아세트알데하이드 감소 | 아미코젠 `아세토베타_원료제안서 (1).pdf` p4 / `원료소개서.pdf` p12 | 시험 대상 20~40대 성인 남녀 30명, 층화 무작위배정·이중눈가림·교차설계. 비교: 원료 미섭취 vs 원료 섭취 | 확인 |
| 44 | AcetoBeta: 구역질/메스꺼움 개선 | 위와 동일 | AHS 설문지 변화 측정, 알코올 섭취 2h 후 구역질 개선 유의적 감소 확인 | 확인 |
| 45 | Immulink MBG: 8개 면역지표 | 원본 그래프 이미지 `IMMULINK_8markers.png` / BIOLAB Japan deck slide 24 | 그래프 상단: `Foods 2023, 12(3), 659. https://doi.org/10.3390/foods12030659` | 원본 이미지 내 출처 확인 |

---

## 2. 출처 신뢰도별 정리

### A. 논문/저널 또는 결과보고서가 명확한 항목

- MED-01: Nutrients 2023, 15, 331. 원문 논문 PDF와 한글 번역 PDF 모두 보유.
- NVP-2106: NVP-2106 인체적용시험 결과보고서, 국내 대학 병원, 120명, 12주. 동물시험 출처로 Nutrients 2023 Jul 29;15(15):3381 표기.
- NVP-1702: 알코올성 70명과 비알코올성 93명은 각각 다른 결과보고서. NVP Healthcare Catalog p8에 분리 표기.
- NVP-1703: 성인 95명은 Nutrients 2020 May 15;12(5):1427, 소아청소년 81명은 J Korean Med Sci. 2024;39(40).
- NVP-1704: Nutrients 2021, 13, 2660 및 국내 대학 병원 인체적용시험 결과보고서.
- Bifido 고령자 시험: J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40.
- Testofen: Rao A et al. The Aging Male. 2016 Jun;19(2):134-42.
- ThinkGIN: Nutrients 2024, 16(12):1952.
- Pinitol: Lee et al. 2019, J Nutr Biochem 68, 33-41.
- AcetoBeta 기전 도식: Journal of Agriculture & Life Science. 2016, 50, 223-31로 보임.
- Immulink MBG: Foods 2023, 12(3), 659, DOI 10.3390/foods12030659.

### B. 기업 PDF/제안서에는 있으나 외부 논문명이 따로 안 보이는 항목

- MED-02 인체 그래프: `Introducing for MED-02 - KOR.pptx` slide 15~18에 인제대학교 서울백병원, 75명, 12주 시험으로 표기. 다만 BIOLAB Japan deck에는 100명으로 적힌 부분이 있어, 웹 표기 기준은 사용자가 지시한 우선순위에 따라 재확인 필요.
- 저분자콜라겐펩타이드 AG: 아미코젠 제안서 p5~p6에 78명, 12주, 이중맹검·무작위·위약대조 시험으로 표기. 외부 논문명은 미표기.
- DermaNia: 그래프에 Kyung Hee University Skin Biotechnology Center 수행 문구는 있으나 논문명 미표기.

### C. 현재 제공자료 안에서 논문/기관 출처 보강이 필요한 항목

- Neulearn: PPTX slide 17과 원본 이미지에는 f-MRI, SMCQ, 단기기억/집행·계획 기능 그래프가 있으나 논문명/기관명은 보이지 않음.
- Agrimony: ALT/AST/HSI 그래프는 있으나 논문명/기관명은 보이지 않음.
- DermaNia 기전 이미지: 기전 이미지 성격이며 별도 논문 출처 미확인.
- Bifido gas passage/abdominal distention: 원본 그래프 자체에는 출처가 보이지 않음. 같은 Bifido 묶음에는 J Gerontol A 2021 고령자 시험 출처가 있으나, 이 장 증상 그래프와 동일 논문인지 단정하면 안 됨.

---

## 3. 사이트 반영 시 주의점

1. NVP-1702는 70명/93명을 하나로 합치면 안 됩니다.
   - 알코올성 간기능 시험: 70명, NVP-1702-2 결과보고서.
   - 비알코올성 간기능 시험: 93명, NVP-1702-1 결과보고서.

2. MED-02는 자료 간 피험자 수가 충돌합니다.
   - 상세 MED-02 PPTX: 75명.
   - BIOLAB Japan PPTX: 100명.
   - 현재 그래프 원본은 상세 MED-02 PPTX slide 15~18에서 온 것으로 보이므로, 그래프 설명에는 75명을 적는 것이 원본 그래프와 가장 일치합니다. 다만 사용자가 BIOLAB Japan PPTX 우선이라고 정한 경우에는 본문 수치와 그래프 캡션을 분리해야 합니다.

3. Neulearn, Agrimony, DermaNia 일부는 “논문 기반”이라고 쓰면 위험합니다.
   - 제공자료상 그래프는 있으나 논문명/DOI/기관명이 부족하거나 없음.
   - 공개 사이트 문구는 “자료 기준”, “인체적용시험 자료”, “제공 원본 그래프” 수준으로 제한하는 것이 안전합니다.

4. BTC PDF는 이미지형 자료라 텍스트 추출이 거의 안 됩니다.
   - Testofen, Applephenon, ThinkGIN은 페이지 이미지에서 시각적으로 논문 표기를 읽어 확인했습니다.
   - 문서 자동 검색만으로는 빠지는 자료입니다.

5. AcetoBeta 기전 도식에는 원본 오탈자가 있습니다.
   - `Jouamal`, `Agricculture`, `Alcohal` 등은 사이트에 그대로 노출하지 말고 정상 표기로 교정해야 합니다.
   - 다만 이미지 자체를 그대로 쓰는 경우에는 오탈자가 이미지 안에 남습니다.

---

## 4. 산출물 위치

- 페이지/슬라이드 텍스트 색인: `source-reference-index/source_page_slide_index.json`
- 키워드 히트 색인: `source-reference-index/keyword_hits_by_chart_source.md`
- 주요 페이지 텍스트 발췌: `source-reference-index/selected_source_page_texts.md`
- PDF 컨택트시트/페이지 렌더링: `source-reference-index/pdf-contact-sheets/`
- 본 리포트: `graph-source-reference-map-20260707.md`
