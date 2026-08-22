import confStage from "@/assets/more/SAH00050.webp";
import ctf from "@/assets/more/SAH00062.webp";
import workshopImg from "@/assets/more/SAH00066.webp";
import keynote from "@/assets/more/SAH00071.webp";
import networking from "@/assets/more/SAH00078.webp";
import soc from "@/assets/more/SAH00091.webp";

export const images = { confStage, ctf, workshopImg, keynote, networking, soc };

export const gallery = [
  { src: confStage, title: "Opening Keynote", location: "Grand Hall", year: "2025" },
  { src: ctf, title: "Research Exchange", location: "Forum Hall", year: "2025" },
  { src: workshopImg, title: "Leadership Dialogue", location: "Studio B", year: "2025" },
  { src: keynote, title: "Evidence and Trust", location: "Main Stage", year: "2025" },
  { src: networking, title: "Networking Roundtable", location: "Atrium", year: "2025" },
  { src: soc, title: "Public Interest Session", location: "Ops Center", year: "2025" },
];

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
    role: "Scientist F",
    org: "MeitY / Ministry of Electronics & Information Technology",
    img: "/drgauravgupta.webp",
    topic: "Digital Evidence Analysis",
    accent: "primary" as const,
  },
  {
    name: "MeitY Official",
    role: "Advisor, Digital Forensics",
    org: "Government Cyber Security Division",
    img: "/1760891997456.webp",
    topic: "Cyber Policy & Forensics",
    accent: "accent" as const,
  },
  {
    name: "Rushi Mehta",
    role: "Forensic Research Lead",
    org: "Digital Evidence Lab",
    img: "/rushimehta.webp",
    topic: "Evidence Reconstruction",
    accent: "violet" as const,
  },
  {
    name: "MeitY Representative",
    role: "Cyber Security & Legal Response",
    org: "Government Digital Forensics",
    img: "/1760891997558.webp",
    topic: "Digital Evidence Standards",
    accent: "primary" as const,
  },
];

export const workshops = [
  {
    title: "Research & Publication Forum",
    desc: "A platform for members and researchers to present findings, publish technical work, and discuss emerging digital forensic challenges.",
  },
  {
    title: "Industry–Government Dialogue",
    desc: "A direct channel for startups, professionals, and citizens to raise concerns and discuss digital evidence, cyber risk, and governance with relevant bodies.",
  },
  {
    title: "Case Review & Evidence Analysis",
    desc: "Structured review of real-world forensic cases, investigative workflows, and digital evidence integrity practices.",
  },
  {
    title: "Public Interest Cyber Concerns",
    desc: "A forum to surface pressing issues affecting citizens, startups, and institutions and convert them into actionable recommendations.",
  },
  {
    title: "Forensics in Emerging Tech",
    desc: "Exploration of AI, cloud, mobile, and digital ecosystems through the lens of investigation, trust, and accountability.",
  },
  {
    title: "Research-to-Action Lab",
    desc: "Turning research insights into policy-aware, evidence-driven solutions for institutions, industry stakeholders, and public bodies.",
  },
];

export const timeline = [
  { year: "2014", title: "Founded", desc: "A shared effort to bring security research, practice, and public-interest dialogue together." },
  { year: "2017", title: "Research Focus", desc: "A stronger emphasis on evidence-driven inquiry and applied digital forensics." },
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
