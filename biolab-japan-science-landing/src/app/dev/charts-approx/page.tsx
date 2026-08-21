"use client";

import { useEffect, useRef, useState } from "react";
import { CorporateFooter } from "@/components/CorporateParts";
import { DevPreviewChrome } from "@/components/DevPreviewChrome";
import { NavBar } from "@/components/NavBar";
import { buildChartNode } from "@/dev/drafts/evidenceChartsFixed";

type Lang = "ko" | "ja";

const FIXES: {
  key: string;
  title: string;
  note: string;
}[] = [
  {
    key: "immulink-evidence-1.webp",
    title: "Immulink · 8지표 %변화",
    note: "Foods 2023 Exact. 위약 CD3 +1.0, NK수 −2.0, NK독성 −4.5 / 섭취 NK독성 83.1.",
  },
  {
    key: "med01-evidence-1.webp",
    title: "MED-01 · 증상 3패널",
    note: "작열감 위약 +0.1 (논문: control group increased). MED-01은 음수.",
  },
  {
    key: "med01-evidence-2.png",
    title: "MED-01 · Nugent",
    note: "Exact −0.36±1.72 / +0.19±1.85. MED-01 < 0 < 위약.",
  },
  {
    key: "nvp1703-evidence-2.webp",
    title: "NVP-1703 성인 · TNSS/콧물/코막힘",
    note: "위약 1주 양수(+0.10/+0.06/+0.08). 코막힘 p=0.034. Nutrients 2020 Table 2 Exact.",
  },
  {
    key: "nvp1704-evidence-1.webp",
    title: "NVP-1704 · BDI/BAI",
    note: "Table 2 Exact (−6.18/−8.02 등). NVP가 위약보다 더 큰 감소.",
  },
  {
    key: "nvp1704-evidence-2.webp",
    title: "NVP-1704 · PSQI/ISI",
    note: "Exact. PSQI 총점 군간 p=0.068(과장 * 제거). ISI ** 유지.",
  },
  {
    key: "nvp1704-evidence-3.webp",
    title: "NVP-1704 · IL-6 / log BDNF / 비율",
    note: "IL-6 −0.23 / +0.20. 패널3·4는 IL-6/log(BDNF) (0.15→0.12 / 0.13→0.15). SEM 에러바.",
  },
  {
    key: "applephenon-evidence-2.webp",
    title: "Applephenon · 허리둘레",
    note: "복제 해제. Exact Δcm AP 0/−0.9/−1.7/−2.2/−1.7 vs PL 0/+0.3/+0.2/−0.1/−0.4.",
  },
  {
    key: "applephenon-evidence-3.webp",
    title: "Applephenon · BMI",
    note: "Exact ΔBMI AP 0/+0.1/−0.2/−0.3/−0.1 vs PL 0/+0.3/0/0/+0.1.",
  },
  {
    key: "thinkgin-evidence-1.webp",
    title: "ThinkGIN · AChE",
    note: "ITT Exact −11.53 / −8.78 + 절단축.",
  },
  {
    key: "thinkgin-evidence-3.webp",
    title: "ThinkGIN · PSQI-K 수면잠복",
    note: "ITT Exact −0.25±0.95 / +0.15±0.80, *p=0.046 (PP와 혼용 해소).",
  },
  {
    key: "nvp2106-evidence-2.webp",
    title: "NVP-2106 · Memory / Q4",
    note: "Q4 위약 종점 0 아래(Approx, 캡션 +1514%와 정합). 원본 재확인 권장.",
  },
  {
    key: "nvp1702-evidence-1.webp",
    title: "NVP-1702 · γGTP/ALT/AST",
    note: "12주 Exact 끝점 (−2.85 / 24.56 등).",
  },
];

function DraftChart({ chartKey, lang }: { chartKey: string; lang: Lang }) {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.replaceChildren();
    const node = buildChartNode(chartKey, lang);
    if (node) {
      node.classList?.add("show");
      host.appendChild(node);
    }
  }, [chartKey, lang]);
  return <div className="dh-evidence-chart" ref={hostRef} />;
}

export default function ChartsApproxDevPage() {
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <div className="dh-page dh-dev-page">
      <DevPreviewChrome title="차트 Exact 검수 초안" />
      <NavBar />
      <main>
        <section className="dh-dev-hub">
          <div className="dh-container">
            <p className="dh-kicker">INTERNAL · DEV PREVIEW · LIVE 미반영</p>
            <h1>차트 상대·Exact 수정 초안</h1>
            <p className="dh-dev-hub-lead">
              Opus 논문 교차검증 + GPT/Sonnet 다중 모델 검수용 초안입니다.{" "}
              <strong>제품 상세(라이브) SVG는 아직 바꾸지 않았습니다.</strong>{" "}
              여기(/dev)만 수정본을 렌더합니다. 검수 후 「퍼블리시」라고 하시면
              <code>evidenceCharts.ts</code>로 승격합니다. 교차검증 요약:{" "}
              <code>reference/charts-review/multi-model-cross-verify-2026-08-21.md</code>
            </p>

            <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
              {(["ko", "ja"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    border: lang === l ? "2px solid #12857e" : "1px solid #ccc",
                    background: lang === l ? "#e8f6f4" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gap: 36 }}>
              {FIXES.map((item) => (
                <article
                  key={item.key}
                  style={{ borderTop: "1px solid #e5e7eb", paddingTop: 20 }}
                >
                  <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>{item.title}</h2>
                  <p style={{ color: "#4b5563", fontSize: 14, margin: "0 0 14px" }}>
                    {item.note}
                  </p>
                  <code style={{ fontSize: 12, color: "#6b7280" }}>{item.key}</code>
                  <div style={{ marginTop: 12, overflowX: "auto" }}>
                    <DraftChart chartKey={item.key} lang={lang} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
