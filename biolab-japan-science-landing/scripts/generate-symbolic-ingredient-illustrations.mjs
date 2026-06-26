import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("public/images/ingredients");
const imageDir = path.resolve("public/images");
const generatedImageDir = path.resolve("public/images/generated");
const probioticBackgroundPath = path.join(generatedImageDir, "probiotic-cell-background.png");
const width = 960;
const height = 640;

const assets = [
  {
    id: "med01",
    tone: ["#eaf7ff", "#f9edf7", "#1f57a4", "#e8588c"],
    shapes: ["female", "microbes", "shield"],
  },
  {
    id: "med02",
    tone: ["#eef7ff", "#edf9f2", "#1f57a4", "#4dbb78"],
    shapes: ["waist", "microbes", "spark"],
  },
  {
    id: "nvp2106",
    tone: ["#eef4ff", "#f3f7ff", "#1f57a4", "#6e8fe8"],
    shapes: ["brain", "nodes", "orbit"],
  },
  {
    id: "nvp1702",
    tone: ["#f3f8ef", "#fff7e8", "#2f7d58", "#d39b35"],
    shapes: ["liver", "leaf", "microbes"],
  },
  {
    id: "nvp1703",
    tone: ["#edf9ff", "#f4f0ff", "#1f57a4", "#6bb8d8"],
    shapes: ["nose", "air", "shield"],
  },
  {
    id: "nvp1704",
    tone: ["#f1f4ff", "#f7f2ff", "#344a8a", "#8d75d6"],
    shapes: ["moon", "wave", "microbes"],
  },
  {
    id: "bifido",
    tone: ["#eef8f1", "#fff8eb", "#2d7d5a", "#d5a548"],
    shapes: ["gut", "microbes", "leaf"],
  },
  {
    id: "testofen",
    tone: ["#eef6ff", "#fff5e8", "#1f57a4", "#d5963d"],
    shapes: ["male", "seed", "spark"],
  },
  {
    id: "thinkgin",
    tone: ["#eef9f2", "#f7fff7", "#287a52", "#88b04b"],
    shapes: ["sprout", "brain", "nodes"],
  },
  {
    id: "neulearn",
    tone: ["#f4f7ff", "#fff8f0", "#4b5ea8", "#e0b06b"],
    shapes: ["memory", "brain", "orbit"],
  },
  {
    id: "applephenon",
    tone: ["#f1faef", "#fff2f2", "#3f8a45", "#d95656"],
    shapes: ["apple", "waist", "leaf"],
  },
  {
    id: "collagen",
    tone: ["#fff4f7", "#f0f7ff", "#c45880", "#6b99d5"],
    shapes: ["skin", "droplets", "wave"],
  },
  {
    id: "dermania",
    tone: ["#fff5f7", "#f4fbff", "#bc5f78", "#6bb8d8"],
    shapes: ["face", "droplets", "leaf"],
  },
  {
    id: "agrimony",
    tone: ["#f4faef", "#fff8e8", "#2f7d58", "#c99a35"],
    shapes: ["liver", "plant", "spark"],
  },
  {
    id: "pinitol",
    tone: ["#f5f7ef", "#fff5e9", "#5e7e38", "#b47a38"],
    shapes: ["carob", "drop", "liver"],
  },
  {
    id: "acetobeta",
    tone: ["#f1f8ff", "#fff7ea", "#1f57a4", "#d39b35"],
    shapes: ["cup", "drop", "leaf"],
  },
  {
    id: "immulink",
    tone: ["#eef8f5", "#f3f6ff", "#22745f", "#557bd8"],
    shapes: ["shield", "mushroom", "nodes"],
  },
];

const categoryAssets = [
  {
    filename: "products-microbiome-probiotics-card-v2.webp",
    tone: ["#eef7ff", "#f5f0ff", "#1f57a4", "#4dbb78"],
    shapes: ["female", "gut", "microbes", "shield"],
    cellLines: ["Microbiome", "Probiotics"],
  },
  {
    filename: "products-functional-nature-card-v2.webp",
    tone: ["#f1faef", "#fff7e8", "#2f7d58", "#d39b35"],
    shapes: ["sprout", "apple", "leaf", "shield"],
  },
];

const probioticCellVisuals = {
  med01: ["L. salivarius MG242", "L. fermentum MG901", "L. plantarum MG989"],
  med02: ["L. fermentum MG4231", "L. fermentum MG4244"],
  nvp2106: ["L. mucosae NK41", "B. longum NK46"],
  nvp1702: ["L. plantarum LC27", "B. longum LC67"],
  nvp1703: ["L. plantarum IM76", "B. longum IM55"],
  nvp1704: ["L. reuteri NK33", "B. adolescentis NK98"],
  bifido: ["B. bifidum BGN4", "B. longum BORI", "B. lactis AD011"],
};

function escapeText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cellSvg(lines) {
  const fontSize = lines.length <= 2 ? 66 : 48;
  const lineHeight = lines.length <= 2 ? 78 : 60;
  const startY = 320 - ((lines.length - 1) * lineHeight) / 2;
  const text = lines
    .map(
      (line, index) =>
        `<text x="480" y="${startY + index * lineHeight}" text-anchor="middle">${escapeText(line)}</text>`,
    )
    .join("\n");

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cellBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#21d4e8"/>
        <stop offset="44%" stop-color="#34bce8"/>
        <stop offset="100%" stop-color="#1795d4"/>
      </linearGradient>
      <radialGradient id="aquaGlow" cx="44%" cy="42%" r="58%">
        <stop offset="0%" stop-color="#d9ffff" stop-opacity="0.72"/>
        <stop offset="46%" stop-color="#8df7ff" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#0d91ca" stop-opacity="0"/>
      </radialGradient>
      <filter id="blurCell" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="10"/>
      </filter>
      <filter id="cellShadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#036b9a" flood-opacity="0.34"/>
      </filter>
      <filter id="textShadow" x="-20%" y="-40%" width="140%" height="180%">
        <feDropShadow dx="0" dy="10" stdDeviation="5" flood-color="#066996" flood-opacity="0.52"/>
      </filter>
    </defs>
    <rect width="960" height="640" fill="url(#cellBg)"/>
    <rect width="960" height="640" fill="url(#aquaGlow)"/>
    <g opacity="0.22" filter="url(#blurCell)">
      <ellipse cx="118" cy="520" rx="140" ry="36" fill="#9bffff" transform="rotate(-46 118 520)"/>
      <ellipse cx="858" cy="520" rx="170" ry="46" fill="#8efcff" transform="rotate(-14 858 520)"/>
      <ellipse cx="258" cy="20" rx="168" ry="42" fill="#d8ffff" transform="rotate(-62 258 20)"/>
    </g>
    <g filter="url(#cellShadow)" opacity="0.92">
      <ellipse cx="205" cy="177" rx="38" ry="126" fill="#79e9ff" stroke="#bffcff" stroke-width="5" transform="rotate(18 205 177)"/>
      <ellipse cx="500" cy="256" rx="218" ry="48" fill="#89f4ff" stroke="#d6ffff" stroke-width="5" transform="rotate(-7 500 256)"/>
      <ellipse cx="515" cy="436" rx="144" ry="42" fill="#64e6ff" stroke="#bdffff" stroke-width="5" transform="rotate(-55 515 436)"/>
      <ellipse cx="804" cy="130" rx="32" ry="110" fill="#7de7ff" stroke="#c9fbff" stroke-width="5" transform="rotate(-26 804 130)"/>
      <ellipse cx="146" cy="448" rx="36" ry="130" fill="#5cdff6" stroke="#c3fbff" stroke-width="5" transform="rotate(41 146 448)"/>
      <ellipse cx="698" cy="488" rx="116" ry="31" fill="#70e5ff" stroke="#c7ffff" stroke-width="4" transform="rotate(-15 698 488)"/>
      <ellipse cx="704" cy="186" rx="118" ry="26" fill="#82edff" stroke="#caffff" stroke-width="4" transform="rotate(-39 704 186)"/>
      <ellipse cx="885" cy="306" rx="104" ry="28" fill="#63dff8" stroke="#c0fbff" stroke-width="4" transform="rotate(41 885 306)"/>
    </g>
    <g opacity="0.45">
      <ellipse cx="310" cy="126" rx="22" ry="82" fill="none" stroke="#caffff" stroke-width="5" transform="rotate(4 310 126)"/>
      <ellipse cx="783" cy="336" rx="20" ry="86" fill="none" stroke="#b8f8ff" stroke-width="4" transform="rotate(-31 783 336)"/>
      <ellipse cx="665" cy="82" rx="18" ry="76" fill="none" stroke="#cbffff" stroke-width="4" transform="rotate(28 665 82)"/>
      <ellipse cx="266" cy="334" rx="18" ry="78" fill="none" stroke="#c9ffff" stroke-width="3" transform="rotate(-28 266 334)"/>
    </g>
    <g opacity="0.36" fill="#eaffff">
      ${Array.from({ length: 78 })
        .map((_, index) => {
          const x = 82 + ((index * 109) % 810);
          const y = 70 + ((index * 71) % 500);
          const r = 2 + (index % 4);
          return `<circle cx="${x}" cy="${y}" r="${r}" opacity="${0.22 + (index % 5) * 0.08}"/>`;
        })
        .join("\n")}
    </g>
    <g
      filter="url(#textShadow)"
      fill="#ffffff"
      font-family="Arial, Helvetica, sans-serif"
      font-size="${fontSize}"
      font-style="italic"
      font-weight="900"
      letter-spacing="-1"
    >
      ${text}
    </g>
  </svg>`;
}

function cellTextOverlaySvg(lines) {
  const fontSize = lines.length <= 2 ? 66 : 48;
  const lineHeight = lines.length <= 2 ? 78 : 60;
  const startY = 320 - ((lines.length - 1) * lineHeight) / 2;
  const text = lines
    .map(
      (line, index) =>
        `<text x="480" y="${startY + index * lineHeight}" text-anchor="middle">${escapeText(line)}</text>`,
    )
    .join("\n");

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="textShadow" x="-20%" y="-40%" width="140%" height="180%">
        <feDropShadow dx="0" dy="10" stdDeviation="5" flood-color="#066996" flood-opacity="0.62"/>
      </filter>
    </defs>
    <g
      filter="url(#textShadow)"
      fill="#ffffff"
      font-family="Arial, Helvetica, sans-serif"
      font-size="${fontSize}"
      font-style="italic"
      font-weight="900"
      letter-spacing="-1"
    >
      ${text}
    </g>
  </svg>`;
}

async function renderProbioticCellCard(lines, outputPath) {
  await sharp(probioticBackgroundPath)
    .resize(width, height, { fit: "cover", position: "center" })
    .composite([{ input: Buffer.from(cellTextOverlaySvg(lines)), left: 0, top: 0 }])
    .webp({ quality: 88, effort: 5 })
    .toFile(outputPath);
}

function baseSvg({ tone, shapes }) {
  const [bg1, bg2, primary, accent] = tone;
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#29415f" flood-opacity="0.12"/>
      </filter>
    </defs>
    <rect width="960" height="640" fill="url(#bg)"/>
    <circle cx="500" cy="295" r="260" fill="url(#glow)"/>
    <g opacity="0.2" fill="none" stroke="${primary}" stroke-width="2">
      <circle cx="170" cy="120" r="46"/>
      <circle cx="800" cy="500" r="72"/>
      <path d="M50 448 C180 390 262 426 356 358 S570 222 734 278 S888 272 934 196"/>
    </g>
    <g filter="url(#soft)">
      ${shapes.map((shape, index) => drawShape(shape, index, primary, accent)).join("\n")}
    </g>
  </svg>`;
}

function drawShape(shape, index, primary, accent) {
  const offset = index === 0 ? 0 : index === 1 ? -120 : 132;
  const opacity = index === 0 ? 1 : 0.82;
  const stroke = index === 1 ? accent : primary;
  const fill = index === 2 ? accent : primary;
  const cx = 480 + offset;
  const cy = index === 0 ? 325 : index === 1 ? 340 : 255;
  const common = `stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="${opacity}"`;

  switch (shape) {
    case "female":
      return `<g ${common}><circle cx="${cx}" cy="${cy - 110}" r="64"/><path d="M${cx} ${cy - 46}v176M${cx - 70} ${cy + 38}h140M${cx - 42} ${cy + 130}h84"/></g>`;
    case "male":
      return `<g ${common}><circle cx="${cx - 30}" cy="${cy - 30}" r="78"/><path d="M${cx + 30} ${cy - 90}l112 -112M${cx + 55} ${cy - 202}h90v90"/></g>`;
    case "microbes":
      return `<g fill="${fill}" opacity="${opacity}"><circle cx="${cx - 72}" cy="${cy - 54}" r="28"/><circle cx="${cx + 2}" cy="${cy + 22}" r="42"/><circle cx="${cx + 92}" cy="${cy - 34}" r="24"/><circle cx="${cx - 12}" cy="${cy - 102}" r="16"/></g>`;
    case "shield":
      return `<path ${common} d="M${cx} ${cy - 150}c52 40 94 48 130 52v88c0 102 -52 162 -130 204c-78 -42 -130 -102 -130 -204v-88c36 -4 78 -12 130 -52z"/>`;
    case "waist":
      return `<g ${common}><path d="M${cx - 118} ${cy - 158}c58 66 62 248 -4 328"/><path d="M${cx + 118} ${cy - 158}c-58 66 -62 248 4 328"/><path d="M${cx - 132} ${cy + 6}c70 34 194 34 264 0"/></g>`;
    case "spark":
      return `<g ${common}><path d="M${cx} ${cy - 100}v200M${cx - 100} ${cy}h200M${cx - 70} ${cy - 70}l140 140M${cx + 70} ${cy - 70}l-140 140"/></g>`;
    case "brain":
      return `<path ${common} d="M${cx - 128} ${cy + 24}c-54 -28 -50 -112 12 -132c10 -68 98 -76 132 -26c48 -46 136 -10 128 58c64 16 70 112 10 140c-14 68 -110 78 -146 26c-42 46 -126 18 -138 -66z"/>`;
    case "nodes":
      return `<g ${common}><circle cx="${cx - 80}" cy="${cy - 38}" r="22"/><circle cx="${cx + 18}" cy="${cy - 108}" r="22"/><circle cx="${cx + 90}" cy="${cy + 12}" r="22"/><circle cx="${cx - 16}" cy="${cy + 94}" r="22"/><path d="M${cx - 60} ${cy - 52}l58 -42M${cx + 30} ${cy - 88}l48 78M${cx + 66} ${cy + 24}l-60 58M${cx - 64} ${cy - 18}l38 88"/></g>`;
    case "orbit":
      return `<g ${common}><ellipse cx="${cx}" cy="${cy}" rx="150" ry="66" transform="rotate(-24 ${cx} ${cy})"/><ellipse cx="${cx}" cy="${cy}" rx="150" ry="66" transform="rotate(24 ${cx} ${cy})"/></g>`;
    case "liver":
      return `<path ${common} d="M${cx - 172} ${cy + 24}c20 -120 126 -172 248 -134c92 28 146 92 162 156c-72 34 -144 36 -218 10c-52 -18 -100 -4 -148 36c-34 28 -78 6 -74 -68z"/>`;
    case "leaf":
      return `<g ${common}><path d="M${cx - 118} ${cy + 82}c76 -152 190 -190 282 -178c-14 112 -80 212 -246 248"/><path d="M${cx - 72} ${cy + 78}c80 -28 144 -76 202 -142"/></g>`;
    case "plant":
      return `<g ${common}><path d="M${cx} ${cy + 130}v-202"/><path d="M${cx} ${cy - 20}c-74 -70 -144 -82 -210 -52c36 82 112 120 210 102"/><path d="M${cx} ${cy - 72}c72 -80 148 -102 226 -76c-28 94 -108 142 -226 130"/></g>`;
    case "nose":
      return `<path ${common} d="M${cx - 18} ${cy - 166}c72 78 98 154 62 228c-14 28 -44 46 -82 40c-62 -10 -88 38 -42 74c36 28 108 28 164 -4"/>`;
    case "air":
      return `<g ${common}><path d="M${cx - 170} ${cy - 60}h230c72 0 72 -84 4 -84"/><path d="M${cx - 140} ${cy + 20}h288c86 0 86 92 8 92"/><path d="M${cx - 94} ${cy + 100}h142"/></g>`;
    case "moon":
      return `<path ${common} d="M${cx + 90} ${cy - 156}c-106 38 -154 162 -96 258c48 82 154 114 244 72c-110 -6 -190 -98 -176 -210c8 -64 42 -118 28 -136z"/>`;
    case "wave":
      return `<g ${common}><path d="M${cx - 180} ${cy - 22}c54 -54 108 -54 162 0s108 54 162 0s108 -54 162 0"/><path d="M${cx - 148} ${cy + 82}c42 -42 84 -42 126 0s84 42 126 0s84 -42 126 0"/></g>`;
    case "gut":
      return `<g ${common}><path d="M${cx - 30} ${cy - 170}c-80 22 -132 82 -126 150c6 78 70 86 118 60c50 -28 24 -86 -28 -68c-48 18 -44 86 14 106c74 24 154 -18 162 -96c8 -84 -54 -146 -140 -152z"/><path d="M${cx + 62} ${cy - 76}c76 22 118 82 106 154c-16 98 -126 128 -196 70"/></g>`;
    case "seed":
      return `<g fill="${fill}" opacity="${opacity}"><ellipse cx="${cx - 86}" cy="${cy}" rx="42" ry="64" transform="rotate(-28 ${cx - 86} ${cy})"/><ellipse cx="${cx + 20}" cy="${cy - 42}" rx="42" ry="64" transform="rotate(22 ${cx + 20} ${cy - 42})"/><ellipse cx="${cx + 92}" cy="${cy + 48}" rx="36" ry="58" transform="rotate(-8 ${cx + 92} ${cy + 48})"/></g>`;
    case "sprout":
      return `<g ${common}><path d="M${cx} ${cy + 138}v-220"/><path d="M${cx} ${cy - 20}c-92 -84 -182 -92 -252 -42c40 92 124 134 252 106"/><path d="M${cx} ${cy - 92}c92 -98 190 -116 276 -64c-36 112 -136 164 -276 144"/></g>`;
    case "memory":
      return `<g ${common}><rect x="${cx - 132}" y="${cy - 138}" width="264" height="276" rx="46"/><path d="M${cx - 76} ${cy - 70}h152M${cx - 76} ${cy}h152M${cx - 76} ${cy + 70}h92"/></g>`;
    case "apple":
      return `<g ${common}><path d="M${cx - 12} ${cy - 112}c-92 -74 -208 -2 -202 128c6 126 88 208 162 178c34 -14 66 -14 100 0c74 30 156 -52 162 -178c6 -130 -110 -202 -202 -128z"/><path d="M${cx + 2} ${cy - 118}c12 -78 58 -116 138 -112"/></g>`;
    case "skin":
      return `<g ${common}><path d="M${cx - 190} ${cy + 52}c82 -58 152 -58 214 0s132 58 214 0"/><path d="M${cx - 190} ${cy - 34}c82 -58 152 -58 214 0s132 58 214 0"/><path d="M${cx - 190} ${cy + 138}c82 -58 152 -58 214 0s132 58 214 0"/></g>`;
    case "droplets":
      return `<g ${common}><path d="M${cx - 70} ${cy - 120}c44 58 66 98 66 132c0 46 -32 76 -66 76s-66 -30 -66 -76c0 -34 22 -74 66 -132z"/><path d="M${cx + 92} ${cy - 42}c34 46 52 78 52 104c0 36 -24 60 -52 60s-52 -24 -52 -60c0 -26 18 -58 52 -104z"/></g>`;
    case "face":
      return `<g ${common}><circle cx="${cx}" cy="${cy - 10}" r="156"/><path d="M${cx - 62} ${cy - 28}h2M${cx + 62} ${cy - 28}h2M${cx - 56} ${cy + 66}c42 36 86 36 128 0"/><path d="M${cx - 134} ${cy - 102}c72 -72 196 -72 268 0"/></g>`;
    case "carob":
      return `<g ${common}><path d="M${cx - 150} ${cy + 118}c140 -20 244 -104 296 -256c-130 -6 -246 70 -302 212c-12 30 -8 48 6 44z"/><path d="M${cx - 70} ${cy + 52}c52 -38 94 -86 128 -144"/></g>`;
    case "drop":
      return `<path ${common} d="M${cx} ${cy - 148}c76 96 112 164 112 218c0 76 -50 126 -112 126s-112 -50 -112 -126c0 -54 36 -122 112 -218z"/>`;
    case "cup":
      return `<g ${common}><path d="M${cx - 120} ${cy - 120}h240l-32 250h-176z"/><path d="M${cx - 70} ${cy - 190}c-38 38 38 56 0 94M${cx + 14} ${cy - 190}c-38 38 38 56 0 94M${cx + 98} ${cy - 190}c-38 38 38 56 0 94"/></g>`;
    case "mushroom":
      return `<g ${common}><path d="M${cx - 174} ${cy - 22}c22 -102 106 -156 196 -148c94 8 160 72 178 148c-54 38 -128 42 -200 10c-70 32 -146 28 -200 -10z"/><path d="M${cx - 62} ${cy + 2}c-8 72 -22 128 -54 172h232c-32 -44 -46 -100 -54 -172"/></g>`;
    default:
      return "";
  }
}

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(imageDir, { recursive: true });
await fs.mkdir(generatedImageDir, { recursive: true });

for (const asset of assets) {
  if (probioticCellVisuals[asset.id]) {
    await renderProbioticCellCard(probioticCellVisuals[asset.id], path.join(outDir, `${asset.id}.webp`));
    continue;
  }

  const svg = baseSvg(asset);
  await sharp(Buffer.from(svg))
    .resize(width, height)
    .webp({ quality: 88, effort: 5 })
    .toFile(path.join(outDir, `${asset.id}.webp`));
}

for (const asset of categoryAssets) {
  if (asset.cellLines) {
    await renderProbioticCellCard(asset.cellLines, path.join(imageDir, asset.filename));
    continue;
  }

  const svg = baseSvg(asset);
  await sharp(Buffer.from(svg))
    .resize(width, height)
    .webp({ quality: 88, effort: 5 })
    .toFile(path.join(imageDir, asset.filename));
}

console.log(`Generated ${assets.length} ingredient illustrations and ${categoryAssets.length} category illustrations.`);
