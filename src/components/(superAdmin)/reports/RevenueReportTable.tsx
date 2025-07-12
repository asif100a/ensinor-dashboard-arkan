import React from "react";
import { CourseTypes } from "@/lib/types";
import SectionHeader from "@/components/SectionHeader";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface Revenue {
    month: string;
    courseSales: number;
    bookSales: number;
    eventSales: number;
    totalRevenue: number;
    growth: number;
}

const tHeads: string[] = [
  "Month",
  "Courses Sales",
  "Book Sales",
  "Event Sales",
  "Total Revenue",
  "Growth",
];

const revenues: Revenue[] = [
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
  {
   month: "Jan 2025",
   courseSales: 24500,
   bookSales: 30500,
   eventSales: 50000,
   totalRevenue: 120000,
   growth: 24.0
  },
];

export default function RevenueReportTable() {
  return (
    <div className="inline-block min-w-full align-middle p-6 bg-white rounded-xl space-y-6">
      {/* Table Header */}
      <SectionHeader
        title="Revenue Reports"
        description="Track revenue from courses, books. and events"
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
            {revenues.map((revenue, idx: number) => (
              <tr key={idx} className="border-b border-[#606060]">
                {/* Month */}
                <td className="px-6 py-4">
                  <div>
                    <p>{revenue.month}</p>
                  </div>
                </td>
                {/* Courses Sales */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">${getFormatPrice(revenue.courseSales)}</p>
                  </div>
                </td>
                {/* Book Sales */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(revenue.bookSales)}</p>
                  </div>
                </td>
                {/* Event Sales */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(revenue.eventSales)}%</p>
                  </div>
                </td>
                {/* Total Revenue */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(revenue.totalRevenue)}</p>
                  </div>
                </td>
                {/* Growth */}
                <td className="px-6 py-4">
                  <div>
                    <p>+{revenue.growth}%</p>
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
