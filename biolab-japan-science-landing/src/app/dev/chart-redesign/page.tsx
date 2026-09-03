"use client";

import { useEffect, useRef } from "react";
import { CorporateFooter } from "@/components/CorporateParts";
import { DevPreviewChrome } from "@/components/DevPreviewChrome";
import { NavBar } from "@/components/NavBar";
import { buildChartNode } from "@/lib/evidenceCharts";

const NS = "http://www.w3.org/2000/svg";
const el = (tag: string, attrs?: Record<string, string | number>) => {
  const node = document.createElementNS(NS, tag);
  for (const key in attrs || {}) node.setAttribute(key, String(attrs![key]));
  return node;
};
const txt = (x: number, y: number, text: string, attrs?: Record<string, string | number>) => {
  const node = el("text", Object.assign({ x, y }, attrs || {}));
  node.textContent = text;
  return node;
};

function CurrentChart() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    host.current.replaceChildren();
    try {
      const node = buildChartNode("med02-evidence-1.webp", "ko");
      if (node) {
        node.classList?.add("show");
        host.current.appendChild(node);
      }
    } catch {
      // Chart failed to render; leave the container empty.
    }
  }, []);
  return <div className="dh-evidence-chart" ref={host} />;
}

function RedesignedChart() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    host.current.replaceChildren();

    try {
      const w = 340;
    const h = 280;
    const m = { t: 56, r: 20, b: 46, l: 72 };
    const iw = w - m.l - m.r;
    const ih = h - m.t - m.b;
    const yMin = -3200;
    const yMax = 400;
    const Y = (v: number) => m.t + (ih * (yMax - v)) / (yMax - yMin);

    const svg = el("svg", { viewBox: `0 0 ${w} ${h}`, role: "img" });
    svg.setAttribute("style", "display:block;width:100%;height:auto");

    // soft plot background
    svg.appendChild(el("rect", { x: m.l, y: m.t, width: iw, height: ih, rx: 8, fill: "#f8fafc" }));

    // gridlines
    [0, -1000, -2000, -3000].forEach((tick) => {
      const y = Y(tick);
      svg.appendChild(
        el("line", {
          x1: m.l,
          y1: y,
          x2: m.l + iw,
          y2: y,
          stroke: tick === 0 ? "#94a3b8" : "#e2e8f0",
          "stroke-width": tick === 0 ? 1.4 : 1,
          "stroke-dasharray": tick === 0 ? "none" : "4 4",
        }),
      );
      svg.appendChild(
        txt(m.l - 10, y + 4, tick.toLocaleString(), {
          "text-anchor": "end",
          "font-size": 11,
          fill: "#64748b",
          "font-weight": 600,
        }),
      );
    });

    // y label
    svg.appendChild(
      txt(16, m.t + ih / 2, "체지방량 변화 (g)", {
        "text-anchor": "middle",
        "font-size": 12,
        fill: "#0f172a",
        "font-weight": 700,
        transform: `rotate(-90 16 ${m.t + ih / 2})`,
      }),
    );

    // bars
    const bars = [
      { label: "MED-02", value: -1166.82, color: "#0d9488" },
      { label: "위약", value: -382.08, color: "#cbd5e1" },
    ];
    const slot = iw / bars.length;
    const barW = Math.min(64, slot * 0.52);

    bars.forEach((bar, i) => {
      const cx = m.l + slot * i + slot / 2;
      const y0 = Y(0);
      const yv = Y(bar.value);
      const top = Math.min(y0, yv);
      const height = Math.abs(yv - y0);

      svg.appendChild(
        el("rect", {
          x: cx - barW / 2,
          y: top,
          width: barW,
          height,
          rx: 6,
          fill: bar.color,
        }),
      );
      svg.appendChild(
        txt(cx, top - 10, bar.value.toLocaleString(), {
          "text-anchor": "middle",
          "font-size": 12,
          fill: "#0f172a",
          "font-weight": 800,
        }),
      );
      svg.appendChild(
        txt(cx, h - 18, bar.label, {
          "text-anchor": "middle",
          "font-size": 12,
          fill: "#334155",
          "font-weight": 700,
        }),
      );
    });

    // header pill
    const pillW = 150;
    svg.appendChild(
      el("rect", {
        x: m.l + iw / 2 - pillW / 2,
        y: 8,
        width: pillW,
        height: 26,
        rx: 13,
        fill: "#0f766e",
      }),
    );
    svg.appendChild(
      txt(m.l + iw / 2, 25, "체지방량 ↓", {
        "text-anchor": "middle",
        "font-size": 13,
        fill: "#fff",
        "font-weight": 800,
      }),
    );

    // source
    svg.appendChild(
      txt(m.l + iw, h - 2, "MED-02군 vs 위약군", {
        "text-anchor": "end",
        "font-size": 10,
        fill: "#94a3b8",
        "font-weight": 600,
      }),
    );

      host.current.appendChild(svg);
    } catch (error) {
      host.current.textContent = `차트 오류: ${error instanceof Error ? error.message : String(error)}`;
    }
  }, []);
  return <div className="dh-evidence-chart dh-evidence-chart-redesign" ref={host} />;
}

export default function ChartRedesignPage() {
  return (
    <div className="dh-page dh-dev-page">
      <DevPreviewChrome title="차트 디자인 예시" />
      <NavBar />
      <main>
        <section className="dh-dev-hub">
          <div className="dh-container">
            <p className="dh-kicker">INTERNAL · DEV PREVIEW</p>
            <h1>차트 디자인 예시</h1>
            <p className="dh-dev-hub-lead">
              MED-02 체지방량 차트 한 개만 현재와 개선안으로 나란히 둡니다. 승인하시면 나머지 차트에
              같은 규칙을 적용하는 플랜을 짭니다.
            </p>

            <div className="dh-chart-redesign-grid">
              <article>
                <h2>현재</h2>
                <p>기존 엔진 그대로. 그리드·색·라벨이 차트마다 조금씩 다릅니다.</p>
                <CurrentChart />
              </article>
              <article>
                <h2>개선안</h2>
                <p>배경·그리드·막대 둥글기·색을 통일하고, 제목은 위 pill로 올렸습니다.</p>
                <RedesignedChart />
              </article>
            </div>

            <div className="dh-chart-redesign-notes">
              <h2>바꾼 점</h2>
              <ul>
                <li>플롯 배경을 옅은 회색으로 깔고, 그리드는 점선으로 줄였습니다.</li>
                <li>시험군은 teal, 위약은 옅은 회색으로 통일했습니다.</li>
                <li>막대 모서리를 둥글게 하고 값 라벨을 막대 위로 올렸습니다.</li>
                <li>제목을 차트 안 pill로 올려 그리드에서 바로 읽히게 했습니다.</li>
                <li>출처는 오른쪽 아래에 작게 둡니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
