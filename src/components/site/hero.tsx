// import { useEffect, useRef, useState } from "react";
// import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, Lock, Terminal } from "lucide-react";
// import Spline from "@splinetool/react-spline";
// import { MagneticLink, SplitWords } from "./primitives";
// import { ParticleField } from "./atmosphere";

// const splineScene = "https://prod.spline.design/lDiSr2UkDz7GShFR/scene.splinecode";

// function Ticker() {
//   const items = [
//     "ACCEPTING PAPERS FOR 2027",
//     "11.9 WG IFIP DIGITAL FORENSIC CONFERENCE",
//     "CALL FOR PAPERS NOW OPEN (OCT 10, 2026)",
//     "SUBMIT YOUR RESEARCH",
//   ];

//   return (
//     <div className="absolute inset-x-0 bottom-0 z-20 w-full overflow-hidden border-y border-white/20 bg-slate-950/75 py-3.5 text-white backdrop-blur-md">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950/75 to-transparent" />

//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950/75 to-transparent" />

//       <div className="w-max animate-marquee-slow">
//         <div className="flex shrink-0">
//           {[0, 1, 2, 3].map((k) => (
//             <div key={k} className="flex shrink-0">
//               {items.map((item) => (
//                 <span
//                   key={`${k}-${item}`}
//                   className="flex shrink-0 items-center gap-5 px-7 whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white sm:text-[11px]"
//                 >
//                   {item}

//                   <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Hero() {
//   const ref = useRef<HTMLDivElement>(null);
//   const reduced = useReducedMotion();
//   const [mounted, setMounted] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setMounted(!mediaQuery.matches);

//     const handler = (event: MediaQueryListEvent) => {
//       setMounted(!event.matches);
//     };

//     mediaQuery.addEventListener("change", handler);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, []);

//   return (
//     <section
//       id="top"
//       ref={ref}
//       className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950"
//     >
//       {splineScene.startsWith("https://") ? (
//         <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
//           <Spline scene={splineScene} className="h-full w-full" />
//         </div>
//       ) : null}

//       {/* Soft central glow */}
//       <div
//         aria-hidden
//         className="absolute left-1/2 top-[38%] z-[2] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.045] blur-3xl"
//       />

//       {/* Fine grid */}
//       <div
//         aria-hidden
//         className="absolute inset-0 z-[3] opacity-[0.32]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)
//           `,
//           backgroundSize: "72px 72px",
//         }}
//       />

//       {/* Atmospheric particles */}
//       {mounted && !reduced ? (
//         <div className="absolute inset-0 z-[4] opacity-40">
//           <ParticleField />
//         </div>
//       ) : null}

//       {/* Top border */}
//       <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/30" />

//       {/* Corner markers */}
//       <div
//         aria-hidden
//         className="absolute left-6 top-32 hidden h-10 w-10 border-l border-t border-white/50 sm:block"
//       />

//       <div
//         aria-hidden
//         className="absolute right-6 top-32 hidden h-10 w-10 border-r border-t border-white/50 sm:block"
//       />

//       {/* Keep the scene visible while giving the copy a consistent contrast backdrop. */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-x-0 top-1/2 z-[5] h-[min(78vh,52rem)] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.48)_0%,rgba(2,6,23,0.38)_38%,rgba(2,6,23,0.16)_62%,transparent_82%)]"
//       />

//       {/* Hero content */}
//       <motion.div
//         style={reduced ? {} : { y, opacity, scale }}
//         className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-32 text-center sm:pb-32"
//       >
//         {/* Main heading */}
//         <h1 className="w-full max-w-7xl font-display font-semibold tracking-[-0.045em] text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.95)]">
//           <span className="block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92]">
//             <SplitWords text="SOCIETY" delay={0.25} stagger={0.07} />
//           </span>

//           <span className="mt-2 block whitespace-nowrap text-[clamp(1.5rem,4.4vw,4.4rem)] leading-[0.92] text-white">
//             <SplitWords text="OF" delay={0.4} stagger={0.07} />
//           </span>

//           <span className="mt-2 block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92] text-white text-glow">
//             <SplitWords text="DIGITAL FORENSIC" delay={0.55} stagger={0.07} />
//           </span>
//         </h1>

//         {/* Supporting statement */}
//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 18,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.85,
//             ease: [0.19, 1, 0.22, 1],
//           }}
//           className="mt-8 max-w-2xl text-balance text-sm leading-relaxed text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.95)] sm:text-base md:text-lg"
//         >
//           Advancing the science of digital evidence through research, collaboration, education, and
//           meaningful dialogue across the global digital forensic community.
//         </motion.p>

//         {/* Buttons — unchanged */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 18,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//             delay: 1.1,
//             ease: [0.19, 1, 0.22, 1],
//           }}
//           className="mt-11 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center"
//         >
//           <MagneticLink
//             href="https://docs.google.com/forms/d/e/1FAIpQLSf3MpkGm82EpVyrk54oAECx9tFwtE7qN5hYJkHNsbl4jb8OEg/viewform"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full justify-center border border-white/30 shadow-lg shadow-black/20 sm:w-auto"
//           >
//             <Lock className="h-4 w-4" />
//             Join Society
//             <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
//           </MagneticLink>

//           <MagneticLink
//             href="#workshops"
//             variant="ghost"
//             className="w-full justify-center border border-white/45 bg-slate-950/65 text-white shadow-lg shadow-black/20 hover:border-white/75 hover:bg-slate-950/85 sm:w-auto"
//           >
//             <Terminal className="h-4 w-4 text-white" />
//             Learn More
//           </MagneticLink>
//         </motion.div>
//       </motion.div>

//       {/* Moving announcement bar — always at bottom */}
//       <Ticker />
//     </section>
//   );
// }




import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Lock, Terminal } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { MagneticLink, SplitWords } from "./primitives";

const splineScene =
  "https://prod.spline.design/lDiSr2UkDz7GShFR/scene.splinecode";

function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tickerRef);
  const items = [
    "ACCEPTING PAPERS FOR 2027",
    "11.9 WG IFIP DIGITAL FORENSIC CONFERENCE",
    "CALL FOR PAPERS NOW OPEN (OCT 10, 2026)",
    "SUBMIT YOUR RESEARCH",
  ];

  return (
    <div
      ref={tickerRef}
      className="absolute inset-x-0 bottom-0 z-20 w-full overflow-hidden border-y border-white/20 bg-slate-950/75 py-3.5 text-white backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950/75 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950/75 to-transparent" />

      <div
        className="w-max animate-marquee-slow"
        style={{ animationPlayState: isInView ? "running" : "paused" }}
      >
        <div className="flex shrink-0">
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex shrink-0">
              {items.map((item) => (
                <span
                  key={`${k}-${item}`}
                  className="flex shrink-0 items-center gap-5 whitespace-nowrap px-7 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white sm:text-[11px]"
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
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950"
    >
      {/* Zoomed Spline background */}
      {splineScene.startsWith("https://") ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            className="
              absolute left-1/2 top-1/2
              h-[135%] w-[135%]
              min-h-[135svh] min-w-[135vw]
              -translate-x-1/2 -translate-y-1/2
              scale-[1.7] sm:scale-[1.5] lg:scale-[1.35]
              origin-center
            "
          >
            <Spline
              scene={splineScene}
              className="h-full w-full"
            />
          </div>
        </div>
      ) : null}

      {/* Soft central glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] z-[2] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.045] blur-3xl"
      />

      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/30"
      />

      {/* Corner markers */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-32 hidden h-10 w-10 border-l border-t border-white/50 sm:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-6 top-32 hidden h-10 w-10 border-r border-t border-white/50 sm:block"
      />

      {/* Contrast backdrop for hero content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 z-[5] h-[min(78vh,52rem)] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.48)_0%,rgba(2,6,23,0.38)_38%,rgba(2,6,23,0.16)_62%,transparent_82%)]"
      />

      {/* Hero content */}
      <motion.div
        style={reduced ? {} : { y, opacity, scale }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-32 text-center sm:pb-32"
      >
        {/* Main heading */}
        <h1 className="w-full max-w-7xl font-display font-semibold tracking-[-0.045em] text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.95)]">
          <span className="block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92]">
            <SplitWords text="SOCIETY" delay={0.25} stagger={0.07} />
          </span>

          <span className="mt-2 block whitespace-nowrap text-[clamp(1.5rem,4.4vw,4.4rem)] leading-[0.92] text-white">
            <SplitWords text="OF" delay={0.4} stagger={0.07} />
          </span>

          <span className="mt-2 block whitespace-nowrap text-[clamp(2rem,6.5vw,6.4rem)] leading-[0.92] text-white text-glow">
            <SplitWords
              text="DIGITAL FORENSIC"
              delay={0.55}
              stagger={0.07}
            />
          </span>
        </h1>

        {/* Supporting statement */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.85,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-8 max-w-2xl text-balance text-sm leading-relaxed text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.95)] sm:text-base md:text-lg"
        >
          Advancing the science of digital evidence through research,
          collaboration, education, and meaningful dialogue across the
          global digital forensic community.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.1,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-11 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <MagneticLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3MpkGm82EpVyrk54oAECx9tFwtE7qN5hYJkHNsbl4jb8OEg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center border border-white/30 shadow-lg shadow-black/20 sm:w-auto"
          >
            <Lock className="h-4 w-4" />
            Join Society
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </MagneticLink>

          <MagneticLink
            href="#workshops"
            variant="ghost"
            className="w-full justify-center border border-white/45 bg-slate-950/65 text-white shadow-lg shadow-black/20 hover:border-white/75 hover:bg-slate-950/85 sm:w-auto"
          >
            <Terminal className="h-4 w-4 text-white" />
            Learn More
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Moving announcement bar */}
      <Ticker />
    </section>
  );
}
