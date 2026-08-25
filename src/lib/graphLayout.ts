import type {
  KnowledgeEntity,
  KnowledgeRelation,
} from "@/data/knowledge";

export interface NodePosition {
  x: number;
  y: number;
}

export interface GraphBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface GraphLayout {
  positions: Record<string, NodePosition>;
  bounds: GraphBounds;
  width: number;
  height: number;
}

/** Mulberry32 — small deterministic PRNG so layout is reproducible. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 1000;
const ITERATIONS = 320;

/**
 * Computes a stable, static layout for the knowledge graph.
 *
 * A seeded force-directed (Fruchterman–Reingold) simulation is run for a
 * FIXED number of iterations at call time and then discarded — there is no
 * continuous physics loop. Deterministic seeding means the same input data
 * always produces the same layout, so a page refresh preserves geometry.
 */
export function computeGraphLayout(
  entities: KnowledgeEntity[],
  relations: KnowledgeRelation[]
): GraphLayout {
  const count = entities.length;
  const area = CANVAS_WIDTH * CANVAS_HEIGHT;
  const k = 0.9 * Math.sqrt(area / Math.max(count, 1));

  const rand = mulberry32(1337);
  const positions: Record<string, NodePosition> = {};

  // Seed: place projects & publications near the center, technologies
  // pushed toward the outer ring, milestones between them.
  entities.forEach((entity) => {
    const angle = rand() * Math.PI * 2;
    let radius = 160 + rand() * 240;
    if (entity.type === "technology") radius = 340 + rand() * 180;
    if (entity.type === "milestone") radius = 260 + rand() * 140;
    if (entity.type === "project") radius = 70 + rand() * 130;
    positions[entity.id] = {
      x: CANVAS_WIDTH / 2 + Math.cos(angle) * radius,
      y: CANVAS_HEIGHT / 2 + Math.sin(angle) * radius,
    };
  });

  const indexById: Record<string, number> = {};
  entities.forEach((entity, i) => {
    indexById[entity.id] = i;
  });

  const edges = relations
    .map((relation) => ({
      source: indexById[relation.from],
      target: indexById[relation.to],
    }))
    .filter(
      (edge) => edge.source !== undefined && edge.target !== undefined
    );

  const cx = CANVAS_WIDTH / 2;
  const cy = CANVAS_HEIGHT / 2;
  let temperature = CANVAS_WIDTH / 8;

  for (let iteration = 0; iteration < ITERATIONS; iteration++) {
    // Repulsive displacement between all pairs.
    const dispX: number[] = new Array(count).fill(0);
    const dispY: number[] = new Array(count).fill(0);

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const a = positions[entities[i].id];
        const b = positions[entities[j].id];
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.01) {
          dx = (rand() - 0.5) * 0.1;
          dy = (rand() - 0.5) * 0.1;
          dist = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);
        }
        const force = (k * k) / dist;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        dispX[i] += fx;
        dispY[i] += fy;
        dispX[j] -= fx;
        dispY[j] -= fy;
      }
    }

    // Attractive displacement along relations.
    for (const edge of edges) {
      const a = positions[entities[edge.source].id];
      const b = positions[entities[edge.target].id];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);
      const force = (dist * dist) / k;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      dispX[edge.source] -= fx;
      dispY[edge.source] -= fy;
      dispX[edge.target] += fx;
      dispY[edge.target] += fy;
    }

    // Gentle pull toward the canvas center for overall cohesion.
    for (let i = 0; i < count; i++) {
      dispX[i] += (cx - positions[entities[i].id].x) * 0.04;
      dispY[i] += (cy - positions[entities[i].id].y) * 0.04;
    }

    // Apply displacement, capped by the cooling temperature.
    for (let i = 0; i < count; i++) {
      const entity = positions[entities[i].id];
      const dispLength = Math.sqrt(
        dispX[i] * dispX[i] + dispY[i] * dispY[i]
      );
      if (dispLength < 0.01) continue;
      const magnitude = Math.min(dispLength, temperature);
      entity.x += (dispX[i] / dispLength) * magnitude;
      entity.y += (dispY[i] / dispLength) * magnitude;

      // Keep nodes inside the canvas with soft clamping.
      entity.x = Math.max(60, Math.min(CANVAS_WIDTH - 60, entity.x));
      entity.y = Math.max(60, Math.min(CANVAS_HEIGHT - 60, entity.y));
    }

    temperature *= 0.965;
  }

  // Compute bounds for fit-to-view.
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const entity of entities) {
    const p = positions[entity.id];
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }
  if (!entities.length) {
    minX = 0;
    minY = 0;
    maxX = 1;
    maxY = 1;
  }

  return {
    positions,
    bounds: { minX, minY, maxX, maxY },
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  };
}
