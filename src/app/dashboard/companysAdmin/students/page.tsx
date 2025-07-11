"use client";

import StudentTable from "@/components/(instructor)/students/StudentTable";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import { InviteType, StudentTypes } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";

const studentsData: StudentTypes = {
  _id: "#0",
  studentName: "Shahid Hasan",
  email: "shahidhasan@gmail.com",
  image: "/images/dashboard/student.png",
  address: "Dhaka",
  department: "Engineering",
  enrolledCourses: 1,
  courseName: "UX/UI Design",
  progress: 32,
  active: "Yesterday",
  enrolledDate: "2-05-2025",
};

const tHeads: string[] = [
  "Student Name",
  "Email",
  "Department",
  "Courses",
  "Progress",
  "Active",
  "Action",
];

export default function Students() {
  const router = useRouter();

  const handleInvitation = (invite: InviteType) => {
    router.push(`/dashboard/companysAdmin/invitations?invite=${invite}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="p-6 bg-white rounded-xl">
        <div className="w-full flex items-center gap-6">
          <SectionHeader
            title="Student"
            description="Manage your learners and track their progress"
            leftContent="null"
          />
          <button
            onClick={() => handleInvitation("group")}
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            Invite Group
          </button>
          <button
            onClick={() => handleInvitation("individual")}
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            Invite Student
          </button>
        </div>

        {/* Student Table */}
        <StudentTable tHeads={tHeads} studentsData={studentsData} />
      </div>
      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}
