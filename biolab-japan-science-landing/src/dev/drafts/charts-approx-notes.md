# 차트 상대·방향 근사치 수정 (2026-08-21)

목표: 픽셀 Exact가 아니어도 **상대 크기·0 기준 부호**는 논문과 맞출 것.

## 수정 요약

| 키 | 변경 |
| --- | --- |
| `immulink-evidence-1.webp` | Foods 2023 Exact %Δ. 위약 CD3 `+1.0`(기존 −2 부호 오류), NK수 `−2.0`, NK독성 `−4.5` / 섭취 NK독성 `83.1` |
| `med01-evidence-2.png` | Nugent Exact `−0.36±1.72` / `+0.19±1.85` |
| `applephenon-evidence-2.webp` | evidence-1 복제 해제 → 허리 Δ(cm) Exact |
| `applephenon-evidence-3.webp` | BMI Δ Exact (`−0.3` 등) |
| `thinkgin-evidence-1.webp` | AChE `−11.53` / `−8.78` + `brk` |
| `thinkgin-evidence-3.webp` | PSQI latency `−0.26±0.97` / `+0.15±0.87` |
| `nvp1702-evidence-1.webp` (HTML) | 12주 Exact 끝점 동기화 |
| `pinitol-evidence-2.webp` | 간지방 시작값 `17.9` (캡션과 일치) |

## IL-6 에러바

논문 SD는 `±1.06 / ±1.20`이나, 카탈로그 원본 이미지는 SEM급 짧은 에러바. **평균·부호(−0.23 / +0.20)** 를 유지하고 에러바는 원본 스케일을 따름.

## 미리보기

`/dev/charts-approx` — 퍼블리시 지시 전 검토용.
