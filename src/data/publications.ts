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
    status: "Accepted & Published",
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
    title: "Sepsis Treatment Optimization using Reinforcement Learning (MIMIC-III)",
    venue: "Research",
    year: "2025",
    status: "In Progress",
    techStack: ["RL", "MDP"],
    featured: false,
    description: "Markov Decision Process and survival-based reward functions for optimizing sepsis treatment protocols.",
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
