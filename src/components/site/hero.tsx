import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lock, Terminal } from "lucide-react";
import { MagneticLink, SplitWords } from "./primitives";
import { ParticleField } from "./atmosphere";

const FRAGMENTS = [
  "0xDEADBEEF",
  "AES-256-GCM",
  "sha256:9f2a…",
  "curl -sSL /etc/shadow",
  "nmap -sS -T4",
  "SIGINT::TRACE",
  "rsa-4096",
  "chmod 700 ./root",
];

function Ticker() {
  const items = [
    "SDF SUMMIT 2027",
    "3–5 JAN",
    "EROS HOTEL, NEHRU PLACE",
    "DIGITAL FORENSICS",
    "PAST CONFERENCES",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-border/70 py-3">
      <div className="flex w-max animate-marquee-slow">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {items.map((t) => (
              <span
                key={`${k}-${t}`}
                className="flex items-center gap-6 px-6 font-mono text-[11px] tracking-[0.24em] text-muted-foreground"
              >
                {t}
                <span className="h-1 w-1 rounded-full bg-primary/70" />
              </span>
            ))}
          </div>
        ))}
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => setMounted(true), []);

  return (
    <div
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Layered background */}
      <div aria-hidden className="absolute inset-0 bg-slate-50" />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-slate-200"
      />

      <motion.div
        style={reduced ? {} : { y, opacity, scale }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pt-32 pb-16 text-center"
      >
        {/* Hero heading */}
        <h1 className="max-w-6xl font-display font-medium tracking-[-0.05em]">
          {/* DIGITAL FORENSICS */}
          <span className="block whitespace-normal text-[clamp(2.1rem,9vw,6.5rem)] leading-[0.9] sm:whitespace-nowrap">
            <SplitWords
              text="DIGITAL FORENSICS"
              delay={0.25}
              stagger={0.08}
            />
          </span>

          {/* SOCIETY */}
          <span className="mt-2 block whitespace-normal text-[clamp(2.4rem,10vw,6.8rem)] leading-[0.9] text-glow text-accent sm:mt-0 sm:whitespace-nowrap">
            <SplitWords
              text="SOCIETY"
              delay={0.45}
              stagger={0.08}
            />
          </span>
        </h1>

        {/* Description */}
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
            duration: 1.2,
            delay: 0.75,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Securing tomorrow. A gathering of researchers, industry leaders,
          and policy-minded practitioners advancing critical conversations in
          digital evidence and security.
        </motion.p>

        {/* Buttons */}
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
            delay: 0.9,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-11 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <MagneticLink href="#join" className="w-full justify-center sm:w-auto">
            <Lock className="h-4 w-4" />
            Join Society
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </MagneticLink>

          <MagneticLink href="#past-conferences" variant="ghost" className="w-full justify-center sm:w-auto">
            <Terminal className="h-4 w-4 text-accent" />
            View past conferences
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Ticker />
      </div>
    </div>
  );
}