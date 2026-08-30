import { createFileRoute } from "@tanstack/react-router";
import { MembershipPage } from "@/components/site/membership-page";

export const Route = createFileRoute("/membership")({
  component: MembershipPage,
  head: () => ({
    meta: [
      { title: "Membership Application | Society of Digital Forensic" },
      {
        name: "description",
        content:
          "Apply for membership in the Society of Digital Forensic. Explore student, professional, and corporate plans.",
      },
    ],
  }),
});
