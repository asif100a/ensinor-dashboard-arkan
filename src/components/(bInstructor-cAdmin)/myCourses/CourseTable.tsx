import Image from "next/image";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { CourseTypes } from "@/lib/types";

interface CourseTableProps {
  tHeads: string[];
  coursesData: CourseTypes;
}

export default function CourseTable({tHeads, coursesData}: CourseTableProps) {
  return (
    <div className="flex flex-col mt-6">
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
                {Array.from({ length: 8 }).map(() => (
                  <tr
                    key={coursesData._id}
                    className="border-b border-[#606060]"
                  >
                    {/* Course Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={coursesData.courseThumnail}
                          alt={coursesData.courseName}
                          width={62}
                          height={40}
                          className="w-[62px] h-10 rounded-xs"
                        />
                        <p>{coursesData.courseName}</p>
                      </div>
                    </td>
                    {/* Enrolled */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{coursesData.enrolled}</p>
                      </div>
                    </td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <div>
                        <span className="px-2 py-1 bg-[#4BB54B1A] text-[#4BB54B] text-sm rounded-xs">
                          {coursesData.status}
                        </span>
                      </div>
                    </td>
                    {/* Amount */}
                    <td className="px-6 py-4">
                      <div>
                        <p>${coursesData.amount}</p>
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer  text-[#4BB54B] bg-[#C6E5C6] p-1.5 rounded-full">
                          <FiEdit className="text-2xl" />
                        </button>
                        <button className="cursor-pointer  text-[#D70000] bg-[#FF53536B] p-1 rounded-full">
                          <RxCross2 className="text-[26px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
