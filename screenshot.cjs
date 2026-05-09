const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const PAGES = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/about' },
  { name: 'programs', url: '/programs' },
  { name: 'partnership', url: '/partnership' },
  { name: 'safety', url: '/safety' },
  { name: 'nutrition', url: '/nutrition' },
  { name: 'summer-camps', url: '/summer-camps' },
  { name: 'contact', url: '/contact' }
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, 'public', 'qa-screenshots');

async function capture() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();

  for (const pageInfo of PAGES) {
    for (const viewport of VIEWPORTS) {
      console.log(`Capturing ${pageInfo.name} - ${viewport.name}...`);
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
      });

      try {
        await page.goto(`${BASE_URL}${pageInfo.url}`, {
          waitUntil: 'networkidle0',
          timeout: 120000
        });
        
        // Wait a bit for animations
        await new Promise(r => setTimeout(r, 1000));

        const fileName = `${pageInfo.name}-${viewport.name}.png`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        
        await page.screenshot({
          path: filePath,
          fullPage: true
        });
      } catch (error) {
        console.error(`Failed to capture ${pageInfo.name} - ${viewport.name}:`, error.message);
      }
    }
  }

  await browser.close();
  console.log('Screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
