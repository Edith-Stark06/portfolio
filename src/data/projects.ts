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
    title: "AI-Powered Enterprise Code Analysis & Workflow Automation Platform",
    description: "",
    category: "ENTERPRISE SCALE",
    techStack: ["Python", "FastAPI", "Streamlit", "ChromaDB"],
    colSpan: "md:col-span-12",
    minHeight: "min-h-[400px]",
    overview:
      "A comprehensive platform that leverages large language models to automate source code analysis, documentation generation, and developer workflow orchestration across enterprise codebases.",
    challenge:
      "Enterprise development teams face significant bottlenecks in code review, documentation, and knowledge transfer. Manual analysis of large codebases is time-consuming and error-prone.",
    solution:
      "Built an AI-driven platform using FastAPI for the backend API, Streamlit for interactive dashboards, and ChromaDB for semantic vector storage. The system uses RAG (Retrieval-Augmented Generation) to provide contextual code analysis and automated documentation.",
    architecture:
      "Microservices architecture with FastAPI endpoints, ChromaDB vector store, LLM inference pipeline, and Streamlit frontend.",
    heroImage: media.project.enterprise.hero,
    architectureImage: media.project.enterprise.architecture,
  },
  {
    slug: "ecotrace-india",
    title: "EcoTrace India",
    description: "AI-Powered E-Waste Tracking",
    category: "SUSTAINABILITY",
    techStack: ["YOLO", "LSTM", "Hyperledger Fabric"],
    colSpan: "md:col-span-7",
    minHeight: "min-h-[320px]",
    overview:
      "An intelligent e-waste tracking and management system that uses computer vision for waste classification and blockchain for transparent lifecycle tracking.",
    challenge:
      "India generates millions of tons of e-waste annually with minimal tracking infrastructure. Current systems lack transparency and accountability in the recycling chain.",
    solution:
      "Developed a hybrid AI-Blockchain solution using YOLO for real-time waste classification, LSTM for supply chain forecasting, and Hyperledger Fabric for immutable tracking records.",
    architecture:
      "Edge-deployed YOLO models synced with cloud-hosted LSTM prediction engines, writing verified transactions to a distributed Hyperledger Fabric network.",
    heroImage: media.project.ecotrace.hero,
    architectureImage: media.project.ecotrace.architecture,
  },
  {
    slug: "solar-ai-framework",
    title: "Solar Defect Analysis",
    description: "Drone imagery analysis",
    category: "RENEWABLE ENERGY",
    techStack: ["PyTorch", "OpenCV", "React"],
    colSpan: "md:col-span-5",
    minHeight: "min-h-[320px]",
    overview:
      "A deep learning framework for automated solar panel defect detection using satellite and drone imagery.",
    challenge:
      "Manual inspection of large-scale solar farms is labor-intensive and prone to oversight, leading to significant energy loss and maintenance delays.",
    solution:
      "Implemented a custom PyTorch vision model to detect micro-cracks, hotspots, and dust accumulation from thermal and RGB drone imagery.",
    architecture:
      "CNN-based anomaly detection pipeline hosted on AWS SageMaker, delivering real-time inferences to a React-based monitoring dashboard.",
    heroImage: media.project.solar.hero,
    architectureImage: media.project.solar.architecture,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
