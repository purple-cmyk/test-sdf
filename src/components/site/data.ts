import confStage from "@/assets/more/SAH00050.JPG";
import ctf from "@/assets/more/SAH00062.JPG";
import workshopImg from "@/assets/more/SAH00066.JPG";
import keynote from "@/assets/more/SAH00071.JPG";
import networking from "@/assets/more/SAH00078.JPG";
import soc from "@/assets/more/SAH00091.JPG";

export const images = { confStage, ctf, workshopImg, keynote, networking, soc };

export const gallery = [
  { src: confStage, title: "Opening Keynote", location: "Grand Hall", year: "2025" },
  { src: ctf, title: "Midnight CTF Finals", location: "Lab 04", year: "2025" },
  { src: workshopImg, title: "Red Team Bootcamp", location: "Studio B", year: "2025" },
  { src: keynote, title: "Zero Trust Deep Dive", location: "Main Stage", year: "2025" },
  { src: networking, title: "Nightfall Networking", location: "Atrium", year: "2025" },
  { src: soc, title: "Live SOC Simulation", location: "Ops Center", year: "2025" },
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
    img: "/drgauravgupta.jpg",
    topic: "Digital Evidence Analysis",
    accent: "primary" as const,
  },
  {
    name: "MeitY Official",
    role: "Advisor, Digital Forensics",
    org: "Government Cyber Security Division",
    img: "/1760891997456.jpg",
    topic: "Cyber Policy & Forensics",
    accent: "accent" as const,
  },
  {
    name: "Rushi Mehta",
    role: "Forensic Research Lead",
    org: "Digital Evidence Lab",
    img: "/rushimehta.jpg",
    topic: "Evidence Reconstruction",
    accent: "violet" as const,
  },
  {
    name: "MeitY Representative",
    role: "Cyber Security & Legal Response",
    org: "Government Digital Forensics",
    img: "/1760891997558.jpg",
    topic: "Digital Evidence Standards",
    accent: "primary" as const,
  },
];

export const workshops = [
  {
    title: "Research & Publication Forum",
    level: "Open to all",
    duration: "6 hrs",
    desc: "A platform for members and researchers to present findings, publish technical work, and discuss emerging digital forensic challenges.",
  },
  {
    title: "Industry–Government Dialogue",
    level: "Policy-focused",
    duration: "4 hrs",
    desc: "A direct channel for startups, professionals, and citizens to raise concerns and discuss digital evidence, cyber risk, and governance with relevant bodies.",
  },
  {
    title: "Case Review & Evidence Analysis",
    level: "Advanced",
    duration: "8 hrs",
    desc: "Structured review of real-world forensic cases, investigative workflows, and digital evidence integrity practices.",
  },
  {
    title: "Public Interest Cyber Concerns",
    level: "Community",
    duration: "5 hrs",
    desc: "A forum to surface pressing issues affecting citizens, startups, and institutions and convert them into actionable recommendations.",
  },
  {
    title: "Forensics in Emerging Tech",
    level: "Intermediate",
    duration: "3 hrs",
    desc: "Exploration of AI, cloud, mobile, and digital ecosystems through the lens of investigation, trust, and accountability.",
  },
  {
    title: "Research-to-Action Lab",
    level: "Collaborative",
    duration: "4 hrs",
    desc: "Turning research insights into policy-aware, evidence-driven solutions for institutions, industry stakeholders, and public bodies.",
  },
];

export const timeline = [
  { year: "2014", title: "Founded", desc: "Twelve students, one lab, a single soldering iron." },
  { year: "2017", title: "First National CTF Win", desc: "Top of the leaderboard at the national collegiate finals." },
  { year: "2019", title: "Conference Launched", desc: "400 attendees at our inaugural annual summit." },
  { year: "2022", title: "Research Division", desc: "Nine CVEs published across IoT and automotive stacks." },
  { year: "2024", title: "Global Chapters", desc: "Sister chapters opened across three continents." },
  { year: "2026", title: "SDF Summit", desc: "Our largest edition yet — 2,000 seats, 40 speakers." },
];

export const agenda = [
  { time: "09:00", title: "Registration & Secure Check-in", tag: "Atrium" },
  { time: "10:00", title: "Opening Keynote — The Next Decade of Defense", tag: "Main Stage" },
  { time: "12:30", title: "Parallel Workshop Tracks", tag: "Labs 01–06" },
  { time: "15:00", title: "Live Red vs Blue Exercise", tag: "Ops Center" },
  { time: "19:00", title: "Midnight CTF Finals", tag: "Grand Hall" },
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
      "The most technically honest conference I attend. No vendor theatre — just deep, careful work presented by people who actually ship defenses.",
    name: "Priya Menon",
    role: "Security Architect, Quanta",
  },
  {
    quote:
      "I joined as a first-year with zero experience. Three years later I'm doing incident response full time. The society built that path for me.",
    name: "Tom Bergström",
    role: "IR Analyst, Obsidian",
  },
  {
    quote:
      "Their CTF pipeline produces better operators than most graduate programs. We hire from it every single year without hesitation.",
    name: "Sarah Klein",
    role: "VP Engineering, Vertex",
  },
  {
    quote:
      "Genuinely world-class workshops. The hardware track alone was worth the trip across the country.",
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
