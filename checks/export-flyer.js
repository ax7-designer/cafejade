async (page) => {
  await page.setViewportSize({ width: 1180, height: 1450 });
  await page.evaluate(() => {
    document.querySelector("header").style.display = "none";
    const main = document.querySelector("main");
    main.style.padding = "0";
    main.style.margin = "0";
    const stage = document.getElementById("stage");
    stage.style.display = "block";
    stage.style.width = "1080px";
    stage.style.margin = "0";
    document.getElementById("toneNote").style.display = "none";
    document.querySelectorAll(".slide").forEach((slide) => {
      slide.style.width = "1080px";
      slide.style.height = "1350px";
      slide.style.maxWidth = "none";
      slide.style.margin = "0";
    });
  });

  const outputs = [
    [".slide-1", "output/cafe-jade-final-mundial/01-la-final-se-vive-aqui.png"],
    [".slide-2", "output/cafe-jade-final-mundial/02-argentina-vs-espana.png"],
    [".slide-3", "output/cafe-jade-final-mundial/03-vivela-en-buena-compania.png"],
  ];

  for (const [selector, path] of outputs) {
    await page.locator(selector).screenshot({ path });
  }
}
