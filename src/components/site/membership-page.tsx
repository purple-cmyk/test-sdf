// import { Link } from "@tanstack/react-router";
// import { ArrowLeft, Mail, Sparkles } from "lucide-react";

// const plans = [
//   {
//     type: "Student Plan",
//     options: ["Yearly"],
//     details: "Designed for students, researchers, and early-career learners.",
//     action: "Apply",
//     href: "mailto:membership@cybersecuritysociety.org?subject=Student%20Membership%20Application",
//   },
//   {
//     type: "Individual Professional",
//     options: ["Yearly", "5-yearly", "Lifetime"],
//     details: "For practicing professionals and investigators seeking long-term engagement.",
//     action: "Apply",
//     href: "mailto:membership@cybersecuritysociety.org?subject=Professional%20Membership%20Application",
//   },
// ];

// const corporateBands = [
//   {
//     band: "< 50L",
//     tiers: [
//       { duration: "Yearly", price: "₹15,000", href: "#" },
//       { duration: "5-Yearly", price: "₹60,000", href: "#" },
//       { duration: "Lifetime", price: "₹1,25,000", href: "#" },
//     ],
//   },
//   {
//     band: "< 1 Cr",
//     tiers: [
//       { duration: "Yearly", price: "₹25,000", href: "#" },
//       { duration: "5-Yearly", price: "₹1,00,000", href: "#" },
//       { duration: "Lifetime", price: "₹2,00,000", href: "#" },
//     ],
//   },
//   {
//     band: "< 3 Cr",
//     tiers: [
//       { duration: "Yearly", price: "₹40,000", href: "#" },
//       { duration: "5-Yearly", price: "₹1,60,000", href: "#" },
//       { duration: "Lifetime", price: "₹3,25,000", href: "#" },
//     ],
//   },
//   {
//     band: "< 10 Cr",
//     tiers: [
//       { duration: "Yearly", price: "₹60,000", href: "#" },
//       { duration: "5-Yearly", price: "₹2,40,000", href: "#" },
//       { duration: "Lifetime", price: "₹4,75,000", href: "#" },
//     ],
//   },
// ];

// const contactBand = {
//   band: "< 100 Cr",
//   details: "Custom institutional partnerships and strategic collaboration terms.",
//   action: "Contact us",
//   href: "mailto:hello@cybersecuritysociety.org?subject=Corporate%20Membership%20Inquiry",
// };

// function PriceOption({
//   duration,
//   price,
//   href,
// }: {
//   duration: string;
//   price: string;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="group relative flex h-16 flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-background px-3 text-center transition-colors hover:border-primary"
//     >
//       <div className="flex flex-col items-center transition-all duration-200 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
//         <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
//           {duration}
//         </span>
//         <span className="text-sm font-medium text-foreground">{price}</span>
//       </div>

//       <div className="absolute inset-0 flex translate-y-8 items-center justify-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
//         <Sparkles className="h-3.5 w-3.5" />
//         Apply now
//       </div>
//     </a>
//   );
// }

// function CorporateBandCard({
//   band,
//   tiers,
// }: {
//   band: string;
//   tiers: { duration: string; price: string; href: string }[];
// }) {
//   return (
//     <div className="rounded-sm border border-border bg-surface/40 p-6">
//       <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Turnover</p>
//       <h3 className="mt-2 font-display text-2xl tracking-tight">{band}</h3>
//       <div className="mt-5 grid grid-cols-3 gap-2">
//         {tiers.map((tier) => (
//           <PriceOption key={tier.duration} {...tier} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MembershipPage() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
//         <Link
//           to="/"
//           className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back home
//         </Link>

//         <div className="mt-10 max-w-3xl">
//           <p className="eyebrow">Membership</p>
//           <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-[-0.05em]">
//             Apply for Membership
//           </h1>
//           <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
//             Join the Society of Digital Forensic to support research, professional practice, and community building in digital evidence, cyber investigations, and secure systems.
//           </p>
//         </div>

//         <div className="mt-12 overflow-hidden rounded-sm border border-border bg-surface/40">
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-separate border-spacing-0 text-left">
//               <thead>
//                 <tr className="bg-surface/80 text-sm uppercase tracking-[0.18em] text-muted-foreground">
//                   <th className="border-b border-border px-5 py-4 font-medium">Member Type</th>
//                   <th className="border-b border-border px-5 py-4 font-medium">Plan</th>
//                   <th className="border-b border-border px-5 py-4 font-medium">Details</th>
//                   <th className="border-b border-border px-5 py-4 font-medium">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {plans.map((plan) => (
//                   <tr key={plan.type} className="align-top">
//                     <td className="border-b border-border px-5 py-5 font-display text-xl tracking-tight text-foreground">
//                       {plan.type}
//                     </td>
//                     <td className="border-b border-border px-5 py-5">
//                       <div className="flex flex-wrap gap-2">
//                         {plan.options.map((option) => (
//                           <span
//                             key={option}
//                             className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-primary"
//                           >
//                             {option}
//                           </span>
//                         ))}
//                       </div>
//                     </td>
//                     <td className="border-b border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground">
//                       {plan.details}
//                     </td>
//                     <td className="border-b border-border px-5 py-5">
//                       <a
//                         href={plan.href}
//                         className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
//                       >
//                         <Sparkles className="h-4 w-4" />
//                         {plan.action}
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="mt-16">
//           <h2 className="font-display text-2xl tracking-tight md:text-3xl">Corporate membership</h2>
//           <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
//             Companies apply under the relevant turnover band below. Hover a price to apply, or reach out for anything above 100 Cr.
//           </p>

//           <div className="mt-6 grid gap-4 sm:grid-cols-2">
//             {corporateBands.map((band) => (
//               <CorporateBandCard key={band.band} {...band} />
//             ))}
//           </div>

//           <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-sm border border-border bg-surface/30 p-6 sm:flex-row sm:items-center">
//             <div>
//               <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Turnover</p>
//               <h3 className="mt-2 font-display text-2xl tracking-tight">{contactBand.band}</h3>
//               <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
//                 {contactBand.details}
//               </p>
//             </div>
//             <a
//               href={contactBand.href}
//               className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
//             >
//               <Mail className="h-4 w-4" />
//               {contactBand.action}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

const membershipPlans = [
  {
    type: "Student Plan",
    details:
      "Designed for students, researchers, and early-career learners.",
    yearly: "₹500",
    fiveYear: "",
    lifetime: "",
    yearlyHref:
      "mailto:membership@cybersecuritysociety.org?subject=Student%20Membership%20Application",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Individual Professional",
    details:
      "For practicing professionals and investigators seeking long-term engagement.",
    yearly: "₹1,000",
    fiveYear: "₹4,000",
    lifetime: "₹10,000",
    yearlyHref:
      "mailto:membership@cybersecuritysociety.org?subject=Professional%20Membership%20Application",
    fiveYearHref:
      "mailto:membership@cybersecuritysociety.org?subject=Professional%20Membership%20Application",
    lifetimeHref:
      "mailto:membership@cybersecuritysociety.org?subject=Professional%20Membership%20Application",
  },
  {
    type: "Corporate Below ₹50 Lakh",
    details: "For organizations with turnover below ₹50 lakh.",
    yearly: "₹25,000",
    fiveYear: "₹75,000",
    lifetime: "₹1,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹50 Lakh – ₹1 Crore",
    details: "For organizations with turnover from ₹50 lakh to ₹1 crore.",
    yearly: "₹50,000",
    fiveYear: "₹1,50,000",
    lifetime: "₹2,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹1 – ₹3 Crore",
    details: "For organizations with turnover from ₹1 crore to ₹3 crore.",
    yearly: "₹1,25,000",
    fiveYear: "₹3,75,000",
    lifetime: "₹5,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹3 – ₹10 Crore",
    details: "For organizations with turnover from ₹3 crore to ₹10 crore.",
    yearly: "₹1,90,000",
    fiveYear: "₹5,75,000",
    lifetime: "₹7,50,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹10 – ₹50 Crore",
    details: "For organizations with turnover from ₹10 crore to ₹50 crore.",
    yearly: "₹2,25,000",
    fiveYear: "₹7,50,000",
    lifetime: "₹9,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹50 – ₹100 Crore",
    details: "For organizations with turnover from ₹50 crore to ₹100 crore.",
    yearly: "₹3,00,000",
    fiveYear: "₹9,00,000",
    lifetime: "₹12,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate ₹100 Crore+",
    details: "For organizations with turnover of ₹100 crore or more.",
    yearly: "₹5,00,000",
    fiveYear: "₹15,00,000",
    lifetime: "₹20,00,000",
    yearlyHref: "#",
    fiveYearHref: "#",
    lifetimeHref: "#",
  },
  {
    type: "Corporate < 100 Cr",
    details:
      "Custom institutional partnerships and strategic collaboration terms.",
    yearly: "Custom",
    fiveYear: "Custom",
    lifetime: "Custom",
    yearlyHref:
      "mailto:hello@cybersecuritysociety.org?subject=Corporate%20Membership%20Inquiry",
    fiveYearHref:
      "mailto:hello@cybersecuritysociety.org?subject=Corporate%20Membership%20Inquiry",
    lifetimeHref:
      "mailto:hello@cybersecuritysociety.org?subject=Corporate%20Membership%20Inquiry",
  },
];

function PriceOption({
  price,
  href,
}: {
  price: string;
  href: string;
}) {
  if (!price) {
    return <div className="h-16 rounded-md bg-transparent" />;
  }

  return (
    <a
      href={href}
      className="group relative flex h-14 flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-background px-2 text-center transition-all duration-300 ease-out hover:border-primary/70 hover:bg-primary/5"
    >
      <div className="flex flex-col items-center transition-all duration-300 ease-out group-hover:-translate-y-7 group-hover:opacity-0">
        <span className="text-sm font-medium text-foreground">{price}</span>
      </div>

      <div className="absolute inset-0 flex translate-y-7 items-center justify-center text-sm font-medium text-primary opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        {price === "Custom" ? "Contact us" : "Apply now"}
      </div>
    </a>
  );
}

export function MembershipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        {/* Back Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        {/* Header */}
        <div className="mt-10 max-w-3xl">
          <p className="eyebrow">Membership</p>

          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-[-0.05em]">
            Apply for Membership
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Join the Society of Digital Forensic to support research,
            professional practice, and community building in digital evidence,
            cyber investigations, and secure systems.
          </p>
        </div>

        {/* Membership Table */}
        <div className="mt-12 overflow-hidden rounded-sm border border-border bg-surface/40">
          <div className="overflow-x-auto">
            <table className="min-w-[820px] w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-surface/80">
                  <th className="w-[22%] border-b border-border px-4 py-4 text-left font-medium">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Member Type
                    </span>
                  </th>

                  <th className="w-[26%] border-b border-border px-4 py-4 text-left font-medium">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Details
                    </span>
                  </th>

                  <th className="w-[17%] border-b border-border px-2 py-4 text-center font-medium">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      1 Year
                    </span>
                  </th>

                  <th className="w-[17%] border-b border-border px-2 py-4 text-center font-medium">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      5 Years
                    </span>
                  </th>

                  <th className="w-[18%] border-b border-border px-2 py-4 text-center font-medium">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Lifetime
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {membershipPlans.map((plan) => (
                  <tr
                    key={plan.type}
                    className="align-middle transition-colors hover:bg-surface/50"
                  >
                    {/* Member Type */}
                    <td className="border-b border-border px-4 py-5">
                      <h3 className="font-display text-lg tracking-tight text-foreground">
                        {plan.type}
                      </h3>
                    </td>

                    {/* Details */}
                    <td className="border-b border-border px-4 py-5">
                      <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                        {plan.details}
                      </p>
                    </td>

                    {/* 1 Year */}
                    <td className="border-b border-border px-2 py-4">
                      <PriceOption
                        price={plan.yearly}
                        href={plan.yearlyHref}
                      />
                    </td>

                    {/* 5 Years */}
                    <td className="border-b border-border px-2 py-4">
                      <PriceOption
                        price={plan.fiveYear}
                        href={plan.fiveYearHref}
                      />
                    </td>

                    {/* Lifetime */}
                    <td className="border-b border-border px-2 py-4">
                      <PriceOption
                        price={plan.lifetime}
                        href={plan.lifetimeHref}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Note */}
        <div className="mt-6 flex items-start gap-3 rounded-sm border border-border bg-surface/30 p-5">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            Corporate memberships above ₹10 crore turnover are available on a
            custom institutional basis. Contact us for partnership terms and
            pricing.
          </p>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Exclusive of Taxes
        </p>
      </div>
    </div>
  );
}
