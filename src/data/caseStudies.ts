export interface EngineeringDecision {
  challenge: string;
  decision: string;
  reason: string;
  tradeoff: string;
}

export interface CaseStudyInsights {
  worked: string;
  didnt: string;
  differently: string;
  shortRoadmap: string;
  longRoadmap: string;
}

const decisionsMap: Record<string, EngineeringDecision[]> = {
  "enterprise-code-analysis": [
    {
      challenge:
        "LLMs hallucinate on custom enterprise COBOL and JCL syntax when handed raw source.",
      decision: "Parser as source of truth, LLM as assistant",
      reason:
        "A deterministic lexer, parser, AST and IR produce the facts; the LLM only explains structured analysis and is never sent raw COBOL.",
      tradeoff:
        "Every language construct must be parsed explicitly, so coverage grows feature by feature (JCL parsing and copybook expansion are still in progress).",
    },
    {
      challenge:
        "Enterprise data privacy rules discourage sending source code to cloud vector databases.",
      decision: "ChromaDB local vector store with optional hosted LLMs",
      reason:
        "Retrieval runs on-premise; with no LLM backend configured the API returns an explicit LLM_PROVIDER_NOT_CONFIGURED error instead of fabricated answers.",
      tradeoff:
        "Generative answers need a configured provider, and local embedding indexes use more memory on large estates.",
    },
    {
      challenge:
        "Generated modernization code is worthless if it does not compile or behave like the original.",
      decision: "Validate generated Java with a real javac",
      reason:
        "A 45-program verification corpus is compiled and run so Java output is checked by a compiler rather than by trust in a model.",
      tradeoff:
        "The test suite needs a JDK installed and takes longer than pure-Python checks.",
    },
  ],
  "ecotrace-india": [
    {
      challenge:
        "Municipal audit trails need immutable multi-party verification without public gas fees.",
      decision: "Hyperledger Fabric permissioned ledger",
      reason:
        "Chaincode plus a gateway client anchor device lifecycle events on a permissioned network, live-verified against a real local Fabric network.",
      tradeoff:
        "Higher operational overhead for peer node orchestration than a database-only design.",
    },
    {
      challenge: "Collectors work in places with poor connectivity.",
      decision: "Offline-first React Native apps with a sync queue",
      reason:
        "An AsyncStorage-backed queue was tested against real disconnect and reconnect scenarios so pickups are not lost.",
      tradeoff: "Conflict handling and retry logic add client complexity.",
    },
    {
      challenge:
        "Detector accuracy claims are meaningless without data the model has never seen.",
      decision: "Dual-guarantee held-out evaluation set",
      reason:
        "An 80-image real-world set was checked as unseen by SHA-256 against all 1,035 distinct training images and by Open Images ID, then scored against exact source labels.",
      tradeoff:
        "The set comes from the same distribution as training (Open Images), so it is a held-out test, not an out-of-distribution one.",
    },
  ],
  "solar-ai-framework": [
    {
      challenge:
        "A classifier that wins on a public benchmark can fail on the deployment domain.",
      decision: "Evaluate every checkpoint on first-party rooftop photos",
      reason:
        "The benchmark-trained classifier scored 13/48 (27%) on the owner's rooftop photos versus 45/48 (94%) for a model retrained on them, which reversed an earlier rejection.",
      tradeoff:
        "First-party data comes from one installation, so it shows domain fit, not generality.",
    },
    {
      challenge: "Small-object recall was weak and the cause was unclear.",
      decision: "Single-variable controlled ablations",
      reason:
        "Resolution (640 vs 960), augmentation, training duration and tiled inference were each tested alone against a hash-pinned dataset, and several hypotheses were rejected on evidence.",
      tradeoff:
        "Slower than changing many things at once, but each result is attributable.",
    },
    {
      challenge:
        "Fabricated or silently missing artifacts would invalidate a research system.",
      decision: "No-fabrication policy with checksummed artifacts",
      reason:
        "Model weights and datasets carry SHA-256 hashes, and blocked states (missing data, compute limits) are reported rather than papered over.",
      tradeoff:
        "Progress sometimes stops at a documented blocked state instead of a polished number.",
    },
  ],
  "atlas-governance": [
    {
      challenge:
        "A static allow-list cannot express changing trust in an autonomous agent.",
      decision: "Composite trust engine with drift watchlist",
      reason:
        "Scores break down by factor, track history and drift, and fall back to a heuristic when no trained model exists.",
      tradeoff: "Trust scores need seeded or real history to be meaningful.",
    },
    {
      challenge:
        "Auditors must be able to show that governance records were not altered.",
      decision: "Hash-linked governance ledger with on-demand verification",
      reason:
        "A verify endpoint recomputes every hash and link, so tampering is detectable.",
      tradeoff:
        "Append-only records make corrections additive rather than in place.",
    },
    {
      challenge: "Policy changes can silently alter outcomes.",
      decision: "Immutable versioned rules with replay simulation",
      reason:
        "A candidate rule can be replayed over recorded decisions before it is activated.",
      tradeoff: "More storage and a stricter change workflow.",
    },
  ],
  kubemedic: [
    {
      challenge: "Agents that compose shell commands can cause outages.",
      decision: "Allowlisted action enum, no shell",
      reason:
        "Every mutation is a named operation with a validated target performed through the Kubernetes API after recorded human approval.",
      tradeoff:
        "New remediations need code changes rather than prompt changes.",
    },
    {
      challenge:
        "When the reasoning engine fails, agents often invent plausible analysis.",
      decision: "Explicit unavailable analysis state",
      reason:
        "Any engine failure yields analysis_source unavailable, so the record shows what was and was not done.",
      tradeoff:
        "Some incidents end with no AI diagnosis, which is the honest outcome.",
    },
    {
      challenge:
        "Declaring an incident fixed on the executor's say-so is not evidence.",
      decision: "Independent post-action verification",
      reason:
        "Recovery means the rollout reports healthy and the application answers 200, re-read after the fact.",
      tradeoff: "Adds delay before an incident can be closed.",
    },
  ],
  "kyber-6g-pqc": [
    {
      challenge:
        "Uniform Kyber-1024 on every intra-swarm link collapses under fragmentation at a 17.8 microsecond coherence time.",
      decision: "Two-tier cryptographic architecture",
      reason:
        "A heavy hybrid KEM protects the infrastructure link while lightweight PQC and fountain coding protect lateral swarm links.",
      tradeoff:
        "Two security domains to specify, analyze and keep consistent.",
    },
    {
      challenge:
        "Simulated crypto costs are only credible if tied to real hardware.",
      decision: "Hardware-in-the-loop calibration on Raspberry Pi 4",
      reason:
        "100-iteration ARM Cortex-A72 benchmarks calibrate the NS-3 pqc-security module.",
      tradeoff:
        "The simulation matches by construction on calibrated metrics, so agreement there is a consistency check rather than independent validation.",
    },
    {
      challenge:
        "The 5G-LENA fork lacks 3GPP timing advance, which breaks TDD at 120 m/s.",
      decision: "FDD as a documented simulator workaround",
      reason:
        "Separate bandwidth parts for downlink and uplink avoid TX/RX overlap crashes.",
      tradeoff:
        "A deployment would favor TDD, so the paper must disclose this limitation.",
    },
  ],
  cogniqueue: [
    {
      challenge: "Sorting patients by raw risk ignores scanner capacity.",
      decision: "Capacity-constrained assignment",
      reason:
        "The weekly queue is solved against real MRI and PET slot limits instead of sorting a risk column.",
      tradeoff: "Requires clinic capacity data and a defensible objective.",
    },
    {
      challenge: "Patients whose class is already certain waste scarce scans.",
      decision: "Value-of-information ranking",
      reason:
        "Patients near the decision boundary are escalated and certain ones are de-prioritised.",
      tradeoff: "Depends on well-calibrated stage models.",
    },
    {
      challenge: "Later-stage features must not leak into earlier decisions.",
      decision: "Stage-wise calibration with defer",
      reason:
        "Each stage trains only on features available at that point and may defer.",
      tradeoff: "More models to calibrate and monitor.",
    },
  ],
  "smart-waste-robot": [
    {
      challenge: "Calling a billed vision API every frame is costly.",
      decision: "Cheap color trigger gates Gemini calls",
      reason:
        "A local color-blob check decides when a snapshot goes to the vision model.",
      tradeoff: "Litter that does not trigger the blob check can be missed.",
    },
    {
      challenge:
        "Windows laptops struggle with the full ROS 2, Gazebo and Isaac stacks.",
      decision: "MuJoCo with ROS 2-shaped modules",
      reason:
        "A binary pip wheel runs on a student laptop with no GPU, while ROS 2 topic names keep a later port possible.",
      tradeoff: "Architecture-level sim-to-real rather than a drop-in robot stack.",
    },
    {
      challenge: "Teleporting an object into a bin proves nothing about manipulation.",
      decision: "Staged per-joint IK for a 6-DOF arm",
      reason:
        "Align, reach, descend, fine-align, lift and deposit stages move joint by joint with a physics basket.",
      tradeoff: "Slower and harder to tune than kinematic grasp attachment.",
    },
  ],
};

const fallbackDecision: EngineeringDecision[] = [
  {
    challenge: "System modularity and maintainability.",
    decision: "Decoupled Microservice Architecture",
    reason:
      "Ensures independent scaling and isolation of critical components.",
    tradeoff:
      "Increased inter-service network communication overhead.",
  },
];

const insightsMap: Record<string, CaseStudyInsights> = {
  "enterprise-code-analysis": {
    worked:
      "Treating the parser as the source of truth and the LLM as an assistant gave auditable analysis; the 45-program Java corpus compiles and runs with javac, and the suite has 4,863 automated tests.",
    didnt:
      "JCL parsing and copybook expansion are not implemented yet, so cross-file context is only inventoried and cross-referenced.",
    differently:
      "Design copybook expansion and JCL parsing into the IR from the start instead of adding them after COBOL.",
    shortRoadmap:
      "Implement the JCL parser and copybook expansion, and add continuous integration.",
    longRoadmap:
      "Extend language support to PL/I and use fine-tuned local models for fully offline deployment.",
  },
  "ecotrace-india": {
    worked:
      "Strict evidence discipline: every claimed result is backed by a phase report, and a held-out real-world evaluation gave an honest mAP50 of 0.571 instead of a headline accuracy.",
    didnt:
      "Dataset coverage: only 8 of 19 target component classes could be trained, because public data for the rest was link-rotted, license-conditional or self-collect-only.",
    differently:
      "Plan first-party data collection for the missing classes at the start rather than relying on public sources.",
    shortRoadmap:
      "Collect first-party images for the unmapped component classes and extend the detector beyond 8 classes.",
    longRoadmap:
      "Pilot the permissioned Fabric network with real collectors and recyclers and add a dedicated recycler app.",
  },
  "solar-ai-framework": {
    worked:
      "Domain-matched retraining: panel recall on the owner's rooftop rose from 6 of 48 to roughly 39 to 46 of 48 panels, and condition accuracy from 13 of 48 to 45 of 48 on that rooftop.",
    didnt:
      "Several hypotheses failed: higher resolution, targeted augmentation and tiled inference did not fix small-object recall, and a six-class dataset was blocked by label provenance.",
    differently:
      "Collect representative first-party scenes before tuning any architecture, since data drove every real gain.",
    shortRoadmap:
      "Add more installations and labelled scenes to test generality beyond one rooftop.",
    longRoadmap:
      "Complete the six-class condition model and submit the research for journal publication.",
  },
  "atlas-governance": {
    worked:
      "Every data-backed console screen reads live from the API and degrades to an explicit backend-unavailable panel, and the ledger can verify its own integrity.",
    didnt:
      "The alerts and settings routes are placeholders with no design yet.",
    differently:
      "Settle the full set of console screens before building so no routes ship as placeholders.",
    shortRoadmap:
      "Build the alerts and settings screens and expand the reference dataset with real agent behavior.",
    longRoadmap:
      "Integrate with a payments risk workflow and external model monitoring.",
  },
  kubemedic: {
    worked:
      "Encoding the four rules in code with tests (465 passing) made honesty a property of the system rather than of the prompt.",
    didnt:
      "Naming and eligibility: the original project names collided with existing products, and the codebase predated a hackathon that required a new build, which had to be handled with the organizers.",
    differently:
      "Check name collisions and event eligibility before building, not after.",
    shortRoadmap:
      "Harden the allowlisted executor and add more seeded incident scenarios for the demo.",
    longRoadmap:
      "Broaden the allowlisted remediation set and verify against more incident types.",
  },
  "kyber-6g-pqc": {
    worked:
      "Moving from Kyber-768 to a NIST Level-5 two-tier design addressed reviewer feedback and exposed the fragmentation problem that motivates the architecture.",
    didnt:
      "The simulator lacks timing advance, so FDD was used, and calibrated metrics match hardware by construction.",
    differently:
      "Validate against held-out hardware measurements the model was not calibrated on.",
    shortRoadmap:
      "Finish the IEEE Access manuscript and the extended journal version.",
    longRoadmap:
      "Test on real UAV radios and compare TDD with FDD once timing advance is available.",
  },
  cogniqueue: {
    worked:
      "Reusing a published Stage-3 MRI model meant the novel contribution is the decision layer, not another classifier.",
    didnt:
      "It is a Phase 1 idea submission, so there is no prototype, deployment or clinical validation.",
    differently:
      "Build a synthetic-cohort prototype of the capacity-aware queue early to test the ranking.",
    shortRoadmap:
      "Prototype the value-of-information ranking and capacity solver on synthetic and public cohort data.",
    longRoadmap:
      "Validate with clinicians against real clinic capacity and workflows.",
  },
  "smart-waste-robot": {
    worked:
      "Gating the vision call with a local trigger kept API cost low while keeping real vision-based detection.",
    didnt:
      "Windows could not run the standard ROS 2 and Gazebo stack comfortably, which shaped the platform choice.",
    differently:
      "Start on Ubuntu with ROS 2 if a physical robot is the real goal.",
    shortRoadmap: "Port the nodes to ROS 2 and Gazebo.",
    longRoadmap: "Deploy on a physical robot with real drivers.",
  },
};

const fallbackInsights: CaseStudyInsights = {
  worked: "Modular design enabled rapid feature iteration.",
  didnt: "Early tight coupling between API and UI layers.",
  differently:
    "Define strict OpenAPI interface contracts prior to frontend implementation.",
  shortRoadmap:
    "Optimize database query indices for large datasets.",
  longRoadmap:
    "Explore distributed cloud deployment strategies.",
};

export function getDecisionsForSlug(
  slug: string
): EngineeringDecision[] {
  return decisionsMap[slug] ?? fallbackDecision;
}

export function getInsightsForSlug(slug: string): CaseStudyInsights {
  return insightsMap[slug] ?? fallbackInsights;
}
