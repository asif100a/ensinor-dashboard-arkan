import SectionHeader from "@/components/SectionHeader";
import React from "react";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface OrderTypes {
  id: string;
  course: string;
  customer: string;
  amount: number;
  date: string;
  status: string;
}

const tHeads: string[] = [
  "Order ID",
  "Course",
  "Customer",
  "Amount",
  "Date",
  "Status",
];

const orders: OrderTypes[] = [
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "completed",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "Processing",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "completed",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "Processing",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "completed",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "Processing",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "completed",
  },
  {
    id: "EN20312",
    course: "Full Stack Development",
    customer: "Md. Shahid Hasan",
    amount: 148.0,
    date: "28 Sep 2025",
    status: "Processing",
  },
];

export default function FinancialOrdersTable() {
  return (
    <div className="p-6 bg-white rounded-xl space-y-8">
      <SectionHeader
        title="Orders"
        description="Recent purchases of your courses"
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
            {orders.map((order: OrderTypes) => (
              <tr key={order.id} className="border-b border-[#606060]">
                {/* Order ID */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-nowrap">{order.id}</p>
                  </div>
                </td>
                {/* Course */}
                <td className="px-6 py-4">
                  <div>
                    <p>{order.course}</p>
                  </div>
                </td>
                {/* Customer */}
                <td className="px-6 py-4">
                  <div>
                    <p>{order.customer} Person</p>
                  </div>
                </td>
                {/* Amount */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(order.amount)}</p>
                  </div>
                </td>
                {/* Date */}
                <td className="px-6 py-4">
                  <div>
                    <p>{order.date}</p>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4">
                  <div>
                    <span
                      className={`px-2 py-1 ${
                        order.status === "completed"
                          ? "text-[#4BB54B] bg-[#4BB54B1A]"
                          : "text-[#FD7E14] bg-[#FFF2E6]"
                      } text-sm rounded-sm`}
                    >
                      {getCapitalizedWord(order.status || "")}
                    </span>
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
