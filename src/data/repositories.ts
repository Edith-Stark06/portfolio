/**
 * Verified GitHub repository references for portfolio projects.
 *
 * Every record is backed by real GitHub data (public repository metadata and
 * contribution history). A project that has no established public repository
 * simply has no record here — the UI must render it as unavailable rather than
 * fabricating a link. No commit counts, stars, or live activity are stored.
 */
export type RepositoryAvailability = "available" | "unavailable";

export interface RepositoryReference {
  projectId: string;
  owner: string;
  name: string;
  url: string;
  description?: string;
  language?: string;
  topics?: string[];
  /**
   * Optional transparency note about the repository's ownership/relationship
   * when it is not the profile owner's personal repository.
   */
  note?: string;
  availability: RepositoryAvailability;
}

export const projectRepositories: RepositoryReference[] = [
  {
    projectId: "enterprise-code-analysis",
    owner: "Edith-Stark06",
    name: "ai-mainframe-modernization-assistant",
    url: "https://github.com/Edith-Stark06/ai-mainframe-modernization-assistant",
    description:
      "An AI-powered platform for analyzing, documenting, and modernizing IBM Z mainframe applications using LLMs, RAG, and static code analysis.",
    language: "Python",
    availability: "available",
  },
  {
    projectId: "ecotrace-india",
    owner: "Edith-Stark06",
    name: "Eco-Trace-Warriors",
    url: "https://github.com/Edith-Stark06/Eco-Trace-Warriors",
    description:
      "AI-powered e-waste tracking and circular economy platform built for IEEE YESIST 2026 using Flutter, Node.js, PostgreSQL, Hyperledger Fabric, and AI.",
    language: "Python",
    availability: "available",
  },
  {
    projectId: "solar-ai-framework",
    owner: "cat226",
    name: "solar-ai-framework",
    url: "https://github.com/cat226/solar-ai-framework",
    language: "Python",
    note: "Primary contributor; repository hosted under a shared account.",
    availability: "available",
  },
];

export function getRepositoryForProject(
  projectId: string
): RepositoryReference | undefined {
  return projectRepositories.find((repo) => repo.projectId === projectId);
}