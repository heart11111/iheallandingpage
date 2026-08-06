"use client";

import { useEffect, useRef } from "react";
import { buildChartNode } from "@/lib/evidenceCharts";

type EvidenceChartProps = {
  chartKey: string;
  lang: "ja" | "ko";
};

/**
 * Renders an approved evidence chart from the ported review-file SVG engine.
 * The engine builds real DOM/SVG nodes, so this is client-only; the node is
 * rebuilt whenever the chart key or language changes.
 */
export function EvidenceChart({ chartKey, lang }: EvidenceChartProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.replaceChildren();
    const node = buildChartNode(chartKey, lang);
    if (node) {
      // The engine hides bars/lines until a `.show` class is present (scroll
      // animation in the review file); here we render them immediately.
      node.classList?.add("show");
      host.appendChild(node);
    }
  }, [chartKey, lang]);

  return <div className="dh-evidence-chart" ref={hostRef} />;
}
