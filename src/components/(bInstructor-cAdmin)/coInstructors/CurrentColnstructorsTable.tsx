import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const tHeads: string[] = [
  "Name",
  "Email",
  "Courses",
  "Status",
  "Permissions",
  "Action",
];

const conInstructor = {
  _id: "#001",
  name: "John Doe",
  email: "shahidhasan@gmail.com",
  courseName: "Web Development",
  status: "Active",
  permissions: ["Edit", "Delete"],
};

export default function CurrentColnstructorsTable() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
      {/* Section Header */}
      <div>
        <SectionHeader
          title="Current Co-Instructors"
          description=""
          leftContent="null"
        />
      </div>

      {/* Table */}
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
                {Array.from({ length: 4 }).map(() => (
                  <tr
                    key={conInstructor._id}
                    className="border-b border-[#606060]"
                  >
                    {/* Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <p>{conInstructor.name}</p>
                      </div>
                    </td>
                    {/* Email */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{conInstructor.email}</p>
                      </div>
                    </td>
                    {/* Courses */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{conInstructor.courseName}</p>
                      </div>
                    </td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <div>
                        <span
                          className={`px-2 py-1 ${
                            conInstructor.status === "Active"
                              ? "text-[#4BB54B] bg-[#4BB54B1A]"
                              : conInstructor.status === "Pending"
                              ? "text-[#FD7E14] bg-[#FFF2E6]"
                              : "text-[#D70000] bg-[#FF53536B]"
                          } text-sm rounded-sm`}
                        >
                          {conInstructor.status}
                        </span>
                      </div>
                    </td>
                    {/* Permissions */}
                    <td>
                      <div className="flex items-center gap-2">
                        {conInstructor.permissions?.map(
                          (permission: string) => (
                            <span
                              key={permission}
                              className="px-2 py-1 bg-[#4BB54B1A] text-[#4BB54B] text-sm rounded-sm"
                            >
                              {permission}
                            </span>
                          )
                        )}
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <button className="cursor-pointer  text-[#D70000]">
                        <MdDeleteForever className="text-[26px]" />
                      </button>
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
