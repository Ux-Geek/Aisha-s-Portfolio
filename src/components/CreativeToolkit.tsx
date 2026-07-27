"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";

const CREATIVE_ICONS = [
  { id: "reddit", src: "https://cdn.simpleicons.org/reddit/FF4500", size: 52 },
  { id: "linkedin", src: "https://cdn.simpleicons.org/linkedin/0A66C2", size: 52 },
  { id: "x", src: "https://cdn.simpleicons.org/x", size: 52 },
  { id: "youtube", src: "https://cdn.simpleicons.org/youtube/FF0000", size: 52 },
  { id: "facebook", src: "https://cdn.simpleicons.org/facebook/1877F2", size: 52 },
  { id: "discord", src: "https://cdn.simpleicons.org/discord/5865F2", size: 52 },
  { id: "instagram", src: "https://cdn.simpleicons.org/instagram/E4405F", size: 52 },
  { id: "tiktok", src: "https://cdn.simpleicons.org/tiktok", size: 52 },
  { id: "canva", src: "https://cdn.simpleicons.org/canva/00C4CC", size: 52 },
  { id: "figma", src: "https://cdn.simpleicons.org/figma/F24E1E", size: 52 }
];

interface IconBody {
  id: string;
  body: Matter.Body;
  size: number;
}

export const CreativeToolkit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const iconBodiesRef = useRef<IconBody[]>([]);
  const [bodies, setBodies] = useState<{ id: string; x: number; y: number; angle: number; size: number }[]>([]);
  const rafRef = useRef<number>(0);

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

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Engine
    const engine = Engine.create({
      gravity: { x: 0, y: 1.8, scale: 0.001 },
    });
    engineRef.current = engine;

    // Walls — floor, left, right (no ceiling so they fall in)
    const wallThickness = 60;
    const floor = Bodies.rectangle(width / 2, height + wallThickness / 2, width + 100, wallThickness, { isStatic: true, restitution: 0.3, friction: 0.8 });
    const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true, restitution: 0.3 });
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true, restitution: 0.3 });
    Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Icon bodies — circle colliders, staggered drop
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

    // Mouse interaction
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;

      const mouse = Mouse.create(canvas);
      mouse.pixelRatio = 1;

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });
      Composite.add(engine.world, mouseConstraint);

      // Throw velocity on drag end
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Events.on(mouseConstraint, "enddrag", (e: any) => {
        const body = e.body as Matter.Body;
        if (body) {
          Matter.Body.setVelocity(body, {
            x: body.velocity.x * 3,
            y: body.velocity.y * 3,
          });
        }
      });
    }

    // Runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Sync physics → DOM
    rafRef.current = requestAnimationFrame(syncDOM);

    return () => {
      cancelAnimationFrame(rafRef.current);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(engine.world, false);
    };
  }, [syncDOM]);

  const iconMap: Record<string, string> = {};
  CREATIVE_ICONS.forEach((icon) => {
    iconMap[icon.id] = icon.src;
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none bg-transparent w-full"
      style={{ height: 280, touchAction: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ cursor: "grab" }}
      />
      {bodies.map((b) => (
        <div
          key={b.id}
          className="absolute pointer-events-none drop-shadow-md bg-white p-2 rounded-full border border-neutral-100 flex items-center justify-center"
          style={{
            width: b.size,
            height: b.size,
            left: b.x - b.size / 2,
            top: b.y - b.size / 2,
            transform: `rotate(${b.angle}rad)`,
            willChange: "transform, left, top",
          }}
        >
          <img src={iconMap[b.id]} alt={b.id} width={b.size - 16} height={b.size - 16} className="w-full h-full object-contain pointer-events-none" />
        </div>
      ))}
    </div>
  );
};
