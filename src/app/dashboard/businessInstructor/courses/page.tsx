import CourseTable from "@/components/(businessInstructor)/myCourses/CourseTable";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import { CourseTypes } from "@/lib/types";
import React from "react";

const coursesData: CourseTypes = {
  _id: "#738",
  courseThumnail: "/images/dashboard/courses/course-1.png",
  courseName: "Professional Graphic Design",
  enrolled: 4300,
  status: "Live",
  amount: 1420,
  lectures: 48,
  duration: "35h 07m",
};

export default function Course() {
  const tHeads: string[] = [
    "Courses Name",
    "Enrolled",
    "Status",
    "Amount",
    "Action",
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="p-6 space-y-6 bg-white rounded-lg">
        <SectionHeader
          title="My Courses List"
          description=""
          leftContent="simpleSearchForm"
          options={{
            name: "link",
            content: "Create a New Course",
            link: "/dashboard/instructors/courses/create-new-course",
            type: "fill",
          }}
        />

        {/* Table */}
        <CourseTable tHeads={tHeads} coursesData={coursesData} />
      </div>
      <PaginationBar />
    </div>
  );
}
