import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import { StudentTypes } from "@/lib/types";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface StudentsTableProps {
  students: StudentTypes[];
  activeTab: string;
}

const tHeads: string[] = [
  "Name",
  "Email",
  "Department",
  "Courses",
  "Progress",
  "Active",
  "Status",
  "Action",
];

export default function StudentsTable({
  students,
  activeTab,
}: StudentsTableProps) {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
       title={
          activeTab.includes("All") ? "All Students" : `${activeTab} Students`
        }
        description="Manage students and their courses on your platform"
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
            {students.map((student: StudentTypes) => (
              <tr key={student.email} className="border-b border-[#606060]">
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={student.image || "/images/dashboard/student.png"}
                      alt={student.name || "Student Name"}
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    {/* Address */}
                    <div>
                      <p className="font-semibold leading-6">{student.name}</p>
                      <p className="leading-6 flex items-center gap-1">
                        <TfiLocationPin className="text-lg" />
                        <small>{student.address}</small>
                      </p>
                    </div>
                  </div>
                </td>
                {/* Email */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{student.email}</p>
                  </div>
                </td>
                {/* Department */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.department}</p>
                  </div>
                </td>
                {/* Courses */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.enrolledCourses} Enrolled</p>
                  </div>
                </td>
                {/* Progress */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.progress}% Complete</p>
                  </div>
                </td>
                {/* Active */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.active}</p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <span
                      className={`px-2 py-1 ${
                        student.status === "active"
                          ? "text-[#4BB54B] bg-[#4BB54B1A]"
                          : student.status === "review"
                          ? "text-[#FD7E14] bg-[#FFF2E6]"
                          : "text-[#D70000] bg-[#FF53536B]"
                      } text-sm rounded-sm`}
                    >
                      {getCapitalizedWord(student.status || "")}
                    </span>
                  </div>
                </td>
                {/* Action */}
                <td className="px-6 py-4">
                  {activeTab === "Under Review" ? (
                    <div className="flex items-center gap-2">
                      <button className="cursor-pointer  text-[#4BB54B] border border-[#4BB54B] p-1 rounded-full">
                        <IoCheckmarkSharp className="text-2xl" />
                      </button>
                      <button className="cursor-pointer  text-[#D70000] border border-[#D70000] p-1 rounded-full">
                        <RxCross2 className="text-[26px]" />
                      </button>
                    </div>
                  ) : (
                    <button className="cursor-pointer">
                      <RiInformationLine className="text-[26px]" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
