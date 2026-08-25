# Media Management Guide

This guide details the centralized media architecture for the Enterprise AI Engineering Showcase portfolio. The `src/data/media.ts` manifest acts as the single source of truth for all imagery. 

If an image is missing, the system gracefully falls back to optimized placeholders.

---

### Profile & Branding

**profile.hero**
- **Location:** `/public/images/profile/ramana-sree-hero-v1.webp`
- **Recommended:** `1800×2400`, `WEBP`, `<350 KB`
- **Used on:** Home Hero / Architect Profile Header

**profile.avatar**
- **Location:** `/public/images/profile/ramana-sree-avatar-v1.webp`
- **Recommended:** `500×500`, `WEBP`, `<100 KB`
- **Used on:** Global Navigation / Contact / Author tags

**hero.background**
- **Location:** `/public/images/hero/hero-background-v1.webp`
- **Recommended:** `2560×1440`, `WEBP`, `<500 KB`
- **Used on:** Home Hero Parallax

**hero.blueprint**
- **Location:** `/public/images/hero/blueprint-background-v1.webp`
- **Recommended:** `2560×1440`, `WEBP` (Grayscale/Alpha), `<300 KB`
- **Used on:** Architect / Research Archive Headers

---

### IBM Journey

**ibm.champion**
- **Location:** `/public/images/ibm/ibm-champion-2026.webp`
- **Recommended:** `800×800`, `WEBP` or `PNG` (transparent), `<200 KB`
- **Used on:** IBM Journey Timeline

**ibm.superstar**
- **Location:** `/public/images/ibm/ibm-superstar-2026.webp`
- **Recommended:** `800×800`, `WEBP`, `<200 KB`
- **Used on:** IBM Journey Timeline

**ibm.techxchange**
- **Location:** `/public/images/ibm/ibm-techxchange-panel-2025.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<400 KB`
- **Used on:** IBM Journey Highlights / Gallery

---

### Projects

**project.enterprise.hero**
- **Location:** `/public/images/projects/enterprise-code-analysis/enterprise-dashboard-v1.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<500 KB`
- **Used on:** Project Detail Hero

**project.enterprise.architecture**
- **Location:** `/public/images/projects/enterprise-code-analysis/enterprise-architecture-v1.webp`
- **Recommended:** `2400×1400`, `PNG` or `WEBP` (transparent background), `<600 KB`
- **Used on:** Project Detail Architecture Section

**project.ecotrace.hero**
- **Location:** `/public/images/projects/ecotrace-india/ecotrace-dashboard-v1.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<500 KB`
- **Used on:** Project Detail Hero

**project.ecotrace.architecture**
- **Location:** `/public/images/projects/ecotrace-india/ecotrace-architecture-v1.webp`
- **Recommended:** `2400×1400`, `PNG` or `WEBP` (transparent background), `<600 KB`
- **Used on:** Project Detail Architecture Section

**project.solar.hero**
- **Location:** `/public/images/projects/solar-ai-framework/solar-defect-dashboard-v1.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<500 KB`
- **Used on:** Project Detail Hero

**project.solar.architecture**
- **Location:** `/public/images/projects/solar-ai-framework/solar-architecture-v1.webp`
- **Recommended:** `2400×1400`, `PNG` or `WEBP` (transparent background), `<600 KB`
- **Used on:** Project Detail Architecture Section

---

### Research & Publications

**publication.healthcare**
- **Location:** `/public/images/research/alzheimers-framework-v1.webp`
- **Recommended:** `1200×800`, `WEBP`, `<300 KB`
- **Used on:** Research Featured Publications

**publication.edge**
- **Location:** `/public/images/research/federated-edge-v1.webp`
- **Recommended:** `1200×800`, `WEBP`, `<300 KB`
- **Used on:** Research Featured Publications

**publication.archive**
- **Location:** `/public/images/research/archive-default-v1.webp`
- **Recommended:** `1200×800`, `WEBP`, `<200 KB`
- **Used on:** Research Archive Cards (Default Fallback)

---

### Milestones & Gallery

**gallery.stage01**
- **Location:** `/public/images/gallery/ieee-best-paper-2026.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<500 KB`
- **Used on:** Stage / Gallery

**gallery.stage02**
- **Location:** `/public/images/gallery/linux-foundation-mentorship.webp`
- **Recommended:** `1920×1080`, `WEBP`, `<500 KB`
- **Used on:** Stage / Gallery

**milestone.default**
- **Location:** `/public/images/milestones/milestone-default-v1.webp`
- **Recommended:** `600×600`, `WEBP`, `<150 KB`
- **Used on:** Journey / Career Timelines
