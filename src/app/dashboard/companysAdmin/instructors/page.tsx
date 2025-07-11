"use client";

import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import getCapitalizedWord from "../../../../../utils/getCapitalizedWord";

const tabs: string[] = [
  "All Instructors",
  "Active",
  "Inactive",
  "Under Review",
];

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

const allInstructor = [
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'active'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'inactive'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'active'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'inactive'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'active'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'inactive'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'active'},
    {instructorName: "Shahid Hasan", email: "shahidhasan@gmail.com", specialization: "Web Development", courses: 23, students: 4700, rating: 4.9, earning: 34000, status: 'inactive'},
];

export default function Instructors() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SectionHeader
          title="Instructors"
          description="Manage instructors and their courses on your platform"
          leftContent="null"
        />
        <button
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Instructor</span>
        </button>
      </div>

      <div className="w-fit overflow-hidden p-1.5 bg-white rounded-lg flex items-center gap-6">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-nowrap focus:outline-none px-4 py-2 text-black-primary text-lg font-medium cursor-pointer ${
              tab === activeTab
                ? "bg-yellow-primary"
                : "bg-transparent hover:bg-[#e1e3e4]"
            } rounded-md`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
        {/* Section Header */}
        <div>
          <SectionHeader
            title="Current Co-Instructors"
            description=""
            leftContent="null"
          />
        </div>

        {/* Table */}
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
                  {allInstructor.map((instructor) => (
                    <tr
                      key={instructor.email}
                      className="border-b border-[#606060]"
                    >
                      {/* Name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <p>{instructor.instructorName}</p>
                        </div>
                      </td>
                      {/* Specialization */}
                      <td className="px-6 py-4">
                        <div>
                          <p>{instructor.email}</p>
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
                                ? "text-[#4BB54B] bg-[#4BB54B1A]"
                                : instructor.status === "Pending"
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
        </div>
      </div>
    </div>
  );
}
