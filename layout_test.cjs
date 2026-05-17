const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:5173/how-the-sprint-works', { waitUntil: 'networkidle' });
  
  for(let i=0; i<5; i++) {
    console.log(`\n--- SLIDE ${i} ---`);
    const bubbles = await page.$$eval(`#slide-${i} .font-comic`, els => els.map(e => e.closest('div.pointer-events-auto')?.getBoundingClientRect() || null));
    const images = await page.$$eval(`#slide-${i} img`, els => els.map(e => {
        const box = e.getBoundingClientRect();
        return { src: e.src.split('/').pop(), top: box.top, bottom: box.bottom, height: box.height, width: box.width, left: box.left, right: box.right };
    }));
    
    console.log("Images:");
    console.table(images);
    
    // Bubble boxes
    const bboxes = await page.$$eval(`#slide-${i} > div`, els => els.map(e => {
        const box = e.getBoundingClientRect();
        return { className: e.className.substring(0, 30), top: Math.round(box.top), bottom: Math.round(box.bottom), left: Math.round(box.left), right: Math.round(box.right) };
    }));
    console.log("Containers:");
    console.table(bboxes);
    
    // go to next slide
    if (i < 4) {
       await page.mouse.click(300, 400); // trigger any click if needed, or we just rely on slide ID
    }
  }
  await browser.close();
})();
