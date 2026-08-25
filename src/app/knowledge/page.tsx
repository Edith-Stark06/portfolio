import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import KnowledgeGraphView from "@/components/ui/KnowledgeGraphView";
import { knowledgeEntities, knowledgeRelations } from "@/data/knowledge";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Knowledge Graph",
  description:
    "Interactive knowledge graph mapping the connections between Enterprise AI deployments, peer-reviewed research, technologies, and engineering milestones.",
  openGraph: {
    title: "Knowledge Graph | Ramana Sree K V",
    description:
      "Interactive knowledge graph mapping Enterprise AI deployments, peer-reviewed research, technologies, and milestones.",
    url: "https://ramanasree.dev/knowledge",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/hero/hero-background-v1.webp"],
  },
};

function GraphFallback() {
  return (
    <div className="glass-panel rounded-xl border border-white/10 w-full aspect-[7/5] max-h-[680px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-container" />
        </div>
        <p className="font-mono text-mono-label text-on-surface-variant uppercase tracking-widest">
          LOADING_KNOWLEDGE_MAP...
        </p>
      </div>
    </div>
  );
}

export default function KnowledgePage() {
  const projectCount = knowledgeEntities.filter((e) => e.type === "project").length;
  const publicationCount = knowledgeEntities.filter(
    (e) => e.type === "publication"
  ).length;
  const milestoneCount = knowledgeEntities.filter(
    (e) => e.type === "milestone"
  ).length;
  const technologyCount = knowledgeEntities.filter(
    (e) => e.type === "technology"
  ).length;

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden"
      >
        <div className="blueprint-bg absolute inset-0 -z-10 opacity-40 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none"
          aria-hidden="true"
        />

        <section className="mb-16 md:mb-20" aria-label="Knowledge graph introduction">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              KNOWLEDGE SYSTEM // RELATIONAL MAP
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            The Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              Knowledge Graph.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed mb-8">
            Every deployment, publication, milestone, and technology in this
            portfolio is connected. Navigate the map to see how the work fits
            together — no duplicated data, no invented links.
          </p>

          <ul
            className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-mono-label text-on-surface-variant"
            role="list"
            aria-label="Graph statistics"
          >
            <li>
              <span className="text-primary font-bold">{projectCount}</span>{" "}
              DEPLOYMENTS
            </li>
            <li>
              <span className="text-secondary font-bold">{publicationCount}</span>{" "}
              PUBLICATIONS
            </li>
            <li>
              <span className="text-on-surface font-bold">{milestoneCount}</span>{" "}
              MILESTONES
            </li>
            <li>
              <span className="text-tertiary font-bold">{technologyCount}</span>{" "}
              TECHNOLOGIES
            </li>
            <li>
              <span className="text-primary font-bold">
                {knowledgeRelations.length}
              </span>{" "}
              RELATIONS
            </li>
          </ul>
        </section>

        <section aria-label="Interactive knowledge map">
          <Suspense fallback={<GraphFallback />}>
            <KnowledgeGraphView />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
