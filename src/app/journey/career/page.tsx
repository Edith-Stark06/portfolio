import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { experienceMilestones } from "@/data/milestones";

export const metadata: Metadata = {
  title: "Career Journey",
  description: "Chronological professional timeline of Ramana Sree K V, highlighting roles as an IBM Champion, Linux Foundation OMP Mentee, and Project Lead.",
  openGraph: {
    title: "Career Journey | Ramana Sree K V",
    description: "Professional timeline: IBM Champion 2025 & 2026, Linux Foundation OMP Mentee, L&T SDE Intern, IEEE Best Paper awardee.",
    url: "https://ramanasree.dev/journey/career",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/ibm/ibm-champion-2026.webp"],
  },
};

export default function CareerPage() {
  const capabilityGrowth = [
    { domain: "Software Engineering", desc: "Decoupled microservice architecture, Next.js, FastAPI, TypeScript, and deterministic static export design." },
    { domain: "AI & Machine Learning", desc: "PyTorch, ResNet-DeiT hybrid vision models, XGBoost, RAG pipelines, and ChromaDB vector search." },
    { domain: "Enterprise Systems", desc: "IBM Z mainframes, z/OS dataset allocation, COBOL AST parsing, and zero-downtime transaction systems." },
    { domain: "Applied Research", desc: "Neuroimaging deep learning, statistical benchmarking, SHAP model explainability, and IEEE paper authoring." },
    { domain: "Community Leadership", desc: "IBM Z Student Ambassador leadership, technical workshop facilitation, and Linux Foundation OMP mentorship." },
  ];

  const researchPipeline = [
    { step: "01", stage: "Foundational Learning", desc: "Mastering core computer science, algorithms, and distributed systems." },
    { step: "02", stage: "Problem Identification", desc: "Isolating real-world bottlenecks in legacy codebases and medical diagnostic imaging." },
    { step: "03", stage: "Empirical Research", desc: "Designing hybrid neural networks and conducting statistical ablation studies." },
    { step: "04", stage: "Peer-Reviewed Publication", desc: "Publishing camera-ready manuscripts in international IEEE conferences and white papers." },
    { step: "05", stage: "Production Software", desc: "Translating validated model architectures into enterprise deployment software." },
  ];

  const pivotalMilestones = [
    {
      title: "IBM Champion 2025 & 2026 Recognition",
      category: "GLOBAL RECOGNITION",
      what: "Honored globally as an IBM Champion for two consecutive years for exceptional advocacy and expertise in IBM Z and enterprise AI.",
      why: "Validated years of late-night open-source coding, technical blogging, and campus community leadership.",
      lesson: "Technical leadership is not about status—it is about the responsibility to empower others.",
    },
    {
      title: "IEEE DSBS 2026 Research Paper",
      category: "RESEARCH EXCELLENCE",
      what: "Authored accepted paper on Alzheimer's Disease classification using a hybrid ResNet-DeiT CNN-Transformer model (97.22% accuracy).",
      why: "Proved that pairing local convolutional feature maps with global transformer self-attention solves complex medical vision challenges.",
      lesson: "Hybrid neural architectures outperform single-backbone baselines when data complexity is high.",
    },
    {
      title: "Linux Foundation Open Mainframe Mentorship",
      category: "OPEN SOURCE",
      what: "Selected as mentee in the Linux Foundation Open Mainframe Project (OMP), contributing to open-source developer tooling.",
      why: "Connected academic AI research directly with the global open-source enterprise computing ecosystem.",
      lesson: "Open-source collaboration is the ultimate bridge between legacy infrastructure and modern cloud paradigms.",
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.enterprise}
            fallbackSrc={media.placeholders.hero}
            alt="Career Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. OPENING HERO */}
        <section className="mb-20 md:mb-[120px]" aria-label="Career Journey Hero">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              DOCUMENTARY // CAREER JOURNEY
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            Every Engineer Has a Journey. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              Mine Has Always Been Driven by Curiosity, Systems, and Continuous Learning.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-mono-label md:text-base text-on-surface-variant leading-relaxed">
                A documentary chronicle of professional evolution from discovering software fundamentals to becoming an IBM Champion, AI researcher, and enterprise software architect.
              </p>
            </div>
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/15 relative group">
              <ImageWithFallback
                src={media.profile.hero}
                fallbackSrc={media.placeholders.hero}
                alt="Ramana Sree K V Portrait"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                <span className="font-mono text-xs text-primary font-bold">
                  RAMANA SREE K V // ENTERPRISE AI ENGINEER
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ORIGINS */}
        <section className="py-20 md:py-[120px] border-y border-white/5 bg-surface-container-lowest/40 mb-20 md:mb-[140px]" aria-label="Origins">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // THE ORIGINS
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Engineering Curiosity &amp; System Complexity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                My passion for engineering was sparked by a fundamental question: How do large-scale software applications maintain absolute reliability under extreme transaction concurrency? I was drawn to computing not merely to write code, but to design software that remains bulletproof when scaled across thousands of users.
              </p>
              <p>
                This curiosity led me to explore low-level system mechanics, data structures, and enterprise mainframes. Understanding that small architectural flaws compound exponentially at scale shaped my commitment to engineering rigor and clean design patterns.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. TECHNICAL FOUNDATIONS & EDUCATION */}
        <section className="mb-24 md:mb-[160px]" aria-label="Technical Foundations">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              02 // TECHNICAL FOUNDATIONS
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Computer Science &amp; Academic Growth
            </h2>

            <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 space-y-6 font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed">
              <p>
                My formal computer science education provided rigorous grounding in Discrete Mathematics, Operating Systems, Computer Architecture, and Deep Learning algorithms. Rather than viewing coursework in isolation, I treated every lab project as an opportunity to build production-grade software artifacts.
              </p>
              <p>
                Academic research exposure introduced me to statistical hypothesis testing, model benchmarking, and paper authoring—skills that directly elevate my enterprise software engineering practice today.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. INDUSTRY EVOLUTION */}
        <section className="mb-24 md:mb-[160px]" aria-label="Industry Experience">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                03 // INDUSTRY EVOLUTION
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mt-3">
              Engineering Experience &amp; Impact
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8" role="list">
            {experienceMilestones.map((m, i) => (
              <ScrollReveal key={i} y={40} duration={0.8} delay={i * 0.1}>
                <article className="glass-panel rounded-2xl p-8 md:p-10 border border-white/10 hover:border-primary/40 transition-all duration-300" role="listitem">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-mono-label text-primary font-bold text-sm">
                      {m.year}
                    </span>
                    <span className="font-mono text-xs text-secondary font-bold uppercase px-3 py-1 rounded border border-secondary/30 bg-secondary/10">
                      {m.organization}
                    </span>
                  </div>
                  <h3 className="font-display text-headline-sm md:text-headline-md text-on-background mb-4">
                    {m.title}
                  </h3>
                  <p className="font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                    {m.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
                    <div>
                      <strong className="text-primary block mb-1 uppercase text-[10px]">CHALLENGE:</strong>
                      <p className="text-on-surface-variant leading-relaxed">Handling complex enterprise logic under strict performance constraints.</p>
                    </div>
                    <div>
                      <strong className="text-secondary block mb-1 uppercase text-[10px]">LESSON:</strong>
                      <p className="text-on-surface-variant leading-relaxed">High-performance software requires modular microservices and clean API boundaries.</p>
                    </div>
                    <div>
                      <strong className="text-on-surface block mb-1 uppercase text-[10px]">IMPACT:</strong>
                      <p className="text-on-surface-variant leading-relaxed">Delivered deterministic, production-ready software deployments.</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. RESEARCH EVOLUTION */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Research Evolution">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                04 // RESEARCH EVOLUTION
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                How Research Shaped My Engineering
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {researchPipeline.map((rp) => (
                <div key={rp.step} className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-colors">
                  <div>
                    <span className="font-mono text-xs text-secondary font-bold block mb-2">[{rp.step}]</span>
                    <h3 className="font-display text-body-md text-on-background font-bold mb-2">{rp.stage}</h3>
                  </div>
                  <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">{rp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CAPABILITY EVOLUTION */}
        <section className="mb-24 md:mb-[160px]" aria-label="Skills & Capability Growth">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              05 // CAPABILITY EVOLUTION
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Engineering Capability Progression
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilityGrowth.map((cap, idx) => (
              <ScrollReveal key={cap.domain} y={40} duration={0.8} delay={idx * 0.1}>
                <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-colors h-full flex flex-col justify-between group">
                  <div>
                    <span className="font-mono text-xs text-primary font-bold uppercase block mb-3">DOMAIN 0{idx + 1}</span>
                    <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 group-hover:text-primary transition-colors">{cap.domain}</h3>
                    <p className="font-mono text-xs text-on-surface-variant leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 7. PIVOTAL MILESTONES */}
        <section className="mb-24 md:mb-[160px]" aria-label="Pivotal Milestones">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              06 // PIVOTAL MILESTONES
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Moments That Shaped Me
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {pivotalMilestones.map((pm, idx) => (
              <ScrollReveal key={pm.title} y={40} duration={0.8} delay={idx * 0.1}>
                <article className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-secondary/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs text-secondary font-bold uppercase">{pm.category}</span>
                  </div>
                  <h3 className="font-display text-headline-sm md:text-headline-md text-on-background font-bold mb-4">{pm.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5 font-mono text-xs">
                    <div>
                      <strong className="text-primary block mb-1 uppercase text-[10px]">WHAT HAPPENED:</strong>
                      <p className="text-on-surface-variant leading-relaxed">{pm.what}</p>
                    </div>
                    <div>
                      <strong className="text-secondary block mb-1 uppercase text-[10px]">WHY IT MATTERED:</strong>
                      <p className="text-on-surface-variant leading-relaxed">{pm.why}</p>
                    </div>
                    <div>
                      <strong className="text-on-surface block mb-1 uppercase text-[10px]">LESSON LEARNED:</strong>
                      <p className="text-on-surface-variant leading-relaxed">{pm.lesson}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 8. CURRENT FOCUS */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/40" aria-label="Current Focus">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              07 // CURRENT DIRECTION
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-8">
              What I Am Focused On Today
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-display text-headline-sm text-primary font-bold mb-2">Enterprise AI &amp; Modernization</h3>
                <p className="text-on-surface-variant leading-relaxed">Building AST-grounded RAG platforms and machine learning pipelines to accelerate legacy COBOL codebase refactoring.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-display text-headline-sm text-secondary font-bold mb-2">Multimodal Healthcare AI</h3>
                <p className="text-on-surface-variant leading-relaxed">Refining ResNet-DeiT hybrid vision models for early neuroimaging dementia detection and interpretable clinical decision support.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 9. WHAT'S NEXT (ROADMAP) */}
        <section className="mb-24 md:mb-[160px]" aria-label="Professional Roadmap">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              08 // THE ROAD AHEAD
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Professional Engineering Roadmap
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { time: "NEAR-TERM", goal: "Open Source Expansion", desc: "Publishing open-source developer tooling with Linux Foundation OMP and authoring research on agentic LLM refactoring." },
              { time: "MID-TERM", goal: "Enterprise System Leadership", desc: "Leading end-to-end AI architectural deployments for mission-critical transaction and healthcare infrastructure." },
              { time: "LONG-TERM", goal: "Global Research Impact", desc: "Driving global research initiatives in responsible AI, federated edge learning, and mainframe modernization." },
            ].map((rm) => (
              <div key={rm.time} className="glass-panel p-8 rounded-xl border border-white/10">
                <span className="font-mono text-[10px] text-secondary font-bold uppercase block mb-2">{rm.time}</span>
                <h3 className="font-display text-headline-sm text-on-background font-bold mb-3">{rm.goal}</h3>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">{rm.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. CLOSING REFLECTION & CTAS */}
        <section className="text-center pt-12" aria-label="Closing Reflection">
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;The journey isn&apos;t measured by titles. It&apos;s measured by the problems we choose to solve and the people we help along the way.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/milestones"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Explore Milestones</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              <Link
                prefetch={false}
                href="/stage"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>Explore Stage</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
