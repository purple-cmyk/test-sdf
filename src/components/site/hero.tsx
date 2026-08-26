import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Lock, Terminal } from "lucide-react";
import { MagneticLink, SplitWords } from "./primitives";
import { ParticleField } from "./atmosphere";

function Ticker() {
  const items = [
    "ACCEPTING PAPERS FOR 2027",
    "11.9 IFIP DIGITAL FORENSIC CONFERENCE",
    "CALL FOR PAPERS NOW OPEN",
    "SUBMIT YOUR RESEARCH",
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 w-full overflow-hidden border-y border-slate-200/80 bg-white/70 py-3.5 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="w-max animate-marquee-slow">
        <div className="flex shrink-0">
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex shrink-0">
              {items.map((item) => (
                <span
                  key={`${k}-${item}`}
                  className="flex shrink-0 items-center gap-5 px-7 whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-[11px]"
                >
                  {item}

                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-slate-50"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.95),rgba(248,250,252,0.85)_45%,rgba(241,245,249,1)_100%)]"
      />

      {/* Soft central glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.045] blur-3xl"
      />

      {/* Fine grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Atmospheric particles */}
      {mounted && !reduced ? (
        <div className="absolute inset-0 opacity-40">
          <ParticleField />
        </div>
      ) : null}

      {/* Top border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-slate-200"
      />

      {/* Corner markers */}
      <div
        aria-hidden
        className="absolute left-6 top-32 hidden h-10 w-10 border-l border-t border-slate-300/70 sm:block"
      />

      <div
        aria-hidden
        className="absolute right-6 top-32 hidden h-10 w-10 border-r border-t border-slate-300/70 sm:block"
      />

      {/* Hero content */}
      <motion.div
        style={reduced ? {} : { y, opacity, scale }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-32 text-center sm:pb-32"
      >
        {/* Main heading */}
        <h1 className="w-full max-w-7xl font-display font-medium tracking-[-0.045em]">
          <span className="block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92]">
            <SplitWords text="SOCIETY" delay={0.25} stagger={0.07} />
          </span>

          <span className="mt-2 block whitespace-nowrap text-[clamp(1.5rem,4.4vw,4.4rem)] leading-[0.92] text-slate-900">
            <SplitWords text="FOR" delay={0.4} stagger={0.07} />
          </span>

          <span className="mt-2 block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92] text-accent text-glow">
            <SplitWords text="DIGITAL FORENSIC" delay={0.55} stagger={0.07} />
          </span>
        </h1>

        {/* Supporting statement */}
        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.1,
            delay: 0.85,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-8 max-w-2xl text-balance text-sm leading-relaxed text-slate-500 sm:text-base md:text-lg"
        >
          Advancing the science of digital evidence through research,
          collaboration, education, and meaningful dialogue across the global
          digital forensic community.
        </motion.p>

        {/* Buttons — unchanged */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-11 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <MagneticLink
            href="#join"
            className="w-full justify-center sm:w-auto"
          >
            <Lock className="h-4 w-4" />
            Join Society
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </MagneticLink>

          <MagneticLink
            href="#workshops"
            variant="ghost"
            className="w-full justify-center sm:w-auto"
          >
            <Terminal className="h-4 w-4 text-accent" />
            Learn More
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Moving announcement bar — always at bottom */}
      <Ticker />
    </section>
  );
}