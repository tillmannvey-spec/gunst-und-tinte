const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });

  try {
    await page.goto('http://localhost:3004', { waitUntil: 'networkidle', timeout: 10000 });

    // Full page screenshot
    await page.screenshot({
      path: '../.screenshots/iteration-2-full-page.png',
      fullPage: true
    });

    // Hero section
    await page.screenshot({
      path: '../.screenshots/iteration-2-hero.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    // Scroll and capture philosophy
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: '../.screenshots/iteration-2-philosophy.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    // Scroll and capture about
    await page.evaluate(() => window.scrollTo(0, 1800));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: '../.screenshots/iteration-2-about.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    // Scroll and capture atelier
    await page.evaluate(() => window.scrollTo(0, 2700));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: '../.screenshots/iteration-2-atelier.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    console.log('✅ Iteration 2 Screenshots erfolgreich erstellt');
  } catch (error) {
    console.error('❌ Fehler:', error.message);
  }

  await browser.close();
})();
