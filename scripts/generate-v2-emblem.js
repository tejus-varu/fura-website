const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.join(__dirname, '..');
const logoDir = path.join(projectRoot, 'public', 'images', 'logo');
const inputFile = path.join(logoDir, 'FURAA_logo.jpeg');

async function main() {
  console.log('--- Generating FURAA V2 Logo & Circular Emblem ---');

  if (!fs.existsSync(inputFile)) {
    throw new Error(`Input file not found at ${inputFile}`);
  }

  // 1. Load original high-res image
  const meta = await sharp(inputFile).metadata();
  console.log(`Original dimensions: ${meta.width}x${meta.height}`);

  // 2. Extract U-sprout motif precisely (left: 247, top: 310, width: 338, height: 270)
  const uMotifRaw = await sharp(inputFile)
    .extract({ left: 247, top: 310, width: 338, height: 270 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: uW, height: uH } = uMotifRaw.info;
  const rawData = uMotifRaw.data;

  // Unmix background to transparent RGBA
  const motifDarkBuf = Buffer.alloc(uW * uH * 4);
  const motifLightBuf = Buffer.alloc(uW * uH * 4);

  for (let i = 0; i < uW * uH; i++) {
    const idx3 = i * 3;
    const idx4 = i * 4;
    const r = rawData[idx3];
    const g = rawData[idx3 + 1];
    const b = rawData[idx3 + 2];

    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const saturation = maxVal - minVal;
    const brightness = r * 0.299 + g * 0.587 + b * 0.114;

    // Background white check
    if (minVal >= 245 && saturation < 10) {
      motifDarkBuf[idx4 + 3] = 0;
      motifLightBuf[idx4 + 3] = 0;
      continue;
    }

    // Colored pixels: green leaf or brown soil
    const isGreen = (g > r + 15 && g > b + 15) || (g > 80 && g > r && g > b + 10);
    const isSoil = (r > b + 18 && r > g && r < 185 && b < 105);
    const isColored = isGreen || isSoil || (saturation > 25 && brightness < 235);

    if (isColored) {
      let alpha = 1.0;
      if (minVal > 180) {
        alpha = Math.max(0, Math.min(1, (255 - brightness) / 75));
      }
      const a255 = Math.round(alpha * 255);
      if (a255 === 0) {
        motifDarkBuf[idx4 + 3] = 0;
        motifLightBuf[idx4 + 3] = 0;
        continue;
      }
      const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 255 * (1 - alpha)) / Math.max(0.01, alpha))));
      const newR = unmix(r);
      const newG = unmix(g);
      const newB = unmix(b);

      motifDarkBuf[idx4] = newR;
      motifDarkBuf[idx4 + 1] = newG;
      motifDarkBuf[idx4 + 2] = newB;
      motifDarkBuf[idx4 + 3] = a255;

      motifLightBuf[idx4] = newR;
      motifLightBuf[idx4 + 1] = newG;
      motifLightBuf[idx4 + 2] = newB;
      motifLightBuf[idx4 + 3] = a255;
    } else {
      // Neutral (U-bowl letter outline and anti-aliasing)
      let alpha = 0;
      if (brightness < 246) {
        alpha = Math.max(0, Math.min(1, (246 - brightness) / 246));
      }
      alpha = Math.pow(alpha, 0.95);
      const a255 = Math.round(alpha * 255);
      if (a255 === 0) {
        motifDarkBuf[idx4 + 3] = 0;
        motifLightBuf[idx4 + 3] = 0;
        continue;
      }
      const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 246 * (1 - alpha)) / Math.max(0.01, alpha))));

      // Dark version (charcoal letter)
      motifDarkBuf[idx4] = unmix(r);
      motifDarkBuf[idx4 + 1] = unmix(g);
      motifDarkBuf[idx4 + 2] = unmix(b);
      motifDarkBuf[idx4 + 3] = a255;

      // Light version (crisp white letter)
      motifLightBuf[idx4] = 255;
      motifLightBuf[idx4 + 1] = 255;
      motifLightBuf[idx4 + 2] = 255;
      motifLightBuf[idx4 + 3] = a255;
    }
  }

  // Trim the transparent bounds to center the motif
  const trimmedMotifDark = await sharp(motifDarkBuf, { raw: { width: uW, height: uH, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const trimmedMotifLight = await sharp(motifLightBuf, { raw: { width: uW, height: uH, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer({ resolveWithObject: true });

  console.log(`Trimmed motif dimensions: ${trimmedMotifDark.info.width}x${trimmedMotifDark.info.height}`);

  // Save isolated motifs
  await sharp(trimmedMotifDark.data)
    .toFile(path.join(logoDir, 'furaa-sprout-dark.png'));
  await sharp(trimmedMotifLight.data)
    .toFile(path.join(logoDir, 'furaa-sprout-light.png'));
  console.log('Saved isolated sprout motifs.');

  // 3. Compose Circular Emblem Badges (512x512)
  // We will build:
  // A) Badge version: Solid dark green disk (#0A180D) + concentric gold rings + sprout motif
  // B) Light version: Transparent background + white/gold rings + light sprout motif
  // C) Dark version: Transparent background + dark green/gold rings + dark sprout motif

  // Prepare resized sprout motif to fit medallion center (approx 260px wide/tall)
  const sproutForBadge = await sharp(trimmedMotifLight.data)
    .resize(260, 260, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sproutForLight = await sharp(trimmedMotifLight.data)
    .resize(260, 260, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const sproutForDark = await sharp(trimmedMotifDark.data)
    .resize(260, 260, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // SVG frame templates
  const svgBadgeFrame = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F2D179" />
        <stop offset="50%" stop-color="#C9952A" />
        <stop offset="100%" stop-color="#946917" />
      </linearGradient>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#143419" />
        <stop offset="100%" stop-color="#0A180D" />
      </linearGradient>
      <path id="textCircleTop" d="M 80,256 A 176,176 0 1,1 432,256" fill="none" />
      <path id="textCircleBottom" d="M 432,256 A 176,176 0 0,1 80,256" fill="none" />
    </defs>
    <!-- Solid dark green disc -->
    <circle cx="256" cy="256" r="250" fill="url(#bg)" stroke="url(#gold)" stroke-width="7" />
    <!-- Fine inner gold accent ring -->
    <circle cx="256" cy="256" r="236" fill="none" stroke="rgba(201,149,42,0.4)" stroke-width="1.5" stroke-dasharray="4,4" />
    <!-- Core medallion ring -->
    <circle cx="256" cy="256" r="150" fill="none" stroke="url(#gold)" stroke-width="2" />
    <!-- Arch text top -->
    <text font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#F4EDE0" letter-spacing="3.8">
      <textPath href="#textCircleTop" startOffset="50%" text-anchor="middle">
        FUTURE READY AGRICULTURE ACADEMY
      </textPath>
    </text>
    <!-- Arch text bottom -->
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="url(#gold)" letter-spacing="5">
      <textPath href="#textCircleBottom" startOffset="50%" text-anchor="middle">
        • FURAA •
      </textPath>
    </text>
  </svg>`;

  const svgLightFrame = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F2D179" />
        <stop offset="50%" stop-color="#C9952A" />
        <stop offset="100%" stop-color="#946917" />
      </linearGradient>
      <path id="textCircleTop" d="M 80,256 A 176,176 0 1,1 432,256" fill="none" />
      <path id="textCircleBottom" d="M 432,256 A 176,176 0 0,1 80,256" fill="none" />
    </defs>
    <!-- Transparent outer ring -->
    <circle cx="256" cy="256" r="250" fill="none" stroke="url(#gold)" stroke-width="6" />
    <circle cx="256" cy="256" r="236" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="4,4" />
    <circle cx="256" cy="256" r="150" fill="none" stroke="url(#gold)" stroke-width="2" />
    <text font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" letter-spacing="3.8">
      <textPath href="#textCircleTop" startOffset="50%" text-anchor="middle">
        FUTURE READY AGRICULTURE ACADEMY
      </textPath>
    </text>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="url(#gold)" letter-spacing="5">
      <textPath href="#textCircleBottom" startOffset="50%" text-anchor="middle">
        • FURAA •
      </textPath>
    </text>
  </svg>`;

  const svgDarkFrame = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#B58320" />
        <stop offset="50%" stop-color="#8F6310" />
        <stop offset="100%" stop-color="#6E4C0C" />
      </linearGradient>
      <path id="textCircleTop" d="M 80,256 A 176,176 0 1,1 432,256" fill="none" />
      <path id="textCircleBottom" d="M 432,256 A 176,176 0 0,1 80,256" fill="none" />
    </defs>
    <!-- Transparent outer ring for light bg -->
    <circle cx="256" cy="256" r="250" fill="none" stroke="#143419" stroke-width="6" />
    <circle cx="256" cy="256" r="236" fill="none" stroke="rgba(20,52,25,0.3)" stroke-width="1.5" stroke-dasharray="4,4" />
    <circle cx="256" cy="256" r="150" fill="none" stroke="url(#gold)" stroke-width="2" />
    <text font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#143419" letter-spacing="3.8">
      <textPath href="#textCircleTop" startOffset="50%" text-anchor="middle">
        FUTURE READY AGRICULTURE ACADEMY
      </textPath>
    </text>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#8F6310" letter-spacing="5">
      <textPath href="#textCircleBottom" startOffset="50%" text-anchor="middle">
        • FURAA •
      </textPath>
    </text>
  </svg>`;

  // Render PNGs by compositing frame + sprout
  // 1. Badge (Solid disc)
  await sharp(Buffer.from(svgBadgeFrame))
    .composite([{ input: sproutForBadge, left: 126, top: 126 }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem-badge.png'));
  console.log('Saved furaa-emblem-badge.png');

  // 2. Light emblem (for dark navbar/footer)
  await sharp(Buffer.from(svgLightFrame))
    .composite([{ input: sproutForLight, left: 126, top: 126 }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem-light.png'));
  console.log('Saved furaa-emblem-light.png');

  // 3. Dark emblem (for light pages)
  await sharp(Buffer.from(svgDarkFrame))
    .composite([{ input: sproutForDark, left: 126, top: 126 }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem.png'));
  console.log('Saved furaa-emblem.png');

  // 4. Update Favicons & App Icons from the circular emblem badge
  const badgeFile = path.join(logoDir, 'furaa-emblem-badge.png');

  // App icon 512x512
  await sharp(badgeFile)
    .resize(512, 512)
    .png()
    .toFile(path.join(projectRoot, 'src', 'app', 'icon.png'));

  // Apple touch icon 180x180
  await sharp(badgeFile)
    .resize(180, 180)
    .png()
    .toFile(path.join(projectRoot, 'src', 'app', 'apple-icon.png'));

  // Public icon-32.png
  await sharp(badgeFile)
    .resize(32, 32)
    .png()
    .toFile(path.join(projectRoot, 'public', 'icon-32.png'));

  // Favicon.ico (32x32 PNG container)
  await sharp(badgeFile)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(projectRoot, 'src', 'app', 'favicon.ico'));

  await sharp(badgeFile)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(projectRoot, 'public', 'favicon.ico'));

  console.log('Updated all favicons and app icons with circular emblem badge.');

  // Also write SVG source files
  fs.writeFileSync(path.join(logoDir, 'furaa-emblem-light.svg'), svgLightFrame);
  fs.writeFileSync(path.join(logoDir, 'furaa-emblem.svg'), svgDarkFrame);
  fs.writeFileSync(path.join(logoDir, 'furaa-emblem-badge.svg'), svgBadgeFrame);
  console.log('Saved SVG files.');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
