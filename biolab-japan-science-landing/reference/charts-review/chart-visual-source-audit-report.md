# BIOLAB 차트 HTML 재구성 검수 리포트

검수 대상: `charts-review.html`
검수 기준: `renamed-originals/` 원본 차트 이미지, `BIOLAB Japan - Introducing - 20260515.pptx`, MED-01/MED-02 PPTX, NVP KR 카탈로그/PDF, BTC 카탈로그, 아미코젠 원료소개서 PDF
검수 일자: 2026-07-07

## 1. 결론

현재 HTML 차트는 전체 구조를 빠르게 비교하기에는 유용하지만, 공개 페이지에 그대로 반영하기에는 아직 보정이 필요합니다.

가장 큰 문제는 다음입니다.

1. `charts-review.html`이 로컬 원본 이미지가 아니라 `https://biolabjp.com/images/ingredients/`의 라이브 이미지를 원본으로 불러옵니다. 비교 기준이 사이트 상태에 따라 바뀔 수 있으므로, 검수용 페이지는 `renamed-originals/` 또는 고정된 로컬 원본을 기준으로 바꿔야 합니다.
2. 여러 HTML 차트가 “근사값”으로 재구성되어 있어 원본과 선 방향, 축 범위, 패널 수, p-value 표기, 출처 표기가 완전히 일치하지 않습니다.
3. Applephenon 일부 항목은 `AFTER 이미지 유지 undefined`가 표시됩니다. 데이터 누락입니다.
4. NVP-2106, NVP-1703, NVP-1704, Applephenon, Pinitol은 원본 그래프의 구조를 단순화한 정도가 커서 그대로 쓰면 “원본 재현”이라고 보기 어렵습니다.
5. 출처 표기는 제품별 편차가 큽니다. NVP 계열과 MED-01은 근거 출처가 비교적 확인되지만, ThinkGIN, Neulearn, Applephenon, Agrimony, Pinitol, Immulink 등은 제공 자료 안에서 차트별 정확한 논문/시험 출처가 명확히 추출되지 않는 항목이 있습니다.

## 2. 렌더링/구조 문제

### 2-1. 원본 이미지 기준이 라이브 사이트 URL임

현재 코드:

```js
const IMG="https://biolabjp.com/images/ingredients/";
```

문제:
- 원본 비교 화면이 실제 PPTX 추출 원본이 아니라 현재 배포 사이트 이미지를 참조합니다.
- 사이트 이미지가 갱신되면 검수 기준이 바뀝니다.
- 사용자가 준 원본과 Claude가 만든 HTML 재구성을 비교하려는 목적에는 맞지 않습니다.

수정 방향:
- 검수용 HTML은 `renamed-originals/`의 파일을 기준으로 비교해야 합니다.
- 배포용 HTML은 최종 승인된 `webp/png`만 별도로 매핑합니다.

### 2-2. 원본/HTML 비교 블록 중 일부가 “이미지 유지 undefined”로 표시됨

확인 항목:
- `applephenon-evidence-2.webp`
- `applephenon-evidence-3.webp`

문제:
- `type: "image"`로 처리된 항목에 설명 문자열이 없어 AFTER 영역에 `undefined`가 노출됩니다.
- 사용자가 보기에는 오류 화면처럼 보입니다.

수정 방향:
- 이미지 유지 항목에도 설명을 명시합니다.
- 예: `원본 이미지 유지 - 체지방/허리둘레 추이 그래프`, `원본 이미지 유지 - 16주 BMI 변화 그래프`
- 차트로 재구성할 항목이라면 `image`가 아니라 `chart`로 바꾸고 SVG 재구성 데이터를 넣어야 합니다.

### 2-3. “근사값(형태 재현)” 표기가 많음

문제:
- 차트가 PPTX 원본의 정확 수치 복원이 아니라 대략적인 시각 재현임을 보여줍니다.
- 웹사이트 상세페이지에서 근거 자료로 쓰기에는 신뢰도가 떨어져 보일 수 있습니다.

수정 방향:
- 원본에 수치가 보이는 항목은 HTML 데이터에 정확 수치를 입력합니다.
- 수치가 이미지로만 존재해 정확 판독이 어려운 경우에는 “원본 차트 이미지 유지”가 더 안전합니다.
- 공개 페이지에서는 `근사값` 같은 내부 제작 메모를 노출하지 않는 것이 좋습니다.

## 3. 제품별 차트 재현 검수

### MED-01

원본:
- `MED01_dysuria-discharge-burning.png`
- `MED-01` 상세 PPTX 및 논문 PDF
- 출처 확인: `Nutrients 2023, 15(2), 331`

확인된 문제:
- HTML 첫 패널의 한국어 제목에 `배뇨통(생리통) ↓`가 들어가 있습니다. 원본/문맥 기준으로 `생리통`은 부적절합니다. `배뇨통 ↓`으로 정리해야 합니다.
- MED-01 첫 차트는 세 가지 증상 변화의 막대/에러바/p-value 구조는 대체로 맞지만, 원본의 패널 제목 박스와 축 라벨을 더 크게 보이도록 조정해야 합니다.
- Nugent score 차트는 별도 차트로 유지하되, `Nugent score` 설명 주석을 같이 붙여야 합니다.

수정 방향:
- `배뇨통(생리통)` 삭제.
- `Ref: Nutrients 2023, 15(2), 331`을 MED-01 두 차트 모두에 명확히 표기.
- Nugent score는 “질 내 균총 상태를 평가하는 점수이며 낮을수록 정상 균총에 가까움” 정도의 주석을 차트 아래에 추가.

### MED-02

원본:
- `MED02_fatmass-fatpct-weight.png`
- `Introducing for MED-02 - KOR.pptx`

확인된 문제:
- 체지방량/체지방률/체중 3패널은 원본 구조를 대체로 따르지만 원본의 축 라벨과 단위가 작아 HTML에서도 설명이 부족합니다.
- BMI 차트 원본은 비교 페이지에서 원본 영역이 거의 비어 보이는 구간이 있습니다. 라이브 이미지 참조 문제인지 원본 파일 누락인지 확인이 필요합니다.
- MED-02는 사용자가 “재팬 PPTX 기준을 따른다”고 정리한 항목입니다. 상세 MED-02 자료와 충돌하는 인원 수는 사이트에서는 재팬 PPTX 기준을 우선해야 합니다.

수정 방향:
- 체지방량, 체지방률, 체중, BMI를 별도 카드로 정리하되 각 축 단위를 명확히 표기.
- BMI 원본 이미지를 로컬 원본 기준으로 다시 연결.
- 출처 표기는 `MED-02 인체적용시험 자료 / BIOLAB Japan PPTX 기준`처럼 내부 기준을 명시.

### NVP-2106

원본:
- `NVP2106_total-score.jpeg`
- `NVP2106_memory-delayedrecall.jpeg`
- `NVP2106_attention.jpeg`
- 출처 확인: `NVP-2106 인체적용시험 결과보고서(국내 대학 병원)`, `Nutrients. 2023 Jul 29;15(15):3381`은 NVP 카탈로그 내 관련 논문으로 확인됨.

확인된 문제:
- 원본 Total Score 그래프는 개선 방향을 시각적으로 위쪽으로 보이게 구성되어 있습니다. HTML은 값이 음수 방향으로 내려가는 선으로 그려져 원본과 시각 방향이 다르게 느껴집니다.
- Memory Score / Q4 delayed recall도 원본은 개선 방향이 명확한 상승형인데 HTML은 축 방향과 선 방향이 다르게 보일 수 있습니다.
- Attention 차트는 원본 3패널 구조를 HTML로 재현하고 있으나, 원본의 p-value 배치, 그룹 라벨, “섭취 12주째” 캡션 위치를 더 정확히 맞춰야 합니다.

수정 방향:
- ADAS-Cog13 변화량 그래프는 원본처럼 “개선 방향”이 위로 읽히도록 축 방향 또는 라벨을 재설계.
- 원본 이미지의 `Improvement / Worsening` 화살표를 HTML에도 반영.
- 출처: 임상 결과보고서와 Nutrients 논문을 차트별로 구분 표기.

### NVP-1702

원본:
- `NVP1702_gtp-alt-ast.jpeg`
- 출처 확인: `NVP-1702-2 인체적용시험 결과보고서(국내 대학 병원 4곳)`, `NVP-1702-1 인체적용시험 결과보고서(국내 대학 병원 4곳)`

확인된 문제:
- NVP-1702는 비알코올성/알코올성 시험이 나뉘는 구조인데, HTML 차트에서는 두 자료의 맥락이 명확히 분리되어 있지 않습니다.
- 원본에는 γ-GTP, ALT, AST 3패널이 한 장에 들어가며, 각 패널 아래 시험군 평균값/대조군 평균값 설명이 있습니다. HTML은 수치와 p-value만 단순화했습니다.
- 70명/93명 인원 수는 하나로 단정하면 안 됩니다. 70명과 93명이 각각 다른 시험 맥락으로 확인됩니다.

수정 방향:
- 차트 섹션을 “알코올성 간 손상 시험”과 “비알코올성 간 기능 손상 시험”으로 분리.
- 각 차트에 `대상자 수`, `시험 구분`, `출처 보고서`를 따로 표기.
- γ-GTP/ALT/AST의 원본 하단 설명을 캡션으로 복원.

### NVP-1703

원본:
- `NVP1703_adult-TNSS.jpeg`
- `NVP1703_child-TNSS.jpeg`
- 출처 확인: 성인 자료는 `NVP-1703 인체적용시험(성인) 결과보고서(국내 대학 병원 2곳) / Nutrients. 2020 May 15;12(5):1427` 확인.

확인된 문제:
- 성인 원본은 TNSS, 수양성 콧물, 코막힘 3패널입니다. HTML도 3패널이지만 원본의 daily/weekly 구분과 p-value 위치가 충분히 반영되지 않습니다.
- 소아·청소년 원본은 weekly와 daily 2패널입니다. HTML은 weekly 중심 단일 차트로 단순화되어 원본 정보가 빠집니다.
- 원본에서는 TNSS 변화가 시간별로 촘촘히 표시되며 에러바가 있습니다. HTML은 대략 값만 들어간 형태입니다.

수정 방향:
- 소아·청소년은 weekly/daily 두 차트를 모두 HTML로 복원하거나 원본 이미지 유지.
- 성인은 3패널 유지, p-value와 `Daily/Weekly` 표기 정리.
- 출처를 성인/소아·청소년으로 나누어 표기.

### NVP-1704

원본:
- `NVP1704_BDI-BAI.jpeg`
- `NVP1704_PSQI-ISI.jpeg`
- `NVP1704_IL6-BDNF.jpeg`
- 출처 확인: `NVP-1704 인체적용시험 결과보고서(국내 대학 병원)`, `Nutrients(2021, 13, 2660)`

확인된 문제:
- BDI/BAI/BDI+BAI, PSQI/ISI는 큰 구조는 맞지만 원본의 회색 배경 영역, 범례, 에러바, p-value 표시가 단순화되어 있습니다.
- IL-6/BDNF 원본은 막대 그래프 2개와 개별 피험자 연결선 패널 2개가 함께 있습니다. HTML은 막대 2개만 남겨 원본 정보 절반이 누락됩니다.
- 원본에는 `p=0.041`이 IL-6/BDNF 관련 패널에 반복 표기됩니다. HTML 캡션은 한 줄로 축약되어 있어 근거 해석이 약합니다.

수정 방향:
- IL-6/BDNF는 원본처럼 4패널로 재구성하거나 원본 이미지 유지.
- BDI/BAI/PSQI/ISI는 원본 패널 수와 p-value 위치를 맞춤.
- 출처: `NVP-1704 인체적용시험 결과보고서 / Nutrients 2021;13:2660` 표기.

### Bifido

원본:
- 비교 페이지에는 Bifido 관련 이미지가 있으나, 제공 추출 자료에서는 정확한 차트별 논문 출처가 확인되지 않았습니다.

확인된 문제:
- Bifido는 `120편 이상의 SCI 논문`, `FDA NDI/GRAS/USP` 같은 포괄적 근거는 있으나, 현재 HTML의 가스 배출/복부 팽만 차트에 연결되는 정확한 논문명 또는 시험보고서명이 확인되지 않았습니다.

수정 방향:
- 정확한 원문 출처가 없으면 차트 캡션에는 “제공 원본 이미지 기준”까지만 표기.
- 논문명 확보 전에는 수치형 HTML 재구성보다 원본 이미지 유지가 더 안전합니다.

### Testofen

원본:
- `TESTOFEN_AMS-total.png`
- `TESTOFEN_physical-sexual.png`
- `TESTOFEN_mental.png`
- 원본 이미지 내 출처: `Rao A et al. The Aging Male. 2016 Jun;19(2):134-42`

확인된 문제:
- HTML 차트는 원본의 선형 추세를 대체로 따릅니다.
- 다만 캡션이 `Rao 2016` 정도로 축약되어 있어 근거 자료로는 부족합니다.
- 원본에는 신체 기능/성기능 패널 안에 출처가 직접 들어가므로 HTML에도 같은 수준의 출처 표기가 필요합니다.

수정 방향:
- 세 차트 모두 `Rao A et al. The Aging Male. 2016 Jun;19(2):134-42` 표기.
- AMS는 낮을수록 개선이라는 주석 유지.

### ThinkGIN

원본:
- `THINKGIN_AChE.png`
- `THINKGIN_SVLT.png`
- `THINKGIN_PSQI-K.png`

확인된 문제:
- 원본 차트의 축과 색상은 비교적 단순하므로 HTML 복원 가능성이 높습니다.
- 제공 자료 텍스트에서는 정확한 논문명/시험 출처가 확인되지 않았습니다.
- PSQI-K 원본에는 `*p<0.05`와 수면잠복 설명 문구가 함께 있습니다. HTML에서 이 설명을 충분히 살려야 합니다.

수정 방향:
- 출처 확인 전까지는 `제공 PPTX 원본 기준`으로만 표기.
- 정확 논문명 확보 시 AChE/SVLT/PSQI-K 각각에 동일 출처인지 분리 표기.

### Neulearn

원본:
- `NEULEARN_memory-executive.jpeg`
- `NEULEARN_SMCQ.jpeg`

확인된 문제:
- 원본은 단기기억, 집행/계획, SMCQ의 p-value가 비교적 명확합니다.
- HTML 값은 근사로 들어가 있으며, 원본의 그룹 라벨과 p-value 브래킷을 더 정확히 맞춰야 합니다.
- 제공 텍스트 안에서는 정확한 논문명/시험 출처가 확인되지 않았습니다.

수정 방향:
- 원본 p-value `P=0.001`, `P=0.02`, `P=0.007`, `P=0.002`는 유지.
- 출처가 없으면 `제공 PPTX 원본 기준`으로만 표기하고 논문명은 비워둠.

### Applephenon

원본:
- `APPLEPHENON_16wk-BMI.jpeg`
- `APPLEPHENON_waist.jpeg`

확인된 문제:
- HTML의 `applephenon-evidence-1`과 `applephenon-evidence-2`가 같은 값 배열을 공유합니다. 원본상 BMI와 허리둘레/지속효과 그래프는 서로 다른 데이터입니다.
- `applephenon-evidence-2`, `applephenon-evidence-3`에 `undefined` 표시가 있습니다.
- 제공 텍스트에서는 정확한 논문명/시험 출처가 확인되지 않았습니다.

수정 방향:
- BMI 16주 그래프와 허리둘레 그래프를 원본 이미지 기준으로 별도 데이터 배열로 복원.
- `undefined` 제거.
- 출처 확보 전까지 `BTC BIONICS 자료 원본 기준`으로 표기.

### Collagen

원본:
- `COLLAGEN_moisture-elasticity.png`
- `COLLAGEN_wrinkle-roughness.png`
- 출처 후보: 아미코젠 원료소개서 내 저분자콜라겐펩타이드 AG 자료

확인된 문제:
- HTML은 보습/탄력, 주름/거칠기 2x2 구조로 복원했습니다.
- 원본의 y축 범위와 세부 유의표시가 일부 단순화되어 있습니다.
- 제공 PDF에는 `섭취 6주 후부터 8가지 평가지표 개선 확인` 등 설명은 있으나, 차트별 논문명/시험기관 출처는 텍스트 추출로 명확하지 않습니다.

수정 방향:
- 차트별 y축 범위와 원본 수치 라벨을 맞춤.
- 원료명은 대표 표기 `저분자콜라겐펩타이드 AG / 低分子コラーゲンペプチドAG`로 통일.
- `Long-pep collagen peptide AG`는 보조 표기로만 사용.

### DermaNia

원본:
- `DERMANIA_wrinkle.png`
- `DERMANIA_moisture.png`
- 원본 이미지 내 출처: `Kyung Hee University Skin Biotechnology Center`

확인된 문제:
- HTML은 막대 높이와 방향을 대체로 맞췄습니다.
- 단, 출처가 차트 아래에 작게라도 유지되어야 합니다.
- 한국어/일본어 페이지에서 출처가 일본어로 남는 문제가 과거 화면에서 보였으므로 언어별 캡션도 정리해야 합니다.

수정 방향:
- 한국어: `출처: 경희대학교 피부바이오테크놀로지센터 시험`
- 일본어: `出典: 慶熙大学 皮膚バイオテクノロジーセンター試験`
- 영어 그래프 내부는 원본 이미지 그대로일 수 있으나, 외부 캡션은 언어별로 표기.

### Agrimony

원본:
- `AGRIMONY_ALT-AST-HSI.png`

확인된 문제:
- 원본은 ALT, AST, HSI 세 차트가 한 장에 세로로 묶인 구조입니다.
- HTML은 세 차트로 분리하여 재구성했습니다. 이 방향은 가독성에는 좋지만, 원본과 “같다”고 보기에는 구조가 달라졌습니다.
- 제공 텍스트에서 정확한 논문/시험 출처는 확인되지 않았습니다.

수정 방향:
- 웹에서는 분리형 차트 유지 가능. 단, 캡션에 `원본 3패널 차트를 웹용으로 분리 재구성`이라고 내부 메모하고 공개 문구에서는 제거.
- 출처 확보 전까지는 `제공 PPTX 원본 기준`.

### Pinitol

원본:
- `PINITOL_GPx-MDA.png`
- `PINITOL_liverfat-ALT-AST.jpeg`

확인된 문제:
- GPx/MDA 차트는 HTML이 원본 구조를 대체로 따릅니다.
- Liver fat/ALT/AST 차트는 원본에 작은 패널 3개가 있고, p-value와 화살표가 각 패널에 붙어 있습니다. HTML은 기본 구조는 맞지만 원본의 p-value 배치와 패널 제목을 더 정확히 맞춰야 합니다.
- 제공 자료에서는 정확한 논문명/시험 출처가 확인되지 않았습니다.

수정 방향:
- p-value: liver fat `p=0.010`, ALT `p=0.030`, AST `p=0.018`, AST placebo vs pinitol `p=0.040`를 원본 위치에 가깝게 표기.
- 출처 확보 전까지는 `제공 PPTX 원본 기준`.

### AcetoBeta

원본:
- `ACETOBETA_acetaldehyde.png`
- `ACETOBETA_nausea.png`
- 아미코젠 원료제안서/PDF
- 출처 확인: `Journal of Agriculture & Life Science. 2016, 50, 223-31`로 보이나 원본 추출 텍스트에는 `Jouamal of Agricculture` 오탈자가 있음.

확인된 문제:
- HTML 차트 라벨은 원본처럼 `큐어자임 에이스`와 `위약군`을 쓰고 있습니다. 원료 페이지가 AcetoBeta라면 차트 캡션에서 `큐어자임 에이스(아세토베타 적용군)`처럼 설명이 필요합니다.
- `Acetaldehyde` 차트와 `메스꺼움` 차트는 원본의 콜아웃 구조를 대체로 따릅니다.
- PPTX에는 Aceto Bete 오기가 있었고, 정식 표기는 AcetoBeta/Aceto Beta로 통일해야 합니다.

수정 방향:
- 원료명: `AcetoBeta` 또는 `Aceto Beta` 중 하나로 통일.
- 출처 오탈자 수정: `Journal of Agriculture & Life Science. 2016, 50, 223-31`.
- ADH/ALDH 설명은 차트와 별도 단락으로 분리.

### Immulink MBG

원본:
- `IMMULINK_8markers.png`

확인된 문제:
- 원본에는 선천/후천 면역지표 8종과 오른쪽 설명 박스가 함께 있습니다.
- HTML은 8개 막대 그룹만 복원하고 오른쪽 설명 박스의 내용을 충분히 반영하지 않았습니다.
- 제공 텍스트에서는 정확한 논문/시험 출처가 확인되지 않았습니다.

수정 방향:
- 오른쪽 설명 박스 내용도 HTML 하단 요약으로 재구성.
- 출처 확보 전까지는 `제공 PPTX 원본 기준`.

## 4. 출처 확인 현황

| 항목 | 확인된 출처/근거 | 상태 |
|---|---|---|
| MED-01 | `Nutrients 2023, 15(2), 331`; MED-01 논문 PDF 존재 | 확인 가능 |
| MED-02 | MED-02 KOR PPTX, BIOLAB Japan PPTX | 논문명은 추출 자료에서 미확인 |
| NVP-2106 | `NVP-2106 인체적용시험 결과보고서(국내 대학 병원)`; 관련 `Nutrients. 2023 Jul 29;15(15):3381` | 확인 가능, 차트별 구분 필요 |
| NVP-1702 | `NVP-1702-1`, `NVP-1702-2` 인체적용시험 결과보고서(국내 대학 병원 4곳) | 확인 가능, 알코올성/비알코올성 분리 필요 |
| NVP-1703 | 성인: `NVP-1703 인체적용시험(성인) 결과보고서 / Nutrients. 2020 May 15;12(5):1427` | 성인 확인, 소아·청소년 출처 추가 확인 필요 |
| NVP-1704 | `NVP-1704 인체적용시험 결과보고서`, `Nutrients(2021, 13, 2660)` | 확인 가능 |
| Bifido | FDA/SCI 논문 수 등 포괄 근거 | 차트별 출처 미확인 |
| Testofen | 원본 이미지 내 `Rao A et al. The Aging Male. 2016 Jun;19(2):134-42` | 확인 가능 |
| ThinkGIN | BIOLAB PPTX 내 항목 존재 | 차트별 출처 미확인 |
| Neulearn | BIOLAB PPTX 내 항목 존재 | 차트별 출처 미확인 |
| Applephenon | BIOLAB PPTX/BTC 자료 이미지 | 차트별 출처 미확인 |
| Collagen | 아미코젠 원료소개서 | 차트별 시험기관/논문명 미확인 |
| DermaNia | 원본 이미지 내 `Kyung Hee University Skin Biotechnology Center` | 확인 가능 |
| Agrimony | BIOLAB PPTX 내 항목 존재 | 차트별 출처 미확인 |
| Pinitol | BIOLAB PPTX/아미코젠 자료 일부 | 차트별 출처 미확인 |
| AcetoBeta | 아미코젠 원료제안서; `Journal of Agriculture & Life Science. 2016, 50, 223-31` | 확인 가능, 오탈자 수정 필요 |
| Immulink MBG | BIOLAB PPTX 내 항목 존재 | 차트별 출처 미확인 |

## 5. 우선 수정 순서

1. 검수용 `charts-review.html`의 원본 이미지 경로를 라이브 URL에서 로컬 `renamed-originals/` 기준으로 고정.
2. `undefined` 노출 제거.
3. 원본과 방향이 달라 보이는 NVP-2106 ADAS/Memory 계열 축 방향 재검토.
4. NVP-1702를 알코올성/비알코올성 시험으로 분리.
5. NVP-1703 소아·청소년 daily/weekly 누락 보완.
6. NVP-1704 IL-6/BDNF 4패널 구조 복원 또는 원본 이미지 유지.
7. Applephenon BMI/허리둘레/체지방 지표 데이터 배열 분리.
8. 출처가 확인된 항목부터 캡션 표준화.
9. 출처 미확인 항목은 `제공 PPTX 원본 기준`으로만 표기하고 논문명은 임의 작성하지 않음.
10. 공개 페이지 반영 전, 한국어/일본어/영어 캡션을 별도 검수.

## 6. 산출물

- 원본 이미지 접촉시트: `review-captures/originals-probiotics.png`, `review-captures/originals-nature-1.png`, `review-captures/originals-nature-2.png`
- 추출 텍스트: `source-extracts/`
- 제품별 출처 후보 요약: `source-extracts/source_hits_by_product.md`
- 본 검수 리포트: `chart-visual-source-audit-report.md`
