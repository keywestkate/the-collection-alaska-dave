const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle' });

  // Wait for fonts
  await page.waitForTimeout(2000);

  await page.pdf({
    path: path.resolve(__dirname, 'Site_Overview.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
  });

  await browser.close();
  console.log('PDF saved: Site_Overview.pdf');
})();
