import React from "react";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import { InstructorTypes } from "@/lib/types";

interface InstructorsTableProps {
  tHeads: string[];
  instructors: InstructorTypes[];
}

export default function InstructorsTable({
  tHeads,
  instructors,
}: InstructorsTableProps) {
  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                <tr
                  key={instructor.email}
                  className="border-b border-[#606060]"
                >
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
                      <p>{instructor.students}</p>
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
                      <p>{instructor.earning}</p>
                    </div>
                  </td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <div>
                      <span
                        className={`px-2 py-1 ${
                          instructor.status === "active"
                            ? "bg-[#067A3A4D] text-[#067A3A]"
                            : instructor.status === "review"
                            ? "bg-[#FFFAE6] text-[#CCB247]"
                            : "bg-[#FFD7D7] text-[#CA1D1D]"
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
    </div>
  );
}
