---
name: Aetheric Foundry
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c3c6d8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8c90a2'
  outline-variant: '#424656'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002979'
  primary-container: '#0f62fe'
  on-primary-container: '#f3f3ff'
  inverse-primary: '#0052dd'
  secondary: '#4bd9e5'
  on-secondary: '#00363b'
  secondary-container: '#02b7c3'
  on-secondary-container: '#004347'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#6e7070'
  on-tertiary-container: '#f4f4f4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174c'
  on-primary-fixed-variant: '#003da9'
  secondary-fixed: '#7ff4ff'
  secondary-fixed-dim: '#4bd9e5'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f55'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 140px
    fontWeight: '800'
    lineHeight: 120px
    letterSpacing: -0.05em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
  bento-gap: 16px
---

## Brand & Style

This design system is built for a premium, cinematic presence tailored to an AI & Automation engineer. The aesthetic draws heavily from high-end technology launch events—think "OpenAI meets Apple Keynote." The brand personality is authoritative, atmospheric, and forward-leaning.

The design style is **Cinematic Minimalism** blended with **Glassmorphism**. It utilizes an ultra-dark environment where light is treated as a precious resource, used only to highlight critical data or calls to action. A subtle, high-frequency film grain overlay should be applied globally to eliminate "flatness" and provide a tactile, high-production-value feel. 

Visuals should feel "heavy" and grounded, using massive typography and significant negative space to communicate confidence and technical mastery.

## Colors

The palette is rooted in **True Black (#000000)** to ensure absolute depth and high contrast on OLED displays. 

- **Core Accents**: IBM Blue (#0F62FE) is used for primary actions and technical emphasis, while Cyan (#00B7C3) is reserved for status indicators, AI-driven processes, and secondary highlights.
- **Typography**: Headers must remain pure White (#FFFFFF) to pierce the dark background. Body text uses Zinc (#A1A1AA) to reduce eye strain and establish a clear visual hierarchy.
- **Surface**: Backgrounds are strictly #000000. Interactive glass layers use a semi-transparent white tint (approx 3-5% opacity) to create separation without introducing "grayness."

## Typography

The typography strategy relies on extreme scale contrast. 

1.  **Display Type**: Uses **Plus Jakarta Sans** at ultra-heavy weights. For hero sections, the type should be massive (140px), utilizing negative letter-spacing to create a "locked-in" architectural feel.
2.  **Body Type**: **Inter** provides a systematic, neutral counterpoint. A generous 150% line height ensures legibility against the true black background.
3.  **Technical Data**: **JetBrains Mono** is reserved exclusively for tech stacks, code snippets, and metadata (dates, categories). It should always be used in small sizes with tracking opened up for a "spec-sheet" look.

## Layout & Spacing

This design system employs a **Strict Bento Grid** model. All content is housed within modular containers that align to a 12-column grid.

- **Grid Logic**: Elements should span 3, 4, 6, or 12 columns. Vertical spacing between bento boxes is fixed at 16px to maintain a tight, engineered look.
- **Sectioning**: Use massive vertical padding (160px+) between major page sections to evoke a cinematic pacing—allowing the user to focus on one "scene" at a time.
- **Mobile Adaptation**: On mobile, the bento grid collapses into a single-column stack. Hero typography should scale down to 64px to ensure it remains impactful without breaking words.

## Elevation & Depth

Depth is not achieved through shadows, but through **translucency and luminosity**.

1.  **Glassmorphism**: Surfaces use a background blur (backdrop-filter: blur(20px)) combined with a 1px solid border at 10% white opacity. This creates a "frosted pane" effect that feels premium and high-tech.
2.  **Luminous Glow**: Primary buttons and active states should feature a soft "aura" (outer glow) using the Primary Blue color. The glow should be highly diffused (40px-60px blur) and low opacity (20%) to simulate a light source behind the element.
3.  **Z-Axis**: All content sits on Z-index 1. Modals or floating elements should not use shadows; instead, they should increase their backdrop blur and border brightness to appear "closer" to the user.

## Shapes

The shape language is sophisticated and controlled. 

- **Bento Boxes**: Use `rounded-lg` (1rem / 16px) for all main containers to soften the technical edge and feel more like modern consumer hardware.
- **Interactive Elements**: Buttons and tags are strictly **Pill-shaped**. This creates a distinct visual contrast against the rectangular bento grid.
- **Inputs**: Use `rounded-lg` for form fields to match the container language.

## Components

### Buttons
Primary buttons are pill-shaped with a solid #0F62FE background. They feature a subtle inner-glow on the top edge and a wide, soft outer-glow aura. Text is White, Bold, and uppercase.

### Bento Cards
The foundational unit of the UI. Each card must have a 1px border (`rgba(255,255,255,0.1)`), a background blur of 20px, and a subtle gradient fill from `rgba(255,255,255,0.05)` to `transparent`.

### Chips & Accolades
Monochromatic and minimal. Use a dark-zinc stroke with mono-spaced text. No fill color unless active. Used for tech-stack labels and certification badges.

### Input Fields
Minimalist "ghost" inputs. Only a bottom border or a very faint 1px container. Focus states should trigger a Cyan (#00B7C3) border glow.

### AI Status Indicator
A specialized component: a small, pulsing Cyan dot with a multi-layered blur effect, used to indicate "Live" automation or active AI processing within the portfolio.