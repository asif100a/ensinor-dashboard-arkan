"use client";

import { CertificationTypes } from "@/lib/types";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddCertificatePopup from "../../popups/AddCertificatePopup";
import CVOptionDropdown from "../../dropdowns/CVOptionDropdown";

interface CertificationCardProps {
  certificationData: CertificationTypes;
}

export default function CertificationCard({
  certificationData,
}: CertificationCardProps) {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
//   const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);

  return (
    <>
      <div className="w-full p-4 bg-white space-y-8 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="space-y-2 ">
            <h2 className="text-2xl font-semibold text-black-normal">
              {certificationData.role}
            </h2>
            <p className="text-base font-normal text-black-normal">
              {certificationData.company}- {certificationData.duration},{" "}
              {certificationData.location}
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
            {/* <div className="relative">
              <button
                onClick={() => setDisplayDropdown(!displayDropdown)}
                className={`w-fit text-left px-4 py-3  bg-yellow-primary flex items-center gap-2 text-black rounded-lg cursor-pointer`}
              >
                <SlOptionsVertical className="text-lg" />
              </button>

              {displayDropdown && (
                <CVOptionDropdown />
              )}
            </div> */}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-normal text-black-normal">
            Hello, my name is POLASH I am a professional graphic designer with
            over 3 years of experience.
          </p>

          {/* Button */}
          <button
            className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-secondary rounded-lg`}
          >
            View Certificate
          </button>
        </div>
      </div>

      {isOpenPopup && <AddCertificatePopup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}
