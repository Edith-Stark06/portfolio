import { projects, type Project } from "./projects";
import { publications, type Publication } from "./publications";
import { milestones, type Milestone } from "./milestones";
import { socialLinks } from "./navigation";
import { getRepositoryForProject } from "./repositories";

/* ================================================================== */
/* Command Center — event bus                                          */
/* ================================================================== */

export const COMMAND_CENTER_OPEN_EVENT = "aether:command-center:open";
export const KNOWLEDGE_FOCUS_EVENT = "aether:knowledge:focus";

export const KNOWLEDGE_ROUTE = "/knowledge";

export function openCommandCenter(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COMMAND_CENTER_OPEN_EVENT));
}

/**
 * Requests the mounted knowledge graph to centre on an entity.
 * Used when the Command Center deep-links into `/knowledge` while the
 * graph is already mounted; a fresh mount centres via the URL param.
 */
export function focusKnowledgeEntity(entityId: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<string>(KNOWLEDGE_FOCUS_EVENT, { detail: entityId })
  );
}

/* ================================================================== */
/* Command / search model (Features 1 & 2)                             */
/*                                                                     */
/* Single queryable index. Every record derives from the existing      */
/* data layer — no secondary content database, no invented entries.    */
/* ================================================================== */

export type CommandCategory =
  | "NAVIGATION"
  | "ACTIONS"
  | "PROJECTS"
  | "PUBLICATIONS"
  | "MILESTONES";

export interface Command {
  id: string;
  category: CommandCategory;
  title: string;
  description?: string;
  keywords?: string[];
  /** Internal route target. */
  href?: string;
  /** Open href in a new tab (verified external destinations only). */
  external?: boolean;
  /** Actions that switch the palette into a filtered search mode. */
  filterCategories?: CommandCategory[];
  /**
   * Present when the destination does not exist — never fabricated.
   */
  unavailableReason?: string;
  /**
   * Stable knowledge-graph entity id this record maps to.
   * Derived from the same source records — not a duplicated index.
   */
  knowledgeEntityId?: string;
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const tokenizeKeywords = (source: string): string[] =>
  Array.from(
    new Set(
      source
        .toLowerCase()
        .split(/[^a-z0-9+#.]+/)
        .filter((token) => token.length > 2)
    )
  );

/* ---------- Navigation commands (every real route) ---------- */

const routeDescriptions: Record<string, string> = {
  "/": "Landing page — hero, featured deployments, research highlights",
  "/architect": "The system architect profile, education & core specs",
  "/journey/ibm": "IBM Z, IBM Champion 2025 & 2026, global recognition",
  "/journey/career": "Career architecture & experience timeline",
  "/projects": "Enterprise AI deployment case studies",
  "/research": "Applied AI research hub",
  "/publications": "Peer-reviewed publications archive",
  "/milestones": "Chronological achievements, honors & awards",
  "/stage": "Advocacy, keynotes & speaking engagements",
  "/knowledge": "Interactive knowledge graph — connected engineering work",
  "/contact": "Initiate sequence — contact & collaboration pathways",
};

const routeKeywords: Record<string, string[]> = {
  "/": ["home", "landing", "hero", "start"],
  "/architect": ["about", "profile", "system specs", "education", "vit"],
  "/journey/ibm": [
    "ibm",
    "champion",
    "z",
    "superstar",
    "techxchange",
    "mainframe",
    "open mainframe project",
  ],
  "/journey/career": ["career", "experience", "internship", "l&t", "timeline"],
  "/projects": ["projects", "deployments", "case studies", "work"],
  "/research": ["research", "applied ai", "investigation"],
  "/publications": ["publications", "papers", "archive", "ieee"],
  "/milestones": ["milestones", "awards", "honors", "recognition"],
  "/stage": ["stage", "speaking", "keynote", "advocacy", "mentorship"],
  "/knowledge": ["knowledge", "graph", "map", "connect", "explore"],
  "/contact": ["contact", "email", "hire", "collaboration", "initiate"],
};

const navigationDefs: {
  id: string;
  title: string;
  href: string;
}[] = [
  { id: "nav-home", title: "Home", href: "/" },
  { id: "nav-architect", title: "Architect", href: "/architect" },
  { id: "nav-ibm", title: "IBM Journey", href: "/journey/ibm" },
  { id: "nav-career", title: "Career", href: "/journey/career" },
  { id: "nav-projects", title: "Projects", href: "/projects" },
  { id: "nav-research", title: "Research", href: "/research" },
  { id: "nav-publications", title: "Publications", href: "/publications" },
  { id: "nav-milestones", title: "Milestones", href: "/milestones" },
  { id: "nav-stage", title: "Stage", href: "/stage" },
  { id: "nav-knowledge", title: "Knowledge Graph", href: "/knowledge" },
  { id: "nav-contact", title: "Contact", href: "/contact" },
];

const navigationCommands: Command[] = navigationDefs.map((def) => ({
  id: def.id,
  category: "NAVIGATION",
  title: def.title,
  href: def.href,
  description: routeDescriptions[def.href] ?? "",
  keywords: routeKeywords[def.href] ?? [],
}));

/* ---------- Action commands ---------- */

const actionCommands: Command[] = [
  {
    id: "action-search-projects",
    category: "ACTIONS",
    title: "Search project deployments",
    description: "Filter the knowledge index by project case studies",
    keywords: ["search", "projects", "deployments"],
    filterCategories: ["PROJECTS"],
  },
  {
    id: "action-search-research",
    category: "ACTIONS",
    title: "Search applied research",
    description: "Filter the knowledge index by research records",
    keywords: ["search", "research", "papers"],
    filterCategories: ["PUBLICATIONS"],
  },
  {
    id: "action-search-publications",
    category: "ACTIONS",
    title: "Search publications",
    description: "Filter the knowledge index by publications",
    keywords: ["search", "publications", "archive"],
    filterCategories: ["PUBLICATIONS"],
  },
  {
    id: "action-open-github",
    category: "ACTIONS",
    title: "Open GitHub",
    description: socialLinks.github,
    keywords: ["github", "code", "repositories"],
    href: socialLinks.github,
    external: true,
  },
  {
    id: "action-open-resume",
    category: "ACTIONS",
    title: "Open resume",
    unavailableReason: "No resume document has been published yet",
    keywords: ["resume", "cv", "download"],
  },
  {
    id: "action-contact",
    category: "ACTIONS",
    title: "Contact Ramana",
    description: "Initiate collaboration sequence",
    keywords: ["contact", "email", "hire", "collaborate"],
    href: "/contact",
  },
  {
    id: "action-open-knowledge-graph",
    category: "ACTIONS",
    title: "Open knowledge graph",
    description: "Browse the connected engineering knowledge map",
    keywords: ["knowledge", "graph", "map", "connections", "explore"],
    href: KNOWLEDGE_ROUTE,
  },
];

/* ---------- Knowledge entity ID builders ---------- */

const projectId = (project: Project): string => `project:${project.slug}`;
const publicationId = (publication: Publication): string =>
  `publication:${slugify(publication.title)}`;
const milestoneId = (index: number, milestone: Milestone): string =>
  `milestone:${index}-${slugify(milestone.title)}`;
const technologyId = (tech: string): string => `technology:${slugify(tech)}`;

/* ---------- Content commands derived from the data layer ---------- */

const projectCommands: Command[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  category: "PROJECTS",
  title: project.title,
  description: project.overview ?? project.description,
  keywords: tokenizeKeywords(
    [project.title, project.category, project.overview, project.challenge, project.solution, ...project.techStack]
      .filter(Boolean)
      .join(" ")
  ).slice(0, 24),
  href: `/projects/${project.slug}`,
  knowledgeEntityId: projectId(project),
}));

/**
 * GitHub repository actions — one per project.
 * Projects with a verified public repository open it externally; projects
 * without one expose the action as unavailable (never a fabricated link).
 */
const projectRepositoryCommands: Command[] = projects.map((project) => {
  const repository = getRepositoryForProject(project.slug);
  return {
    id: `project-${project.slug}-github`,
    category: "PROJECTS",
    title: `Open ${project.title} repository`,
    description: repository
      ? `${repository.owner}/${repository.name} on GitHub`
      : undefined,
    keywords: tokenizeKeywords(
      [
        "github",
        "repository",
        "open source",
        project.title,
        repository?.owner ?? "",
        repository?.name ?? "",
      ]
        .filter(Boolean)
        .join(" ")
    ).slice(0, 12),
    href: repository?.url,
    external: repository ? true : undefined,
    unavailableReason: repository
      ? undefined
      : "No public repository has been established for this project",
    knowledgeEntityId: projectId(project),
  };
});

const publicationCommands: Command[] = publications.map((publication) => ({
  id: `publication-${slugify(publication.title)}`,
  category: "PUBLICATIONS",
  title: publication.title,
  description: `${publication.venue} · ${publication.year} — ${publication.status}`,
  keywords: tokenizeKeywords(
    [publication.title, publication.venue, publication.status, publication.description, ...publication.techStack]
      .filter(Boolean)
      .join(" ")
  ).slice(0, 24),
  href: "/publications",
  knowledgeEntityId: publicationId(publication),
}));

const milestoneHref = (milestone: Milestone): string =>
  milestone.type === "experience" ? "/journey/career" : "/milestones";

const milestoneCommands: Command[] = milestones.map((milestone, index) => ({
  id: `milestone-${index}-${slugify(milestone.title)}`,
  category: "MILESTONES",
  title: `${milestone.title} — ${milestone.organization}`,
  description: `${milestone.year} · ${milestone.description}`,
  keywords: tokenizeKeywords(
    [milestone.title, milestone.organization, milestone.year, milestone.description].join(" ")
  ).slice(0, 20),
  href: milestoneHref(milestone),
  knowledgeEntityId: milestoneId(index, milestone),
}));

export const commands: Command[] = [
  ...navigationCommands,
  ...actionCommands,
  ...projectCommands,
  ...projectRepositoryCommands,
  ...publicationCommands,
  ...milestoneCommands,
];

/* ---------- Matching ---------- */

function scoreCommand(command: Command, tokens: string[]): number {
  const title = command.title.toLowerCase();
  const description = (command.description ?? "").toLowerCase();
  const keywords = (command.keywords ?? []).map((keyword) =>
    keyword.toLowerCase()
  );

  let total = 0;
  for (const token of tokens) {
    let tokenScore = 0;
    if (title.includes(token)) tokenScore += 4;
    if (keywords.some((keyword) => keyword.includes(token))) tokenScore += 2;
    if (description.includes(token)) tokenScore += 1;
    if (tokenScore === 0) total -= 2;
    else total += tokenScore;
  }
  return total;
}

export function searchCommands(
  query: string,
  filterCategories?: CommandCategory[],
  limit = 14
): Command[] {
  const pool = filterCategories
    ? commands.filter((command) => filterCategories.includes(command.category))
    : commands;

  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter((token) => token.length > 0);

  if (tokens.length === 0) {
    return pool;
  }

  const scored = pool
    .map((command) => ({ command, score: scoreCommand(command, tokens) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.command);
}

/* ================================================================== */
/* Feature 4 — technical depth model (preparation)                     */
/*                                                                     */
/* Depth levels resolve different projections of EXISTING content.     */
/* No new content is invented: if a level has no supporting material,  */
/* it resolves to null.                                                */
/* ================================================================== */

export type DepthLevel = "executive" | "engineering" | "research";

export interface DepthContent {
  level: DepthLevel;
  heading: string;
  body: string[];
}

export function publicationTitlesSharingTechnology(project: Project): string[] {
  const projectTech = new Set(
    project.techStack.map((tech) => tech.toLowerCase())
  );
  return publications
    .filter((publication) =>
      publication.techStack.some((tech) =>
        projectTech.has(tech.toLowerCase())
      )
    )
    .map((publication) => `${publication.title} — ${publication.venue}`);
}

export function resolveProjectDepth(
  project: Project,
  level: DepthLevel
): DepthContent | null {
  switch (level) {
    case "executive": {
      const body = Array.from(
        new Set([project.overview, project.description].filter(Boolean))
      ) as string[];
      return body.length
        ? { level, heading: "Executive Brief", body }
        : null;
    }
    case "engineering": {
      const body = [
        project.challenge,
        project.solution,
        project.architecture,
      ].filter(Boolean) as string[];
      return body.length
        ? { level, heading: "Engineering Dossier", body }
        : null;
    }
    case "research": {
      const body = publicationTitlesSharingTechnology(project);
      return body.length
        ? { level, heading: "Research Connections", body }
        : null;
    }
  }
}

export function resolvePublicationDepth(
  publication: Publication,
  level: DepthLevel
): DepthContent | null {
  switch (level) {
    case "executive": {
      return publication.description
        ? {
            level,
            heading: "Abstract",
            body: [`${publication.venue} · ${publication.year} — ${publication.status}`],
          }
        : null;
    }
    case "engineering": {
      return publication.techStack.length
        ? {
            level,
            heading: "Methodology Stack",
            body: publication.techStack,
          }
        : null;
    }
    case "research": {
      return publication.description
        ? { level, heading: "Research Detail", body: [publication.description] }
        : null;
    }
  }
}

/* ================================================================== */
/* Feature 5 — knowledge relationship model (preparation)              */
/*                                                                     */
/* Entities and relations are generated exclusively from existing      */
/* repository content. The graph visualization is future work.         */
/* ================================================================== */

export type EntityType = "project" | "publication" | "milestone" | "technology";

export interface KnowledgeEntity {
  id: string;
  type: EntityType;
  title: string;
  href?: string;
  meta?: string;
}

export type RelationLabel = "uses" | "recognized_for";

export interface KnowledgeRelation {
  from: string;
  to: string;
  relation: RelationLabel;
}

export const knowledgeEntities: KnowledgeEntity[] = (() => {
  const entities: KnowledgeEntity[] = [];

  for (const project of projects) {
    entities.push({
      id: projectId(project),
      type: "project",
      title: project.title,
      href: `/projects/${project.slug}`,
      meta: project.category,
    });
  }

  for (const publication of publications) {
    entities.push({
      id: publicationId(publication),
      type: "publication",
      title: publication.title,
      href: "/publications",
      meta: publication.venue,
    });
  }

  milestones.forEach((milestone, index) => {
    entities.push({
      id: milestoneId(index, milestone),
      type: "milestone",
      title: `${milestone.title} — ${milestone.organization}`,
      href: milestoneHref(milestone),
      meta: milestone.year,
    });
  });

  const technologies = new Set<string>();
  for (const project of projects) {
    project.techStack.forEach((tech) => technologies.add(tech));
  }
  for (const publication of publications) {
    publication.techStack.forEach((tech) => technologies.add(tech));
  }
  for (const tech of technologies) {
    entities.push({ id: technologyId(tech), type: "technology", title: tech });
  }

  return entities;
})();

export const knowledgeRelations: KnowledgeRelation[] = (() => {
  const relations: KnowledgeRelation[] = [];

  for (const project of projects) {
    for (const tech of project.techStack) {
      relations.push({
        from: projectId(project),
        to: technologyId(tech),
        relation: "uses",
      });
    }
  }

  for (const publication of publications) {
    for (const tech of publication.techStack) {
      relations.push({
        from: publicationId(publication),
        to: technologyId(tech),
        relation: "uses",
      });
    }
  }

  milestones.forEach((milestone, index) => {
    const description = milestone.description.toLowerCase();
    for (const publication of publications) {
      if (description.includes(publication.title.toLowerCase())) {
        relations.push({
          from: milestoneId(index, milestone),
          to: publicationId(publication),
          relation: "recognized_for",
        });
      }
    }
  });

  return relations;
})();

export function getEntityById(
  id: string
): KnowledgeEntity | undefined {
  return knowledgeEntities.find((entity) => entity.id === id);
}

export function getRelationsFor(entityId: string): KnowledgeRelation[] {
  return knowledgeRelations.filter(
    (relation) => relation.from === entityId || relation.to === entityId
  );
}

/* ---------- Entity detail resolution (existing content only) -------- */

export interface KnowledgeEntityDetail {
  description?: string;
  meta?: string;
  actionLabel?: string;
}

export function resolveEntityDetail(
  entity: KnowledgeEntity
): KnowledgeEntityDetail {
  const prefix = entity.id.split(":")[0];

  switch (entity.type) {
    case "project": {
      const slug = entity.id.slice(prefix.length + 1);
      const project = projects.find((p) => p.slug === slug);
      if (!project) return {};
      return {
        description: project.overview ?? project.description,
        meta: project.category,
        actionLabel: "Open Case Study",
      };
    }
    case "publication": {
      const slugSuffix = entity.id.slice(prefix.length + 1);
      const publication = publications.find(
        (p) => slugify(p.title) === slugSuffix
      );
      if (!publication) return { meta: entity.meta };
      return {
        description: publication.description,
        meta: `${publication.venue} · ${publication.year} — ${publication.status}`,
        actionLabel: "View Publication",
      };
    }
    case "milestone": {
      const indexPart = entity.id.slice(prefix.length + 1).split("-")[0];
      const index = Number.parseInt(indexPart, 10);
      const milestone =
        !Number.isNaN(index) && index >= 0 ? milestones[index] : undefined;
      if (!milestone) return { meta: entity.meta };
      return {
        description: milestone.description,
        meta: `${milestone.year} · ${milestone.organization}`,
        actionLabel:
          milestone.type === "experience"
            ? "View Career Entry"
            : "View Milestone",
      };
    }
    case "technology": {
      const usage = knowledgeRelations.filter(
        (relation) => relation.to === entity.id
      ).length;
      return {
        meta:
          usage > 0
            ? `Referenced by ${usage} record${usage === 1 ? "" : "s"}`
            : undefined,
      };
    }
  }
}

export const entityTypeLabel: Record<EntityType, string> = {
  project: "PROJECT",
  publication: "PUBLICATION",
  milestone: "MILESTONE",
  technology: "TECHNOLOGY",
};

export function getEntityIdParam(entity: KnowledgeEntity): string {
  return encodeURIComponent(entity.id);
}

export function parseEntityIdParam(param: string | null): string | null {
  if (!param) return null;
  const decoded = decodeURIComponent(param);
  return knowledgeEntities.some((entity) => entity.id === decoded)
    ? decoded
    : null;
}
