"use client";

import AnalyticsStates from "@/components/(superAdmin)/analytics/AnalyticsStates";
import RevenueBreakdownChart from "@/components/(superAdmin)/analytics/RevenueBreakdownChart";
import RevenueDistributionChart from "@/components/(superAdmin)/analytics/RevenueDistributionChart";
import Tabs from "@/components/Tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const tabs: string[] = ["Revenue", "Enrollments", "Content", "Users"];

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* States */}
      <AnalyticsStates />

      {/* Tabs & Dropdowns */}
      <div className="flex items-center justify-between gap-6">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="px-6 py-6 shadow-none border-none"
          >
            <Button variant="outline" className="text-base inline-flex">
              <span>This month</span> <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className="text-base">
              Select a month
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {months.map((month: string) => (
                <DropdownMenuItem key={month} className="text-base">
                  {month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tab Contents */}
      {activeTab === tabs[0] && (
        <div className="w-full flex items-center justify-between gap-6">
          <RevenueBreakdownChart />
          <RevenueDistributionChart />
        </div>
      )}
    </div>
  );
}
