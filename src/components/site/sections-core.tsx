import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { MagneticLink, Reveal, Section, SectionHeading } from "./primitives";
import { images } from "./data";

/* ------------------------- SECTION 02 — ABOUT ------------------------- */
export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <SectionHeading
            index=""
            eyebrow=""
            title="A gathering for researchers, leaders, and public-interest security."
            description="We are a member-led collective bringing together researchers, industry leaders, and policy-minded practitioners to discuss the most important questions shaping digital trust, evidence, and accountability."
          />
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
          <div className="rounded-sm border border-border bg-background p-7 sm:p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
              We aim to be a bridge between technical practitioners, industry leaders, and policymakers — bringing real-world security challenges into open conversation and action. The Society exists to connect deep technical understanding with public accountability, so that what is learned in the field can help shape stronger, safer systems for everyone.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                CHAIRMAN
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-foreground">
                Gaurav Gupta
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Under his leadership, the Society focuses on building an ecosystem where research, mentorship, and responsible innovation move together. His vision is to cultivate a community that learns deeply, thinks critically, and helps shape a more secure digital future.
              </p>
            </div>

            <div className="mt-8 rounded-sm border border-border bg-surface/30 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                The goal is not only to advance technical capability, but also to translate that capability into conversations that matter beyond the lab.
              </p>
            </div>
          </div>
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
          decoding="async"
          fetchPriority="low"
          width={1600}
          height={1000}
          className="h-full w-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-28 md:px-10 md:py-40 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            index=""
            eyebrow=""
            title="ICDF 2027"
            description="Three days of original research, adversarial simulation, and hands-on training — all under one roof, with the people who are actually doing the work."
          />

          <Reveal delay={0.2} className="mt-12">
            <dl className="grid gap-8 sm:grid-cols-3">
              {[
                { icon: CalendarDays, label: "Date", value: "3–5 Jan 2027" },
                { icon: MapPin, label: "Venue", value: "Eros Hotel, Nehru Place" },
                { icon: Sparkles, label: "Theme", value: "Digital Forensic" },
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
          <div className="glass relative rounded-sm p-6 shadow-none md:p-9">
            <div
              aria-hidden
              className="absolute inset-x-8 -top-px h-px bg-[var(--gradient-line)]"
            />
            <p className="eyebrow">Past editions</p>
            <div className="mt-5 space-y-4">
              <p className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                A snapshot of the work, the people, and the moments that shaped the community.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore the keynotes, research conversations, and leadership discussions from previous years.
              </p>
            </div>

            <MagneticLink
              href="https://www.ifip119.org/Conferences/"
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="mt-8 w-full justify-center"
            >
              View past conferences
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
