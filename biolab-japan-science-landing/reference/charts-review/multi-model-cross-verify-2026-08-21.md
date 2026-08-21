# 다중 모델 교차검증 보고서 (2026-08-21)

대상 초안: `src/dev/drafts/evidenceChartsFixed.ts` (+ `charts-review.html`)  
라이브: `src/lib/evidenceCharts.ts` (= `origin/main`, 미변경)

## 참여 모델

| ID | 모델 | 역할 |
| --- | --- | --- |
| A1 | Claude Opus (1차 감사) | 전수 Exact/부호 감사 → 패치 적용 |
| A2 | Claude Opus (2차) | 패치 반영·HTML 동기·약점 항목 재검토 |
| B | GPT-5.6 (xhigh) | 독립 논문 대조 |
| C | Claude Sonnet (xhigh) | 핵심 클레임 스팟체크 |
| Orch | Composer(오케스트레이터) | PMC 원문 재조회 + draft/HTML/live 존재 검증 |

## 오케스트레이터 PMC 재조회 결과 (합의 기준)

| 클레임 | 원문 | 초안 | 판정 |
| --- | --- | --- | --- |
| Immulink 8지표 %Δ | Foods 2023 Fig.2 문단 (기존 확보) | `14.1…83.1` / `2.8…−4.5` | **CONFIRMED** |
| Nugent −0.36±1.72 / +0.19±1.85 | PMC9863863 §3.3 | Exact | **CONFIRMED** |
| 작열감 위약 증가 | PMC9863863 §증상 + Fig 3B | `p:0` (Fig≈0; 본문은 증가) | **CONFIRMED** (부호/형태 Approx) |
| NVP-1703 위약 1주 TNSS +0.10 | PMC7284371 §3.2 | `pl:[0,0.1,…]` | **CONFIRMED** |
| 콧물 위약 1주 +0.06, p=0.007 | 동상 | Exact | **CONFIRMED** |
| 코막힘 4주 p=0.034, 위약 1주 +0.08 | 동상 Table2/본문 | Exact | **CONFIRMED** |
| NVP-1704 BDI −6.18/−8.02 vs −3.33/−5.39 | PMC8398773 Table2 | Exact | **CONFIRMED** |
| BAI −4.73/−5.30 vs −1.37/−2.93 | Table2 | Exact | **CONFIRMED** |
| PSQI −0.63/−1.33 vs −0.33/−0.42, t-test p=0.068 | Table3 | Exact + `p=0.068` | **CONFIRMED** |
| ISI −1.77/−3.27 vs −0.43/−1.14 | Table3 | Exact | **CONFIRMED** |
| IL-6 Δ −0.23±1.06 / +0.20±1.20 | Table5 | Exact | **CONFIRMED** |
| log BDNF Δ 0.09 / **0.08** | Table5 | Exact | **CONFIRMED** |
| IL-6/log(BDNF) 0.15→0.12 / 0.13→0.15 | Table5 baseline→wk8 | Exact | **CONFIRMED** |
| IL-6 SEM ≈0.14/0.16 | SD/√59 | Exact | **CONFIRMED** |
| ThinkGIN AChE ITT −11.53±3.85 / −8.78±4.25 p=0.003** | PMC11206504 Table3 | Exact + SD + ** | **CONFIRMED** |
| 수면잠복 ITT −0.25±0.95 / +0.15±0.80 p=0.046 | Table3 | Exact | **CONFIRMED** |
| (참고) PP 수면잠복 −0.26/0.15 p=0.066 n.s. | Table2 | 초안은 ITT 사용(올바름) | **NOTE** |
| Applephenon waist/BMI Δ | J Oleo Sci 2010 Table7 (기존 PDF) | Exact | **CONFIRMED** (A1+PDF) |

## draft / HTML / live 동기 체크

스크립트로 Exact 패치 패턴 10종 검사:

| 패턴 | draft | HTML | live |
| --- | :---: | :---: | :---: |
| Immulink Exact 배열 | ✓ | ✓ | ✗ |
| Nugent −0.36/0.19 | ✓ | ✓ | ✗ |
| 작열감 p:0 (Fig≈0) | ✓ | ✓ | ✗ |
| 1703 위약 1주 + | ✓ | ✓ | ✗ |
| ThinkGIN ITT | ✓ | ✓ | ✗ |
| IL-6 SEM·BDNF 0.08·비율 패널 | ✓ | ✓ | ✗ |
| Applephenon waist/BMI | ✓ | ✓ | ✗ |

→ **초안↔HTML 동기 OK. 라이브 미반영 OK (/dev 정책 준수).**

## 잔여 Approx / 주의 (합의)

1. **NVP-2106 Q4 위약 종점** — 캡션 +1514%와 정합하도록 0 아래로 이동했으나 원본 이미지 Exact 아님.
2. **applephenon-evidence-1** — 좌표는 원본 이미지와 맞지만 Table7 어떤 항목과도 직접 매칭 안 됨(라벨 주의).
3. **MED-01 작열감** — Fig 3B≈0으로 맞춤; 본문 “increased”와 수치 표는 없음 → Approx.
4. **NVP-1704 선그래프 에러바** — 표는 SD, 그림 캡션은 SEM → 초안은 SEM(SD/√n); week-4 SEM 반올림 ±0.01 노이즈 가능.
5. **NVP-1704 daytime week-4** −0.30/−0.15 — 1차 논문은 week-8 subscale만 표기 → 중간점 Approx 가능.

## 모델별 결과 (도착분)

### Sonnet ([Sonnet 교차검증](bc-a583a273-f31e-513a-bd50-9bba09f49f77))
핵심 5클레임 전부 **CONFIRMED**. 라이브 미반영 확인.

### GPT 1차 ([교차검증 Exact](bc-5f906dcc-4b6f-5206-b6bb-d9ce428880f1))
Exact 다수 **CONFIRMED**. 이견:
- MED-01 작열감 위약 `+0.10` → Figure 3B≈0 권고 → **초안을 `0`으로 수정**
- NVP-2106 Q4 → canonical Approx `[0,+0.30,−0.06]` 권고 → **draft/HTML 동기 수정**
- 라이브는 publish 전까지 유지 권고 → **동의**

### GPT 2차 Model B ([GPT 차트 Exact 교차검증](bc-330a6dd5-9993-5576-94ed-14206c18027c))
**PASS_WITH_NOTES**. Exact 코어 합의. 반영:
- ThinkGIN AChE → ±SD + `** p=0.003` (draft/HTML)
- IL-6 `P=0.041` → 군간 Δ 라벨; NVP 비율 패널 오인 pmark 제거
- SEM week-4 반올림·daytime week-4·작열감 수치는 NOTES로 유지

### Opus A2
실행 중 ([Opus 2차 교차검증](bc-e345b8e5-00d5-51bd-ac4f-37663033c644)) — 도착 시 본 보고서 갱신.

## 종합 판정

**PASS_WITH_NOTES** (중간 합의; Opus A2 대기)

Exact·부호 핵심은 모델 간 합의. 작열감/`Q4`/일부 SEM·중간점은 Approx. `/dev`만 수정, 라이브 미반영.
