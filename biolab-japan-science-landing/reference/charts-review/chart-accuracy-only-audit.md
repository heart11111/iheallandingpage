# BIOLAB HTML 차트 정확도 검수

검수 대상: `charts-review.html`  
검수 기준: `renamed-originals/` 원본 차트 이미지 + 렌더링 화면  
검수 관점: 디자인/문구가 아니라 그래프 정확도만 판단

## 결론

현재 HTML 재구성 차트는 전체 흐름 확인용으로는 쓸 수 있지만, 원본 그래프를 정확히 재현했다고 보기 어려운 항목이 있습니다. 특히 아래 항목은 공개 페이지 반영 전 반드시 수정해야 합니다.

1. NVP-2106: 원본과 HTML의 축 방향/개선 방향이 다르게 보입니다.
2. NVP-1703: 소아·청소년 원본의 daily 차트가 HTML에서 빠졌습니다.
3. NVP-1704: IL-6/BDNF 원본 4패널 중 2패널만 HTML로 재현됐습니다.
4. Applephenon: HTML 데이터가 원본별로 분리되지 않고, 일부는 `undefined`로 남아 있습니다.
5. AcetoBeta: 도식은 차트가 아니라 이미지 유지가 맞지만, 일본어판에는 한국어 도식 그대로 쓰면 안 됩니다.
6. 다수 차트가 `근사값` 기반입니다. 원본 수치가 보이는 그래프는 근사값이 아니라 원본 좌표/수치를 다시 맞춰야 합니다.

## 등급 기준

- 치명: 그래프 해석 방향, 패널 수, 주요 지표가 원본과 다름.
- 중요: 수치/축/유의표시/범례 일부가 원본과 달라 신뢰도에 영향.
- 보통: 구조는 맞지만 값이 근사치이거나 캡션/레이블 보정 필요.
- 유지 가능: 원본 이미지 유지가 합리적이거나 HTML 재현이 대체로 맞음.

## 제품별 정확도 검수

### MED-01

대상 원본:
- `MED01_dysuria-discharge-burning.png`
- `med01-evidence-1.webp`
- `med01-evidence-2.png`

판정: 중요

문제:
- 첫 패널 제목이 HTML에서 `배뇨통(생리통)`으로 들어가 있습니다. 원본은 배뇨통 계열로 보이며 생리통 표기는 그래프 의미를 바꿉니다.
- 3개 증상 차트의 막대 방향과 구조는 대체로 맞지만, HTML 값은 `근사값`입니다.
- 원본에는 각 패널별 `#`, `##` 유의표시가 있고, HTML은 일부 반영되어 있으나 원본 위치와 크기가 완전히 같지는 않습니다.
- Nugent score 차트는 방향성은 맞아 보이나, 원본 수치와 에러바를 정확히 읽어 넣은 것이 아니라 재구성값입니다.

수정 방향:
- `배뇨통(생리통)`을 `배뇨통`으로 수정.
- 원본 막대 높이와 에러바를 다시 읽어 3개 증상별 값을 고정.
- Nugent score는 점수가 낮을수록 개선이라는 주석을 붙이되, 그래프 수치는 원본 기준으로 재확인.

### MED-02

대상 원본:
- `MED02_fatmass-fatpct-weight.png`
- `med02-evidence-1.webp`
- `med02-evidence-2.png`

판정: 보통~중요

문제:
- 체지방량, 체지방률, 체중 3패널 구성은 원본과 맞습니다.
- 다만 HTML 값이 `-1200`, `-0.85`, `-2.1` 등 근사값으로 입력되어 있어 원본 그래프의 실제 막대 높이와 완전 일치한다고 보기 어렵습니다.
- BMI 차트는 원본 파일과 HTML 재현의 출처 관계를 더 명확히 확인해야 합니다.

수정 방향:
- 3패널 각각 원본의 y축 범위와 막대 높이를 다시 산출.
- MED-02는 사용자가 지정한 대로 BIOLAB Japan PPTX 기준을 우선.

### NVP-2106

대상 원본:
- `NVP2106_total-score.jpeg`
- `NVP2106_memory-delayedrecall.jpeg`
- `NVP2106_attention.jpeg`

판정: 치명

문제:
- 원본 Total Score 그래프는 y축이 `-6`이 위, `0`이 아래에 배치되어 있고, 개선 방향 화살표가 위로 표시됩니다.
- HTML은 일반 좌표계처럼 `0`이 위, `-6`이 아래에 있어 NVP-2106 선이 아래로 내려갑니다.
- 같은 수치라도 시각적으로는 원본과 반대 방향으로 읽힙니다. 이건 단순 디자인 차이가 아니라 해석 문제입니다.
- Memory Score, Q4 delayed recall도 같은 문제가 있습니다. 원본은 개선 방향이 위로 읽히는데 HTML은 아래 방향으로 보입니다.
- Attention 3패널은 구조는 맞지만 원본의 p-value 위치, 그룹 브래킷, 0W/12W 그룹 묶음이 정확히 맞지 않습니다.

수정 방향:
- NVP-2106 계열은 원본처럼 y축을 뒤집어 `-값`이 위로 갈 수 있게 해야 합니다.
- `Improvement / Worsening` 방향 화살표를 HTML에도 넣어야 합니다.
- Attention 차트는 원본의 3패널, placebo/NVP-2106, 0W/12W 묶음을 그대로 재현.

### NVP-1702

대상 원본:
- `NVP1702_gtp-alt-ast.jpeg`

판정: 중요

문제:
- 원본은 γ-GTP, ALT, AST 3패널입니다.
- HTML에는 `nvp1702-evidence-1`에서 γ-GTP/ALT 2패널, `nvp1702-evidence-2`에서 γ-GTP/ALT/AST 3패널이 반복됩니다.
- 원본이 한 장이라면 2패널 버전은 중복/불완전 재구성입니다.
- 12주 p-value는 원본과 비슷하게 들어갔지만, 각 시점의 실제 점과 에러바는 근사값입니다.
- 알코올성/비알코올성 시험이 구분되는 항목이므로 설명/캡션에서 어떤 시험 그래프인지 분리해야 합니다.

수정 방향:
- 2패널 버전을 제거하거나 보조 차트로 명확히 분리.
- 공개 페이지에는 원본과 같은 3패널 γ-GTP/ALT/AST를 우선 사용.
- 시험 조건을 캡션에 분명히 표기.

### NVP-1703

대상 원본:
- `NVP1703_child-TNSS.jpeg`
- `NVP1703_adult-TNSS.jpeg`

판정: 치명

문제:
- 소아·청소년 원본은 weekly TNSS와 daily TNSS 2패널입니다.
- HTML은 소아·청소년에서 weekly TNSS만 재현하고 daily TNSS가 빠져 있습니다.
- 성인 원본은 TNSS, 수양성 콧물, 코막힘 3패널입니다. HTML도 3패널로 만들었지만 값과 p-value는 근사 재현입니다.
- 소아 daily는 데이터 포인트가 많아 원본 이미지 유지 또는 별도 라인차트 복원이 필요합니다.

수정 방향:
- 소아·청소년 HTML을 weekly/daily 2패널로 바꿔야 합니다.
- daily 데이터는 점이 많으므로 정확한 수치 추출이 안 되면 원본 이미지 유지가 더 안전합니다.
- 성인 3패널은 p-value와 주차별 선 위치를 원본에 더 맞춰야 합니다.

### NVP-1704

대상 원본:
- `NVP1704_BDI-BAI.jpeg`
- `NVP1704_PSQI-ISI.jpeg`
- `NVP1704_IL6-BDNF.jpeg`

판정: 치명

문제:
- BDI/BAI/BDI+BAI 3패널은 원본 구성과 대체로 맞습니다. 다만 수치와 p-value 위치는 근사입니다.
- PSQI/ISI 3패널도 구성은 맞지만 근사값입니다.
- 가장 큰 문제는 `IL-6/BDNF`입니다. 원본은 4패널입니다.
  - IL-6 막대그래프
  - log BDNF 막대그래프
  - IL-6 개별 paired plot
  - BDNF 개별 paired plot
- HTML은 앞의 2개 막대그래프만 재현하고 뒤의 개별 paired plot 2개를 누락했습니다.

수정 방향:
- IL-6/BDNF는 4패널로 복원해야 합니다.
- paired plot까지 HTML로 만들기 어렵다면 해당 원본 이미지는 이미지 유지가 더 정확합니다.

### Bifido

대상 원본:
- `bifido-evidence-*.webp/png` 계열

판정: 보통~중요

문제:
- 제공된 접촉시트 기준으로 Bifido 원본 전체를 현재 한눈에 확인하지 못해 정밀 수치 검수는 보류입니다.
- HTML에는 여러 지표가 근사값으로 들어간 것으로 보입니다.

수정 방향:
- 원본 이미지별로 1:1 캡처를 다시 열어 패널 누락 여부를 우선 확인.
- 수치가 빽빽한 경우 원본 이미지 유지가 더 안전합니다.

### Testofen

대상 원본:
- `TESTOFEN_AMS-total.png`
- `TESTOFEN_physical-sexual.png`
- `TESTOFEN_mental.png`

판정: 중요

문제:
- AMS 총점, 신체 기능, 성기능, 정신/심리 모두 HTML 구조는 원본과 비슷합니다.
- 하지만 원본에 있는 에러바 길이, 점 위치, 축 범위와 HTML 값은 근사치입니다.
- 특히 정신/심리 차트는 원본의 큰 이미지 비율과 HTML 배치가 달라 그래프가 너무 크게/다르게 읽힐 수 있습니다.
- 출처 `Rao A et al. The Aging Male. 2016 Jun;19(2):134-42`는 원본에 있으므로 캡션에 정확히 넣어야 합니다.

수정 방향:
- Testofen은 구조는 유지 가능하되 점 좌표와 에러바를 원본 기준으로 재조정.
- 출처 캡션 전체 표기.

### ThinkGIN

대상 원본:
- `THINKGIN_AChE.png`
- `THINKGIN_PSQI-K.png`
- `THINKGIN_SVLT.png`

판정: 중요

문제:
- AChE 원본은 중간 절단축 표시가 있습니다. HTML에서 이 절단축이 정확히 재현되지 않으면 막대 크기 해석이 달라집니다.
- PSQI-K는 원본의 p<0.05 브래킷과 막대 방향이 중요합니다. HTML은 근사값입니다.
- SVLT는 총점/2차 시행의 그룹 막대 비교이며 별표 위치가 중요합니다.

수정 방향:
- AChE는 절단축을 반드시 재현하거나 원본 이미지 유지.
- SVLT는 4막대 구조와 별표 위치를 원본과 맞춤.

### Neulearn

대상 원본:
- `NEULEARN_memory-executive.jpeg`
- `NEULEARN_SMCQ.jpeg`

판정: 중요

문제:
- memory/executive 원본은 좌우 2패널이며 p=0.001, p=0.02, p=0.08 등 유의표시가 핵심입니다.
- SMCQ 원본은 placebo, 600mg, 1,200mg 3막대와 p=0.007, p=0.002 브래킷이 중요합니다.
- HTML은 근사값이므로 p-value 브래킷 위치와 축 범위를 정확히 맞춰야 합니다.

수정 방향:
- 두 이미지 모두 막대 수와 p-value 브래킷 위치를 원본 기준으로 재현.

### Applephenon

대상 원본:
- `APPLEPHENON_16wk-BMI.jpeg`
- `APPLEPHENON_waist.jpeg`

판정: 치명

문제:
- 원본은 최소 2개 다른 그래프입니다.
  - 16주 BMI 변화: 0W, 4W, 8W, 12W, 16W
  - waist/체지방 관련 지속 관찰: 0W, 4W, 8W, 12W, Later observation
- HTML 첫 차트는 waist 계열을 재구성한 것으로 보이지만, 나머지 Applephenon 항목은 `undefined` 또는 값 연결 오류가 있습니다.
- `applephenon-evidence-2`, `applephenon-evidence-3`는 각각 별도 그래프여야 하는데, 현재는 데이터 분리가 불완전합니다.

수정 방향:
- Applephenon은 반드시 그래프별 데이터 배열을 분리.
- 16주 BMI 그래프와 Later observation 그래프를 혼용하면 안 됩니다.
- `undefined` 제거.

### Collagen

대상 원본:
- `COLLAGEN_moisture-elasticity.png`
- `COLLAGEN_wrinkle-roughness.png`

판정: 중요

문제:
- 원본은 2개 이미지 안에 여러 패널이 있습니다.
- 피부 보습, 탄력, 주름, 거칠기 등 지표별 y축과 유의표시가 다릅니다.
- HTML에서 단순화할 경우 지표별 유의표시와 수치 변화가 빠질 가능성이 큽니다.

수정 방향:
- 지표별 패널을 모두 살릴지, 핵심 지표만 원본 이미지 유지할지 결정해야 합니다.
- HTML 재구성 시 유의표시 `*`, `**`, `***`와 시간축을 반드시 보존.

### DermaNia

대상 원본:
- `DERMANIA_wrinkle.png`
- `DERMANIA_moisture.png`

판정: 보통

문제:
- 원본은 단순한 2막대 그래프라 HTML 재구성이 비교적 쉽습니다.
- 다만 에러바 길이와 y축 범위가 정확해야 합니다.

수정 방향:
- DermaNia는 HTML 재구성 유지 가능.
- 원본의 `*p<0.05, DermaNiA versus placebo` 문구를 캡션에 정확히 넣기.

### Agrimony

대상 원본:
- `AGRIMONY_ALT-AST-HSI.png`

판정: 중요

문제:
- 원본은 ALT, AST, HSI 3개 패널이 한 이미지 안에 작게 들어 있습니다.
- HTML은 각각 `agrimony-alt-evidence.png`, `agrimony-ast-evidence.png`, `agrimony-hsi-evidence.png`로 분리된 것으로 보입니다.
- 분리 자체는 가독성 면에서 좋지만, 원본의 같은 축/같은 스타일/동일 출처 맥락은 유지되어야 합니다.

수정 방향:
- ALT/AST/HSI를 3카드로 분리하더라도 원본의 baseline/8 weeks, Agrimony/Placebo 구조를 그대로 유지.
- p-value 위치와 비교선 보존.

### Pinitol

대상 원본:
- `PINITOL_GPx-MDA.png`
- `PINITOL_liverfat-ALT-AST.jpeg`

판정: 중요

문제:
- GPx/MDA는 2패널 구성은 맞지만 HTML y축과 막대값은 근사입니다.
- Liver fat/ALT/AST 원본은 3패널입니다.
- HTML은 3패널로 재구성했지만 원본의 색상, 화살표, p-value, 0주/12주 또는 placebo/pinitol 비교 구조를 더 정확히 맞춰야 합니다.

수정 방향:
- GPx/MDA는 원본 y축 범위 그대로 유지.
- Liver fat/ALT/AST는 원본의 세 패널 비교 구조와 p-value를 그대로 반영.

### AcetoBeta

대상 원본:
- `ACETOBETA_acetaldehyde.png`
- `ACETOBETA_nausea.png`

판정: 보통~중요

문제:
- Acetaldehyde와 메스꺼움 차트는 단순 막대라 HTML 재구성은 가능해 보입니다.
- 다만 원본의 callout 위치, 막대 높이, 에러바가 정확해야 합니다.
- `큐어자임 에이스`와 `AcetoBeta` 관계가 설명되지 않으면 사용자에게 다른 소재처럼 보일 수 있습니다.
- 분해경로 도식은 차트가 아니므로 이미지 유지가 맞습니다.

수정 방향:
- 막대값/에러바를 원본 기준으로 재확인.
- 일본어 페이지는 도식 이미지 자체를 일본어화하거나, 도식은 원본 유지 + 별도 일본어 설명으로 분리.

### Immulink MBG

대상 원본:
- `IMMULINK_8markers.png`

판정: 치명 가능성 있음

문제:
- 원본은 8개 면역 지표 막대그래프와 오른쪽 설명 박스가 함께 있는 구조입니다.
- HTML에서 8개 막대만 재구성하고 오른쪽 설명 박스를 빼면 그래프 해석 정보가 빠집니다.
- x축 라벨이 기울어져 있고 지표명이 많아, HTML 재구성 시 라벨 누락/축약 위험이 큽니다.

수정 방향:
- 8개 지표 라벨, intervention/placebo, 에러바, 오른쪽 설명 박스를 모두 포함.
- 복잡하면 원본 이미지 유지가 더 안전합니다.

## 반드시 먼저 고쳐야 할 순서

1. NVP-2106 축 방향 및 개선 방향 복원.
2. NVP-1703 소아 daily TNSS 누락 복원.
3. NVP-1704 IL-6/BDNF 4패널 복원.
4. Applephenon `undefined` 제거 및 그래프별 데이터 분리.
5. MED-01 `배뇨통(생리통)` 오기 수정.
6. NVP-1702 2패널/3패널 중복 정리.
7. ThinkGIN AChE 절단축 재현.
8. Testofen/Neulearn/Pinitol/AcetoBeta 세부 p-value, 에러바, 축 범위 보정.
9. Immulink 8개 지표와 설명 박스 복원 또는 원본 이미지 유지.

## 판단

정확도가 중요한 공개 근거 차트라면, 현재 HTML 차트 중 `근사값`으로 만든 것은 그대로 쓰면 안 됩니다. 수치가 정확히 보이는 원본은 HTML 데이터로 다시 입력하고, 수치 판독이 어려운 그래프는 원본 이미지를 유지하는 편이 낫습니다.
