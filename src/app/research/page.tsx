import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { featuredPublications, publications } from "@/data/publications";
import { getResearchResults } from "@/data/evidence";

export const metadata: Metadata = {
  title: "Applied AI Research",
  description: "Peer-reviewed research in multimodal deep learning, healthcare AI diagnostic models, interpretable ML for enterprise codebase modernization. IEEE Best Paper 2026.",
  openGraph: {
    title: "Applied AI Research | Ramana Sree K V",
    description: "Multimodal deep learning, healthcare AI, interpretable ML, reinforcement learning. IEEE Best Paper 2026.",
    url: "https://ramanasree.dev/research",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/hero/blueprint-background-v1.webp"],
  },
};

export default function ResearchPage() {
  const researchDomains = [
    {
      title: "Healthcare AI & Neuroimaging",
      icon: "biomedical",
      desc: "Multimodal deep learning architectures combining Convolutional Neural Networks (ResNet) and Vision Transformers (DeiT) for early disease classification from MRI imagery.",
      paper: "IEEE DSBS 2026",
    },
    {
      title: "Enterprise AI & Code Complexity",
      icon: "account_tree",
      desc: "Interpretable machine learning (XGBoost + SHAP feature attribution) for AST-based source code complexity analysis and automated migration decision trees.",
      paper: "OMP White Paper 2025",
    },
    {
      title: "Computer Vision & Edge Detection",
      icon: "camera",
      desc: "YOLO object detection for e-waste devices and solar panels, with held-out and first-party evaluation, controlled ablations and documented negative results.",
      paper: "EcoTrace & Solar AI",
    },
    {
      title: "Reinforcement Learning in Healthcare",
      icon: "psychology",
      desc: "Markov Decision Process (MDP) modeling and survival-based reward functions for clinical decision support in sepsis treatment protocols.",
      paper: "MIMIC-III Sepsis RL",
    },
  ];

  const methodologySteps = [
    { step: "01", phase: "Question & Hypothesis", detail: "Formulating precise algorithmic research questions based on real-world system bottlenecks." },
    { step: "02", phase: "Literature Review", detail: "Benchmarking existing SOTA models across peer-reviewed IEEE, ACM, and arXiv literature." },
    { step: "03", phase: "Dataset Preprocessing", detail: "Cleaning, normalizing, and augmenting high-density sensor/imaging datasets." },
    { step: "04", phase: "Model Architecture", desc: "Designing custom hybrid neural networks, loss functions, and attention layers." },
    { step: "05", phase: "Empirical Experimentation", detail: "Training models across GPU clusters, tuning hyperparameters, and logging loss curves." },
    { step: "06", phase: "ROC & Ablation Validation", detail: "Evaluating accuracy, precision-recall, F1-scores, and running feature ablation tests." },
    { step: "07", phase: "Engineering Integration", detail: "Translating validated research models into production-ready API microservices." },
  ];

  const experimentalResults = getResearchResults();

  return (
    <>
      <Navigation />

      {/* 1. RESEARCH HERO SECTION */}
      <header
        className="relative min-h-[80vh] flex flex-col justify-center items-center px-5 md:px-[80px] pt-36 pb-20 overflow-hidden"
        aria-label="Applied AI Research Hero"
      >
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.hero.blueprint}
            fallbackSrc={media.placeholders.hero}
            alt="Research Blueprint Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 -z-10 pointer-events-none" aria-hidden="true" />
        <div className="film-grain -z-10" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,183,195,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-secondary tracking-widest text-[11px] font-semibold">
              APPLIED AI RESEARCH &amp; SCIENTIFIC INQUIRY
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[80px] md:leading-[88px] lg:text-display-hero text-on-background font-extrabold tracking-tight mb-8">
            Engineering Begins With Curiosity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-secondary">
              Research Transforms Curiosity Into Evidence.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            Investigating multimodal deep learning, healthcare AI diagnostic models, and interpretable machine learning for enterprise codebase modernization.
          </p>
        </div>
      </header>

      <main id="main-content" className="relative max-w-[1440px] mx-auto overflow-hidden">
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.research}
            fallbackSrc={media.placeholders.hero}
            alt="Research Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 2. RESEARCH PHILOSOPHY */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-y border-white/5 bg-surface-container-lowest/40 relative z-10"
          aria-label="Research Philosophy"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                01 // SCIENTIFIC RIGOR
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Research Philosophy: From Hypothesis to Empirical Proof
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                Software engineering without scientific research degrades into trial-and-error intuition. Applied research provides the mathematical guarantees, empirical evidence, and algorithmic foundations necessary to build software systems that do not break under extreme real-world conditions.
              </p>
              <p>
                My research methodology enforces strict reproducibility, data privacy compliance, and model interpretability (SHAP feature scoring). Whether classifying early-stage dementia from brain MRI scans or parsing legacy COBOL AST syntax trees, every model architecture is benchmarked against established baselines.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. RESEARCH DOMAINS */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-b border-white/5 relative z-10"
          aria-label="Research Domains"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                02 // CORE DOMAINS
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Primary Research Themes
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchDomains.map((domain) => (
                <ScrollReveal key={domain.title} y={40} duration={0.8}>
                  <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden="true">
                          {domain.icon}
                        </span>
                        <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-primary/30 bg-primary/10">
                          {domain.paper}
                        </span>
                      </div>
                      <h3 className="font-display text-headline-sm text-on-background mb-3 group-hover:text-secondary transition-colors">
                        {domain.title}
                      </h3>
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                        {domain.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED RESEARCH STORIES */}
        <ScrollReveal y={50} duration={1}>
          <section
            className="px-5 md:px-[80px] py-24 md:py-[160px] max-w-7xl mx-auto relative z-10 border-b border-white/5"
            aria-label="Featured Research Stories"
          >
            <div className="flex flex-col gap-4 mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em]">
                03 // FEATURED INVESTIGATIONS
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-surface font-bold">
                Featured Research Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {featuredPublications.map((pub, index) => (
                <article
                  key={index}
                  className="glass-panel p-8 md:p-12 rounded-2xl border border-white/15 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-300"
                >
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
                        </div>

                        <h3 className="font-display text-headline-sm md:text-headline-md text-on-surface mb-6 group-hover:text-secondary transition-colors duration-300">
                          {pub.title}
                        </h3>

                        <p className="font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                          {pub.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                        {pub.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded border border-outline-variant/50 font-mono text-xs text-on-surface-variant bg-surface/50"
                          >
                            [{tech}]
                          </span>
                        ))}
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
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 5. RESEARCH METHODOLOGY PIPELINE */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-b border-white/5 bg-surface-container-lowest/30 relative z-10"
          aria-label="Research Methodology Pipeline"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                04 // SCIENTIFIC PIPELINE
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                The Research-to-System Methodology
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {methodologySteps.map((st, idx) => (
                <div
                  key={st.step}
                  className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-colors group relative"
                >
                  {idx < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20 font-mono text-xs" aria-hidden="true">
                      &gt;
                    </div>
                  )}
                  <div>
                    <span className="font-mono text-mono-label text-secondary font-bold text-xs block mb-2">
                      [{st.step}]
                    </span>
                    <h3 className="font-display text-body-md text-on-background font-bold mb-2 group-hover:text-secondary transition-colors">
                      {st.phase}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. EXPERIMENTAL RESULTS METRICS */}
        <section
          className="px-5 md:px-[80px] py-20 border-b border-white/5 relative z-10"
          aria-label="Experimental Results"
        >
          <ScrollReveal y={40} duration={0.8} className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {experimentalResults.map((res, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-between border border-white/10 hover:border-secondary/40 transition-colors group"
                >
                  <div className="font-display text-[40px] md:text-[56px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-on-background to-secondary mb-3 group-hover:scale-105 transition-transform origin-left">
                    {res.metric}
                  </div>
                  <div>
                    <h3 className="font-mono text-mono-label text-on-background font-bold uppercase tracking-wider text-xs md:text-sm">
                      {res.label}
                    </h3>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      {res.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 7. ALL PUBLICATIONS ARCHIVE */}
        <ScrollReveal y={40} duration={0.8}>
          <section
            className="px-5 md:px-[80px] py-24 md:py-[160px] max-w-7xl mx-auto relative z-10 border-b border-white/5"
            aria-label="Research Publications Catalog"
          >
            <div className="flex flex-col gap-4 mb-16">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                05 // PUBLICATIONS CATALOG
              </span>
              <h2 className="font-display text-headline-lg text-on-surface font-bold">
                Complete Publication Archive
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <article
                  key={index}
                  className="glass-panel p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
                >
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-primary font-bold uppercase">
                        [{pub.venue} {"//"} {pub.year}]
                      </span>
                      <span className="font-mono text-[10px] text-on-surface-variant uppercase px-2 py-0.5 rounded border border-white/10">
                        STATUS: {pub.status}
                      </span>
                    </div>
                    <h3 className="font-display text-headline-sm text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    {pub.description && (
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                        {pub.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    {pub.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded border border-outline-variant/50 font-mono text-[10px] text-on-surface-variant bg-surface/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 8. RESEARCH TO ENGINEERING TRANSLATION */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-b border-white/5 bg-surface-container-lowest/30 relative z-10"
          aria-label="Research to Engineering Translation"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              06 // REAL-WORLD TRANSLATION
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-8">
              How Research Becomes Production Software
            </h2>
            <div className="space-y-6 font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed">
              <p>
                Academic papers are only the beginning. The ultimate value of scientific research is realized when validated algorithms are packaged into deterministic, high-throughput production software that enterprise teams rely on daily.
              </p>
              <p>
                For example, our research into AST-grounded code analysis directly informs the <strong>AI-Powered Mainframe Modernization Assistant</strong>, a parser-first COBOL analysis and Java generation platform in which the LLM never sees raw source. The white paper reports a 60% reduction in code review time.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 9. LESSONS LEARNED & SCIENTIFIC INTEGRITY */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-b border-white/5 relative z-10"
          aria-label="Lessons Learned"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                07 // RETROSPECTIVE &amp; HONESTY
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Lessons Learned &amp; Scientific Integrity
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Class Imbalance Bias",
                  desc: "Early neuroimaging MRI models exhibited majority-class bias. Implementing synthetic oversampling (SMOTE) was mandatory for reliable early-dementia detection.",
                },
                {
                  title: "GPU Memory Constraints",
                  desc: "High-resolution Vision Transformer self-attention maps saturated GPU VRAM during batch inference, requiring linear attention layer optimizations.",
                },
                {
                  title: "Explainability Mandate",
                  desc: "Black-box neural network outputs are unusable in clinical environments. Integrating SHAP/LIME attribution heatmaps was essential for medical practitioner trust.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel p-8 rounded-xl border border-white/10">
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 text-secondary">
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

        {/* 10. FUTURE RESEARCH FRONTIERS */}
        <section
          className="px-5 md:px-[80px] py-24 md:py-[140px] border-b border-white/5 bg-surface-container-lowest/30 relative z-10"
          aria-label="Future Research Frontiers"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                08 // FUTURE FRONTIERS
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Active Research Directions
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Agentic AI for Legacy Refactoring",
                  desc: "Exploring multi-agent LLM systems for autonomous COBOL-to-Java translation with strict AST semantic equivalence verification.",
                },
                {
                  title: "Privacy-Preserving Federated Edge AI",
                  desc: "Investigating differential privacy guarantees in federated edge learning across distributed clinical hospital nodes.",
                },
                {
                  title: "Local Quantized LLM Fine-Tuning",
                  desc: "Fine-tuning 8B open-weight models for 100% offline air-gapped enterprise code analysis.",
                },
                {
                  title: "Post-Quantum Security for 6G Swarms",
                  desc: "Hybrid ML-KEM-1024 key exchange with mobility edge caching for 5G/6G UAV swarms, calibrated against Raspberry Pi 4 hardware (Kyber-6G manuscript in preparation).",
                },
                {
                  title: "Capacity-Aware Diagnostic Triage",
                  desc: "Value-of-information ranking and capacity-constrained scheduling for scarce MRI and PET slots in early Alzheimer's pathways (CogniQueue).",
                },
                {
                  title: "Survival-Based Reinforcement Learning",
                  desc: "Refining Markov Decision Process reward structures for automated ICU sepsis treatment recommendation.",
                },
              ].map((frontier) => (
                <div key={frontier.title} className="glass-panel p-8 rounded-xl border border-white/10">
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 text-primary">
                    {frontier.title}
                  </h3>
                  <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                    {frontier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CLOSING REFLECTION & CTAS */}
        <section
          className="px-5 md:px-[80px] py-28 md:py-[160px] text-center relative z-10"
          aria-label="Closing Reflection"
        >
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;Research is valuable only when it improves the systems people rely on.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Explore Enterprise Projects</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              <Link
                prefetch={false}
                href="/architect"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-mono-label uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>View System Specs</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer variant="research" />
    </>
  );
}
