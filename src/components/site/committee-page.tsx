import { committeeMembers } from "./data";
import { Footer } from "./sections-closing";
import { Nav } from "./nav";
import { ScrollProgress, SmoothScroll } from "./atmosphere";
import { Reveal, Section, SectionHeading, Tilt } from "./primitives";

export function CommitteePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white md:px-10 md:pb-28 md:pt-44">
          <div aria-hidden className="absolute inset-0 mesh opacity-35" />
          <div
            aria-hidden
            className="absolute inset-0 cyber-grid opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/60">
                Society of Digital Forensic
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.94] font-medium tracking-[-0.05em]">
                Committee Members
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Meet the leadership guiding the Society's work in digital
                forensics and cyber investigations.
              </p>
            </Reveal>
          </div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the Society."
            description="Committee details and portraits are currently sample information and will be updated once confirmed."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {committeeMembers.map((member, index) => (
              <Reveal key={member.appointment} delay={index * 0.07}>
                <Tilt className="group h-full">
                  <article className="relative h-full overflow-hidden rounded-sm border border-border bg-surface/30 transition-[box-shadow,border-color] duration-700 group-hover:border-primary/60 group-hover:shadow-[var(--glow-primary)]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                      <img
                        src={member.image}
                        alt={`Placeholder portrait for ${member.name}`}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        width={900}
                        height={1200}
                        className="h-full w-full object-cover grayscale-0 brightness-95 transition-[transform,filter] duration-[1400ms] ease-[var(--ease-luxe)] sm:grayscale group-hover:scale-105 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)]" />
                    </div>

                    <div className="p-5">
                      <h2 className="font-display text-lg leading-tight font-medium tracking-tight">
                        {member.name}
                      </h2>

                      <p className="mt-1.5 text-[13px] text-muted-foreground">
                        {member.appointment}
                      </p>

                      <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-primary">
                        COMMITTEE MEMBER
                      </p>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
