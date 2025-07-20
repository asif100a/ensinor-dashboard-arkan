import IntegrationCard from "@/components/custom-ui/cards/IntegrationCard";
import SectionHeader from "@/components/SectionHeader";
import { ConferenceTypes } from "@/lib/types";
import React from "react";

const conferences: ConferenceTypes[] = [
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "completed",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "incomplete",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "incomplete",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "incomplete",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "completed",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "completed",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "incomplete",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "incomplete",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "completed",
  },
  {
    conferenceTool: "Zoom",
    description:
      "Connect with Zoom to host and schedule virtual classroom  sessions and webinars.",
    status: "completed",
  },
];

export default function Integration() {
  return (
    <div className="p-6 space-y-6">
      <div className="p-6 space-y-6 bg-white rounded-lg">
        <SectionHeader
          title="Integration"
          description="Connect with your favorite learning and productivity platforms"
          leftContent="null"
        />

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((conference: ConferenceTypes, idx: number) => (
           <IntegrationCard key={idx} conference={conference} />
          ))}
        </div>
      </div>
    </div>
  );
}
