"use client";

import SectionHeader from "@/components/SectionHeader";
import React, { useEffect, useState } from "react";
import { FiDownload, FiPlus } from "react-icons/fi";
import InstructorsTable from "@/components/(bInstructor-cAdmin)/instructors/InstructorsTable";
import { InstructorTypes } from "@/lib/types";
import InstructorTabs from "@/components/(bInstructor-cAdmin)/instructors/InstructorTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import Image from "next/image";
import AddInstructorPopup from "@/components/custom-ui/popups/AddInstructorPopup";

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
    status: "review",
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
    status: "review",
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
  const [activeInstructors, setActiveInstructors] = useState<InstructorTypes[]>([]);
  const [inactiveInstructors, setInActiveInstructors] = useState<InstructorTypes[]>([]);
  const [reviewInstructors, setReviewInstructors] = useState<InstructorTypes[]>([]);
  const [isAddInstructorOpen, setIsAddInstructorOpen] =
    useState<boolean>(false);

    useEffect(() => {
      const filteredActive = allInstructor.filter((instructor: InstructorTypes) => instructor.status === 'active');
      setActiveInstructors(filteredActive);

      const filteredInactive = allInstructor.filter((instructor: InstructorTypes) => instructor.status === 'inactive');
      setInActiveInstructors(filteredInactive);

      const filteredReview = allInstructor.filter((instructor: InstructorTypes) => instructor.status === 'review');
      setReviewInstructors(filteredReview);
    }, []);

  const handleSearch = () => {
    console.log("Form searched");
  };

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
          onClick={() => setIsAddInstructorOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Instructor</span>
        </button>
      </div>

      <div className="w-full flex md:flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="w-full">
          <InstructorTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Search Field & Filter Button */}
        <div className="w-full flex items-center lg:justify-end gap-6">
          <SimpleSearchForm handleSearch={handleSearch} />
          {/* Button */}
          <button
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            <span>Filter</span>
            <Image
              src="/icons/filter.svg"
              alt="Filter"
              width={32}
              height={32}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
        {/* Section Header */}
        <div>
          <SectionHeader
            title="All Instructor"
            description="Showing 8 out of 12 instructor"
            leftContent="null"
          />
        </div>

        {/* Table */}
        {activeTab === tabs[0] && (
          <InstructorsTable tHeads={tHeads} instructors={allInstructor} />
        )}
        {activeTab === tabs[1] && (
          <InstructorsTable tHeads={tHeads} instructors={activeInstructors} />
        )}
        {activeTab === tabs[2] && (
          <InstructorsTable tHeads={tHeads} instructors={inactiveInstructors} />
        )}
        {activeTab === tabs[3] && (
          <InstructorsTable tHeads={tHeads} instructors={reviewInstructors} />
        )}

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

      {/* Add Instructor::Popup */}
      {isAddInstructorOpen && (
        <AddInstructorPopup setIsOpenPopup={setIsAddInstructorOpen} />
      )}
    </div>
  );
}
