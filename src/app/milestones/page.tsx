import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { milestones } from "@/data/milestones";

export const metadata: Metadata = {
  title: "Milestones & Achievements",
  description: "Chronological timeline of engineering breakthroughs, global recognitions, peer-reviewed publications, and open-source contributions. IBM Champion 2025 & 2026.",
  openGraph: {
    title: "Milestones & Achievements | Ramana Sree K V",
    description: "IBM Champion 2025 & 2026, IEEE Best Paper 2026, Linux Foundation OMP Mentee, IBM Z Superstar Ambassador.",
    url: "https://ramanasree.dev/milestones",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/ibm/ibm-champion-2026.webp"],
  },
};

export default function MilestonesPage() {
  const milestoneDetailsMap: Record<
    string,
    {
      why: string;
      learned: string;
      capability: string;
      image: string;
    }
  > = {
    "IBM Champion": {
      why: "Recognized globally among top enterprise technology advocates and AI leaders for contributions to the IBM Z ecosystem.",
      learned: "Technical advocacy is about building open, supportive peer communities and sharing knowledge freely.",
      capability: "Technical Leadership & Global Advocacy",
      image: media.ibm.champion,
    },
    "IEEE DSBS Best Paper": {
      why: "Breakthrough research in Alzheimer's Disease classification using a hybrid ResNet-DeiT CNN-Transformer vision model.",
      learned: "Pairing local spatial feature maps with global self-attention layers overcomes single-backbone medical imaging limits.",
      capability: "Research Excellence & Algorithmic Design",
      image: media.publication.healthcare,
    },
    "Linux Foundation OMP Mentee": {
      why: "Selected for Linux Foundation Open Mainframe Project mentorship, contributing to open-source systems engineering.",
      learned: "Open-source developer tooling is the ultimate bridge between legacy enterprise mainframes and cloud-native systems.",
      capability: "Open Source Systems Engineering",
      image: media.publication.edge,
    },
    "IBM Z Superstar Ambassador": {
      why: "Led campus workshops and technical onboarding for student developers across India, demystifying mainframe computing.",
      learned: "Complex enterprise topics become intuitive when taught through hands-on JCL/COBOL labs.",
      capability: "Enterprise Mainframe Modernization",
      image: media.ibm.superstar,
    },
    "SDE Internship": {
      why: "Engineered scalable microservices and automated deployment pipelines for ERP Inspection Call Management at Larsen & Toubro.",
      learned: "Production enterprise systems demand strict API contracts, clean microservice isolation, and robust error handling.",
      capability: "Scalable Microservice Architecture",
      image: media.placeholders.project,
    },
    "B.Tech in Computer Science": {
      why: "Pursuing core computer science theory, algorithms, and distributed computing at VIT Chennai.",
      learned: "Strong theoretical foundations in data structures and computational complexity accelerate system design decisions.",
      capability: "Computer Science Foundations",
      image: media.placeholders.hero,
    },
  };

  const capabilityGrowthMatrix = [
    { milestone: "IBM Champion (2025–2026)", capability: "Technical Leadership & Community Advocacy", domain: "ENTERPRISE LEADERSHIP" },
    { milestone: "IEEE DSBS Best Paper (2026)", capability: "Neuroimaging AI Research & Model Design", domain: "APPLIED RESEARCH" },
    { milestone: "Linux Foundation OMP Mentorship", capability: "Open Source Kernel & Tooling Architecture", domain: "SYSTEMS ENGINEERING" },
    { milestone: "IBM Z Superstar Ambassador", capability: "Mainframe Application Modernization", domain: "ENTERPRISE COMPUTING" },
    { milestone: "L&T SDE Internship", capability: "Production ERP Microservice Deployment", domain: "SOFTWARE ENGINEERING" },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.milestones}
            fallbackSrc={media.placeholders.hero}
            alt="Milestones Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. HERO SECTION */}
        <section className="mb-20 md:mb-[120px]" aria-label="Milestones Hero">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              CAREER ARCHITECTURE // MILESTONES
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            The Milestones That Shaped <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              My Engineering Journey.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed mb-8">
            A chronological timeline of defining engineering breakthroughs, global recognitions, peer-reviewed publications, and open-source contributions.
          </p>

          <Link
            prefetch={false}
            href="/journey/career"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-white uppercase transition-colors"
          >
            <span>Read Complete Career Documentary</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* 2. CINEMATIC TIMELINE */}
        <section className="mb-24 md:mb-[160px] relative" aria-label="Cinematic Timeline">
          {/* Vertical Timeline Spine */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" aria-hidden="true" />

          <div className="flex flex-col gap-12 md:gap-16" role="list">
            {milestones.map((m, index) => {
              const detail = milestoneDetailsMap[m.title] || {
                why: "Demonstrated technical mastery and continuous engineering growth.",
                learned: "Rigorous execution is essential for building trustworthy software.",
                capability: "Systems Engineering",
                image: media.placeholders.project,
              };

              return (
                <ScrollReveal key={index} y={40} duration={0.8} delay={index * 0.08}>
                  <article className="relative pl-10 md:pl-24 group" role="listitem">
                    {/* Animated Timeline Node */}
                    <div
                      className="absolute left-[11px] md:left-[27px] top-4 w-3 h-3 rounded-full bg-primary border-2 border-background group-hover:scale-150 group-hover:bg-secondary transition-all duration-300 shadow-[0_0_12px_rgba(15,98,254,0.8)]"
                      aria-hidden="true"
                    />

                    <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 group-hover:border-primary/40 transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <span className="font-mono text-lg font-extrabold text-primary">
                              {m.year}
                            </span>
                            <span className="px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 font-mono text-[10px] font-bold text-secondary uppercase tracking-wider">
                              {m.type}
                            </span>
                          </div>

                          <span className="font-mono text-xs text-on-surface-variant font-semibold uppercase block mb-1">
                            {m.organization}
                          </span>
                          <h2 className="font-display text-headline-sm md:text-headline-md text-on-surface font-bold mb-4 group-hover:text-primary transition-colors">
                            {m.title}
                          </h2>

                          <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed mb-6">
                            {m.description}
                          </p>
                        </div>

                        {/* Detailed Q&A Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/5 font-mono text-xs">
                          <div>
                            <strong className="text-secondary block mb-1 uppercase text-[10px]">WHY IT MATTERED:</strong>
                            <p className="text-on-surface-variant leading-relaxed">{detail.why}</p>
                          </div>
                          <div>
                            <strong className="text-primary block mb-1 uppercase text-[10px]">LESSON LEARNED:</strong>
                            <p className="text-on-surface-variant leading-relaxed">{detail.learned}</p>
                          </div>
                        </div>
                      </div>

                      {/* Associated Media Visual */}
                      <div className="lg:col-span-4 aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-white/10 relative">
                        <ImageWithFallback
                          src={detail.image}
                          fallbackSrc={media.placeholders.project}
                          alt={m.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                          <span className="font-mono text-[9px] text-primary font-bold uppercase">
                            {detail.capability}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 3. ENGINEERING GROWTH MATRIX */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Engineering Growth Matrix">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                02 // CAPABILITY MATRIX
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Milestones-to-Capability Matrix
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilityGrowthMatrix.map((item, idx) => (
                <ScrollReveal key={idx} y={40} duration={0.8} delay={idx * 0.1}>
                  <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors flex flex-col justify-between h-full group">
                    <div>
                      <span className="font-mono text-[10px] text-secondary font-bold uppercase block mb-3">
                        [{item.domain}]
                      </span>
                      <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 group-hover:text-secondary transition-colors">
                        {item.milestone}
                      </h3>
                      <div className="p-3 rounded bg-surface/60 border border-white/5 mt-4">
                        <span className="text-on-surface-variant text-[10px] uppercase block mb-1">ENGINEERING CAPABILITY:</span>
                        <span className="text-primary font-mono text-xs font-bold">{item.capability}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CLOSING REFLECTION & CTAS */}
        <section className="text-center pt-12" aria-label="Closing Reflection">
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;The milestones themselves aren&apos;t the destination. The engineer they helped shape is.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/stage"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Continue to Stage</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              <Link
                prefetch={false}
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>Initiate Contact</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
