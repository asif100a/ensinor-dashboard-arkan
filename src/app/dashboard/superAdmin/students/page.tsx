"use client";

import CourseTabs from "@/components/(superAdmin)/courses/CourseTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import StudentsTable from "@/components/(superAdmin)/students/StudentsTable";
import { StudentTypes } from "@/lib/types";
import PrintAndExportButtons from "@/components/PrintAndExportButtons";
import AddStudentPopup from "@/components/custom-ui/popups/AddStudentPopup";

const tabs: string[] = ["All Students", "Active", "Inactive", "Under Review"];

const students: StudentTypes[] = [
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "active",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "inactive",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "active",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "review",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "inactive",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "active",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "review",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "active",
  },
  {
    name: "Shahid Hasan",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    address: "Dhaka",
    department: "Engineering",
    enrolledCourses: 1,
    progress: 32,
    active: "Yesterday",
    status: "inactive",
  },
];

export default function Students() {
  const [isAddStudentsOpen, setIsAddStudentsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [activeStudents, setActiveStudents] = useState<StudentTypes[]>([]);
  const [inactiveStudents, setInactiveStudents] = useState<StudentTypes[]>([]);
  const [reviewStudents, setReviewStudents] = useState<StudentTypes[]>([]);

  useEffect(() => {
    if(students.length > 0) {
      const filteredActive = students?.filter(sh => sh.status === 'active');
      setActiveStudents(filteredActive);

      const filteredInactive = students?.filter(st => st.status === 'inactive');
      setInactiveStudents(filteredInactive);
      
      const filteredReview = students?.filter(st => st.status === 'review');
      setReviewStudents(filteredReview);
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
          title="Students"
          description="Manage and monitor all Instructors on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddStudentsOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Student</span>
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
      {activeTab === tabs[0] && <StudentsTable students={students} activeTab={activeTab} />}
      {activeTab === tabs[1] && <StudentsTable students={activeStudents} activeTab={activeTab} />}
      {activeTab === tabs[2] && <StudentsTable students={inactiveStudents} activeTab={activeTab} />}
      {activeTab === tabs[3] && <StudentsTable students={reviewStudents} activeTab={activeTab} />}

      {/* Print & Export::Buttons */}
      <PrintAndExportButtons />

      {/* Add Student Popup */}
      {isAddStudentsOpen && <AddStudentPopup setIsOpenPopup={setIsAddStudentsOpen} />}
    </div>
  );
}
