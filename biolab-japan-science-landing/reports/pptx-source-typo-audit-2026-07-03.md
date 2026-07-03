# BIOLAB Japan PPTX 오탈자/오기 검수 보고서

작성일: 2026-07-03  
대상 PPTX: `C:/Users/우지윤/Downloads/BIOLAB Japan - Introducing - 20260515.pptx`

## 1. 검수 기준

이번 검수는 사이트 수정이 아니라, BIOLAB Japan 소개 PPTX 자체에 들어 있는 오탈자, 오기, 원본 자료와의 숫자/용어 불일치를 찾는 작업이다.

사용한 근거자료:

- `C:/Users/우지윤/Downloads/BIOLAB Japan - Introducing - 20260515.pptx`
- `C:/Users/우지윤/Downloads/NVP/NVP-Healthcare Probiotics Catalog_KR.pdf`
- `C:/Users/우지윤/Downloads/NVP/NVP-1702(LIVER)_KR.pdf`
- `C:/Users/우지윤/Downloads/NVP/NVP-1703(NOSE)_KR.pdf`
- `C:/Users/우지윤/Downloads/NVP/NVP-1704(RELAX)_KR.pdf`
- `C:/Users/우지윤/Downloads/NVP/NVP-2106(BRAIN)_KR.pdf`
- `//172.30.1.67/data1/#직원/서진/3.이미지/20260220_중어번역/국문/Introduction for MED-01 - KOR.pptx`
- `//172.30.1.67/data1/#직원/서진/3.이미지/20260220_중어번역/국문/Introducing for MED-02 - KOR.pptx`
- `C:/Users/우지윤/OneDrive/문서/PPTX/새 폴더/1. [BTC] 비티씨 카탈로그 2025년.pdf`
- `C:/Users/우지윤/Downloads/아미코젠_원료소개서/`

주의:

- NVP 계열 원료(NVP-1702, NVP-1703, NVP-1704, NVP-2106)는 `C:/Users/우지윤/Downloads/NVP/` 폴더의 개별 KR 자료와 통합 카탈로그를 우선 기준으로 삼는다.
- NVP 개별 PDF 일부는 이미지형 PDF라 텍스트 추출이 제한적이었다. 다만 NVP 통합 카탈로그에서 주요 제품 코드, 균주명, 인체시험 인원, CFU 표기를 확인했다.
- BTC 카탈로그 PDF는 텍스트 추출이 거의 되지 않는 Illustrator 기반 PDF였기 때문에, 24개 페이지를 이미지로 렌더링해 육안 기준으로 원료명, 브랜드명, 기능성 문구를 확인했다.
- 아미코젠 PDF 일부도 원본 자체에 영문 오탈자가 있으므로, 그대로 따르지 말고 생명과학 표준 용어로 정리해야 한다.

## 2. 확정 수정 후보

| 위치 | 현재 PPTX 표기 | 권장 표기 | 판단 |
|---|---|---|---|
| Slide 4, Slide 10 | `NVP-17902` | `NVP-1702` | NVP 통합 카탈로그와 제품 폴더명이 모두 `NVP-1702(LIVER)`다. `17902`는 오기. |
| Slide 6 | `100억 CFU/day (10x10^10 CFU/day)` | `100억 CFU/day (1x10^10 CFU/day)` 또는 `100억 CFU/day (10x10^9 CFU/day)` | 수학적 오류. 100억은 10^10이고, 10x10^10은 10^11로 10배 커진다. NVP-2106, NVP-1702, NVP-1703 공통 점검 필요. |
| Slide 11 | `L. plantarum IM7` | `L. plantarum IM76` | NVP 통합 카탈로그는 `L. plantarum IM76 + B. longum IM55`로 표기. PPTX 요약표 Slide 6도 IM76으로 되어 있어 Slide 11의 IM7은 오기. |
| Slide 9 | `아밀라이드 베타` | `아밀로이드 베타` | NVP 통합 카탈로그는 `아밀로이드 베타 축적 개선`으로 표기. 생명과학 용어상도 `amyloid beta = 아밀로이드 베타`. |
| Slide 11 | `면역글로빈 IgE` | `면역글로불린 IgE` | 표준 생명과학 용어는 `면역글로불린`. |
| Slide 12 | `IL-6 유의작 감소` | `IL-6 유의적 감소` | NVP-1704 원본 자료와 통합 카탈로그 모두 `유의적 감소` 맥락. |
| Slide 4 | `알레르성 비염` | `알레르기성 비염` | 일반 표준 표기 및 NVP 원본 표현 기준. |
| Slide 4, 6, 10 등 | `알콜성`, `비알콜성` | `알코올성`, `비알코올성` | 식품/의학 문서에서는 `알코올성`, `비알코올성`이 자연스럽고 원본 자료도 대체로 이 표기를 사용. |
| Slide 4 | `흰목이버석효소분해추출물` | `흰목이버섯효소분해추출물` | `버석`은 오타. |
| Slide 4 | `저분자콜라갠펩타이트 AG` | `저분자콜라겐펩타이드 AG` | 아미코젠 원료소개서와 PDF 파일명 모두 `저분자콜라겐펩타이드 AG`. |
| Slide 14 | `Trigonellafoenum-graecum` | `Trigonella foenum-graecum` | 학명 띄어쓰기 누락. |
| Slide 14, Slide 16 | `Panxginseng`, `Panx ginseng` | `Panax ginseng` | 인삼속 학명은 `Panax`. |
| Slide 14, Slide 17 | `주간적 기억감퇴` | `주관적 기억감퇴` | 의미상 `주관적 기억감퇴`가 맞음. |
| Slide 18 | `풋사과추출물 (Tremella fuciformis Beck-extract)` | `풋사과추출물 애플페논(Applephenon®)` 또는 `풋사과추출물(Applephenon®)` | BTC 카탈로그는 Applephenon을 `풋사과추출물 애플페논(Applephenon®)`로 표기한다. `Tremella fuciformis`는 흰목이버섯 계열로 Neu learn 원료라 Applephenon 설명에 붙은 것은 복붙 오류. |
| Slide 18 | `스테드셀러` | `스테디셀러` | 오타. |
| Slide 19 | `Pangasiushypophthalmus`, `Pangasiush` | `Pangasius hypophthalmus` 또는 국문 `팡가시우스 어피` | 아미코젠 콜라겐 자료 이미지상 `Pangasius hypophthalmus`로 확인. 현재 표기는 띄어쓰기/철자 깨짐. |
| Slide 14, Slide 19 | `500da` | `500 Da` 또는 `500Da` | 단위 표기 오류. Dalton은 보통 `Da`로 표기. |
| Slide 19 | `저분자콜라겐펩타이트` | `저분자콜라겐펩타이드` | 아미코젠 자료 기준. |
| Slide 20 | `Zizanialactifolia` | `Zizania latifolia` | 학명 띄어쓰기 누락. |
| Slide 21, Slide 22 | `for Lever Health` | `for Liver Health` | 간은 `Liver`. `Lever`는 오타. |
| Slide 23 | `ADH (Achohal Dehydrogenase)` | `ADH (Alcohol Dehydrogenase)` | 아세토베타 PDF 원본에도 `alchohal` 오타가 있으나, 표준 생화학 용어는 `Alcohol Dehydrogenase`. |
| Slide 23 | `Aceto Bete` | `Aceto Beta` 또는 `AcetoBeta` | 아세토베타 원료제안서와 원료소개서는 `AcetoBeta`. |
| Slide 23 | `아세트알데히드` | `아세트알데하이드` | 표준 표기 및 원본 자료 표기 기준. |
| Slide 14 | `선천적 및 후천적 면역력 깅화` | `선천적 및 후천적 면역력 강화` | 오타. |
| Slide 14 | `β- Glucanriched` | `β-Glucan enriched` 또는 `β-Glucan-rich` | 영문 결합 오류. 정확한 원료명/브랜드 표기는 별도 확인 필요. |
| Slide 6 | `B. longgum - BORI` | `B. longum - BORI` | 균종명 오타. |
| Slide 6 | `FDA UPS 인증` | `FDA USP 인증` | `USP`가 맞음. Slide 6 내부에도 `FDA USP` 표기가 함께 있어 `UPS`는 오타. |

## 3. 숫자/근거 불일치 또는 확인 필요 항목

### 3-1. NVP-1702 인체시험 인원

PPTX 안에서 서로 다른 맥락이 섞여 있다.

- Slide 6 요약표: `93명 인체적용 시험 완료`
- Slide 10 상세페이지: `70명의 인체시험 완료`
- NVP 통합 카탈로그:
  - `NVP-1702-1`: 비알코올성 간기능 손상자 대상 `93명`
  - `NVP-1702-2`: 알코올성 간기능 손상자 대상 `70명`

판단:

- 둘 중 하나만 맞는 문제가 아니라, 알코올성/비알코올성 시험이 구분되어 있다.
- Slide 10이 알코올성/비알코올성 둘 다 설명하는 구조라면 `알코올성 70명 / 비알코올성 93명`처럼 나눠 표기하는 것이 가장 정확하다.
- Slide 6 요약표도 `93명`만 두면 알코올성 시험 70명이 누락된 것처럼 보일 수 있다.

### 3-2. MED-02 인체시험 인원

- BIOLAB Japan PPTX Slide 6, Slide 8: `100명 인체시험 완료`
- MED-02 상세 PPTX: `임상 대상: BMI 25~31.9 kg/m2 75명`

판단:

- 사용 지침상 MED-02 인체시험 인원은 BIOLAB Japan 소개 PPTX 기준을 우선한다.
- 따라서 사이트 및 소개자료 표기는 `100명`을 유지한다.
- MED-02 상세 PPTX의 `75명`은 보조자료 내 수치로만 기록하고, 현재 사이트 수정 대상에서는 제외한다.

### 3-3. AcetoBeta 인체시험 인원

- BIOLAB Japan PPTX Slide 14: `20대 ~ 40대 성인 40명`
- 아세토베타 원료제안서: `20~40대 성인 남녀, 30명`
- 아미코젠 원료소개서: `만 19세 이상 40세 미만인 남녀, 30명`

판단:

- 제공된 아미코젠 자료 2종은 모두 `30명`이다.
- 사용 지침상 AcetoBeta는 PDF 카탈로그 기준을 우선한다.
- 따라서 사이트 및 상세 설명 표기는 `30명`으로 수정한다.

### 3-4. 저분자콜라겐펩타이드 AG 지표성분

- 아미코젠 원료소개서 텍스트 추출: `GPH 32.9mg/g`, `GPH 3.29% 이상`
- 렌더링 이미지 확인: `GPH 3.2% 이상`, `Gly-Pro-Hyp (GPH) 3.2% 이상`

판단:

- PPTX에는 이 수치가 직접 크게 들어가 있지는 않지만, 상세 페이지/원료 설명에 넣을 경우 `GPH 3.2% 이상` 또는 `GPH 32.9mg/g` 중 원본 최신본 기준을 확인해야 한다.
- 웹 상세페이지에는 `GPH 3.2% 이상`처럼 표현하는 편이 원본 이미지와 더 일치한다.

## 4. 표현은 맞지만 문장 다듬기가 필요한 항목

아래는 단순 오타라기보다 문장 구조가 어색하거나, 상세 페이지에 그대로 쓰면 품질이 낮아 보이는 항목이다.

| 위치 | 현재 표현 | 권장 방향 |
|---|---|---|
| Slide 14 | `자외선에 의한 피부 손상으로 부터 및 피부건강 유지` | `자외선에 의한 피부손상으로부터 피부건강을 유지하는 데 도움` |
| Slide 19 | `확연한 피부보습 개선` | `피부보습 개선` 또는 `피부보습 지표 개선` |
| Slide 19 | `피부 총탄력 (R2) 개선` 반복 | 중복 제거. 한 번만 표기. |
| Slide 22 | `손상된 간세포 개선 및 증가 효과` | 자료 맥락상 `간 건강 지표 개선` 또는 `간 손상 관련 지표 개선`처럼 정리 필요. 단, 사용자가 표현 완화를 거부했으므로 수정 여부는 별도 결정. |
| Slide 23 | `음주로 인한 간손상과 숙취 감소에 탁월한 효과` | 법적 표현 검토 필요. 아미코젠 자료는 2025년 숙취해소 표시·광고 규제 및 심의 완료 자료를 별도로 설명함. |

## 5. 근거자료 자체에 있는 오탈자

근거자료라고 해도 그대로 따라 쓰면 안 되는 항목이 있다.

| 자료 | 원본 표기 | 권장 표기 |
|---|---|---|
| 아세토베타 원료제안서 | `Alcohal`, `alchohal` | `Alcohol` |
| 아세토베타 원료제안서 | `Jouamal of Agricculture & Life Science` | `Journal of Agriculture & Life Science`로 추정. 원문 논문명 재확인 권장. |
| MED-02 상세 PPTX 일부 슬라이드 | `L. fermetum` | `L. fermentum` |

## 6. BTC 카탈로그 PDF 검토 결과

대상 PDF:

- `C:/Users/우지윤/OneDrive/문서/PPTX/새 폴더/1. [BTC] 비티씨 카탈로그 2025년.pdf`

검토 방식:

- 총 24페이지 PDF를 이미지로 렌더링해 전체 페이지를 육안 확인했다.
- PDF 내부 텍스트 추출은 거의 되지 않았으므로, 원료명/브랜드명/영문 학명/섭취량은 렌더링 이미지 기준으로 확인했다.

### 6-1. PPTX 및 웹 상세페이지에 반영할 정확 표기

| BTC 카탈로그 표기 | PPTX/웹에서 주의할 점 | 판단 |
|---|---|---|
| `호로파종자추출물(Testofen®)` | `Trigonellafoenum-graecum`처럼 학명 띄어쓰기 없이 쓰면 안 됨 | 영문 학명은 `Trigonella foenum-graecum` 형태로 정리. BTC 표기명은 `호로파종자추출물(Testofen®)`. |
| `풋사과추출물 애플페논(Applephenon®)` | Applephenon 설명에 `Tremella fuciformis`가 들어가면 오기 | BTC 기준 Applephenon은 풋사과추출물. `Tremella fuciformis`는 흰목이버섯/Neulearn 계열. |
| `새싹인삼추출분말(ThinkGIN™)` | `Panx ginseng`, `Panxginseng`은 오기 | 인삼 학명 표기는 `Panax ginseng`으로 정리. BTC 표기명은 `새싹인삼추출분말(ThinkGIN™)`. |
| `당귤농축분말(ROCH™)` | 혈오렌지/레드오렌지 계열을 일반 `오렌지`로 뭉개지 않기 | BTC 기준 `Red Orange Complex H`, 원재료는 `레드오렌지(당귤나무)`. |
| `모로오렌지추출분말(Morosil®)` | `모로오렌지추출물`보다 `추출분말`이 BTC 카탈로그 표기와 더 일치 | BTC 기준 원재료는 `모로오렌지(당귤나무)`, 일일섭취량 `400mg/day`. |
| `돌외잎차추출분말(ActivAMP®)` | 브랜드 대소문자 및 `AMP` 표기 유지 필요 | BTC 기준 기능성은 `체지방 감소`, `운동수행능력 향상` 쪽. |
| `흰목이버섯효소분해추출물(Neulearn®)` | `흰목이버석`은 오타 | BTC 원료 리스트에서도 `흰목이버섯효소분해추출물(Neulearn®)`로 확인. |
| `식물성 오메가3 / MAGOMEGA3` | 원재료 `Schizochytrium` 철자 주의 | BTC 기준 조류 유래 식물성 EPA/DHA 원료. |
| `홍삼 / 발효홍삼`, `진생베리 / 흑삼` | 홍삼·진생베리 계열은 `Panax ginseng` 표기 유지 | PPTX의 `Panx/Panx ginseng` 계열 표기는 수정 필요. |

### 6-2. BTC 카탈로그 자체에서 눈에 띄는 오탈자 후보

BTC 카탈로그 PDF 자체에서는 큰 제품명 오탈자는 확인되지 않았다. 다만 웹/PPTX에 옮겨 쓸 때 아래 표기는 주의가 필요하다.

| 항목 | 주의점 |
|---|---|
| `ProAtein™` | 일반 단어 `Protein`이 아니라 브랜드 표기처럼 보이므로 임의로 `Protein`으로 고치지 않는 편이 안전하다. |
| `AstaZine®`, `LipiSperse®`, `AquaCelle®`, `CAVAMAX W8`, `EpiCor®` | 브랜드 대소문자와 중간 대문자를 유지해야 한다. |
| `γ-시클로덱스트린(CAVAMAX W8)` | 한글 문서에서는 `감마-시클로덱스트린` 병기가 더 읽기 쉽다. |
| `Schizochytrium` | 철자가 길어 오기 가능성이 높으므로 사이트 입력 시 그대로 재확인 필요. |

### 6-3. BTC PDF 기준으로 추가 확정되는 PPTX 오기

- `풋사과추출물 (Tremella fuciformis Beck-extract)`는 명확한 복붙 오류다. BTC PDF는 Applephenon을 `풋사과추출물 애플페논(Applephenon®)`로 설명한다.
- `흰목이버석효소분해추출물`은 `흰목이버섯효소분해추출물`이 맞다. BTC 원료 리스트에서도 `Neulearn®` 항목이 이 표기다.
- `Panx ginseng`, `Panxginseng`은 `Panax ginseng`이 맞다. BTC의 새싹인삼/홍삼/진생베리 맥락과 생명과학 표준 학명 기준 모두 `Panax`다.
- `모로오렌지추출물(Morosil)`은 BTC 기준으로는 `모로오렌지추출분말(Morosil®)`이 더 정확하다.

## 7. 우선 수정 순서 제안

1. 제품 코드/균주명/수치 오류부터 수정
   - `NVP-17902 -> NVP-1702`
   - `IM7 -> IM76`
   - `100억 CFU/day (10x10^10) -> 100억 CFU/day (1x10^10)`
   - `NVP-1702 70명/93명 구분`
   - `AcetoBeta 40명 -> 30명`
   - `MED-02`는 BIOLAB Japan 소개 PPTX 기준 `100명` 유지

2. 생명과학 용어 오탈자 수정
   - `아밀로이드 베타`
   - `면역글로불린`
   - `Alcohol Dehydrogenase`
   - `Pangasius hypophthalmus`
   - `Panax ginseng`
   - `Zizania latifolia`

3. 국문 오탈자 및 문장 정리
   - `흰목이버섯`
   - `저분자콜라겐펩타이드`
   - `스테디셀러`
   - `강화`
   - `알코올성/비알코올성`
   - `알레르기성 비염`

4. 마지막으로 법적·표현 리스크 검토
   - 숙취해소, 간손상, 질염 예방/치료 등 직접 효능 표현은 제품/소재 유형과 국가별 표시 규정에 맞춰 별도 확인 필요.
