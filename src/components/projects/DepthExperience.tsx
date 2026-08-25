"use client";

import { useRouter, useSearchParams } from "next/navigation";
import TechnicalDepthSwitch from "@/components/ui/TechnicalDepthSwitch";
import DepthPanels from "@/components/projects/DepthPanels";
import { getClaimById } from "@/data/evidence";
import type { DepthLevel } from "@/data/knowledge";
import type { ProjectDepthContent } from "@/data/depthContent";

export function DepthExperienceStatic({
  content,
}: {
  content: ProjectDepthContent;
}) {
  return (
    <DepthExperienceBody
      content={content}
      active={content.defaultLevel}
      onSelect={() => {}}
    />
  );
}

function DepthExperienceBody({
  content,
  active,
  onSelect,
  openId,
}: {
  content: ProjectDepthContent;
  active: DepthLevel;
  onSelect: (level: DepthLevel) => void;
  openId?: string;
}) {
  const panelId = "depth-panel";
  const activeOption = content.levels.find(
    (option) => option.level === active
  );

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-white/10 py-6">
        <div>
          <span className="font-mono text-mono-label text-primary uppercase tracking-[0.2em] block mb-1">
            CONTENT DEPTH
          </span>
          <p className="font-mono text-mono-label text-on-surface-variant text-sm">
            {activeOption
              ? `${activeOption.label} // ${activeOption.descriptor}`
              : ""}
          </p>
        </div>
        <TechnicalDepthSwitch
          options={content.levels}
          active={active}
          onSelect={onSelect}
          panelId={panelId}
        />
      </div>

      <div
        key={`${active}-${openId ?? ""}`}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`depth-tab-${active}`}
        className="depth-enter"
      >
        <DepthPanels sections={content.sections[active]} openId={openId} />
      </div>
    </div>
  );
}

const DEPTH_ORDER: DepthLevel[] = ["executive", "engineering", "research"];

export default function DepthExperience({
  slug,
  content,
}: {
  slug: string;
  content: ProjectDepthContent;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawDepth = searchParams.get("depth");
  const rawEvidence = searchParams.get("evidence");

  const evidenceClaim = rawEvidence ? getClaimById(rawEvidence) : undefined;
  const isEvidenceForProject =
    evidenceClaim?.sourceEntityIds.includes(`project:${slug}`) ?? false;

  let active: DepthLevel;
  let openId: string | undefined;

  if (isEvidenceForProject && evidenceClaim) {
    const depthForClaim = DEPTH_ORDER.find((level) =>
      evidenceClaim.depths.includes(level)
    );
    active = depthForClaim ?? content.defaultLevel;
    openId = evidenceClaim.id;
  } else {
    active =
      (rawDepth === "executive" ||
        rawDepth === "engineering" ||
        rawDepth === "research") &&
      content.levels.some(
        (option) => option.level === rawDepth && !option.disabled
      )
        ? (rawDepth as DepthLevel)
        : content.defaultLevel;
  }

  const handleSelect = (level: DepthLevel) => {
    if (level === active) return;
    router.push(`/projects/${slug}?depth=${level}`, { scroll: false });
  };

  return (
    <DepthExperienceBody
      content={content}
      active={active}
      onSelect={handleSelect}
      openId={openId}
    />
  );
}