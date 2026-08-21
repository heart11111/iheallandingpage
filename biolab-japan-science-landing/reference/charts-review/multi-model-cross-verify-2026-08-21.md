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
| 작열감 위약 증가 | PMC9863863 §증상: “increased in the control group” | `p:0.1` | **CONFIRMED** (값 Approx, 부호 Exact) |
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
| ThinkGIN AChE ITT −11.53/−8.78 | PMC11206504 Table3 | Exact | **CONFIRMED** |
| 수면잠복 ITT −0.25±0.95 / +0.15±0.80 p=0.046 | Table3 | Exact | **CONFIRMED** |
| (참고) PP 수면잠복 −0.26/0.15 p=0.066 n.s. | Table2 | 초안은 ITT 사용(올바름) | **NOTE** |
| Applephenon waist/BMI Δ | J Oleo Sci 2010 Table7 (기존 PDF) | Exact | **CONFIRMED** (A1+PDF) |

## draft / HTML / live 동기 체크

스크립트로 Exact 패치 패턴 10종 검사:

| 패턴 | draft | HTML | live |
| --- | :---: | :---: | :---: |
| Immulink Exact 배열 | ✓ | ✓ | ✗ |
| Nugent −0.36/0.19 | ✓ | ✓ | ✗ |
| 작열감 p:0.1 | ✓ | ✓ | ✗ |
| 1703 위약 1주 + | ✓ | ✓ | ✗ |
| ThinkGIN ITT | ✓ | ✓ | ✗ |
| IL-6 SEM·BDNF 0.08·비율 패널 | ✓ | ✓ | ✗ |
| Applephenon waist/BMI | ✓ | ✓ | ✗ |

→ **초안↔HTML 동기 OK. 라이브 미반영 OK (/dev 정책 준수).**

## 잔여 Approx / 주의 (합의)

1. **NVP-2106 Q4 위약 종점** — 캡션 +1514%와 정합하도록 0 아래로 이동했으나 원본 이미지 Exact 아님.
2. **applephenon-evidence-1** — 좌표는 원본 이미지와 맞지만 Table7 어떤 항목과도 직접 매칭 안 됨(라벨 주의).
3. **MED-01 작열감 +0.1** — 부호만 Exact, 수치는 Figure Approx.
4. **NVP-1704 선그래프 에러바** — 표는 SD, 그림 캡션은 SEM → 초안은 SEM(SD/√n) 사용.

## 종합 판정 (현재)

**PASS_WITH_NOTES**

- Exact·부호 핵심 클레임은 PMC 원문으로 재확인됨.
- 라이브 미반영 /dev 전용 구조 유지.
- Approx 잔여 4건은 퍼블리시 전 원본 이미지로 한 번 더 보면 좋음.

모델 B/C/A2 백그라운드 결과가 도착하면 본 문서 §모델별 원문 섹션에 붙입니다.
