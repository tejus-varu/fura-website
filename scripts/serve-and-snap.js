const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.resolve('out');
const PORT = 3456;

// Basic static server for out directory
function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
  };

  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    let filePath = path.join(OUT_DIR, reqUrl);

    // If directory or without extension, check for .html or index.html
    if (!path.extname(filePath)) {
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function runVisualTests() {
  const server = await createStaticServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const screenshotsDir = path.resolve('public/images/v3-qa');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  try {
    // 1. Desktop 1440x900 - Home & Header
    console.log('Capturing Desktop View (1440x900)...');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(screenshotsDir, '1-desktop-home.png') });

    // 2. Desktop - Explore Programs Dropdown Hover
    console.log('Hovering Explore Programs dropdown...');
    const exploreBtn = await page.waitForSelector('nav[aria-label="Mobile navigation"] button');
    await exploreBtn.hover();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(screenshotsDir, '2-desktop-explore-dropdown.png') });

    // 3. Desktop - Floating CTA & Slide-Over Drawer
    console.log('Clicking Floating Inquiry CTA button...');
    const floatingBtn = await page.waitForSelector('button[aria-label="Book a Demo or Inquire"]');
    await floatingBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(screenshotsDir, '3-desktop-inquiry-drawer.png') });

    // Close drawer
    const closeBtn = await page.waitForSelector('button[aria-label="Close inquiry drawer"]');
    await closeBtn.click();
    await new Promise((r) => setTimeout(r, 400));

    // 4. Tablet 768x1024
    console.log('Capturing Tablet View (768x1024)...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(screenshotsDir, '4-tablet-home.png') });

    // 5. Mobile 375x812 - Home
    console.log('Capturing Mobile View (375x812)...');
    await page.setViewport({ width: 375, height: 812 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(screenshotsDir, '5-mobile-home.png') });

    // 6. Mobile 375x812 - Mobile Drawer Menu
    console.log('Opening Mobile Menu Drawer...');
    const mobileMenuToggle = await page.waitForSelector('#mobile-menu-toggle');
    await mobileMenuToggle.click();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(screenshotsDir, '6-mobile-menu-drawer.png') });

    // 7. Mobile Accordion Open
    const accordionBtn = await page.waitForSelector('nav[aria-label="Mobile navigation"] button');
    if (accordionBtn) { await accordionBtn.click(); await new Promise((r) => setTimeout(r, 300)); await page.screenshot({ path: path.join(screenshotsDir, '7-mobile-accordion-open.png') }); }

    console.log('All V3 QA screenshots captured successfully in public/images/v3-qa!');
  } catch (err) {
    console.error('Error during QA visual test:', err);
  } finally {
    await browser.close();
    server.close();
  }
}

runVisualTests();
