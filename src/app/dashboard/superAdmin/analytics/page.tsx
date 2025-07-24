"use client";

import AnalyticsStates from "@/components/(superAdmin)/analytics/AnalyticsStates";
import ContentGrowthChart from "@/components/(superAdmin)/analytics/charts/ContentGrowthChart";
import CourseCategoriesChart from "@/components/(superAdmin)/analytics/charts/CourseCategoriesChart";
import EnrolmentTrendsChart from "@/components/(superAdmin)/analytics/charts/EnrolmentTrendsChart";
import RevenueBreakdownChart from "@/components/(superAdmin)/analytics/charts/RevenueBreakdownChart";
import RevenueDistributionChart from "@/components/(superAdmin)/analytics/charts/RevenueDistributionChart";
import UsersOverviewChart from "@/components/(superAdmin)/analytics/charts/UsersOverviewChart";
import SelectMonthDropdown from "@/components/(superAdmin)/analytics/SelectMonthDropdown";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";

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
        <SelectMonthDropdown months={months} />
      </div>

      {/* Tab Contents */}
      {activeTab === tabs[0] && (
        <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueBreakdownChart />
          <RevenueDistributionChart />
        </div>
      )}
      {activeTab === tabs[1] && <EnrolmentTrendsChart />}
      {activeTab === tabs[2] && (
        <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseCategoriesChart />
          <ContentGrowthChart />
        </div>
      )}
      {activeTab === tabs[3] && <UsersOverviewChart />}
    </div>
  );
}
