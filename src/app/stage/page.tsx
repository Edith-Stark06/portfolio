import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Speaking & Advocacy",
  description: "Explore Ramana Sree K V's speaking engagements, panel presentations, and developer workshops at events like IBM TechXchange and IBM Z Day.",
  openGraph: {
    title: "Speaking & Advocacy | Ramana Sree K V",
    description: "Speaking engagements, panel presentations, and developer workshops: IBM TechXchange 2025, IBM Z Day, student ambassador summits.",
    url: "https://ramanasree.dev/stage",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/ibm/ibm-techxchange-panel-2025.webp"],
  },
};

export default function StagePage() {
  const speakingMoments = [
    {
      title: "IBM TechXchange 2025 Panel",
      venue: "Global Developer Conference",
      audience: "Enterprise Architects & AI Engineers",
      topic: "AI-Assisted Mainframe Modernization & Legacy Refactoring",
      insight: "Combining large language models with AST syntax tree extraction enables deterministic, verifiable code refactoring without compromising legacy business logic.",
      gain: "Practical patterns for integrating AI microservices into enterprise mainframe codebases.",
      image: media.ibm.techxchange,
      badge: "KEYNOTE PANELIST",
    },
    {
      title: "IBM Z Day & Student Ambassador Summit",
      venue: "Global Developer Summit",
      audience: "Student Developers & Tech Advocates",
      topic: "Modernizing Enterprise Applications on IBM Z",
      insight: "Mainframes execute over 70% of global transaction volume; mastering IBM Z architecture is one of the highest-impact career paths in enterprise software.",
      gain: "Hands-on roadmap for IBM Z Xplore learning paths and community leadership.",
      image: media.ibm.superstar,
      badge: "AMBASSADOR SPEAKER",
    },
    {
      title: "IEEE Conference Research Presentation",
      venue: "IEEE International Conference",
      audience: "AI Researchers & Medical Imaging Engineers",
      topic: "ResNet-DeiT Hybrid Neural Networks for Early Alzheimer's Diagnosis",
      insight: "Hybrid vision architectures pairing local CNN spatial features with global Transformer self-attention achieve 97.22% multi-class MRI accuracy.",
      gain: "Reproducible model architecture specs for neuroimaging deep learning pipelines.",
      image: media.publication.healthcare,
      badge: "RESEARCH PRESENTATION",
    },
  ];

  const talkTopics = [
    {
      title: "Enterprise AI & RAG Architectures",
      desc: "FastAPI, ChromaDB vector search, AST-grounded retrieval, and LLM orchestration for enterprise codebases.",
    },
    {
      title: "IBM Z & Mainframe Modernization",
      desc: "z/OS dataset management, JCL batch processing, COBOL AST parsing, and zero-downtime transaction systems.",
    },
    {
      title: "Healthcare AI & Vision Transformers",
      desc: "ResNet-DeiT hybrid neural networks, medical MRI classification, and SHAP feature explainability.",
    },
    {
      title: "Open Source Systems Engineering",
      desc: "Linux Foundation Open Mainframe Project developer tooling, community building, and technical advocacy.",
    },
  ];

  const prepSteps = [
    { step: "01", phase: "Empirical Research", desc: "Benchmarking baseline algorithms and verifying code metrics against real datasets." },
    { step: "02", phase: "Diagram Architecture", desc: "Structuring clear visual topology diagrams that distill complex system workflows." },
    { step: "03", phase: "Live Code Demos", desc: "Building reproducible, open-source demonstration repositories for attendees." },
    { step: "04", phase: "Interactive Q&A", desc: "Engaging audience questions to address real-world enterprise deployment edge cases." },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.gallery}
            fallbackSrc={media.placeholders.hero}
            alt="Stage Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. EDITORIAL HERO */}
        <section className="mb-20 md:mb-[120px]" aria-label="Knowledge Shared Hero">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,183,195,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-secondary tracking-widest text-[11px] font-semibold">
              DOCUMENTARY // KNOWLEDGE SHARED
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            Engineering Grows When <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-secondary">
              Knowledge Is Shared.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed mb-12">
            Demystifying enterprise mainframes, AI microservices, and applied research through technical keynotes, workshops, and community mentorship.
          </p>

          {/* Large Hero Stage Visual */}
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden glass-panel border border-white/15 relative group">
            <ImageWithFallback
              src={media.ibm.techxchange}
              fallbackSrc={media.placeholders.hero}
              alt="IBM TechXchange Speaker Panel"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <span className="font-mono text-xs text-secondary font-bold">
                IBM TECHXCHANGE // ENTERPRISE AI PANEL
              </span>
            </div>
          </div>
        </section>

        {/* 2. SPEAKING PHILOSOPHY */}
        <section className="py-20 md:py-[120px] border-y border-white/5 bg-surface-container-lowest/40 mb-20 md:mb-[140px]" aria-label="Speaking Philosophy">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                01 // ADVOCACY PHILOSOPHY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Technical Communication as an Engineering Discipline
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                I view the stage not as a platform for self-promotion, but as an opportunity to demystify complex enterprise systems, spark curiosity, and empower fellow developers to build for enterprise scale. Technical communication bridges architectural theory with practical developer implementation.
              </p>
              <p>
                Whether presenting at global developer summits or leading hands-on student workshops, the goal is always clear: deliver actionable, reproducible insights that enable engineers to solve real-world problems.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. FEATURED SPEAKING MOMENTS */}
        <section className="mb-24 md:mb-[160px]" aria-label="Featured Speaking Moments">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              02 // FEATURED EVENTS
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Keynotes &amp; Technical Panel Sessions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12">
            {speakingMoments.map((event, idx) => (
              <ScrollReveal key={event.title} y={40} duration={0.8} delay={idx * 0.1}>
                <article className="glass-panel p-8 md:p-12 rounded-2xl border border-white/15 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded border border-secondary/30 bg-secondary/10 font-mono text-xs font-bold text-secondary uppercase">
                            {event.badge}
                          </span>
                          <span className="font-mono text-xs text-on-surface-variant">
                            {event.venue}
                          </span>
                        </div>

                        <h3 className="font-display text-headline-sm md:text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                          {event.title}
                        </h3>

                        <p className="font-mono text-xs text-primary font-bold uppercase mb-4">
                          TOPIC: {event.topic}
                        </p>

                        <div className="space-y-3 font-mono text-xs text-on-surface-variant leading-relaxed mb-6">
                          <p><strong className="text-on-surface">Audience:</strong> {event.audience}</p>
                          <p><strong className="text-on-surface">Key Insight:</strong> &quot;{event.insight}&quot;</p>
                          <p><strong className="text-on-surface">Attendee Value:</strong> {event.gain}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-white/10 relative">
                      <ImageWithFallback
                        src={event.image}
                        fallbackSrc={media.placeholders.hero}
                        alt={event.title}
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

        {/* 4. WORKSHOPS & MENTORSHIP */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Workshops & Mentorship">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              03 // COMMUNITY MENTORSHIP
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-8">
              Workshops &amp; Developer Empowerment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-display text-headline-sm text-secondary font-bold mb-2">IBM Z Student Society India</h3>
                <p className="text-on-surface-variant leading-relaxed">Founded and organized campus workshops onboarding 500+ student developers to IBM Z Xplore, JCL dataset management, and mainframe modernization.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-display text-headline-sm text-primary font-bold mb-2">Linux Foundation OMP Onboarding</h3>
                <p className="text-on-surface-variant leading-relaxed">Mentoring student developers entering open-source systems engineering, bridging legacy enterprise codebases with cloud-native microservices.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 5. TOPICS I SPEAK ABOUT */}
        <section className="mb-24 md:mb-[160px]" aria-label="Talk Topics">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              04 // TALK TOPICS
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Core Technical Subjects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talkTopics.map((topic) => (
              <div key={topic.title} className="glass-panel p-8 rounded-xl border border-white/10">
                <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 text-secondary">
                  {topic.title}
                </h3>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMMUNITY IMPACT */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/40" aria-label="Community Impact">
          <ScrollReveal y={40} duration={0.8} className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Students Onboarded", detail: "Mainframe & AI engineering workshops" },
                { value: "2x", label: "IBM Champion", detail: "Global technical advocacy recognition" },
                { value: "01", label: "Developer Society", detail: "Founded IBM Z Student Society India" },
              ].map((stat, i) => (
                <div key={i} className="glass-panel p-8 rounded-xl border border-white/10 text-center">
                  <div className="font-display text-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-on-background to-secondary mb-2">
                    {stat.value}
                  </div>
                  <h3 className="font-mono text-xs font-bold text-on-background uppercase">{stat.label}</h3>
                  <p className="font-mono text-[11px] text-on-surface-variant mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 7. BEHIND THE SCENES */}
        <section className="mb-24 md:mb-[160px]" aria-label="Behind the Scenes">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              05 // PREPARATION PIPELINE
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Behind the Scenes: Keynote Preparation Workflow
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {prepSteps.map((ps) => (
              <div key={ps.step} className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-colors">
                <div>
                  <span className="font-mono text-xs text-secondary font-bold block mb-2">[{ps.step}]</span>
                  <h3 className="font-display text-body-md text-on-background font-bold mb-2">{ps.phase}</h3>
                </div>
                <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">{ps.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FUTURE SPEAKING VISION */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Future Speaking Vision">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
              06 // THE ROAD AHEAD
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-6">
              Future Speaking &amp; Advocacy Goals
            </h2>
            <p className="font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed">
              Expanding advocacy efforts with the Linux Foundation Open Mainframe Project, authoring technical keynotes on agentic LLM refactoring, and delivering research presentations at global IEEE conferences.
            </p>
          </ScrollReveal>
        </section>

        {/* 9. CLOSING REFLECTION & CTAS */}
        <section className="text-center pt-12" aria-label="Closing Reflection">
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;Knowledge grows when it is shared.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Initiate Contact</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
