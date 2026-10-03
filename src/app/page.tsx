import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BentoCard from "@/components/ui/BentoCard";
import ShaderBackground from "@/components/effects/ShaderBackground";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Enterprise AI & Automation Engineer | Ramana Sree K V",
  description: "IBM Champion 2025 & 2026, IEEE Best Paper awardee. Applying analytical thinking, automated code parsing, and modern AI architectures to solve high-stakes enterprise data challenges.",
  openGraph: {
    title: "Ramana Sree K V | Enterprise AI & Automation Engineer",
    description: "IBM Champion 2025 & 2026, IEEE Best Paper awardee. Enterprise AI, Mainframe Modernization, Applied Research.",
    url: "https://ramanasree.dev",
    siteName: "AETHER_ENG",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-background-v1.webp",
        width: 1920,
        height: 1080,
        alt: "Enterprise AI Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramana Sree K V | Enterprise AI & Automation Engineer",
    description: "IBM Champion 2025 & 2026, IEEE Best Paper awardee. Enterprise AI, Mainframe Modernization, Applied Research.",
    creator: "@ramanasreekv",
    images: ["/images/hero/hero-background-v1.webp"],
  },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredResearch = publications.filter((p) => p.featured).slice(0, 2);

  const principles = [
    {
      code: "PRN: 01",
      title: "Build for Scale",
      description: "Deterministic architectures engineered for high-throughput enterprise workloads and heavy data processing.",
      icon: "memory",
    },
    {
      code: "PRN: 02",
      title: "Design for Humans",
      description: "Translating complex AI outputs and mainframe code logic into intuitive, actionable developer tooling.",
      icon: "person",
    },
    {
      code: "PRN: 03",
      title: "Measure Everything",
      description: "Grounding development in empirical benchmarks, quantitative performance metrics, and rigorous test suites.",
      icon: "analytics",
    },
    {
      code: "PRN: 04",
      title: "Security by Design",
      description: "Enforcing zero-trust pipeline validation, data privacy compliance, and resilient system boundaries.",
      icon: "verified_user",
    },
    {
      code: "PRN: 05",
      title: "Research Driven",
      description: "Connecting novel peer-reviewed deep learning methodologies with real-world enterprise software engineering.",
      icon: "science",
    },
    {
      code: "PRN: 06",
      title: "Elegant Simplicity",
      description: "Eliminating legacy complexity through automated code parsing, clean abstractions, and modular systems.",
      icon: "auto_awesome",
    },
  ];

  const ibmStoryNodes = [
    {
      stage: "01 / FOUNDATION",
      title: "Z Xplore Mastery",
      description: "Demonstrated early technical command over IBM Z mainframes, COBOL, JCL, and z/OS enterprise environments.",
      badge: "Core Mastery",
    },
    {
      stage: "02 / LEADERSHIP",
      title: "Z Superstar Ambassador",
      description: "Led regional student developer advocacy, organizing enterprise technical workshops and mainframe training.",
      badge: "Ambassador",
    },
    {
      stage: "03 / RECOGNITION",
      title: "IBM Champion '25 & '26",
      description: "Awarded global IBM Champion recognition for exceptional technical advocacy, AI integration, and community impact.",
      badge: "Global Champion",
    },
    {
      stage: "04 / ADVOCACY",
      title: "Speaker & Mentor",
      description: "Panellist at IBM TechXchange and Open Mainframe Project mentee advancing open-source enterprise AI tools.",
      badge: "Technical Leader",
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto overflow-hidden">
        {/* 1. HERO SECTION */}
        <section
          className="relative min-h-screen flex flex-col justify-center px-5 md:px-[80px] pt-32 pb-16 overflow-hidden"
          aria-label="Hero"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute inset-0 z-0 opacity-40">
              <ShaderBackground className="w-full h-full" />
            </div>
            <div className="absolute inset-0 z-10 opacity-45">
              <ImageWithFallback
                src={media.hero.background}
                fallbackSrc={media.placeholders.hero}
                alt="Hero Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden="true" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto w-full">
            {/* Main Text Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,183,195,0.8)]" aria-hidden="true" />
                <span className="font-mono text-mono-label uppercase text-secondary tracking-widest text-[11px] font-semibold">
                  IBM CHAMPION 2025 &amp; 2026
                </span>
              </div>

              <h1 className="font-display text-display-hero-mobile md:text-display-hero text-on-background tracking-tight font-extrabold">
                Enterprise AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-secondary">
                  &amp; Automation
                </span>
              </h1>

              <p className="mt-8 max-w-2xl font-mono text-mono-label md:text-sm text-on-surface-variant leading-relaxed">
                Applying analytical thinking, automated code parsing, and modern AI architectures to solve high-stakes enterprise data challenges.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 glass-panel text-on-surface">
                  IBM Champion
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 glass-panel text-on-surface">
                  AI Researcher
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 glass-panel text-on-surface">
                  Systems Architect
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10">
                <Link
                  prefetch={false}
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span>Explore Deployments</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  prefetch={false}
                  href="/architect"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span>System Specs</span>
                </Link>
              </div>
            </div>

            {/* Profile Hero Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl glass-panel-gradient overflow-hidden border border-white/15 shadow-2xl group">
                <ImageWithFallback
                  src={media.profile.hero}
                  fallbackSrc={media.placeholders.profile}
                  alt="Ramana Sree K V - Enterprise AI Engineer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                  <div>
                    <h3 className="font-display text-headline-sm text-on-background font-bold">
                      Ramana Sree K V
                    </h3>
                    <p className="font-mono text-[11px] text-secondary tracking-widest uppercase mt-0.5">
                      Systems Architect
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(0,183,195,0.9)] animate-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-5 md:left-[80px] flex flex-col items-center animate-reveal delay-3"
            aria-hidden="true"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary-container to-transparent opacity-50 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary scroll-dot shadow-[0_0_10px_rgba(75,217,229,0.8)]" />
            </div>
            <span className="font-mono text-on-surface-variant mt-3 opacity-50 tracking-widest text-[10px]">
              SCROLL
            </span>
          </div>
        </section>

        {/* 2. MISSION STATEMENT SECTION */}
        <section
          className="relative py-24 md:py-[140px] px-5 md:px-[80px] border-y border-white/5 bg-surface-container-lowest/40"
          aria-label="Mission"
        >
          <ScrollReveal y={30} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // MISSION STATEMENT
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-headline-md md:text-headline-lg text-on-background mb-8 leading-snug">
              Bridging the Gap Between Legacy Enterprise Infrastructure and Modern Agentic AI.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                I specialize in solving high-stakes enterprise data challenges where performance, accuracy, and predictability are mandatory. My focus centers on automating complex source code analysis, dependency mapping, and modern AI workflows for critical mainframe and cloud architectures.
              </p>
              <p>
                Through peer-reviewed deep learning research in healthcare AI and open-source contributions with the Linux Foundation Open Mainframe Project, I build resilient, deterministic tools designed for enterprise scale and long-term maintainability.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. IMPACT METRICS SECTION */}
        <section
          className="relative py-20 px-5 md:px-[80px] border-b border-white/5"
          aria-label="Impact Metrics"
        >
          <ScrollReveal y={30} duration={0.8} className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "2x", label: "IBM Champion", detail: "2025 & 2026 Global Recognition" },
                { value: "03+", label: "Peer-Reviewed Papers", detail: "IEEE & Conference Publications" },
                { value: "08", label: "Engineering Projects", detail: "Mainframe, EcoTrace, Solar, ATLAS & more" },
                { value: "01", label: "IEEE Best Paper", detail: "DSBS 2026 Award Winner" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-colors duration-300 group"
                >
                  <div className="font-display text-[40px] md:text-[56px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-on-background to-secondary mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {metric.value}
                  </div>
                  <div>
                    <h3 className="font-mono text-mono-label text-on-background font-bold uppercase tracking-wider text-xs md:text-sm">
                      {metric.label}
                    </h3>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 4. FEATURED PROJECTS SECTION */}
        <section
          className="relative py-24 md:py-[160px] px-5 md:px-[80px] border-b border-white/5"
          id="work"
          aria-label="Featured Deployments"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={30} duration={0.8} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                  02 // FEATURED DEPLOYMENTS
                </span>
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                  Engineered Case Studies
                </h2>
              </div>
              <Link
                prefetch={false}
                href="/projects"
                className="inline-flex items-center gap-2 font-mono text-mono-label text-secondary hover:text-white transition-colors tracking-wider uppercase text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
              >
                <span>View All Deployments</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal stagger={0.12} y={50}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {featuredProjects.map((project) => (
                  <BentoCard key={project.slug} project={project} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 5. RESEARCH HIGHLIGHTS SECTION */}
        <section
          className="relative py-24 md:py-[160px] px-5 md:px-[80px] border-b border-white/5 bg-surface-container-lowest/30"
          aria-label="Research Highlights"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={30} duration={0.8} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                  03 // APPLIED AI RESEARCH
                </span>
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                  Peer-Reviewed Publications
                </h2>
              </div>
              <Link
                prefetch={false}
                href="/research"
                className="inline-flex items-center gap-2 font-mono text-mono-label text-secondary hover:text-white transition-colors tracking-wider uppercase text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
              >
                <span>Explore Full Research Archive</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {featuredResearch.map((pub, idx) => (
                <ScrollReveal
                  key={pub.title}
                  y={40}
                  duration={0.8}
                  className={idx === 0 ? "md:col-span-12" : "md:col-span-6"}
                >
                  <article className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 font-mono text-[11px] text-secondary uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                          {pub.venue}
                        </span>
                        {pub.accuracy && (
                          <span className="font-mono text-mono-label text-primary font-bold text-xs">
                            Accuracy: {pub.accuracy}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-headline-sm md:text-headline-md text-on-background mb-4 group-hover:text-secondary transition-colors duration-300">
                        {pub.title}
                      </h3>

                      <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed mb-8">
                        {pub.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {pub.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded border border-outline-variant/50 font-mono text-[10px] text-on-surface-variant uppercase bg-surface/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        prefetch={false}
                        href="/research"
                        className="inline-flex items-center gap-2 font-mono text-mono-label text-on-surface hover:text-secondary transition-colors text-xs uppercase"
                      >
                        <span>View Publication</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. IBM JOURNEY PREVIEW SECTION */}
        <section
          className="relative py-24 md:py-[160px] px-5 md:px-[80px] border-b border-white/5"
          aria-label="IBM Journey Preview"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={30} duration={0.8} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                  04 // IBM Z &amp; GLOBAL RECOGNITION
                </span>
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                  The IBM Journey
                </h2>
              </div>
              <Link
                prefetch={false}
                href="/journey/ibm"
                className="inline-flex items-center gap-2 font-mono text-mono-label text-secondary hover:text-white transition-colors tracking-wider uppercase text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
              >
                <span>Explore Full IBM Journey</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ibmStoryNodes.map((node, i) => (
                <ScrollReveal key={node.stage} y={40} duration={0.8} delay={i * 0.1}>
                  <div className="glass-panel p-6 md:p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                          {node.stage}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-primary/30 text-primary uppercase">
                          {node.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-headline-sm text-on-background mb-3 group-hover:text-primary transition-colors">
                        {node.title}
                      </h3>
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. ENGINEERING PHILOSOPHY PRINCIPLES SECTION */}
        <section
          className="relative py-24 md:py-[160px] px-5 md:px-[80px] border-b border-white/5 bg-surface-container-lowest/30"
          aria-label="Engineering Principles"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={30} duration={0.8} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                05 // CORE PRINCIPLES
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Engineering Philosophy
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p, i) => (
                <ScrollReveal key={p.code} y={40} duration={0.8} delay={i * 0.08}>
                  <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-mono-label text-on-surface-variant text-xs uppercase">
                          [ {p.code} ]
                        </span>
                        <span className="material-symbols-outlined text-secondary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" aria-hidden="true">
                          {p.icon}
                        </span>
                      </div>
                      <h3 className="font-display text-headline-sm text-on-background mb-3 group-hover:text-secondary transition-colors">
                        {p.title}
                      </h3>
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CALL TO ACTION SECTION */}
        <section
          className="relative py-28 md:py-[180px] px-5 md:px-[80px] text-center"
          aria-label="Initiate Sequence CTA"
        >
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] mb-4">
              06 // INITIATE SEQUENCE
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-[72px] md:leading-[80px] text-on-background font-extrabold mb-8 tracking-tight">
              Let&apos;s Engineer What&apos;s Next.
            </h2>
            <p className="font-mono text-mono-label text-on-surface-variant max-w-xl mb-12 text-sm leading-relaxed">
              Available for enterprise AI architecture consultation, research collaboration, and mainframe modernization keynotes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_25px_rgba(15,98,254,0.5)] hover:shadow-[0_0_35px_rgba(15,98,254,0.8)] group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span>Initiate Sequence</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              <Link
                prefetch={false}
                href="/architect"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span>View System Specs</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
