import SectionHeader from "@/components/SectionHeader";
import React from "react";
import getCapitalizedWord from "../../../../utils/getCapitalizedWord";
import getFormatPrice from "../../../../utils/getFormatPrice";

export interface PayoutsTypes {
  date: string;
  amount: number;
  paymentMethod: string;
  status: string;
}

const tHeads: string[] = ["Date", "Amount", "Payment Method", "Status"];

const orders: PayoutsTypes[] = [
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "completed",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "processing",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "completed",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "processing",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "completed",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "processing",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "completed",
  },
  {
    amount: 148.0,
    date: "28 Sep 2025",
    paymentMethod: "Bank Transfer",
    status: "processing",
  },
];

export default function FinancialPayoutsTable() {
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
            {orders.map((order: PayoutsTypes, i: number) => (
              <tr key={i} className="border-b border-[#606060]">
                {/* Date */}
                <td className="px-6 py-4">
                  <div>
                    <p>{order.date}</p>
                  </div>
                </td>
                {/* Amount */}
                <td className="px-6 py-4">
                  <div>
                    <p>${getFormatPrice(order.amount)}</p>
                  </div>
                  {/* Payment Method */}
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p>{order.paymentMethod} Person</p>
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
