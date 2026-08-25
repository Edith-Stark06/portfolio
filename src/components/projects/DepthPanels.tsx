import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import EvidenceTrace from "@/components/evidence/EvidenceTrace";
import { media } from "@/data/media";
import type { DepthSection } from "@/data/depthContent";

interface DepthPanelsProps {
  sections: DepthSection[];
  openId?: string;
}

export default function DepthPanels({ sections, openId }: DepthPanelsProps) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          className="py-16 md:py-24 border-t border-white/10"
          aria-label={section.title}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-2">
                {section.eyebrow}
              </span>
              <h2 className="font-display text-headline-md md:text-headline-lg text-on-background font-bold sticky top-32">
                {section.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={[
                        "font-mono text-mono-label text-on-surface-variant text-sm md:text-base leading-relaxed",
                        index > 0 ? "mt-4" : "",
                      ].join(" ")}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.variant !== "gallery" &&
                section.images &&
                section.images.length > 0 && (
                  <div
                    key={section.images[0].src}
                    className="w-full h-[280px] md:h-[420px] glass-panel-gradient rounded-2xl border border-white/15 relative overflow-hidden mt-8"
                  >
                    <ImageWithFallback
                      src={section.images[0].src}
                      fallbackSrc={media.placeholders.project}
                      alt={section.images[0].alt}
                      fill
                      className={
                        section.images[0].contain
                          ? "object-contain p-6"
                          : "object-cover"
                      }
                    />
                    {section.images[0].caption && (
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-1.5 rounded border border-white/10">
                        <span className="font-mono text-xs text-on-surface">
                          {section.images[0].caption}
                        </span>
                      </div>
                    )}
                  </div>
                )}

              {renderItems(section, openId)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function renderItems(section: DepthSection, openId?: string) {
  if (section.variant === "evidence") {
    return (
      <div className="grid grid-cols-1 gap-4">
        {section.claims?.map((claim) => (
          <EvidenceTrace
            key={claim.id}
            claim={claim}
            defaultOpen={claim.id === openId}
          />
        ))}
      </div>
    );
  }

  if (section.variant === "repository" && section.repository) {
    const repo = section.repository;
    return (
      <div className="glass-panel p-8 rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-1.5">
              owner/name
            </span>
            <h3 className="font-mono text-sm md:text-base text-on-background break-all font-semibold">
              {repo.owner}/{repo.name}
            </h3>
          </div>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${repo.owner}/${repo.name} repository on GitHub`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 bg-primary/10 text-primary font-mono text-[11px] uppercase tracking-wider hover:bg-primary hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary shrink-0"
          >
            Open repository
            <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
        {repo.description && (
          <p className="font-mono text-xs text-on-surface-variant leading-relaxed mt-4">
            {repo.description}
          </p>
        )}
        {repo.note && (
          <p className="font-mono text-[11px] text-on-surface-variant/80 leading-relaxed mt-3">
            {repo.note}
          </p>
        )}
        {(repo.language || (repo.topics && repo.topics.length > 0)) && (
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-5 border-t border-white/5 font-mono text-xs">
            {repo.language && (
              <div>
                <dt className="text-primary block mb-1 uppercase text-[10px]">
                  Language
                </dt>
                <dd className="text-on-surface-variant">{repo.language}</dd>
              </div>
            )}
            {repo.topics && repo.topics.length > 0 && (
              <div>
                <dt className="text-primary block mb-1 uppercase text-[10px]">
                  Topics
                </dt>
                <dd className="text-on-surface-variant">
                  {repo.topics.join(" · ")}
                </dd>
              </div>
            )}
          </dl>
        )}
      </div>
    );
  }

  if (!section.items || section.items.length === 0) return null;

  switch (section.variant) {
    case "metric":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-colors"
              role="listitem"
            >
              <span
                className="text-secondary text-3xl font-bold font-display block mb-4"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <p className="font-mono text-mono-label text-on-surface text-sm font-semibold leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-primary font-bold block mb-2">
                  {item.label}
                </span>
                <h3 className="font-display text-body-md text-on-background font-bold mb-2">
                  {item.text}
                </h3>
              </div>
              <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed mt-4">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      );

    case "cards":
      return (
        <div className="grid grid-cols-1 gap-6">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-secondary/40 transition-colors"
            >
              {item.fields ? (
                <>
                  <div className="flex items-center justify-between gap-6 mb-4">
                    <span className="font-mono text-mono-label text-secondary font-bold text-xs uppercase shrink-0">
                      {item.label}
                    </span>
                    <span className="font-display text-headline-sm text-on-background font-bold text-right">
                      {item.text}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
                    {item.fields.map((field) => (
                      <div key={field.caption}>
                        <strong className="text-primary block mb-1 uppercase text-[10px]">
                          {field.caption}:
                        </strong>
                        <p className="text-on-surface-variant leading-relaxed">
                          {field.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : item.body ? (
                <>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-2">
                    {item.label}
                  </span>
                  <h3 className="font-display text-headline-sm text-on-background font-bold mb-3">
                    {item.text}
                  </h3>
                  <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                    {item.body}
                  </p>
                </>
              ) : (
                <>
                  <strong className="text-secondary uppercase tracking-wider block mb-2">
                    {item.label}
                  </strong>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {item.text}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="space-y-3" role="list">
          {section.items.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link
                  prefetch={false}
                  href={item.href}
                  className="glass-panel block p-6 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors group"
                >
                  <p className="font-display text-body-md text-on-background font-bold mb-1 group-hover:text-secondary transition-colors">
                    {item.text}
                  </p>
                  {item.body && (
                    <p className="font-mono text-xs text-on-surface-variant">
                      {item.body}
                    </p>
                  )}
                </Link>
              ) : (
                <div className="glass-panel p-6 rounded-xl border border-white/10">
                  <p className="font-display text-body-md text-on-background font-bold mb-1">
                    {item.text}
                  </p>
                  {item.body && (
                    <p className="font-mono text-xs text-on-surface-variant">
                      {item.body}
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      );

    case "gallery":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {section.images?.map((image, index) => (
            <div
              key={index}
              className="aspect-[16/10] rounded-xl overflow-hidden glass-panel border border-white/10 relative"
            >
              <ImageWithFallback
                src={image.src}
                fallbackSrc={media.placeholders.project}
                alt={image.alt}
                fill
                className={image.contain ? "object-contain p-2" : "object-cover"}
              />
              {image.caption && (
                <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded">
                  <span className="font-mono text-[10px] text-on-surface-variant">
                    {image.caption}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}