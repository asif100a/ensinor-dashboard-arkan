import React from "react";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BundleCourseTypes } from "@/lib/types";
import getFormatPrice from "../../../../utils/getFormatPrice";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";

interface CoursesBundleTableProps {
  tHeads: string[];
  bundleCoursesData: BundleCourseTypes[];
}

export default function CoursesBundleTable({
  tHeads,
  bundleCoursesData,
}: CoursesBundleTableProps) {
  return (
    <div className="flex flex-col mt-6">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                {[...bundleCoursesData, ...bundleCoursesData].map((course) => (
                  <tr key={course._id} className="border-b border-[#606060]">
                    {/* Bundle Name */}
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <h6 className="text-black-primary font-semibold">
                          {course.bundleName}
                        </h6>
                        <p>{course.description}</p>
                      </div>
                    </td>
                    {/* Included Courses */}
                    <td className="px-6 py-4">
                      <ul>
                        {course.includedCourses.map((courseName, index) => (
                          <li
                            key={index}
                            className="text-black-primary font-semibold text-nowrap"
                          >
                            ✦ {courseName}
                          </li>
                        ))}
                      </ul>
                    </td>
                    {/* Price */}
                    <td className="px-6 py-4">
                      <p className="font-semibold">${getFormatPrice(course.price)}</p>
                    </td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <div>
                        {course.status === "active" ? (
                          <p className="text-[#4BB54B] text-center text-sm bg-[#C6E5C6] p-1 rounded-md">
                            {getCapitalizedWord(course.status)}
                          </p>
                        ) : (
                          <p className="text-[#D70000] text-center text-sm bg-[#FF53536B] p-1 rounded-md">
                            {getCapitalizedWord(course.status)}
                          </p>
                        )}
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer  text-[#4BB54B] bg-[#C6E5C6] p-1.5 rounded-full">
                          <FiEdit className="text-2xl" />
                        </button>
                        <button className="cursor-pointer  text-[#D70000] bg-[#FF53536B] p-1 rounded-full">
                          <RxCross2 className="text-[26px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
