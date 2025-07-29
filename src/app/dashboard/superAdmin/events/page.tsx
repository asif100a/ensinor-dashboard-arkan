"use client";

import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Tabs from "@/components/Tabs";
import { EventTypes } from "@/lib/types";
import EventsTable from "@/components/(superAdmin)/events/EventsTable";
import EditAndExportButtons from "@/components/PrintAndExportButtons";
import CreateEventPopup from "@/components/custom-ui/popups/CreateEventPopup";

const tabs: string[] = ["All Events", "Upcoming", "Completed"];

const events: EventTypes[] = [
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Upcoming",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Completed",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Upcoming",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Completed",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Upcoming",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Completed",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Upcoming",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Completed",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Upcoming",
  },
  {
    eventName: "UX/UI Design Fundamentals",
    type: "Conference",
    date: "Sep 28,2025",
    address: "Dhaka, Bangladesh",
    organizer: "Shahid Hasan",
    attendance: 2056,
    price: 321,
    status: "Completed",
  },
];

export default function Events() {
  const [isAddEventsOpen, setIsAddEventsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventTypes[]>([]);
  const [completedEvents, setCompletedEvents] = useState<EventTypes[]>([]);

  useEffect(() => {
    if (events.length > 0) {
      const filteredUpcoming = events?.filter(
        (ev) => ev.status === "Upcoming"
      );
      setUpcomingEvents(filteredUpcoming);

      const filteredCompleted = events?.filter((ev) => ev.status === "Completed");
      setCompletedEvents(filteredCompleted);
    }
  }, []);

  const handleSearch = () => {
    // console.log("Clicked Search");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SectionHeader
          title="Events"
          description="Manage online and in-person events on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddEventsOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Create event</span>
        </button>
      </div>

      <div className="w-full flex md:flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="w-full">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Search Field & Filter Button */}
        <div className="w-full flex items-center lg:justify-end gap-6">
          <SimpleSearchForm handleSearch={handleSearch} />
          {/* Button */}
          <button
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            <span>Filter</span>
            <Image
              src="/icons/filter.svg"
              alt="Filter"
              width={32}
              height={32}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Events Tables */}
      {activeTab === tabs[0] && (
        <EventsTable events={events} activeTab={activeTab} />
      )}
      {activeTab === tabs[1] && (
        <EventsTable events={upcomingEvents} activeTab={activeTab} />
      )}
      {activeTab === tabs[2] && (
        <EventsTable events={completedEvents} activeTab={activeTab} />
      )}

      {/* Edit & Export::Button */}
      <EditAndExportButtons />

      {/* Create Event Popup */}
      {isAddEventsOpen && <CreateEventPopup setIsOpenPopup={setIsAddEventsOpen} />}
    </div>
  );
}
