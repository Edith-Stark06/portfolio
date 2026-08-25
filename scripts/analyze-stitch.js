/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const stitchBase = path.join(__dirname, '../docs/reference/stitch');

async function analyze() {
  console.log("=== STITCH ASSETS ANALYSIS ===");
  const folders = fs.readdirSync(stitchBase);
  for (const f of folders) {
    const full = path.join(stitchBase, f);
    if (!fs.statSync(full).isDirectory()) continue;
    const files = fs.readdirSync(full);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp')) {
        const imgPath = path.join(full, file);
        const meta = await sharp(imgPath).metadata();
        const stats = fs.statSync(imgPath);
        console.log(`${f}/${file} -> ${meta.width}x${meta.height} (${meta.format.toUpperCase()}, ${(stats.size / 1024).toFixed(1)} KB)`);
      }
    }
  }
}

analyze().catch(err => console.error(err));
