# BIOLAB 차트 원본 대비 HTML 재현 정확도 검수

검수일: 2026-07-07  
검수 대상: `charts-review.html`  
검수 방식: 원본 그래프 이미지와 HTML 렌더링 결과를 같은 화면에서 캡처한 뒤, 실제 시각 형태를 기준으로 비교했다. DOM 데이터만 보지 않고, 축 방향, 패널 수, 선/막대 위치, 유의표시, 오차막대, 범례 색상, 라벨 잘림 여부를 함께 확인했다.

재캡처 경로:

`C:\Users\우지윤\AppData\Roaming\Claude\local-agent-mode-sessions\532c80a8-6b00-4474-adfb-33697e0d96fb\c1870c32-7ec3-4c7d-8c05-a2cf526ad246\local_f21da482-7ea3-48d8-99d0-433723d1b122\outputs\biolab-charts-project\review-captures\ba-scroll`

## 결론

현재 HTML 차트는 일부 항목은 원본과 상당히 잘 맞지만, 다수의 다중 패널 그래프에서 오른쪽 그래프가 잘리거나, 원본 패널 수/순서/표현 방식과 다른 문제가 남아 있다.

특히 `NVP-2106`, `NVP-1702`, `NVP-1704 IL-6/BDNF`, `ThinkGIN AChE`, `Immulink`는 수정 우선순위가 높다.

## 최우선 수정 필요

### 1. 공통 레이아웃: HTML 그래프 오른쪽 잘림

여러 차트에서 오른쪽 끝점, 라벨, 일부 패널이 화면 밖으로 밀린다.

해당 항목:

- NVP-2106 전체
- NVP-1702 일부
- NVP-1703 일부
- NVP-1704 BDI/BAI, PSQI/ISI, IL-6/BDNF
- Testofen 전체
- Collagen 전체
- DermaNia 일부 하단 라벨

수정 방향:

- AFTER 영역 내부 SVG 폭을 컨테이너 기준으로 재계산한다.
- 끝 라벨을 SVG 바깥으로 빼지 말고 chart 내부 여백에 넣는다.
- 다중 패널은 `grid-template-columns`를 줄이거나, 제품별로 2열/3열을 명시해 오버플로를 막는다.
- 검수용 페이지는 폭 슬라이더 기본값을 100%로 두되, 각 chart SVG가 `max-width:100%` 안에서 줄어들게 한다.

### 2. NVP-1702: 패널 수와 순서 불일치

`nvp1702-evidence-1.webp`

- 원본: γ-GTP / ALT / AST 3패널
- HTML: γ-GTP / ALT 2패널
- 문제: AST가 빠져 원본 그래프와 일치하지 않는다.

`nvp1702-evidence-2.webp`

- 원본: ALT / AST / γGTP 순서
- HTML: γGTP / ALT / AST 순서
- 문제: 패널 순서가 달라 원본 이미지와 직접 비교가 어렵다.

수정 방향:

- evidence-1은 AST까지 포함해 3패널로 복원한다.
- evidence-2는 원본 순서대로 `ALT → AST → γGTP`로 재배열한다.

### 3. NVP-1704 IL-6 / BDNF: 개별 변화 그래프 표현 불일치

`nvp1704-evidence-3.webp`

- 원본: IL-6 막대, BDNF 막대, IL-6 개별 paired-line, BDNF 개별 paired-line의 4개 구성
- HTML: 4개 패널은 있으나, paired-line이 원본의 다수 개인별 선이 아니라 단순 2개 그룹 선으로 표현되어 있다.
- 문제: 원본의 핵심 형태인 개인별 변화선 분포가 재현되지 않는다.

수정 방향:

- paired-line 패널은 여러 개의 얇은 회색/검은 선으로 개인별 변화를 재현한다.
- 정확한 개별 값이 없으면 `수치확인` 상태를 유지하고, 단순 2선 차트처럼 확정 그래프로 보이지 않게 한다.

### 4. ThinkGIN AChE: 축 단절 표현 누락

`thinkgin-evidence-1.webp`

- 원본: ThinkGIN 막대에 물결형 축 단절 표시가 있다.
- HTML: 일반 막대로 표현되어 원본의 형태와 다르다.

수정 방향:

- 막대 중간에 축 단절 표시를 넣거나, 원본처럼 `broken bar` 형태를 별도 SVG로 만든다.
- 축 단절을 구현하지 않을 경우 `수치확인`으로 유지한다.

### 5. Immulink: 마지막 NK 독성 항목의 그룹/색상 의심

`immulink-evidence-1.webp`

- 원본의 마지막 `NK cell cytotoxicity` 항목은 큰 변화가 intervention group 쪽으로 보인다.
- HTML은 큰 막대가 회색 위약 쪽으로 표시되어 있어, 그룹 색상이 뒤바뀌었을 가능성이 있다.

수정 방향:

- 원본 범례 기준으로 intervention/위약 색상과 각 지표 값을 재확인한다.
- 특히 마지막 NK 독성 지표는 원본 막대 방향과 색상을 다시 매핑한다.

## 중요 수정 필요

### 6. NVP-2106: 선 방향은 맞지만 오른쪽 끝점/라벨 잘림

`nvp2106-evidence-1.webp`, `nvp2106-evidence-2.webp`

- 원본의 0/6/12주 상승 형태는 HTML에서 반영되어 있다.
- 다만 HTML 오른쪽 끝점, p-value, Improvement/Worsening 화살표가 오른쪽에서 잘려 보인다.

수정 방향:

- 차트 오른쪽 여백을 늘리고, p-value와 endpoint label을 chart 내부로 이동한다.

### 7. NVP-1703: daily 그래프 단순화

`nvp1703-evidence-1.webp`

- 원본: weekly + daily 두 패널
- HTML: 두 패널 구성은 맞음
- 문제: daily 그래프는 원본처럼 촘촘한 일자별 변동이 아니라 7개 지점으로 단순화되어 있다.

수정 방향:

- 원본 daily 축의 실제 일자 포인트 수를 최대한 맞춘다.
- 정확 수치가 없으면 `근사값`임을 유지한다.

### 8. Testofen: 전체적으로 오른쪽 잘림 및 오차막대 약화

`testofen-evidence-1.webp`, `testofen-evidence-2.webp`, `testofen-evidence-3.webp`

- 원본의 0/6/12주 추세는 대체로 맞는다.
- HTML에서 오른쪽 라벨과 끝점이 잘리고, 오차막대 판독성이 낮다.

수정 방향:

- 12주 끝점과 라벨이 보이도록 SVG 내부 여백 조정.
- 오차막대를 원본처럼 더 명확하게 표시.

### 9. Collagen: 값은 반영됐으나 시점/끝 라벨 잘림

`collagen-evidence-1-clean.png`, `collagen-evidence-2-clean.png`

- 원본의 3시점 선 그래프 구조는 반영되어 있다.
- HTML에서 x축 시점명과 오른쪽 끝 라벨 일부가 잘린다.

수정 방향:

- 2패널 그래프 폭과 오른쪽 라벨 배치를 다시 잡는다.
- 원본처럼 0주/6주/12주 시점이 명확히 보이도록 한다.

### 10. Pinitol: 범례 의미 혼재

`pinitol-evidence-2.webp`

- 원본은 간지방 0주/12주 비교, ALT/AST 0주/12주 비교, AST 위약/Pinitol 비교가 섞여 있다.
- HTML 범례가 `0주/위약`, `12주/Pinitol`처럼 표현되어 두 비교축이 한 범례에 섞여 보인다.

수정 방향:

- 첫 두 패널은 `0주 / 12주` 범례로 표시.
- 세 번째 AST 패널은 `위약 / Pinitol` 범례로 별도 표시.

## 비교적 양호

아래 항목은 원본과 HTML의 방향, 패널 구성, 주요 수치 배치가 대체로 맞는다. 다만 공개용으로 쓰려면 잘림과 작은 라벨은 정리하는 것이 좋다.

- MED-02 3지표: 체지방량, 체지방률, 체중
- MED-02 BMI
- Applephenon 허리둘레
- Applephenon 16주 BMI
- Agrimony ALT / AST / HSI
- DermaNia 주름 감소 / 피부 수분 증가
- AcetoBeta 아세트알데하이드 / 메스꺼움
- Bifido 가스 배출 빈도 / 복부 팽만

## 보류 또는 이미지 유지 항목

아래는 데이터 차트가 아니라 도식/사진으로 분류되어 HTML 그래프 재현 대상은 아니다. 다만 언어 버전별 이미지 교체나 번역 이미지 생성은 별도 작업이다.

- NVP-1702 간손상 메커니즘 도식
- NVP-1703 비염 메커니즘 도식
- Bifido FDA/시험자료 이미지
- Neulearn f-MRI 이미지
- Applephenon CT 이미지
- DermaNia 메커니즘 도식
- Agrimony 조직 사진
- AcetoBeta 알코올 분해경로 도식

## 다음 수정 순서 제안

1. 공통 레이아웃 오버플로를 먼저 수정한다. 현재 오른쪽 그래프가 잘리는 항목이 많아, 수치 검수 자체를 방해한다.
2. NVP-1702 패널 수/순서를 원본과 맞춘다.
3. NVP-1704 IL-6/BDNF paired-line을 원본 형태로 다시 만든다.
4. ThinkGIN AChE broken-axis 표현을 추가한다.
5. Immulink 마지막 NK 독성 지표의 색상/그룹 매핑을 원본 기준으로 다시 확인한다.
6. NVP-2106, Testofen, Collagen의 끝 라벨과 오차막대를 정리한다.
7. 나머지 `수치확인` 항목은 실제 원본 수치를 추출하거나, 근사 재현임을 유지한다.

