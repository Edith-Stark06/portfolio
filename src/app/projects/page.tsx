import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BentoCard from "@/components/ui/BentoCard";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "AI systems and research prototypes: Mainframe Modernization Assistant, EcoTrace India, Solar AI Framework, ATLAS, KubeMedic, Kyber-6G, CogniQueue and a waste-collection robot. Case studies with technical depth and honest evidence labels.",
  openGraph: {
    title: "Engineering Projects | Ramana Sree K V",
    description: "Mainframe Modernization, EcoTrace India, Solar AI Framework, ATLAS, KubeMedic, Kyber-6G. AI systems with full technical depth and evidence labels.",
    url: "https://ramanasree.dev/projects",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/projects/enterprise-code-analysis/enterprise-dashboard-v1.webp"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-40 pb-[160px] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.projects}
            fallbackSrc={media.placeholders.hero}
            alt="Projects Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* Hero Section */}
        <section className="mb-20 md:mb-[120px]" aria-label="Engineering Projects Overview">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              PROJECT CATALOG // CASE STUDIES
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-display-hero text-on-background mb-6 font-extrabold tracking-tight">
            Engineering Projects
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            Enterprise systems, applied research and prototypes spanning AI, distributed systems and security. Each case study labels what is built, measured or still a concept.
          </p>
        </section>

        {/* Projects Grid */}
        <ScrollReveal stagger={0.12} y={50}>
          <section aria-label="Deployments Grid">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {projects.map((project) => (
                <BentoCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
