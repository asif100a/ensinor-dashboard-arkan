import { EventWebinarTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface EventWebinarCardProps {
  item: EventWebinarTypes;
}

export default function EventWebinarCard({ item }: EventWebinarCardProps) {
  const { title, description, date, time, people, conferenceTool } = item;

  return (
    <div className="w-full bg-white text-lg rounded-[12px] overflow-hidden p-6 space-y-4">
      <div className="space-y-4">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-black-primary">
            {title || "Shop Title"}
          </h2>

          {/* Status */}
          <p className="text-sm bg-[#FFF2E6] text-[#FD7E14] px-3 py-1 rounded">Upcoming</p>
        </div>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Shop Description"}
        </p>
        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Date */}
            <p className="flex items-center gap-2">
              <Image src="/icons/calender.svg" alt="Calendar" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-normal text-black-primary">
                {date || "MM/DD/YYYY" /* Replace with actual date */}
              </span>
            </p>
            {/* Time */}
            <p className="flex items-center gap-2">
             <Image src="/icons/clock.svg" alt="Clock" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-normal text-black-primary">
                {time || "HH:MM AM/PM" /* Replace with actual time */}
              </span>
            </p>
            {/* People */}
            <p className="flex items-center gap-2">
             <Image src="/icons/user-2.svg" alt="People" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-normal text-black-primary">
                {people || "0"} People
              </span>
            </p>
            {/* Conference Tool */}
            <p className="flex items-center gap-2">
             <Image src="/icons/video.svg" alt="Conference" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-normal text-black-primary">
                {conferenceTool || "Not Fixed" /* Replace with actual conference tool */}
              </span>
            </p>
        </div>
        {/* Action Buttons */}
        <div className="w-full flex items-center gap-4">
          {/* Manage */}
          <button
            className={`w-fit flex justify-center items-center py-2 px-5 bg-yellow-primary text-black-normal font-semibold rounded-lg cursor-pointer`}
          >
            Manage
          </button>
          {/* Delete */}
          <button
            className={`w-fit flex justify-center items-center py-2 px-5 border border-yellow-primary text-black-normal font-semibold rounded-lg cursor-pointer`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
