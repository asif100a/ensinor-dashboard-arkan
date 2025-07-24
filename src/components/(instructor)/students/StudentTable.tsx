"use client";

import { StudentTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuInfo } from "react-icons/lu";

interface StudentTableProps {
  tHeads: string[];
  studentsData: StudentTypes;
}

export default function StudentTable({
  tHeads,
  studentsData,
}: StudentTableProps) {
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
                    key={studentsData._id}
                    className="border-b border-[#606060]"
                  >
                    {/* Student Name & Image */}
                    <td className="px-6 py-4">
                      <div className="w-full flex items-center gap-2">
                        <Image
                          src={studentsData?.image || '/images/dashboard/student.png'}
                          alt={studentsData?.studentName || 'Student image'}
                          width={48}
                          height={40}
                          className="w-12 h-12 rounded"
                        />
                        <div className="w-full space-y-1 text-black-primary">
                          <h5 className="text-black-primary font-semibold text-nowrap">{studentsData.studentName}</h5>
                          <p className="flex items-center gap-1">
                            <CiLocationOn className="text-lg" />
                            <span className="text-sm">
                              {studentsData.address}
                            </span>
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* Email */}
                    <td className="px-6 py-4">
                      <div className="w-full">
                        <p>{studentsData.email}</p>
                      </div>
                    </td>
                    {/* Department */}
                    <td className="px-6 py-4">
                      <div>
                        <span>{studentsData.department}</span>
                      </div>
                    </td>
                    {/* Enrolled Courses */}
                    <td className="px-6 py-4">
                      <div className="w-full">
                        <p className="text-nowrap">{studentsData.enrolledCourses} Enrolled</p>
                        <p className="text-xs">{studentsData.courseName}</p>
                      </div>
                    </td>
                    {/* Progress */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{studentsData.progress}% Completed</p>
                      </div>
                    </td>
                    {/* Active */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{studentsData.active}</p>
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer">
                          <LuInfo className="text-2xl" />
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
