"use client";

import { useState } from "react";
import { CorporateFooter } from "@/components/CorporateParts";
import { DevPreviewChrome } from "@/components/DevPreviewChrome";
import { EvidenceChart } from "@/components/EvidenceChart";
import { NavBar } from "@/components/NavBar";

type Lang = "ko" | "ja";

const FIXES: {
  key: string;
  title: string;
  note: string;
}[] = [
  {
    key: "immulink-evidence-1.webp",
    title: "Immulink · 8지표 %변화",
    note: "Foods 2023 Exact. 위약 CD3 +1.0(부호 수정), NK수 −2.0, NK독성 −4.5. 섭취군 NK독성 83.1.",
  },
  {
    key: "med01-evidence-2.png",
    title: "MED-01 · Nugent",
    note: "Exact −0.36±1.72 (MED-01) / +0.19±1.85 (위약). MED-01 < 0 < 위약.",
  },
  {
    key: "applephenon-evidence-2.webp",
    title: "Applephenon · 허리둘레",
    note: "evidence-1과 복제 해제. J Oleo Sci Exact Δcm: AP 0/−0.9/−1.7/−2.2/−1.7 vs PL 0/+0.3/+0.2/−0.1/−0.4.",
  },
  {
    key: "applephenon-evidence-3.webp",
    title: "Applephenon · BMI",
    note: "Exact ΔBMI: AP 0/+0.1/−0.2/−0.3/−0.1 vs PL 0/+0.3/0/0/+0.1.",
  },
  {
    key: "thinkgin-evidence-1.webp",
    title: "ThinkGIN · AChE",
    note: "Exact ≈ −11.53 (ThinkGIN) / −8.78 (위약) + 절단축(brk). ThinkGIN이 더 큰 감소.",
  },
  {
    key: "thinkgin-evidence-3.webp",
    title: "ThinkGIN · PSQI-K 수면잠복",
    note: "Exact ≈ −0.26±0.97 / +0.15±0.87. ThinkGIN < 0 < 위약.",
  },
  {
    key: "nvp1704-evidence-3.webp",
    title: "NVP-1704 · IL-6 / BDNF",
    note: "평균 Exact −0.23 / +0.20 (IL-6). NVP < 0 < 위약. 에러바는 원본 카탈로그 스케일(SEM급) 유지.",
  },
  {
    key: "nvp1702-evidence-1.webp",
    title: "NVP-1702 · γGTP/ALT/AST",
    note: "12주 Exact 끝점 (−2.85 / 24.56 등). 시험군은 0 아래·위약 γGTP는 크게 상승.",
  },
];

export default function ChartsApproxDevPage() {
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <div className="dh-page dh-dev-page">
      <DevPreviewChrome title="차트 근사치 수정" />
      <NavBar />
      <main>
        <section className="dh-dev-hub">
          <div className="dh-container">
            <p className="dh-kicker">INTERNAL · DEV PREVIEW</p>
            <h1>차트 상대·방향 근사치 수정</h1>
            <p className="dh-dev-hub-lead">
              완전 픽셀 일치는 아니지만, 논문 Exact 기준으로{" "}
              <strong>어느 군이 더 큰지 / 0보다 낮은지</strong>가 맞도록 고친 초안입니다.
              확인 후 「퍼블리시」라고 하시면 제품 상세 allowlist 반영을 이어갑니다.
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
                  style={{
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: 20,
                  }}
                >
                  <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>{item.title}</h2>
                  <p style={{ color: "#4b5563", fontSize: 14, margin: "0 0 14px" }}>
                    {item.note}
                  </p>
                  <code style={{ fontSize: 12, color: "#6b7280" }}>{item.key}</code>
                  <div style={{ marginTop: 12, overflowX: "auto" }}>
                    <EvidenceChart chartKey={item.key} lang={lang} />
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
