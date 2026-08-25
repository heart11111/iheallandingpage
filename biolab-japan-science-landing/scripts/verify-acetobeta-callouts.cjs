#!/usr/bin/env node
/**
 * AcetoBeta 말풍선(callout) 자동 점검 — 빌드/배포 전 실행.
 * Usage: npm run verify:callouts
 */
const { readFileSync, existsSync } = require("node:fs");
const { join } = require("node:path");
const { JSDOM } = require("jsdom");

const root = join(__dirname, "..");
const issues = [];

function fail(msg) {
  issues.push(msg);
}

function loadEngine() {
  let code = readFileSync(join(root, "src/lib/evidenceCharts.ts"), "utf8");
  code = code
    .replace(/^\/\*[\s\S]*?\*\/\s*/m, "")
    .replace(/\/\/ @ts-nocheck\n/, "")
    .replace(/export function buildChartNode/g, "function buildChartNode")
    .replace(/export function hasChart/g, "function hasChart");
  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  global.window = dom.window;
  global.document = dom.window.document;
  // eslint-disable-next-line no-eval
  eval(code);
  // eslint-disable-next-line no-undef
  return buildChartNode;
}

function geom(svg) {
  const [, , vw, vh] = svg.getAttribute("viewBox").split(" ").map(Number);
  return {
    vw,
    vh,
    rects: [...svg.querySelectorAll("rect")],
    paths: [...svg.querySelectorAll("path")],
    lines: [...svg.querySelectorAll("line")],
  };
}

function checkAcetaldehyde(svg) {
  const { vw, vh, rects, paths, lines } = geom(svg);
  const tag = rects.find((r) => r.getAttribute("fill") === "#e0242f");
  const tri = paths.find((p) => p.getAttribute("fill") === "#e0242f");
  if (!tag) return fail("acetobeta-evidence-2: missing #e0242f tag rect");
  if (!tri) return fail("acetobeta-evidence-2: missing #e0242f triangle");
  if (lines.some((l) => l.getAttribute("stroke") === "#94a3b8")) {
    fail("acetobeta-evidence-2: tag must not use pill brackets");
  }

  const ty = +tag.getAttribute("y");
  const th = +tag.getAttribute("height");
  const tw = +tag.getAttribute("width");
  const tipY = +tri.getAttribute("d").match(/L[\d.]+ ([\d.]+)Z/)[1];

  if (ty < 20) fail(`acetobeta-evidence-2: tag too close to top (y=${ty})`);
  if (tipY > vh * 0.45) fail(`acetobeta-evidence-2: tag too low (tipY=${tipY})`);
  if (tw > vw * 0.35) fail(`acetobeta-evidence-2: tag too wide (${tw}px)`);
  if (tw < 48) fail(`acetobeta-evidence-2: tag too narrow (${tw}px)`);

  const nums = tri.getAttribute("d").match(/-?[\d.]+/g).map(Number);
  const span = Math.abs(nums[2] - nums[0]);
  const ratio = span / tw;
  if (ratio < 0.5 || ratio > 0.95) {
    fail(`acetobeta-evidence-2: triangle/box ratio ${ratio.toFixed(2)} out of range`);
  }
  if (tipY < ty + th - 2) fail("acetobeta-evidence-2: triangle not below box");
}

function checkNausea(svg) {
  const { rects, paths, lines } = geom(svg);
  const pill = rects.find((r) => r.getAttribute("fill") === "#fff" && r.getAttribute("stroke"));
  if (!pill) return fail("acetobeta-evidence-3: missing white pill rect");
  if (rects.some((r) => ["#e0242f", "#f26d6d"].includes(r.getAttribute("fill")))) {
    fail("acetobeta-evidence-3: must not use bubble rect");
  }
  if (paths.some((p) => p.getAttribute("fill") === "#e0242f")) {
    fail("acetobeta-evidence-3: must not use red triangle");
  }

  const brackets = lines.filter((l) => l.getAttribute("stroke") === "#94a3b8");
  if (brackets.length < 3) {
    fail(`acetobeta-evidence-3: pill needs 3 bracket lines, got ${brackets.length}`);
  }

  const texts = [...svg.querySelectorAll("text")].map((t) => t.textContent);
  if (!texts.includes("메스꺼움 개선 효과")) fail("acetobeta-evidence-3: missing line 1");
  if (!texts.includes("약 70%(9/13)")) fail("acetobeta-evidence-3: missing line 2");

  const pw = +pill.getAttribute("width");
  const ph = +pill.getAttribute("height");
  if (pw < 120 || pw > 180) fail(`acetobeta-evidence-3: pill width ${pw}px unexpected`);
  if (ph < 40 || ph > 60) fail(`acetobeta-evidence-3: pill height ${ph}px unexpected`);
}

function checkHtml(relPath) {
  const full = join(root, relPath);
  if (!existsSync(full)) return fail(`${relPath}: missing`);
  const html = readFileSync(full, "utf8");
  const m = html.match(/<script>([\s\S]*)<\/script>/);
  if (!m) return fail(`${relPath}: no inline script`);
  try {
    new Function(m[1]);
  } catch (e) {
    fail(`${relPath}: JS syntax error — ${e.message}`);
  }
  if (!html.includes('style==="tag"')) fail(`${relPath}: missing tag style`);
  if (!html.includes('style==="pill"')) fail(`${relPath}: missing pill style`);
  if (html.includes("var bh=padY")) fail(`${relPath}: bh redeclaration bug`);
}

const buildChartNode = loadEngine();
for (const key of ["acetobeta-evidence-2.webp", "acetobeta-evidence-3.webp"]) {
  const node = buildChartNode(key, "ko");
  if (!node) {
    fail(`${key}: buildChartNode returned null`);
    continue;
  }
  const svg = node.tagName === "svg" ? node : node.querySelector("svg");
  if (!svg) {
    fail(`${key}: no svg`);
    continue;
  }
  if (key.includes("evidence-2")) checkAcetaldehyde(svg);
  else checkNausea(svg);
}

for (const p of [
  "public/dev/charts-review.html",
  "public/dev/acetobeta-callout-compare.html",
]) {
  checkHtml(p);
}

if (existsSync(join(root, "out/dev/acetobeta-callout-compare.html"))) {
  checkHtml("out/dev/acetobeta-callout-compare.html");
} else {
  fail("out/dev/: run npm run build first");
}

console.log("AcetoBeta callout verification");
if (issues.length === 0) {
  console.log("✅ All checks passed (tag + pill + HTML JS)");
  process.exit(0);
}
console.log(`❌ ${issues.length} issue(s):`);
issues.forEach((i) => console.log("  -", i));
process.exit(1);
