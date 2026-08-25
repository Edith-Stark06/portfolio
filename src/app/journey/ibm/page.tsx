import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "IBM Z Journey",
  description: "From IBM Z Xplore to IBM Champion 2025 & 2026. Linux Foundation OMP Mentee, Superstar Ambassador, Technical Leader. Open source enterprise AI tools for mainframe modernization.",
  openGraph: {
    title: "IBM Z Journey | Ramana Sree K V",
    description: "IBM Champion 2025 & 2026, Linux Foundation OMP Mentee, Superstar Ambassador. Mainframe modernization with AI.",
    url: "https://ramanasree.dev/journey/ibm",
    siteName: "AETHER_ENG",
    type: "website",
    images: ["/images/ibm/ibm-champion-2026.webp"],
  },
};

export default function IBMJourneyPage() {
  const growthTimeline = [
    {
      year: "2023",
      title: "Student Developer & IBM Z Xplore",
      stage: "01 // FOUNDATION",
      description: "Began hands-on exploration of IBM Z mainframes. Completed IBM Z Xplore challenges, mastering JCL, COBOL syntax, and z/OS dataset management.",
      image: media.placeholders.ibm,
      badge: "Learner",
    },
    {
      year: "2024",
      title: "IBM Z Student Ambassador",
      stage: "02 // LEADERSHIP",
      description: "Appointed IBM Z Student Ambassador. Organized regional campus workshops, onboarding 100+ student developers to enterprise mainframe computing.",
      image: media.ibm.superstar,
      badge: "Ambassador",
    },
    {
      year: "2025",
      title: "IBM Champion 2025 & TechXchange Panelist",
      stage: "03 // RECOGNITION",
      description: "Recognized globally as an IBM Champion 2025. Spoke at IBM TechXchange panel on AI-assisted enterprise code modernization and developer tooling.",
      image: media.ibm.techxchange,
      badge: "Global Champion",
    },
    {
      year: "2026",
      title: "Renominated Champion & OMP Mentee",
      stage: "04 // IMPACT",
      description: "Awarded IBM Champion 2026 renomination. Selected as Linux Foundation Open Mainframe Project mentee, driving open-source enterprise AI tools.",
      image: media.ibm.champion,
      badge: "Technical Leader",
    },
  ];

  const impactMetrics = [
    { value: "500+", label: "Students Mentored", detail: "Hands-on mainframe workshops & guidance" },
    { value: "2x", label: "IBM Champion", detail: "Global recognition in 2025 & 2026" },
    { value: "01", label: "TechXchange Panel", detail: "Enterprise AI & Mainframe Modernization" },
    { value: "01", label: "Linux Foundation OMP", detail: "Open Mainframe Project Mentorship" },
  ];

  const definingMoments = [
    {
      title: "First IBM Z Challenge Submission",
      subtitle: "Discovering Enterprise Determinism",
      story: "Executing my first batch JCL job on an IBM z/OS environment opened my eyes to zero-downtime architecture. Unlike web servers that restart silently, mainframes demand absolute precision.",
      takeaway: "Engineering at scale requires designing for total reliability.",
      image: media.placeholders.ibm,
    },
    {
      title: "IBM TechXchange 2025 Panel",
      subtitle: "Speaking on the Global Stage",
      story: "Standing alongside veteran enterprise architects to discuss bringing LLMs and AST parsing into legacy COBOL refactoring was a watershed moment in my career.",
      takeaway: "Young engineers belong at the forefront of enterprise modernization.",
      image: media.ibm.techxchange,
    },
    {
      title: "IBM Champion 2025 & 2026 Announcement",
      subtitle: "Global Peer Recognition",
      story: "Being named an IBM Champion validated years of technical advocacy, late-night open-source coding, and community mentorship across the IBM Z ecosystem.",
      takeaway: "Technical advocacy is about lifting the entire community up.",
      image: media.ibm.champion,
    },
  ];

  return (
    <>
      <Navigation />
      <div className="film-grain" aria-hidden="true" />

      <main id="main-content" className="relative z-10 flex flex-col items-center min-h-screen max-w-[1440px] mx-auto w-full overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.ibm}
            fallbackSrc={media.placeholders.ibm}
            alt="IBM Background"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_90%)] -z-10 pointer-events-none" aria-hidden="true" />

        {/* 1. OPENING HERO SECTION */}
        <section
          className="min-h-[85vh] flex flex-col justify-center items-center text-center px-5 md:px-[80px] pt-36 pb-20 w-full relative"
          aria-label="Documentary Hero"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(15,98,254,0.8)]" aria-hidden="true" />
            <span className="font-mono text-mono-label uppercase text-primary tracking-widest text-[11px] font-semibold">
              DOCUMENTARY // THE IBM JOURNEY
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[76px] md:leading-[84px] lg:text-display-hero text-on-background max-w-5xl font-extrabold mb-8 tracking-tight">
            IBM Didn&apos;t Just Give Me Opportunities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-background via-on-surface to-primary">
              It Changed How I Think About Engineering.
            </span>
          </h1>

          <p className="font-mono text-mono-label md:text-base text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
            A journey from discovering enterprise mainframes to global technical leadership, open-source advocacy, and IBM Champion recognition.
          </p>

          {/* Hero Feature Visual Badge */}
          <div className="relative w-full max-w-2xl aspect-[16/9] rounded-2xl glass-panel-gradient overflow-hidden border border-white/15 shadow-2xl group">
            <ImageWithFallback
              src={media.ibm.champion}
              fallbackSrc={media.placeholders.ibm}
              alt="IBM Champion 2025 & 2026 Recognition"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-10 text-left">
              <div>
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase block mb-1">
                  GLOBAL RECOGNITION
                </span>
                <h3 className="font-display text-headline-sm text-on-background font-bold">
                  IBM Champion 2025 &amp; 2026
                </h3>
              </div>
              <span className="px-4 py-1.5 rounded-full border border-primary/40 bg-primary/20 font-mono text-xs text-primary font-bold uppercase backdrop-blur-md">
                IBM Z &amp; AI Advocate
              </span>
            </div>
          </div>
        </section>

        {/* 2. BEFORE IBM */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[140px] relative z-10 border-y border-white/5 bg-surface-container-lowest/40"
          aria-label="Before IBM"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em]">
                01 // THE STARTING POINT
              </span>
              <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
            </div>

            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background mb-8 font-bold">
              Curiosity Meets Enterprise Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-mono-label text-on-surface-variant leading-relaxed text-sm md:text-base">
              <p>
                Before encountering IBM technology, my understanding of software engineering was bounded by conventional web frameworks and personal cloud servers. Like most student developers, enterprise mainframes felt distant, complex, and opaque.
              </p>
              <p>
                My curiosity was sparked by a fundamental question: What executes the millions of mission-critical transactions behind global banking, healthcare, and air travel every second? That curiosity led me to explore IBM Z, shifting my focus from building simple scripts to engineering transaction-critical systems.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. DISCOVERY */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[140px] relative z-10 border-b border-white/5"
          aria-label="Discovery & Learning"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                02 // THE DISCOVERY
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                IBM Z Xplore &amp; The First Breakthrough
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "IBM Z Xplore",
                  desc: "Hands-on mastery over JCL, COBOL dataset management, and z/OS system commands through real-world enterprise scenarios.",
                },
                {
                  step: "02",
                  title: "Skill Acceleration",
                  desc: "Developing deep technical respect for multi-threading, hardware encryption, and zero-downtime transaction engineering.",
                },
                {
                  step: "03",
                  title: "Community & Mentorship",
                  desc: "Connecting with global IBM engineers, developer advocates, and fellow mainframe enthusiasts around the world.",
                },
              ].map((card) => (
                <ScrollReveal key={card.step} y={40} duration={0.8}>
                  <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-secondary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <span className="font-mono text-mono-label text-secondary font-bold text-sm block mb-4">
                        [{card.step}]
                      </span>
                      <h3 className="font-display text-headline-sm text-on-background mb-3 group-hover:text-secondary transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. GROWTH TIMELINE */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[160px] relative z-10 border-b border-white/5 bg-surface-container-lowest/30"
          aria-label="Growth Timeline"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-3">
                03 // EVOLUTION OF GROWTH
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                The Growth Progression Timeline
              </h2>
            </ScrollReveal>

            <div className="space-y-12">
              {growthTimeline.map((item, idx) => (
                <ScrollReveal key={item.year} y={40} duration={0.8} delay={idx * 0.1}>
                  <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="font-mono text-headline-sm text-primary font-bold">
                            {item.year}
                          </span>
                          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest px-2.5 py-0.5 rounded border border-white/10">
                            {item.stage}
                          </span>
                          <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-secondary/30 bg-secondary/10">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="font-display text-headline-sm md:text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 aspect-[16/10] rounded-xl glass-panel overflow-hidden relative border border-white/10">
                      <ImageWithFallback
                        src={item.image}
                        fallbackSrc={media.placeholders.ibm}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MEASURABLE IMPACT */}
        <section
          className="w-full px-5 md:px-[80px] py-20 relative z-10 border-b border-white/5"
          aria-label="Measurable Impact"
        >
          <ScrollReveal y={40} duration={0.8} className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {impactMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-between border border-white/10 hover:border-secondary/40 transition-colors group"
                >
                  <div className="font-display text-[40px] md:text-[56px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-on-background to-primary mb-3 group-hover:scale-105 transition-transform origin-left">
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

        {/* 6. MOMENTS THAT CHANGED ME */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[160px] relative z-10 border-b border-white/5 bg-surface-container-lowest/30"
          aria-label="Defining Moments"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal y={40} duration={0.9} className="mb-16">
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-3">
                04 // DEFINING MOMENTS
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold">
                Moments That Changed Me
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {definingMoments.map((moment) => (
                <ScrollReveal key={moment.title} y={40} duration={0.8}>
                  <article className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="aspect-[16/10] rounded-xl overflow-hidden relative mb-6 border border-white/10">
                        <ImageWithFallback
                          src={moment.image}
                          fallbackSrc={media.placeholders.ibm}
                          alt={moment.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="font-mono text-[10px] text-secondary uppercase tracking-widest block mb-2">
                        {moment.subtitle}
                      </span>
                      <h3 className="font-display text-headline-sm text-on-background mb-3 group-hover:text-secondary transition-colors">
                        {moment.title}
                      </h3>
                      <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed mb-6">
                        {moment.story}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">
                        KEY TAKEAWAY:
                      </span>
                      <p className="font-mono text-[11px] text-on-surface/90 italic">
                        &quot;{moment.takeaway}&quot;
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BUILDING COMMUNITY */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[140px] relative z-10 border-b border-white/5"
          aria-label="Building Community"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px]" aria-hidden="true" />
              <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-4">
                05 // COMMUNITY LEADERSHIP
              </span>
              <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-6">
                IBM Z Student Society India
              </h2>
              <div className="space-y-4 font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed">
                <p>
                  Demystifying enterprise mainframes for student developers across India required building an active, inclusive peer community. Starting from small study groups, we established structured learning tracks around IBM Z Xplore, JCL, and enterprise security.
                </p>
                <p>
                  Today, this initiative empowers hundreds of young engineers to master enterprise computing skills, participate in global hackathons, and realize that mainframe modernization is one of the most vital frontiers in modern software architecture.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 8. BEYOND BADGES */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[140px] relative z-10 border-b border-white/5 bg-surface-container-lowest/30"
          aria-label="Beyond Badges"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto text-center">
            <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-4">
              06 // PHILOSOPHY OF ADVOCACY
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-8">
              Beyond Badges &amp; Titles
            </h2>
            <blockquote className="font-display text-headline-sm md:text-headline-md text-on-surface leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
              &quot;Badges and titles are milestones on a map, but the true destination is impact. Being an IBM Champion is not about status—it is about the responsibility to share knowledge freely, lift up younger developers, and foster an open engineering culture.&quot;
            </blockquote>
          </ScrollReveal>
        </section>

        {/* 9. FUTURE VISION */}
        <section
          className="w-full px-5 md:px-[80px] py-24 md:py-[140px] relative z-10 border-b border-white/5"
          aria-label="Future Vision"
        >
          <ScrollReveal y={40} duration={0.9} className="max-w-5xl mx-auto">
            <span className="font-mono text-mono-label text-secondary uppercase tracking-[0.2em] block mb-4">
              07 // THE ROAD AHEAD
            </span>
            <h2 className="font-display text-display-hero-mobile md:text-headline-lg text-on-background font-bold mb-8">
              Future Vision: Enterprise AI &amp; Open Mainframes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI-Assisted Mainframe Refactoring",
                  desc: "Building open-source tooling that leverages LLMs and AST dependency graph extraction to accelerate legacy COBOL modernization.",
                },
                {
                  title: "Open Mainframe Project Leadership",
                  desc: "Expanding contributions within the Linux Foundation OMP ecosystem to bridge mainframe systems with cloud-native APIs.",
                },
                {
                  title: "Global Mentorship Expansion",
                  desc: "Creating accessible learning pathways for student developers worldwide to enter enterprise computing and AI engineering.",
                },
                {
                  title: "Responsible Healthcare AI",
                  desc: "Advancing research in federated edge learning and interpretable deep learning models for clinical decision support.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel p-6 md:p-8 rounded-xl border border-white/10">
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3 text-secondary">
                    {item.title}
                  </h3>
                  <p className="font-mono text-mono-label text-on-surface-variant text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 10. CLOSING REFLECTION & NEXT STEPS */}
        <section
          className="w-full px-5 md:px-[80px] py-28 md:py-[160px] relative z-10 text-center"
          aria-label="Closing Reflection"
        >
          <ScrollReveal y={40} duration={1} className="max-w-4xl mx-auto flex flex-col items-center">
            <blockquote className="font-display text-headline-md md:text-headline-lg text-on-background font-extrabold mb-10 leading-snug">
              &quot;My greatest achievement isn&apos;t becoming an IBM Champion. It&apos;s inspiring the next generation of engineers to believe they belong in enterprise computing.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                prefetch={false}
                href="/research"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_30px_rgba(15,98,254,0.7)] group"
              >
                <span>Continue to Research</span>
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

      <Footer cta="Explore IBM Z" />
    </>
  );
}
