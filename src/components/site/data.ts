import sakshiSharmaImage from "@/assets/more/_DSC0528.webp";
import pankajSharmaImage from "@/assets/more/pankaj-sir.webp";
import santoshKhadsareImage from "@/assets/more/Santosh-Khadsare (1).webp";

const moreImages = Object.values(
  import.meta.glob("@/assets/more/*.webp", {
    eager: true,
    import: "default",
  }),
).sort() as string[];

const galleryMeta = [
  { title: "Opening Keynote", location: "Grand Hall" },
  { title: "Research Exchange", location: "Forum Hall" },
  { title: "Leadership Dialogue", location: "Studio B" },
  { title: "Evidence and Trust", location: "Main Stage" },
  { title: "Networking Roundtable", location: "Atrium" },
  { title: "Public Interest Session", location: "Ops Center" },
  { title: "Workshop Floor", location: "Innovation Lab" },
  { title: "Community Spotlight", location: "Gallery Hall" },
  { title: "Field Research", location: "Ops Center" },
  { title: "Leadership Briefing", location: "Forum Hall" },
  { title: "Member Showcase", location: "Main Stage" },
  { title: "Closing Session", location: "Grand Hall" },
];

export const images = {
  confStage: moreImages[0] ?? "/sdf.webp",
  ctf: moreImages[1] ?? "/sdf.webp",
  workshopImg: moreImages[2] ?? "/sdf.webp",
  keynote: moreImages[3] ?? "/sdf.webp",
  networking: moreImages[4] ?? "/sdf.webp",
  soc: moreImages[5] ?? "/sdf.webp",
};

export const gallery = moreImages.slice(0, 12).map((src, index) => ({
  src,
  title: galleryMeta[index]?.title ?? `Session ${index + 1}`,
  location: galleryMeta[index]?.location ?? "Conference Hall",
  year: "2025",
}));

export const stats = [
  { label: "Active Members", value: 2400, suffix: "+" },
  { label: "Years Operating", value: 12, suffix: "" },
  { label: "Events Hosted", value: 186, suffix: "" },
  { label: "Workshops Run", value: 340, suffix: "+" },
  { label: "Awards Won", value: 27, suffix: "" },
];

export const speakers = [
  {
    name: "Dr. Gaurav Gupta",
    role: "Scientist F, Meity",
    org: "MeitY / Ministry of Electronics & Information Technology",
    img: "/drgauravgupta.webp",
    topic: "CHAIRMAN",
    accent: "primary" as const,
  },
  {
    name: "Lt. Col Santosh Khadsare",
    role: "CBO, SysTools",
    org: "Government Cyber Security Division",
    img: santoshKhadsareImage,
    topic: "VICE CHAIRMAN",
    accent: "accent" as const,
  },
  {
    name: "Dr. Pankaj Sharma",
    role: "Academia",
    org: "Digital Evidence Lab",
    img: pankajSharmaImage,
    topic: "TREASURER",
    accent: "violet" as const,
  },
  {
    name: "Dr. Sakshi Sharma",
    role: "Academia",
    org: "Government Digital Forensic",
    img: sakshiSharmaImage,
    topic: "SECRETARY",
    accent: "primary" as const,
  },
];

export const workshops = [
  {
    title: "Promotion of Digital Forensics in India",
    desc: "To advance education, research, training, and awareness in the field of digital forensics, cyber investigation, and cybercrime prevention.",
  },
  {
    title: "Educational Conferences and Workshops",
    desc: "To organize national and international conferences, workshops, seminars, and symposia on digital forensics and allied domains.",
  },
  {
    title: "Industry-Academia Collaboration",
    desc: "To foster collaboration between academia, industry, and government bodies for innovation and capacity building in digital forensic science.",
  },
  {
    title: "Publications & Knowledge Dissemination",
    desc: "To publish journals, proceedings, newsletters, and digital resources on emerging trends in cyber forensics.",
  },
  {
    title: "Standards & Policy Development",
    desc: "To contribute towards creating frameworks, policies, and standards for forensic investigation and cyber security practices.",
  },
  {
    title: "Skill Development & Certification",
    desc: "To develop certification programs and professional training courses for students, researchers, law enforcement, and industry professionals.",
  },
];

export const timeline = [
  { year: "2014", title: "Founded", desc: "A shared effort to bring security research, practice, and public-interest dialogue together." },
  { year: "2017", title: "Research Focus", desc: "A stronger emphasis on evidence-driven inquiry and applied digital forensic." },
  { year: "2019", title: "Conference Launched", desc: "An annual gathering of researchers, industry voices, and policy-minded practitioners." },
  { year: "2022", title: "Policy Engagement", desc: "Greater attention to governance, accountability, and the practical use of security research." },
  { year: "2024", title: "Leadership Dialogue", desc: "Expanded conversations across institutions, researchers, and technology leaders." },
  { year: "2026", title: "SDF Summit", desc: "A high-level research and industry gathering focused on digital trust and public-interest security." },
];

export const agenda = [
  { time: "09:00", title: "Registration & Welcome", tag: "Atrium" },
  { time: "10:00", title: "Opening Keynote — The Next Decade of Defense", tag: "Main Stage" },
  { time: "12:30", title: "Research & Policy Roundtables", tag: "Forum Hall" },
  { time: "15:00", title: "Industry & Research Conversations", tag: "Ops Center" },
  { time: "19:00", title: "Leadership Networking Session", tag: "Grand Hall" },
];

export const sponsors = [
  "CDAC",
  "3RD EYE",
  "GGQSR",
  "MH SERVICES",
  "SKILLSDA",
  "CYETHACK SOLUTIONS",
  "IDEFENCE",
  "PELORUS FORENSIC CYBERTECH",
];

export const testimonials = [
  {
    quote:
      "The most intellectually honest gathering I attend. It brings together the people doing the work and the people shaping the conversation around it.",
    name: "Priya Menon",
    role: "Security Architect, Quanta",
  },
  {
    quote:
      "What stands out is the quality of discussion. It is serious, practical, and grounded in real problems rather than buzzwords.",
    name: "Tom Bergström",
    role: "IR Analyst, Obsidian",
  },
  {
    quote:
      "This is where serious conversations about evidence, trust, and digital resilience actually happen. The signal is high and the room is thoughtful.",
    name: "Sarah Klein",
    role: "VP Engineering, Vertex",
  },
  {
    quote:
      "A rare mix of technical depth and policy awareness. It is the kind of gathering that makes the industry sharper.",
    name: "Andre Costa",
    role: "Firmware Engineer, Ironclad",
  },
];

export const faqs = [
  {
    q: "Who can join the society?",
    a: "Anyone with a serious interest in security — students, professionals, and self-taught researchers. There is no entrance exam, only curiosity and a commitment to ethical practice.",
  },
  {
    q: "Do I need prior experience?",
    a: "No. Roughly a third of our members join with no technical background. We run a structured beginner track covering networking, Linux, and fundamentals before you touch offensive tooling.",
  },
  {
    q: "What does conference registration include?",
    a: "Full access to all three days, every workshop track subject to capacity, the CTF, meals, and the recorded session archive released two weeks after the event.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. We reserve 15% of seats for fully funded scholarship places, including travel support. Applications open eight weeks before the conference.",
  },
  {
    q: "Is there a code of conduct?",
    a: "Absolutely. All members and attendees agree to our code of conduct and responsible disclosure policy. Violations are handled swiftly and transparently.",
  },
];
