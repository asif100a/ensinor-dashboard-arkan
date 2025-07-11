"use client";

import { CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "@/custom-style/style.css";
import AddSpeakerPopup from "@/components/custom-ui/popups/AddSpeakerPopup";
import AddSchedulePopup from "@/components/custom-ui/popups/AddSchedulePopup";
import FirstFieldGroup from "@/components/(bInstructor-cAdmin)/eventAndWebinars/createEvnetAndWebinars/FirstFieldGroup";
import SecondFieldGroup from "@/components/(bInstructor-cAdmin)/eventAndWebinars/createEvnetAndWebinars/SecondFieldGroup";
import ThirdFieldGroup from "@/components/(bInstructor-cAdmin)/eventAndWebinars/createEvnetAndWebinars/ThirdFieldGroup";
import { EventScheduleTypes, SpeakerTypes } from "@/lib/types";
import ForthFieldGroup from "@/components/(bInstructor-cAdmin)/eventAndWebinars/createEvnetAndWebinars/ForthFieldGroup";

const speakers: SpeakerTypes[] = [
  {
    name: "Muskan Tanaz",
    designation: "UX Design Lead",
    thumbnail: "/images/dashboard/user-2.png",
  },
  {
    name: "Muskan Tanaz",
    designation: "UX Design Lead",
    thumbnail: "/images/dashboard/user-2.png",
  },
];

const eventSchedule: EventScheduleTypes[] = [
  {
    name: "Day-01",
    date: "Friday, 6 Jun, 2025",
    thumbnail: "/images/dashboard/user-2.png",
  },
  {
    name: "Day-02",
    date: "Friday, 6 Jun, 2025",
    thumbnail: "/images/dashboard/user-2.png",
  },
  {
    name: "Day-03",
    date: "Friday, 6 Jun, 2025",
    thumbnail: "/images/dashboard/user-2.png",
  },
];

export default function CreateEventAndSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeValue, onTimeStateChange] = useState<string | null>("10:00");
  const [isAddSpeakerPopupOpen, setIsAddSpeakerPopupOpen] =
    useState<boolean>(false);
  const [isAddSloganPopupOpen, setIsAddSloganPopupOpen] =
    useState<boolean>(false);
  const handleSubmit = () => {};

  return (
    <div className="p-6 space-y-6">
      <CardContent>
        <form onSubmit={handleSubmit} className="text-lg space-y-6">
          {/* 1st field group */}
          <FirstFieldGroup />

          {/* 2nd field group */}
          <SecondFieldGroup
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            timeValue={timeValue}
            onTimeStateChange={onTimeStateChange}
          />

          {/* 3rd field group */}
          <ThirdFieldGroup
            setIsAddSpeakerPopupOpen={setIsAddSpeakerPopupOpen}
            speakers={speakers}
          />

          {/* 4th field group */}
          <ForthFieldGroup
            setIsAddSloganPopupOpen={setIsAddSloganPopupOpen}
            eventSchedule={eventSchedule}
          />

          <button className="col-span-2 w-full bg-yellow-primary text-black-primary text-lg font-medium py-3 rounded-lg hover:bg-yellow-500 cursor-pointer">
            Upload
          </button>
        </form>
      </CardContent>

      {/* Add Speaker Popup */}
      {isAddSpeakerPopupOpen && (
        <AddSpeakerPopup setIsOpenPopup={setIsAddSpeakerPopupOpen} />
      )}
      {/* Add Schedule Popup */}
      {isAddSloganPopupOpen && (
        <AddSchedulePopup setIsOpenPopup={setIsAddSloganPopupOpen} />
      )}
    </div>
  );
}
