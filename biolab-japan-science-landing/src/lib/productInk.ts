import type { CSSProperties, ReactNode } from "react";
import { createElement } from "react";

/**
 * Outcome / benefit language worth a highlighter stroke.
 * Methods-only wording (e.g. “13주간 인체적용시험을 진행했습니다”) is omitted
 * on purpose — numbers in those sentences still get an underline via FIGURE.
 */
const OUTCOME_CORE =
  /개선(?:됐습니다|되었습니다|했습니다|합니다)?|감소(?:했습니다|됐습니다|합니다)?|증가(?:했습니다|됐습니다|합니다)?|완화|억제|예방|회복(?:됩니다|됐습니다)?|낮아졌습니다|낮아집니다|줄었습니다|줄여줍니다|늘어(?:났습니다|납니다)|늘었습니다|좋아졌습니다|좋아집니다|매끄러워졌습니다|지속됐습니다|저하시킵니다|높여줍니다|높입니다|도움이 됩니다|도움을 줄 수 있습니다|도움을 줍니다|도움을 주는|돕습니다|돕는|확인했습니다|확인됐습니다|확인한|입증했습니다|검증됐습니다|검증된|향상|낮춥니다|증진|보습|인체적용시험을 마친|인체적용시험 완료|役立ちます|役立つ|改善(?:しました)?|減少(?:しました)?|増加(?:しました)?|低下(?:しました|を|させます)|抑制|予防|緩和|確認・検証(?:しています)?|確認(?:しています|されています|しました|した|された)?|実証(?:しています|しました)|検証(?:しています|されています|されました)|軽減(?:しました|が見られました)?|サポート(?:します|する)|整い(?:ます|ました)|抑え|やわらげます|和らぎました|減りました|増えました|下がります|高めます|高まり(?:ます|、)|下げます|低減|持続|増進|保湿|ヒト臨床試験を終えた|ヒト臨床試験完了/g;

const RIGHT_TAIL =
  /^(에 도움을 줄 수 있습니다|에 도움을 줍니다|를 확인했습니다|을 확인했습니다|를 확인한|に役立ちます|を確認しています|を確認しました|をサポートします|が見られました|です)/;

const PAREN_TAIL = /^\s*\([^)]{0,40}\)/;

const STAT_PATTERN = /[Pp]\s*[=<>≤≥]\s*0?\.\d+(?:\s*\/\s*(?:[Pp]\s*[=<>≤≥]\s*)?0?\.\d+)*/;
const FIGURE_PATTERN = /[+-]?\d[\d,]*(?:\.\d+)?\s?(?:%|kg\/m2|kg|mg|g|CFU|억|명|名|人|편|編|건|種|종|점|배)/;
const TOKEN_PATTERN = new RegExp(`(${STAT_PATTERN.source})|(${FIGURE_PATTERN.source})`, "g");

const MAX_OUTCOME_SPAN = 64;

export type InkRange = { start: number; end: number };

function expandLeft(text: string, index: number) {
  const windowStart = Math.max(0, index - 44);
  const window = text.slice(windowStart, index);
  const cut = Math.max(
    window.lastIndexOf("。"),
    window.lastIndexOf("．"),
    window.lastIndexOf(". "),
    window.lastIndexOf("!"),
    window.lastIndexOf("！"),
    window.lastIndexOf("?"),
    window.lastIndexOf("？"),
    window.lastIndexOf("\n"),
    window.lastIndexOf(":"),
    window.lastIndexOf("："),
  );
  let from = cut === -1 ? windowStart : windowStart + cut + (window[cut] === "." ? 2 : 1);
  while (from < index && /[\s·,，、]/.test(text[from] || "")) from += 1;
  // Keep a short leftover prefix (e.g. "AL" of "ALT") in the same bullet.
  if (from > 0 && from <= 12 && !/[。．.!?！？\n]/.test(text.slice(0, from))) {
    from = 0;
  }
  return from;
}

function expandRight(text: string, end: number) {
  let next = end;
  const tail = text.slice(end);
  const right = tail.match(RIGHT_TAIL);
  if (right) next += right[0].length;
  const paren = text.slice(next).match(PAREN_TAIL);
  if (paren) next += paren[0].length;
  return next;
}

function mergeRanges(ranges: InkRange[]) {
  if (!ranges.length) return ranges;
  const sorted = ranges.slice().sort((a, b) => a.start - b.start || b.end - a.end);
  const merged: InkRange[] = [{ ...sorted[0] }];
  for (let i = 1; i < sorted.length; i += 1) {
    const cur = sorted[i];
    const last = merged[merged.length - 1];
    if (cur.start <= last.end + 1) {
      last.end = Math.max(last.end, cur.end);
    } else {
      merged.push({ ...cur });
    }
  }
  return merged;
}

/** Highlight spans for benefit/result clauses. Methods-only sentences are skipped. */
export function findOutcomeRanges(text: string): InkRange[] {
  const ranges: InkRange[] = [];
  const re = new RegExp(OUTCOME_CORE.source, "g");
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    const from = expandLeft(text, match.index);
    const to = expandRight(text, match.index + match[0].length);
    const start = to - from > MAX_OUTCOME_SPAN ? Math.max(from, to - MAX_OUTCOME_SPAN) : from;
    if (to > start) ranges.push({ start, end: to });
  }
  return mergeRanges(ranges);
}

export function hasStatNotation(items: string[]) {
  return items.some((item) => new RegExp(STAT_PATTERN.source).test(item));
}

function renderTokens(text: string, keyPrefix: string, inkInside: boolean): ReactNode[] {
  const matches = Array.from(text.matchAll(TOKEN_PATTERN));
  if (matches.length === 0) return [text];

  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    if (match[1]) {
      nodes.push(
        createElement(
          "small",
          { className: "dh-stat-note", key: `${keyPrefix}-stat-${index}` },
          match[0],
        ),
      );
    } else {
      nodes.push(
        createElement(
          "strong",
          {
            className: inkInside ? undefined : "dh-ink-line",
            "data-ink": inkInside ? undefined : "line",
            key: `${keyPrefix}-fig-${index}`,
            style: inkInside ? undefined : ({ ["--ink-i" as string]: index } as CSSProperties),
          },
          match[0],
        ),
      );
    }
    cursor = start + match[0].length;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export function renderEmphasized(text: string): ReactNode {
  if (!text) return text;
  const inks = findOutcomeRanges(text);
  if (inks.length === 0) return renderTokens(text, "t", false);

  const nodes: ReactNode[] = [];
  let cursor = 0;
  inks.forEach((ink, index) => {
    if (ink.start > cursor) {
      nodes.push(...renderTokens(text.slice(cursor, ink.start), `g${index}`, false));
    }
    nodes.push(
      createElement(
        "mark",
        {
          className: "dh-ink",
          "data-ink": "mark",
          key: `ink-${index}`,
          style: { ["--ink-i" as string]: index } as CSSProperties,
        },
        renderTokens(text.slice(ink.start, ink.end), `i${index}`, true),
      ),
    );
    cursor = ink.end;
  });
  if (cursor < text.length) nodes.push(...renderTokens(text.slice(cursor), "t", false));
  return nodes;
}
