# Cafe Jade - Agent Handoff & Architecture Guide

Welcome, incoming agent! This document serves as a comprehensive handoff guide to help you fully comprehend the Cafe Jade Palenque project, its structure, local tools, visual editor integration, and workflow guidelines.

---

## 1. Project Overview
*   **Goal:** A high-end, visual-first static website for **Café Jade**, a premium restaurant, cafe, and cultural hub located in the Zona Turística La Cañada in Palenque, Chiapas.
*   **Aesthetic Language:** *Luxury Dark Glassmorphism* featuring:
    *   Deep forest jade greens, gold accents, and warm cream base text colors.
    *   Premium typography using **Playfair Display** (headings) and **Inter** (body).
    *   Fine glass cards with custom blur and opacities.
*   **Current public demo:** [https://cafe-jade-palenque.vercel.app/](https://cafe-jade-palenque.vercel.app/)
*   **Target deployment:** Hostinger temporary domain via hPanel Git once the Hostinger site is connected to GitHub.
*   **Legacy Netlify URL:** [https://luxury-syrniki-73ec68.netlify.app/](https://luxury-syrniki-73ec68.netlify.app/) is older and should not be treated as latest.
*   **Repository:** [https://github.com/ax7-designer/cafejade](https://github.com/ax7-designer/cafejade)

---

## 2. Key Directories & File Structure
*   [index.html](file:///D:/CajeJade/index.html) - The core entry point containing all markup, styles (including variables in `:root`), translations (bilingüe), and the Javascript dev editor.
*   [FOTOS JADE/](file:///D:/CajeJade/FOTOS%20JADE) - Raw high-resolution customer photos. **CRITICAL:** These are tracked in Git so they serve directly on the static host without distortion or arbitrary cropping.
*   Local helper scripts are not required for production. Hostinger should deploy the static files from GitHub directly into `/public_html`.
*   [Show-Dashboard.ps1](file:///D:/CajeJade/Show-Dashboard.ps1) - A PowerShell CLI progress dashboard showing task completion. Works in offline mode by default.

---

## 3. Local Visual Editor & Reframe Mode (Crucial Dev Flow)
To allow real-time layout edits and image reframing directly from the browser, we built a visual editor panel.

### How it works:
1.  **Running locally:** Serve the project with any static server. The editor panel (`#cjed-panel`) is visible on localhost/ports but remains completely hidden in production hostnames.
2.  **Activation:** Press `Ctrl + Shift + E` or click the floating gold gear icon in the bottom-right corner to toggle the panel. Click **"Activar Modo Encuadre"** to edit card images and background alignments.
3.  **Reframing Card Images:**
    *   **Translate:** Drag and drop images inside the card borders.
    *   **Zoom:** Use the mouse wheel to scale up/down.
    *   **Rotate/Mirror Overlay:** Hovering over a card shows controls: 🔄 (rotate 90°), ↔️ (horizontal mirror), ↕️ (vertical mirror), and ⟲ (reset).
    *   *Event Handling:* The overlay buttons call `stopPropagation()` to prevent clicks from being registered as dragging.
4.  **Alineación de Fondos:** Drag directly on the Hero (Portada) or Section-Alt (Story) sections to shift background positions (X and Y variables) dynamically.
5.  **Saving Changes:** Clicking **"Guardar Cambios"** sends a JSON POST request to `/save`. The Python server parses `index.html`, replaces the values in the `:root` style block and image tags, and saves the file back to disk.

---

## 4. Environment Variables & Integrations
The project supports optional credentials via a `.env` file (see `.env.example`):
*   `NOTION_API_TOKEN`: Optional, enables `Show-Dashboard.ps1` to sync tasks with a Notion workspace. If missing, the script gracefully falls back to a local offline tasks cache.
*   `LOCOFY_PERSONAL_ACCESS_TOKEN` / `LOCOFY_PROJECT_ID`: Placeholders for syncing Figma exports via Locofy.
*   *Note:* The core site works 100% offline and statically; no live databases or external APIs are essential for rendering.

---

## 5. Guidelines for Future AI Agents
When modifying this codebase, please adhere to these design and architectural rules:
1.  **Preserve Transform Variables:** All card alignments must remain driven by CSS variables in `:root` (e.g. `--img-menu-0-transform`). Do not hardcode style attributes on image elements directly.
2.  **Case Sensitivity on Paths:** Ensure all raw image paths exactly match the filenames inside `FOTOS JADE/` (e.g. `HAMBURGUESA REGIONAL.JPG`, `_MG_9539.jpg`) to avoid broken references on case-sensitive servers.
3.  **UI/UX Guardrails:** The styling must always respect the *ADHD-friendly visual segmentation* (clean headings, clear sections, premium kerning, and gold accents).
4.  **No Placeholders:** If adding new images, either use existing photos from `FOTOS JADE/` or generate raw visuals. Do not use generic placeholders.
5.  **Keep Production Clean:** Always verify that edit mode overlays and editor scripts stay strictly disabled for production hostnames.
