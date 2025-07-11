"use client";

import { WithdrawTypes } from "@/lib/types";
import React from "react";

interface StudentTableProps {
  tHeads: string[];
  withdrawData: WithdrawTypes[];
}

export default function WithdrawTable({
  tHeads,
  withdrawData,
}: StudentTableProps) {
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
                {[...withdrawData, ...withdrawData]?.map((withdraw: WithdrawTypes) => (
                  <tr
                    key={withdraw.id}
                    className="border-b border-[#606060]"
                  >
                    {/* Withdraw Id */}
                    <td className="px-6 py-4">
                      <p>{withdraw?.id}</p>
                    </td>
                    {/* Amount */}
                    <td className="px-6 py-4">
                      <div>
                        <p>${withdraw.amount}</p>
                      </div>
                    </td>
                    {/* Payment Mathod */}
                    <td className="px-6 py-4">
                      <div>
                        <span>{withdraw.paymentMethod}</span>
                      </div>
                    </td>
                    {/* Payment Date */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{withdraw.date}</p>
                      </div>
                    </td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <div>
                        <p>
                          {withdraw.status === "Paid" ? (
                            <span className="px-2 py-1 bg-[#4BB54B1A] text-[#4BB54B] text-sm rounded-xs">
                              {withdraw.status}
                            </span>
                          ) : withdraw?.status === "Pending" ? (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-sm rounded-xs">
                              {withdraw.status}
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded-xs">
                              {withdraw.status}
                            </span>
                          )}
                        </p>
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
