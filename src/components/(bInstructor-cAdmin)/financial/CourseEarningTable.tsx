import SectionHeader from "@/components/SectionHeader";
import React from "react";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface FinancialTypes {
  course: string;
  sales: number;
  amount: number;
  date: string;
}

const tHeads: string[] = [
  "Course Name",
  "Sales",
  "Price",
  "Last Sale",
];

const finances: FinancialTypes[] = [
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "Tomorrow"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "28 Sep 2025"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "Tomorrow"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "28 Sep 2025"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "Tomorrow"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "28 Sep 2025"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "Tomorrow"
  },
  {
    course: "Full Stack Development",
    sales: 320,
    amount: 148.0,
    date: "28 Sep 2025"
  },
];

export default function CourseEarningTable() {
  return (
    <div className="p-6 bg-white rounded-xl space-y-8">
      <SectionHeader
        title="Course Earning"
        description="Manage your earnings, orders, and payouts"
        leftContent="simpleSearchForm"
      />

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
            {finances.map((finance: FinancialTypes, i: number) => (
              <tr key={i} className="border-b border-[#606060]">
                {/* Course Name */}
                <td className="px-6 py-4">
                  <div>
                    <p>{finance.course}</p>
                  </div>
                </td>
                {/* Sales */}
                <td className="px-6 py-4">
                  <div>
                    <p>{getFormatPrice(finance.sales)}</p>
                  </div>
                </td>
                {/* Price */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(finance.amount)}</p>
                  </div>
                </td>
                {/* Last Sale */}
                <td className="px-6 py-4">
                  <div>
                    <p>{finance.date}</p>
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
