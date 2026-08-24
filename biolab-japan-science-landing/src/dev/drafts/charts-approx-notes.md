# 차트 Exact 초안 (라이브 미반영)

- 미리보기: `/dev/charts-approx`
- 수정 엔진: `src/dev/drafts/evidenceChartsFixed.ts`
- 검수 HTML: `reference/charts-review/charts-review.html`
- 교차검증: `reference/charts-review/multi-model-cross-verify-2026-08-21.md`
- **라이브** `src/lib/evidenceCharts.ts` = main 원본 (퍼블리시 전까지 변경 없음)

## 교차검증 반영 요약

- ThinkGIN AChE: ±SD + `** p=0.003`
- NVP-1704 IL-6: `P=0.041 (군간 Δ)`
- MED-01 작열감: 위약 `+0.1` Approx (`approve`)
- NVP-2106 Memory: HTML 기준 동기 (207% 캡션 정합)
- applephenon-1: 축/캡션 중화 (`approve`, Table 7 미매칭)

퍼블리시 시: `evidenceChartsFixed.ts` → `evidenceCharts.ts` 복사·동기화. `approve` 배지 항목 재확인.
