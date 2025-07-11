import React from "react";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import { StudentTypes } from "@/lib/types";
import SectionHeader from "@/components/SectionHeader";

const tHeads: string[] = [
  "Name",
  "Email",
  "Courses  Enrolled",
  "Completed",
  "Active",
];

const students: StudentTypes[] = [
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    enrolledCourses: 6,
    completed: 3,
    active: "Yesterday",
  },
];

export default function StudentReportTable() {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="Student Reports"
        description="Track student enrollments, progress, and completions"
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
            {students.map((student) => (
              <tr key={student.email} className="border-b border-[#606060]">
                {/* Name */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.name}</p>
                  </div>
                </td>
                {/* Email */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{student.email}</p>
                  </div>
                </td>
                {/* Enrolled Courses */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.enrolledCourses}</p>
                  </div>
                </td>
                {/* Completed */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.completed}</p>
                  </div>
                </td>
                {/* Active */}
                <td className="px-6 py-4">
                  <div>
                    <p>{student.active}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
