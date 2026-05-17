const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173/how-the-sprint-works', { waitUntil: 'networkidle0' });
  
  // Wait a bit for animations
  await new Promise(r => setTimeout(r, 1000));
  
  // Slide 12 is index 12 in the array, let's just scroll to it
  await page.evaluate(() => {
    document.getElementById('slide-12').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'slide-12.png' });

  await page.evaluate(() => {
    document.getElementById('slide-16').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'slide-16.png' });

  await page.evaluate(() => {
    document.getElementById('slide-17').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'slide-17.png' });

  await browser.close();
  console.log('Screenshots saved.');
})();
