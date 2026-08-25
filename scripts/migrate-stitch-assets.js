/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');
const stitchBase = path.join(rootDir, 'docs/reference/stitch');

async function processImage(sourcePath, targetPath, options = {}) {
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let pipeline = sharp(sourcePath);
  if (options.crop) {
    pipeline = pipeline.extract(options.crop);
  }
  if (options.resize) {
    pipeline = pipeline.resize(options.resize);
  }

  await pipeline
    .webp({ quality: options.quality || 90, effort: 6 })
    .toFile(targetPath);

  const stats = fs.statSync(targetPath);
  console.log(`[CONVERTED] ${path.relative(publicDir, targetPath)} (${(stats.size / 1024).toFixed(1)} KB)`);
}

async function runMigration() {
  console.log("=== STARTING STITCH VISUAL MIGRATION ===");

  // Background System Mapping
  const backgroundMappings = [
    {
      source: 'premium_hero_background_for_enterprise_ai_website._subject_sophisticated/screen.png',
      target: 'hero/hero-background-v1.webp'
    },
    {
      source: 'blueprint_background_for_engineering_manifesto._subject_dark_architectural/screen.png',
      target: 'hero/blueprint-background-v1.webp'
    },
    {
      source: 'mission_control_background_for_ibm_journey._subject_architectural_symmetry/screen.png',
      target: 'backgrounds/ibm-journey-background-v1.webp'
    },
    {
      source: 'enterprise_architecture_background_for_projects._subject_technical_blueprint/screen.png',
      target: 'backgrounds/projects-background-v1.webp'
    },
    {
      source: 'enterprise_architecture_background_for_projects._subject_technical_blueprint/screen.png',
      target: 'backgrounds/enterprise-grid-v1.webp'
    },
    {
      source: 'scientific_computing_background_for_research._subject_abstract_neural_network/screen.png',
      target: 'backgrounds/research-background-v1.webp'
    },
    {
      source: 'digital_research_library_background_for_publications._subject_editorial_paper/screen.png',
      target: 'backgrounds/publications-background-v1.webp'
    },
    {
      source: 'knowledge_shared_background_for_stage_speaking._subject_high_end_editorial/screen.png',
      target: 'backgrounds/gallery-background-v1.webp'
    },
    {
      source: 'engineering_legacy_background_for_milestones._subject_elegant_museum_lighting/screen.png',
      target: 'backgrounds/milestones-background-v1.webp'
    },
    {
      source: 'global_collaboration_background_for_terminal._subject_extremely_subtle_almost/screen.png',
      target: 'backgrounds/footer-background-v1.webp'
    }
  ];

  for (const map of backgroundMappings) {
    const src = path.join(stitchBase, map.source);
    const tgt = path.join(imagesDir, map.target);
    await processImage(src, tgt);
  }

  // Profile Avatar
  const profileHeroPath = path.join(imagesDir, 'profile/ramana-sree-hero-v1.webp');
  const avatarPath = path.join(imagesDir, 'profile/ramana-sree-avatar-v1.webp');
  if (fs.existsSync(profileHeroPath)) {
    await processImage(profileHeroPath, avatarPath, { resize: { width: 400, height: 400, fit: 'cover' } });
  }

  // IBM Superstar Badge
  const ibmChampionSrc = path.join(imagesDir, 'ibm/ibm-champion-2026.webp');
  const ibmSuperstarTgt = path.join(imagesDir, 'ibm/ibm-superstar-2026.webp');
  if (fs.existsSync(ibmChampionSrc)) {
    await processImage(ibmChampionSrc, ibmSuperstarTgt);
  }

  // Projects Artifact Screenshots (Extracted from Stitch Screen Exports)
  const projectScreen = path.join(stitchBase, 'architecture_artifacts_v1.1_projects/screen.png');
  if (fs.existsSync(projectScreen)) {
    // Enterprise Code Analysis
    await processImage(projectScreen, path.join(imagesDir, 'projects/enterprise-code-analysis/enterprise-dashboard-v1.webp'), {
      crop: { left: 50, top: 100, width: 700, height: 450 }
    });
    await processImage(projectScreen, path.join(imagesDir, 'projects/enterprise-code-analysis/enterprise-architecture-v1.webp'), {
      crop: { left: 50, top: 600, width: 700, height: 450 }
    });

    // EcoTrace India
    await processImage(projectScreen, path.join(imagesDir, 'projects/ecotrace-india/ecotrace-dashboard-v1.webp'), {
      crop: { left: 50, top: 200, width: 680, height: 440 }
    });
    await processImage(projectScreen, path.join(imagesDir, 'projects/ecotrace-india/ecotrace-architecture-v1.webp'), {
      crop: { left: 50, top: 700, width: 680, height: 440 }
    });

    // Solar AI Framework
    await processImage(projectScreen, path.join(imagesDir, 'projects/solar-ai-framework/solar-defect-dashboard-v1.webp'), {
      crop: { left: 50, top: 300, width: 680, height: 440 }
    });
    await processImage(projectScreen, path.join(imagesDir, 'projects/solar-ai-framework/solar-architecture-v1.webp'), {
      crop: { left: 50, top: 800, width: 680, height: 440 }
    });
  }

  // Publications Screenshots
  const pubScreen = path.join(stitchBase, 'applied_ai_research_v1.1_scientific_computing/screen.png');
  if (fs.existsSync(pubScreen)) {
    await processImage(pubScreen, path.join(imagesDir, 'research/alzheimers-framework-v1.webp'), {
      crop: { left: 20, top: 50, width: 560, height: 400 }
    });
    await processImage(pubScreen, path.join(imagesDir, 'research/federated-edge-v1.webp'), {
      crop: { left: 20, top: 500, width: 560, height: 400 }
    });
    await processImage(pubScreen, path.join(imagesDir, 'research/archive-default-v1.webp'), {
      crop: { left: 20, top: 900, width: 560, height: 400 }
    });
  }

  // Gallery Screenshots
  const stageScreen = path.join(stitchBase, 'the_stage_v1.1_knowledge_shared/screen.png');
  if (fs.existsSync(stageScreen)) {
    await processImage(stageScreen, path.join(imagesDir, 'gallery/ieee-best-paper-2026.webp'), {
      crop: { left: 20, top: 50, width: 500, height: 380 }
    });
    await processImage(stageScreen, path.join(imagesDir, 'gallery/linux-foundation-mentorship.webp'), {
      crop: { left: 20, top: 450, width: 500, height: 380 }
    });
  }

  // Milestone Default Screenshot
  const milestoneScreen = path.join(stitchBase, 'milestones_v1.1_engineering_legacy/screen.png');
  if (fs.existsSync(milestoneScreen)) {
    await processImage(milestoneScreen, path.join(imagesDir, 'milestones/milestone-default-v1.webp'), {
      crop: { left: 50, top: 100, width: 900, height: 500 }
    });
  }

  // Clean up path.txt if exists
  const pathTxt = path.join(imagesDir, 'path.txt');
  if (fs.existsSync(pathTxt)) {
    fs.unlinkSync(pathTxt);
    console.log("[REMOVED] public/images/path.txt");
  }

  console.log("=== MIGRATION COMPLETE ===");
}

runMigration().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
