import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { Counter, MagneticLink, Reveal, Section, SectionHeading } from "./primitives";
import { agenda, images, stats, timeline } from "./data";

/* ------------------------- SECTION 02 — ABOUT ------------------------- */
export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <SectionHeading
            index="02"
            eyebrow="The Society"
            title="A decade of defending what matters."
            description="We are a member-run collective of security researchers, engineers and students. We publish original research, run open training, and build the pipeline of practitioners the industry keeps hiring from."
          />
          <Reveal delay={0.2} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {["Research", "Training", "CTF", "Disclosure", "Mentorship", "Policy"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:border-primary/60 hover:text-foreground"
                >
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full opacity-[0.20] blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab,var(--violet) 15%,transparent), transparent 70%)",
            }}
          />
          <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className="group relative bg-background p-8 transition-colors duration-700 hover:bg-surface/70"
              >
                <Reveal delay={i * 0.07}>
                  <p className="font-display text-[clamp(2rem,4.6vw,3.2rem)] leading-none font-medium tracking-[-0.05em] text-foreground">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                    {s.label.toUpperCase()}
                  </p>
                </Reveal>
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[var(--gradient-line)] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
              </li>
            ))}
            <li className="relative hidden bg-background p-8 sm:block">
              <Sparkles className="h-5 w-5 animate-floaty text-accent" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Independent. Non-profit. Member funded.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* --------------------- SECTION 03 — CONFERENCE ------------------------ */
const TARGET = new Date("2027-01-03T09:00:00Z").getTime();

function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(TARGET - Date.now(), 0);
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells: Array<[string, number]> = [
    ["Days", t.d],
    ["Hours", t.h],
    ["Minutes", t.m],
    ["Seconds", t.s],
  ];

  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-sm border border-border bg-border">
      {cells.map(([label, v]) => (
        <div key={label} className="bg-surface/70 px-2 py-5 text-center backdrop-blur-lg">
          <p className="font-display text-[clamp(1.4rem,3.2vw,2.4rem)] leading-none font-medium tabular-nums text-foreground">
            {String(v).padStart(2, "0")}
          </p>
          <p className="mt-2 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
            {label.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Conference() {
  return (
    <section id="conference" className="relative overflow-hidden border-y border-border/60">
      <div className="absolute inset-0">
        <img
          src={images.confStage}
          alt="SDF Summit main stage"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-full w-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_8%,color-mix(in_oklab,var(--background)_80%,transparent)_60%,var(--background))]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-28 md:px-10 md:py-40 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            index="03"
            eyebrow="Annual Conference"
            title="SDF SUMMIT 2027"
            description="Three days of original research, adversarial simulation and hands-on training — under one roof, with the people actually doing the work."
          />

          <Reveal delay={0.2} className="mt-12">
            <dl className="grid gap-8 sm:grid-cols-3">
              {[
                { icon: CalendarDays, label: "Date", value: "3–5 Jan 2027" },
                { icon: MapPin, label: "Venue", value: "Eros Hotel, Nehru Place" },
                { icon: Sparkles, label: "Theme", value: "Digital Forensics" },
              ].map((d) => (
                <div key={d.label}>
                  <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                    <d.icon className="h-3.5 w-3.5 text-primary" />
                    {d.label.toUpperCase()}
                  </dt>
                  <dd className="mt-3 font-display text-lg leading-snug tracking-tight">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass relative rounded-sm p-7 shadow-[var(--shadow-elevate)] md:p-9">
            <div
              aria-hidden
              className="absolute inset-x-8 -top-px h-px bg-[var(--gradient-line)]"
            />
            <p className="eyebrow">Doors open in</p>
            <div className="mt-5">
              <Countdown />
            </div>

            <p className="mt-9 text-sm leading-relaxed text-muted-foreground">
              Registration is now open for the SDF conference. Details will be shared closer to the event.
            </p>

            <MagneticLink href="#join" variant="accent" className="mt-9 w-full justify-center">
              Register for the Conference
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

