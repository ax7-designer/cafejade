import { existsSync, readFileSync } from "node:fs";

const flyerPath = "opendesign/mockups/mundial-final-argentina-espana/index.html";
const photoOptionsPath = "opendesign/mockups/mundial-final-argentina-espana/photo-options.html";
const failures = [];
const fail = (message) => failures.push(message);

if (!existsSync(flyerPath)) {
  fail("Flyer template is missing.");
} else {
  const html = readFileSync(flyerPath, "utf8");
  const slides = [...html.matchAll(/class="slide(?:\s|\")/g)];
  if (slides.length !== 3) fail(`Expected exactly 3 slides, found ${slides.length}.`);
  if (!html.includes("aspect-ratio: 4 / 5")) fail("Artboards must use the Instagram 4:5 ratio.");
  if (!html.includes("data-view=\"overview\"")) fail("Overview view is missing.");
  if ([...html.matchAll(/data-tone="/g)].length < 3) fail("Three tone choices are required.");
  ["ARGENTINA", "ESPAÑA", "DOMINGO 19 JULIO", "1:00 P. M.", "Café Jade"].forEach((copy) => {
    if (!html.includes(copy)) fail(`Required copy is missing: ${copy}`);
  });
  if (/\b(?:52)?916\d{7}\b/.test(html)) fail("Artwork must not print a WhatsApp number.");
  if (!html.includes("LogoCJ_Horizontal_Blanco.svg")) fail("Official white Café Jade logo is missing.");
  if (html.includes("subject-placeholder")) fail("Approved artwork must not keep photo placeholders.");
  if ([...html.matchAll(/class="silhouette\s/g)].length !== 2) fail("Approved artwork needs two opposing silhouette layers.");
  if (!html.includes("option-01-faceoff-cutout.png")) fail("Approved face-off cutout is not connected to the silhouette treatment.");
}

if (!existsSync(photoOptionsPath)) {
  fail("Photo options review page is missing.");
} else {
  const optionsHtml = readFileSync(photoOptionsPath, "utf8");
  if ([...optionsHtml.matchAll(/class="photo-option"/g)].length !== 3) {
    fail("Photo review must contain exactly three options.");
  }
  [
    "option-01-faceoff-cutout.png",
    "option-02-confident-cutout.png",
    "option-03-fullbody-cutout.png"
  ].forEach((file) => {
    if (!existsSync(`opendesign/mockups/mundial-final-argentina-espana/assets/photo-options/${file}`)) {
      fail(`Transparent photo option is missing: ${file}`);
    }
    if (!optionsHtml.includes(file)) fail(`Photo review does not reference: ${file}`);
  });
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Flyer checks passed.");
