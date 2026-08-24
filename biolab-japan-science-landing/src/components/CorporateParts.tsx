"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { EvidenceChart } from "@/components/EvidenceChart";
import { IngredientCategoryBadge } from "@/components/IngredientCategoryBadge";
import { hasChart } from "@/lib/evidenceCharts";
import { companyContact, siteMapGroups } from "@/lib/corporate";
import { devKoreanLabels, getKoreanIngredient } from "@/lib/devKorean";
import { getIngredientCardImage, getIngredientDisplayImage } from "@/lib/ingredientImages";
import { ingredientEvidenceVisuals } from "@/lib/ingredientEvidence";
import { ingredientPptDetails } from "@/lib/ingredientPptDetails";
import type { Ingredient } from "@/lib/ingredients";

type SubHeroProps = {
  title: string;
  copy: string;
  koTitle?: string;
  koCopy?: string;
  image?: string;
  align?: "left" | "right" | "center";
  compact?: boolean;
};

const koreanEvidenceSources: Record<string, string> = {
  "慶熙大学校皮膚バイオテクノロジーセンター実施": "경희대학교 피부바이오테크놀로지센터 실시",
  "慶熙大学校皮膚バイオテクノロジーセンター実施試験": "경희대학교 피부바이오테크놀로지센터 실시 시험",
};

function getLocalizedEvidenceSourceText(source: string, isKorean: boolean) {
  if (!isKorean) return source;
  return (koreanEvidenceSources[source] || source)
    .replaceAll("慶熙大学校", "경희대학교")
    .replaceAll("皮膚バイオテクノロジーセンター", "피부바이오테크놀로지센터")
    .replaceAll("実施試験", "실시 시험")
    .replaceAll("実施", "실시");
}

function getEvidenceReferences(pptDetail: (typeof ingredientPptDetails)[string] | undefined, isKorean: boolean) {
  if (!pptDetail) return [];
  const imageSources = pptDetail.evidenceImages.map((image) => image.source).filter((source): source is string => Boolean(source));
  const noteSources = pptDetail.graphNotes.filter((note) => note.startsWith("出典:")).map((note) => note.replace("出典:", "").trim());
  const references = [...imageSources, ...noteSources];
  const normalizedReferences = references.flatMap((reference) => {
    const entries = reference.split(/\s+\/\s+/).map((entry) => entry.trim()).filter(Boolean);
    if (reference.includes("Journal of Oleo Science.")) {
      return entries.map((entry) => (/^\d/.test(entry) ? `Journal of Oleo Science. ${entry}` : entry));
    }
    return entries;
  });
  return Array.from(new Set(normalizedReferences)).map((reference) => {
    const localizedReference = getLocalizedEvidenceSourceText(reference, isKorean)
      .replace(/^Muscle synthesis - /, isKorean ? "근육합성 - " : "筋肉合成 - ")
      .replace(/^Sexual function - /, isKorean ? "성기능 증진 - " : "性機能増進 - ");
    return `${isKorean ? "출처" : "出典"}: ${localizedReference}`;
  });
}

// Statistical notation (p-values) is de-emphasised so it does not interrupt the
// sentence, while the outcome figures a reader is looking for are highlighted.
const STAT_PATTERN = /[Pp]\s*[=<>≤≥]\s*0?\.\d+(?:\s*\/\s*(?:[Pp]\s*[=<>≤≥]\s*)?0?\.\d+)*/;
const FIGURE_PATTERN = /[+-]?\d[\d,]*(?:\.\d+)?\s?(?:%|kg\/m2|kg|mg|g|CFU|억|명|名|人|편|編|건|種|종|점|배)/;
const EMPHASIS_PATTERN = new RegExp(`(${STAT_PATTERN.source})|(${FIGURE_PATTERN.source})`, "g");

function hasStatNotation(items: string[]) {
  return items.some((item) => new RegExp(STAT_PATTERN.source).test(item));
}

function renderEmphasized(text: string): ReactNode {
  const matches = Array.from(text.matchAll(EMPHASIS_PATTERN));
  if (matches.length === 0) return text;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      match[1] ? (
        <small className="dh-stat-note" key={`stat-${index}`}>
          {match[0]}
        </small>
      ) : (
        <strong key={`em-${index}`}>{match[0]}</strong>
      ),
    );
    cursor = start + match[0].length;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function StatLegend({ isKorean }: { isKorean: boolean }) {
  return (
    <p className="dh-stat-legend">
      {isKorean
        ? "P는 그 결과가 우연히 나왔을 확률입니다. 0.05보다 작으면 위약(플라세보) 대비 의미 있는 차이로 봅니다."
        : "Pはその結果が偶然である確率です。0.05未満であれば、プラセボ比で意味のある差と判断します。"}
    </p>
  );
}

function renderMultiline(items: string[]): ReactNode {
  return items.flatMap((item, index) => (index === 0 ? [item] : [<br key={`br-${index}`} />, item]));
}

const koreanEvidenceCaptions: Record<string, string> = {
  "/images/ingredients/med01-evidence-1.webp": "배뇨통, 질 분비물, 질 작열감 변화(MED-01군 vs 플라세보군)",
  "/images/ingredients/med01-evidence-2.png": "Nugent score 변화(MED-01군 vs 플라세보군, 점수가 낮을수록 감염 정도가 낮음)",
  "/images/ingredients/med02-evidence-1.webp": "체지방량, 체지방률, 체중 변화(MED-02군 vs 플라세보군)",
  "/images/ingredients/med02-evidence-2.png": "BMI 변화량(MED-02군 -0.70 kg/m2, 플라세보군 -0.44 kg/m2)",
  "/images/ingredients/nvp2106-evidence-1.webp": "ADAS-Cog13 총점 개선(12주 섭취 시 플라세보 대비 202% 개선, P=0.0318)",
  "/images/ingredients/nvp2106-evidence-2.webp": "기억력 총점 개선 및 지연 단어 회상 개선(플라세보 대비 207%, 1,514%)",
  "/images/ingredients/nvp2106-evidence-3.webp": "주의집중력 지표 개선(정반응 수, 오반응 수, 누락 오류 수)",
  "/images/ingredients/nvp1702-evidence-1.webp": "알코올성 간손상군의 γ-GTP, ALT, AST 12주 변화(NVP-1702군 vs 플라세보군)",
  "/images/ingredients/nvp1702-evidence-2.webp": "비알코올성 간손상군의 ALT, AST, γ-GTP 12주 변화",
  "/images/ingredients/nvp1702-evidence-3.png": "간 손상 메커니즘 도식(LPS/TNF-α와 ALT, AST, γ-GTP 지표 관계)",
  "/images/ingredients/nvp1703-evidence-1.webp": "소아·청소년 대상 인체적용시험: TNSS 주간/일간 점수 개선",
  "/images/ingredients/nvp1703-evidence-2.webp": "성인 대상 인체적용시험: TNSS 총점, 수양성 콧물, 코막힘 개선",
  "/images/ingredients/nvp1703-evidence-3.jpeg": "면역과민반응 및 코 상태 개선 메커니즘(IgE, IL-10, RCAT/TNSS)",
  "/images/ingredients/nvp1704-evidence-1.webp": "우울·불안 척도 BDI-II, BAI, BDI-II+BAI 개선",
  "/images/ingredients/nvp1704-evidence-2.webp": "수면의 질 PSQI 및 불면증 심각도 ISI 개선",
  "/images/ingredients/nvp1704-evidence-3.webp": "혈중 염증성 사이토카인 IL-6 감소, BDNF 증가 및 IL-6/BDNF 비율 감소",
  "/images/ingredients/bifido-evidence-2.webp": "12주 섭취 후 가스 배출 빈도 증가 및 복부 팽만감 개선",
  "/images/ingredients/bifido-evidence-6.png": "BGN4·BORI 배합 프로바이오틱스의 고령자 대상 인체적용시험 자료",
  "/images/ingredients/bifido-evidence-1.webp": "FDA GRAS·NDI 등록 번호(BGN4, BORI, AD011)",
  "/images/ingredients/testofen-evidence-1.webp": "AMS 총점 변화(Testofen군 vs 플라세보군, 12주)",
  "/images/ingredients/testofen-evidence-2.webp": "신체 기능 점수 및 성 기능 점수 변화(12주)",
  "/images/ingredients/testofen-evidence-3.webp": "정신·심리 점수 변화(Testofen군 vs 플라세보군, 12주)",
  "/images/ingredients/thinkgin-evidence-1.webp": "기억력 저하 관련 혈액 지표 AChE 감소(ThinkGIN군 vs 플라세보군)",
  "/images/ingredients/thinkgin-evidence-2.webp": "SVLT 즉시 회상 점수 변화(총점 및 2차 시도 점수)",
  "/images/ingredients/thinkgin-evidence-3.webp": "PSQI-K 수면 잠복기 점수 개선",
  "/images/ingredients/neulearn-evidence-1-clean.png": "f-MRI로 확인한 대뇌 회백질 용적 증가 클러스터",
  "/images/ingredients/neulearn-evidence-2-clean.png": "단기 기억 및 수행·계획 기능 변화",
  "/images/ingredients/neulearn-evidence-3-clean.png": "주관적 기억감퇴 증상 설문(SMCQ) 점수 변화",
  "/images/ingredients/applephenon-evidence-1.webp": "12주 섭취 후 체중, 허리둘레, BMI, 엉덩이둘레, 복부 내장지방 및 총복부지방면적 감소",
  "/images/ingredients/applephenon-evidence-2.webp": "12주 섭취 시 허리둘레 변화 및 섭취 종료 후 4주 지속 효과",
  "/images/ingredients/applephenon-evidence-3.webp": "16주간 BMI 변화(Applephenon군 vs 플라세보군)",
  "/images/ingredients/applephenon-evidence-4.jpeg": "CT 촬영 기반 복부 내장지방 평가(섭취 전후 비교)",
  "/images/ingredients/collagen-evidence-1-clean.png": "피부 보습 및 피부 총탄력 R2 개선",
  "/images/ingredients/collagen-evidence-2-clean.png": "눈가 주름 전문가 평가 및 피부 평균 거칠기 Ra 개선",
  "/images/ingredients/dermania-evidence-1.webp": "12주 섭취 후 주름 감소 변화(DermaNiA군 vs 플라세보군)",
  "/images/ingredients/dermania-evidence-2.webp": "12주 섭취 후 피부 수분량 증가 변화",
  "/images/ingredients/dermania-evidence-3.png": "주름·보습 케어 메커니즘(콜라겐 유전자 활성화, MMPs 유전자 비활성화)",
  "/images/ingredients/agrimony-alt-evidence.png": "ALT 수치 감소",
  "/images/ingredients/agrimony-ast-evidence.png": "AST 수치 감소",
  "/images/ingredients/agrimony-hsi-evidence.png": "HSI 수치 감소",
  "/images/ingredients/agrimony-evidence-2.jpeg": "지방간 조직 비교 이미지(정상 간, 지방간, 추출물 섭취 후 조직 변화)",
  "/images/ingredients/pinitol-evidence-1.webp": "혈장 GPx 증가 및 요중 MDA 감소(Pinitol군 vs 플라세보군)",
  "/images/ingredients/pinitol-evidence-2.webp": "간 지방 함량, ALT, AST 수치 감소",
  "/images/ingredients/acetobeta-evidence-1.webp": "알코올이 아세트알데히드를 거쳐 초산으로 분해되는 과정",
  "/images/ingredients/acetobeta-evidence-2.webp": "음주 0.25시간 후 혈중 아세트알데히드 변화량",
  "/images/ingredients/acetobeta-evidence-3.webp": "음주 후 메스꺼움 개선 효과",
  "/images/ingredients/immulink-evidence-1.webp": "자연면역 및 획득면역 8개 면역 인자 개선",
};

const wideEvidenceImages = new Set([
  "/images/ingredients/agrimony-evidence-2.jpeg",
  "/images/ingredients/agrimony-evidence-2-photos.webp",
  "/images/ingredients/bifido-evidence-6.png",
  "/images/ingredients/collagen-evidence-1-clean.png",
  "/images/ingredients/collagen-evidence-2-clean.png",
  "/images/ingredients/dermania-evidence-3.png",
  "/images/ingredients/immulink-evidence-1.webp",
  "/images/ingredients/med01-evidence-1.webp",
  "/images/ingredients/med02-evidence-1.webp",
  "/images/ingredients/neulearn-evidence-1-clean.png",
  "/images/ingredients/neulearn-evidence-2-clean.png",
  "/images/ingredients/neulearn-evidence-3-clean.png",
  "/images/ingredients/nvp1702-evidence-1.webp",
  "/images/ingredients/nvp1702-evidence-2.webp",
  "/images/ingredients/nvp1703-evidence-1.webp",
  "/images/ingredients/nvp1703-evidence-2.webp",
  "/images/ingredients/nvp1704-evidence-1.webp",
  "/images/ingredients/nvp1704-evidence-2.webp",
  "/images/ingredients/nvp1704-evidence-3.webp",
  "/images/ingredients/nvp2106-evidence-2.webp",
  "/images/ingredients/nvp2106-evidence-3.webp",
  "/images/ingredients/pinitol-evidence-1.webp",
  "/images/ingredients/pinitol-evidence-2.webp",
]);

const japaneseEvidenceImages: Record<string, string> = {};

// Images whose baked-in captions are cropped away; the neutral photo is served to
// every language and the labels are rendered as bilingual HTML text below it.
const neutralEvidenceImages: Record<string, string> = {
  "/images/ingredients/agrimony-evidence-2.jpeg": "/images/ingredients/agrimony-evidence-2-photos.webp",
};

// Approved review-file charts that are ported to live as SVG (replacing the
// original image). Keep this list to charts confirmed correct in the review;
// everything else keeps its source image.
const liveChartEvidence = new Set<string>([
  "med01-evidence-1.webp",
  "med01-evidence-2.png",
  "med02-evidence-1.webp",
  "med02-evidence-2.png",
  "testofen-evidence-1.webp",
  "testofen-evidence-2.webp",
  "testofen-evidence-3.webp",
  "applephenon-evidence-1.webp",
  "applephenon-evidence-3.webp",
  "dermania-evidence-1.webp",
  "dermania-evidence-2.webp",
  "nvp2106-evidence-1.webp",
  "nvp2106-evidence-2.webp",
  "nvp2106-evidence-3.webp",
  "nvp1702-evidence-2.webp",
]);

function getLiveChartKey(src: string): string | null {
  const key = src.split("/").pop() || "";
  return liveChartEvidence.has(key) && hasChart(key) ? key : null;
}

// Evidence images that carry baked-in Korean text. We pre-render a text-free
// base image (the Korean painted out with the local background colour) and lay
// translated text on top for non-KO viewers, positioned in the image's own
// viewBox so it scales on any screen. KO viewers see the untouched original.
type OverlayText = {
  x: number; // anchor x (per `anchor`)
  y: number; // baseline of the first line
  fs?: number;
  lh?: number;
  anchor?: "start" | "middle" | "end";
  lines: string[];
};
type ImageOverlay = { base: string; viewBox: string; fg?: string; ja: OverlayText[]; en?: OverlayText[] };

const evidenceImageOverlays: Record<string, ImageOverlay> = {
  // f-MRI brain clusters — dark grey-green panel, white labels.
  "/images/ingredients/neulearn-evidence-1-clean.png": {
    base: "/images/ingredients/neulearn-evidence-1-notext.png",
    viewBox: "0 0 1860 615",
    fg: "#ffffff",
    ja: [
      { x: 82, y: 100, fs: 30, lines: ["右脳"] },
      { x: 269, y: 100, fs: 30, lines: ["左脳"] },
      { x: 501, y: 68, fs: 27, lines: ["右 縁上回"] },
      { x: 831, y: 68, fs: 27, lines: ["右 中前頭回"] },
      { x: 1150, y: 68, fs: 27, lines: ["右 中心後回"] },
      { x: 1495, y: 68, fs: 27, lines: ["左 楔前部"] },
    ],
  },
  // ThinkGIN PSQI-K bar chart — white background, dark caption text.
  "/images/ingredients/thinkgin-evidence-3.webp": {
    base: "/images/ingredients/thinkgin-evidence-3-notext.webp",
    viewBox: "0 0 545 353",
    fg: "#111111",
    ja: [
      { x: 392, y: 278, fs: 13, lh: 22, lines: ["ピッツバーグ睡眠質指数、", "記憶力と睡眠には深い関連があります"] },
    ],
  },
};

function EvidenceFigureImage({
  src,
  imageSrc,
  caption,
  isKorean,
}: {
  src: string;
  imageSrc: string;
  caption: string;
  isKorean: boolean;
}) {
  const overlay = evidenceImageOverlays[src];
  // KO keeps the original (baked-Korean) image; other languages get the
  // text-free base image plus a translated-text overlay.
  if (!overlay || isKorean) {
    return <Image alt={caption} height={480} loading="eager" src={imageSrc} width={720} />;
  }
  const boxes = overlay.ja;
  return (
    <div className="dh-evidence-overlay-wrap">
      <Image alt={caption} height={480} loading="eager" src={overlay.base} width={720} />
      <svg className="dh-evidence-overlay" viewBox={overlay.viewBox} preserveAspectRatio="none" aria-hidden="true">
        {boxes.map((box, i) => {
          const fs = box.fs || 14;
          return (
            <g key={i}>
              {box.lines.map((line, j) => (
                <text
                  key={j}
                  x={box.x}
                  y={box.y + j * (box.lh || fs + 4)}
                  fill={overlay.fg || "#111"}
                  fontSize={fs}
                  fontWeight={600}
                  textAnchor={box.anchor || "middle"}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

type HistologyLabels = { arrow?: { ja: string; ko: string }; panels: { ja: string; ko: string }[] };
const histologyPanelCaptions: Record<string, HistologyLabels> = {
  "/images/ingredients/agrimony-evidence-2.jpeg": {
    arrow: { ko: "지방세포", ja: "脂肪細胞" },
    panels: [
      { ko: "고지방식 섭취 후 지방세포 수", ja: "高脂肪食摂取後の脂肪細胞数" },
      { ko: "고지방식과 특허유산균 섭취 후 지방세포 수", ja: "高脂肪食と特許乳酸菌摂取後の脂肪細胞数" },
    ],
  },
};

function getLocalizedEvidenceImageSrc(src: string, isKorean: boolean) {
  if (neutralEvidenceImages[src]) return neutralEvidenceImages[src];
  if (isKorean) return src;
  return japaneseEvidenceImages[src] || src;
}

const featureEvidenceImages: Record<string, string> = {
  bifido: "/images/ingredients/bifido-evidence-1.webp",
  nvp1703: "/images/ingredients/nvp1703-evidence-3.jpeg",
};

const mechanismEvidenceImages: Record<string, string> = {
  acetobeta: "/images/ingredients/acetobeta-evidence-1.webp",
  nvp1702: "/images/ingredients/nvp1702-evidence-3.png",
};

const mechanismEvidenceCopy: Record<string, { bodyJa: string; bodyKo: string; titleJa: string; titleKo: string }> = {
  acetobeta: {
    titleJa: "アルコール分解の流れ",
    titleKo: "알코올 분해 경로",
    bodyJa:
      "アルコールはADHによりアセトアルデヒドへ分解され、さらにALDHにより酢酸へ変換されます。Aceto Betaはこの分解経路をサポートし、飲酒後のアルコールとアセトアルデヒドの負担を軽減する設計です。",
    bodyKo:
      "알코올은 ADH에 의해 아세트알데히드로 분해되고, 다시 ALDH에 의해 초산으로 전환됩니다. Aceto Beta는 이 분해 경로를 도와 음주 후 알코올과 아세트알데히드 부담을 낮추는 설계입니다.",
  },
  nvp1702: {
    titleJa: "肝損傷メカニズム",
    titleKo: "간 손상 메커니즘",
    bodyJa:
      "腸内・血中のLPS(内毒素)と炎症シグナルTNF-αが増えると、肝損傷指標であるALT・AST・γ-GTPも上昇します。NVP-1702はこの炎症経路を整え、肝損傷指標の改善をサポートする設計です。",
    bodyKo:
      "장내·혈중 LPS(내독소)와 염증 신호물질 TNF-α가 늘면 간 손상 지표인 ALT·AST·γ-GTP도 함께 높아집니다. NVP-1702는 이 염증 경로를 조절해 간 손상 지표 개선에 도움을 주는 설계입니다.",
  },
};

function renderIngredientName(name: string) {
  const formulaMatch = name.match(/^(.*?Formula)\s*[–-]\s*(MED\d+)$/);
  if (formulaMatch) {
    return (
      <>
        <span>{formulaMatch[1]}</span>
        <span>– {formulaMatch[2]}</span>
      </>
    );
  }

  return name;
}

const belowSummaryEvidenceImages = new Set(["/images/ingredients/dermania-evidence-3.png"]);

const originCompositionImages: Record<string, { alt: string; src: string }[]> = {
  bifido: [
    {
      alt: "B. bifidum BGN4 - GRAS No.814 / NDI No.1079",
      src: "/images/ingredients/bifido-strain-bgn4.webp",
    },
    {
      alt: "B. longum BORI - GRAS No.813 / NDI No.1082",
      src: "/images/ingredients/bifido-strain-bori.webp",
    },
    {
      alt: "B. lactis AD011 - GRAS No.952 / NDI No.1118",
      src: "/images/ingredients/bifido-strain-ad011.webp",
    },
  ],
};

const originCompositionTables: Record<
  string,
  {
    captionJa: string;
    captionKo: string;
    columns: string[];
    rows: { labelJa: string; labelKo: string; values: string[] }[];
    titleJa: string;
    titleKo: string;
  }
> = {
  thinkgin: {
    titleJa: "ジンセノサイド含有量比較",
    titleKo: "진세노사이드 함량 비교",
    captionJa: "一般紅参(6年根)と新芽人参抽出粉末のジンセノサイド組成比較",
    captionKo: "일반홍삼(6년근)과 새싹인삼추출분말의 진세노사이드 성분 비교",
    columns: ["Rg1", "Re", "Rf", "Rh1", "Rg2", "Rb1", "Rc", "Rb2", "Rb3", "Rd", "F2", "Rg3", "Rk1", "Rg5"],
    rows: [
      {
        labelJa: "一般紅参(6年根)",
        labelKo: "일반홍삼(6년근)",
        values: ["4.1", "1.2", "1.3", "1.7", "3.4", "13.5", "N.D", "1.7", "0.3", "0.9", "N.D", "0.7", "0.2", "0.3"],
      },
      {
        labelJa: "新芽人参抽出粉末",
        labelKo: "새싹인삼추출분말",
        values: ["11.0", "28.6", "1.7", "1.1", "1.8", "6.3", "6.3", "6.4", "1.7", "18.3", "5.4", "0.5", "N.D", "0.7"],
      },
    ],
  },
};

const originCompositionEvidenceImages: Record<string, string[]> = {
  bifido: ["/images/ingredients/bifido-evidence-1.webp", "/images/ingredients/bifido-evidence-6.png"],
};

type LocalizedStudyNote = {
  items: { labelJa: string; labelKo: string; valueJa: string; valueKo: string }[];
  noteJa?: string;
  noteKo?: string;
  titleJa: string;
  titleKo: string;
};

const evidenceStudyNotes: Record<string, LocalizedStudyNote> = {
  nvp1702: {
    titleJa: "ヒト臨床試験の区分",
    titleKo: "인체적용시험 구분",
    items: [
      {
        labelJa: "非アルコール性",
        labelKo: "비알코올성",
        valueJa: "93名対象。ALT・AST・γ-GTP、疲労指標、血中炎症指標を確認",
        valueKo: "93명 대상. ALT·AST·γ-GTP, 피로지표, 혈중 염증지표 확인",
      },
      {
        labelJa: "アルコール性",
        labelKo: "알코올성",
        valueJa: "70名対象。ALT・AST・γ-GTP、血中中性脂肪、血中炎症指標を確認",
        valueKo: "70명 대상. ALT·AST·γ-GTP, 혈중 중성지방, 혈중 염증지표 확인",
      },
      {
        labelJa: "根拠",
        labelKo: "근거",
        valueJa: "ヒト臨床試験2件とSCI論文をもとに整理",
        valueKo: "인체적용시험 2건과 SCI 논문을 기준으로 정리",
      },
    ],
    noteJa: "非アルコール性とアルコール性は別試験として区分して表記しています。",
    noteKo: "비알코올성 시험과 알코올성 시험은 별도 시험으로 구분해 표기했습니다.",
  },
  bifido: {
    titleJa: "ヒト適用試験条件",
    titleKo: "인체적용시험 조건",
    items: [
      { labelJa: "試験対象", labelKo: "시험대상", valueJa: "65歳以上の高齢者", valueKo: "65세 이상의 노인" },
      {
        labelJa: "試験条件",
        labelKo: "시험조건",
        valueJa: "12週間、BGN4・BORIベースのプロバイオティクスを40億CFU/日摂取",
        valueKo: "12주간 BGN4, BORI 기반 프로바이오틱스를 40억 CFU/일 섭취",
      },
      { labelJa: "試験場所", labelKo: "시험장소", valueJa: "ソウル大学校盆唐再生病院", valueKo: "서울대학교 분당재생병원" },
      {
        labelJa: "出典",
        labelKo: "출처",
        valueJa:
          "Probiotic Supplementation Improves Cognitive Function and Mood with Changes in Gut Microbiota in Community-Dwelling Older Adults: A Randomized, Double-Blind, Placebo-Controlled, Multi center Trial. J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40",
        valueKo:
          "Probiotic Supplementation Improves Cognitive Function and Mood with Changes in Gut Microbiota in Community-Dwelling Older Adults: A Randomized, Double-Blind, Placebo-Controlled, Multi center Trial. J Gerontol A Biol Sci Med Sci. 2021;76(1):32-40",
      },
    ],
    noteJa: "ヒト適用試験結果がすべての人に同一に適用されるものではありません。",
    noteKo: "인체적용시험결과가 모든 사람에게 동일하게 적용되는 것은 아닙니다.",
  },
};

function getChartEvidenceImages(pptDetail: (typeof ingredientPptDetails)[string] | undefined, excludedSources: string[]) {
  if (!pptDetail) return [];
  return pptDetail.evidenceImages.filter((image) => !excludedSources.includes(image.src));
}

function OriginCompositionTab({ isKorean, table }: { isKorean: boolean; table: (typeof originCompositionTables)[string] }) {
  return (
    <section className="dh-origin-composition-tab-panel" aria-label={isKorean ? table.titleKo : table.titleJa}>
      <div className="dh-origin-composition-tabs" aria-hidden="true">
        <span className="is-active">{isKorean ? "조성 비교" : "組成比較"}</span>
      </div>
      <div className="dh-origin-composition-table">
        <strong>{isKorean ? table.titleKo : table.titleJa}</strong>
        <p>{isKorean ? table.captionKo : table.captionJa}</p>
        <div>
          {[0, 7].map((start) => {
            const columns = table.columns.slice(start, start + 7);
            return (
              <table key={start}>
                <thead>
                  <tr>
                    <th>{isKorean ? "구분" : "区分"}</th>
                    {columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row) => (
                    <tr key={`${row.labelKo}-${start}`}>
                      <th>{isKorean ? row.labelKo : row.labelJa}</th>
                      {row.values.slice(start, start + 7).map((value, index) => (
                        <td key={`${row.labelKo}-${columns[index]}`}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getEvidenceCaption(src: string, caption: string, isKorean: boolean) {
  if (!isKorean) return caption;
  return koreanEvidenceCaptions[src] || caption;
}

function getEvidenceSource(source: string | undefined, isKorean: boolean) {
  if (!source) return undefined;
  return `${isKorean ? "출처" : "出典"}: ${getLocalizedEvidenceSourceText(source, isKorean)}`;
}

export function CorporateSubHero({
  title,
  copy,
  koTitle,
  koCopy,
  image = "/images/biolab-global-factory-bg.png",
  align = "left",
  compact = false,
}: SubHeroProps) {
  const { language } = useDevLanguage();
  const displayTitle = language === "ko" && koTitle ? koTitle : title;
  const displayCopy = language === "ko" && koCopy ? koCopy : copy;

  return (
    <section className={`dh-sub-hero dh-sub-${align}${compact ? " dh-sub-compact" : ""}`}>
      <div className="dh-sub-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="dh-sub-overlay" aria-hidden="true" />
      <div className="dh-container">
        <h1>{displayTitle}</h1>
        <p>{displayCopy}</p>
      </div>
    </section>
  );
}

// The footer used to be logo + address only; a B2B visitor's last scroll stop
// now doubles as a sitemap so no page is more than one click away.
const footerExternalLinks = [
  { label: "BIOLAB Korea", href: "https://biolabkr.com/" },
  { label: "iHEAL Mall", href: "https://iheal.co.kr/main/index.php" },
];

export function CorporateFooter() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";

  return (
    <footer className="dh-footer">
      <div className="dh-container">
        <div className="dh-footer-top">
          <div className="dh-footer-brand">
            <strong className="dh-footer-logo">
              <Image src="/images/biolab-japan-ci.png" alt="BIOLAB Japan" width={508} height={96} loading="eager" />
            </strong>
            <p className="dh-footer-tagline">
              {isKorean
                ? "한국의 기능성 소재를 일본 시장으로 잇는 비즈니스 브리지"
                : "韓国の機能性素材を日本市場へつなぐビジネスブリッジ"}
            </p>
            <address className="dh-footer-contact">
              <span className="dh-footer-company">{companyContact.legalName}</span>
              <span>{isKorean ? companyContact.address.ko : companyContact.address.ja}</span>
              <span>
                <a href={companyContact.phoneHref}>{companyContact.phone}</a>
                <i aria-hidden="true">|</i>
                {/* Inquiries are funnelled through the form rather than a mail client. */}
                <Link href="/contact">{isKorean ? "문의하기" : "お問い合わせ"}</Link>
              </span>
            </address>
          </div>
          <nav className="dh-footer-nav" aria-label={isKorean ? "푸터 메뉴" : "フッターメニュー"}>
            {siteMapGroups
              .filter((group) => group.children.length > 0)
              .map((group) => (
                <div className="dh-footer-col" key={group.href}>
                  <p>
                    <Link href={group.href}>{group.menuLabel}</Link>
                  </p>
                  <ul>
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{isKorean ? child.koLabel : child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            <div className="dh-footer-col">
              <p>
                <Link href="/contact">CONTACT</Link>
              </p>
              <ul>
                <li>
                  <Link href="/contact">{isKorean ? "문의하기" : "お問い合わせ"}</Link>
                </li>
                {footerExternalLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="dh-footer-bottom">
          <span>© 2026 {companyContact.legalName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export function IngredientList({ items, linkBase }: { items: Ingredient[]; linkBase?: string }) {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";
  const labels = devKoreanLabels.detail;

  return (
    <div className={`dh-detail-grid${items.length === 1 ? " dh-detail-grid-single" : ""}`}>
      {items.map((sourceItem) => {
        const item = isKorean ? getKoreanIngredient(sourceItem) : sourceItem;
        const materials = item.strains || item.origin || [];
        const materialLabel = isKorean ? (item.strains ? devKoreanLabels.materialLabel.strains : devKoreanLabels.materialLabel.origin) : item.strains ? "菌株構成" : "由来原料";
        const showExtended = !linkBase;
        const evidenceVisual = ingredientEvidenceVisuals[item.id];
        const pptDetail = ingredientPptDetails[sourceItem.id];
        const imageSrc = linkBase ? getIngredientCardImage(item.image) : getIngredientDisplayImage(item.image);
        const detailName = isKorean ? item.name : pptDetail?.productName || item.name;
        const detailClaims = isKorean ? item.healthClaims || [] : pptDetail?.healthClaims || item.healthClaims || [];
        const detailOriginItems = isKorean ? materials : pptDetail?.originItems?.length ? pptDetail.originItems : materials;
        const detailFeatures = isKorean ? item.featurePoints || [] : pptDetail?.features || item.featurePoints || [];
        const evidenceReferences = getEvidenceReferences(pptDetail, isKorean);
        const featureImageSrc = featureEvidenceImages[sourceItem.id];
        const featureImage = pptDetail?.evidenceImages.find((image) => image.src === featureImageSrc);
        const mechanismImageSrc = mechanismEvidenceImages[sourceItem.id];
        const mechanismImage = pptDetail?.evidenceImages.find((image) => image.src === mechanismImageSrc);
        const mechanismCopy = mechanismEvidenceCopy[sourceItem.id];
        const excludedEvidenceSources = [featureImageSrc, mechanismImageSrc, ...(originCompositionEvidenceImages[sourceItem.id] || [])].filter((source): source is string => Boolean(source));
        const chartEvidenceImages = getChartEvidenceImages(pptDetail, excludedEvidenceSources);
        const originImages = originCompositionImages[sourceItem.id] || [];
        const originTable = originCompositionTables[sourceItem.id];
        const studyNote = evidenceStudyNotes[sourceItem.id];
        const compactContent = (
          <>
            <Image
              alt=""
              aria-hidden="true"
              className="dh-detail-card-image"
              height={320}
              loading="eager"
              src={imageSrc}
              width={480}
            />
            <IngredientCategoryBadge category={item.category} line={item.line} />
            <h2>{item.name}</h2>
            <strong>{item.area}</strong>
            <span className="dh-detail-card-intake">
              <em>{isKorean ? "1일 섭취 기준" : "一日摂取目安"}</em>
              {item.intake}
            </span>
          </>
        );
        const content = (
          <>
            <Image
              alt=""
              aria-hidden="true"
              className="dh-detail-card-image"
              height={320}
              loading={linkBase ? "eager" : "lazy"}
              src={imageSrc}
              width={480}
            />
            <IngredientCategoryBadge category={item.category} line={item.line} />
            <h2>{item.name}</h2>
            <strong>{item.area}</strong>
            <span>{item.intake}</span>

            <section className="dh-detail-summary" aria-label={`${item.name} 概要`}>
              <h3>{isKorean ? labels.summary : "素材概要"}</h3>
              <p>{item.summary}</p>
            </section>

            {showExtended && detailClaims && detailClaims.length > 0 && (
              <section className="dh-detail-claims" aria-label={`${item.name} Health Claim`}>
                <h3>{isKorean ? labels.claims : "Health Claim"}</h3>
                <ul>
                  {detailClaims.map((text) => (
                    <li key={text}>{renderEmphasized(text)}</li>
                  ))}
                </ul>
              </section>
            )}

            <dl className="dh-detail-specs">
              <div>
                <dt>{isKorean ? labels.area : "用途領域"}</dt>
                <dd>{item.area}</dd>
              </div>
              <div>
                <dt>{isKorean ? labels.intake : "摂取目安"}</dt>
                <dd>{item.intake}</dd>
              </div>
              <div>
                <dt>{isKorean ? labels.line : "素材ライン"}</dt>
                <dd>{isKorean ? devKoreanLabels.line[item.line] : item.line}</dd>
              </div>
            </dl>

            <section className="dh-detail-materials" aria-label={`${item.name} ${materialLabel}`}>
              <h3>{materialLabel}</h3>
              <ul>
                {detailOriginItems.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              {originImages.length > 0 && (
                <div className="dh-origin-composition-cards">
                  {originImages.map((originImage) => (
                    <figure key={originImage.src}>
                      <Image alt={originImage.alt} height={295} loading="eager" src={originImage.src} width={431} />
                    </figure>
                  ))}
                </div>
              )}
            </section>

            {originTable && <OriginCompositionTab isKorean={isKorean} table={originTable} />}

            {evidenceReferences.length > 0 && (
              <section className="dh-detail-evidence" aria-label={`${item.name} references`}>
                <h3>{isKorean ? "레퍼런스" : "参考文献"}</h3>
                {evidenceReferences.map((reference) => (
                  <cite key={reference}>{reference}</cite>
                ))}
              </section>
            )}

            {studyNote && (
              <section className="dh-detail-evidence" aria-label={`${item.name} study conditions`}>
                <div className="dh-study-note">
                  <strong>{isKorean ? studyNote.titleKo : studyNote.titleJa}</strong>
                  <dl>
                    {studyNote.items.map((studyItem) => (
                      <div key={studyItem.labelJa}>
                        <dt>{isKorean ? studyItem.labelKo : studyItem.labelJa}</dt>
                        <dd>{isKorean ? studyItem.valueKo : studyItem.valueJa}</dd>
                      </div>
                    ))}
                  </dl>
                  {(isKorean ? studyNote.noteKo : studyNote.noteJa) && <p>{isKorean ? studyNote.noteKo : studyNote.noteJa}</p>}
                </div>
              </section>
            )}

            {showExtended && pptDetail && (
              <section className="dh-ppt-evidence" aria-label={`${item.name} evidence detail`}>
                <div className="dh-ppt-evidence-head">
                  <p>Evidence Summary</p>
                  <h3>{detailName}</h3>
                </div>

                <div className="dh-ppt-summary-board">
                  <section>
                    <h4>{isKorean ? labels.claims : "Health Claim"}</h4>
                    <div className="dh-ppt-summary-list">
                      {detailClaims.map((claim) => (
                        <span key={claim}>{renderEmphasized(claim)}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4>{isKorean ? labels.rawMaterial : pptDetail.originTitle}</h4>
                    <div className="dh-ppt-origin-tags">
                      {detailOriginItems.map((origin) => (
                        <span key={origin}>{origin}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4>{isKorean ? labels.features : "Features / 人体効能評価"}</h4>
                    <div className="dh-ppt-summary-list">
                      {detailFeatures.map((feature) => (
                        <span key={feature}>{renderEmphasized(feature)}</span>
                      ))}
                    </div>
                    {hasStatNotation(detailFeatures) && <StatLegend isKorean={isKorean} />}
                  </section>
                </div>

                <div className="dh-ppt-chart-heading">
                  <p>Efficacy Evaluation</p>
                  <h4>{isKorean ? "인체적용시험 및 근거 자료" : "人体効能評価"}</h4>
                </div>

                <div className="dh-ppt-graph-grid" data-evidence-count={chartEvidenceImages.length}>
                  {chartEvidenceImages.map((evidenceImage, index) => {
                    const imageSrc = getLocalizedEvidenceImageSrc(evidenceImage.src, isKorean);

                    return (
                      <figure
                        className="dh-ppt-chart dh-ppt-chart-figure"
                        data-evidence-index={index + 1}
                        data-evidence-shape={wideEvidenceImages.has(imageSrc) ? "wide" : undefined}
                        data-evidence-src={imageSrc}
                        key={imageSrc}
                      >
                        {getLiveChartKey(evidenceImage.src) ? (
                          <EvidenceChart chartKey={getLiveChartKey(evidenceImage.src)!} lang={isKorean ? "ko" : "ja"} />
                        ) : (
                          <EvidenceFigureImage
                            caption={getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}
                            imageSrc={imageSrc}
                            isKorean={isKorean}
                            src={evidenceImage.src}
                          />
                        )}
                        {histologyPanelCaptions[evidenceImage.src] && (
                          <div className="dh-histo-labels">
                            {histologyPanelCaptions[evidenceImage.src].arrow && (
                              <p className="dh-histo-arrow">
                                <span aria-hidden="true">↘</span>{" "}
                                {isKorean
                                  ? histologyPanelCaptions[evidenceImage.src].arrow!.ko
                                  : histologyPanelCaptions[evidenceImage.src].arrow!.ja}
                              </p>
                            )}
                            <div className="dh-histo-panels">
                              {histologyPanelCaptions[evidenceImage.src].panels.map((panel) => (
                                <p key={panel.ko}>{isKorean ? panel.ko : panel.ja}</p>
                              ))}
                            </div>
                          </div>
                        )}
                        <figcaption>
                          <p>{getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}</p>
                          {getEvidenceSource(evidenceImage.source, isKorean) && <cite>{getEvidenceSource(evidenceImage.source, isKorean)}</cite>}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>

              </section>
            )}

            {language !== "ko" && showExtended && !pptDetail && evidenceVisual && (
              <section className="dh-evidence-visual" aria-label={`${item.name} evidence visual`}>
                <div className="dh-evidence-visual-head">
                  <p>{evidenceVisual.sourceLabel}</p>
                  <h3>{evidenceVisual.title}</h3>
                  <span>{evidenceVisual.summary}</span>
                </div>
                <div className="dh-evidence-bars">
                  {evidenceVisual.metrics.map((metric) => (
                    <div className={`dh-evidence-bar is-${metric.direction || "balanced"}`} key={metric.label}>
                      <div>
                        <strong>{metric.label}</strong>
                        <em>{metric.displayValue || metric.detail}</em>
                      </div>
                      <span aria-hidden="true">
                        <i
                          style={
                            {
                              "--bar-value": `${Math.max(8, Math.min(100, metric.value))}%`,
                            } as CSSProperties
                          }
                        />
                      </span>
                      <small>{metric.detail}</small>
                    </div>
                  ))}
                </div>
                <p>{evidenceVisual.footnote}</p>
              </section>
            )}

            {showExtended && item.featurePoints && (
              <section className="dh-detail-features" aria-label={`${item.name} Features / efficacy evaluation`}>
                <h3>{isKorean ? labels.features : "Features / 人体効能評価"}</h3>
                <ul>
                  {item.featurePoints.map((text) => (
                    <li key={text}>{renderEmphasized(text)}</li>
                  ))}
                </ul>
                {hasStatNotation(item.featurePoints) && <StatLegend isKorean={isKorean} />}
                {featureImage && (
                  <figure className="dh-feature-mechanism" data-feature-kind={sourceItem.id === "bifido" ? "certification" : undefined}>
                    <Image
                      alt={getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}
                      height={480}
                      loading="eager"
                      src={featureImage.src}
                      width={720}
                    />
                    <figcaption>{getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}</figcaption>
                  </figure>
                )}
              </section>
            )}

            {showExtended && mechanismImage && mechanismCopy && (
              <section className="dh-mechanism-panel" aria-label={`${item.name} mechanism`}>
                <div>
                  <p>{isKorean ? "Mechanism" : "Mechanism"}</p>
                  <h3>{isKorean ? mechanismCopy.titleKo : mechanismCopy.titleJa}</h3>
                  <span>{isKorean ? mechanismCopy.bodyKo : mechanismCopy.bodyJa}</span>
                </div>
                <figure>
                  <Image
                    alt={getEvidenceCaption(mechanismImage.src, mechanismImage.caption, isKorean)}
                    height={480}
                    loading="eager"
                    src={mechanismImage.src}
                    width={720}
                  />
                  <figcaption>{getEvidenceCaption(mechanismImage.src, mechanismImage.caption, isKorean)}</figcaption>
                </figure>
              </section>
            )}
          </>
        );

        if (linkBase) {
          return (
            <Link className="dh-detail-card dh-detail-card-link" href={`${linkBase}/${item.id}`} key={item.id}>
              {compactContent}
              <span className="dh-detail-card-cta">
                DETAIL
                <ArrowRight aria-hidden="true" size={13} strokeWidth={3} />
              </span>
            </Link>
          );
        }

        return (
          <article className="dh-detail-card" key={item.id}>
            {content}
          </article>
        );
      })}
    </div>
  );
}

export function IngredientDetailArticle({ item: sourceItem }: { item: Ingredient }) {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";
  const item = isKorean ? getKoreanIngredient(sourceItem) : sourceItem;
  const labels = devKoreanLabels.detail;
  const materials = item.strains || item.origin || [];
  const materialLabel = isKorean ? (item.strains ? devKoreanLabels.materialLabel.strains : devKoreanLabels.materialLabel.origin) : item.strains ? "菌株構成" : "由来原料";
  const pptDetail = ingredientPptDetails[sourceItem.id];
  const evidenceVisual = ingredientEvidenceVisuals[item.id];
  const displayName = isKorean ? item.name : pptDetail?.productName || item.name;
  const claims = isKorean ? item.healthClaims || [] : pptDetail?.healthClaims || item.healthClaims || [];
  const featureBlocks = isKorean ? item.featurePoints || [] : pptDetail?.features || item.featurePoints || [];
  const originItems = isKorean ? materials : pptDetail?.originItems?.length ? pptDetail.originItems : materials;
  const evidenceReferences = getEvidenceReferences(pptDetail, isKorean);
  const featureImageSrc = featureEvidenceImages[sourceItem.id];
  const featureImage = pptDetail?.evidenceImages.find((image) => image.src === featureImageSrc);
  const mechanismImageSrc = mechanismEvidenceImages[sourceItem.id];
  const mechanismImage = pptDetail?.evidenceImages.find((image) => image.src === mechanismImageSrc);
  const mechanismCopy = mechanismEvidenceCopy[sourceItem.id];
  const belowSummaryImages = pptDetail?.evidenceImages.filter((image) => belowSummaryEvidenceImages.has(image.src)) || [];
  const excludedEvidenceSources = [
    featureImageSrc,
    mechanismImageSrc,
    ...belowSummaryImages.map((image) => image.src),
    ...(originCompositionEvidenceImages[sourceItem.id] || []),
  ].filter((source): source is string => Boolean(source));
  const chartEvidenceImages = getChartEvidenceImages(pptDetail, excludedEvidenceSources);
  const originImages = originCompositionImages[sourceItem.id] || [];
  const originTable = originCompositionTables[sourceItem.id];
  const studyNote = evidenceStudyNotes[sourceItem.id];

  return (
    <article className="dh-ingredient-profile">
      <div className="dh-ingredient-profile-hero">
        <div className="dh-ingredient-profile-visual">
          <Image
            alt=""
            aria-hidden="true"
            height={520}
            src={getIngredientDisplayImage(item.image)}
            width={780}
          />
        </div>
        <div className="dh-ingredient-profile-summary">
          <IngredientCategoryBadge category={item.category} line={item.line} />
          <p>{isKorean ? devKoreanLabels.line[sourceItem.line] : item.line}</p>
          <h2>{renderIngredientName(displayName)}</h2>
          <strong>{item.area}</strong>
          <span>{item.summary}</span>
        </div>
      </div>

      <div className="dh-ingredient-spec-panel">
        <p>Basic Information</p>
        <h3>{isKorean ? labels.specs : "基本情報"}</h3>
        <dl>
          <div>
            <dt>{isKorean ? labels.materialName : "素材名"}</dt>
            <dd>{displayName}</dd>
          </div>
          <div>
            <dt>{isKorean ? labels.functionalContent : "機能性内容"}</dt>
            <dd>{item.area}</dd>
          </div>
          <div>
            <dt>{isKorean ? labels.intake : "一日摂取目安"}</dt>
            <dd>{item.intake}</dd>
          </div>
          <div>
            <dt>{materialLabel}</dt>
            <dd>{renderMultiline(originItems)}</dd>
          </div>
        </dl>
      </div>

      <section className="dh-ingredient-origin-panel">
        <div>
          <p>Raw Material</p>
          <h3>{isKorean ? labels.rawMaterial : pptDetail?.originTitle || materialLabel}</h3>
        </div>
        <ul>
          {originItems.map((origin) => (
            <li key={origin}>{origin}</li>
          ))}
        </ul>
        {originImages.length > 0 && (
          <div className="dh-origin-composition-cards">
            {originImages.map((originImage) => (
              <figure key={originImage.src}>
                <Image alt={originImage.alt} height={295} loading="eager" src={originImage.src} width={431} />
              </figure>
            ))}
          </div>
        )}
      </section>

      {originTable && <OriginCompositionTab isKorean={isKorean} table={originTable} />}

      <div className="dh-ingredient-section-grid">
        <section>
          <p>Health Claim</p>
          <h3>{isKorean ? labels.function : "Health Claim"}</h3>
          <ul>
            {claims.map((claim) => (
              <li key={claim}>{renderEmphasized(claim)}</li>
            ))}
          </ul>
        </section>
        <section>
          <p>Features / Efficacy Evaluation</p>
          <h3>{isKorean ? labels.feature : "Features / 人体効能評価"}</h3>
          <ul>
            {featureBlocks.map((feature) => (
              <li key={feature}>{renderEmphasized(feature)}</li>
            ))}
          </ul>
          {hasStatNotation(featureBlocks) && <StatLegend isKorean={isKorean} />}
          {featureImage && (
            <figure className="dh-feature-mechanism" data-feature-kind={sourceItem.id === "bifido" ? "certification" : undefined}>
              <Image
                alt={getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}
                height={480}
                loading="eager"
                src={featureImage.src}
                width={720}
              />
              <figcaption>{getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}</figcaption>
            </figure>
          )}
        </section>
      </div>

      {mechanismImage && mechanismCopy && (
        <section className="dh-mechanism-panel" aria-label={`${item.name} mechanism`}>
          <div>
            <p>Mechanism</p>
            <h3>{isKorean ? mechanismCopy.titleKo : mechanismCopy.titleJa}</h3>
            <span>{isKorean ? mechanismCopy.bodyKo : mechanismCopy.bodyJa}</span>
          </div>
          <figure>
            <Image
              alt={getEvidenceCaption(mechanismImage.src, mechanismImage.caption, isKorean)}
              height={480}
              loading="eager"
              src={mechanismImage.src}
              width={720}
            />
            <figcaption>{getEvidenceCaption(mechanismImage.src, mechanismImage.caption, isKorean)}</figcaption>
          </figure>
        </section>
      )}

      {belowSummaryImages.length > 0 && (
        <div className="dh-below-summary-evidence">
          {belowSummaryImages.map((evidenceImage) => (
            <figure key={evidenceImage.src}>
              <Image
                alt={getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}
                height={287}
                loading="eager"
                src={evidenceImage.src}
                width={1100}
              />
              <figcaption>{getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {evidenceReferences.length > 0 && (
        <section className="dh-ingredient-evidence-tags" aria-label={`${item.name} references`}>
          <p>Evidence & References</p>
          <h3>{isKorean ? "레퍼런스" : "参考文献"}</h3>
          {evidenceReferences.map((reference) => (
            <cite key={reference}>{reference}</cite>
          ))}
        </section>
      )}

      {studyNote && (
        <section className="dh-ingredient-evidence-tags" aria-label={`${item.name} study conditions`}>
          <p>Evidence & References</p>
          <h3>{isKorean ? "시험 구분" : "試験区分"}</h3>
          <div className="dh-study-note">
            <strong>{isKorean ? studyNote.titleKo : studyNote.titleJa}</strong>
            <dl>
              {studyNote.items.map((studyItem) => (
                <div key={studyItem.labelJa}>
                  <dt>{isKorean ? studyItem.labelKo : studyItem.labelJa}</dt>
                  <dd>{isKorean ? studyItem.valueKo : studyItem.valueJa}</dd>
                </div>
              ))}
            </dl>
            {(isKorean ? studyNote.noteKo : studyNote.noteJa) && <p>{isKorean ? studyNote.noteKo : studyNote.noteJa}</p>}
          </div>
        </section>
      )}

      {pptDetail && (
        <section className="dh-ppt-evidence dh-ingredient-evidence-block" aria-label={`${item.name} evidence detail`}>
          <div className="dh-ppt-chart-heading">
            <p>Efficacy Evaluation</p>
            <h4>{isKorean ? "인체적용시험 및 근거 자료" : "人体効能評価"}</h4>
          </div>

          <div className="dh-ppt-graph-grid" data-evidence-count={chartEvidenceImages.length}>
            {chartEvidenceImages.map((evidenceImage, index) => {
              const imageSrc = getLocalizedEvidenceImageSrc(evidenceImage.src, isKorean);

              return (
                <figure
                  className="dh-ppt-chart dh-ppt-chart-figure"
                  data-evidence-index={index + 1}
                  data-evidence-shape={wideEvidenceImages.has(imageSrc) ? "wide" : undefined}
                  data-evidence-src={imageSrc}
                  key={imageSrc}
                >
                  {getLiveChartKey(evidenceImage.src) ? (
                    <EvidenceChart chartKey={getLiveChartKey(evidenceImage.src)!} lang={isKorean ? "ko" : "ja"} />
                  ) : (
                    <EvidenceFigureImage
                      caption={getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}
                      imageSrc={imageSrc}
                      isKorean={isKorean}
                      src={evidenceImage.src}
                    />
                  )}
                  {histologyPanelCaptions[evidenceImage.src] && (
                    <div className="dh-histo-labels">
                      {histologyPanelCaptions[evidenceImage.src].arrow && (
                        <p className="dh-histo-arrow">
                          <span aria-hidden="true">↘</span>{" "}
                          {isKorean
                            ? histologyPanelCaptions[evidenceImage.src].arrow!.ko
                            : histologyPanelCaptions[evidenceImage.src].arrow!.ja}
                        </p>
                      )}
                      <div className="dh-histo-panels">
                        {histologyPanelCaptions[evidenceImage.src].panels.map((panel) => (
                          <p key={panel.ko}>{isKorean ? panel.ko : panel.ja}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  <figcaption>
                    <p>{getEvidenceCaption(evidenceImage.src, evidenceImage.caption, isKorean)}</p>
                    {getEvidenceSource(evidenceImage.source, isKorean) && <cite>{getEvidenceSource(evidenceImage.source, isKorean)}</cite>}
                  </figcaption>
                </figure>
              );
            })}
          </div>

        </section>
      )}

      {language !== "ko" && !pptDetail && evidenceVisual && (
        <section className="dh-evidence-visual dh-ingredient-evidence-block" aria-label={`${item.name} evidence visual`}>
          <div className="dh-evidence-visual-head">
            <p>{evidenceVisual.sourceLabel}</p>
            <h3>{evidenceVisual.title}</h3>
            <span>{evidenceVisual.summary}</span>
          </div>
          <div className="dh-evidence-bars">
            {evidenceVisual.metrics.map((metric) => (
              <div className={`dh-evidence-bar is-${metric.direction || "balanced"}`} key={metric.label}>
                <div>
                  <strong>{metric.label}</strong>
                  <em>{metric.displayValue || metric.detail}</em>
                </div>
                <span aria-hidden="true">
                  <i
                    style={
                      {
                        "--bar-value": `${Math.max(8, Math.min(100, metric.value))}%`,
                      } as CSSProperties
                    }
                  />
                </span>
                <small>{metric.detail}</small>
              </div>
            ))}
          </div>
          <p>{evidenceVisual.footnote}</p>
        </section>
      )}
    </article>
  );
}

export function ContactInfoBlocks() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";

  return (
    <div className="dh-contact-info">
      <div>
        <Phone size={24} aria-hidden="true" />
        <h2>{isKorean ? "전화" : "お電話"}</h2>
        <p>
          <a href={companyContact.phoneHref}>{companyContact.phone}</a>
        </p>
      </div>
      {/* No mailto: inquiries are submitted through the form on this page so they
          land in one inbox with the enquiry type attached. */}
      <div>
        <Mail size={26} aria-hidden="true" />
        <h2>{isKorean ? "문의 접수" : "お問い合わせ"}</h2>
        <p>
          {isKorean
            ? "이 페이지의 문의 폼으로 보내주시면 담당자가 확인 후 연락드립니다."
            : "このページのフォームからお送りください。担当者より折り返しご連絡いたします。"}
        </p>
        <p className="dh-contact-note">
          {isKorean
            ? "상담 항목: 기능성 식품 원료 사업, ODM/OEM, 일본 B2B 유통, iHEAL 브랜드 사용에 대한 상품 로열티 사업."
            : "機能性素材、ODM/OEM、日本B2B流通、iHEALブランド協業についてご相談ください。"}
        </p>
      </div>
    </div>
  );
}

export function CompanyLocationMap() {
  const { language } = useDevLanguage();
  const isKorean = language === "ko";
  const query = encodeURIComponent(companyContact.mapQuery);

  // This block leads the contact column, so it carries the registered name and
  // address that the phone and inquiry blocks below no longer repeat.
  return (
    <section className="dh-contact-map" aria-label={isKorean ? "오시는 길" : "アクセス"}>
      <MapPin size={24} aria-hidden="true" />
      <h2>{isKorean ? "오시는 길" : "アクセス"}</h2>
      <p className="dh-contact-map-company">{companyContact.legalName}</p>
      <p className="dh-contact-map-address">
        {isKorean ? companyContact.address.ko : companyContact.address.ja}
      </p>
      {isKorean ? <p className="dh-contact-note">{companyContact.address.ja}</p> : null}
      <div className="dh-contact-map-frame">
        <iframe
          title={isKorean ? `${companyContact.legalName} 위치 지도` : `${companyContact.legalName} 所在地の地図`}
          src={`https://www.google.com/maps?q=${query}&hl=${isKorean ? "ko" : "ja"}&z=17&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        className="dh-contact-map-link"
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noreferrer"
      >
        {isKorean ? "Google 지도에서 열기" : "Google マップで開く"}
        <ArrowRight size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
