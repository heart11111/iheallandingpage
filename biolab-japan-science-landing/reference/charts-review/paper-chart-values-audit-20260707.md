# 논문/원본자료 차트 수치 팩트체크 리포트

작성일: 2026-07-07  
대상: BIOLAB Japan 원료 상세 페이지 및 `charts-review.html`에 들어간 실험 그래프

## 처리 원칙

- 원문 논문/회사 PDF는 내부 검수용으로 확인했습니다.
- 이 문서에는 전문 원문을 싣지 않고, 차트 검수에 필요한 수치, figure/table 위치, DOI/출처만 기록합니다.
- `Exact`는 논문 표, 본문, PPTX 차트 XML, PDF 하단 설명문에 수치가 직접 있는 경우입니다.
- `Approx.`는 이미지형 그래프에서 축과 점/막대를 눈으로 판독한 값입니다. 웹사이트 HTML 차트 복원에는 `Approx.` 값을 그대로 확정값처럼 쓰면 안 됩니다.

---

## 1. 원문/출처 확보 상태

| 소재 | 원문/근거 | 확보 상태 | 수치 신뢰도 |
|---|---|---|---|
| MED-01 | Nutrients 2023, 15, 331 / DOI `10.3390/nu15020331` | 로컬 영문 PDF, 국문 PDF 확인 | 논문 본문/표 Exact + 일부 Figure Approx. |
| MED-02 | `Introducing for MED-02 - KOR.pptx` slide 15~18 | PPTX 차트 XML 직접 추출 | Exact |
| NVP-2106 | NVP-2106 KR PDF p6~p7, NVP Healthcare Catalog p10 | 회사 PDF 이미지 확인 | 개선율/p값 Exact, 점 위치 Approx. |
| NVP-1702 | NVP-1702 KR PDF p6~p7, NVP Healthcare Catalog p8 | 회사 PDF 이미지 확인 | 일부 설명문 Exact + 일부 Approx. |
| NVP-1703 성인 | Nutrients 2020, 12(5), 1427 / NVP-1703 KR PDF p6~p7 | 공개 원문 접근 제한, 회사 PDF와 소아청소년 논문 참조 | 회사 그래프 Approx. |
| NVP-1703 소아청소년 | J Korean Med Sci. 2024;39(40):e266 / DOI `10.3346/jkms.2024.39.e266` | PDF 확보 | Table 2 Exact + Figure Approx. |
| NVP-1704 | Nutrients 2021, 13, 2660 / 회사 PDF p3 | 공개 원문 표 일부 확인, 회사 PDF 이미지 확인 | 회사 그래프 Approx., 일부 논문표 확인 필요 |
| Testofen | Rao A et al. The Aging Male. 2016 Jun;19(2):134-42 / BTC PDF p6 | 회사 PDF 이미지 확인 | Approx. |
| ThinkGIN | Nutrients 2024, 16(12):1952 / BTC PDF p8 | 공개 원문 접근 일부 제한, 회사 PDF 이미지 확인 | Approx. |
| Pinitol | J Nutr Biochem 2019;68:33-41 / 아미코젠 PDF p14~p15 | 회사 PDF 확인 | 일부 본문/표 Exact + human 그래프 Approx. |
| AcetoBeta | Journal of Agriculture & Life Science. 2016, 50, 223-31 / 아미코젠 PDF p3~p4 | 회사 PDF 확인 | 일부 설명 Exact + 그래프 Approx. |
| Immulink MBG | Foods 2023, 12(3), 659 / DOI `10.3390/foods12030659` | 원본 이미지/DOI 확인 | 그래프 Approx. 또는 논문 보강 필요 |

---

## 2. 소재별 수치 점검

### MED-01

출처: `Efficacy and Safety of MED-01 Probiotics on Vaginal Health: A 12-Week, Multicenter, Randomized, Double-Blind, Placebo-Controlled Clinical Trial`, Nutrients 2023, 15, 331.

시험 조건:

- 대상: Nugent score 4~6인 가임기 여성
- 총 101명 randomized, 76명 completed
- 섭취량: MED-01 `5.0 x 10^9 CFU/day`
- 기간: 12주

주요 수치:

| 항목 | MED-01 | Placebo | p값/비고 | 신뢰도 |
|---|---:|---:|---|---|
| Nugent score 변화, baseline to 12w | `-0.36 ± 1.72` | `+0.19 ± 1.85` | p=`0.041` | Exact, Figure 2A 본문 |
| 12주 후 Normal Nugent 0~3 | `10/39`, 25.6% | `5/37`, 13.5% | Table 3 | Exact |
| 12주 후 Intermediate 4~6 | `23/39`, 59.0% | `24/37`, 64.9% | p=`0.382` | Exact |
| 12주 후 BV 7~9 | `6/39`, 15.4% | `8/37`, 21.6% | Table 3 | Exact |
| 질 분비물/배뇨통 | 6주, 12주 baseline 대비 유의 감소 | 군간 유의차 없음 | Figure 3 | 방향성 Exact, 값은 Figure Approx. |
| 작열감 | MED-01 감소, placebo 증가 경향 | 군간 유의차 없음 | Figure 3 | 방향성 Exact, 값은 Figure Approx. |

사이트/HTML 차트 체크:

- Nugent score 차트는 위 변화량을 그대로 쓰면 됩니다.
- 증상 차트는 원문에 정확한 표 수치가 보이지 않고 Figure 기반입니다. 웹 차트로 복원할 경우 “대략값”임을 내부 기록에 남겨야 합니다.
- Nugent score 주석: Gram-stained smear를 기준으로 세균성 질염 정도를 점수화하는 지표입니다. `0~3 normal`, `4~6 intermediate`, `7~10 bacterial vaginosis` 구조로 설명하면 됩니다.

---

### MED-02

출처: `Introducing for MED-02 - KOR.pptx` slide 15~18.  
차트 XML에서 직접 수치 추출.

시험 조건:

- 인제대학교 서울백병원
- BMI 25~31.9 kg/m2
- 75명, 12주

주요 수치:

| 항목 | MED-02 | Placebo | 신뢰도 |
|---|---:|---:|---|
| 체지방량 FATG 변화 | `-1166.82` | `-382.08` | Exact, PPTX chart XML |
| 체지방률 FATR 변화 | `-0.85` | `-0.11` | Exact |
| 체중 변화 | `-2.06` | `-1.22` | Exact |
| BMI 변화 | `-0.70` | `-0.44` | Exact |

사이트/HTML 차트 체크:

- MED-02는 상세 PPTX 기준 75명입니다. BIOLAB Japan 소개 PPTX의 100명 표기와 충돌하므로, 그래프 설명에는 상세 MED-02 PPTX의 75명을 쓰는 것이 원본 그래프와 가장 맞습니다.
- 단위가 PPTX에 명확히 없을 수 있으므로, 사이트에는 `변화량`으로 표기하고 단위를 임의로 붙이지 않는 편이 안전합니다.

---

### NVP-2106

출처: NVP-2106 KR PDF p6~p7, NVP Healthcare Catalog KR p10.

시험 조건:

- 대상: 60세 이상 기억력 저하 호소자
- 120명, 12주, 이중눈가림/무작위/위약대조
- 섭취량: `100억 CFU/day (1 x 10^10 CFU/day)`가 수학적으로 맞음

주요 차트:

| 항목 | 원본 표기 | 값 처리 |
|---|---|---|
| ADAS-Cog13 Total Score | p=`0.0318`, 대조군 변화량 대비 202% 개선 | 개선율/p값 Exact, 점 위치 Approx. |
| Memory Score | p=`0.0257` at 6w, p=`0.0279` at 12w, 대조군 대비 207% 개선 | Exact/Approx. 혼합 |
| Q4 Delayed word recall | p=`0.0250` at 6w, p=`0.0037` at 12w, 대조군 대비 1514% 개선 | Exact/Approx. 혼합 |
| 주의집중력 정반응수 | p=`0.0174`, 대조군 대비 315% 개선 | Exact/Approx. 혼합 |
| 주의집중력 오반응수 | p=`0.0395`, 대조군 대비 147% 개선 | Exact/Approx. 혼합 |
| 주의집중력 누락오류수 | p=`0.0174`, 대조군 대비 315% 개선 | Exact/Approx. 혼합 |
| Amyloid-β 42/40 | p=`0.0471`, 대조군 변화량 대비 207% 개선 | Exact/Approx. 혼합 |

사이트/HTML 차트 체크:

- 원본 차트는 값 라벨 없이 축과 점만 있습니다. HTML 차트가 정확한 숫자처럼 보이면 위험합니다.
- 공개 사이트에서는 `p값`, `대조군 대비 개선율`, `12주 섭취 후 유의적 개선` 중심으로 정리하는 것이 원본과 가장 맞습니다.
- `100억 CFU/day (10 x 10^10 CFU/day)`는 반드시 수정 필요: `10 x 10^10`은 `1000억`입니다.

---

### NVP-1702

출처: NVP-1702 KR PDF p6~p7, NVP Healthcare Catalog KR p8.

시험 구조:

- 알코올성 간손상 시험: 70명, `NVP-1702-2 인체적용시험 결과보고서`
- 비알코올성 간손상 시험: 93명, `NVP-1702-1 인체적용시험 결과보고서`
- 둘을 하나의 인원수로 합치면 안 됩니다.
- 섭취량: `100억 CFU/day (1 x 10^10 CFU/day)`가 수학적으로 맞음

알코올성 간손상 차트:

| 항목 | NVP-1702 | Placebo | p값/비고 | 신뢰도 |
|---|---:|---:|---|---|
| γ-GTP 변화, 12w | `-2.85 ± 33.26 U/L` | `+24.56 ± 51.11 U/L` | p=`0.0292` | Exact, PDF 설명문 |
| ALT 변화, 12w | `-3.77 ± 14.64 U/L` | `+5.16 ± 14.46 U/L` | p=`0.0332` | Exact |
| AST 변화, 12w | `-1.42 ± 14.08 U/L` | `+5.32 ± 26.54 U/L` | 원본 설명문에 유의차 문구 없음 | Exact |
| Triglyceride 변화 | NVP-1702 감소, placebo 증가 | p=`0.0405` | 막대 높이는 Approx. |
| TNF-alpha | NVP-1702 12w 감소 | p=`0.0196` | 막대 높이는 Approx. |

비알코올성 간손상 차트:

| 항목 | 원본 그래프 방향성 | p값 | 신뢰도 |
|---|---|---|---|
| ALT | NVP-1702는 6w/12w 감소, placebo 증가 | p=`0.0260`, p=`0.0397` | 그래프 Approx. |
| AST | NVP-1702 감소, placebo 증가 | p=`0.0131` | Approx. |
| γGTP | NVP-1702 12w 감소, placebo 증가 | p=`0.0229` | Approx. |
| MFS | NVP-1702 감소, placebo 증가 | p=`0.0282` | Approx. |
| TNF-alpha | NVP-1702 12w 감소 | p=`0.0061` | Approx. |
| Fecal LPS | NVP-1702 12w 감소 | p=`0.0152` | Approx. |
| Serum LPS | NVP-1702 12w 감소, 군간 차이 | p=`0.0136`, p=`0.0109` | Approx. |

사이트/HTML 차트 체크:

- 알코올성과 비알코올성을 섞지 말고 별도 단락/차트로 구성해야 합니다.
- 현재 하나만 올라간 경우, 비알코올성 그래프도 별도 블록으로 추가하는 것이 맞습니다.

---

### NVP-1703

#### 성인 알레르기 비염

출처: `Probiotic NVP-1703 alleviates allergic rhinitis by inducing IL-10 expression: a four-week clinical trial`, Nutrients 2020, 12(5), 1427. 회사 PDF p6~p7.

시험 조건:

- 성인 95명
- NVP-1703: `B. longum IM55 + L. plantarum IM76`
- 섭취량: `100억 CFU/day (1 x 10^10 CFU/day)`

회사 PDF 기준 주요 방향:

- TNSS 및 코 증상 관련 지표 개선
- IL-10 증가, IL-10/cytokine ratio 개선
- 원본 값은 이미지 그래프에 의존하므로 HTML 수치는 Approx. 처리 필요

#### 소아청소년 알레르기 비염

출처: `Efficacy of Bifidobacterium longum and Lactobacillus plantarum (NVP-1703) in Children With Allergic Rhinitis: A Randomized Controlled Trial`, J Korean Med Sci. 2024;39(40):e266.

시험 조건:

- 6~19세 소아청소년
- randomized 81명, per-protocol 분석 68명
- NVP-1703 36명, placebo 32명
- 섭취량: `1 x 10^10 CFU/day`
- 기간: 4주

주요 수치:

| 항목 | Placebo | NVP-1703 | p값 | 신뢰도 |
|---|---:|---:|---|---|
| TNSS AM 변화, 4w | `-1.02 ± 2.62` | `-1.90 ± 2.07` | p=`0.031` | Exact, Table 2 |
| TNSS PM 변화, 2w | `-0.78 ± 1.49` | `-1.70 ± 1.72` | p=`0.017` | Exact |
| TNSS PM 변화, 4w | `-0.88 ± 2.22` | `-2.17 ± 2.14` | p=`0.004` | Exact |
| TNSS AM+PM 변화, 2w | `-1.45 ± 3.11` | `-2.99 ± 3.46` | p=`0.043` | Exact |
| TNSS AM+PM 변화, 4w | `-1.90 ± 4.64` | `-4.07 ± 4.05` | p=`0.011` | Exact |
| NSDS AM 변화, 4w | `-0.60 ± 2.29` | `-1.94 ± 1.97` | p=`0.023` | Exact |
| NSDS PM 변화, 4w | `-0.65 ± 2.18` | `-1.97 ± 2.05` | p=`0.019` | Exact |
| NSDS AM+PM 변화, 4w | `-1.25 ± 4.35` | `-3.91 ± 3.91` | p=`0.018` | Exact |

사이트/HTML 차트 체크:

- `L. plantarum IM7`은 오기입니다. 논문/회사 PDF 기준 `L. plantarum IM76`입니다.
- 한국어/일본어 카드 설명은 성인/소아청소년 데이터를 혼동하지 않도록 `성인 알레르기 비염`, `소아청소년 알레르기 비염`을 분리해야 합니다.

---

### NVP-1704

출처: `Effects of Probiotic NVP-1704 on Mental Health and Sleep in Healthy Adults: An 8-Week Randomized, Double-Blind, Placebo-Controlled Trial`, Nutrients 2021, 13, 2660. 회사 PDF p3.

시험 조건:

- 156명, 8주
- 이중눈가림, 무작위, 위약대조
- 섭취량: `50억 CFU/day (5 x 10^9 CFU/day)`

회사 PDF 이미지 판독:

| 항목 | NVP-1704 4w | NVP-1704 8w | Placebo 4w | Placebo 8w | 비고 |
|---|---:|---:|---:|---:|---|
| BDI-II 변화 | 약 `-6` | 약 `-8` | 약 `-3.3` | 약 `-5.3` | Approx., p표기 있음 |
| BAI 변화 | 약 `-4.8` | 약 `-5.2` | 약 `-1.3` | 약 `-3.0` | Approx. |
| BDI-II + BAI 변화 | 약 `-11` | 약 `-13` | 약 `-4.5` | 약 `-8` | Approx. |
| PSQI total 변화 | 약 `-0.7` | 약 `-1.3` | 약 `-0.35` | 약 `-0.4` | Approx. |
| PSQI daytime dysfunction 변화 | 약 `-0.2` | 약 `-0.38` | 약 `-0.15` | 약 `-0.15` | Approx. |
| ISI 변화 | 약 `-1.8` | 약 `-3.2` | 약 `-0.5` | 약 `-1.2` | Approx. |
| IL-6 변화 | 약 `-0.22 pg/mL` | - | 약 `+0.20 pg/mL` | - | p=`0.041`, Approx. |
| log BDNF 변화 | 약 `+0.09` | - | 약 `+0.075` | - | Approx. |

사이트/HTML 차트 체크:

- 이 항목은 대부분 change-from-baseline 그래프입니다. 절대 점수처럼 표기하면 안 됩니다.
- `스트레스·수면·릴랙스` 설명은 우울/불안 척도, 수면의 질/불면증 척도, IL-6/BDNF를 분리해 표현해야 합니다.

---

### Testofen

출처: BTC 카탈로그 p6, Rao A et al. The Aging Male. 2016 Jun;19(2):134-42.

회사 PDF 이미지 판독:

| 항목 | Testofen 0w | Testofen 6w | Testofen 12w | Placebo 0w | Placebo 6w | Placebo 12w | 신뢰도 |
|---|---:|---:|---:|---:|---:|---:|---|
| AMS total score | 약 `10.6` | 약 `8.4` | 약 `7.9` | 약 `10.4` | 약 `10.0` | 약 `9.3` | Approx. |
| Physical score | 약 `18.0` | 약 `14.0` | 약 `11.5` | 약 `16.8` | 약 `16.2` | 약 `14.5` | Approx. |
| Sexual score | 약 `13.2` | 약 `10.0` | 약 `8.3` | 약 `13.2` | 약 `12.0` | 약 `11.3` | Approx. |
| Mental score | 약 `41.5` | 약 `31.7` | 약 `28.0` | 약 `40.0` | 약 `38.8` | 약 `35.0` | Approx. |

사이트/HTML 차트 체크:

- 원본 그래프는 정확한 데이터 라벨이 없으므로, 웹 차트에 소수점까지 세밀한 수치를 쓰면 원본보다 과정확해 보입니다.
- 공개 페이지에서는 “12주 섭취 후 AMS total 및 하위 영역 점수 감소”로 정리하고, 내부 HTML 차트에는 approximate 출처 표시가 필요합니다.

---

### ThinkGIN

출처: BTC 카탈로그 p8, Nutrients 2024, 16(12):1952.

회사 PDF 이미지 판독:

| 항목 | 방향성 | 수치 처리 |
|---|---|---|
| SVLT | ThinkGIN군이 placebo 대비 언어학습/기억 관련 지표 개선 | 원본 이미지 Approx. |
| AChE | ThinkGIN군 AChE 변화가 placebo와 차이 | 원본 이미지 Approx. |
| PSQI-K | 수면 관련 지표 변화 | 원본 이미지 Approx. |

사이트/HTML 차트 체크:

- ThinkGIN은 논문명은 명확하지만, 현재 확보한 BTC 그래프는 이미지형이라 웹 차트의 세부 수치가 실제 논문표와 일치하는지 추가 원문표 확인이 필요합니다.
- 차트 제목은 `SVLT`, `AChE`, `PSQI-K` 약어의 풀네임 또는 간단 주석을 붙이는 것이 사용자 이해에 좋습니다.

---

### Pinitol

출처: `Pinitol consumption improves liver health status by reducing oxidative stress and fatty acid accumulation in subjects with non-alcoholic fatty liver disease: A randomized, double-blind, placebo-controlled trial`, J Nutr Biochem 2019;68:33-41. 아미코젠 `피니톨 간건강 소개자료.pdf` p14~p15.

시험 조건:

- 비알코올성 지방간 대상
- 60명
- pinitol `300 mg/day`
- 12주

human chart 주요 항목:

| 항목 | 방향성 | p값/비고 | 신뢰도 |
|---|---|---|---|
| Liver fat content | pinitol군 감소 | 원본 p14 | Approx. |
| ALT | pinitol군 감소 | 원본 p14 | Approx. |
| AST | pinitol군 감소 | 원본 p14 | Approx. |
| Plasma GPx | pinitol군 증가 | p=`0.015` | Approx. |
| Urine MDA | pinitol군 감소 | p=`0.002` | Approx. |

동물/기전 표 수치:

| 항목 | Control | Low dose | High dose | 신뢰도 |
|---|---:|---:|---:|---|
| PON | `1.26 ± 0.12` | `2.58 ± 0.24` | `2.41 ± 0.19` | Exact, PDF 표 |
| Catalase | `8.93 ± 0.77` | `13.81 ± 1.23` | `12.8 ± 1.10` | Exact |
| GSH-Px | `16.92 ± 0.50` | `18.01 ± 1.31` | `21.23 ± 1.35` | Exact |
| TBARS | `13.63 ± 1.17` | `9.81 ± 1.54` | `9.31 ± 0.99` | Exact |
| Mitochondria H2O2 | `10.87 ± 1.42` | `8.12 ± 0.84` | `7.22 ± 0.91` | Exact |
| Cytosolic H2O2 | `3.14 ± 0.37` | `2.44 ± 0.13` | `2.47 ± 0.11` | Exact |

사이트/HTML 차트 체크:

- human chart는 p14~p15의 사람 대상 자료를 우선해야 합니다.
- 동물/기전 표는 상세 설명 보조자료로만 쓰고, 사람 대상 효능 차트처럼 보이게 배치하면 안 됩니다.

---

### AcetoBeta

출처: 아미코젠 `아세토베타_원료제안서 (1).pdf` p3~p4, `원료소개서.pdf` p12.

시험 조건:

- 20~40대 성인 남녀 30명
- 층화 무작위배정, 이중눈가림, 교차설계
- 비교: 원료 미섭취 vs 원료 섭취

주요 내용:

| 항목 | 원본 방향성 | 신뢰도 |
|---|---|---|
| 혈중 아세트알데하이드 | 원료 섭취군에서 감소 | 그래프 Approx. |
| 구역질/메스꺼움 | 알코올 섭취 2h 후 개선 | 설명문 Exact + 그래프 Approx. |
| ADH/ALDH 경로 | 알코올 -> 아세트알데하이드 -> 초산 | 기전 도식 |

사이트/HTML 차트 체크:

- 원본 이미지에는 `Alcohal`, `Jouamal`, `Agricculture` 같은 오탈자가 있어 그대로 노출하면 안 됩니다.
- 기전 설명 문장은 “자료입니다” 같은 표현보다 원리 중심으로 간단히 써야 합니다.

추천 문장:

> 알코올은 ADH에 의해 아세트알데하이드로 바뀌고, 이후 ALDH에 의해 초산으로 전환됩니다. AcetoBeta는 이 분해 경로와 관련된 지표를 기준으로 혈중 알코올 농도와 숙취감 변화를 확인한 소재입니다.

---

### Immulink MBG

출처: Foods 2023, 12(3), 659. DOI `10.3390/foods12030659`.

원본 이미지:

- 8개 면역지표 그래프
- 원본 그래프 자체에는 수치 라벨이 제한적입니다.

사이트/HTML 차트 체크:

- HTML 복원 수치가 원본 막대 높이와 맞는지 확인하려면 Foods 원문 Figure/Table를 추가로 열람해 raw 또는 mean±SD 값을 대조해야 합니다.
- 현재 확보 기준에서는 “8개 면역지표 변화” 방향성은 쓸 수 있지만, 정밀 수치형 HTML 차트는 원문표 확인 후 확정해야 합니다.

---

## 3. 바로 수정해야 할 수치/표현 이슈

1. CFU 표기 오류
   - 잘못된 표기: `100억 CFU/day (10 x 10^10 CFU/day)`
   - 올바른 표기: `100억 CFU/day (1 x 10^10 CFU/day)` 또는 `100억 CFU/day (10 x 10^9 CFU/day)`
   - 대상: NVP-2106, NVP-1702, NVP-1703 등 100억 CFU 표기 항목 전체

2. NVP-1702 인원수
   - 알코올성 시험: 70명
   - 비알코올성 시험: 93명
   - 하나의 숫자로 단정하면 안 됩니다.

3. NVP-1703 균주명
   - `L. plantarum IM7`은 오기
   - `L. plantarum IM76`이 맞습니다.

4. MED-02 인원수
   - 상세 PPTX/차트 원본 기준: 75명
   - BIOLAB Japan 소개 PPTX의 100명 표기는 충돌값입니다.
   - 그래프 설명은 75명 기준이 맞습니다.

5. HTML 차트 복원 시 주의
   - MED-02처럼 chart XML 수치가 있는 것은 Exact로 복원 가능.
   - NVP/Testofen/ThinkGIN/Pinitol 일부처럼 이미지형 그래프만 있는 것은 Approx.입니다.
   - Approx. 값을 소수점 2자리처럼 과도하게 정확한 데이터처럼 표시하지 않는 것이 좋습니다.

---

## 4. 다음 작업 제안

1. `charts-review.html`의 HTML 차트 데이터 배열을 이 문서의 `Exact` 값 우선으로 교체합니다.
2. `Approx.` 항목은 원본 이미지 위에 투명한 축 보정 기준을 잡아 한 번 더 디지타이징합니다.
3. 공개 사이트에는 정확한 수치 차트가 불필요한 항목은 p값/개선율/방향성 중심으로 설명형 블록으로 바꾸는 편이 안전합니다.
4. ThinkGIN, Immulink MBG는 원문 표 수치 확보 후 최종 확정하는 것이 좋습니다.
