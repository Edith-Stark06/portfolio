"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface BentoCardProps {
  project: Project;
}

export default function BentoCard({ project }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Link
      prefetch={false}
      href={`/projects/${project.slug}`}
      className={`col-span-1 ${project.colSpan} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-xl`}
      aria-label={`View project: ${project.title}`}
    >
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`bento-card rounded-xl p-8 md:p-12 ${project.minHeight} flex flex-col justify-between group cursor-pointer h-full`}
      >
        <div className="spotlight-overlay" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 rounded-full border border-outline-variant font-mono text-mono-label text-outline bg-surface-container-low/50">
              {project.category}
            </span>
            <span
              className="material-symbols-outlined text-primary-container opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              arrow_outward
            </span>
          </div>
          <div>
            <h3 className="font-display text-headline-md text-on-background max-w-3xl mb-4 group-hover:text-primary group-focus-visible:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            {project.description && (
              <p className="font-body text-body-md text-on-surface-variant mb-8">
                {project.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="font-mono text-mono-label text-tertiary-fixed-dim">
                    {tech}
                  </span>
                  {i < project.techStack.length - 1 && (
                    <span
                      className="font-mono text-mono-label text-outline-variant"
                      aria-hidden="true"
                    >
                      {"//"}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
