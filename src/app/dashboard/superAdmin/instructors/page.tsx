"use client";

import CourseTabs from "@/components/(superAdmin)/courses/CourseTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { InstructorTypes } from "@/lib/types";
import InstructorsTable from "@/components/(superAdmin)/Instructors/InstructorsTable";
import ReviewInstructorList from "@/components/(superAdmin)/Instructors/ReviewInstructorList";
import AddInstructorPopup from "@/components/custom-ui/popups/AddInstructorPopup";

const tabs: string[] = ["All Instructors", "active", "inactive", "Under Review"];

const instructors: InstructorTypes[] = [
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "active",
  },
  {
   instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "active",
  },
  {
   instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "active",
  },
  {
   instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "active",
  },
  {
   instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "inactive",
  },
  {
    instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "active",
  },
  {
   instructorName: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    specialization: "Web Development",
    courses: 32,
    students: 2056,
    rating: 4.8,
    earning: 450000,
    status: "inactive",
  },
];

export default function Instructors() {
  const [isAddInstructorsOpen, setIsAddInstructorsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [activeInstructors, setActiveInstructors] = useState<InstructorTypes[]>([]);
  const [inactiveInstructors, setInactiveInstructors] = useState<InstructorTypes[]>([]);

  useEffect(() => {
    if(instructors.length > 0) {
      const filteredActive = instructors?.filter(sh => sh.status === 'active');
      setActiveInstructors(filteredActive);

      const filteredInactive = instructors?.filter(sh => sh.status === 'inactive');
      setInactiveInstructors(filteredInactive);
    }
  }, []);

  const handleSearch = () => {
    // console.log("Clicked Search");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SectionHeader
          title="Instructors"
          description="Manage and monitor all Instructors on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddInstructorsOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Instructor</span>
        </button>
      </div>

      <div className="w-full flex md:flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="w-full">
          <CourseTabs
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

      {/* Instructors Tables */}
      {activeTab === tabs[0] && <InstructorsTable instructors={instructors} activeTab={activeTab} />}
      {activeTab === tabs[1] && <InstructorsTable instructors={activeInstructors} activeTab={activeTab} />}
      {activeTab === tabs[2] && <InstructorsTable instructors={inactiveInstructors} activeTab={activeTab} />}
      {activeTab === tabs[3] && <ReviewInstructorList />}

      {/* Add Instructor Popup */}
      {isAddInstructorsOpen && <AddInstructorPopup setIsOpenPopup={setIsAddInstructorsOpen} />}
    </div>
  );
}
