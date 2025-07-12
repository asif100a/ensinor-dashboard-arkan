import Image from "next/image";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const tHeads = [
  "Course Title",
  "Instructor",
  "Language",
  "Lectures",
  "Course type",
  "Price",
  "Action",
];

const wishListData = {
  _id: "1",
    courseThumnail: "/images/dashboard/course-card.jpg",
    courseName: "Introduction to React",
    instructor: "John Doe",
    language: "English",
    lectures: 10,
    courseType: "Beginner",
    price: 500,
};

export default function WishListTable() {
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
                {Array.from({ length: 8 }).map(() => (
                  <tr
                    key={wishListData._id}
                    className="border-b border-[#606060]"
                  >
                    {/* Course Title */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={wishListData.courseThumnail}
                          alt={wishListData.courseName}
                          width={62}
                          height={40}
                          className="w-[62px] h-10 rounded-xs"
                        />
                        <p>{wishListData.courseName}</p>
                      </div>
                    </td>
                    {/* Instructor */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{wishListData.instructor}</p>
                      </div>
                    </td>
                    {/* Language */}
                    <td className="px-6 py-4">
                      <div>
                        <span className="px-2 py-1 bg-[#4BB54B1A] text-[#4BB54B] text-sm rounded-xs">
                          {wishListData.language}
                        </span>
                      </div>
                    </td>
                    {/* Lectures */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{wishListData.lectures}</p>
                      </div>
                    </td>
                    {/* Course type */}
                    <td className="px-6 py-4">
                      <div>
                        <p className={`px-3 py-1 w-fit rounded-sm bg-[#FFFAE6] text-[#CCB247]`}>{wishListData.courseType}</p>
                      </div>
                    </td>
                    {/* Price */}
                    <td className="px-6 py-4">
                      <div>
                        <p>${wishListData.price}</p>
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer  text-[#D70000] bg-[#FF53536B] p-1 rounded-full">
                          <MdOutlineDeleteForever className="text-[26px]" />
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
