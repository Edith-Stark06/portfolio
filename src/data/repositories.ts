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
  {
    projectId: "atlas-governance",
    owner: "Edith-Stark06",
    name: "ATLAS",
    url: "https://github.com/Edith-Stark06/ATLAS",
    description:
      "Adaptive Trust & Lifecycle Assurance System: a governance layer that decides whether autonomous financial agents can be trusted before they act.",
    language: "TypeScript",
    availability: "available",
  },
  {
    projectId: "kubemedic",
    owner: "Edith-Stark06",
    name: "Kubemedic",
    url: "https://github.com/Edith-Stark06/Kubemedic",
    description:
      "Evidence-driven Kubernetes incident response with IBM Bob reasoning and a human in the loop.",
    language: "Python",
    note: "Team project built with Verona and Shivraj.",
    availability: "available",
  },
  {
    projectId: "smart-waste-robot",
    owner: "fahi016",
    name: "GarbageDetector",
    url: "https://github.com/fahi016/GarbageDetector",
    language: "Python",
    note: "Team capstone; repository hosted under a teammate's account.",
    availability: "available",
  },
];

export function getRepositoryForProject(
  projectId: string
): RepositoryReference | undefined {
  return projectRepositories.find((repo) => repo.projectId === projectId);
}