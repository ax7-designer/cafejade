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

if (!/\.visually-hidden\s*\{[\s\S]*?clip:\s*rect\(0 0 0 0\)/.test(html)) {
  fail("Missing visually-hidden utility for accessible hidden heading.");
}

if (!/<h1 class="visually-hidden"[^>]*>Café Jade Palenque<\/h1>/.test(html)) {
  fail("Hero heading must use the accented official brand name while remaining accessible.");
}

[
  "<title>Café Jade Palenque",
  'content="Café Jade Palenque: restaurante',
  'property="og:title" content="Café Jade Palenque"',
  'property="og:site_name" content="Café Jade Palenque"',
  '"name": "Café Jade Palenque"',
  'alt="Café Jade Palenque"'
].forEach((snippet) => {
  if (!html.includes(snippet)) {
    fail(`Expected accented official brand metadata/accessibility copy: ${snippet}`);
  }
});

if (!/\.hero-brand-logo\s*\{[\s\S]*?width:\s*min\(84vw,\s*380px\)/.test(html)) {
  fail("Hero logo size was not increased to the expected maximum.");
}

[
  'data-i18n-es="Café Jade vive entre la hospitalidad',
  'data-i18n-es="Café Jade Palenque"'
].forEach((snippet) => {
  if (!html.includes(snippet)) {
    fail(`Expected accented brand copy: ${snippet}`);
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
  if (!/class="menu-track"/.test(card)) {
    fail(`Menu card ${index} is missing .menu-track.`);
  }
  if (!/class="menu-slide is-active"/.test(card)) {
    fail(`Menu card ${index} is missing an active slide.`);
  }
  if (!/data-media-max="4"/.test(card)) {
    fail(`Menu card ${index} must cap carousel media at 4 items.`);
  }
  if (mediaMatches.length !== 1) {
    fail(`Menu card ${index} should define one source slide; JS expands it to 4, found ${mediaMatches.length}.`);
  }
});

[
  "initMenuMediaCarousels",
  "menu-carousel-btn",
  "menu-carousel-dot",
  "menu-slide-count"
].forEach((snippet) => {
  if (!html.includes(snippet)) {
    fail(`Carousel implementation snippet missing: ${snippet}`);
  }
});

// The carousel must NOT clone a single image to fake a multi-photo gallery.
// Controls (arrows/dots) are only built when two or more real slides exist.
if (/<head>[\s\S]*cloneNode\("?(?:true)?"?\)/i.test(html) || html.includes("sourceSlide.cloneNode(true)")) {
  fail("Carousel still clones a single slide instead of showing a static photo.");
}
if (!/slides\.length\s*<\s*2/.test(html)) {
  fail("Carousel guard for single-image cards is missing.");
}

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

const currentPublicUrl = "https://cafejade.mx/";
const previousVercelUrl = "https://cafe-jade-palenque.vercel.app/";
const legacyNetlifyUrl = "https://luxury-syrniki-73ec68.netlify.app/";
if (html.includes(legacyNetlifyUrl)) {
  fail("Legacy Netlify URL is still present in public metadata.");
}
if (html.includes(previousVercelUrl)) {
  fail("Previous Vercel URL is still present in public metadata.");
}
if (!html.includes(currentPublicUrl)) {
  fail("Production domain is missing from public metadata.");
}
// --- Iteration 2 locks: reveal animations, image perf, mobile a11y, booking feedback, favicon ---

// Reveal animations must actually animate (not be no-op).
if (html.includes(".reveal {\n      opacity: 1;\n      transform: none;")) {
  fail(".reveal CSS is still a no-op — entrance animations are dead.");
}

// Body line-height must be at least 1.5 for readability.
const bodyBlock = cssBlock("body");
const lineHeightMatch = bodyBlock.match(/line-height\s*:\s*([\d.]+)/);
if (!lineHeightMatch || parseFloat(lineHeightMatch[1]) < 1.5) {
  fail(`Body line-height is too tight (${lineHeightMatch ? lineHeightMatch[1] : "missing"}). Must be >= 1.5.`);
}

// prefers-reduced-motion must be supported.
if (!html.includes("prefers-reduced-motion")) {
  fail("Missing @media (prefers-reduced-motion: reduce) block.");
}

// Language persistence via localStorage.
if (!html.includes("localStorage.setItem(\"cj-lang\"") && !html.includes("localStorage.getItem(\"cj-lang\"")) {
  fail("Language preference is not persisted in localStorage.");
}

// Content images must carry width/height to prevent CLS.
const contentImages = [...html.matchAll(/<img\s[^>]*id="img-(?:menu-\d+|story|event-\d+)"[^>]*>/g)];
if (contentImages.length < 13) {
  fail(`Expected at least 13 content images with id=img-* attributes, found ${contentImages.length}.`);
}
contentImages.forEach((match, index) => {
  const tag = match[0];
  if (!/width="\d+"/.test(tag)) {
    fail(`Content image #${index} (id: ${tag.match(/id="([^"]+)"/)?.[1]}) is missing width attribute.`);
  }
  if (!/height="\d+"/.test(tag)) {
    fail(`Content image #${index} (id: ${tag.match(/id="([^"]+)"/)?.[1]}) is missing height attribute.`);
  }
});

// Only the first menu image (hero-adjacent) should be eager; rest must be lazy.
const eagerCount = [...html.matchAll(/<img[^>]*loading="eager"[^>]*>/g)]
  .filter((m) => /id="img-(?:menu|story|event)/.test(m[0])).length;
if (eagerCount > 1) {
  fail(`Too many eager content images (${eagerCount}). Only the first menu card should be eager.`);
}

// Mobile toggle must have aria-expanded.
if (!html.includes('aria-expanded="false"')) {
  fail("Mobile toggle is missing aria-expanded attribute.");
}

// Escape-to-close and focus trap for mobile menu.
if (!/event\.key\s*===?\s*["']Escape["']/.test(html)) {
  fail("No Escape-to-close handler for mobile menu.");
}
if (!/setMobileMenu/.test(html)) {
  fail("setMobileMenu function not found — mobile a11y implementation incomplete.");
}

// Booking form success toast.
if (!html.includes("bookingToast")) {
  fail("Booking form is missing success feedback element (#bookingToast).");
}
if (!html.includes("is-visible")) {
  fail("Booking toast is missing the is-visible toggle class.");
}

// Favicon must be declared.
if (!html.includes('rel="icon"')) {
  fail("No favicon <link> in <head>.");
}
if (!existsSync("favicon.svg")) {
  fail("favicon.svg is missing from root directory.");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("UI/UX checks passed.");
