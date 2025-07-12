import React from "react";
import { CourseTypes } from "@/lib/types";
import SectionHeader from "@/components/SectionHeader";

type NewCourseTypes = Pick<CourseTypes, "courseName" | "instructor" | "enrolled" | "completedPercentage" | "rating">;

const tHeads: string[] = [
  "Course Title",
  "Instructor",
  "Enrollments",
  "Completed Rate",
  "Rating",
];

const courses: NewCourseTypes[] = [
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "shahidhasan@gmail.com",
    enrolled: 1225,
    completedPercentage: 80,
    rating: 4.8,
  },
];

export default function CourseReportTable() {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="Course Reports"
        description="Track course enrollments, progress, and completions"
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
            {courses.map((course, idx: number) => (
              <tr key={idx} className="border-b border-[#606060]">
                {/* Course Title */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.courseName}</p>
                  </div>
                </td>
                {/* Instructor */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{course.instructor}</p>
                  </div>
                </td>
                {/* Enrollments */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.enrolled}</p>
                  </div>
                </td>
                {/* Completed Rate */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.completedPercentage}%</p>
                  </div>
                </td>
                {/* Rating */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.rating}</p>
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
