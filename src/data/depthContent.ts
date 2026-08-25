import {
  type DepthLevel,
  publicationTitlesSharingTechnology,
} from "./knowledge";
import { getProjectBySlug } from "./projects";
import { getDecisionsForSlug, getInsightsForSlug } from "./caseStudies";
import { getClaimsForProjectDepth, type EngineeringClaim } from "./evidence";
import { getRepositoryForProject, type RepositoryReference } from "./repositories";

export interface DepthListItem {
  label?: string;
  text?: string;
  body?: string;
  href?: string;
  fields?: { caption: string; value: string }[];
}

export interface DepthImageItem {
  src: string;
  alt: string;
  caption?: string;
  contain?: boolean;
}

export type DepthSectionVariant =
  | "text"
  | "metric"
  | "cards"
  | "steps"
  | "list"
  | "gallery"
  | "evidence"
  | "repository";

export interface DepthSection {
  id: string;
  eyebrow: string;
  title: string;
  variant: DepthSectionVariant;
  paragraphs?: string[];
  items?: DepthListItem[];
  images?: DepthImageItem[];
  claims?: EngineeringClaim[];
  repository?: RepositoryReference;
}

export interface DepthLevelOption {
  level: DepthLevel;
  label: string;
  descriptor: string;
  disabled: boolean;
}

export interface ProjectDepthContent {
  defaultLevel: DepthLevel;
  levels: DepthLevelOption[];
  sections: Record<DepthLevel, DepthSection[]>;
}

export const DEPTH_LEVEL_META: Record<
  DepthLevel,
  { label: string; descriptor: string }
> = {
  executive: { label: "EXECUTIVE", descriptor: "WHAT & WHY" },
  engineering: { label: "ENGINEERING", descriptor: "HOW IT'S BUILT" },
  research: { label: "RESEARCH", descriptor: "MEASURED & LEARNED" },
};

const IMPLEMENTATION_STAGES = [
  {
    step: "01",
    stage: "Research & Benchmarking",
    desc: "Analyzing domain requirements, dataset constraints, and baseline metrics.",
  },
  {
    step: "02",
    stage: "System Architecture",
    desc: "Designing decoupled subsystem boundaries, data schemas, and API contracts.",
  },
  {
    step: "03",
    stage: "Prototyping & ML Training",
    desc: "Building core inference models, vector pipelines, and backend services.",
  },
  {
    step: "04",
    stage: "Empirical Validation",
    desc: "Stress testing accuracy, latency throughput, and edge case resiliency.",
  },
  {
    step: "05",
    stage: "Production Deployment",
    desc: "Deploying production endpoints with continuous monitoring and automated telemetry.",
  },
];

const EMPTY_CONTENT: ProjectDepthContent = {
  defaultLevel: "executive",
  levels: (Object.keys(DEPTH_LEVEL_META) as DepthLevel[]).map((level) => ({
    level,
    ...DEPTH_LEVEL_META[level],
    disabled: true,
  })),
  sections: { executive: [], engineering: [], research: [] },
};

export function resolveProjectDepthContent(
  slug: string
): ProjectDepthContent {
  const project = getProjectBySlug(slug);
  if (!project) return EMPTY_CONTENT;

  const decisions = getDecisionsForSlug(project.slug);
  const insights = getInsightsForSlug(project.slug);
  const relatedTitles = publicationTitlesSharingTechnology(project);

  const paragraphs = (...parts: Array<string | undefined>) =>
    Array.from(new Set(parts.filter(Boolean) as string[]));

  const executive: DepthSection[] = [];

  const overview = paragraphs(project.overview, project.description);
  if (overview.length) {
    executive.push({
      id: "exec-brief",
      eyebrow: "00 // EXECUTIVE BRIEF",
      title: "Project Overview",
      variant: "text",
      paragraphs: overview,
    });
  }

  const executiveClaims = getClaimsForProjectDepth(project.slug, "executive");
  if (executiveClaims.length) {
    executive.push({
      id: "exec-evidence",
      eyebrow: "01 // SUPPORTED OUTCOMES",
      title: "Supported Outcomes",
      variant: "evidence",
      claims: executiveClaims,
    });
  }

  const galleryImages: DepthImageItem[] = [
    project.heroImage
      ? {
          src: project.heroImage,
          alt: `${project.title} Main Interface`,
          caption: "DASHBOARD_UI",
        }
      : null,
    project.architectureImage
      ? {
          src: project.architectureImage,
          alt: `${project.title} Architecture Flow`,
          caption: "TOPOLOGY_DIAGRAM",
          contain: true,
        }
      : null,
  ].filter(Boolean) as DepthImageItem[];

  if (galleryImages.length) {
    executive.push({
      id: "exec-gallery",
      eyebrow: "02 // VISUAL ARTIFACTS",
      title: "System Gallery",
      variant: "gallery",
      images: galleryImages,
    });
  }

  const engineering: DepthSection[] = [];

  if (project.challenge) {
    engineering.push({
      id: "eng-challenge",
      eyebrow: "01 // PROBLEM STATEMENT",
      title: "The Challenge",
      variant: "text",
      paragraphs: [project.challenge],
    });
  }

  if (project.solution) {
    engineering.push({
      id: "eng-solution",
      eyebrow: "02 // PROPOSED SYSTEM",
      title: "The Solution",
      variant: "text",
      paragraphs: [project.solution],
    });
  }

  if (project.architecture) {
    engineering.push({
      id: "eng-architecture",
      eyebrow: "03 // SUBSYSTEM BREAKDOWN",
      title: "System Architecture",
      variant: "text",
      paragraphs: [project.architecture],
      images: project.architectureImage
        ? [
            {
              src: project.architectureImage,
              alt: `${project.title} Architecture Diagram`,
              caption: "FIG 1. SYSTEM_SUBSYSTEM_TOPOLOGY",
              contain: true,
            },
          ]
        : undefined,
    });
  }

  if (decisions.length) {
    engineering.push({
      id: "eng-decisions",
      eyebrow: "04 // TRADE-OFF ANALYSIS",
      title: "Engineering Decisions",
      variant: "cards",
      items: decisions.map((decision, index) => ({
        label: `DECISION 0${index + 1}`,
        text: decision.decision,
        fields: [
          { caption: "CHALLENGE", value: decision.challenge },
          { caption: "RATIONALE", value: decision.reason },
          { caption: "TRADE-OFF", value: decision.tradeoff },
        ],
      })),
    });
  }

  const engineeringClaims = getClaimsForProjectDepth(
    project.slug,
    "engineering"
  );
  if (engineeringClaims.length) {
    engineering.push({
      id: "eng-evidence",
      eyebrow: "05 // TRACEABILITY",
      title: "Engineering Evidence",
      variant: "evidence",
      claims: engineeringClaims,
    });
  }

  const repository = getRepositoryForProject(project.slug);
  if (repository) {
    engineering.push({
      id: "eng-repo",
      eyebrow: "06 // IMPLEMENTATION SOURCE",
      title: "Repository",
      variant: "repository",
      repository,
    });
  }

  engineering.push({
    id: "eng-pipeline",
    eyebrow: "07 // LIFECYCLE",
    title: "Implementation Pipeline",
    variant: "steps",
    items: IMPLEMENTATION_STAGES.map((stage) => ({
      label: `[${stage.step}]`,
      text: stage.stage,
      body: stage.desc,
    })),
  });

  const research: DepthSection[] = [];

  if (relatedTitles.length) {
    research.push({
      id: "res-connections",
      eyebrow: "01 // RESEARCH CONNECTIONS",
      title: "Related Publications",
      variant: "list",
      items: relatedTitles.map((title) => {
        const separator = title.lastIndexOf(" — ");
        return {
          text: separator > -1 ? title.slice(0, separator) : title,
          body: separator > -1 ? title.slice(separator + 3) : undefined,
          href: "/research",
        };
      }),
    });
  }

  const researchClaims = getClaimsForProjectDepth(project.slug, "research");
  if (researchClaims.length) {
    research.push({
      id: "res-evidence",
      eyebrow: "02 // TRACEABLE METRICS",
      title: "Research Evidence",
      variant: "evidence",
      claims: researchClaims,
    });
  }

  research.push({
    id: "res-lessons",
    eyebrow: "03 // EMPIRICAL LEARNINGS",
    title: "Lessons Learned",
    variant: "cards",
    items: [
      { label: "WHAT WORKED BEST", text: insights.worked },
      { label: "BOTTLENECKS ENCOUNTERED", text: insights.didnt },
      { label: "WHAT I WOULD DO DIFFERENTLY", text: insights.differently },
    ],
  });

  research.push({
    id: "res-roadmap",
    eyebrow: "04 // ROADMAP",
    title: "Future Roadmap",
    variant: "cards",
    items: [
      {
        label: "SHORT-TERM",
        text: "Feature Expansion",
        body: insights.shortRoadmap,
      },
      {
        label: "LONG-TERM",
        text: "Architectural Vision",
        body: insights.longRoadmap,
      },
    ],
  });

  const sections: Record<DepthLevel, DepthSection[]> = {
    executive,
    engineering,
    research,
  };

  const levels: DepthLevelOption[] = (
    Object.keys(DEPTH_LEVEL_META) as DepthLevel[]
  ).map((level) => ({
    level,
    ...DEPTH_LEVEL_META[level],
    disabled: sections[level].length === 0,
  }));

  return {
    defaultLevel: levels.find((option) => !option.disabled)?.level ?? "executive",
    levels,
    sections,
  };
}