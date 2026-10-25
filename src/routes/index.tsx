import { createFileRoute } from "@tanstack/react-router";
import { MouseGlow, ScrollProgress, SmoothScroll } from "@/components/site/atmosphere";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { CinematicGallery } from "@/components/site/gallery";
import { About, Conference } from "@/components/site/sections-core";
import {
  Highlights,
  Speakers,
  Workshops,
} from "@/components/site/sections-showcase";
import { Footer, Join, Sponsors } from "@/components/site/sections-closing";

const title = "SDF Society of Digital Forensic — SDF Summit 2027";
const description =
  "The Society of Digital Forensic brings together researchers, practitioners, and students working at the frontier of forensic investigation, incident response, and digital evidence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <CinematicGallery />
        <About />
        <Conference />
        <Highlights />
        <Speakers />
        <Workshops />
        <Sponsors />
        <Join />
      </main>
      <Footer />
    </>
  );
}
