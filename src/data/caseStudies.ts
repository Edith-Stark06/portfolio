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
        "High concurrent API requests during large repository analysis scans.",
      decision: "FastAPI Asynchronous Microservice",
      reason:
        "ASGI event loop handles non-blocking asynchronous I/O with sub-100ms API latency.",
      tradeoff:
        "Requires async database drivers and careful context lifecycle management.",
    },
    {
      challenge:
        "Enterprise data privacy regulations prohibit cloud vector databases.",
      decision: "ChromaDB Local Vector Store",
      reason:
        "Embedded vector database runs entirely on-premise, preserving absolute code confidentiality.",
      tradeoff:
        "Higher local memory consumption during large-scale embedding indexing.",
    },
    {
      challenge:
        "LLM context windows hallucinated on custom enterprise COBOL/JCL syntax.",
      decision: "AST-Grounded RAG Pipeline",
      reason:
        "Injects exact Abstract Syntax Tree nodes into prompts, guaranteeing contextual precision.",
      tradeoff:
        "Added latency for vector retrieval before model generation.",
    },
  ],
  "ecotrace-india": [
    {
      challenge:
        "Identifying crushed e-waste components under variable facility lighting at 45+ FPS.",
      decision: "YOLO Edge Computer Vision",
      reason:
        "Single-pass inference delivers 94% classification accuracy directly on edge hardware.",
      tradeoff:
        "Requires extensive synthetic dataset augmentation for rare component types.",
    },
    {
      challenge:
        "Municipal audit trails require immutable multi-party verification without public gas fees.",
      decision: "Hyperledger Fabric Permissioned Ledger",
      reason:
        "Enterprise permissioned blockchain eliminates public transaction fees while securing audit integrity.",
      tradeoff:
        "Higher operational overhead for peer node orchestration.",
    },
    {
      challenge:
        "Seasonal e-waste surges caused facility processing bottlenecks.",
      decision: "LSTM Time-Series Forecasting Engine",
      reason:
        "Recurrent LSTM captures temporal trends across multi-year regional disposal datasets.",
      tradeoff:
        "Sensitive to missing historical data points during holiday periods.",
    },
  ],
  "solar-ai-framework": [
    {
      challenge:
        "Micro-cracks are invisible in RGB light, while dust accumulation is invisible in thermal.",
      decision: "Dual Thermal & RGB PyTorch Vision Pipeline",
      reason:
        "Fusing thermal hotspot detection with RGB visual classification eliminates false positive defects.",
      tradeoff:
        "Requires precise pixel registration between thermal and RGB drone sensors.",
    },
    {
      challenge:
        "Drone image processing happens in massive bursts after flight completions.",
      decision: "AWS SageMaker Auto-Scaling Endpoints",
      reason:
        "Serverless GPU inference clusters scale down to zero when idle, optimizing computing costs.",
      tradeoff:
        "Initial cold-start latency (~15s) when processing jobs trigger.",
    },
    {
      challenge:
        "Ambient temperature shifts alter thermal panel readouts across flight times.",
      decision: "OpenCV Radiometric Calibration",
      reason:
        "Automated preprocessing normalizes raw thermal values to true temperature deltas.",
      tradeoff:
        "Requires ambient weather telemetry paired with each drone dataset.",
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
      "AST-driven semantic chunking produced 3x higher retrieval relevance compared to fixed-character chunking.",
    didnt:
      "Unconstrained LLM responses occasionally broke automated documentation JSON parsers.",
    differently:
      "Implement strict Pydantic output validation guards on all model responses earlier in development.",
    shortRoadmap:
      "Add multi-language AST support for legacy JCL and PL/I mainframe scripts.",
    longRoadmap:
      "Fine-tune lightweight 8B open-weight LLMs for 100% offline edge deployment.",
  },
  "ecotrace-india": {
    worked:
      "Edge computer vision paired with permissioned blockchain built total trust across 50+ recycling centers.",
    didnt:
      "Writing raw frame detections individually overwhelmed blockchain block creation limits.",
    differently:
      "Batch frame detections into hourly signed digest transactions before writing to ledger.",
    shortRoadmap:
      "Integrate optical character recognition (OCR) for printed circuit board serial tracking.",
    longRoadmap:
      "Expand Hyperledger network peer nodes to state environmental compliance boards.",
  },
  "solar-ai-framework": {
    worked:
      "Dual thermal-RGB sensor fusion reduced false-positive defect calls by over 65%.",
    didnt:
      "Feeding raw 4K drone imagery directly into CNN backbones saturated GPU memory.",
    differently:
      "Implement automated sliding-window tile extraction before batch feeding image patches into PyTorch.",
    shortRoadmap:
      "Add real-time drone flight path optimization based on preliminary thermal heatmaps.",
    longRoadmap:
      "Train quantized micro-vision models for onboard real-time inference on drone microcontrollers.",
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
