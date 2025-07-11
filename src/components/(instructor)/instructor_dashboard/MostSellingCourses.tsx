import Image from "next/image";
import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface MostSellingCourseTypes {
  _id: string;
  courseName: string;
  courseThumnail: string;
  selling: string;
  amount: number;
}

const coursesData: MostSellingCourseTypes[] = [
  {
    _id: "#738",
    courseName: "UX/UI design",
    courseThumnail: "/images/dashboard/courses/course-1.png",
    selling: "102",
    amount: 1420,
  },
  {
    _id: "#738",
    courseThumnail: "/images/dashboard/courses/course-2.png",
    courseName: "UX/UI design",
    selling: "102",
    amount: 1420,
  },
  {
    _id: "#738",
    courseThumnail: "/images/dashboard/courses/course-1.png",
    courseName: "UX/UI design",
    selling: "102",
    amount: 1420,
  },
  {
    _id: "#738",
    courseThumnail: "/images/dashboard/courses/course-2.png",
    courseName: "UX/UI design",
    selling: "102",
    amount: 1420,
  },
];

export default function MostSellingCourses() {
  const tHeads: string[] = [
    "Selling ID",
    "Courses Name",
    "Selling",
    "Amount",
    "Action",
  ];

  return (
    <section className="bg-white p-6 rounded-xl">
      <div className="w-full flex flex-col md:flex-row lg:items-center justify-between gap-6">
        <h1 className="text-2xl font-semibold text-black-normal">
          Most Selling Courses
        </h1>

        <button className="px-3 py-1 cursor-pointer">View all</button>
      </div>

      {/* Table */}
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-lg">
                {/* T Head */}
                <thead className="bg-gray-background rounded-xl">
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
                  {coursesData.map((course: MostSellingCourseTypes) => (
                    <tr key={course._id} className="border-b border-[#606060]">
                      {/* Selling ID */}
                      <td className="px-6 py-4">
                        <div>
                          <p>{course._id}</p>
                        </div>
                      </td>
                      {/* Course Name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                           <Image
                            src={course.courseThumnail}
                            alt={course.courseName}
                            width={62}
                            height={40}
                            className="w-[62px] h-10 rounded-xs"
                          />
                          <p>{course.courseName}</p>
                        </div>
                      </td>
                      {/* Selling */}
                      <td className="px-6 py-4">
                        <div>
                          <p>{course.selling}</p>
                        </div>
                      </td>
                      {/* Amount */}
                      <td className="px-6 py-4">
                        <div>
                          <p>{course.amount}</p>
                        </div>
                      </td>
                      {/* Action */}
                      <td className="px-6 py-4">
                        <div>
                          <button className="cursor-pointer">
                            <IoMdInformationCircleOutline className="text-2xl" />
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
    </section>
  );
}
