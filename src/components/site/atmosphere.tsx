import { useEffect, useRef, useState } from "react";

/* ---------------- Lenis smooth scroll ---------------- */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;

      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        const instance = new Lenis({ duration: 1.15, smoothWheel: true, lerp: 0.09 });
        lenis = instance;
        const loop = (time: number) => {
          instance.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      });
    };

    const idleTimer = window.setTimeout(start, 1000);

    return () => {
      cancelled = true;
      window.clearTimeout(idleTimer);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}

/* ---------------- Scroll progress ---------------- */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let frame = 0;

    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] bg-slate-200">
      <div
        className="h-full origin-left bg-slate-900"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/* ---------------- Custom cursor (disabled) ---------------- */
export function Cursor() {
  return null;
}

/* ---------------- Particle + grid canvas background ---------------- */
export function ParticleField({ className = "" }: { className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvas.current;
    if (!cvs) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -999, y: -999 };
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const resize = () => {
      w = cvs.offsetWidth;
      h = cvs.offsetHeight;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maxParticles = w < 768 ? 42 : w < 1280 ? 60 : 78;
      const count = Math.min(maxParticles, Math.round((w * h) / 22000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const r = cvs.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const near = d < 160;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + (near ? 0.6 : 0), 0, Math.PI * 2);
        ctx.fillStyle = near ? "rgba(13,148,110,0.38)" : "rgba(30,110,180,0.21)";
        ctx.fill();
      }

      const skipStep = pts.length > 60 ? 2 : 1;
      for (let i = 0; i < pts.length; i += skipStep) {
        const a = pts[i]!;
        for (let j = i + skipStep; j < pts.length; j += skipStep) {
          const b = pts[j]!;
          const d = Math.hypot(a.x - b.x, a.y - b.y);

          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(30,110,180,${0.08 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden className={`h-full w-full ${className}`} />;
}

/* ---------------- Mouse-follow glow ---------------- */
export function MouseGlow() {
  return null;
}
