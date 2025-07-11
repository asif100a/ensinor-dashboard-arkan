"use client";

import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import { FiDownload, FiPlus } from "react-icons/fi";
import InstructorsTable from "@/components/(bInstructor-cAdmin)/instructors/InstructorsTable";
import { InstructorTypes } from "@/lib/types";
import InstructorTabs from "@/components/(bInstructor-cAdmin)/instructors/InstructorTabs";

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

const allInstructor: InstructorTypes[] = [
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "active",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "active",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "active",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "active",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 23,
    students: 4700,
    rating: 4.9,
    earning: 34000,
    status: "inactive",
  },
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

      {/* Tabs */}
      <InstructorTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

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
        <InstructorsTable tHeads={tHeads} allInstructor={allInstructor} />

        {/* PDF & Export::Button */}
        <div className="flex justify-end items-center gap-6">
          {/* PDF */}
          <button
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            <span>PDF</span>
            <FiDownload className="text-xl" />
          </button>
          {/* Export */}
          <button
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            <span>Export</span>
            <FiDownload className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
