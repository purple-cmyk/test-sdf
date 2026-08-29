import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Twitter, X, Zap } from "lucide-react";
import {
  MagneticLink,
  Reveal,
  Section,
  SectionHeading,
  Tilt,
} from "./primitives";
import { gallery, speakers, workshops } from "./data";

/* --------------------- SECTION 04 — HIGHLIGHTS ------------------------ */
export function Highlights() {
  const [active, setActive] = useState<number | null>(null);

  const spans = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-1",
    "md:col-span-1",
  ];

  return (
    <Section id="highlights" className="border-t border-border/60">
      <SectionHeading
        index="04"
        eyebrow="Highlights"
        title="Moments from the gathering."
        description="Every frame from the last edition — keynotes, conversations, and the research moments that shaped the room."
      />

      <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-3 md:grid-cols-3 lg:auto-rows-[260px] lg:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 4) * 0.07}
            className={spans[i] ?? ""}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open ${g.title} fullscreen`}
              className="group relative h-full w-full overflow-hidden rounded-sm border border-border text-left"
            >
              <img
                src={g.src}
                alt={`${g.title}, ${g.location} ${g.year}`}
                loading="lazy"
                width={1400}
                height={1000}
                className="h-full w-full object-cover brightness-[0.75] drop-shadow-none transition-[transform,filter] duration-[1300ms] ease-[var(--ease-luxe)] group-hover:scale-[1.09] group-hover:brightness-100"
              />

              <span className="absolute inset-0 border border-primary/0 transition-colors duration-700 group-hover:border-primary/40" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/88 p-6 backdrop-blur-lg"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active]?.title}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close preview"
              className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-border text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <motion.figure
              initial={{ scale: 0.94, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="max-h-[82vh] w-[min(94vw,1100px)] overflow-hidden rounded-sm border border-border"
            >
              <img
                src={gallery[active]!.src}
                alt={gallery[active]!.title}
                className="max-h-[70vh] w-full object-cover"
              />

              <figcaption className="glass px-5 py-4">
                <span className="font-display text-sm">
                  {gallery[active]!.title}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

/* ---------------------- SECTION 05 — SPEAKERS ------------------------- */
const accentRing = {
  primary:
    "group-hover:border-primary/60 group-hover:shadow-[var(--glow-primary)]",
  accent:
    "group-hover:border-accent/60 group-hover:shadow-[var(--glow-accent)]",
  violet:
    "group-hover:border-violet/60 group-hover:shadow-[var(--glow-violet)]",
};

export function Speakers() {
  return (
    <Section id="speakers">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          index="05"
          eyebrow="Featured Speakers"
          title="The people on stage."
        />

        <Reveal delay={0.2}>
          <MagneticLink href="#join" variant="ghost">
            View full lineup
          </MagneticLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <Tilt className="group h-full">
              <article
                className={`relative h-full overflow-hidden rounded-sm border border-border bg-surface/30 transition-[box-shadow,border-color] duration-700 ${accentRing[s.accent]}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={s.img}
                    alt={`${s.name}, ${s.role}`}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover grayscale brightness-95 transition-[transform,filter] duration-[1400ms] ease-[var(--ease-luxe)] group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)]" />

                  <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                    {[Twitter, Linkedin, Github].map((Icon, k) => (
                      <span
                        key={k}
                        className="grid h-8 w-8 translate-y-3 place-items-center rounded-full border border-border bg-background/50 backdrop-blur transition-all duration-500 group-hover:translate-y-0 hover:border-primary/60 hover:text-primary"
                        style={{
                          transitionDelay: `${k * 70}ms`,
                        }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg leading-tight font-medium tracking-tight">
                    {s.name}
                  </h3>

                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    {s.role}
                  </p>

                  <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-primary">
                    {s.topic.toUpperCase()}
                  </p>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------- SECTION 06 — WORKSHOPS ------------------------ */
export function Workshops() {
  return (
    <Section
      id="workshops"
      className="border-y border-border/60 bg-surface/20"
    >
      <div className="w-full overflow-visible">
        <SectionHeading
          index="06"
          eyebrow="Our Work"
          title="Society Aims & Objectives"
          description="To promote digital forensics, cyber investigation, research, and practical capacity building across academia, industry, and public institutions."
        />
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {workshops.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.08}>
            <article
              className="glass group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-sm p-6 transition-transform duration-700 ease-[var(--ease-luxe)] hover:-translate-y-2"
              style={{ lineHeight: 1.05 }}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.22em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative font-display text-[1.55rem] font-medium leading-[1.2] tracking-[-0.03em] text-foreground">
                {w.title}
              </h3>

              <p className="relative mt-3 text-[15px] leading-[1.7] text-foreground/75">
                {w.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}