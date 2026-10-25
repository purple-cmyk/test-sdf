import { committeeMembers } from "./data";
import { Footer } from "./sections-closing";
import { Nav } from "./nav";
import { ScrollProgress, SmoothScroll } from "./atmosphere";
import { Reveal, Section, SectionHeading } from "./primitives";

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
                <article className="group h-full overflow-hidden rounded-sm border border-border bg-background">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={member.image}
                      alt={`Placeholder portrait for ${member.name}`}
                      loading="lazy"
                      decoding="async"
                      width={900}
                      height={675}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/60 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-white backdrop-blur">
                      SAMPLE PORTRAIT
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-primary">
                      {member.appointment.toUpperCase()}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-medium tracking-tight">
                      {member.name}
                    </h2>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
