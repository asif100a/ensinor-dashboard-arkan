import PaymentStates from "@/components/(instructor)/payouts/PaymentStates";
import WithdrawTable from "@/components/(instructor)/payouts/WithdrawTable";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import { WithdrawTypes } from "@/lib/types";
import React from "react";

const withdrawData: WithdrawTypes[] = [
  {
    id: "#12345",
    amount: 500,
    paymentMethod: "PayPal",
    date: "2023-10-01",
    status: "Paid",
  },
  {
    id: "#12345",
    amount: 500,
    paymentMethod: "PayPal",
    date: "2023-10-01",
    status: "Paid",
  },
  {
    id: "#12345",
    amount: 500,
    paymentMethod: "PayPal",
    date: "2023-10-01",
    status: "Cancelled",
  },
  {
    id: "#12345",
    amount: 500,
    paymentMethod: "PayPal",
    date: "2023-10-01",
    status: "Pending",
  },
  {
    id: "#12345",
    amount: 500,
    paymentMethod: "PayPal",
    date: "2023-10-01",
    status: "Pending",
  },
];

export default function Payouts() {
  // Table headers
  const tHeads: string[] = [
    "Withdraw ID",
    "Amount",
    "Pyment Method",
    "Date",
    "Status",
  ];
  return (
    <div className="p-6 space-y-6">
      {/* States */}
      <PaymentStates />

      <div className="p-6 space-y-6 bg-white rounded-xl">
        {/* Section Header */}
        <SectionHeader
          title="Withdraw History"
          description=""
          leftContent="simpleSearchForm"
        />

        {/* Payout Table */}
        <WithdrawTable tHeads={tHeads} withdrawData={withdrawData} />
      </div>

      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}
