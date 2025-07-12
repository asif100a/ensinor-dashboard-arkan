import React from "react";
import SectionHeader from "@/components/SectionHeader";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface BusinessTypes {
    businessName: string;
    employees: number;
    coursesPurchased: number;
    completionRate: number;
    monthlySpend: number;
}

const tHeads: string[] = [
  "Business Name",
  "Employees",
  "Courses Purchased",
  "Completion Rate",
  "Monthly Spend",
];

const revenues: BusinessTypes[] = [
  {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
   {
   businessName: "UX-Innovate",
   employees: 217,
   coursesPurchased: 571,
   completionRate: 87,
   monthlySpend: 7320
  },
];

export default function BusinessReportTable() {
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
                {/* Business Name */}
                <td className="px-6 py-4">
                  <div>
                    <p>{revenue.businessName}</p>
                  </div>
                </td>
                {/* Employees */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">${getFormatPrice(revenue.employees)}</p>
                  </div>
                </td>
                {/* Courses Purchased */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(revenue.coursesPurchased)}</p>
                  </div>
                </td>
                {/* Completion Rate */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(revenue.completionRate)}%</p>
                  </div>
                </td>
                {/* Monthly Spend */}
                <td className="px-6 py-4">
                  <div>
                    <p>%{getFormatPrice(revenue.monthlySpend)}</p>
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
