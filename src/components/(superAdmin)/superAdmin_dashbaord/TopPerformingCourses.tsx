import SectionHeader from "@/components/SectionHeader";
import React from "react";
import getFormatPrice from "../../../../utils/getFormatPrice";

const tHeads = [
  "Courses",
  "Instructor",
  "Category",
  "Enrollments",
  "Revenue",
  "Completion",
];

const courses = [
  {
    name: "UX/UI Design Fundamentals",
    Instructor: "Shahid Hasan",
    category: "App & Web Design", // Replace with actual image paths
    enrollments: 2634,
    Revenue: 25732,
    Completion: 80,
  },
  {
    name: "UX/UI Design Fundamentals",
    Instructor: "Shahid Hasan",
    category: "App & Web Design", // Replace with actual image paths
    enrollments: 2634,
    Revenue: 25732,
    Completion: 80,
  },
  {
    name: "UX/UI Design Fundamentals",
    Instructor: "Shahid Hasan",
    category: "App & Web Design", // Replace with actual image paths
    enrollments: 2634,
    Revenue: 25732,
    Completion: 80,
  },
  {
    name: "UX/UI Design Fundamentals",
    Instructor: "Shahid Hasan",
    category: "App & Web Design", // Replace with actual image paths
    enrollments: 2634,
    Revenue: 25732,
    Completion: 80,
  },
  {
    name: "UX/UI Design Fundamentals",
    Instructor: "Shahid Hasan",
    category: "App & Web Design", // Replace with actual image paths
    enrollments: 2634,
    Revenue: 25732,
    Completion: 80,
  },
];

export default function TopPerformingCourses() {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="Top Performing Courses"
        description=""
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
            {courses.map((course, i) => (
              <tr key={i} className="border-b border-[#606060]">
                {/* Name */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{course.name}</p>
                  </div>
                </td>
                {/* Instructor */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{course.Instructor}</p>
                  </div>
                </td>
                {/* Category */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.category}</p>
                  </div>
                </td>
                {/* Enrollments */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(course.enrollments)}</p>
                  </div>
                </td>
                {/* Revenue */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(course.Revenue)}</p>
                  </div>
                </td>
                {/* Earning */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.Completion}%</p>
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
