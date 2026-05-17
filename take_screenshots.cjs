const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: 'new' });
  
  const takeScreenshots = async (width, height, prefix) => {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    console.log(`Navigating to page at ${width}x${height}...`);
    await page.goto('http://localhost:5173/how-the-sprint-works', { waitUntil: 'networkidle0' });
    
    // Total slides = 10
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 1000)); // Wait for animations
      await page.screenshot({ path: `${prefix}_slide_${i}.jpg` });
      console.log(`Captured ${prefix} Slide ${i}`);
      // Click next button
      // document.querySelector('button[aria-label="Next scene"]').click()
      await page.keyboard.press('ArrowRight');
    }
    await page.close();
  };

  try {
    await takeScreenshots(375, 812, '/Users/swayamdebata/.gemini/antigravity/brain/99e04941-ba38-43df-aa03-65e3899c9ff5/artifacts/mobile');
    await takeScreenshots(1280, 800, '/Users/swayamdebata/.gemini/antigravity/brain/99e04941-ba38-43df-aa03-65e3899c9ff5/artifacts/desktop');
    console.log("Screenshots captured successfully.");
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
