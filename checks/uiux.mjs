import { existsSync, readFileSync } from "node:fs";
import { basename } from "node:path";

const html = readFileSync("index.html", "utf8");
const failures = [];

function fail(message) {
  failures.push(message);
}

function cssBlock(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = html.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`, "m"));
  return match ? match[1] : "";
}

[".button-secondary", ".button-outline", ".mobile-toggle", ".filter-btn"].forEach((selector) => {
  const block = cssBlock(selector);
  if (!block) {
    fail(`${selector} CSS block is missing.`);
    return;
  }
  if (/background\s*:\s*transparent\b/i.test(block) || /rgba\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(block)) {
    fail(`${selector} still has a transparent background.`);
  }
});

const menuArticles = [...html.matchAll(/<article class="menu-card[\s\S]*?<\/article>/g)];
if (menuArticles.length !== 9) {
  fail(`Expected 9 menu cards, found ${menuArticles.length}.`);
}

menuArticles.forEach((match, index) => {
  const card = match[0];
  const mediaMatches = [...card.matchAll(/\bdata-media-index="/g)];
  if (!/class="menu-media"/.test(card)) {
    fail(`Menu card ${index} is missing .menu-media.`);
  }
  if (!/class="menu-slide is-active"/.test(card)) {
    fail(`Menu card ${index} is missing an active slide.`);
  }
  if (mediaMatches.length < 1 || mediaMatches.length > 5) {
    fail(`Menu card ${index} must define 1 to 5 media slides, found ${mediaMatches.length}.`);
  }
});

// ponytail: This is a targeted spell-scan for current menu/navigation copy; upgrade to a real i18n linter if copy moves into separate files.
[
  "Menú",
  "Navegación principal",
  "Navegación móvil",
  "reservación",
  "información",
  "Interés en:"
].forEach((word) => {
  if (!html.includes(word)) {
    fail(`Expected Spanish copy with accent: ${word}`);
  }
});

[
  "LogoCJ_Horizontal.svg",
  "LogoCJ_Horizontal_Blanco.svg",
  "LogoCJ_Horizontal_Verde.svg",
  "LogoCJ_Original.svg",
  "LogoCJ_Simbolo Monocromatico Verde.svg",
  "LogoCJ_Simbolo Monocromatico.svg",
  "LogoCJ_Simbolo Original.svg"
].forEach((file) => {
  if (!existsSync(`assets/images/brand/${file}`)) {
    fail(`Official brand logo version is missing from assets/images/brand: ${basename(file)}`);
  }
});

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("UI/UX checks passed.");
