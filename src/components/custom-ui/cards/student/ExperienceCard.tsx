import { ExperienceTypes } from "@/lib/types";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddExperiencePopup from "../../popups/AddExperiencePopup";
import CVOptionDropdown from "../../dropdowns/CVOptionDropdown";

interface ExperienceCardProps {
  experienceData: ExperienceTypes;
}

export default function ExperienceCard({
  experienceData,
}: ExperienceCardProps) {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <>
      <div className="w-full p-4 bg-white space-y-8 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="space-y-2 ">
            <h2 className="text-2xl font-semibold text-black-normal">
              {experienceData.role}
            </h2>
            <p className="text-base font-normal text-black-normal">
              {experienceData.company}- {experienceData.duration},{" "}
              {experienceData.location}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Add */}
            <button
              onClick={() => setIsOpenPopup(true)}
              className={`w-fit md:w-full text-left px-4 py-2.5 border border-yellow-primary flex items-center gap-2 text-black-secondary rounded-lg cursor-pointer`}
            >
              <HiPlus className="text-2xl" />

              <span>Add Degree</span>
            </button>
            {/* Options */}
            <CVOptionDropdown />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-normal text-black-normal">
            Hello, my name is POLASH I am a professional graphic designer with
            over 3 years of experience.
          </p>

          <ul className="w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <li key={index}>
                  <p className="w-full text-nowrap px-2 py-1 rounded-sm bg-yellow-secondary">
                    {experienceData.projects}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {isOpenPopup && <AddExperiencePopup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}
