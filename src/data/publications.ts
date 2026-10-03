import { media } from "./media";

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: string;
  accuracy?: string;
  techStack: string[];
  description?: string;
  featured: boolean;
  colSpan?: string;
  image?: string;
}

export const publications: Publication[] = [
  {
    title: "Alzheimer's Disease Classification using ResNet-DeiT Hybrid Model",
    venue: "IEEE DSBS 2026",
    year: "2026",
    status: "Best Paper Award · Published",
    accuracy: "97.22%",
    techStack: ["PyTorch"],
    featured: true,
    colSpan: "md:col-span-12",
    description: "A hybrid deep learning approach combining ResNet's convolutional feature extraction with DeiT's transformer-based attention mechanisms for multi-class Alzheimer's disease classification from brain MRI scans.",
    image: media.publication.healthcare,
  },
  {
    title: "AI-Assisted Mainframe Modernization",
    venue: "OMP White Paper",
    year: "2025",
    status: "Published",
    techStack: ["XGBoost", "SHAP"],
    featured: true,
    colSpan: "md:col-span-6",
    description: "A comprehensive white paper exploring AI-driven approaches to enterprise mainframe modernization, featuring XGBoost-based code complexity analysis and SHAP interpretability for migration decision support.",
    image: media.publication.edge,
  },
  {
    title: "Gradient Boosting Ensemble for Diabetic Complication Prediction",
    venue: "IC3DCM 2026",
    year: "2026",
    status: "Published",
    techStack: ["XGBoost", "LightGBM", "CatBoost", "SHAP"],
    featured: true,
    colSpan: "md:col-span-6",
    description: "An ensemble approach leveraging multiple gradient boosting frameworks for early prediction of diabetic complications with interpretable feature importance analysis.",
    image: media.publication.archive,
  },
  {
    title: "MAC-Layer Hybrid Post-Quantum Key Exchange with Mobility Caching for 5G/6G Drone Swarms",
    venue: "IEEE Access (manuscript)",
    year: "2026",
    status: "Manuscript In Preparation",
    techStack: ["ML-KEM-1024", "NS-3", "5G-LENA", "Raspberry Pi 4"],
    featured: false,
    description: "Hybrid ML-KEM-1024 and X25519 key exchange with mobility edge caching for 5G/6G UAV swarms, evaluated in NS-3 with hardware-in-the-loop calibration on a Raspberry Pi 4. Co-authored with a VIT Chennai research team; an extended journal version targets Elsevier Vehicular Communications. Not yet submitted or peer reviewed.",
    image: media.publication.archive,
  },
  {
    title: "Multimodal AI Framework for Solar Panel Fault Diagnosis and Efficiency Prediction",
    venue: "Journal (target)",
    year: "2026",
    status: "Manuscript In Preparation",
    techStack: ["YOLO", "PyTorch", "XGBoost"],
    featured: false,
    description: "A research framework combining panel detection, condition classification and physics-inspired efficiency prediction, with controlled ablations and first-party rooftop evaluation, including documented negative results.",
    image: media.publication.archive,
  },
  {
    title: "Sepsis Treatment Optimization using Reinforcement Learning (MIMIC-III)",
    venue: "Research",
    year: "2025",
    status: "In Progress",
    techStack: ["RL", "MDP", "DQN", "Fitted Q-Iteration"],
    featured: false,
    description: "Markov Decision Process formulation and survival-based reward functions for sepsis treatment policies on MIMIC-III, comparing deep Q-network and fitted Q-iteration policies against clinician behavior with offline evaluation.",
    image: media.publication.archive,
  },
  {
    title: "Agentic AIOps on IBM Z",
    venue: "Whitepaper",
    year: "2025",
    status: "Published",
    techStack: ["IBM Z", "AIOps"],
    featured: false,
    description: "Exploring agentic AI approaches for autonomous operations management on IBM Z mainframe systems.",
    image: media.publication.archive,
  },
];

export const featuredPublications = publications.filter((p) => p.featured);
export const archivePublications = publications.filter((p) => !p.featured);
