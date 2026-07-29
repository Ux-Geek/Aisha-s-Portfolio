import React, { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";

const CREATIVE_ICONS = [
  { id: "linkedin", src: "https://cdn.simpleicons.org/linkedin/0A66C2", size: 52 },
  { id: "x", src: "https://cdn.simpleicons.org/x", size: 52 },
  { id: "youtube", src: "https://cdn.simpleicons.org/youtube/FF0000", size: 52 },
  { id: "facebook", src: "https://cdn.simpleicons.org/facebook/1877F2", size: 52 },
  { id: "instagram", src: "https://cdn.simpleicons.org/instagram/E4405F", size: 52 },
  { id: "tiktok", src: "https://cdn.simpleicons.org/tiktok", size: 52 },
  { id: "canva", src: "https://cdn.simpleicons.org/canva/00C4CC", size: 52 },
  { id: "capcut", src: "/images/capcut_logo.png", size: 52 },
];

interface IconBody {
  id: string;
  body: Matter.Body;
  size: number;
}

export const CreativeToolkit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const iconBodiesRef = useRef<IconBody[]>([]);
  const [bodies, setBodies] = useState<
    { id: string; x: number; y: number; angle: number; size: number }[]
  >([]);
  const rafRef = useRef<number>(0);

  // Manual drag state — avoids any canvas overlay
  const dragRef = useRef<{
    body: Matter.Body | null;
    constraint: Matter.Constraint | null;
  }>({ body: null, constraint: null });

  const syncDOM = useCallback(() => {
    const updated = iconBodiesRef.current.map((b) => ({
      id: b.id,
      x: b.body.position.x,
      y: b.body.position.y,
      angle: b.body.angle,
      size: b.size,
    }));
    setBodies(updated);
    rafRef.current = requestAnimationFrame(syncDOM);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, Runner, Bodies, Composite, Body, Query, Constraint } = Matter;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const engine = Engine.create({ gravity: { x: 0, y: 1.8, scale: 0.001 } });
    engineRef.current = engine;

    const wallThickness = 60;
    const floor = Bodies.rectangle(width / 2, height + wallThickness / 2, width + 100, wallThickness, { isStatic: true, restitution: 0.4, friction: 0.8 });
    const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true, restitution: 0.3 });
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true, restitution: 0.3 });
    Composite.add(engine.world, [floor, leftWall, rightWall]);

    const iconBodies: IconBody[] = CREATIVE_ICONS.map((icon, i) => {
      const radius = icon.size / 2;
      const x = (width / (CREATIVE_ICONS.length + 1)) * (i + 1) + (Math.random() - 0.5) * 60;
      const y = -40 - i * 70;
      const body = Bodies.circle(x, y, radius, {
        restitution: 0.5,
        friction: 0.4,
        frictionAir: 0.008,
        density: 0.003,
        label: icon.id,
      });
      return { id: icon.id, body, size: icon.size };
    });

    Composite.add(engine.world, iconBodies.map((b) => b.body));
    iconBodiesRef.current = iconBodies;

    // ---- Manual mouse drag — NO canvas, no scroll blocking ----
    const getRelativePos = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e && e.touches.length > 0 ? e.touches[0].clientX : ('clientX' in e ? e.clientX : 0);
      const clientY = 'touches' in e && e.touches.length > 0 ? e.touches[0].clientY : ('clientY' in e ? e.clientY : 0);
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    let dragConstraint: Matter.Constraint | null = null;
    let dragBody: Matter.Body | null = null;
    let prevPos = { x: 0, y: 0 };
    let prevTime = 0;
    let velX = 0;
    let velY = 0;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      const pos = getRelativePos(e);
      const hit = Query.point(iconBodiesRef.current.map(b => b.body), pos);
      if (hit.length === 0) return;
      dragBody = hit[0];
      dragConstraint = Constraint.create({
        pointA: pos,
        bodyB: dragBody,
        pointB: { x: pos.x - dragBody.position.x, y: pos.y - dragBody.position.y },
        stiffness: 0.2,
        damping: 0,
        render: { visible: false },
      });
      Composite.add(engine.world, dragConstraint);
      dragRef.current = { body: dragBody, constraint: dragConstraint };
      prevPos = pos;
      prevTime = Date.now();
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!dragConstraint) return;
      const pos = getRelativePos(e);
      const now = Date.now();
      const dt = now - prevTime;
      if (dt > 0) {
        velX = (pos.x - prevPos.x) / dt;
        velY = (pos.y - prevPos.y) / dt;
      }
      prevPos = pos;
      prevTime = now;
      dragConstraint.pointA = pos;
    };

    const onMouseUp = () => {
      if (!dragConstraint || !dragBody) return;
      Composite.remove(engine.world, dragConstraint);
      // fling on release
      Body.setVelocity(dragBody, { x: velX * 12, y: velY * 12 });
      dragConstraint = null;
      dragBody = null;
      dragRef.current = { body: null, constraint: null };
    };

    // Use capture=false, passive=true so browser scroll is never blocked
    container.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    container.addEventListener("touchstart", onMouseDown, { passive: true });
    window.addEventListener("touchmove", onMouseMove, { passive: true });
    window.addEventListener("touchend", onMouseUp, { passive: true });

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    rafRef.current = requestAnimationFrame(syncDOM);

    return () => {
      cancelAnimationFrame(rafRef.current);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(engine.world, false);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onMouseDown);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [syncDOM]);

  const iconMap: Record<string, string> = {};
  CREATIVE_ICONS.forEach((icon) => { iconMap[icon.id] = icon.src; });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden select-none bg-transparent w-full h-full z-0"
      style={{ cursor: "default", pointerEvents: "none" }}
    >
      {/* Icon DOM nodes — pointer events auto so mousedown registers on the container */}
      {bodies.map((b) => (
        <div
          key={b.id}
          className="absolute drop-shadow-md bg-white rounded-full border border-neutral-100 flex items-center justify-center"
          style={{
            width: b.size,
            height: b.size,
            left: b.x - b.size / 2,
            top: b.y - b.size / 2,
            transform: `rotate(${b.angle}rad)`,
            willChange: "transform, left, top",
            pointerEvents: "auto",
            cursor: "grab",
            padding: 8,
            touchAction: "none",
          }}
        >
          <img
            src={iconMap[b.id]}
            alt={b.id}
            width={b.size - 16}
            height={b.size - 16}
            draggable={false}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      ))}
    </div>
  );
};
