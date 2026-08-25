import type { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DecryptText from "@/components/effects/DecryptText";
import ScrollReveal from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "System Architect Manifesto",
  description: "Engineering principles, system thinking workflow, enterprise AI mindset, and mainframe modernization philosophy. IBM Champion 2025 & 2026.",
  openGraph: {
    title: "The Architect Manifesto | Ramana Sree K V",
    description: "Engineering principles, system thinking, enterprise AI mindset, mainframe modernization. IBM Champion 2025 & 2026.",
    url: "https://ramanasree.dev/architect",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/hero/blueprint-background-v1.webp"],
  },
};

export default function ArchitectPage() {
  const principles = [
    {
      code: "PRN: 01",
      title: "Build for Scale",
      explanation: "Engineering deterministic architectures built to handle high-throughput workloads and enterprise data volumes.",
      example: "Automated COBOL source parsing & dependency graph extraction tools capable of parsing 100k+ lines of legacy code.",
      icon: "memory",
    },
    {
      code: "PRN: 02",
      title: "Design for Humans",
      explanation: "Translating complex AI model outputs and mainframe logic into intuitive, accessible developer tooling.",
      example: "Transformed dense LLM code analysis outputs into visual graph representations for enterprise migration teams.",
      icon: "person",
    },
    {
      code: "PRN: 03",
      title: "Research Before Assumptions",
      explanation: "Grounding architectural decisions in peer-reviewed scientific literature and empirical validation.",
      example: "Combined Convolutional (ResNet) and Transformer (DeiT) architectures achieving 97.22% accuracy in Alzheimer's classification (IEEE DSBS 2026).",
      icon: "science",
    },
    {
      code: "PRN: 04",
      title: "Measure Everything",
      explanation: "Relying on benchmark-driven development, quantitative evaluation metrics, and strict test coverage.",
      example: "Evaluated machine learning complexity metrics using XGBoost and SHAP feature importance for mainframe migration decision trees.",
      icon: "analytics",
    },
    {
      code: "PRN: 05",
      title: "Security by Design",
      explanation: "Enforcing zero-trust pipeline validation, data privacy compliance, and resilient system boundaries.",
      example: "Engineered federated edge learning models with differential privacy guarantees for sensitive healthcare data.",
      icon: "verified_user",
    },
    {
      code: "PRN: 06",
      title: "Elegant Simplicity",
      explanation: "Eliminating systemic bloat through clean abstractions, modular components, and automated workflows.",
      example: "Redesigned L&T ERP Inspection Call workflows, eliminating redundant steps and enforcing data integrity across systems.",
      icon: "auto_awesome",
    },
  ];

  const systemFlowSteps = [
    { step: "01", title: "Problem Definition", desc: "Analyzing systemic constraints, data dependencies, and SLA requirements." },
    { step: "02", title: "Scientific Research", desc: "Reviewing literature and benchmarking algorithmic state-of-the-art." },
    { step: "03", title: "System Architecture", desc: "Designing modular boundaries, API contracts, and data pipelines." },
    { step: "04", title: "Prototyping", desc: "Building isolated, high-throughput proof-of-concept components." },
    { step: "05", title: "Empirical Validation", desc: "Benchmarking performance, stress testing, and running unit suites." },
    { step: "06", title: "Deployment", desc: "Deploying static/containerized builds with zero-trust security." },
    { step: "07", title: "Continuous Iteration", desc: "Monitoring telemetry, optimizing bottlenecks, and refining abstractions." },
  ];

  const enterpriseAiAspects = [
    { title: "Reliability", desc: "Consumer AI accepts hallucinations; Enterprise AI demands deterministic precision, validation hooks, and graceful fallback states." },
    { title: "Auditability", desc: "Enterprise models require transparent lineage, SHAP feature importance, and traceable decision logic." },
    { title: "Security & Privacy", desc: "Zero-trust data handling, private model deployments, and strict compliance over open internet APIs." },
    { title: "Scalability", desc: "High-throughput inference pipelines optimized for production batch processing and enterprise workloads." },
    { title: "Maintainability", desc: "Modular ML codebases with strict interface decoupling and automated regression test suites." },
  ];

  const researchPipeline = [
    { phase: "Research Question", detail: "How to extract clear architectural insights from legacy COBOL code?" },
    { phase: "Experimentation", detail: "Benchmarking static AST parsing against LLM-assisted semantic parsing." },
    { phase: "Evaluation", detail: "Measuring accuracy, inference latency, and SHAP feature importance scores." },
    { phase: "Engineering Decision", detail: "Designing a hybrid parser combining deterministic AST rules with AI inference." },
    { phase: "Production System", detail: "Deployed as the Enterprise Code Analysis & Migration Dashboard." },
  ];

  const maturityNodes = [
    { title: "Curiosity", desc: "Exploring fundamental computer science and hardware assembly paradigms." },
    { title: "Learning", desc: "Mastering COBOL, JCL, Python, and C/C++ backend systems." },
    { title: "Community", desc: "Leading IBM Z Ambassador initiatives and Linux Foundation OMP mentoring." },
    { title: "Research", desc: "Publishing peer-reviewed deep learning papers at IEEE DSBS 2026." },
    { title: "Leadership", desc: "Awarded IBM Champion 2025 & 2026 for global technical advocacy." },
    { title: "Systemic Impact", desc: "Architecting scalable enterprise AI software artifacts and tools." },
  ];

  const toolingCategories = [
    {
      category: "Mainframe Modernization",
      why: "Preserving transaction-critical enterprise core systems while building modern automated interfaces.",
      tools: ["IBM Z", "z/OS", "COBOL", "JCL"],
      icon: "terminal",
    },
    {
      category: "Artificial Intelligence / ML",
      why: "Enabling interpretable, research-backed automated reasoning and vision systems.",
      tools: ["PyTorch", "DeiT Transformers", "XGBoost", "SHAP", "LangChain"],
      icon: "memory",
    },
    {
      category: "Backend Systems",
      why: "Building high-performance, asynchronous REST APIs and containerized microservices.",
      tools: ["FastAPI", "Node.js", "Python", "PostgreSQL", "Docker"],
      icon: "database",
    },
    {
      category: "Developer Experience & Frontend",
      why: "Ensuring strict type safety, fast static execution, and intuitive developer interfaces.",
      tools: ["TypeScript", "Next.js", "Tailwind CSS", "GSAP", "Git"],
      icon: "code",
    },
  ];

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="flex-grow max-w-[1440px] mx-auto w-full px-5 md:px-[80px] pt-40 pb-[160px] flex flex-col gap-24 md:gap-[160px] relative min-h-screen"
      >
        {/* Background Blueprint Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.hero.blueprint}
            fallbackSrc={media.placeholders.hero}
            alt="Blueprint Background"
            fill
            className="object-cover object-top opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 -z-10 pointer-events-none" aria-hidden="true" />
        <div className="film-grain -z-10" aria-hidden="true" />

        {/* 1. OPENING STATEMENT / HERO SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-center items-start pt-12" aria-label="Manifesto Opening">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <DecryptText
                text="THE ARCHITECT MANIFESTO"
                as="h1"
                className="text-display-hero-mobile md:text-display-hero text-on-background font-extrabold uppercase tracking-tighter font-display"
              />
              <p className="font-display text-headline-md md:text-headline-lg text-secondary leading-snug font-bold">
                &quot;I don&apos;t just build software. I design systems that remain useful long after the first release.&quot;
              </p>
              <p className="font-mono text-mono-label text-on-surface-variant max-w-2xl leading-relaxed text-sm md:text-base border-l-2 border-primary/40 pl-4 py-2">
                Architecting software for mission-critical enterprise environments requires a fundamental shift in perspective. Rather than building ephemeral tools that decay with every dependency update, I focus on deterministic, scalable system boundaries, research-grounded artificial intelligence, and automated modernization frameworks.
              </p>
            </div>

            {/* Profile Hero Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl glass-panel-gradient overflow-hidden border border-white/15 shadow-2xl group">
                <ImageWithFallback
                  src={media.profile.hero}
                  fallbackSrc={media.placeholders.profile}
                  alt="Ramana Sree K V - Systems Architect"
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
        </section>

        {/* 2. ENGINEERING PHILOSOPHY PRINCIPLES */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Core Engineering Philosophy">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // CORE PHILOSOPHY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Engineering Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p) => (
                <div
                  key={p.code}
                  className="glass-panel rounded-xl p-8 flex flex-col justify-between border border-white/10 hover:border-secondary/40 transition-all duration-300 group"
                >
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
                    <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed mb-6">
                      {p.explanation}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">
                      REAL ENGINEERING EXAMPLE:
                    </span>
                    <p className="font-mono text-[11px] text-on-surface/80 leading-relaxed italic">
                      &quot;{p.example}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 3. SYSTEM THINKING FLOW */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="System Thinking Architecture">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                02 // ARCHITECTURAL METHODOLOGY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              System Thinking Workflow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {systemFlowSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors group relative"
                >
                  {idx < systemFlowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20 font-mono text-xs" aria-hidden="true">
                      &gt;
                    </div>
                  )}
                  <div>
                    <span className="font-mono text-mono-label text-primary font-bold text-xs block mb-2">
                      [{s.step}]
                    </span>
                    <h3 className="font-display text-body-md text-on-background font-bold mb-2 group-hover:text-secondary transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. ENTERPRISE AI MINDSET */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Enterprise AI Mindset">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                03 // PARADIGM SHIFT
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-6">
                  The Enterprise AI Mindset
                </h2>
                <p className="font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm">
                  Consumer AI focuses on open-ended creativity; Enterprise AI demands deterministic reliability, zero-trust security boundaries, and rigorous performance metrics. Building for enterprise scale requires moving beyond API wrappers to architect true production-ready intelligent systems.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {enterpriseAiAspects.map((aspect) => (
                  <div key={aspect.title} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors">
                    <h3 className="font-display text-headline-sm text-on-background mb-2 text-secondary font-bold">
                      {aspect.title}
                    </h3>
                    <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                      {aspect.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 5. MAINFRAME MODERNIZATION */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Mainframe Modernization">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                04 // ENTERPRISE CORE
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px]" aria-hidden="true" />
              <div className="relative z-10 max-w-4xl">
                <span className="font-mono text-mono-label text-primary uppercase tracking-widest block mb-4">
                  [ IBM Z &amp; REASONING ]
                </span>
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-6">
                  Why Mainframe Modernization Matters
                </h2>
                <p className="font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                  Mainframes process over 70% of global commercial transactions, housing decades of mission-critical business logic written in COBOL and JCL. Replacing these core systems outright introduces unacceptable operational risk. My work focuses on AI-assisted modernization: automating code parsing, dependency graph extraction, and semantic understanding so legacy applications can seamlessly integrate with modern cloud infrastructure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <h3 className="font-display text-headline-sm text-on-background font-bold mb-1">
                      70%+
                    </h3>
                    <p className="font-mono text-[11px] text-on-surface-variant uppercase">
                      Global Transactions Executed
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-headline-sm text-secondary font-bold mb-1">
                      Zero-Downtime
                    </h3>
                    <p className="font-mono text-[11px] text-on-surface-variant uppercase">
                      Migration Requirement
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-headline-sm text-primary font-bold mb-1">
                      AI-Assisted
                    </h3>
                    <p className="font-mono text-[11px] text-on-surface-variant uppercase">
                      Code Parsing &amp; Refactoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 6. RESEARCH-DRIVEN ENGINEERING */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Research Pipeline">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                05 // RESEARCH INTEGRATION
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Research-Driven Engineering Pipeline
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {researchPipeline.map((step, idx) => (
                <div key={step.phase} className="glass-panel p-6 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-secondary/40 transition-colors">
                  <div>
                    <span className="font-mono text-mono-label text-secondary text-xs uppercase block mb-3">
                      STAGE {idx + 1} {"//"}
                    </span>
                    <h3 className="font-display text-body-md text-on-background font-bold mb-3 group-hover:text-secondary transition-colors">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] text-on-surface-variant leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 7. MATURITY EVOLUTION TIMELINE */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Engineering Evolution">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                06 // EVOLUTION OF MATURITY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Engineering Maturity Journey
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {maturityNodes.map((node, i) => (
                <div key={node.title} className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase block mb-2">
                      PHASE 0{i + 1}
                    </span>
                    <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 group-hover:text-primary transition-colors">
                      {node.title}
                    </h3>
                    <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 8. TOOLING PHILOSOPHY BY PURPOSE */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Tooling Philosophy">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                07 // TOOLING PHILOSOPHY
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Technologies Categorized by Purpose
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolingCategories.map((cat) => (
                <div key={cat.category} className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-secondary/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-headline-sm text-on-background font-bold group-hover:text-secondary transition-colors">
                        {cat.category}
                      </h3>
                      <span className="material-symbols-outlined text-secondary opacity-60" aria-hidden="true">
                        {cat.icon}
                      </span>
                    </div>
                    <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed mb-6">
                      <strong className="text-on-surface font-semibold">WHY IT MATTERS:</strong> {cat.why}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {cat.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded border border-outline-variant/50 font-mono text-[11px] text-on-surface-variant uppercase bg-surface/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 9. DESIGN & UX PHILOSOPHY */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Design Philosophy">
            <div className="flex items-center gap-4">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                08 // USER EXPERIENCE
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-6">
                  Design &amp; Interface Philosophy
                </h2>
                <p className="font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base mb-6">
                  Enterprise software should never feel clunky or utilitarian. I design interfaces with the same precision applied to backend architectures: high-contrast typography, restrained micro-animations, fast static loading, and strict accessibility.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {[
                  { title: "Minimalism", desc: "Eliminating noise to highlight content and technical hierarchy." },
                  { title: "Accessibility", desc: "High-contrast typography, WCAG AA compliance, and reduced-motion support." },
                  { title: "Performance", desc: "Static HTML compilation, pre-fetched assets, and zero runtime SSR bottlenecks." },
                  { title: "Purposeful Motion", desc: "Restrained animations designed to guide attention, not distract." },
                ].map((item) => (
                  <div key={item.title} className="glass-panel p-6 rounded-xl border border-white/10">
                    <h3 className="font-display text-headline-sm text-on-background mb-2 font-bold text-secondary">
                      {item.title}
                    </h3>
                    <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 10. CLOSING REFLECTION & NEXT STEPS */}
        <ScrollReveal y={50} duration={1}>
          <section className="relative z-10 text-center py-16" aria-label="Closing Reflection">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
                &quot;The best engineering isn&apos;t measured by how complex it becomes. It&apos;s measured by how simple it feels for everyone else.&quot;
              </blockquote>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  prefetch={false}
                  href="/journey/ibm"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
                >
                  <span>Explore IBM Journey</span>
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
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer variant="architect" />
    </>
  );
}
