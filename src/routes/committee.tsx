import { createFileRoute } from "@tanstack/react-router";
import { CommitteePage } from "@/components/site/committee-page";

export const Route = createFileRoute("/committee")({
  component: CommitteePage,
  head: () => ({
    meta: [
      { title: "Committee | Society of Digital Forensic" },
      {
        name: "description",
        content:
          "Meet the leadership guiding the Society of Digital Forensic.",
      },
    ],
  }),
});
