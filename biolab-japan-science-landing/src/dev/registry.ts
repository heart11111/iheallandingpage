/**
 * Development preview registry.
 *
 * Draft pages live under `/dev/...` and are reviewed on the live domain
 * without changing the real routes. When the owner says "퍼블리시", promote
 * the draft into its `livePath` and mark status as `published` (or remove it).
 */

export type DraftStatus = "empty" | "ready" | "published";

export type DraftEntry = {
  /** Unique id for the draft */
  id: string;
  /** Human-readable title (Korean preferred for the hub) */
  title: string;
  /** Path under /dev where the draft is previewed */
  previewPath: string;
  /** Real site path this draft will replace on publish */
  livePath: string;
  status: DraftStatus;
  /** Short note shown on the /dev hub */
  note: string;
  updatedAt: string;
};

/**
 * Keep this list as the single source of truth for open drafts.
 * Agents: add/update entries here whenever a draft page is created or changed.
 */
export const draftRegistry: DraftEntry[] = [
  {
    id: "charts-approx-2026-08",
    title: "차트 Exact·부호 수정 (검수 초안)",
    previewPath: "/dev/charts-approx",
    livePath: "/products (evidence SVG — 퍼블리시 전 미반영)",
    status: "ready",
    note: "라이브 미반영. Opus+GPT+Sonnet 교차검증 중/완료 — multi-model-cross-verify-2026-08-21.md. /dev/charts-approx에서 검수.",
    updatedAt: "2026-08-21",
  },
];

export function getOpenDrafts() {
  return draftRegistry.filter((entry) => entry.status !== "published");
}

export function getDraftById(id: string) {
  return draftRegistry.find((entry) => entry.id === id);
}
