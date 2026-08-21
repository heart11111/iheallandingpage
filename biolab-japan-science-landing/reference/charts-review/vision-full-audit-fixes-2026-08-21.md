# Vision full audit — 원본 vs HTML 수정안 (2026-08-21)

소스: computerUse(페이지 전수 스크롤) + 원본 이미지 비전 + BUILD 코드 대조.  
UI: `charts-review.html` / `public/dev/charts-review.html` 각 행 **빨간 패널**에 동일 내용 표기.  
**코드 수정은 미적용** — 「수정하라」 대기.

## Critical
| 파일 | 핵심 |
|------|------|
| `med02-evidence-2.png` | 에러바 관통형 → `err1` |
| `nvp2106-evidence-2.webp` | Memory/Q4 데이터 부호·형상 오류 |
| `nvp1702-evidence-1.webp` | 에러캡 과대 |
| `nvp1703-evidence-2.webp` | 에러바 완전 누락 |
| `nvp1704-evidence-3.webp` | 관통형 + spaghetti→mean |
| `thinkgin-evidence-3.webp` | 에러바·주석 불일치 |
| `applephenon-evidence-2.webp` | 원본 경로/자산 매칭 위험 |
| `pinitol-evidence-2.webp` | tip↔through · 레이아웃 |
| `acetobeta-evidence-3.webp` | 대각 빨간 화살 누락 |

## Major / Minor / OK
페이지 빨간 패널 참고. Exact 배지여도 시각적 Exact가 아닌 항목(성인 TNSS, IL-6 등) 존재.

## 공통 패턴
1. tip-only 원본 → `err1:true`
2. 라인 end-label 과다 → `noEndLabel`
3. Placebo open□ / 실선 vs dashed·filled
4. spaghetti·개인선은 SVG보다 이미지 유지가 안전
