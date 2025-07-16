import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { RiInformationLine } from "react-icons/ri";
import Image from "next/image";
import { BusinessTypes } from "@/lib/types";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import getFormatPrice from "../../../../utils/getFormatPrice";

interface BusinessTableProps {
  businesses: BusinessTypes[];
  activeTab: string;
}

const tHeads: string[] = [
  "Business",
  "Plan",
  "Employees",
  "Active-Courses",
  "Total Spent",
  "Status",
  "Action",
];

export default function BusinessTable({
  businesses,
  activeTab,
}: BusinessTableProps) {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title={
          activeTab.includes("All") ? "All Business" : `${activeTab} Business`
        }
        description="Manage businesses and their courses on your platform"
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
            {businesses.map((business: BusinessTypes) => (
              <tr key={business.email} className="border-b border-[#606060]">
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={business.image || "/images/dashboard/business.png"}
                      alt={business.businessName || "business Name"}
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    {/* Email */}
                    <div>
                      <p className="font-semibold leading-6">
                        {business.businessName}
                      </p>
                      <p className="leading-6">
                        <small>{business.email}</small>
                      </p>
                    </div>
                  </div>
                </td>
                {/* Plan */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{business.plan}</p>
                  </div>
                </td>
                {/* Employees */}
                <td className="px-6 py-4">
                  <div>
                    <p>{business.employees} Person</p>
                  </div>
                </td>
                {/* Active-Courses */}
                <td className="px-6 py-4">
                  <div>
                    <p>{business.activeCourses}</p>
                  </div>
                </td>
                {/* Total Spent */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(business.totalSpent)}</p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <span
                      className={`px-2 py-1 ${
                        business.status === "active"
                          ? "text-[#4BB54B] bg-[#4BB54B1A]"
                          : business.status === "review"
                          ? "text-[#FD7E14] bg-[#FFF2E6]"
                          : "text-[#D70000] bg-[#FF53536B]"
                      } text-sm rounded-sm`}
                    >
                      {getCapitalizedWord(business.status || "")}
                    </span>
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
