/**
 * Internal HTML→PDF stubs for layout experiments.
 * Do not deploy the output as official BIOLAB Japan catalogs.
 */
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/downloads/catalogs");
const tmpDir = path.join(root, ".tmp-catalogs");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

const catalogs = [
  {
    file: "functional-probiotics",
    kicker: "FUNCTIONAL PROBIOTICS",
    title: "機能性プロバイオティクス",
    subtitle: "개별인정형 프로바이오틱스 7종",
    rows: [
      ["MED01", "女性の腟の健康", "2,000億CFU/g"],
      ["MED02", "体脂肪低減", "2,000億CFU/g"],
      ["NVP-2106", "認知・記憶力改善", "100億 CFU/day"],
      ["NVP-1702", "肝機能改善", "100億 CFU/day"],
      ["NVP-1703", "鼻の状態改善", "100億 CFU/day"],
      ["NVP-1704", "ストレス・睡眠改善", "50億 CFU/day"],
      ["Bifido", "腸の健康", "BGN4 / BORI / AD011 各 1,000億CFU/g"],
    ],
    notes: "ヒト臨床試験を終えた個別認定型プロバイオティクス7種です。",
  },
  {
    file: "nature-ingredients",
    kicker: "FUNCTIONAL NATURE’S FOOD INGREDIENTS",
    title: "機能性天然素材",
    subtitle: "기능성 천연소재 10종",
    rows: [
      ["Testofen", "男性更年期", "600mg/day"],
      ["ThinkGIN", "記憶・認知", "450mg/day"],
      ["Neu learn", "認知機能", "600-1,200mg/day"],
      ["Applephenon", "体脂肪低減", "600mg/day"],
      ["低分子コラーゲンペプチドAG", "皮膚保湿", "1,000mg/day"],
      ["DermaNia", "皮膚水分・しわ", "250mg/day"],
      ["Agrimony", "脂肪肝", "75mg/day"],
      ["Pinitol", "肝臓・血糖", "300mg/day · 1.2g/day"],
      ["Aceto Beta", "二日酔い", "1,000mg/day"],
      ["Immulink MBG", "免疫", "200mg/day"],
    ],
    notes: "ヒト臨床試験を終えた自然由来機能性素材10種です。",
  },
  {
    file: "bifido-bgn4",
    kicker: "BIFIDOBACTERIUM BIFIDUM",
    title: "BGN4",
    subtitle: "Immune modulating Bifidobacterium",
    rows: [
      ["規格", "1,000億CFU/g (1×10¹¹ CFU/g)"],
      ["GRAS", "GRN 000814"],
      ["NDI", "NDI 1079"],
      ["HALAL", "Korea Muslim Federation"],
      ["寄託", "KCCM 80046"],
      ["GenBank", "CP001361"],
    ],
    notes: "母乳で育った健康な乳児の便から分離。GUT / BRAIN / KIDNEY / SKIN 領域の機能性データがあります。",
  },
  {
    file: "bifido-bori",
    kicker: "BIFIDOBACTERIUM LONGUM",
    title: "BORI",
    subtitle: "Rotavirus inhibition Bifidobacterium",
    rows: [
      ["規格", "1,000億CFU/g (1×10¹¹ CFU/g)"],
      ["GRAS", "GRN 000813"],
      ["NDI", "NDI 1082"],
      ["HALAL", "Korea Muslim Federation"],
      ["寄託", "KCCM 10492"],
      ["GenBank", "CP031133"],
    ],
    notes: "母乳で育った健康な乳児の便から分離。ロタウイルス感染抑制で知られる菌株です。",
  },
  {
    file: "bifido-ad011",
    kicker: "BIFIDOBACTERIUM LACTIS",
    title: "AD011",
    subtitle: "Intestinal health Bifidobacterium",
    rows: [
      ["規格", "1,000億CFU/g (1×10¹¹ CFU/g)"],
      ["GRAS", "GRN 000952"],
      ["NDI", "NDI 1118"],
      ["HALAL", "Korea Muslim Federation"],
      ["寄託", "KCCM 11209"],
      ["GenBank", "CP001213"],
    ],
    notes: "母乳で育った健康な乳児の便から分離。腸と皮膚領域の機能性データがあります。",
  },
];

function htmlFor(catalog) {
  const rows = catalog.rows
    .map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`)
    .join("");

  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>${catalog.title} | BIOLAB Japan</title>
  <style>
    @page { size: A4; margin: 16mm; }
    html, body { margin: 0; padding: 0; }
    body { font-family: "Noto Sans CJK JP", "WenQuanYi Micro Hei", "Droid Sans Fallback", sans-serif; color: #182235; }
    .sheet { width: 178mm; min-height: 265mm; }
    .kicker { margin: 0 0 8px; color: #1d6aa5; font-size: 11px; font-weight: 800; letter-spacing: 0.16em; }
    h1 { margin: 0 0 6px; font-size: 32px; line-height: 1.15; }
    .sub { margin: 0 0 22px; color: #4c5a6d; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border-bottom: 1px solid #dbe7f4; padding: 9px 8px; text-align: left; font-size: 13px; vertical-align: top; }
    th { width: 28%; color: #204da1; font-weight: 800; background: #f6f9fc; }
    .note { margin-top: 22px; color: #4c5a6d; font-size: 13px; line-height: 1.7; }
    .foot { margin-top: 28px; color: #7b8798; font-size: 11px; }
  </style>
</head>
<body>
  <div class="sheet">
    <p class="kicker">BIOLAB JAPAN · RAW MATERIAL CATALOG</p>
    <h1>${catalog.title}</h1>
    <p class="sub">${catalog.kicker}<br>${catalog.subtitle}</p>
    <table>${rows}</table>
    <p class="note">${catalog.notes}</p>
    <p class="foot">© 2026 BIOLAB JAPAN LTD · biolabjp.com</p>
  </div>
</body>
</html>`;
}

for (const catalog of catalogs) {
  fs.writeFileSync(path.join(tmpDir, `${catalog.file}.html`), htmlFor(catalog));
}

const only = process.argv[2];
const targets = only ? catalogs.filter((item) => item.file === only) : catalogs;

for (const catalog of targets) {
  const htmlPath = path.join(tmpDir, `${catalog.file}.html`);
  const pdfPath = path.join(outDir, `${catalog.file}.pdf`);
  if (fs.existsSync(pdfPath) && !only) {
    console.log("skip existing", pdfPath);
    continue;
  }
  const result = spawnSync(
    "google-chrome",
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-pdf-header-footer",
      `--user-data-dir=${path.join(tmpDir, `chrome-${catalog.file}`)}`,
      `--print-to-pdf=${pdfPath}`,
      htmlPath,
    ],
    { encoding: "utf8", timeout: 45000 },
  );
  if (result.status !== 0) {
    console.error(catalog.file, result.stderr || result.stdout || result.error);
    process.exit(result.status || 1);
  }
  console.log("wrote", pdfPath, fs.statSync(pdfPath).size);
}
