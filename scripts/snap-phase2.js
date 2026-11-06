const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.resolve(__dirname, '../out');
const PORT = 3457;

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

async function runSnap() {
  const server = await createStaticServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const targetDir = path.resolve(__dirname, '../../snap-output');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  try {
    await page.setViewport({ width: 1440, height: 900 });

    // 1. Homepage Ten Pillars
    console.log('Capturing Homepage Ten Pillars...');
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    const pillarsSection = await page.$('#pillars');
    if (pillarsSection) {
      await page.evaluate((el) => el.scrollIntoView(), pillarsSection);
      await new Promise((r) => setTimeout(r, 600));
      await page.screenshot({ path: path.join(targetDir, 'phase2-homepage-pillars.png') });
    }

    // 2. Programs / FURAA Farms page
    console.log('Capturing FURAA Farms dedicated page...');
    await page.goto(`http://localhost:${PORT}/programs/furaa-farms`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(targetDir, 'phase2-furaa-farms.png') });

    // 3. Our Partners page
    console.log('Capturing Our Partners page...');
    await page.goto(`http://localhost:${PORT}/partnership`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(targetDir, 'phase2-partners.png') });

    // 4. Summer Camps
    console.log('Capturing Summer Camps page...');
    await page.goto(`http://localhost:${PORT}/summer-camps`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(targetDir, 'phase2-summer-camps.png') });

    console.log('Visual snapshots complete! Saved to', targetDir);
  } catch (err) {
    console.error('Error in visual capture:', err);
  } finally {
    await browser.close();
    server.close();
  }
}

runSnap();
