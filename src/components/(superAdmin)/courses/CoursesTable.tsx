import React from "react";
import SectionHeader from "@/components/SectionHeader";
import getFormatPrice from "../../../../utils/getFormatPrice";
import { RiInformationLine } from "react-icons/ri";
import { NewCourseTypes } from "@/app/dashboard/superAdmin/courses/page";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

interface CoursesTableProps {
  courses: NewCourseTypes[];
  activeTab: string;
}

const tHeads: string[] = [
  "Title",
  "Instructor",
  "Category",
  "Price",
  "Enrolled",
  "Rating",
  "Status",
  "Action",
];

export default function CoursesTable({
  courses,
  activeTab,
}: CoursesTableProps) {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="All Courses"
        description="Manage and monitor all courses on your platform"
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
            {courses.map((course: NewCourseTypes, idx: number) => (
              <tr key={idx} className="border-b border-[#606060]">
                {/* Title */}
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
                {/* Category */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{course.category}</p>
                  </div>
                </td>
                {/* Price */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">
                      ${getFormatPrice(course.amount)}
                    </p>
                  </div>
                </td>
                {/* Enrolled */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(course.enrolled)}</p>
                  </div>
                </td>
                {/* Rating */}
                <td className="px-6 py-4">
                  <div>
                    <p>{course.rating}</p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <p
                      className={`w-fit text-sm text-center px-3 py-1 rounded-sm ${
                        course.status === "Published"
                          ? "bg-[#737373] text-white"
                          : course.status === "Pending"
                          ? "bg-[#FFFAE6] text-[#CCB247]"
                          : "bg-[#FFD7D7] text-[#CA1D1D]"
                      }`}
                    >
                      {course.status}
                    </p>
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
