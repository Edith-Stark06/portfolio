import Link from "next/link";
import type { EngineeringClaim, EvidenceStatus } from "@/data/evidence";
import {
  evidenceStatusDescription,
  evidenceStatusLabel,
  getClaimProjectSlug,
  resolveClaimSources,
} from "@/data/evidence";

interface EvidenceTraceProps {
  claim: EngineeringClaim;
  defaultOpen?: boolean;
}

function statusBadgeClass(status: EvidenceStatus): string {
  switch (status) {
    case "verified":
      return "border-secondary/30 bg-secondary/10 text-secondary";
    case "project-reported":
      return "border-primary/30 bg-primary/10 text-primary";
    case "research-reported":
      return "border-on-surface/30 bg-on-surface/10 text-on-surface";
    case "unavailable":
      return "border-outline/40 bg-outline/10 text-outline";
  }
}

export default function EvidenceTrace({
  claim,
  defaultOpen = false,
}: EvidenceTraceProps) {
  const sources = resolveClaimSources(claim);
  const projectSlug = getClaimProjectSlug(claim);
  const canOpenDossier =
    projectSlug && claim.depths.includes("engineering");

  return (
    <details
      open={defaultOpen}
      className="group rounded-xl border border-white/10 bg-surface/40 backdrop-blur-md"
    >
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
        <div className="flex items-start sm:items-center gap-4 min-w-0">
          {claim.value && (
            <span className="font-display text-2xl md:text-[28px] font-bold leading-none text-on-background shrink-0">
              {claim.value}
            </span>
          )}
          <div className="min-w-0">
            <h3 className="font-mono text-xs md:text-sm text-on-background font-semibold uppercase tracking-wider">
              {claim.label}
            </h3>
            <span
              className={[
                "inline-block mt-1.5 px-2 py-0.5 rounded border font-mono text-[9px] uppercase tracking-widest",
                statusBadgeClass(claim.status),
              ].join(" ")}
            >
              {evidenceStatusLabel[claim.status]}
            </span>
          </div>
        </div>
        <span
          className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 group-open:rotate-180 shrink-0"
          aria-hidden="true"
        >
          expand_more
        </span>
      </summary>

      <div className="border-t border-white/10 px-5 md:px-6 py-5 md:py-6">
        <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed">
          {claim.context}
        </p>

        {claim.quote && (
          <blockquote className="mt-4 border-l-2 border-primary/40 pl-4 font-mono text-xs text-on-surface-variant/80 italic">
            &ldquo;{claim.quote}&rdquo;
          </blockquote>
        )}

        <div className="mt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1.5">
            Status &mdash; {evidenceStatusLabel[claim.status]}
          </p>
          <p className="font-mono text-xs text-on-surface-variant/80 leading-relaxed">
            {evidenceStatusDescription[claim.status]}
          </p>
        </div>

        {sources.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
              Sources
            </p>
            <ul className="space-y-1.5">
              {sources.map((source) => (
                <li key={source.entityId}>
                  {source.href ? (
                    <Link
                      prefetch={false}
                      href={source.href}
                      className="inline-flex items-center gap-2 font-mono text-xs text-on-surface hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span>{source.title}</span>
                      <span
                        className="material-symbols-outlined text-[14px]"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-on-surface-variant">
                      {source.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {canOpenDossier && (
          <Link
            prefetch={false}
            href={`/projects/${projectSlug}?depth=engineering`}
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 font-mono text-[11px] uppercase tracking-wider text-primary hover:bg-primary/20 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Open engineering dossier</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        )}
      </div>
    </details>
  );
}