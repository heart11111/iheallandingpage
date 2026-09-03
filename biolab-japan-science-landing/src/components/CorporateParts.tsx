"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BifidoEvidencePanel } from "@/components/BifidoEvidencePanel";
import { useDevLanguage } from "@/components/DevLanguageProvider";
import { EvidenceChart } from "@/components/EvidenceChart";
import { IngredientCategoryBadge } from "@/components/IngredientCategoryBadge";
import { hasChart } from "@/lib/evidenceCharts";
import { useReveal } from "@/lib/useReveal";
import { companyContact, siteMapGroups } from "@/lib/corporate";
import { devKoreanLabels, getKoreanIngredient } from "@/lib/devKorean";
import { getIngredientSpecLabel } from "@/lib/ingredientDisplay";
import { getIngredientCardImage, getIngredientDisplayImage } from "@/lib/ingredientImages";
import { ingredientEvidenceVisuals } from "@/lib/ingredientEvidence";
import { ingredientPptDetails, type PptEvidenceImage } from "@/lib/ingredientPptDetails";
import type { Ingredient } from "@/lib/ingredients";

type SubHeroProps = {
  title: string;
  copy: string;
  koTitle?: string;
  koCopy?: string;
  englishTitle?: string;
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

function OriginCatalogCards({
  hideCaption,
  images,
}: {
  hideCaption?: boolean;
  images: { alt: string; src: string }[];
}) {
  return (
    <div className="dh-origin-composition-cards" data-caption={hideCaption ? "in-image" : "below"}>
      {images.map((originImage) => (
        <div key={originImage.src}>
          <figure>
            <Image alt={originImage.alt} height={406} loading="eager" src={getIngredientDisplayImage(originImage.src)} width={638} />
            {hideCaption ? null : (
              <figcaption>
                <strong>{originImage.alt.split(" - ")[0]}</strong>
              </figcaption>
            )}
          </figure>
        </div>
      ))}
    </div>
  );
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
  "/images/ingredients/immulink-evidence-1.webp": "선천면역(NK세포 수·NK세포 활성)·후천면역(총 림프구·T세포·CD4/CD8 비율·혈청 IgA) 8인자 유의 개선",
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
  "/images/ingredients/acetobeta-evidence-1.webp",
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
  // Probiotics
  "med01-evidence-1.webp",
  "med01-evidence-2.png",
  "med02-evidence-1.webp",
  "med02-evidence-2.png",
  "nvp2106-evidence-1.webp",
  "nvp2106-evidence-2.webp",
  "nvp2106-evidence-3.webp",
  "nvp1702-evidence-1.webp",
  "nvp1702-evidence-2.webp",
  "nvp1703-evidence-2.webp",
  "nvp1704-evidence-1.webp",
  "nvp1704-evidence-2.webp",
  "nvp1704-evidence-3.webp",
  "bifido-evidence-2.webp",
  // Nature ingredients
  "testofen-evidence-1.webp",
  "testofen-evidence-2.webp",
  "testofen-evidence-3.webp",
  "thinkgin-evidence-1.webp",
  "thinkgin-evidence-2.webp",
  "thinkgin-evidence-3.webp",
  "neulearn-evidence-2-clean.png",
  "neulearn-evidence-3-clean.png",
  "applephenon-evidence-1.webp",
  "applephenon-evidence-2.webp",
  "applephenon-evidence-3.webp",
  "collagen-evidence-1-clean.png",
  "collagen-evidence-2-clean.png",
  "dermania-evidence-1.webp",
  "dermania-evidence-2.webp",
  "agrimony-alt-evidence.png",
  "agrimony-ast-evidence.png",
  "agrimony-hsi-evidence.png",
  "pinitol-evidence-1.webp",
  "pinitol-evidence-2.webp",
  "acetobeta-evidence-2.webp",
  "acetobeta-evidence-3.webp",
  "immulink-evidence-1.webp",
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
  fw?: number;
  anchor?: "start" | "middle" | "end";
  fg?: string;
  lines: string[];
};
type OverlayCover = {
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
  rx?: number;
};
type ImageOverlay = {
  base?: string;
  viewBox: string;
  fg?: string;
  covers?: OverlayCover[];
  ja: OverlayText[];
  en?: OverlayText[];
};

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
  // Aceto Beta liver pathway — green callouts (white) + bottom metabolite names (dark).
  "/images/ingredients/acetobeta-evidence-1.webp": {
    base: "/images/ingredients/acetobeta-evidence-1-notext.webp",
    viewBox: "0 0 701 480",
    ja: [
      { x: 358, y: 66, fs: 14, lh: 22, fg: "#ffffff", lines: ["血中アルコール", "濃度の低下"] },
      { x: 558, y: 66, fs: 14, lh: 22, fg: "#ffffff", lines: ["二日酔い", "軽減"] },
      { x: 105, y: 384, fs: 16, fg: "#4a4a4a", lines: ["アルコール"] },
      { x: 340, y: 384, fs: 16, fg: "#4a4a4a", lines: ["アセトアルデヒド"] },
      { x: 593, y: 384, fs: 16, fg: "#4a4a4a", lines: ["酢酸"] },
    ],
  },
  // NVP-1703 pediatric TNSS — Daily panel was not HTML-reproduced. Cover
  // baked Korean and set Japanese on the original art; KO keeps the source.
  "/images/ingredients/nvp1703-evidence-1.webp": {
    viewBox: "0 0 830 368",
    fg: "#374151",
    covers: [
      { x: 16, y: 8, w: 480, h: 42, fill: "#ffffff" },
      { x: 14, y: 68, w: 400, h: 30, fill: "#1b4e8f", rx: 15 },
      { x: 428, y: 68, w: 386, h: 30, fill: "#1b4e8f", rx: 15 },
      { x: 16, y: 318, w: 400, h: 46, fill: "#ffffff" },
      { x: 430, y: 318, w: 392, h: 46, fill: "#ffffff" },
    ],
    ja: [
      {
        x: 22,
        y: 36,
        fs: 20,
        fw: 800,
        anchor: "start",
        fg: "#163a66",
        lines: ["小児・青少年対象 人体適用試験"],
      },
      {
        x: 214,
        y: 88,
        fs: 10.5,
        fw: 800,
        fg: "#ffffff",
        lines: ["01. TNSS（全体鼻症状スコア）総点の有意改善（Weekly）"],
      },
      {
        x: 621,
        y: 88,
        fs: 10.5,
        fw: 800,
        fg: "#ffffff",
        lines: ["02. TNSS（全体鼻症状スコア）総点の有意改善（daily）"],
      },
      {
        x: 22,
        y: 334,
        fs: 10,
        lh: 15,
        fw: 600,
        anchor: "start",
        lines: ["TNSS（鼻水、鼻づまり、くしゃみ、鼻のかゆみ）を", "群間で統計的に有意に改善"],
      },
      {
        x: 438,
        y: 334,
        fs: 10,
        lh: 15,
        fw: 600,
        anchor: "start",
        lines: ["TNSSスコアをdaily基準で分析した結果、試験群では", "摂取1週以降から群間で統計的に有意な改善が認められた"],
      },
    ],
  },
  // NVP-1703 mechanism diagram — Korean callouts only; IgE/IL/RCAT/TNSS stay.
  "/images/ingredients/nvp1703-evidence-3.jpeg": {
    viewBox: "0 0 637 586",
    fg: "#1a365d",
    covers: [
      { x: 68, y: 62, w: 196, h: 22, fill: "#ffffff" },
      { x: 438, y: 188, w: 150, h: 52, fill: "#ffffff" },
      { x: 12, y: 526, w: 260, h: 50, fill: "#ffffff" },
    ],
    ja: [
      {
        x: 90,
        y: 78,
        fs: 12,
        fw: 800,
        anchor: "start",
        lines: ["アレルギー抗体の減少"],
      },
      {
        x: 513,
        y: 206,
        fs: 10.5,
        lh: 17,
        fw: 700,
        lines: ["鼻炎コントロール改善", "鼻症状スコア減少"],
      },
      {
        x: 18,
        y: 542,
        fs: 11,
        lh: 18,
        fw: 700,
        anchor: "start",
        lines: ["*Tregから分泌されるIL-10の増加", "*Th2から分泌されるIL-4、IL-5、IL-13の減少"],
      },
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
  // KO keeps the original (baked-Korean) image; other languages get a
  // text-free base (or cover rects on the original) plus translated text.
  if (!overlay || isKorean) {
    return <Image alt={caption} height={480} loading="eager" src={imageSrc} width={720} />;
  }
  const boxes = overlay.ja;
  const covers = overlay.covers || [];
  const viewBoxParts = overlay.viewBox.trim().split(/\s+/).map(Number);
  const overlayWidth = viewBoxParts[2] || 720;
  const overlayHeight = viewBoxParts[3] || 480;
  return (
    <div className="dh-evidence-overlay-wrap">
      <Image
        alt={caption}
        height={overlayHeight}
        loading="eager"
        src={overlay.base || imageSrc}
        width={overlayWidth}
      />
      <svg className="dh-evidence-overlay" viewBox={overlay.viewBox} preserveAspectRatio="none" aria-hidden="true">
        {covers.map((cover, i) => (
          <rect
            key={`cover-${i}`}
            x={cover.x}
            y={cover.y}
            width={cover.w}
            height={cover.h}
            rx={cover.rx || 0}
            fill={cover.fill || "#fff"}
          />
        ))}
        {boxes.map((box, i) => {
          const fs = box.fs || 14;
          return (
            <g key={i}>
              {box.lines.map((line, j) => (
                <text
                  key={j}
                  x={box.x}
                  y={box.y + j * (box.lh || fs + 4)}
                  fill={box.fg || overlay.fg || "#111"}
                  fontSize={fs}
                  fontWeight={box.fw || 600}
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
      { ko: "고지방식과 추출물 섭취 후 지방세포 수", ja: "高脂肪食と抽出物摂取後の脂肪細胞数" },
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
};

type MechanismCopy = {
  bodyJa: string;
  bodyKo: string;
  titleJa: string;
  titleKo: string;
  kickerJa?: string;
  kickerKo?: string;
  layout?: "split" | "stack";
  diagramFit?: "default" | "compact";
};

const mechanismEvidenceImages: Record<string, string> = {
  nvp1702: "/images/ingredients/nvp1702-evidence-3.png",
  nvp1703: "/images/ingredients/nvp1703-evidence-3.jpeg",
  dermania: "/images/ingredients/dermania-evidence-3.png",
  acetobeta: "/images/ingredients/acetobeta-evidence-1.webp",
  agrimony: "/images/ingredients/agrimony-evidence-2.jpeg",
  neulearn: "/images/ingredients/neulearn-evidence-1-clean.png",
  applephenon: "/images/ingredients/applephenon-evidence-4.jpeg",
};

const mechanismEvidenceCopy: Record<string, MechanismCopy> = {
  nvp1702: {
    titleJa: "肝損傷メカニズム",
    titleKo: "간 손상 메커니즘",
    bodyJa:
      "腸内・血中のLPS(内毒素)と炎症シグナルTNF-αが増えると、肝損傷指標であるALT・AST・γ-GTPも上昇します。NVP-1702はこの炎症経路を整え、肝損傷指標の改善をサポートする設計です。",
    bodyKo:
      "장내·혈중 LPS(내독소)와 염증 신호물질 TNF-α가 늘면 간 손상 지표인 ALT·AST·γ-GTP도 함께 높아집니다. NVP-1702는 이 염증 경로를 조절해 간 손상 지표 개선에 도움을 주는 설계입니다.",
  },
  nvp1703: {
    titleJa: "免疫過敏反応および鼻状態改善メカニズム",
    titleKo: "면역과민반응 및 코 상태 개선 메커니즘",
    bodyJa:
      "免疫の過敏な反応にともなう鼻の状態の改善を目指します。アレルギー抗体IgEが減少し、Tregから分泌されるIL-10が増える一方、Th2由来のIL-4・IL-5・IL-13は減少します。その流れで鼻炎コントロール評価(RCAT)が改善し、全体鼻症状スコア(TNSS)が下がります。",
    bodyKo:
      "면역 과민반응에 따른 코 상태 개선을 목표로 합니다. 알레르기 항체 IgE가 줄고, Treg에서 분비되는 IL-10은 늘며 Th2에서 나오는 IL-4·IL-5·IL-13은 감소합니다. 그 결과 비염 조절 평가(RCAT)가 개선되고 전체 코 증상 점수(TNSS)가 낮아지는 흐름입니다.",
  },
  dermania: {
    titleJa: "しわ・保湿ケアのメカニズム",
    titleKo: "주름·보습 케어 메커니즘",
    layout: "stack",
    bodyJa:
      "コラーゲン遺伝子を活性化し、MMPs遺伝子の働きを抑えます。コラーゲンとNMF(天然保湿因子)が増え、しわの形成が抑えられ、保湿力が高まります。",
    bodyKo:
      "콜라겐 유전자를 활성화하고 MMPs 유전자 작용을 억제합니다. 콜라겐과 NMF(천연보습인자)가 늘고, 주름 형성은 줄며 보습력이 높아집니다.",
  },
  acetobeta: {
    titleJa: "アルコール分解の流れ",
    titleKo: "알코올 분해 과정",
    diagramFit: "compact",
    bodyJa:
      "アルコールを分解する酵素ADH(アルコール脱水素酵素)が増え、血中アルコール濃度が下がります。アセトアルデヒドを分解する酵素ALDH(アセトアルデヒド脱水素酵素)が増え、二日酔いをやわらげます。",
    bodyKo:
      "알코올을 분해하는 효소 ADH(알코올 탈수소효소)가 늘어 혈중 알코올 농도가 낮아집니다. 아세트알데하이드를 분해하는 효소 ALDH(아세트알데하이드 탈수소효소)가 늘어 숙취를 줄여줍니다.",
  },
  agrimony: {
    titleJa: "脂肪肝組織の比較",
    titleKo: "지방간 조직 비교",
    kickerJa: "Imaging",
    kickerKo: "Imaging",
    layout: "stack",
    bodyJa:
      "非アルコール性脂肪肝の改善に役立ちます。脂肪肝の含量とALT・ASTの低下を確認しています。組織画像では、脂肪肝と抽出物摂取後の肝組織の変化を比較しています。",
    bodyKo:
      "비알코올성 지방간 개선에 도움을 줄 수 있습니다. 지방간 함량과 ALT·AST 감소를 확인했습니다. 조직 이미지에서는 지방간과 추출물 섭취 후 간 조직 변화를 비교합니다.",
  },
  neulearn: {
    titleJa: "大脳灰白質容積の確認",
    titleKo: "대뇌 회백질 용적 확인",
    kickerJa: "f-MRI",
    kickerKo: "f-MRI",
    layout: "stack",
    bodyJa:
      "加齢によって低下した認知機能の改善に役立ちます。f-MRI(機能的磁気共鳴画像)で、大脳の灰白質容積の増加を確認・検証しています。",
    bodyKo:
      "노화로 저하된 인지기능 개선에 도움을 줄 수 있습니다. f-MRI(기능적 자기공명영상)로 대뇌 회백질 용적 증가를 확인·검증했습니다.",
  },
  applephenon: {
    titleJa: "腹部内臓脂肪のCT評価",
    titleKo: "복부 내장지방 CT 평가",
    kickerJa: "CT",
    kickerKo: "CT",
    layout: "stack",
    bodyJa:
      "体脂肪を減らすのに役立ちます。CT撮影により、腹部内臓脂肪の摂取前後の変化を評価しています。",
    bodyKo:
      "체지방 감소에 도움을 줄 수 있습니다. CT 촬영으로 복부 내장지방의 섭취 전후 변화를 평가합니다.",
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
      { labelJa: "試験場所", labelKo: "시험장소", valueJa: "ソウル大学校盆唐病院", valueKo: "서울대학교 분당병원" },
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

function HistologyCaption({ src, isKorean }: { src: string; isKorean: boolean }) {
  const histology = histologyPanelCaptions[src];
  if (!histology) return null;

  return (
    <div className="dh-histo-labels">
      {histology.arrow && (
        <p className="dh-histo-arrow">
          <span aria-hidden="true">↘</span> {isKorean ? histology.arrow.ko : histology.arrow.ja}
        </p>
      )}
      <div className="dh-histo-panels">
        {histology.panels.map((panel) => (
          <p key={panel.ko}>{isKorean ? panel.ko : panel.ja}</p>
        ))}
      </div>
    </div>
  );
}

function MechanismPanel({
  copy,
  image,
  isKorean,
  name,
}: {
  copy: MechanismCopy;
  image: PptEvidenceImage;
  isKorean: boolean;
  name: string;
}) {
  const imageSrc = getLocalizedEvidenceImageSrc(image.src, isKorean);
  const caption = getEvidenceCaption(image.src, image.caption, isKorean);
  const source = getEvidenceSource(image.source, isKorean);
  const kicker = isKorean ? copy.kickerKo || "Mechanism" : copy.kickerJa || "Mechanism";

  return (
    <section
      aria-label={`${name} ${kicker}`}
      className="dh-mechanism-panel"
      data-reveal=""
      data-diagram={copy.diagramFit || "default"}
      data-kicker={kicker === "Mechanism" ? undefined : "literal"}
      data-layout={copy.layout || "split"}
    >
      <div>
        <p>{kicker}</p>
        <h3>{isKorean ? copy.titleKo : copy.titleJa}</h3>
        <span>{isKorean ? copy.bodyKo : copy.bodyJa}</span>
      </div>
      <figure>
        <EvidenceFigureImage caption={caption} imageSrc={imageSrc} isKorean={isKorean} src={image.src} />
        <HistologyCaption isKorean={isKorean} src={image.src} />
        <figcaption>
          <p>{caption}</p>
          {source && <cite>{source}</cite>}
        </figcaption>
      </figure>
    </section>
  );
}

export function CorporateSubHero({
  title,
  copy,
  koTitle,
  koCopy,
  englishTitle,
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
        <h1>
          {displayTitle}
          {englishTitle ? <small className="dh-sub-hero-en">{englishTitle}</small> : null}
        </h1>
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
                    <Link href={group.href}>{isKorean ? group.koMenuLabel || group.koLabel : group.menuLabel}</Link>
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
                <Link href="/contact">{isKorean ? "문의하기" : "CONTACT"}</Link>
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
              <em>{getIngredientSpecLabel(item, isKorean)}</em>
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

            <section className="dh-detail-summary" aria-label={`${item.name} ${isKorean ? labels.overviewAria : "概要"}`}>
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
                <dt>{getIngredientSpecLabel(item, isKorean)}</dt>
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
                <OriginCatalogCards hideCaption={sourceItem.id === "bifido"} images={originImages} />
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
                    <h4>{isKorean ? materialLabel : pptDetail.originTitle}</h4>
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
                        data-reveal={getLiveChartKey(evidenceImage.src) ? undefined : ""}
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
                        <HistologyCaption isKorean={isKorean} src={evidenceImage.src} />
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
                {featureImage && sourceItem.id !== "bifido" && (
                  <figure className="dh-feature-mechanism" data-reveal="" data-feature-kind={sourceItem.id === "bifido" ? "certification" : undefined}>
                    <EvidenceFigureImage
                      caption={getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}
                      imageSrc={getLocalizedEvidenceImageSrc(featureImage.src, isKorean)}
                      isKorean={isKorean}
                      src={featureImage.src}
                    />
                    <figcaption>{getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}</figcaption>
                  </figure>
                )}
              </section>
            )}

            {showExtended && mechanismImage && mechanismCopy && (
              <MechanismPanel copy={mechanismCopy} image={mechanismImage} isKorean={isKorean} name={item.name} />
            )}
          </>
        );

        if (linkBase) {
          return (
            <Link className="dh-detail-card dh-detail-card-link" href={`${linkBase.replace(/\/$/, "")}/${item.id}/`} key={item.id}>
              {compactContent}
              <span className="dh-detail-card-cta">
                {isKorean ? devKoreanLabels.cta.detail : "DETAIL"}
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
  useReveal();
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
  const excludedEvidenceSources = [
    featureImageSrc,
    mechanismImageSrc,
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
            <dt>{getIngredientSpecLabel(item, isKorean)}</dt>
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
          <h3>{isKorean ? materialLabel : pptDetail?.originTitle || materialLabel}</h3>
        </div>
        <ul>
          {originItems.map((origin) => (
            <li key={origin}>{origin}</li>
          ))}
        </ul>
        {originImages.length > 0 && (
          <div className="dh-origin-visual-stack">
            <OriginCatalogCards hideCaption={sourceItem.id === "bifido"} images={originImages} />
            {sourceItem.id === "bifido" && <BifidoEvidencePanel />}
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
          {featureImage && sourceItem.id !== "bifido" && (
            <figure className="dh-feature-mechanism" data-reveal="" data-feature-kind={sourceItem.id === "bifido" ? "certification" : undefined}>
              <EvidenceFigureImage
                caption={getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}
                imageSrc={getLocalizedEvidenceImageSrc(featureImage.src, isKorean)}
                isKorean={isKorean}
                src={featureImage.src}
              />
              <figcaption>{getEvidenceCaption(featureImage.src, featureImage.caption, isKorean)}</figcaption>
            </figure>
          )}
        </section>
      </div>

      {mechanismImage && mechanismCopy && (
        <MechanismPanel copy={mechanismCopy} image={mechanismImage} isKorean={isKorean} name={item.name} />
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
                  data-reveal={getLiveChartKey(evidenceImage.src) ? undefined : ""}
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
                  <HistologyCaption isKorean={isKorean} src={evidenceImage.src} />
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
      {isKorean ? <p className="dh-contact-note">일본 등록 주소: {companyContact.address.ja}</p> : null}
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
