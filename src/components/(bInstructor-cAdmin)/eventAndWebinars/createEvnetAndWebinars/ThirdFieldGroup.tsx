import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SpeakerTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface ThirdFieldGroupProps {
  setIsAddSpeakerPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  speakers: SpeakerTypes[];
}

export default function ThirdFieldGroup({
  setIsAddSpeakerPopupOpen,
  speakers = [],
}: ThirdFieldGroupProps) {
  return (
    <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
      {/* Speakers Slogan */}
      <div className="md:col-span-2 grid gap-3">
        <Label htmlFor="fullName" className=" text-lg">
          Speakers Slogan
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Type speakers slogan"
          className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
          required
        />
      </div>
      {/* Speakers */}
      <div className="space-y-3">
        <div className="w-full flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black-normal">Speakers</h5>
          {/* Add Speaker::Button */}
          <button
            type="button"
            onClick={() => setIsAddSpeakerPopupOpen(true)}
            className="w-fit bg-yellow-primary text-black-primary text-lg font-medium px-5 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer"
          >
            Add Speaker
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakers.map((speaker: SpeakerTypes, idx: number) => (
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
                <p className="text-black-secondary">{speaker.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
