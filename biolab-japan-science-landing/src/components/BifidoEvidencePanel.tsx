"use client";

import Image from "next/image";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { useReveal } from "@/lib/useReveal";

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
    icon: "/images/bifido/effects/gut.png",
    items: ["Immune", "Diarrhea", "Ulcerative colitis", "IBS"],
  },
  {
    key: "brain",
    title: "BRAIN",
    icon: "/images/bifido/effects/brain.png",
    items: ["Cognitive function", "State of emotion"],
  },
  {
    key: "kidney",
    title: "KIDNEY",
    icon: "/images/bifido/effects/kidney.png",
    items: ["AKI"],
  },
  {
    key: "skin",
    title: "SKIN",
    icon: "/images/bifido/effects/skin.png",
    items: ["Eczema"],
  },
];

const certificates = [
  {
    key: "fda",
    label: "FDA",
    sub: "U.S. Food & Drug Administration",
    src: "/images/bifido/certs/fda-mark.jpg",
  },
  {
    key: "halal",
    label: "HALAL",
    sub: "Korea Muslim Federation",
    src: "/images/bifido/certs/halal.jpg",
  },
  {
    key: "gras",
    label: "FDA GRAS",
    sub: "GRN 814 / 813 / 952",
    src: "/images/bifido/certs/fda-gras.jpg",
  },
  {
    key: "ndi",
    label: "FDA NDI",
    sub: "NDI 1079 / 1082 / 1118",
    src: "/images/bifido/certs/fda-ndi.jpg",
  },
] as const;

export function BifidoEvidencePanel() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";
  useReveal();

  return (
    <section className="dh-bifido-panel" aria-label={isKorean ? "Bifido 특징 및 인증" : "Bifido features and certifications"}>
      <ul className="dh-bifido-highlights">
        {highlights.map((item, index) => (
          <li data-reveal={String(index % 3)} key={item.ja}>
            {isKorean ? item.ko : item.ja}
          </li>
        ))}
      </ul>

      <div className="dh-bifido-effects">
        <p>Bio-functional effects</p>
        <div className="dh-bifido-effect-grid">
          {effectGroups.map((group, index) => (
            <article data-reveal={String(index)} key={group.key}>
              <span className="dh-bifido-effect-icon">
                <Image alt="" height={64} src={group.icon} width={94} />
              </span>
              <strong>{group.title}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="dh-bifido-certs">
        <p>Certification marks</p>
        <ul>
          {certificates.map((cert, index) => (
            <li data-reveal={String(index)} key={cert.key}>
              <figure>
                <Image alt={cert.label} height={320} src={cert.src} width={240} />
              </figure>
              <strong>{cert.label}</strong>
              <span>{cert.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
