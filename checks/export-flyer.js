async (page) => {
  await page.setViewportSize({ width: 3340, height: 1450 });
  await page.evaluate(() => {
    document.querySelector("header").style.display = "none";
    const main = document.querySelector("main");
    main.style.padding = "0";
    main.style.margin = "0";
    const stage = document.getElementById("stage");
    stage.dataset.view = "overview";
    stage.style.width = "3240px";
    stage.style.maxWidth = "none";
    stage.style.margin = "0";
    document.getElementById("toneNote").style.display = "none";
  });

  const geometry = await page.evaluate(() => {
    const rect = (selector) => {
      const box = document.querySelector(selector).getBoundingClientRect();
      return { left: box.left, right: box.right, width: box.width, height: box.height };
    };
    return {
      panorama: rect("#panorama"),
      slides: [rect(".slide-1"), rect(".slide-2"), rect(".slide-3")],
      water: rect(".ball-water"),
      fire: rect(".ball-fire"),
    };
  });
  const [first, second, third] = geometry.slides;
  const exactPanels = geometry.panorama.width === 3240
    && geometry.panorama.height === 1350
    && geometry.slides.every((slide) => slide.width === 1080 && slide.height === 1350);
  const crossingCuts = geometry.water.left < first.right && geometry.water.right > second.left
    && geometry.fire.left < second.right && geometry.fire.right > third.left;
  if (!exactPanels || !crossingCuts) {
    throw new Error(`Invalid panorama geometry: ${JSON.stringify(geometry)}`);
  }

  const panorama = page.locator("#panorama");
  await panorama.screenshot({ path: "output/cafe-jade-final-mundial/00-panorama-completo.png" });

  const outputs = [
    [".slide-1", "output/cafe-jade-final-mundial/01-la-final-se-vive-aqui.png"],
    [".slide-2", "output/cafe-jade-final-mundial/02-argentina-vs-espana.png"],
    [".slide-3", "output/cafe-jade-final-mundial/03-vivela-en-buena-compania.png"],
  ];

  for (const [selector, path] of outputs) {
    await page.locator(selector).screenshot({ path });
  }
}
