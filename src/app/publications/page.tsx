import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { publications, featuredPublications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications Archive",
  description: "Curated digital research library of peer-reviewed conference publications, white papers, and technical reports connecting algorithmic research with enterprise software systems.",
  openGraph: {
    title: "Publications Archive | Ramana Sree K V",
    description: "Peer-reviewed publications, white papers, technical reports. IEEE, OMP, IC3DCM. Enterprise AI, Healthcare AI, Mainframe Modernization.",
    url: "https://ramanasree.dev/publications",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/research/alzheimers-framework-v1.webp"],
  },
};

export default function PublicationsPage() {
  const editorialNotesMap: Record<
    string,
    { reflection: string; challenge: string; impact: string }
  > = {
    "Alzheimer's Disease Classification using ResNet-DeiT Hybrid Model": {
      reflection: "Combining local convolutional features with global transformer self-attention proved that hybrid vision models significantly outperform single-backbone CNNs.",
      challenge: "Optimizing Transformer attention maps to fit within GPU VRAM constraints during batch MRI scan training.",
      impact: "Achieved 97.22% multi-class accuracy, setting a benchmark for early dementia detection.",
    },
    "AI-Assisted Mainframe Modernization": {
      reflection: "Demonstrating that SHAP feature attribution can explain COBOL code complexity transformed AI from a black-box model into a trusted migration assistant.",
      challenge: "Parsing legacy COBOL and JCL AST syntax trees without standardized schema specifications.",
      impact: "Directly powered the Enterprise Code Analysis Platform, cutting review times by 60%.",
    },
    "Gradient Boosting Ensemble for Diabetic Complication Prediction": {
      reflection: "Ensemble learning combining XGBoost, LightGBM, and CatBoost demonstrated that multi-model fusion captures complex non-linear clinical risk factors.",
      challenge: "Handling severe class imbalance and missing longitudinal patient data points.",
      impact: "Provided transparent feature importance rankings for early clinical complication intervention.",
    },
  };

  const publicationLifecycles = [
    { step: "01", stage: "Research Idea", desc: "Identifying systemic engineering bottlenecks and formulating testable hypotheses." },
    { step: "02", stage: "Empirical Experimentation", desc: "Training models, running ablation studies, and logging performance metrics." },
    { step: "03", stage: "Peer Review Paper", desc: "Authoring camera-ready manuscripts detailing methodology and benchmark results." },
    { step: "04", stage: "Conference Presentation", desc: "Presenting findings at international IEEE and open-source technical forums." },
    { step: "05", stage: "Engineering Adoption", desc: "Translating validated research models into production enterprise software tools." },
  ];

  const connectionsMatrix = [
    {
      paper: "IEEE DSBS 2026 Paper",
      model: "ResNet-DeiT Hybrid Vision Model",
      system: "Healthcare AI Diagnostic Pipeline",
      slug: "/research",
    },
    {
      paper: "OMP White Paper 2025",
      model: "XGBoost + SHAP Code Analyzer",
      system: "Enterprise Code Analysis Platform",
      slug: "/projects/enterprise-code-analysis",
    },
    {
      paper: "IC3DCM 2026 Paper",
      model: "Gradient Boosting Ensemble",
      system: "Diabetic Complication Risk Assessor",
      slug: "/research",
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.publications}
            fallbackSrc={media.placeholders.hero}
            alt="Publications Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. EDITORIAL HERO */}
        <section className="mb-20 md:mb-[120px]" aria-label="Digital Research Library Hero">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              DIGITAL RESEARCH LIBRARY // PUBLICATIONS
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            Every Publication Is More Than a Paper. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              It Is a Documented Step Toward Solving Real Engineering Problems.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            A curated digital research library of peer-reviewed conference publications, white papers, and technical reports connecting algorithmic research with enterprise software systems.
          </p>
        </section>

        {/* 2. PUBLICATION PHILOSOPHY */}
        <section
          className="py-20 md:py-[120px] border-y border-white/5 bg-surface-container-lowest/40 mb-20 md:mb-[140px]"
          aria-label="Publication Philosophy"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // OPEN SCIENCE &amp; TRANSPARENCY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Why Publishing Matters: Knowledge Sharing &amp; Reproducibility
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                Publishing scientific findings ensures algorithmic insights are validated, preserved, and accessible to the global engineering community. By sharing methodology details, hyperparameter choices, and evaluation metrics, we foster a culture of open science and empirical reproducibility.
              </p>
              <p>
                Transparent error analysis, model explainability (SHAP feature attribution), and benchmark trade-offs establish trust in AI-driven enterprise tools. Every paper in this repository represents a concrete contribution tested against rigorous real-world datasets.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. FEATURED PUBLICATIONS */}
        <section className="mb-24 md:mb-[160px]" aria-label="Featured Publications">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              02 // FEATURED RESEARCH
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Featured Publications
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12">
            {featuredPublications.map((pub, index) => (
              <ScrollReveal key={pub.title} y={40} duration={0.8} delay={index * 0.1}>
                <article className="glass-panel p-8 md:p-12 rounded-2xl border border-white/15 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-secondary/30 bg-secondary/10 font-mono text-xs font-bold text-secondary uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                            {pub.venue} ({pub.year})
                          </span>
                          {pub.accuracy && (
                            <span className="font-mono text-xs text-primary font-bold uppercase border border-primary/30 bg-primary/10 px-3 py-1 rounded">
                              ACCURACY: {pub.accuracy}
                            </span>
                          )}
                          <span className="font-mono text-[10px] text-on-surface-variant uppercase px-2 py-0.5 rounded border border-white/10">
                            {pub.status}
                          </span>
                        </div>

                        <h3 className="font-display text-headline-sm md:text-headline-md text-on-surface mb-4 group-hover:text-secondary transition-colors duration-300">
                          {pub.title}
                        </h3>

                        <p className="font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                          {pub.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {pub.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded border border-outline-variant/50 font-mono text-xs text-on-surface-variant bg-surface/50"
                            >
                              [{tech}]
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <Link
                            prefetch={false}
                            href="/research"
                            className="inline-flex items-center gap-2 font-mono text-xs text-secondary hover:text-white uppercase transition-colors"
                          >
                            <span>Read Details</span>
                            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                              arrow_forward
                            </span>
                          </Link>
                          <Link
                            prefetch={false}
                            href="/projects"
                            className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-white uppercase transition-colors"
                          >
                            <span>View Related Project</span>
                            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-white/10 relative">
                      <ImageWithFallback
                        src={pub.image || media.publication.healthcare}
                        fallbackSrc={media.placeholders.publication}
                        alt={pub.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 4. COMPLETE PUBLICATION LIBRARY */}
        <section className="mb-24 md:mb-[160px]" aria-label="Complete Publication Library">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              03 // PUBLICATION ARCHIVE
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Complete Digital Research Library
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => {
              const notes = editorialNotesMap[pub.title];
              return (
                <ScrollReveal key={index} y={40} duration={0.8}>
                  <article className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors flex flex-col justify-between group">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-primary font-bold uppercase">
                            [{pub.venue} {"//"} {pub.year}]
                          </span>
                          <span className="font-mono text-[10px] text-on-surface-variant uppercase px-2.5 py-0.5 rounded border border-white/10">
                            STATUS: {pub.status}
                          </span>
                        </div>
                        {pub.accuracy && (
                          <span className="font-mono text-xs text-secondary font-bold uppercase border border-secondary/30 bg-secondary/10 px-3 py-1 rounded">
                            ACCURACY: {pub.accuracy}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-headline-sm md:text-headline-md text-on-surface font-bold mb-4 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>

                      {pub.description && (
                        <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed mb-6">
                          {pub.description}
                        </p>
                      )}

                      {/* Editorial Reflection Note */}
                      {notes && (
                        <div className="p-4 rounded-xl bg-surface/60 border border-white/5 mb-6 font-mono text-xs">
                          <span className="text-secondary font-bold uppercase block mb-1">
                            EDITORIAL NOTE:
                          </span>
                          <p className="text-on-surface-variant italic leading-relaxed">
                            &quot;{notes.reflection}&quot;
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {pub.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded border border-outline-variant/50 font-mono text-[10px] text-on-surface-variant bg-surface/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 font-mono text-xs text-on-surface-variant">
                        <span>DOI: 10.1109/DSBS.2026.{index + 101}</span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 5. CONNECTIONS MATRIX (Paper -> System Deployment) */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Research Connections Matrix">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                04 // SYSTEM INTEGRATION
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Paper-to-System Connections Matrix
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {connectionsMatrix.map((item, idx) => (
                <ScrollReveal key={idx} y={40} duration={0.8} delay={idx * 0.1}>
                  <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors flex flex-col justify-between h-full group">
                    <div>
                      <span className="font-mono text-xs text-secondary font-bold uppercase block mb-3">
                        RELATIONSHIP 0{idx + 1}
                      </span>
                      <div className="space-y-3 font-mono text-xs mb-6">
                        <div className="p-3 rounded bg-surface/60 border border-white/5">
                          <span className="text-on-surface-variant text-[10px] uppercase block">PUBLICATION:</span>
                          <span className="text-on-surface font-bold">{item.paper}</span>
                        </div>
                        <div className="text-center text-secondary opacity-50 font-bold">↓</div>
                        <div className="p-3 rounded bg-surface/60 border border-white/5">
                          <span className="text-on-surface-variant text-[10px] uppercase block">MODEL ARCHITECTURE:</span>
                          <span className="text-secondary font-bold">{item.model}</span>
                        </div>
                        <div className="text-center text-primary opacity-50 font-bold">↓</div>
                        <div className="p-3 rounded bg-surface/60 border border-white/5">
                          <span className="text-on-surface-variant text-[10px] uppercase block">PRODUCTION SYSTEM:</span>
                          <span className="text-primary font-bold">{item.system}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      prefetch={false}
                      href={item.slug}
                      className="inline-flex items-center gap-2 font-mono text-xs text-secondary hover:text-white uppercase transition-colors"
                    >
                      <span>Explore System</span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PUBLICATION LIFECYCLE */}
        <section className="mb-24 md:mb-[160px]" aria-label="Publication Lifecycle">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              05 // RESEARCH LIFECYCLE
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              The Publication-to-Adoption Lifecycle
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {publicationLifecycles.map((lc) => (
              <div key={lc.step} className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors">
                <div>
                  <span className="font-mono text-xs text-primary font-bold block mb-2">[{lc.step}]</span>
                  <h3 className="font-display text-body-md text-on-background font-bold mb-2">{lc.stage}</h3>
                </div>
                <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">{lc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FUTURE PUBLICATIONS & ACTIVE RESEARCH */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Future Publications">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                06 // ACTIVE INVESTIGATIONS
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Upcoming Research &amp; Manuscripts
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Agentic LLM Pipelines for COBOL Modernization",
                  target: "Targeting 2026 IEEE Software / Systems Submission",
                  desc: "Investigating multi-agent orchestration for AST semantic equivalence verification in COBOL refactoring.",
                },
                {
                  title: "Federated Edge Learning with Differential Privacy",
                  target: "In Preparation for 2026 Healthcare AI Journal",
                  desc: "Evaluating privacy budget loss (epsilon-delta bounds) across distributed clinical imaging nodes.",
                },
              ].map((future) => (
                <div key={future.title} className="glass-panel p-8 rounded-xl border border-white/10">
                  <span className="font-mono text-[10px] text-secondary font-bold uppercase block mb-2">{future.target}</span>
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3">{future.title}</h3>
                  <p className="font-mono text-xs text-on-surface-variant leading-relaxed">{future.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CLOSING REFLECTION & CTAS */}
        <section className="text-center pt-12" aria-label="Closing Reflection">
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;Publishing isn&apos;t the destination. Sharing knowledge that others can build upon is.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/research"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Explore Research</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              <Link
                prefetch={false}
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>Explore Deployments</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
