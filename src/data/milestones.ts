export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "experience" | "recognition" | "publication";
}

export const milestones: Milestone[] = [
  {
    year: "2027",
    title: "B.Tech in Computer Science",
    organization: "VIT Chennai",
    description:
      "Pursuing core engineering principles and advanced computational theory.",
    type: "experience",
  },
  {
    year: "2025",
    title: "SDE Internship",
    organization: "Larsen & Toubro (L&T)",
    description:
      "Developed scalable microservices architecture and automated deployment pipelines. Engineered robust solutions for ERP Inspection Call Management.",
    type: "experience",
  },
  {
    year: "2025",
    title: "Linux Foundation OMP Mentee",
    organization: "Linux Foundation",
    description:
      "Contributed to open-source kernels and specialized in systems-level optimization.",
    type: "experience",
  },
  {
    year: "2025–2026",
    title: "IBM Champion",
    organization: "IBM",
    description:
      "Recognized for advocacy and contributions to the global IBM developer community.",
    type: "recognition",
  },
  {
    year: "2026",
    title: "IEEE DSBS Best Paper",
    organization: "IEEE",
    description:
      "Awarded for breakthrough research in Alzheimer's Disease Classification using ResNet-DeiT Hybrid Model.",
    type: "recognition",
  },
  {
    year: "2025",
    title: "IBM Z Superstar Ambassador",
    organization: "IBM",
    description:
      "Leading the charge in modernizing enterprise applications on the mainframe.",
    type: "recognition",
  },
  {
    year: "2026",
    title:
      "Optimizing Token Routing in Multi-Agent Neural Networks",
    organization: "IEEE DSBS",
    description:
      "Published research on optimizing token routing strategies in multi-agent neural network architectures.",
    type: "publication",
  },
  {
    year: "2025",
    title: "Data Consistency Models in Edge-Compute Topologies",
    organization: "IC3DCM",
    description:
      "Research on maintaining data consistency across distributed edge computing environments.",
    type: "publication",
  },
];

export const experienceMilestones = milestones.filter(
  (m) => m.type === "experience"
);
export const recognitionMilestones = milestones.filter(
  (m) => m.type === "recognition"
);
export const publicationMilestones = milestones.filter(
  (m) => m.type === "publication"
);
