"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  knowledgeEntities,
  knowledgeRelations,
  getEntityById,
  getRelationsFor,
  resolveEntityDetail,
  parseEntityIdParam,
  entityTypeLabel,
  KNOWLEDGE_ROUTE,
  KNOWLEDGE_FOCUS_EVENT,
  type EntityType,
  type KnowledgeEntity,
} from "@/data/knowledge";
import { computeGraphLayout } from "@/lib/graphLayout";
import { getClaimsForProjectDepth } from "@/data/evidence";
import { getRepositoryForProject } from "@/data/repositories";

const VB_W = 1400;
const VB_H = 1000;
const MIN_ZOOM = 0.35;
const MAX_ZOOM = 3;

const PROJECT_DEPTH_ACTIONS: { depth: string; label: string }[] = [
  { depth: "executive", label: "Executive Brief" },
  { depth: "engineering", label: "Engineering Dossier" },
  { depth: "research", label: "Research Notes" },
];

function ProjectEvidenceLink({ entityId }: { entityId: string }) {
  const slug = entityId.startsWith("project:")
    ? entityId.slice("project:".length)
    : null;
  const firstClaim = slug
    ? getClaimsForProjectDepth(slug, "executive")[0]
    : undefined;

  if (!slug || !firstClaim) return null;

  return (
    <Link
      prefetch={false}
      href={`/projects/${slug}?depth=executive&evidence=${firstClaim.id}`}
      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg border border-secondary/30 font-mono text-[10px] uppercase tracking-wider text-secondary hover:bg-secondary/10 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      Trace Evidence
    </Link>
  );
}

function ProjectRepositoryLink({ entityId }: { entityId: string }) {
  const slug = entityId.startsWith("project:")
    ? entityId.slice("project:".length)
    : null;
  const repository = slug ? getRepositoryForProject(slug) : undefined;

  if (!slug || !repository) return null;

  return (
    <a
      href={repository.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${repository.owner}/${repository.name} repository on GitHub`}
      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg border border-white/15 font-mono text-[10px] uppercase tracking-wider text-on-surface hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      Open Repository
    </a>
  );
}

interface ViewState {
  tx: number;
  ty: number;
  k: number;
}

const TYPE_FILLS: Record<EntityType, string> = {
  project: "#0f62fe",
  publication: "#4bd9e5",
  milestone: "#c6c6c7",
  technology: "#6e7070",
};

const TYPE_ORDER: EntityType[] = [
  "project",
  "publication",
  "milestone",
  "technology",
];

const clampZoom = (k: number): number =>
  Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, k));

function fitViewState(bounds: {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}): ViewState {
  const pad = 90;
  const bw = bounds.maxX - bounds.minX + pad * 2;
  const bh = bounds.maxY - bounds.minY + pad * 2;
  const k = clampZoom(Math.min(VB_W / bw, VB_H / bh));
  const cx = (bounds.minX + bounds.maxX) / 2;
  const cy = (bounds.minY + bounds.maxY) / 2;
  return { k, tx: VB_W / 2 - k * cx, ty: VB_H / 2 - k * cy };
}

function centerViewState(x: number, y: number, k: number): ViewState {
  return { k, tx: VB_W / 2 - k * x, ty: VB_H / 2 - k * y };
}

const truncate = (value: string, max: number): string =>
  value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;

const RELATION_LABELS: Record<string, string> = {
  uses: "uses",
  recognized_for: "recognized for",
};

function NodeShape({
  type,
  selected,
}: {
  type: EntityType;
  selected: boolean;
}) {
  const fill = TYPE_FILLS[type];
  const stroke = selected ? "#ffffff" : "rgba(255,255,255,0.35)";

  switch (type) {
    case "project":
      return (
        <rect
          x={-11}
          y={-11}
          width={22}
          height={22}
          rx={5}
          fill={fill}
          stroke={stroke}
          strokeWidth={selected ? 2 : 1}
        />
      );
    case "publication":
      return (
        <circle r={9} fill={fill} stroke={stroke} strokeWidth={selected ? 2 : 1} />
      );
    case "milestone":
      return (
        <circle r={7} fill={fill} stroke={stroke} strokeWidth={selected ? 2 : 1} />
      );
    case "technology":
      return (
        <circle r={4.5} fill={fill} stroke={stroke} strokeWidth={1} />
      );
  }
}

export default function KnowledgeGraphView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const layout = useMemo(
    () => computeGraphLayout(knowledgeEntities, knowledgeRelations),
    []
  );

  const initialEntityId = useMemo(
    () => parseEntityIdParam(searchParams.get("entity")),
    [searchParams]
  );

  const [view, setView] = useState<ViewState>(() => {
    if (initialEntityId) {
      const position = layout.positions[initialEntityId];
      if (position) return centerViewState(position.x, position.y, 1.2);
    }
    return fitViewState(layout.bounds);
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<Map<string, SVGGElement>>(new Map());
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartRef = useRef<{ dist: number; k: number } | null>(null);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    tx: number;
    ty: number;
    moved: boolean;
  } | null>(null);

  /* Selection is derived from the URL (`?entity=`) — deep-linkable and
     never duplicated in React state. */
  const selectedId = initialEntityId;

  const selectedEntity = selectedId ? getEntityById(selectedId) : undefined;
  const selectedDetail = selectedEntity
    ? resolveEntityDetail(selectedEntity)
    : undefined;

  const neighborIds = useMemo(() => {
    if (!selectedId) return new Set<string>();
    const set = new Set<string>();
    for (const relation of getRelationsFor(selectedId)) {
      set.add(relation.from === selectedId ? relation.to : relation.from);
    }
    return set;
  }, [selectedId]);

  const activeEdges = useMemo(() => {
    if (!selectedId) return new Set<number>();
    const set = new Set<number>();
    knowledgeRelations.forEach((relation, index) => {
      if (relation.from === selectedId || relation.to === selectedId) {
        set.add(index);
      }
    });
    return set;
  }, [selectedId]);

  /* ---------- view helpers ---------- */

  const meetMetrics = useCallback(() => {
    const container = containerRef.current;
    if (!container) return null;
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const scale = Math.min(rect.width / VB_W, rect.height / VB_H);
    const offsetX = (rect.width - VB_W * scale) / 2;
    const offsetY = (rect.height - VB_H * scale) / 2;
    return { rect, scale, offsetX, offsetY };
  }, []);

  const clientToView = useCallback(
    (clientX: number, clientY: number): { vx: number; vy: number } | null => {
      const metrics = meetMetrics();
      if (!metrics) return null;
      const { rect, scale, offsetX, offsetY } = metrics;
      return {
        vx: (clientX - rect.left - offsetX) / scale,
        vy: (clientY - rect.top - offsetY) / scale,
      };
    },
    [meetMetrics]
  );

  const fitView = useCallback(() => {
    setView(fitViewState(layout.bounds));
  }, [layout]);

  const resetView = useCallback(() => {
    setView({ tx: 0, ty: 0, k: 1 });
  }, []);

  /* ---------- selection ---------- */

  const selectEntity = useCallback(
    (entityId: string | null) => {
      const next = entityId
        ? `${KNOWLEDGE_ROUTE}?entity=${encodeURIComponent(entityId)}`
        : KNOWLEDGE_ROUTE;
      router.replace(next, { scroll: false });
      if (entityId) {
        const position = layout.positions[entityId];
        if (position) {
          setView((current) =>
            centerViewState(
              position.x,
              position.y,
              Math.max(current.k, 0.85)
            )
          );
        }
      }
    },
    [router, layout]
  );

  /* External focus requests (e.g. Command Center deep link while mounted). */
  useEffect(() => {
    const handleFocus = (event: Event) => {
      const entityId = (event as CustomEvent<string>).detail;
      if (!entityId) return;
      const position = layout.positions[entityId];
      if (position) {
        setView(centerViewState(position.x, position.y, 1.2));
      }
    };
    window.addEventListener(KNOWLEDGE_FOCUS_EVENT, handleFocus);
    return () =>
      window.removeEventListener(KNOWLEDGE_FOCUS_EVENT, handleFocus);
  }, [layout]);

  /* ---------- zoom ---------- */

  const zoomAt = useCallback((vx: number, vy: number, factor: number) => {
    setView((current) => {
      const k = clampZoom(current.k * factor);
      const wx = (vx - current.tx) / current.k;
      const wy = (vy - current.ty) / current.k;
      return { k, tx: vx - k * wx, ty: vy - k * wy };
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const point = clientToView(event.clientX, event.clientY);
      if (!point) return;
      zoomAt(point.vx, point.vy, event.deltaY < 0 ? 1.16 : 1 / 1.16);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [clientToView, zoomAt]);

  /* ---------- pan & pinch ---------- */

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg) return;
      svg.setPointerCapture(event.pointerId);
      pointersRef.current.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });

      if (pointersRef.current.size === 1) {
        dragRef.current = {
          startX: event.clientX,
          startY: event.clientY,
          tx: view.tx,
          ty: view.ty,
          moved: false,
        };
      }
      if (pointersRef.current.size === 2) {
        const [a, b] = Array.from(pointersRef.current.values());
        pinchStartRef.current = {
          dist: Math.hypot(a.x - b.x, a.y - b.y),
          k: view.k,
        };
        dragRef.current = null;
      }
    },
    [view]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<SVGSVGElement>) => {
      const entry = pointersRef.current.get(event.pointerId);
      if (!entry) return;
      entry.x = event.clientX;
      entry.y = event.clientY;

      if (pointersRef.current.size === 2 && pinchStartRef.current) {
        const pinchStart = pinchStartRef.current;
        const [a, b] = Array.from(pointersRef.current.values());
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const mid = clientToView((a.x + b.x) / 2, (a.y + b.y) / 2);
        if (mid && pinchStart.dist > 0) {
          const factor = dist / pinchStart.dist;
          setView((current) => {
            const targetK = clampZoom(pinchStart.k * factor);
            const wx = (mid.vx - current.tx) / current.k;
            const wy = (mid.vy - current.ty) / current.k;
            return { k: targetK, tx: mid.vx - targetK * wx, ty: mid.vy - targetK * wy };
          });
        }
        return;
      }

      const drag = dragRef.current;
      if (pointersRef.current.size === 1 && drag) {
        const metrics = meetMetrics();
        if (!metrics) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (Math.hypot(dx, dy) > 6) drag.moved = true;
        const { scale } = metrics;
        setView((current) => ({
          ...current,
          tx: drag.tx + dx / scale,
          ty: drag.ty + dy / scale,
        }));
      }
    },
    [clientToView, meetMetrics]
  );

  const releasePointer = useCallback((event: React.PointerEvent<SVGSVGElement>) => {
    pointersRef.current.delete(event.pointerId);
    if (pointersRef.current.size < 2) pinchStartRef.current = null;
    if (pointersRef.current.size === 0) {
      setTimeout(() => {
        if (dragRef.current) dragRef.current = null;
      }, 0);
    }
  }, []);

  const handleBackgroundClick = useCallback(() => {
    if (dragRef.current?.moved) return;
    if (selectedId) selectEntity(null);
  }, [selectedId, selectEntity]);

  /* ---------- keyboard navigation over nodes ---------- */

  const focusSibling = useCallback((entityId: string, direction: 1 | -1) => {
    const index = knowledgeEntities.findIndex(
      (entity) => entity.id === entityId
    );
    if (index < 0) return;
    const next =
      knowledgeEntities[
        (index + direction + knowledgeEntities.length) %
          knowledgeEntities.length
      ];
    nodeRefs.current.get(next.id)?.focus();
  }, []);

  const handleNodeKeyDown = useCallback(
    (event: React.KeyboardEvent<SVGGElement>, entityId: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectEntity(entityId);
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        focusSibling(entityId, 1);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        focusSibling(entityId, -1);
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        nodeRefs.current.get(knowledgeEntities[0].id)?.focus();
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        nodeRefs.current
          .get(knowledgeEntities[knowledgeEntities.length - 1].id)
          ?.focus();
      }
    },
    [selectEntity, focusSibling]
  );

  const handleContainerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" && selectedId) {
        selectEntity(null);
      }
    },
    [selectedId, selectEntity]
  );

  /* ---------- render helpers ---------- */

  const groupedIndex = useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: knowledgeEntities.filter((entity) => entity.type === type),
    })).filter((group) => group.items.length > 0);
  }, []);

  const connectedGroups = useMemo(() => {
    if (!selectedEntity) return [];
    const relations = getRelationsFor(selectedEntity.id);
    const byType: Partial<Record<EntityType, { entity: KnowledgeEntity; label: string }[]>> = {};
    for (const relation of relations) {
      const otherId =
        relation.from === selectedEntity.id ? relation.to : relation.from;
      const other = getEntityById(otherId);
      if (!other) continue;
      const directionLabel =
        relation.from === selectedEntity.id
          ? RELATION_LABELS[relation.relation]
          : relation.relation === "uses"
            ? "used by"
            : "recognition milestone";
      (byType[other.type] = byType[other.type] ?? []).push({
        entity: other,
        label: directionLabel,
      });
    }
    return TYPE_ORDER.filter((type) => byType[type]?.length).map((type) => ({
      type,
      items: byType[type] ?? [],
    }));
  }, [selectedEntity]);

  return (
    <div onKeyDown={handleContainerKeyDown} className="relative">
      {/* Legend / type chips */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4"
        role="list"
        aria-label="Graph legend"
      >
        {groupedIndex.map((group) => (
          <div
            key={group.type}
            role="listitem"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant"
          >
            <span
              aria-hidden="true"
              className={
                group.type === "project"
                  ? "w-3 h-3 rounded-[3px]"
                  : "w-3 h-3 rounded-full"
              }
              style={{ backgroundColor: TYPE_FILLS[group.type] }}
            />
            <span>
              {entityTypeLabel[group.type]} · {group.items.length}
            </span>
          </div>
        ))}
        <p className="w-full font-mono text-[10px] text-on-surface-variant/60 sm:w-auto sm:ml-auto">
          Drag to pan · Scroll to zoom · Select a node to inspect
        </p>
      </div>

      {/* Graph surface */}
      <div className="relative">
        <div
          ref={containerRef}
          className="graph-surface w-full aspect-[7/5] max-h-[680px] select-none"
          aria-label="Knowledge graph canvas"
        >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"
          role="presentation"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={releasePointer}
          onPointerCancel={releasePointer}
          onClick={handleBackgroundClick}
        >
          <g transform={`translate(${view.tx} ${view.ty}) scale(${view.k})`}>
            {/* Edges */}
            {knowledgeRelations.map((relation, index) => {
              const from = layout.positions[relation.from];
              const to = layout.positions[relation.to];
              if (!from || !to) return null;
              const isActive = activeEdges.has(index);
              const isDimmed = selectedId !== null && !isActive;
              return (
                <line
                  key={`${relation.from}-${relation.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  strokeWidth={isActive ? 2 : 1.2}
                  className={`graph-edge ${isActive ? "is-active" : ""} ${
                    isDimmed ? "is-dimmed" : ""
                  }`}
                />
              );
            })}

            {/* Nodes */}
            {knowledgeEntities.map((entity) => {
              const position = layout.positions[entity.id];
              if (!position) return null;
              const isSelected = entity.id === selectedId;
              const isNeighbor = neighborIds.has(entity.id);
              const isDimmed =
                selectedId !== null && !isSelected && !isNeighbor;
              const labelMax = entity.type === "technology" ? 20 : 26;
              const labelOffset =
                entity.type === "project" ? 24 : entity.type === "publication" ? 22 : 20;
              return (
                <g
                  key={entity.id}
                  ref={(node) => {
                    if (node) nodeRefs.current.set(entity.id, node);
                    else nodeRefs.current.delete(entity.id);
                  }}
                  transform={`translate(${position.x} ${position.y})`}
                  className={`graph-node ${isSelected ? "is-selected" : ""} ${
                    isDimmed ? "is-dimmed" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${entityTypeLabel[entity.type].toLowerCase()}: ${entity.title}${
                    entity.meta ? ` (${entity.meta})` : ""
                  }`}
                  aria-pressed={isSelected}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (dragRef.current?.moved) return;
                    selectEntity(entity.id);
                  }}
                  onKeyDown={(event) => handleNodeKeyDown(event, entity.id)}
                >
                  {isSelected && (
                    <circle
                      className="graph-node-ring"
                      r={20}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth={2}
                      opacity={0.9}
                    />
                  )}
                  {isNeighbor && (
                    <circle
                      r={17}
                      fill="none"
                      stroke="rgba(15,98,254,0.4)"
                      strokeWidth={1.5}
                    />
                  )}
                  <NodeShape type={entity.type} selected={isSelected} />
                  <text
                    className="graph-node-label"
                    textAnchor="middle"
                    y={labelOffset}
                    fontSize={entity.type === "technology" ? 11 : 12.5}
                    fontFamily="JetBrains Mono, monospace"
                    fill="var(--color-on-surface-variant)"
                  >
                    {truncate(entity.title, labelMax)}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Zoom / view controls */}
        <div
          className="absolute top-3 left-3 z-20 flex flex-col gap-2"
          role="group"
          aria-label="Graph view controls"
        >
          <button
            type="button"
            className="graph-control"
            aria-label="Zoom in"
            onClick={() => zoomAt(VB_W / 2, VB_H / 2, 1.25)}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              add
            </span>
          </button>
          <button
            type="button"
            className="graph-control"
            aria-label="Zoom out"
            onClick={() => zoomAt(VB_W / 2, VB_H / 2, 1 / 1.25)}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              remove
            </span>
          </button>
          <button
            type="button"
            className="graph-control"
            aria-label="Fit graph to view"
            onClick={fitView}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              fit_screen
            </span>
          </button>
          <button
            type="button"
            className="graph-control"
            aria-label="Reset view"
            onClick={resetView}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              restart_alt
            </span>
          </button>
        </div>
      </div>

      {/* Screen reader summary of current selection */}
      <p className="sr-only" role="status" aria-live="polite">
        {selectedEntity
          ? `Selected ${entityTypeLabel[
              selectedEntity.type
            ].toLowerCase()} ${selectedEntity.title}. ${
              neighborIds.size
            } connected ${neighborIds.size === 1 ? "entity" : "entities"}.`
          : "No entity selected."}
      </p>

      {/* Information panel — bottom sheet on mobile, side panel on desktop */}
      {selectedEntity && (
        <aside
          className="fixed inset-x-0 bottom-0 z-[60] max-h-[62vh] overflow-y-auto glass-panel rounded-t-2xl border-t border-white/15 p-6 lg:absolute lg:inset-auto lg:right-3 lg:top-3 lg:bottom-3 lg:z-20 lg:w-[340px] lg:max-h-none lg:rounded-xl lg:p-6 bg-surface-container-lowest/90"
          role="region"
          aria-label={`Details: ${selectedEntity.title}`}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded border font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-primary/30 bg-primary/10 whitespace-nowrap">
              <span
                aria-hidden="true"
                className={
                  selectedEntity.type === "project"
                    ? "w-2 h-2 rounded-[2px]"
                    : "w-2 h-2 rounded-full"
                }
                style={{ backgroundColor: TYPE_FILLS[selectedEntity.type] }}
              />
              {entityTypeLabel[selectedEntity.type]}
            </span>
            <button
              type="button"
              onClick={() => selectEntity(null)}
              className="graph-control shrink-0"
              aria-label="Close details panel"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                close
              </span>
            </button>
          </div>

          <h2 className="font-display text-headline-sm text-on-background mb-2">
            {selectedEntity.title}
          </h2>

          {selectedDetail?.meta && (
            <p className="font-mono text-mono-label text-secondary mb-4 uppercase tracking-wider">
              {selectedDetail.meta}
            </p>
          )}

          {selectedDetail?.description && (
            <p className="font-mono text-mono-label text-on-surface-variant text-sm leading-relaxed mb-6">
              {selectedDetail.description}
            </p>
          )}

          {connectedGroups.length > 0 && (
            <div className="mb-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-3">
                {"// Connected knowledge"}
              </h3>
              <div className="space-y-4">
                {connectedGroups.map((group) => (
                  <div key={group.type}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-1.5">
                      {entityTypeLabel[group.type]}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map(({ entity, label }) => (
                        <li key={entity.id}>
                          <button
                            type="button"
                            onClick={() => selectEntity(entity.id)}
                            className="w-full text-left font-mono text-mono-label text-sm text-on-surface hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          >
                            <span>{truncate(entity.title, 52)}</span>
                            <span className="block text-[10px] text-on-surface-variant/60 uppercase">
                              {label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedEntity.href && selectedDetail?.actionLabel && (
            <Link
              prefetch={false}
              href={selectedEntity.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-mono text-mono-label uppercase tracking-wider hover:bg-primary-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span>{selectedDetail.actionLabel}</span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          )}

          {selectedEntity.type === "project" && selectedEntity.href && (
            <div className="flex flex-wrap gap-2 mt-3">
              {PROJECT_DEPTH_ACTIONS.map((action) => (
                <Link
                  prefetch={false}
                  key={action.depth}
                  href={`${selectedEntity.href}?depth=${action.depth}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[10px] uppercase tracking-wider text-on-surface hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}

          {selectedEntity.type === "project" && (
            <div className="flex flex-col gap-0">
              <ProjectEvidenceLink entityId={selectedEntity.id} />
              <ProjectRepositoryLink entityId={selectedEntity.id} />
            </div>
          )}
        </aside>
      )}
      </div>

      {/* Accessible entity index (semantic fallback for the visual graph) */}
      <section className="mt-12" aria-label="Knowledge index">
        <h2 className="font-mono text-mono-label text-on-surface-variant uppercase tracking-[0.2em] mb-6">
          {"// Knowledge Index"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groupedIndex.map((group) => (
            <div key={group.type} className="glass-panel rounded-xl border border-white/10 p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={
                    group.type === "project"
                      ? "w-2.5 h-2.5 rounded-[3px]"
                      : "w-2.5 h-2.5 rounded-full"
                  }
                  style={{ backgroundColor: TYPE_FILLS[group.type] }}
                />
                {entityTypeLabel[group.type]}
              </h3>
              <ul className="space-y-2" role="list">
                {group.items.map((entity) => (
                  <li key={entity.id}>
                    <button
                      type="button"
                      onClick={() => {
                        selectEntity(entity.id);
                        containerRef.current?.scrollIntoView({
                          block: "nearest",
                          behavior: window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                          ).matches
                            ? "auto"
                            : "smooth",
                        });
                      }}
                      className="w-full text-left rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group py-1"
                    >
                      <span className="font-mono text-mono-label text-sm text-on-surface group-hover:text-primary transition-colors block">
                        {entity.title}
                      </span>
                      {entity.meta && (
                        <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase">
                          {entity.meta}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
