import { existsSync, readFileSync } from "node:fs";

const flyerPath = "opendesign/mockups/mundial-final-argentina-espana/index.html";
const assetPath = "opendesign/mockups/mundial-final-argentina-espana/assets/panorama";
const exportPath = "checks/export-flyer.js";
const failures = [];
const fail = (message) => failures.push(message);

if (!existsSync(flyerPath)) {
  fail("Flyer template is missing.");
} else {
  const html = readFileSync(flyerPath, "utf8");
  const slides = [...html.matchAll(/class="slide(?:\s|\")/g)];
  if (slides.length !== 3) fail(`Expected exactly 3 slides, found ${slides.length}.`);
  if (!html.includes("aspect-ratio: 4 / 5")) fail("Artboards must keep the Instagram 4:5 ratio.");
  if (!html.includes("class=\"panorama\"") || !html.includes("data-export-width=\"3240\"")) {
    fail("The three slides must belong to one 3240px panorama.");
  }
  if (!html.includes("data-view=\"overview\"")) fail("Overview view is missing.");
  if ([...html.matchAll(/data-tone="/g)].length < 3) fail("Three tone choices are required.");
  ["ARGENTINA", "ESPAÑA", "DOMINGO 19 JULIO", "1:00 P. M.", "Café Jade"].forEach((copy) => {
    if (!html.includes(copy)) fail(`Required copy is missing: ${copy}`);
  });
  if (/\b(?:52)?916\d{7}\b/.test(html)) fail("Artwork must not print a WhatsApp number.");
  if (!html.includes("LogoCJ_Horizontal_Blanco.svg")) fail("Official white Café Jade logo is missing.");
  if (html.includes("subject-placeholder") || html.includes("class=\"silhouette ")) {
    fail("The final panorama must not keep player placeholders or silhouettes.");
  }
  if (!html.includes("ball-water-argentina-cutout.png") || !html.includes("ball-fire-spain-cutout-clean.png")) {
    fail("The panorama needs the transparent Argentina water ball and Spain fire ball.");
  }
  if ([...html.matchAll(/class="story-frame"/g)].length !== 3) {
    fail("All three slides must share the same narrative frame.");
  }
  if ([...html.matchAll(/class="continuation-cue"/g)].length !== 2) {
    fail("Slides 1 and 2 need a nonverbal continuation cue.");
  }
  ["electric-node node-start", "electric-node node-end"].forEach((className) => {
    if (!html.includes(className)) fail(`Missing diagonal power node: ${className}`);
  });
  if (!html.includes("--sticker-stroke: 10px")) fail("Generated subjects need a 10px white sticker outline.");
  ["ball-water-argentina-cutout.png", "ball-fire-spain-cutout-clean.png"].forEach((file) => {
    if (!existsSync(`${assetPath}/${file}`)) fail(`Panorama asset is missing: ${file}`);
  });
}

if (!existsSync(exportPath)) {
  fail("Flyer export script is missing.");
} else {
  const exporter = readFileSync(exportPath, "utf8");
  if (!exporter.includes("3240") || !exporter.includes("00-panorama-completo.png")) {
    fail("Exporter must render the full 3240px panorama before the three 4:5 crops.");
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Flyer checks passed.");
