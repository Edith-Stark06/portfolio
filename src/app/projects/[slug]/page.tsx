import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";
import type { Metadata } from "next";
import DepthExperience, {
  DepthExperienceStatic,
} from "@/components/projects/DepthExperience";
import { resolveProjectDepthContent } from "@/data/depthContent";
import { Suspense } from "react";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const description = project.overview || project.description || "";
  return {
    title: `${project.title} — Case Study`,
    description,
    openGraph: {
      title: `${project.title} — Case Study | Ramana Sree K V`,
      description,
      url: `https://ramanasree.dev/projects/${project.slug}`,
      siteName: "AETHER_ENG",
      type: "article",
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  };
}

export default async function ProjectDeepDive({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const depthContent = resolveProjectDepthContent(project.slug);

  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-36 pb-[160px] relative overflow-hidden">
        {/* 1. HERO SECTION */}
        <section className="mb-16 md:mb-20" aria-label="Case Study Overview">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-mono text-[11px] text-primary uppercase tracking-widest font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              [ ENTERPRISE DEPLOYMENT // CASE STUDY ]
            </span>
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wider px-3 py-1 rounded border border-secondary/30 bg-secondary/10">
              {project.category}
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile md:text-[64px] md:leading-[72px] lg:text-display-hero text-on-background font-extrabold mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full border border-white/10 font-mono text-xs text-on-surface bg-surface/60 backdrop-blur-md"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Visual Display */}
          {project.heroImage && (
            <div className="w-full h-[380px] md:h-[580px] relative rounded-2xl overflow-hidden glass-panel-gradient border border-white/15 shadow-2xl group">
              <ImageWithFallback
                src={project.heroImage}
                fallbackSrc={media.placeholders.project}
                alt={`${project.title} Dashboard Overview`}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="font-mono text-xs text-on-surface">
                  SYSTEM_DASHBOARD // PRODUCTION_VIEW
                </span>
              </div>
            </div>
          )}
        </section>

        {/* 2. DEPTH EXPERIENCE */}
        <Suspense fallback={<DepthExperienceStatic content={depthContent} />}>
          <DepthExperience slug={project.slug} content={depthContent} />
        </Suspense>

        {/* 3. RELATED WORK & BACK NAVIGATION */}
        <section className="pt-20 border-t border-white/10" aria-label="Related Work Navigation">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Link
              prefetch={false}
              href="/projects"
              className="inline-flex items-center gap-3 font-mono text-mono-label text-on-surface hover:text-primary transition-colors text-xs uppercase group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform" aria-hidden="true">
                arrow_back
              </span>
              <span>Back to Deployments Catalog</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                prefetch={false}
                href="/research"
                className="inline-flex items-center gap-2 font-mono text-mono-label text-secondary hover:text-white transition-colors text-xs uppercase px-4 py-2 rounded border border-secondary/30 bg-secondary/10"
              >
                <span>View Related Research</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
              <Link
                prefetch={false}
                href="/journey/ibm"
                className="inline-flex items-center gap-2 font-mono text-mono-label text-primary hover:text-white transition-colors text-xs uppercase px-4 py-2 rounded border border-primary/30 bg-primary/10"
              >
                <span>Explore IBM Journey</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}