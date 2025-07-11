import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EventScheduleTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface ForthFieldGroupProps {
  setIsAddSloganPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  eventSchedule: EventScheduleTypes[];
}

export default function ForthFieldGroup({
  setIsAddSloganPopupOpen,
  eventSchedule = [],
}: ForthFieldGroupProps) {
  return (
    <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
      {/* Schedule Slogan */}
      <div className="grid gap-3">
        <Label htmlFor="fullName" className=" text-lg">
          Schedule Slogan
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Type schedule slogan"
          className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
          required
        />
      </div>
      <div className="space-y-3">
        {/* Event Schedule */}
        <div className="w-full flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black-normal">
            Event Schedule
          </h5>
          {/* Add Schedule::Button */}
          <button
            type="button"
            onClick={() => setIsAddSloganPopupOpen(true)}
            className="w-fit bg-yellow-primary text-black-primary text-lg font-medium px-5 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer"
          >
            Add Schedule
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {eventSchedule.map((speaker: EventScheduleTypes, idx: number) => (
            <div
              key={idx}
              className="p-3 bg-gray-background rounded-lg flex items-center gap-4"
            >
              <Image
                src={speaker.thumbnail}
                alt={speaker.name}
                width={80}
                height={62}
                className="w-20 h-[62px]"
              />
              <div>
                <h6 className="text-lg font-semibold text-black-normal">
                  {speaker.name}
                </h6>
                <p className="text-black-secondary">{speaker.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
