import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import { InstructorTypes } from "@/lib/types";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import getFormatPrice from "../../../../utils/getFormatPrice";

interface InstructorsTableProps {
  instructors: InstructorTypes[];
  activeTab: string;
}

const tHeads: string[] = [
  "Name",
  "Specialization",
  "Courses",
  "Students",
  "Rating",
  "Earning",
  "Status",
  "Action",
];

export default function InstructorsTable({
  instructors,
  activeTab,
}: InstructorsTableProps) {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title={
          activeTab.includes("All") ? "All Instructors" : `${activeTab} Instructors`
        }
        description="Manage instructors and their courses on your platform"
        leftContent="null"
      />

      <div className="overflow-hidden">
        <table className="min-w-full text-lg">
          {/* T Head */}
          <thead className="bg-gray-background rounded-xl py-2">
            <tr>
              {tHeads.map((head: string) => (
                <th
                  key={head}
                  scope="col"
                  className="py-3.5 px-4 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          {/* T Body */}
          <tbody className="">
            {instructors.map((instructor: InstructorTypes) => (
              <tr key={instructor.email} className="border-b border-[#606060]">
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={instructor.image}
                      alt={instructor.instructorName}
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    <div>
                      <p className="font-semibold leading-6">
                        {instructor.instructorName}
                      </p>
                      <p className="leading-5">
                        <small>{instructor.email}</small>
                      </p>
                    </div>
                  </div>
                </td>
                {/* Specialization */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{instructor.specialization}</p>
                  </div>
                </td>
                {/* Courses */}
                <td className="px-6 py-4">
                  <div>
                    <p>{instructor.courses}</p>
                  </div>
                </td>
                {/* Students */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(instructor.students)}</p>
                  </div>
                </td>
                {/* Rating */}
                <td className="px-6 py-4">
                  <div>
                    <p>{instructor.rating}</p>
                  </div>
                </td>
                {/* Earning */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(instructor.earning)}</p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <span
                      className={`px-2 py-1 ${
                        instructor.status === "active"
                          ? "text-[#4BB54B] bg-[#4BB54B1A]"
                          : instructor?.status === "review"
                          ? "text-[#FD7E14] bg-[#FFF2E6]"
                          : "text-[#D70000] bg-[#FF53536B]"
                      } text-sm rounded-sm`}
                    >
                      {getCapitalizedWord(instructor.status)}
                    </span>
                  </div>
                </td>
                {/* Action */}
                <td className="px-6 py-4">
                  <button className="cursor-pointer">
                    <RiInformationLine className="text-[26px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
