const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const logoDir = path.join(projectRoot, 'public', 'images', 'logo');
const inputFile = path.join(logoDir, 'FURAA_logo.jpeg');

async function main() {
  console.log('=== FURAA V3: Generating Refined Logo & Emblem Assets (Version 3.2) ===');

  if (!fs.existsSync(inputFile)) {
    throw new Error(`Input file not found: ${inputFile}`);
  }

  // 1. Raw extraction of the U-sprout region from high-res source
  const rawExtract = await sharp(inputFile)
    .extract({ left: 250, top: 340, width: 345, height: 315 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = rawExtract.info;
  const data = rawExtract.data;

  const darkBuf = Buffer.alloc(width * height * 4);
  const lightBuf = Buffer.alloc(width * height * 4);

  // Exact arm bounds in rawExtract coordinate space:
  // Top level of U arms: y = 73
  const uArmTopY = 73;
  const leftArmOuterX = 14;
  const rightArmOuterX = 320;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx3 = (y * width + x) * 3;
      const idx4 = (y * width + x) * 4;

      const r = data[idx3];
      const g = data[idx3 + 1];
      const b = data[idx3 + 2];

      const minVal = Math.min(r, g, b);
      const maxVal = Math.max(r, g, b);
      const saturation = maxVal - minVal;
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

      // Check if colored pixel (green leaf sprout or brown soil mound)
      const isGreen = (g > r + 15 && g > b + 15) || (g > 80 && g > r && g > b + 10);
      const isSoil = (r > b + 16 && r > g && r < 195 && b < 125);
      const isColored = isGreen || isSoil || (saturation > 25 && brightness < 235);

      // Targeted artifact filtering:
      if (!isColored) {
        // If neutral pixel is above the U arms (y < uArmTopY), it is an artifact of F or R top bars
        if (y < uArmTopY) continue;

        // Clean outer bump on left arm from F crossbar
        if (x < leftArmOuterX) continue;

        // Clean outer edge on right arm
        if (x > rightArmOuterX) continue;
      } else {
        // Clean stray colored pixel outside logo bounds if any
        if (x < 45 && y < 70) continue;
        if (x > 280 && y < 70) continue;
      }

      // Background pure white threshold
      if (minVal >= 242 && saturation < 10) {
        continue;
      }

      if (isColored) {
        let alpha = 1.0;
        if (minVal > 180) {
          alpha = Math.max(0, Math.min(1, (255 - brightness) / 75));
        }
        const a255 = Math.round(alpha * 255);
        if (a255 === 0) continue;

        const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 255 * (1 - alpha)) / Math.max(0.01, alpha))));
        const newR = unmix(r);
        const newG = unmix(g);
        const newB = unmix(b);

        darkBuf[idx4] = newR;
        darkBuf[idx4 + 1] = newG;
        darkBuf[idx4 + 2] = newB;
        darkBuf[idx4 + 3] = a255;

        lightBuf[idx4] = newR;
        lightBuf[idx4 + 1] = newG;
        lightBuf[idx4 + 2] = newB;
        lightBuf[idx4 + 3] = a255;
      } else {
        // Neutral black letter U
        let alpha = 0;
        if (brightness < 246) {
          alpha = Math.max(0, Math.min(1, (246 - brightness) / 246));
        }
        alpha = Math.pow(alpha, 0.95);
        const a255 = Math.round(alpha * 255);
        if (a255 === 0) continue;

        const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 246 * (1 - alpha)) / Math.max(0.01, alpha))));

        // Dark version: rich deep charcoal #0A180D
        darkBuf[idx4] = unmix(r);
        darkBuf[idx4 + 1] = unmix(g);
        darkBuf[idx4 + 2] = unmix(b);
        darkBuf[idx4 + 3] = a255;

        // Light version: crisp solid white letter
        lightBuf[idx4] = 255;
        lightBuf[idx4 + 1] = 255;
        lightBuf[idx4 + 2] = 255;
        lightBuf[idx4 + 3] = a255;
      }
    }
  }

  // Trim to tight bounding box
  const trimmedDark = await sharp(darkBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const trimmedLight = await sharp(lightBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const tW = trimmedDark.info.width;
  const tH = trimmedDark.info.height;
  console.log(`Trimmed U-sprout dimensions: ${tW}x${tH}`);

  // Save base U-sprouts
  await sharp(trimmedDark.data).toFile(path.join(logoDir, 'furaa-sprout-dark.png'));
  await sharp(trimmedLight.data).toFile(path.join(logoDir, 'furaa-sprout-light.png'));

  // 2. Build 512x512 High-Res Master Assets
  const targetH = 430;
  const targetW = Math.round(tW * (targetH / tH));

  const darkScaled = await sharp(trimmedDark.data)
    .resize(targetW, targetH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const lightScaled = await sharp(trimmedLight.data)
    .resize(targetW, targetH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const leftOffset = Math.round((512 - targetW) / 2);
  const topOffset = Math.round((512 - targetH) / 2);

  // A) Primary compact emblem (transparent bg, dark U for light backgrounds)
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: darkScaled, left: leftOffset, top: topOffset }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem.png'));
  console.log('Saved furaa-emblem.png');

  // B) Light compact emblem (transparent bg, white U for dark backgrounds e.g. navbar/footer)
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: lightScaled, left: leftOffset, top: topOffset }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem-light.png'));
  console.log('Saved furaa-emblem-light.png');

  // C) Circular Badge Emblem (Solid #0A180D disc + elegant gold border + large prominent U-sprout)
  const badgeSvgBase = `
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
    </defs>
    <!-- Deep green disc -->
    <circle cx="256" cy="256" r="250" fill="url(#bg)" stroke="url(#gold)" stroke-width="8" />
    <circle cx="256" cy="256" r="240" fill="none" stroke="rgba(201,149,42,0.3)" stroke-width="2" />
  </svg>`;

  // In the circular badge, the U-sprout fills the center boldly (385px height)
  const badgeSproutH = 385;
  const badgeSproutW = Math.round(tW * (badgeSproutH / tH));
  const badgeSprout = await sharp(trimmedLight.data)
    .resize(badgeSproutW, badgeSproutH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const badgeLeft = Math.round((512 - badgeSproutW) / 2);
  const badgeTop = Math.round((512 - badgeSproutH) / 2) + 6;

  await sharp(Buffer.from(badgeSvgBase))
    .composite([{ input: badgeSprout, left: badgeLeft, top: badgeTop }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(logoDir, 'furaa-emblem-badge.png'));
  console.log('Saved furaa-emblem-badge.png');

  // Copy to app-icon
  fs.copyFileSync(
    path.join(logoDir, 'furaa-emblem-badge.png'),
    path.join(logoDir, 'furaa-app-icon.png')
  );
  console.log('Saved furaa-app-icon.png');

  // 3. Generate Favicons and App Icons in public/ and src/app/
  await sharp(path.join(logoDir, 'furaa-emblem-badge.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(projectRoot, 'src', 'app', 'icon.png'));

  await sharp(path.join(logoDir, 'furaa-emblem-badge.png'))
    .resize(180, 180)
    .png()
    .toFile(path.join(projectRoot, 'src', 'app', 'apple-icon.png'));

  await sharp(path.join(logoDir, 'furaa-emblem-badge.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(projectRoot, 'public', 'icon-32.png'));

  await sharp(path.join(logoDir, 'furaa-emblem-badge.png'))
    .resize(48, 48)
    .toFormat('png')
    .toFile(path.join(projectRoot, 'public', 'favicon.ico'));

  await sharp(path.join(logoDir, 'furaa-emblem-badge.png'))
    .resize(48, 48)
    .toFormat('png')
    .toFile(path.join(projectRoot, 'src', 'app', 'favicon.ico'));

  console.log('Updated favicons & app icons.');

  // 4. Create SVG representations
  const lightBase64 = (await sharp(path.join(logoDir, 'furaa-emblem-light.png')).toBuffer()).toString('base64');
  const darkBase64 = (await sharp(path.join(logoDir, 'furaa-emblem.png')).toBuffer()).toString('base64');
  const badgeBase64 = (await sharp(path.join(logoDir, 'furaa-emblem-badge.png')).toBuffer()).toString('base64');

  const svgLight = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${lightBase64}" width="512" height="512" />
</svg>`;

  const svgDark = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${darkBase64}" width="512" height="512" />
</svg>`;

  const svgBadge = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${badgeBase64}" width="512" height="512" />
</svg>`;

  fs.writeFileSync(path.join(logoDir, 'furaa-emblem-light.svg'), svgLight);
  fs.writeFileSync(path.join(logoDir, 'furaa-emblem.svg'), svgDark);
  fs.writeFileSync(path.join(logoDir, 'furaa-emblem-badge.svg'), svgBadge);

  console.log('Updated SVGs.');
  console.log('=== Logo Generation Complete ===');
}

main().catch(console.error);
