"use client";

import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddSkillsPopup from "../../popups/AddSkillsPopup";

interface SkillCardProps {
  skills: string[];
}

export default function SkillCard({ skills }: SkillCardProps) {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const newSkills = [
    ...skills.slice(0, 6),
    ...skills,
    ...skills.slice(0, 6),
    ...skills.slice(0, 3),
  ];

  return (
    <>
      <div className="w-full p-4 bg-white space-y-8 rounded-xl">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-2 ">
            <h2 className="text-2xl font-semibold text-black-normal">Skills</h2>
          </div>

          {/* Add Button */}
          <button
            onClick={() => setIsOpenPopup(true)}
            className={`w-fit text-left px-4 py-2.5 border border-yellow-primary flex items-center gap-2 text-black-secondary rounded-lg cursor-pointer`}
          >
            <HiPlus className="text-2xl" />

            <span>Add Skills</span>
          </button>
        </div>

        <ul className="w-full flex flex-wrap gap-4">
          {newSkills.map((skill: string) => (
            <li key={skill}>
              <p className="w-fit text-nowrap px-2 py-1 rounded-sm bg-yellow-secondary">
                {skill}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {isOpenPopup && <AddSkillsPopup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}
