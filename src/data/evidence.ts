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
      "The AI-Assisted Mainframe Modernization white paper reports a 60% reduction in code review time for the AST-grounded code analysis approach. This is a research-reported figure; the project repository does not contain an independent measurement of it.",
    status: "research-reported",
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
    id: "eca-test-suite",
    label: "Automated Tests",
    value: "4,863",
    context:
      "Repository README: the full suite passes with no failures or skips when a JDK is installed, including end-to-end integration tests.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["executive", "engineering"],
    quote: "4,863 Automated Tests",
  },
  {
    id: "eca-java-corpus",
    label: "COBOL to Java Verification Corpus",
    value: "45 programs",
    context:
      "Repository README: the 45-program verification corpus compiles with javac and runs, so generated Java is validated by a compiler.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["executive", "engineering"],
    quote: "The 45-program verification corpus compiles with javac and runs",
  },
  {
    id: "eca-api-surface",
    label: "REST API Surface",
    value: "15 operations",
    context:
      "Repository README: a FastAPI service exposing 15 operations under /api/v1, with request correlation middleware and a global exception framework.",
    status: "project-reported",
    sourceEntityIds: ["project:enterprise-code-analysis"],
    depths: ["engineering"],
    quote: "FastAPI REST API (15 operations under /api/v1)",
  },

  /* ------------------------------------------------------------------ */
  /* EcoTrace India                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: "eti-regression-suite",
    label: "Regression Tests",
    value: "1,500+",
    context:
      "Repository README: 1,500+ passing tests across the backend, chaincode, AI service and both mobile apps, each phase backed by a report under reports/.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["executive", "engineering"],
    quote: "1,500+ passing tests across backend, chaincode, AI service and mobile apps",
  },
  {
    id: "eti-detector-map50",
    label: "Held-Out Detection mAP50",
    value: "0.571",
    context:
      "Held-out real-world evaluation of the frozen 8-class YOLO11 detector on 80 unseen Open Images V7 photos (99 ground-truth boxes): precision 0.710, recall 0.474, mAP50 0.571, mAP50-95 0.381. The set is the same distribution as training, so it is not an out-of-distribution test.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["executive", "engineering", "research"],
    quote: "P=0.710, R=0.474, mAP50=0.571, mAP50-95=0.381",
    researchDetail: "Held-out 8-class e-waste device detection (80 images)",
  },
  {
    id: "eti-live-fabric",
    label: "Live Fabric Verification",
    value: "Real local network",
    context:
      "Project reports: device lifecycle chaincode and a backend gateway were live-verified against a real local Hyperledger Fabric network with real transactions (phase P9.2). Not a production or multi-organization deployment.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["engineering"],
    quote: "A real local Hyperledger Fabric network with real transactions",
  },
  {
    id: "eti-class-coverage",
    label: "Trained Component Classes",
    value: "8 of 19",
    context:
      "Project reports: the detector is frozen on an 8-class taxonomy while the component taxonomy has 19 classes. Public data for the remaining classes was unavailable, link-rotted or license-conditional.",
    status: "project-reported",
    sourceEntityIds: ["project:ecotrace-india"],
    depths: ["research"],
    quote: "Detector is a frozen 8-class taxonomy; the component taxonomy has 19 classes",
  },

  /* ------------------------------------------------------------------ */
  /* Solar AI Framework                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: "saf-yolo-test",
    label: "Panel Detector Test mAP50",
    value: "0.739",
    context:
      "Project reports: YOLO panel detector trained on Kaggle GPUs scored precision 0.706, recall 0.807 and mAP50 0.739 on the test split; the weights carry a recorded SHA-256 hash.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["executive", "engineering", "research"],
    quote: "P=0.706, R=0.807, mAP50=0.739",
    researchDetail: "YOLO solar panel detector (test split)",
  },
  {
    id: "saf-rooftop-recall",
    label: "Rooftop Panel Recall",
    value: "6 to ~39-46 of 48",
    context:
      "Project reports: retraining the panel detector on 54 first-party rooftop photos raised recall from 6 of 48 panels to 39 of 48 on an independent local re-check (0.935 on the validation toolchain). Labels are AI-assisted and human-reviewed, from one rooftop.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["executive", "research"],
    quote: "recall 6/48 -> 39-46/48 panels",
  },
  {
    id: "saf-condition-domain-fit",
    label: "Condition Model on Rooftop Photos",
    value: "27% to 94%",
    context:
      "Project reports: the benchmark-trained condition classifier scored 13 of 48 on the rooftop's own photos versus 45 of 48 for the retrained mix model, which was then promoted. One installation only.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["research"],
    quote: "OLD classifier 27% (13/48) vs MIX 94% (45/48)",
  },
  {
    id: "saf-negative-results",
    label: "Rejected Hypotheses",
    value: "3 hypotheses",
    context:
      "Project reports controlled ablations in which higher resolution (640 vs 960), mosaic and copy-paste augmentation, and fixed-grid tiled inference did not materially fix small-object recall, so none was adopted.",
    status: "project-reported",
    sourceEntityIds: ["project:solar-ai-framework"],
    depths: ["research"],
    quote: "hypothesis NOT supported, 0/4 classes materially improved",
  },

  /* ------------------------------------------------------------------ */
  /* ATLAS                                                               */
  /* ------------------------------------------------------------------ */
  {
    id: "atl-console-screens",
    label: "Data-Backed Console Screens",
    value: "12 screens",
    context:
      "Repository README route table: control center, agent registry, policies, decisions, simulations, explain, benchmark, capacity, analytics, ledger, trust engine and status, with alerts and settings still placeholders.",
    status: "project-reported",
    sourceEntityIds: ["project:atlas-governance"],
    depths: ["executive", "engineering"],
    quote: "Every data-backed screen reads live from the API",
  },
  {
    id: "atl-ledger-verify",
    label: "Ledger Integrity Check",
    context:
      "Repository README: GET /api/v1/ledger/verify recomputes every hash and link in the governance ledger.",
    status: "project-reported",
    sourceEntityIds: ["project:atlas-governance"],
    depths: ["engineering", "research"],
    quote: "Recompute every hash and check every link",
  },

  /* ------------------------------------------------------------------ */
  /* KubeMedic                                                           */
  /* ------------------------------------------------------------------ */
  {
    id: "kmd-tests",
    label: "Passing Tests",
    value: "465",
    context:
      "Repository README badge: 465 passing tests, with each of the four rules tied to a named test.",
    status: "project-reported",
    sourceEntityIds: ["project:kubemedic"],
    depths: ["executive", "engineering"],
    quote: "tests: 465 passing",
  },
  {
    id: "kmd-human-gate",
    label: "Human Approval Gate",
    context:
      "Execution is unreachable without a recorded human approval, a rejected plan can never execute, and rejection requires a reason that feeds back to the reasoning engine.",
    status: "project-reported",
    sourceEntityIds: ["project:kubemedic"],
    depths: ["executive", "engineering"],
    quote: "test_execute_without_approval_raises",
  },

  {
    id: "kmd-hackathon-rank",
    label: "IBM Bob 2.0 Hackathon",
    value: "Top 50",
    context:
      "Team result as reported by the project owner: KubeMedic placed in the Top 50 of the IBM Bob 2.0 hackathon and earned a pass to attend IBM TechXchange in Atlanta. No public ranking page was checked.",
    status: "project-reported",
    sourceEntityIds: ["project:kubemedic"],
    depths: ["executive"],
    quote: "Top 50, with a conference pass to IBM TechXchange in Atlanta",
  },

  /* ------------------------------------------------------------------ */
  /* Kyber-6G                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "k6g-hitl",
    label: "Calibrated Handshake Latency",
    value: "99.45 ms",
    context:
      "Research repository: a 100-iteration Raspberry Pi 4 (Cortex-A72) benchmark gave a 99.45 ms full hybrid handshake, and the NS-3 module was calibrated to it. Agreement on calibrated metrics is by construction, not independent validation.",
    status: "research-reported",
    sourceEntityIds: ["project:kyber-6g-pqc", "publication:mac-layer-hybrid-post-quantum-key-exchange-with-mobility-caching-for-5g-6g-drone-swarms"],
    depths: ["executive", "research"],
    quote: "Full Handshake Latency 99.45 ms",
    researchDetail: "Hybrid ML-KEM-1024 + X25519 on ARM Cortex-A72",
  },
  {
    id: "k6g-swarm-scale",
    label: "Simulated Swarm Size",
    value: "1 to 80+ UAVs",
    context:
      "Research repository: parametric NS-3 sweeps at up to 120 m/s over a 3.5 GHz n78 URLLC configuration. Manuscript in preparation, not yet peer reviewed.",
    status: "research-reported",
    sourceEntityIds: ["project:kyber-6g-pqc", "publication:mac-layer-hybrid-post-quantum-key-exchange-with-mobility-caching-for-5g-6g-drone-swarms"],
    depths: ["engineering", "research"],
    quote: "1 to 80+ UAV swarms under Gauss-Markov mobility",
  },

  /* ------------------------------------------------------------------ */
  /* CogniQueue                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "cgq-status",
    label: "Submission Status",
    value: "Phase 1 idea",
    context:
      "Submitted as the Phase 1 idea for the Precision Care Challenge 2026 (27 August 2026). It is a concept with no prototype, no clinical validation, and is clinical decision support only, not a diagnostic device.",
    status: "project-reported",
    sourceEntityIds: ["project:cogniqueue"],
    depths: ["executive", "research"],
    quote: "Clinical decision support only, not a diagnostic device.",
  },

  /* ------------------------------------------------------------------ */
  /* Smart Waste-Collection Robot                                        */
  /* ------------------------------------------------------------------ */
  {
    id: "swr-sim-only",
    label: "Evaluation Scope",
    value: "Simulation only",
    context:
      "The project is a MuJoCo simulation with a virtual RGB-D camera and no physical hardware, using Gemini vision for detection.",
    status: "project-reported",
    sourceEntityIds: ["project:smart-waste-robot"],
    depths: ["executive", "research"],
    quote: "Runs on a normal laptop with no GPU and no physical hardware.",
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
  "eti-detector-map50",
  "saf-yolo-test",
  "k6g-hitl",
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