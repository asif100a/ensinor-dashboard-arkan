import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCloudUpload } from "react-icons/ai";

export interface ResourceContents {
  resource: string;
  type: string;
  size: number;
  date: string;
}

const tHeads: string[] = ["Resource", "Type", "Size", "Date", "Action"];

const resourceContents: ResourceContents[] = [
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
  {
    resource: "Course Introduction.pdf",
    type: "PDF",
    size: 2.3,
    date: "19 July, 2025",
  },
];

export default function ManageContentTable() {
  return (
    <div className="w-full bg-white p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-black-primary">
        Manage Downloadable Content
      </h3>

      {/* Table */}
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
            {resourceContents.map(
              (instructor: ResourceContents, idx: number) => (
                <tr key={idx} className="border-b border-[#606060]">
                  {/* Resource */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/file.svg"
                        alt="File"
                        width={24}
                        height={24}
                        className="w-6 h-6 "
                      />
                      <p className="font-medium">{instructor.resource}</p>
                    </div>
                  </td>
                  {/* Type */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-nowrap">{instructor.type}</p>
                    </div>
                  </td>
                  {/* Size */}
                  <td className="px-6 py-4">
                    <div>
                      <p>{instructor.size}</p>
                    </div>
                  </td>
                  {/* Date */}
                  <td className="px-6 py-4">
                    <div>
                      <p>{instructor.date}</p>
                    </div>
                  </td>
                  {/* Action */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* upload */}
                      <button className="cursor-pointer  text-[#6595FF] p-1 rounded-full">
                        <AiOutlineCloudUpload className="text-3xl" />
                      </button>
                      {/* X */}
                      <button className="cursor-pointer  text-[#D70000] border border-[#D70000] p-1 rounded-full">
                        <RxCross2 className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
