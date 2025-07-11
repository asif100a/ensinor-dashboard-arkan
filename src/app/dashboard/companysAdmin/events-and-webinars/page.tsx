import EventWebinarCard from "@/components/(bInstructor-cAdmin)/eventAndWebinars/EventWebinarCard";
import SectionHeader from "@/components/SectionHeader";
import { EventWebinarTypes } from "@/lib/types";
import React from "react";

const eventData: EventWebinarTypes[] = [
  {
    title: "Modem Ul Design Principles 1",
    description:
      "Learn the fundamentals of modem ui design and apply them to real-world projects.",
    date: "7 May 2025",
    time: "10:00 AM - 12:00 PM",
    people: 150,
    conferenceTool: "Zoom Webinar",
  },
  {
    title: "Modem Ul Design Principles 1",
    description:
      "Learn the fundamentals of modem ui design and apply them to real-world projects.",
    date: "7 May 2025",
    time: "10:00 AM - 12:00 PM",
    people: 150,
    conferenceTool: "Zoom Webinar",
  },
  {
    title: "Modem Ul Design Principles 1",
    description:
      "Learn the fundamentals of modem ui design and apply them to real-world projects.",
    date: "7 May 2025",
    time: "10:00 AM - 12:00 PM",
    people: 150,
    conferenceTool: "Zoom Webinar",
  },
  {
    title: "Modem Ul Design Principles 1",
    description:
      "Learn the fundamentals of modem ui design and apply them to real-world projects.",
    date: "7 May 2025",
    time: "10:00 AM - 12:00 PM",
    people: 150,
    conferenceTool: "Zoom Webinar",
  },
];

export default function EventsAndWebinars() {
  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Events & Webinars"
        description="Schedule and manage your live events"
        leftContent="null"
        options={{
          name: "link",
          content: "Schedule Event",
          link: "/dashboard/businessInstructor/events-and-webinars/create-event-schedule",
          type: "fill",
        }}
      />

      {/* Event and Webinars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventData.map((event, index) => (
          <EventWebinarCard key={index} item={event} />
        ))}
      </div>
    </div>
  );
}
