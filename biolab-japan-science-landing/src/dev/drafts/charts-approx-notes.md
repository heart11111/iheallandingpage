# 차트 Exact 초안 (라이브 미반영)

- 미리보기: `/dev/charts-approx`
- 수정 엔진: `src/dev/drafts/evidenceChartsFixed.ts`
- 검수 HTML: `reference/charts-review/charts-review.html`
- 감사 보고서: `reference/charts-review/chart-numeric-accuracy-audit-20260821.md`
- 교차검증: `reference/charts-review/multi-model-cross-verify-2026-08-21.md`
- **라이브** `src/lib/evidenceCharts.ts` = main 원본 (퍼블리시 전까지 변경 없음)

## GPT Model B 반영 (2026-08-21)

- ThinkGIN AChE: ITT −11.53±3.85 / −8.78±4.25, `** p=0.003`
- NVP-1704 IL-6: `P=0.041 (군간 Δ)`; 비율 라인에서 pmark 제거

퍼블리시 시: `evidenceChartsFixed.ts` → `evidenceCharts.ts` 복사·동기화.
