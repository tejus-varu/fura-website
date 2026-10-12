const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeIcons() {
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'logo', 'furaa-logo.png');

  // Exact U bowl boundaries: left = 107, width = 203
  const sproutCropped = await sharp(logoPath)
    .extract({ left: 107, top: 20, width: 203, height: 195 })
    .toBuffer();

  const croppedMeta = await sharp(sproutCropped).metadata();
  const maxDim = Math.max(croppedMeta.width, croppedMeta.height);
  const pad = Math.round(maxDim * 0.12);
  const canvasSize = maxDim + pad * 2;

  // Generate 512x512 square icon with transparent background
  const icon512 = await sharp(sproutCropped)
    .resize(canvasSize - pad * 2, canvasSize - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: pad,
      bottom: pad,
      left: Math.round((canvasSize - (canvasSize - pad * 2)) / 2),
      right: Math.round((canvasSize - (canvasSize - pad * 2)) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(512, 512)
    .png()
    .toBuffer();

  // Save icon.png in src/app and public
  await sharp(icon512).resize(192, 192).png().toFile(path.join(__dirname, '..', 'src', 'app', 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(__dirname, '..', 'src', 'app', 'apple-icon.png'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(__dirname, '..', 'public', 'icon-32.png'));
  
  // Save as favicon.ico
  await sharp(icon512).resize(32, 32).png().toFile(path.join(__dirname, '..', 'src', 'app', 'favicon.ico'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));

  console.log('Successfully regenerated icons from new FURAA logo!');
}

makeIcons().catch(console.error);
