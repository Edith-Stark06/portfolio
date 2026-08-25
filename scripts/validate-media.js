/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Regex to extract all string values from media.ts that look like paths
const MEDIA_TS_PATH = path.join(__dirname, '../src/data/media.ts');
const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

function validateMedia() {
  console.log("Starting Media Validation...\n");

  if (!fs.existsSync(MEDIA_TS_PATH)) {
    console.error(`❌ Error: Could not find media.ts at ${MEDIA_TS_PATH}`);
    process.exit(1);
  }

  const mediaContent = fs.readFileSync(MEDIA_TS_PATH, 'utf-8');
  
  // Extract all paths using a regex (matches strings starting with /images/)
  const pathRegex = /"(\/images\/[^"]+)"/g;
  let match;
  const referencedPaths = new Set();
  const duplicates = new Set();
  
  while ((match = pathRegex.exec(mediaContent)) !== null) {
    const assetPath = match[1];
    if (referencedPaths.has(assetPath)) {
      duplicates.add(assetPath);
    }
    referencedPaths.add(assetPath);
  }

  let missingFiles = 0;
  
  console.log("--- Checking Referenced Assets ---");
  referencedPaths.forEach((assetPath) => {
    const fullPath = path.join(PUBLIC_DIR, assetPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ Missing: ${assetPath}`);
      missingFiles++;
    } else {
      console.log(`✅ Found: ${assetPath}`);
    }
  });

  if (duplicates.size > 0) {
    console.log("\n--- Warning: Duplicate References Detected ---");
    duplicates.forEach(d => console.log(`⚠️ Duplicate: ${d}`));
  }

  // Check for orphaned assets in public/images (excluding placeholders)
  console.log("\n--- Checking for Orphaned Assets ---");
  let orphanedFiles = 0;

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        const relativePath = fullPath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
        // Ignore placeholders directory from orphan check
        if (!relativePath.includes('/placeholders/') && !referencedPaths.has(relativePath)) {
          console.log(`⚠️ Orphaned: ${relativePath}`);
          orphanedFiles++;
        }
      }
    }
  }

  scanDirectory(IMAGES_DIR);

  console.log("\n--- Summary ---");
  console.log(`Total References in media.ts: ${referencedPaths.size}`);
  console.log(`Missing Files: ${missingFiles}`);
  console.log(`Duplicate Paths: ${duplicates.size}`);
  console.log(`Orphaned Assets: ${orphanedFiles}`);

  if (missingFiles > 0) {
    console.error("\n❌ Validation Failed: Missing assets detected. Please provide the required images or update media.ts to point to placeholders.");
    process.exit(1);
  } else {
    console.log("\n✅ Validation Passed! The media pipeline is healthy.");
  }
}

validateMedia();
