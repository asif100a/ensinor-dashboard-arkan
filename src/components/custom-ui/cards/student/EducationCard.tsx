import { EductionTypes } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddDegreePopup from "../../popups/AddDegreePopup";
import CVOptionDropdown from "../../dropdowns/CVOptionDropdown";

interface EducationCardProps {
  eductionData: EductionTypes;
}

export default function EducationCard({ eductionData }: EducationCardProps) {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <>
      <div className="w-full p-4 bg-white space-y-8 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-black-normal">
              {eductionData.courseName}
            </h2>
            <p className="text-base font-normal text-black-normal">
              {eductionData.institution}- {eductionData.duration},{" "}
              {eductionData.location}
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

          <p className="w-full flex items-center gap-2">
            <Image
              src="/icons/education.svg"
              alt="GPA"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold text-black-normal">
              GPA: {eductionData.gpa}
            </span>
          </p>
        </div>
      </div>

      {isOpenPopup && <AddDegreePopup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}
