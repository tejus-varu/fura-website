const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.join(__dirname, '..', 'out');
const SCREENSHOT_DIR = path.join(__dirname, '..', 'public', 'qa-screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

// Simple MIME map
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
};

// Static file server for out/
function startServer(port = 3333) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';

      let filePath = path.join(OUT_DIR, reqPath);

      // Handle clean URLs (e.g. /partnership -> out/partnership.html, /modules/foundation -> out/modules/foundation.html)
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        const indexHtml = path.join(filePath, 'index.html');
        if (fs.existsSync(indexHtml)) {
          filePath = indexHtml;
        }
      }

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => {
      console.log(`Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function run() {
  const server = await startServer(3333);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 },
  ];

  const routes = [
    { name: 'homepage', path: '/' },
    { name: 'partnership', path: '/partnership' },
    { name: 'module-foundation', path: '/modules/foundation' },
    { name: 'module-exploration', path: '/modules/exploration' },
    { name: 'module-specialization', path: '/modules/specialization' },
  ];

  for (const route of routes) {
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
      await page.goto(`http://localhost:3333${route.path}`, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 600));

      const filename = `${route.name}_${vp.name}_${vp.width}.png`;
      const filepath = path.join(SCREENSHOT_DIR, filename);
      await page.screenshot({ path: filepath, fullPage: false });
      console.log(`Captured: ${filename}`);
    }
  }

  // Also capture the dropdown open state on desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3333/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Click on the Modules button in nav
  const modulesBtn = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('header nav button'));
    const btn = buttons.find(b => b.textContent.includes('Modules'));
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });

  if (modulesBtn) {
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'navbar_modules_dropdown_open_1440.png'),
      fullPage: false,
    });
    console.log('Captured: navbar_modules_dropdown_open_1440.png');
  }

  // Also capture Activity Mix Dashboard scrolled into view on desktop
  await page.evaluate(() => {
    const el = document.getElementById('activity-mix');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'dashboard_activity_mix_desktop_1440.png'),
    fullPage: false,
  });
  console.log('Captured: dashboard_activity_mix_desktop_1440.png');

  // Activity Mix Dashboard on mobile
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3333/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const el = document.getElementById('activity-mix');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'dashboard_activity_mix_mobile_375.png'),
    fullPage: false,
  });
  console.log('Captured: dashboard_activity_mix_mobile_375.png');

  await browser.close();
  server.close();
  console.log('Screenshot generation complete!');
}

run().catch((err) => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
