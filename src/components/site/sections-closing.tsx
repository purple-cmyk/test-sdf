import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Minus,
  Plus,
  Twitter,
} from "lucide-react";
import { MagneticLink, Reveal, Section, SectionHeading } from "./primitives";
import { sponsors, testimonials } from "./data";

/* ---------------------- SECTION 08 — SPONSORS ------------------------- */
export function Sponsors() {
  return (
    <Section id="sponsors" className="border-y border-border/60 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow text-center">Backed by teams who ship security</p>
      </Reveal>
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {sponsors.map((s) => (
                <span
                  key={`${k}-${s}`}
                  className="group px-10 font-display text-[clamp(1.1rem,2.4vw,1.9rem)] font-medium tracking-[-0.03em] text-muted-foreground/50 transition-all duration-500 hover:text-foreground hover:[text-shadow:0_0_28px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
                >
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- SECTION 09 — TESTIMONIALS ----------------------- */
export function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <Section id="testimonials">
      <SectionHeading index="" eyebrow="" title="What members say." align="center" />
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-5 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="glass w-[86vw] shrink-0 rounded-sm p-8 transition-transform duration-700 ease-[var(--ease-luxe)] hover:-translate-y-2 sm:w-[420px]"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-border/70 pt-5">
                <p className="font-display text-sm font-medium tracking-tight">{t.name}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  {t.role.toUpperCase()}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------ SECTION 10 — JOIN --------------------------- */
export function Join() {
  return (
    <section id="join" className="relative overflow-hidden border-y border-border/60">
      <div aria-hidden className="absolute inset-0 mesh opacity-65" />
      <div
        aria-hidden
        className="absolute inset-0 cyber-grid opacity-35 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
      />
      <div aria-hidden className="absolute inset-0 noise-overlay" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-32 text-center md:py-44">
        <Reveal>
          <span className="eyebrow" aria-hidden="true"> </span>
        </Reveal>
        <h2 className="mt-7 font-display text-[clamp(2.4rem,7.4vw,5.6rem)] leading-[0.92] font-medium tracking-[-0.05em]">
          Become one of us.
        </h2>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Support our mission to advance digital forensic research, strengthen professional practice, and inspire the next generation of investigators, analysts, and public-interest practitioners.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/membership"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#111827] px-7 py-3.5 font-sans text-sm font-medium tracking-tight text-white transition-colors duration-300 hover:bg-[#1f2937]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Support Our Mission
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)] transition-transform duration-[1100ms] ease-[var(--ease-luxe)] group-hover:translate-x-full" />
            </Link>
            <MagneticLink href="mailto:hello@cybersecuritysociety.org" variant="ghost">
              <Mail className="h-4 w-4 text-accent" /> Contact the board
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- SECTION 11 — FAQ --------------------------- */
// Temporarily disabled: kept for future reuse.
// export function Faq() {
//   const [open, setOpen] = useState<number | null>(0);
//   return (
//     <Section id="faq">
//       <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
//         <SectionHeading index="" eyebrow="" title="Answers, before you ask." />
//         <ul className="flex flex-col">
//           {faqs.map((f, i) => {
//             const isOpen = open === i;
//             return (
//               <li key={f.q} className="border-b border-border">
//                 <h3>
//                   <button
//                     type="button"
//                     onClick={() => setOpen(isOpen ? null : i)}
//                     aria-expanded={isOpen}
//                     className="group flex w-full items-center justify-between gap-6 py-6 text-left"
//                   >
//                     <span className="font-display text-lg leading-snug font-medium tracking-tight transition-colors duration-500 group-hover:text-primary md:text-xl">
//                       {f.q}
//                     </span>
//                     <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-colors duration-500 group-hover:border-primary/60 group-hover:text-primary">
//                       {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
//                     </span>
//                   </button>
//                 </h3>
//                 <AnimatePresence initial={false}>
//                   {isOpen ? (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
//                       className="overflow-hidden"
//                     >
//                       <p className="max-w-xl pb-7 text-sm leading-relaxed text-muted-foreground">
//                         {f.a}
//                       </p>
//                     </motion.div>
//                   ) : null}
//                 </AnimatePresence>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </Section>
//   );
// }

/* ------------------------ SECTION 12 — FOOTER ------------------------- */
export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
        <div className="flex items-center gap-2.5">
          <img
            src="/sdf.webp"
            alt="SDF logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-border/70"
          />
          <span className="font-display text-base font-medium tracking-tight">
            Society of Digital Forensic
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Securing tomorrow. Empowering innovators.
        </p>

        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} @SDF 2026 | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

