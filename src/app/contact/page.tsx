import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import { socialLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description: "Initiate collaboration sequence with Ramana Sree K V regarding Enterprise AI, Mainframe Modernization, Applied Research, and Speaking engagements.",
  openGraph: {
    title: "Contact & Collaboration | Ramana Sree K V",
    description: "Initiate collaboration on Enterprise AI, Mainframe Modernization, Applied Research, and Speaking engagements. IBM Champion 2025 & 2026.",
    url: "https://ramanasree.dev/contact",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/hero/hero-background-v1.webp"],
  },
};

export default function ContactPage() {
  const collaborationPathways = [
    {
      title: "Enterprise AI & Modernization",
      target: "Engineering Directors & Systems Architects",
      desc: "Architecting AST-grounded RAG platforms, vector search indexing, and LLM orchestration for legacy codebase refactoring.",
    },
    {
      title: "Applied Research & Benchmarking",
      target: "AI Researchers & Medical Clinicians",
      desc: "Collaborating on multimodal vision transformers, MRI disease classification, and SHAP model explainability.",
    },
    {
      title: "Open Source Systems Engineering",
      target: "Linux Foundation OMP Contributors",
      desc: "Building open-source developer tooling that bridges legacy enterprise mainframes with cloud-native APIs.",
    },
    {
      title: "Technical Keynotes & Speaking",
      target: "Conference Organizers & Tech Summits",
      desc: "Delivering keynotes and panel presentations on Enterprise AI trends, IBM Z, and systems engineering.",
    },
    {
      title: "Community Mentorship & Workshops",
      target: "Student Developer Groups & Hackathons",
      desc: "Leading hands-on technical workshops on IBM Z Xplore, COBOL AST parsing, and AI application development.",
    },
  ];

  const faqItems = [
    {
      q: "Do you collaborate on AI research projects?",
      a: "Yes, particularly in multimodal healthcare AI, vision transformers, and interpretable machine learning for enterprise software.",
    },
    {
      q: "Are you available for conference speaking keynotes?",
      a: "Yes, delivering keynotes and panel presentations covering Enterprise AI, IBM Z mainframe modernization, and open-source systems engineering.",
    },
    {
      q: "Do you mentor student developers?",
      a: "Yes, actively leading developer workshops through the IBM Z Student Society India and Linux Foundation Open Mainframe Project mentorships.",
    },
    {
      q: "What core technology stack do you specialize in?",
      a: "PyTorch, Next.js, FastAPI, TypeScript, ChromaDB vector stores, IBM Z z/OS, COBOL AST parsing, and XGBoost.",
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.contact}
            fallbackSrc={media.placeholders.hero}
            alt="Contact Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. MISSION CONTROL HERO */}
        <section className="mb-20 md:mb-[120px]" aria-label="Mission Control Hero">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              SYS_STATUS // MISSION CONTROL
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold tracking-tight mb-8">
            Let&apos;s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              Meaningful Together.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-mono-label md:text-base text-on-surface-variant leading-relaxed">
                I&apos;m always interested in solving meaningful engineering problems involving Enterprise AI, Mainframe Modernization, Applied Research, Open Source, and Technical Community Building.
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
                  MISSION_CONTROL // OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CURRENT MISSION */}
        <section className="py-20 md:py-[120px] border-y border-white/5 bg-surface-container-lowest/40 mb-20 md:mb-[140px]" aria-label="Current Mission">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // CURRENT MISSION
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Engineering Focus &amp; Active Initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                Currently focusing on scaling AST-grounded Retrieval-Augmented Generation (RAG) platforms for enterprise codebase refactoring, while advancing multimodal vision transformer research for clinical MRI diagnostic support.
              </p>
              <p>
                Simultaneously expanding open-source contributions within the Linux Foundation Open Mainframe Project and leading developer workshops through the IBM Z Student Society India.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. WAYS WE CAN COLLABORATE */}
        <section className="mb-24 md:mb-[160px]" aria-label="Ways We Can Collaborate">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              02 // COLLABORATION PATHWAYS
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Ways We Can Collaborate
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborationPathways.map((path, idx) => (
              <ScrollReveal key={path.title} y={40} duration={0.8} delay={idx * 0.1}>
                <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors h-full flex flex-col justify-between group">
                  <div>
                    <span className="font-mono text-[10px] text-secondary font-bold uppercase block mb-3">
                      FOR: {path.target}
                    </span>
                    <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 group-hover:text-secondary transition-colors">
                      {path.title}
                    </h3>
                    <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                      {path.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 4. COMMUNICATION CHANNELS & AVAILABILITY */}
        <section className="mb-24 md:mb-[160px] py-20 border-y border-white/5 bg-surface-container-lowest/30" aria-label="Channels & Availability">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Channels */}
            <div className="lg:col-span-7">
              <ScrollReveal y={40} duration={0.9}>
                <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                  03 // DIRECT CHANNELS
                </span>
                <h2 className="font-display text-headline-md md:text-headline-lg text-on-background font-bold mb-8">
                  Communication Channels
                </h2>

                <div className="space-y-4 font-mono text-xs">
                  <div className="glass-panel p-5 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-on-surface-variant uppercase">GITHUB REPOSITORY:</span>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      github.com/Edith-Stark06
                    </a>
                  </div>

                  <div className="glass-panel p-5 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-on-surface-variant uppercase">LINKEDIN NETWORK:</span>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-bold hover:underline"
                    >
                      linkedin.com/in/ramana-sree
                    </a>
                  </div>

                  <div className="glass-panel p-5 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-on-surface-variant uppercase">DIRECT EMAIL:</span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-on-surface font-bold hover:underline"
                    >
                      {socialLinks.email}
                    </a>
                  </div>

                  <div className="glass-panel p-5 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-on-surface-variant uppercase">LOCATION &amp; TIMEZONE:</span>
                    <span className="text-on-surface font-bold">India (IST / UTC+5:30) // Remote</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Current Availability */}
            <div className="lg:col-span-5">
              <ScrollReveal y={40} duration={0.9}>
                <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                  04 // SYSTEM AVAILABILITY
                </span>
                <h2 className="font-display text-headline-md md:text-headline-lg text-on-background font-bold mb-8">
                  Current Status
                </h2>

                <div className="space-y-4 font-mono text-xs">
                  {[
                    { label: "AI Research Collaboration", status: "ACTIVE", color: "text-secondary border-secondary/30 bg-secondary/10" },
                    { label: "Technical Keynotes & Speaking", status: "OPEN", color: "text-primary border-primary/30 bg-primary/10" },
                    { label: "Community Mentorship & Workshops", status: "ACTIVE", color: "text-secondary border-secondary/30 bg-secondary/10" },
                    { label: "Enterprise Engineering Advisory", status: "SELECTIVE", color: "text-on-surface border-white/20 bg-white/5" },
                  ].map((item) => (
                    <div key={item.label} className="glass-panel p-5 rounded-xl border border-white/10 flex items-center justify-between gap-4">
                      <span className="text-on-surface-variant">{item.label}</span>
                      <span className={`px-3 py-1 rounded font-bold uppercase ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5. PHILOSOPHY OF COLLABORATION */}
        <section className="mb-24 md:mb-[160px]" aria-label="Philosophy of Collaboration">
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto text-center">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-4">
              05 // COLLABORATION PHILOSOPHY
            </span>
            <h2 className="font-display text-headline-md md:text-headline-lg text-on-surface leading-relaxed font-bold max-w-4xl mx-auto">
              &quot;I believe meaningful engineering happens when research, software, and community work together.&quot;
            </h2>
          </ScrollReveal>
        </section>

        {/* 6. FREQUENTLY ASKED QUESTIONS */}
        <section className="mb-24 md:mb-[160px]" aria-label="Frequently Asked Questions">
          <ScrollReveal y={40} duration={0.9} className="mb-16">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
              06 // FREQUENT INQUIRIES
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, idx) => (
              <ScrollReveal key={idx} y={40} duration={0.8} delay={idx * 0.1}>
                <div className="glass-panel p-8 rounded-xl border border-white/10">
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 group-hover:text-secondary transition-colors">
                    {faq.q}
                  </h3>
                  <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 7. FINAL REFLECTION & CLOSING CTAS */}
        <section className="text-center pt-12" aria-label="Final Reflection">
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;The best engineering begins with curiosity and grows through collaboration.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-mono text-xs uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)]"
              >
                <span>GitHub Repository</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-secondary/40 bg-secondary/10 text-secondary font-mono text-xs uppercase tracking-wider hover:bg-secondary/20 transition-all duration-300"
              >
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 glass-panel text-on-background font-mono text-xs uppercase tracking-wider hover:bg-white/5 transition-all duration-300"
              >
                <span>Secure Email</span>
              </a>

              <Link
                prefetch={false}
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 glass-panel text-on-surface-variant font-mono text-xs uppercase tracking-wider hover:text-white transition-all duration-300"
              >
                <span>Return to Base</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
