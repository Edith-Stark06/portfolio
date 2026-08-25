# Enterprise AI Engineering Showcase

An interactive, statically-exported portfolio for **Ramana Sree K V** — an
enterprise AI & automation engineer showcase (IBM Champion 2025 & 2026,
peer-reviewed research, enterprise deployment case studies).

Built as an **interactive engineering knowledge system**, not a static page:
every route, command, and search record is derived from one typed data layer.

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | Next.js 16 (App Router, `output: "export"` static export, Turbopack) |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS **v4** — tokens defined via `@theme` in `src/app/globals.css` |
| Motion | GSAP + ScrollTrigger, Lenis smooth scroll, custom WebGL shader background |
| Fonts | Plus Jakarta Sans, Inter, JetBrains Mono (via `next/font`) |
| Icons | Material Symbols Outlined |

There is **no** `tailwind.config.js` at runtime: Tailwind v4 reads design
tokens directly from the `@theme` block in `globals.css`.

## Commands

```bash
npm run dev              # Turbopack dev server at http://localhost:3000
npm run build            # production static export into out/
npm run start            # serve the production build
npm run lint             # ESLint (next/core-web-vitals + typescript)
npx tsc --noEmit         # strict type check
npm run validate:media   # verify every media.ts path exists on disk
```

A healthy build must pass all four: `validate:media`, `tsc --noEmit`,
`lint`, `build` (17/17 static routes).

## Routes

| Route | Purpose |
| :--- | :--- |
| `/` | Landing hero, metrics, featured deployments & research |
| `/architect` | System architect profile |
| `/journey/ibm` | IBM Z & global recognition |
| `/journey/career` | Career timeline |
| `/projects` `/projects/[slug]` | Deployment case studies (SSG per slug, switchable Executive/Engineering/Research depth) |
| `/research` `/publications` | Applied AI research & publication archive |
| `/milestones` `/stage` `/contact` | Achievements, speaking, contact |
| `/knowledge` | Interactive knowledge graph of the connected portfolio |

## Data Architecture

Single source of truth lives in `src/data/`:

- `media.ts` — every image path (validated by `scripts/validate-media.js`)
- `projects.ts`, `publications.ts`, `milestones.ts`, `navigation.ts`
- `caseStudies.ts` — engineering decisions & lessons per project slug
- `repositories.ts` — verified GitHub repository references per project
  (owner, name, URL, description, language; no invented repos, no live stats)
- `evidence.ts` — the engineering evidence model: every claim/metric carries a
  conservative `EvidenceStatus` (`verified` / `project-reported` /
  `research-reported` / `unavailable`), a context paragraph, and
  `sourceEntityIds` pointing at the exact project/publication/research records
  that support it. This is the **single source of truth** for rendered metrics
  (project depth sections + the research results table)
- `depthContent.ts` — structured EXECUTIVE / ENGINEERING / RESEARCH sections
  per project, projected from the modules above (no invented content)
- `knowledge.ts` — unified command/search index, depth model, and
  knowledge-graph entities/relations **generated from the modules above**
  (no duplicated content, no invented records)

## Engineering Evidence System

Important engineering claims are traceable to their existing source records.
No external verification is simulated:

- **Evidence model** (`src/data/evidence.ts`): claims carry a value, label,
  context, a status, and `sourceEntityIds` that resolve to real knowledge
  entities (project / publication / research).
- **Status classification** is deliberately conservative:
  - `VERIFIED` — corroborated across **independent records within the
    repository** (e.g. a project case study *and* the research results table,
    or a publication *and* the research results table).
  - `PROJECT-REPORTED` — stated only in the project's own case-study material.
  - `RESEARCH-REPORTED` — stated only in research/publication material.
  - `UNAVAILABLE` — no supporting record; never fabricated.
- **`EvidenceTrace`** is a native `<details>`/`<summary>` disclosure: value +
  status badge on the summary, then context, verbatim quote, status
  definition, source links, and an "Open engineering dossier" action. Fully
  keyboard and screen-reader accessible, works with no JS, mobile-native.
- Claims surface inside the existing depth experience: **Supported Outcomes**
  (Executive), **Engineering Evidence** (Engineering), **Research Evidence**
  (Research). No new page, no fourth depth level.
- Metrics have **one source of truth**: the project `impact[]` field and the
  research page's hardcoded results table were removed — both now derive from
  `evidence.ts`.
- Evidence items are deep-linkable: `/projects/<slug>?depth=…&evidence=<claim-id>`
  (the graph panel links project nodes to their evidence this way).

## GitHub Repository Intelligence

Real, verified GitHub repositories are linked to projects as **implementation
sources** — never as fabricated statistics or "proof" of a metric:

- **Static typed data** (`src/data/repositories.ts`): each `RepositoryReference`
  stores only verified facts (owner, name, HTTPS URL, description, primary
  language). No live GitHub API, no build-time network dependency, no runtime
  requests — the static export never depends on GitHub being online.
- **Conservative mapping**: every record is backed by real GitHub metadata
  (repository description + contribution history). A project without an
  established public repository has **no record** and is rendered unavailable —
  never a guessed or placeholder link.
- **Engineering depth**: the ENGINEERING dossier adds an **Implementation
  Source** section (`owner/name`, description, language, topics, "Open
  repository →") right after Engineering Evidence — so the flow is
  PROJECT → ENGINEERING → EVIDENCE → REAL REPOSITORY.
- **Command Center**: each project gets an "Open `<project>` repository"
  action; projects without a repository expose the action as unavailable.
- **Knowledge graph**: repositories are surfaced as a panel action on project
  nodes, not added as graph entities (only 3 verified mappings — nodes would
  not justify the added complexity).
- The repository **complements** the evidence system but does not change
  claim status: the conservative `EvidenceStatus` model remains authoritative.

## Technical Depth System (`/projects/[slug]`)

Each case study renders the same project at three switchable depths via URL
state (`?depth=executive|engineering|research`):

- **EXECUTIVE** — `WHAT & WHY`: overview, key outcomes, visual gallery
- **ENGINEERING** — `HOW IT'S BUILT`: challenge, solution, architecture,
  decisions (with trade-offs), engineering evidence, **repository
  (implementation source)**, implementation pipeline
- **RESEARCH** — `MEASURED & LEARNED`: related publications, empirical
  lessons, roadmap

Implementation notes:

- All three depths are resolved **server-side once** from
  `src/data/depthContent.ts` (single source of truth; only existing content
  is used — a level with no supporting material is disabled, never filled in).
- `?depth=` is the only state: deep-linkable, refresh/back/forward safe, and
  invalid values fall back to the default depth. No global depth state.
- `TechnicalDepthSwitch` is a `role="tablist"` segmented control (roving
  tabindex, arrow keys, `aria-selected`, `aria-disabled` for unsupported
  levels). Panel swaps use a `depth-enter` transition that is disabled under
  `prefers-reduced-motion`.
- The page is a server component; the client depth picker is wrapped in a
  `Suspense` boundary, so `useSearchParams` stays compatible with the
  static export.
- The knowledge graph panel deep-links project nodes into each depth
  (`/projects/<slug>?depth=…`).

## Knowledge Graph (`/knowledge`)

A first-class chapter rendering the relations in `knowledge.ts`:

- **SVG only** — no graph library. A deterministic, seeded
  force-directed layout (`src/lib/graphLayout.ts`) runs a fixed number of
  iterations once and stops (no perpetual physics).
- Zoom (wheel/pinch/buttons), pan (drag), fit-to-view, reset view.
- Node selection → neighbours + relations highlight, others dim, info
  panel opens (bottom sheet on mobile, side panel on desktop).
- Selection is URL state: `/knowledge?entity=<encoded-id>` survives
  refresh and is the deep-link target for Command Center content results.
- Keyboard: nodes are focusable (`Tab`, arrow keys, Enter), `Esc`
  deselects; a live region announces the selection. A grouped,
  semantic index below the visual graph is the accessible fallback for
  every entity.
- Reduced-motion users skip all graph transitions via the existing
  `prefers-reduced-motion` rules.

## Command Center

A global command palette is mounted from the root layout:

- **`Ctrl+K` / `⌘K`** opens it from any route; `Esc` closes
- Typing filters across navigation, actions, projects, publications,
  and milestones (search the index, e.g. "IBM", "Alzheimer", "COBOL")
- Action commands switch the palette into category search modes
- Unavailable destinations (e.g. resume) are shown as unavailable —
  nothing is fabricated

The palette is client-rendered only and dynamically imported, so it ships
in its own chunk.

## Image Pipeline

- All images are referenced **only** through `src/data/media.ts`.
- Every `<Image>` goes through `ImageWithFallback`, degrading to a
  placeholder WebP on error.
- Production WebP assets live under `public/images/`.
- Original design reference renders live in `docs/reference/stitch/` and
  are **not** shipped; `scripts/analyze-stitch.js` /
  `scripts/migrate-stitch-assets.js` document how production assets were
  derived from them (they require `sharp`, which is not a runtime dep).

## Accessibility

- Skip link (`#main-content`) on every route
- Focus trap + `Esc` + focus restore on the mobile menu and command palette
- `prefers-reduced-motion` respected across GSAP, Lenis, WebGL, CSS
- Visible focus rings, semantic landmarks, `aria-current` nav state

## Docs

- `docs/PROJECT_HANDOFF.md` — architectural handoff (kept aligned with
  actual implementation)
- `docs/MEDIA_GUIDE.md` — asset replacement guide
