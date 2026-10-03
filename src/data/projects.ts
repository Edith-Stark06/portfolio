import { media } from "./media";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  colSpan: string;
  minHeight: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  architecture?: string;
  heroImage?: string;
  architectureImage?: string;
}

export const projects: Project[] = [
  {
    slug: "enterprise-code-analysis",
    title: "AI-Powered Mainframe Modernization Assistant",
    description: "Parser-grounded COBOL analysis, Java generation & RAG",
    category: "ENTERPRISE SCALE",
    techStack: ["Python", "FastAPI", "Streamlit", "ChromaDB"],
    colSpan: "md:col-span-12",
    minHeight: "min-h-[400px]",
    overview:
      "An enterprise backend that understands IBM Z mainframe applications before applying generative AI: it parses COBOL, builds dependency graphs, extracts business rules, scores modernization risk, and generates Java that is validated with a real javac. The LLM is an assistant on top of the analysis and is never sent raw COBOL.",
    challenge:
      "Mainframe estates hold millions of lines of COBOL, JCL workflows and copybook dependencies with decades of undocumented business logic. Wrapping an LLM around raw source hallucinates on legacy syntax and gives migration teams nothing they can audit.",
    solution:
      "Built a deterministic analysis pipeline first (lexer, parser, AST, semantic analysis, IR, control-flow graph) with dependency, business-rule, risk and strategy modules on top, then a Java generation backend and an optional retrieval-augmented explanation layer (LangChain, ChromaDB, NVIDIA NIM or Anthropic). Everything is exposed through a FastAPI service (15 operations under /api/v1) and a Streamlit workspace.",
    architecture:
      "COBOL → Lexer → Parser → AST → Semantic Analysis → IR → Control-Flow Graph → Dependencies / Business Rules / Risk / Strategy → Java backend, RAG and optional LLM, served by FastAPI and a Streamlit UI. JCL parsing and copybook expansion are still in progress.",
    heroImage: media.project.enterprise.hero,
    architectureImage: media.project.enterprise.architecture,
  },
  {
    slug: "ecotrace-india",
    title: "EcoTrace India",
    description: "E-waste lifecycle platform with AI detection and Hyperledger Fabric",
    category: "SUSTAINABILITY",
    techStack: ["YOLO", "LSTM", "Hyperledger Fabric", "React Native"],
    colSpan: "md:col-span-7",
    minHeight: "min-h-[320px]",
    overview:
      "An e-waste lifecycle management platform built for IEEE YESIST 2026: a Node backend, a trained AI device-detection service, a Hyperledger Fabric chaincode and gateway integration, two React Native (Expo) mobile apps and a React operator dashboard connecting consumers, collectors, recyclers and government oversight in one submission-to-recycling workflow.",
    challenge:
      "E-waste moves through informal channels with little traceability, so there is no trustworthy record of what was collected, who processed it and what was recovered. Consumers have no incentive to participate and regulators have no audit trail.",
    solution:
      "Delivered an end-to-end role-based workflow: consumers report devices and earn GreenCoin rewards, collectors accept pickups and classify devices by camera, recyclers record material recovery, and admins assign and audit work. A YOLO11 detector classifies devices, an LSTM forecasts e-waste volume, and device passports are anchored to a permissioned Hyperledger Fabric ledger.",
    architecture:
      "React Native consumer and collector apps and a React admin dashboard talk to a Node/PostgreSQL backend. A Python AI service performs device detection, and the backend writes verified lifecycle events to Hyperledger Fabric through a gateway client. The mobile apps are offline-first with an AsyncStorage sync queue.",
    heroImage: media.project.ecotrace.hero,
    architectureImage: media.project.ecotrace.architecture,
  },
  {
    slug: "solar-ai-framework",
    title: "Solar AI Framework",
    description: "Multimodal PV fault diagnosis and efficiency prediction",
    category: "RENEWABLE ENERGY",
    techStack: ["PyTorch", "YOLO", "XGBoost", "Streamlit"],
    colSpan: "md:col-span-5",
    minHeight: "min-h-[320px]",
    overview:
      "A research-oriented photovoltaic inspection system that detects panels, classifies their condition, and predicts efficiency loss from visual, environmental and physics-inspired features. It is built as a production-shaped pipeline with strict artifact and honesty rules rather than a demo.",
    challenge:
      "Manual inspection of solar arrays is slow and subjective, and public defect datasets are small, inconsistently labelled and rarely match the ground-level photos an owner actually takes. Models that score well on a benchmark can fail on the deployment domain.",
    solution:
      "Built a three-model pipeline: a YOLO panel detector, a condition classifier and an XGBoost efficiency-loss predictor. Ran a long series of controlled ablations (resolution, augmentation, training duration, tiling) and retrained the panel detector and condition model on first-party rooftop photos after discovering the benchmark-trained classifier scored 27% on that rooftop.",
    architecture:
      "YOLO panel detector with dynamic N-panel detection and deterministic spatial ordering → per-panel condition classification (Clean, Dusty, Bird-Drop, Physical-Damage and related classes) → 9-feature XGBoost efficiency-loss predictor, served through a Streamlit dashboard. Training runs on Kaggle GPUs with checksummed, hash-verified datasets and weights.",
    heroImage: media.project.solar.hero,
    architectureImage: media.project.solar.architecture,
  },
  {
    slug: "atlas-governance",
    title: "ATLAS — Adaptive Trust & Lifecycle Assurance System",
    description: "A governance layer that decides whether autonomous agents should be trusted before they act",
    category: "AI GOVERNANCE",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "scikit-learn"],
    colSpan: "md:col-span-6",
    minHeight: "min-h-[320px]",
    overview:
      "A governance control plane for autonomous financial agents. Instead of only asking whether an agent is authorized, ATLAS asks whether it should be trusted to perform this action, right now, under these circumstances, and records every decision on a tamper-evident ledger. Built for the Razorpay AI Builder Internship 2026, Track 2: AI Risk Manager.",
    challenge:
      "Autonomous agents that move money need more than static permissions. Trust changes with an agent's behavior, drift and context, and a risk team needs to see why a decision was made and what would have changed it.",
    solution:
      "Every action passes through a pipeline of Trust Engine, Policy Brain, Simulation Engine, Governance Decision, Explain AI and Governance Ledger before execution. The trust engine falls back to a heuristic when no model is trained, and reports baseline-versus-learned metrics for the trained outcome classifier.",
    architecture:
      "Next.js 16 console (agent registry, policy governance with versioned rules, decision investigation, simulation workspace, explainability, benchmarking, capacity planning and ledger verification) over a FastAPI and SQLAlchemy async API with PostgreSQL 17 and Redis 7. The ledger recomputes every hash and link on demand.",
  },
  {
    slug: "kubemedic",
    title: "KubeMedic",
    description: "Evidence-driven Kubernetes incident response with a human in the loop",
    category: "AI OPERATIONS",
    techStack: ["Python", "MCP", "IBM Bob", "Kubernetes"],
    colSpan: "md:col-span-6",
    minHeight: "min-h-[320px]",
    overview:
      "An incident-response agent for Kubernetes workloads. When a deployment goes bad it collects evidence over an MCP server, uses IBM Bob to correlate symptoms and reason about root cause, proposes an impact-aware remediation, pauses for a human decision, executes only an allowlisted action after approval, and independently verifies recovery. Built with teammates Verona and Shivraj; placed in the Top 50 of the IBM Bob 2.0 hackathon, earning a conference pass to IBM TechXchange in Atlanta.",
    challenge:
      "AI operations tools tend to over-claim: they fabricate analysis when a tool call fails, run model-composed commands, and declare success without checking. On-call engineers cannot trust an agent that behaves like that.",
    solution:
      "Four enforced rules: never fabricate evidence, separate fact from inference from recommendation, never claim success without evidence, and never execute anything a model composed. Each rule is enforced in code and covered by tests, for example an engine failure yields an explicit unavailable analysis rather than invented output.",
    architecture:
      "MCP evidence server → IBM Bob reasoning → root-cause analysis → remediation plan → human final review (approve, or reject with a required reason that feeds back to Bob) → allowlisted executor through the Kubernetes API → independent recovery verification → audit record generated from structured events.",
  },
  {
    slug: "kyber-6g-pqc",
    title: "Kyber-6G",
    description: "Post-quantum key exchange for 6G drone swarms",
    category: "SECURITY RESEARCH",
    techStack: ["NS-3", "C++", "ML-KEM", "Python"],
    colSpan: "md:col-span-6",
    minHeight: "min-h-[320px]",
    overview:
      "A research framework for hybrid post-quantum key exchange in 5G/6G UAV swarms. It fuses NIST FIPS 203 ML-KEM-1024 with classical X25519, authenticates with FIPS 204 ML-DSA-87, and evaluates the protocol in an NS-3 and 5G-LENA simulation calibrated against Raspberry Pi 4 hardware measurements. Joint work with a VIT Chennai research team; the manuscript is in preparation.",
    challenge:
      "Post-quantum keys and ciphertexts are large. On a high-mobility swarm with very short channel coherence time, uniform PQC deployment causes fragmentation, retransmission and URLLC deadline violations.",
    solution:
      "Proposed a two-tier security model: a heavy hybrid KEM on the ground-to-air link and lightweight PQC on lateral swarm links, with mobility edge caching to avoid repeated full handshakes, evaluated across swarm sizes from 1 to 80+ UAVs.",
    architecture:
      "gNodeB, MEC edge server, swarm gateway and followers simulated in NS-3 v3.42 with 5G-LENA NR, using a custom pqc-security module calibrated with ARM Cortex-A72 hardware-in-the-loop benchmarks. A React and Three.js visualizer presents swarm telemetry. FDD is used as a simulator workaround for a missing timing-advance model.",
  },
  {
    slug: "cogniqueue",
    title: "CogniQueue",
    description: "Ranking patients by diagnostic yield per scarce scan",
    category: "HEALTHCARE AI",
    techStack: ["PyTorch", "SHAP", "Optimization", "ResNet-DeiT"],
    colSpan: "md:col-span-6",
    minHeight: "min-h-[320px]",
    overview:
      "A clinical decision-support concept for early Alzheimer's diagnostic pathways, submitted as the Phase 1 idea for GE HealthCare's Precision Care Challenge 2026 with a teammate from VIT Chennai. It is a concept submission, not a deployed system or a diagnostic device.",
    challenge:
      "The bottleneck in memory clinics is triage, not screening: deciding which patient should consume the next blood panel, MRI slot or PET slot, defensibly, within real weekly capacity.",
    solution:
      "A decision layer above risk prediction: rank patients by the expected change in management per scarce slot (value of information), solve a capacity-constrained assignment against live MRI and PET limits, and gate on anti-amyloid therapy eligibility. Each stage is separately calibrated and can defer when uncertain.",
    architecture:
      "Public cohort data (ADNI, OASIS-3, NACC) and a synthetic cohort generator feed a patient-centric feature store, then four stage models (cognitive, blood biomarker, MRI with ResNet and DeiT, PET candidacy), a decision engine and a clinician queue interface with per-patient SHAP rationale.",
  },
  {
    slug: "smart-waste-robot",
    title: "Smart Waste-Collection Robot",
    description: "Autonomous vision-guided garbage pickup in simulation",
    category: "ROBOTICS",
    techStack: ["MuJoCo", "Gemini Vision", "Python", "ROS 2 topics"],
    colSpan: "md:col-span-6",
    minHeight: "min-h-[320px]",
    overview:
      "A capstone simulation of an autonomous garbage-collecting robot: it patrols a plaza, uses a vision model to identify real litter, estimates its 3D position, drives to it and picks it up with a 6-DOF arm. A team project; the repository is hosted on a teammate's account.",
    challenge:
      "Calling a billed vision API every frame is wasteful, and reaching a target needs real navigation and joint-by-joint arm motion rather than teleporting the object.",
    solution:
      "A cheap local color trigger gates when a Gemini vision call fires; bounding boxes are lifted to world coordinates by camera raycast with depth as fallback; an A* navigator and a skid-steer base reach the target; a staged per-joint IK arm grasps and deposits into an onboard basket.",
    architecture:
      "Virtual RGB-D camera → color trigger → Gemini analysis → coordinate estimator → A* navigator → mobile base → 6-DOF arm → basket, as a state machine from IDLE through PATROLLING to RELEASING. Modules use ROS 2 topic names so a Gazebo or real-robot swap is possible later.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
