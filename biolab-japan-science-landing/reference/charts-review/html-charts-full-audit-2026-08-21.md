# HTML 차트 전수 검수 (2026-08-21)

대상: `charts-review.html`  
대조: `src/lib/evidenceCharts.ts`(라이브 포트), 기존 7월 검수 문서, 논문/PPT Exact 수치

## 한 줄 결론

HTML 재현본은 **구조·패널 수는 대체로 정리된 상태**입니다. 다만 **38개 중 약 31개가 여전히 `근사값`**이고, **라이브 사이트와 HTML이 어긋난 차트**가 있으며, **Applephenon 데이터 복제 버그**처럼 바로 고칠 항목이 남아 있습니다. 공개 근거 차트로 확정하기엔 아직 이릅니다.

---

## 1. 범위

| 구분 | 개수 |
| --- | ---: |
| 제품 섹션 (INV) | 17 |
| HTML/SVG 재현 (`BUILD`) | 38 |
| 이미지 유지 (도식·사진) | 9 |
| 캡션에 `근사값` 표기 | 31 |
| Exact 수치(또는 Exact에 가깝게) 반영 | MED-02 전체, Collagen 일부, Nugent는 반올림 |

라이브 노출(`CorporateParts.liveChartEvidence`)은 **12개만** allowlist:

- MED-01 ×2, MED-02 ×2, Testofen ×3, Applephenon ×2, DermaNia ×2, NVP-2106 ×2 (`evidence-2` 제외)

나머지 HTML 차트는 검수용이지 제품 상세에 SVG로 안 나갑니다.

---

## 2. 7월 치명 이슈 → 현재 HTML 상태

| 이슈 | 7월 판정 | 2026-08-21 HTML | 비고 |
| --- | --- | --- | --- |
| NVP-2106 축 뒤집힘 | 치명 | **해소** (`reverseY` + Improvement 화살표) | 선 좌표는 여전히 Approx. |
| NVP-1703 소아 daily 누락 | 치명 | **해소** (weekly+daily 2패널, daily ~28점) | 수치는 Approx. |
| NVP-1704 IL-6/BDNF 4패널 누락 | 치명 | **해소** (막대2 + paired 2) | paired가 **개인 다수 선이 아니라 그룹 2선** → 형태 불일치 잔존 |
| Applephenon `undefined` | 치명 | **해소** (1/2/3 각각 BUILD 존재) | **1과 2가 동일 데이터** 버그 잔존 |
| MED-01 `배뇨통(생리통)` 오기 | 중요 | **해소** (`배뇨통`) | 증상값은 여전히 Approx. |
| NVP-1702 2패널/3패널 | 중요 | **해소** (evidence-1·2 모두 3패널) | HTML 12주 끝점은 반올림, 라이브 TS가 Exact에 더 가까움 |
| ThinkGIN AChE 절단축 | 중요 | **HTML에는 없음** | 라이브 TS만 `brk` 있음 → HTML이 뒤처짐 |
| Immulink NK 독성 색상 | 의심 | **미확인/미수정** | 원본 재대조 필요 |

---

## 3. HTML ↔ 라이브(`evidenceCharts.ts`) 불일치

동일해야 한다는 주석(`AUTO-PORTED … keep in sync`)과 달리 **동기화되지 않음**.

| 키 | 차이 |
| --- | --- |
| `applephenon-evidence-2.webp` | HTML에만 있음. 라이브 BUILD·allowlist 모두 없음 |
| `nvp1703-evidence-1.webp` | HTML=SVG 재현 / 라이브=`imgOverlay` (원본+번역) |
| `nvp2106-evidence-1.webp` | 라이브만 `redBox` 콜아웃 |
| `nvp2106-evidence-2.webp` | 점 좌표 다름 (HTML `[0,-2.1,-2.8]` vs 라이브 `[-0.2,-2,-2.9]` 등) |
| `nvp1702-evidence-1.webp` | 라이브가 12주 Exact(`-2.85`, `24.56`, `-3.77`…)에 더 가까움. HTML은 `-3`, `24.5`, `-4` 반올림 |
| `nvp1704-evidence-1/2` | 라이브에 에러바 추가, HTML은 에러바 없음 |
| `thinkgin-evidence-1.webp` | 라이브만 절단축(`brk`) |

---

## 4. 제품별 판정

등급: **OK** 구조·수치 신뢰 / **주의** 구조 OK·수치 Approx 또는 소수정합 / **문제** 버그·형태 불일치 / **이미지유지** 차트 아님

### Functional Probiotics

| 제품 | 차트 | 판정 | 핵심 |
| --- | --- | --- | --- |
| MED-01 | 증상 3패널 | 주의 | 구조 OK. 값은 Figure Approx. `#`/`##` 유의표시 있음 |
| MED-01 | Nugent | 주의 | Exact `-0.36±1.72` / `+0.19±1.85`인데 HTML은 `-0.4` / `0.2`, err `1.65`/`1.85` (반올림) |
| MED-02 | 체지방량·률·체중 | **OK** | PPTX Exact `-1166.82/-382.08`, `-0.85/-0.11`, `-2.06/-1.22` 일치 |
| MED-02 | BMI | **OK** | Exact `-0.70(±0.73)` / `-0.44(±0.60)` 일치 |
| NVP-2106 | Total / Memory·Q4 / Attention | 주의 | 축 방향 수정됨. 점 위치·개선율 라벨은 Approx. 라이브와 Memory 좌표 불일치 |
| NVP-1702 | 알코올성 3패널 | 주의 | 패널 수 OK. HTML 끝점 반올림 → Exact로 맞추면 라이브 쪽이 더 맞음 |
| NVP-1702 | 비알코올성 3패널 | 주의 | 순서 ALT→AST→γGTP OK. 점·에러바 Approx. |
| NVP-1703 | 소아 weekly+daily | 주의 | 패널 복원 OK. daily 수치는 Approx. Exact Table(TNSS AM/PM 등)과 직접 연결되지 않음 |
| NVP-1703 | 성인 3패널 | 주의 | 구조 OK, Approx. |
| NVP-1704 | BDI/BAI, PSQI/ISI | 주의 | 3패널 구성 OK, Approx. |
| NVP-1704 | IL-6/BDNF | **문제** | 4패널은 있으나 paired가 원본(개인 다수 선)과 다름 |
| Bifido | gas / bloating | 주의 | Approx. 원본 전체 대비 일부만 재현 |

### Nature ingredients

| 제품 | 차트 | 판정 | 핵심 |
| --- | --- | --- | --- |
| Testofen | AMS 3종 | 주의 | 구조 OK, 전부 Approx. |
| ThinkGIN | AChE | **문제** | HTML에 절단축 없음 (라이브만 있음) |
| ThinkGIN | SVLT / PSQI-K | 주의 | 구조 OK, Approx./상대값 |
| Neulearn | memory·executive / SMCQ | 주의 | 구조 OK, Approx. (f-MRI는 이미지 유지) |
| Applephenon | evidence-1 | **문제** | INV에 미연결인데 BUILD 존재. evidence-2와 **동일 좌표** |
| Applephenon | evidence-2 (허리) | **문제** | evidence-1과 데이터 복제. 라벨만 `허리둘레`로 다름 |
| Applephenon | evidence-3 BMI | 주의 | 0~16W 구조 OK, Approx. |
| Collagen | 보습·탄력 / 주름·거칠기 | **OK~주의** | 표시 수치(46.229 등) Exact 계열. `근사값` 캡션 없음 |
| DermaNia | 주름 / 수분 | 주의 | 단순 2막대, Approx. |
| Agrimony | ALT/AST/HSI | 주의 | 3분리 OK, Approx. |
| Pinitol | GPx·MDA / 간지방 | 주의 | 구조 OK. 간지방 캡션 `17.9→15.2` vs 막대 `18→15.2` 미세 불일치 |
| AcetoBeta | acetaldehyde / nausea | 주의 | Approx. 도식은 이미지 유지가 맞음 |
| Immulink | 8지표 | **문제(의심)** | 오른쪽 설명 박스 없음. NK 독성 색/군 매핑 재확인 필요 |

### 이미지 유지 (의도적)

간 메커니즘(NVP-1702), 비염 메커니즘(1703), Bifido FDA/고령자, Neulearn f-MRI, Applephenon CT, DermaNia 메커니즘, Agrimony 조직, AcetoBeta 분해경로 → **차트화하지 않은 판단은 타당**.

---

## 5. 반드시 손볼 우선순위

1. **Applephenon evidence-1 / evidence-2 데이터 복제** — 허리 vs 체지방 지표가 같은 배열. 원본별로 분리하거나 하나만 남기기.
2. **ThinkGIN AChE 절단축** — HTML에도 `brk` 반영하거나, HTML을 라이브와 동기화.
3. **NVP-1704 paired plot** — 개인 다수 선 재현 불가하면 이미지 유지 + `근사값` 고지 강화.
4. **Immulink** — NK cytotoxicity 군/색 매핑 + 설명 박스. 애매하면 이미지 유지.
5. **MED-01 Nugent** — Exact `-0.36±1.72` / `+0.19±1.85`로 교체.
6. **NVP-1702 HTML 12주 끝점** — 라이브/Exact(`-2.85`, `24.56`…)에 맞춤.
7. **HTML ↔ `evidenceCharts.ts` 동기화** — 주석과 실제가 다름. 포팅 규칙 하나로 통일.
8. **근사값 차트 공개 정책** — Exact가 아닌 항목은 SVG 확정 노출 금지(현재 allowlist가 그 역할을 일부 수행).

---

## 6. 검수 방법 메모

- 원본 이미지는 HTML이 `https://biolabjp.com/images/ingredients/`에서 로드. 로컬 `renamed-originals/`는 Applephenon 2장만 참조하는데, 저장소에는 해당 폴더가 없어 BEFORE 칸이 깨질 수 있음.
- 논문 PDF/PPTX 원문은 저장소에 없음 → Exact 대조는 `paper-chart-values-audit-20260707.md` 기준.
- Drive에서 별도 HTML 차트 파일은 검색되지 않음. 본 검수 대상은 저장소의 `charts-review.html` 한 벌.

---

---

## 8. 논문·원료자료 교차 확인 (2026-08-21)

대화에 직접 첨부된 PDF는 없었습니다. 대신 계정 Drive의 원료/카탈로그 PDF와 공개 SCI 논문(EuropePMC)으로 HTML 수치를 교차했습니다.

### 자료 출처

| 자료 | 출처 |
| --- | --- |
| MED-01 | Nutrients 2023, 15, 331 (`PMC9863863`) |
| NVP-1704 | Nutrients 2021, 13, 2660 (`PMC8398773`) + Drive `NVP-1704(RELAX)_KR.pdf` |
| NVP-1703 성인 | Nutrients 2020, 12, 1427 (`PMC7284371`) |
| NVP-1703 소아 | J Korean Med Sci 2024;39:e266 (`PMC11496560`) |
| NVP-2106 | Drive `NVP-2106(BRAIN)_KR.pdf` (p값·개선율 Exact, 점좌표는 그래프) |
| ThinkGIN | Nutrients 2024, 16, 1952 (`PMC11206504`) |
| Immulink | Foods 2023, 12, 659 (`PMC9914031`) |
| Collagen | Drive 아미코젠 콜라겐 AG 제안서 |
| AcetoBeta / Pinitol | Drive 아세토베타·피니톨 소개 PDF |

### Exact 대조 결과

| 차트 | 논문/자료 Exact | HTML | 판정 |
| --- | --- | --- | --- |
| MED-01 Nugent | −0.36±1.72 / +0.19±1.85, p=0.041 | −0.4 / +0.2, err 1.65/1.85 | **평균 반올림 오차**, SD도 다름 |
| NVP-1704 IL-6 Δ | −0.23±1.06 / +0.20±1.20, p=0.041 | −0.23 / 0.2, err **0.12/0.13** | **평균 일치, 에러바 과소** |
| NVP-2106 p·개선율 | P=0.0318·202%, Memory 207%, Q4 1514%, Attention 315%/147% | 동일 표기 | **라벨 Exact** / 선 좌표는 Approx |
| NVP-1703 소아 TNSS | Table2: AM −1.90±2.07 vs −1.02±2.62 등 | weekly/daily Approx 곡선 | **Exact 표와 직접 연결 안 됨** |
| ThinkGIN AChE | −11.53±3.85 vs −8.78±4.25 (또는 −11.83/−10.41) | −11 / −8.7 | **대략 일치(Approx)** |
| ThinkGIN PSQI latency | ≈ −0.26±0.97 vs 0.15±0.87 | −0.28 / 0.17 ±0.97/0.78 | **대략 일치** |
| Immulink 8지표 % | CD3 15.0±9.9 vs 1.0±2.5; NK cyto **83.1±30.0 vs −4.5** 등 | iv≈[12,15,13,13,12,10,18,**85**] / pv≈[3,-2,-8,3,-3,2,**2,2**] | **시험군 대략 OK**, **위약 NK독성 등 부정확** |
| Collagen 주름·Ra | 제안서 2.585→2.366, 12.845→12.404 | 동일 | **Exact 일치** |
| AcetoBeta | 5배 차이, 70%(9/13) | 동일 콜아웃 | **문구 Exact** / 막대높이는 Approx |
| Pinitol | Lee 2019; p=0.010/0.030/0.018/0.040, GPx 0.015, MDA 0.002 | 캡션 일치 | **p값 Exact** / 막대는 Approx |

### 교차 확인 결론

논문·원료자료까지 보면 HTML은 **p값·개선율·일부 평균(Exact)** 은 꽤 맞추지만, **그래프 점·막대·에러바를 원본/논문과 동일하다 말할 수 없습니다.**

특히 공개 확정 전에 고쳐야 할 논문 불일치:
1. MED-01 Nugent → −0.36±1.72 / +0.19±1.85
2. NVP-1704 IL-6 에러바 → ±1.06 / ±1.20
3. Immulink 위약군·NK cytotoxicity Exact %로 재입력
4. NVP-1703 소아는 Table 2 Exact를 쓰거나 원본 이미지 유지
