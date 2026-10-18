const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'logo');
const inputPath = path.join(outDir, 'FURAA_logo.jpeg');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processLogo() {
  // 1. Copy the exact original file
  fs.copyFileSync(inputPath, path.join(outDir, 'furaa-logo-original.jpg'));

  // 2. Trim the whitespace around the logo
  const trimmed = await sharp(inputPath)
    .trim({ threshold: 12 })
    .toBuffer({ resolveWithObject: true });
  
  const { width, height } = trimmed.info;
  console.log(`Trimmed size: ${width}x${height}`);

  const { data } = await sharp(trimmed.data)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const darkLogoBuf = Buffer.alloc(width * height * 4);
  const lightLogoBuf = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const idx = i * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const saturation = maxVal - minVal;
    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

    // Is it background?
    // Pure or near pure white
    if (minVal >= 250 && saturation < 8) {
      darkLogoBuf[idx] = 0;
      darkLogoBuf[idx + 1] = 0;
      darkLogoBuf[idx + 2] = 0;
      darkLogoBuf[idx + 3] = 0;

      lightLogoBuf[idx] = 255;
      lightLogoBuf[idx + 1] = 255;
      lightLogoBuf[idx + 2] = 255;
      lightLogoBuf[idx + 3] = 0;
      continue;
    }

    // Determine if this pixel is colored (green leaf or brown soil)
    const isGreen = (g > r + 15 && g > b + 15) || (g > 80 && g > r && g > b + 10);
    const isSoil = (r > b + 18 && r > g && r < 180 && b < 100);
    const isColored = isGreen || isSoil || (saturation > 25 && brightness < 235);

    if (isColored) {
      // For colored pixels on white background:
      // Background is ~255. Calculate alpha based on distance from white:
      let alpha = 1.0;
      if (minVal > 180) {
        alpha = Math.max(0, Math.min(1, (255 - brightness) / 75));
      }

      const a255 = Math.round(alpha * 255);
      if (a255 === 0) {
        darkLogoBuf[idx + 3] = 0;
        lightLogoBuf[idx + 3] = 0;
        continue;
      }

      // Un-mix background white (C = (C_obs - 255*(1-a)) / a)
      const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 255 * (1 - alpha)) / Math.max(0.01, alpha))));
      const newR = unmix(r);
      const newG = unmix(g);
      const newB = unmix(b);

      darkLogoBuf[idx] = newR;
      darkLogoBuf[idx + 1] = newG;
      darkLogoBuf[idx + 2] = newB;
      darkLogoBuf[idx + 3] = a255;

      // Both versions keep the identical vibrant colored leaves and soil!
      lightLogoBuf[idx] = newR;
      lightLogoBuf[idx + 1] = newG;
      lightLogoBuf[idx + 2] = newB;
      lightLogoBuf[idx + 3] = a255;
    } else {
      // Neutral pixel (black/grey lettering or edge anti-aliasing)
      // Estimate alpha: black on white background => alpha = 1 - (brightness / 255)
      // Any brightness above 246 is transparent
      let alpha = 0;
      if (brightness < 246) {
        alpha = Math.max(0, Math.min(1, (246 - brightness) / 246));
      }

      // Apply a slight contrast curve to keep text crisp
      alpha = Math.pow(alpha, 0.95);
      const a255 = Math.round(alpha * 255);

      if (a255 === 0) {
        darkLogoBuf[idx + 3] = 0;
        lightLogoBuf[idx + 3] = 0;
        continue;
      }

      // Dark logo: pure black/neutral with anti-aliasing
      // Un-mix background white
      const unmix = (c) => Math.round(Math.max(0, Math.min(255, (c - 246 * (1 - alpha)) / Math.max(0.01, alpha))));
      darkLogoBuf[idx] = unmix(r);
      darkLogoBuf[idx + 1] = unmix(g);
      darkLogoBuf[idx + 2] = unmix(b);
      darkLogoBuf[idx + 3] = a255;

      // Light logo: crisp pure white lettering with exact anti-aliasing!
      lightLogoBuf[idx] = 255;
      lightLogoBuf[idx + 1] = 255;
      lightLogoBuf[idx + 2] = 255;
      lightLogoBuf[idx + 3] = a255;
    }
  }

  // Save dark logo
  await sharp(darkLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'furaa-logo.png'));
  console.log('Saved perfected furaa-logo.png');

  // Save light logo
  await sharp(lightLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'furaa-logo-light.png'));
  console.log('Saved perfected furaa-logo-light.png');

  // Also create a crisp 512x512 favicon / app icon focusing on the U-sprout
  // The 'U' with the soil and sprout is approximately:
  // x: from 135 to 355, y: from 10 to 210
  const uX = Math.round(width * 0.145);
  const uW = Math.round(width * 0.25);
  const uY = Math.round(height * 0.05);
  const uH = Math.round(height * 0.92);

  await sharp(lightLogoBuf, { raw: { width, height, channels: 4 } })
    .extract({ left: uX, top: uY, width: uW, height: uH })
    .resize(512, 512, { fit: 'contain', background: { r: 26, g: 61, b: 31, alpha: 1 } })
    .png()
    .toFile(path.join(outDir, 'furaa-app-icon.png'));
  console.log('Saved furaa-app-icon.png');

  // Test composite on dark green
  const bg = sharp({
    create: {
      width: width + 60,
      height: height + 60,
      channels: 4,
      background: { r: 26, g: 61, b: 31, alpha: 1 }
    }
  });
  await bg.composite([{ input: path.join(outDir, 'furaa-logo-light.png'), left: 30, top: 30 }])
    .png()
    .toFile(path.join(outDir, 'preview-on-dark.png'));
  console.log('Saved updated preview-on-dark.png');
}

processLogo().catch(console.error);
