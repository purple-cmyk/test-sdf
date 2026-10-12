// // import { useEffect, useState } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Menu, X } from "lucide-react";
// // import { MagneticLink } from "./primitives";
// // import { cn } from "@/lib/utils";
import sdfLogo from "@/assets/sdf-logo.png";

// // const links = [
// //   { href: "#about", label: "Society" },
// //   { href: "#conference", label: "Conference" },
// //   { href: "#past-conferences", label: "Past Conferences" },
// //   { href: "#speakers", label: "Speakers" },
// //   { href: "#workshops", label: "Workshops" },
// // ];

// // export function Nav() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [open, setOpen] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 40);
// //     onScroll();
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={cn(
// //         "fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-[var(--ease-luxe)]",
// //         scrolled ? "py-3" : "py-6",
// //       )}
// //     >
// //       <nav
// //         aria-label="Primary"
// //         className={cn(
// //           "mx-auto flex w-[min(94vw,80rem)] items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 transition-all duration-300",
// //           scrolled ? "shadow-sm" : "border-transparent bg-transparent",
// //         )}
// //       >
// //         <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
// //           <img
// //             src={sdfLogo}
// //             alt="SDF logo"
// //             className="h-10 w-10 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12"
// //           />
// //           <span className="font-display text-[11px] font-medium tracking-[-0.02em] sm:text-sm md:text-base">
// //             <span className="hidden sm:inline">Society For Digital Forensics</span>
// //           </span>
// //         </a>

// //         <ul className="hidden items-center gap-1 lg:flex">
// //           {links.map((l) => (
// //             <li key={l.href}>
// //               <a
// //                 href={l.href}
// //                 className="group relative rounded-full px-4 py-2 text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
// //               >
// //                 {l.label}
// //                 <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary/70 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         <div className="flex items-center gap-2">
// //           <MagneticLink
// //             href="#join"
// //             className="hidden px-5 py-2.5 text-[13px] sm:inline-flex"
// //           >
// //             Contact Us
// //           </MagneticLink>
// //           <button
// //             type="button"
// //             onClick={() => setOpen((v) => !v)}
// //             aria-label={open ? "Close menu" : "Open menu"}
// //             aria-expanded={open}
// //             className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
// //           >
// //             {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
// //           </button>
// //         </div>
// //       </nav>

// //       <AnimatePresence>
// //         {open ? (
// //           <motion.div
// //             initial={{ opacity: 0, y: -12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -12 }}
// //             transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
// //             className="mx-auto mt-3 w-[min(94vw,80rem)] rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:hidden"
// //           >
// //             <ul className="flex flex-col">
// //               {links.map((l) => (
// //                 <li key={l.href}>
// //                   <a
// //                     href={l.href}
// //                     onClick={() => setOpen(false)}
// //                     className="block border-b border-border/60 py-3.5 font-display text-lg tracking-tight last:border-0"
// //                   >
// //                     {l.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         ) : null}
// //       </AnimatePresence>
// //     </header>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { MagneticLink } from "./primitives";
// import { cn } from "@/lib/utils";

// const links = [
//   { href: "#about", label: "About Society" },
//   { href: "#membership", label: "Membership" },
//   { href: "#events", label: "Events" },
//   { href: "#join", label: "Contact Us" },
// ];

// export function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-[var(--ease-luxe)]",
//         scrolled ? "py-3" : "py-6",
//       )}
//     >
//       <nav
//         aria-label="Primary"
//         className={cn(
//           "mx-auto flex w-[min(94vw,80rem)] items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 transition-all duration-300",
//           scrolled ? "shadow-sm" : "border-transparent bg-transparent",
//         )}
//       >
//         {/* Logo */}
//         <a
//           href="#top"
//           className="group flex items-center gap-2.5"
//           aria-label="Home"
//         >
//           <img
//             src={sdfLogo}
//             alt="SDF logo"
//             className="h-10 w-10 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12"
//           />

//           <span className="font-display text-[11px] font-medium tracking-[-0.02em] sm:text-sm md:text-base">
//             <span className="hidden sm:inline">
//               Society For Digital Forensics
//             </span>
//           </span>
//         </a>

//         {/* Desktop Navigation */}
//         <ul className="hidden items-center gap-1 lg:flex">
//           {links.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="group relative rounded-full px-4 py-2 text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
//               >
//                 {link.label}

//                 <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary/70 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-2">
//           {/* Contact Us - Desktop */}
//           <MagneticLink
//             href="#join"
//             className="hidden px-5 py-2.5 text-[13px] sm:inline-flex"
//           >
//             Contact Us
//           </MagneticLink>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setOpen((value) => !value)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
//           >
//             {open ? (
//               <X className="h-4 w-4" />
//             ) : (
//               <Menu className="h-4 w-4" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {open ? (
//           <motion.div
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{
//               duration: 0.45,
//               ease: [0.19, 1, 0.22, 1],
//             }}
//             className="mx-auto mt-3 w-[min(94vw,80rem)] rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:hidden"
//           >
//             <ul className="flex flex-col">
//               {links.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="block border-b border-border/60 py-3.5 font-display text-lg tracking-tight last:border-0"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ) : null}
//       </AnimatePresence>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticLink } from "./primitives";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About Society" },
  { href: "/membership", label: "Membership" },
  { href: "#highlights", label: "Events" },
  { href: "#join", label: "Contact Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-[var(--ease-luxe)]",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-[min(94vw,80rem)] items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 transition-all duration-300",
          scrolled ? "shadow-sm" : "border-transparent bg-transparent",
        )}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <img
            src={sdfLogo}
            alt="SDF logo"
            className="h-10 w-10 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12"
          />

          <span className="font-display text-[11px] font-medium tracking-[-0.02em] sm:text-sm md:text-base">
            <span className="hidden sm:inline">
              Society of Digital Forensic
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}

                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary/70 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Generic CTA */}
          <MagneticLink
            href="#workshops"
            className="hidden px-5 py-2.5 text-[13px] sm:inline-flex"
          >
            Learn More
          </MagneticLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.45,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="mx-auto mt-3 w-[min(94vw,80rem)] rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-3.5 font-display text-lg tracking-tight last:border-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Get Involved
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}