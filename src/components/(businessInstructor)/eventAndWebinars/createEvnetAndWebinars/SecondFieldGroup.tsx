import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

interface SecondFieldGroupProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  timeValue: string | null;
  onTimeStateChange: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SecondFieldGroup({
  selectedDate,
  setSelectedDate,
  timeValue,
  onTimeStateChange,
}: SecondFieldGroupProps) {
  return (
    <div className="w-full p-6 bg-white rounded-xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
        {/* Event Organized by */}
        <div className="lg:col-span-3 grid gap-3">
          <Label htmlFor="fullName" className=" text-lg">
            Event Organized by
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Type organizer name "
            className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
            required
          />
        </div>
        {/* Event price */}
        <div className="lg:col-span-3 grid gap-3">
          <Label htmlFor="fullName" className=" text-lg">
            Event price
          </Label>
          <Input
            id="fullName"
            type="number"
            placeholder="Enter event price"
            className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
            required
          />
        </div>
        {/* Locations */}
        <div className="lg:col-span-2 grid gap-3">
          <Label htmlFor="fullName" className=" text-lg">
            Locations
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="1205 Modhubag, Dhaka "
            className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
            required
          />
        </div>
        {/* Date */}
        <div className="lg:col-span-2 grid gap-3">
          <Label htmlFor="birthDate" className="text-lg">
            Date Of Birth
          </Label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date ? date : new Date())}
            className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
          />
        </div>
        {/* Time */}
        <div className="lg:col-span-2 grid gap-3">
          <Label htmlFor="fullName" className=" text-lg">
            Time
          </Label>
          <TimePicker
            onChange={onTimeStateChange}
            value={timeValue}
            className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
          />
        </div>
      </div>
      {/* Event Description */}
      <div className="lg:col-span-2 grid gap-3">
        <Label htmlFor="fullName" className=" text-lg">
          Event Description
        </Label>
        <Textarea
          id="fullName"
          placeholder="Type the event description here..."
          className="w-full h-[200px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
          required
        />
      </div>
    </div>
  );
}
