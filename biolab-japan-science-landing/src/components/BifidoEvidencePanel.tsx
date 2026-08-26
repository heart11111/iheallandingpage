"use client";

import { useDevLanguage } from "@/components/DevLanguageProvider";

const highlights = [
  {
    ko: "모유수유한 건강한 아기의 분변에서 분리한 인체 유래 균주입니다.",
    ja: "母乳で育った健康な乳児の便から分離した、ヒト由来菌株です。",
  },
  {
    ko: "미국 FDA GRAS 등재: BGN4 GRN 814, BORI GRN 813, AD011 GRN 952.",
    ja: "米国FDA GRAS登録: BGN4 GRN 814、BORI GRN 813、AD011 GRN 952。",
  },
  {
    ko: "한국 미생물보존센터 기탁: BGN4 KCCM 80046, BORI KCCM 10492, AD011 KCCM 11209.",
    ja: "韓国微生物保存センター寄託: BGN4 KCCM 80046、BORI KCCM 10492、AD011 KCCM 11209。",
  },
  {
    ko: "GenBank 염기서열: BGN4 CP001361, BORI CP031133, AD011 CP001213.",
    ja: "GenBank塩基配列: BGN4 CP001361、BORI CP031133、AD011 CP001213。",
  },
];

const effectGroups = [
  {
    key: "gut",
    title: "GUT",
    itemsKo: ["Immune", "Diarrhea", "Ulcerative colitis", "IBS"],
    itemsJa: ["Immune", "Diarrhea", "Ulcerative colitis", "IBS"],
    icon: (
      <svg viewBox="0 0 94 64" aria-hidden="true">
        <path
          d="M18 12h58c6 0 10 5 10 10s-4 10-10 10H28c-5 0-8 4-8 8s3 8 8 8h40c5 0 9 4 9 9s-4 9-9 9H22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "brain",
    title: "BRAIN",
    itemsKo: ["Cognitive function", "State of emotion"],
    itemsJa: ["Cognitive function", "State of emotion"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M22 14c-7 3-10 11-8 18 1 4-1 8-4 10 3 6 10 10 18 10 9 0 16-3 20-9 5-2 8-8 7-13-1-6-5-10-6-16-6-6-16-8-27 0z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M28 22c3 3 4 8 3 13M36 20c2 5 2 11 0 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "kidney",
    title: "KIDNEY",
    itemsKo: ["AKI"],
    itemsJa: ["AKI"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 16c8-6 16 1 16 10 0 8-5 16-12 20-6 3-10-1-10-8 0-8 2-16 6-22z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M44 16c-8-6-16 1-16 10 0 8 5 16 12 20 6 3 10-1 10-8 0-8-2-16-6-22z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M28 48v8M36 48v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "skin",
    title: "SKIN",
    itemsKo: ["Eczema"],
    itemsJa: ["Eczema"],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 16h44M10 22h44M10 30c6 6 16-4 22 2s16-4 22 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="18" cy="46" r="2.2" />
        <circle cx="28" cy="46" r="2.2" />
        <circle cx="38" cy="46" r="2.2" />
        <circle cx="48" cy="46" r="2.2" />
        <circle cx="23" cy="54" r="2.2" />
        <circle cx="33" cy="54" r="2.2" />
        <circle cx="43" cy="54" r="2.2" />
      </svg>
    ),
  },
];

const certificates = [
  { key: "fda", label: "FDA", sub: "U.S. Food & Drug Administration", tone: "navy" },
  { key: "halal", label: "HALAL", sub: "Korea Muslim Federation", tone: "green" },
  { key: "gras", label: "FDA GRAS", sub: "GRN 814 / 813 / 952", tone: "navy" },
  { key: "ndi", label: "FDA NDI", sub: "NDI 1079 / 1082 / 1118", tone: "navy" },
] as const;

export function BifidoEvidencePanel() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";

  return (
    <section className="dh-bifido-panel" aria-label={isKorean ? "Bifido 특징 및 인증" : "Bifido features and certifications"}>
      <div className="dh-bifido-panel-head">
        <p>Bifidobacterium Features</p>
        <h3>{isKorean ? "균주 특징과 인증" : "菌株の特徴と認証"}</h3>
      </div>

      <ul className="dh-bifido-highlights">
        {highlights.map((item) => (
          <li key={item.ja}>{isKorean ? item.ko : item.ja}</li>
        ))}
      </ul>

      <div className="dh-bifido-effects">
        <p>{isKorean ? "Bio-functional effects" : "Bio-functional effects"}</p>
        <div className="dh-bifido-effect-grid">
          {effectGroups.map((group) => (
            <article key={group.key}>
              <span className="dh-bifido-effect-icon">{group.icon}</span>
              <strong>{group.title}</strong>
              <ul>
                {(isKorean ? group.itemsKo : group.itemsJa).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="dh-bifido-certs">
        <p>{isKorean ? "Certification marks" : "Certification marks"}</p>
        <ul>
          {certificates.map((cert) => (
            <li data-tone={cert.tone} key={cert.key}>
              <strong>{cert.label}</strong>
              <span>{cert.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
