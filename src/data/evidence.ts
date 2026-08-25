import { type DepthLevel, getEntityById } from "./knowledge";

export type EvidenceStatus =
  | "verified"
  | "project-reported"
  | "research-reported"
  | "unavailable";

export type ClaimSourceKind = "project" | "publication" | "research";

export interface ResolvedClaimSource {
  entityId: string;
  title: string;
  href?: string;
  kind: ClaimSourceKind;
}

export interface EngineeringClaim {
  id: string;
  label: string;
  value?: string;
  context: string;
  status: EvidenceStatus;
  sourceEntityIds: string[];
  depths: DepthLevel[];
  quote?: string;
  researchDetail?: string;
}

export const RESEARCH_SOURCE_ID = "research:experimental-results";

export const evidenceStatusLabel: Record<EvidenceStatus, string> = {
  verified: "VERIFIED",
  "project-reported": "PROJECT-REPORTED",
  "research-reported": "RESEARCH-REPORTED",
  unavailable: "UNAVAILABLE",
};

export const evidenceStatusDescription: Record<EvidenceStatus, string> = {
  verified:
    "Corroborated across independent records within this repository (e.g. project case study plus research or publication material). No external verification is claimed.",
  "project-reported":
    "Stated in the project's own case-study material. No external verification is claimed.",
  "research-reported":
    "Stated in research or publication material in this repository. No external verification is claimed.",
  unavailable:
    "No supporting record exists in this repository. Presented as a capability, not a measured result.",
};

export const engineeringClaims: EngineeringClaim[] = [
  /* ------------------------------------------------------------------ */
  /* Enterprise Code Analysis                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "eca-code-review-reduction",
    label: "Code Review Reduction",
    value: "60%",
    context:
      "The enterprise code-analysis case study reports a 60% reduction in code review time. The same figure is listed independently in the research results table for the AST-grounded code analysis platform, and the AI-Assisted Mainframe Modernization white paper notes the platform cut review times by 60%.",
    status: "verified",
    sourceEntityIds: [
      "project:enterprise-code-analysis",
      RESEARCH_SOURCE_ID,
      "publication:ai-assisted-mainframe-modernization",
    ],
    depths: ["executive", "engineering", "research"],
    quote: "60% reduction in code review time",
    researchDetail: "AST-Grounded AI Code Analysis Platform",
  },
  {
    id: "eca-documentation-coverage",
    label: "Documentation Coverage",
    value: "50k+ lines of code",
    context:
      "Case-study impact metric: the RAG-based documentation pipeline generated documentation for more than 50,000 lines of code.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["executive"],
    quote: "Automated documentation for 50k+ lines of code",
  },
  {
    id: "eca-semantic-search",
    label: "Semantic Codebase Search",
    context:
      "Case-study capability: ChromaDB-backed semantic vector search across the entire analyzed codebase.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["executive"],
    quote: "Semantic search across entire codebase",
  },
  {
    id: "eca-api-latency",
    label: "API Latency",
    value: "sub-100ms",
    context:
      "Engineering decision record: the FastAPI asynchronous microservice targets sub-100ms API latency through its ASGI event loop.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["engineering"],
    quote:
      "ASGI event loop handles non-blocking asynchronous I/O with sub-100ms API latency.",
  },
  {
    id: "eca-retrieval-relevance",
    label: "Retrieval Relevance Gain",
    value: "3x",
    context:
      "Case-study retrospective: AST-driven semantic chunking produced 3x higher retrieval relevance than fixed-character chunking.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["research"],
    quote:
      "AST-driven semantic chunking produced 3x higher retrieval relevance compared to fixed-character chunking.",
  },

  /* ------------------------------------------------------------------ */
  /* EcoTrace India                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: "eti-waste-tracked",
    label: "E-Waste Tracked",
    value: "5,000+ tons",
    context: "Case-study impact metric for the e-waste tracking network.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["executive"],
    quote: "Tracked 5,000+ tons of e-waste",
  },
  {
    id: "eti-classification-accuracy",
    label: "Classification Precision",
    value: "94%",
    context:
      "The project reports 94% YOLO component-classification accuracy on edge hardware; the research results table independently lists 94% precision for real-time edge YOLO e-waste component sorting.",
    status: "verified",
    sourceEntityIds: ["project:ecotrace-india", RESEARCH_SOURCE_ID],
    depths: ["executive", "engineering", "research"],
    quote: "94% accuracy in component classification",
    researchDetail: "Real-time Edge YOLO E-Waste Component Sorting",
  },
  {
    id: "eti-audit-trails",
    label: "Audit Trail Coverage",
    value: "50+ recycling centers",
    context:
      "Case-study impact metric: Hyperledger Fabric-backed immutable audit trails across 50+ recycling centers.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["executive"],
    quote: "Immutable audit trails for 50+ recycling centers",
  },
  {
    id: "eti-edge-throughput",
    label: "Edge Inference Throughput",
    value: "45+ FPS",
    context:
      "Engineering decision record: the YOLO edge vision layer targets 45+ FPS for identifying crushed e-waste components under variable lighting.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["engineering"],
    quote:
      "Identifying crushed e-waste components under variable facility lighting at 45+ FPS.",
  },

  /* ------------------------------------------------------------------ */
  /* Solar AI Framework                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: "saf-efficiency-loss",
    label: "Efficiency Loss Identified",
    value: "12%",
    context:
      "Case-study impact metric: thermal-RGB analysis identified a 12% efficiency loss attributable to panel defects.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["executive"],
    quote: "Identified 12% loss in efficiency due to defects",
  },
  {
    id: "saf-inspection-time",
    label: "Inspection Time Saved",
    value: "80%",
    context:
      "The project reports an 80% reduction in inspection time; the research results table independently lists 80% inspection time saved for the thermal drone solar defect detection pipeline.",
    status: "verified",
    sourceEntityIds: ["project:solar-ai-framework", RESEARCH_SOURCE_ID],
    depths: ["executive", "engineering", "research"],
    quote: "Reduced inspection time by 80%",
    researchDetail: "Thermal Drone Solar Defect Detection Pipeline",
  },
  {
    id: "saf-deployments",
    label: "Solar Installations",
    value: "3 major",
    context:
      "Case-study impact metric: the framework was deployed across three major solar installations.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["executive"],
    quote: "Deployed across 3 major solar installations",
  },
  {
    id: "saf-false-positives",
    label: "False-Positive Reduction",
    value: "over 65%",
    context:
      "Case-study retrospective: dual thermal-RGB sensor fusion reduced false-positive defect calls by more than 65%.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["research"],
    quote:
      "Dual thermal-RGB sensor fusion reduced false-positive defect calls by over 65%.",
  },

  /* ------------------------------------------------------------------ */
  /* Publications / Research                                             */
  /* ------------------------------------------------------------------ */
  {
    id: "pub-alzheimers-accuracy",
    label: "Multi-Class Accuracy",
    value: "97.22%",
    context:
      "Reported multi-class accuracy of the ResNet-DeiT hybrid model for Alzheimer's disease classification from brain MRI scans (IEEE DSBS 2026), also listed in the research results table.",
    status: "verified",
    sourceEntityIds: [
      "publication:alzheimer-s-disease-classification-using-resnet-deit-hybrid-model",
      RESEARCH_SOURCE_ID,
    ],
    depths: ["research"],
    quote: "97.22%",
    researchDetail: "Alzheimer's Disease MRI Classification (IEEE DSBS '26)",
  },
];

const RESEARCH_RESULT_CLAIM_IDS = [
  "pub-alzheimers-accuracy",
  "eca-code-review-reduction",
  "eti-classification-accuracy",
  "saf-inspection-time",
];

export function getClaimById(id: string): EngineeringClaim | undefined {
  return engineeringClaims.find((claim) => claim.id === id);
}

export function getClaimsForProject(slug: string): EngineeringClaim[] {
  const projectEntityId = `project:${slug}`;
  return engineeringClaims.filter((claim) =>
    claim.sourceEntityIds.includes(projectEntityId)
  );
}

export function getClaimsForProjectDepth(
  slug: string,
  level: DepthLevel
): EngineeringClaim[] {
  const projectEntityId = `project:${slug}`;
  return engineeringClaims.filter(
    (claim) =>
      claim.sourceEntityIds.includes(projectEntityId) &&
      claim.depths.includes(level)
  );
}

export function getClaimProjectSlug(
  claim: EngineeringClaim
): string | undefined {
  const projectSource = claim.sourceEntityIds.find((id) =>
    id.startsWith("project:")
  );
  return projectSource ? projectSource.slice("project:".length) : undefined;
}

export function resolveClaimSources(
  claim: EngineeringClaim
): ResolvedClaimSource[] {
  return claim.sourceEntityIds.map((entityId) => {
    if (entityId === RESEARCH_SOURCE_ID) {
      return {
        entityId,
        title: "Applied AI Research — Experimental Results",
        href: "/research",
        kind: "research",
      };
    }
    const entity = getEntityById(entityId);
    if (!entity) {
      return { entityId, title: entityId, kind: "research" };
    }
    return {
      entityId,
      title: entity.title,
      href: entity.href,
      kind: entity.type === "publication" ? "publication" : "project",
    };
  });
}

export function getResearchResults(): {
  metric: string;
  label: string;
  detail: string;
}[] {
  return RESEARCH_RESULT_CLAIM_IDS.flatMap((id) => {
    const claim = getClaimById(id);
    return claim?.value
      ? [
          {
            metric: claim.value,
            label: claim.label,
            detail: claim.researchDetail ?? claim.context,
          },
        ]
      : [];
  });
}