"use client";

import AnalyticsStates from "@/components/(superAdmin)/analytics/AnalyticsStates";
import SelectMonthDropdown from "@/components/(superAdmin)/analytics/SelectMonthDropdown";
import Tabs from "@/components/Tabs";
import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import chart components with SSR disabled
const RevenueBreakdownChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/RevenueBreakdownChart"),
  { ssr: false }
);
const RevenueDistributionChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/RevenueDistributionChart"),
  { ssr: false }
);
const EnrolmentTrendsChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/EnrolmentTrendsChart"),
  { ssr: false }
);
const CourseCategoriesChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/CourseCategoriesChart"),
  { ssr: false }
);
const ContentGrowthChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/ContentGrowthChart"),
  { ssr: false }
);
const UsersOverviewChart = dynamic(
  () => import("@/components/(superAdmin)/analytics/charts/UsersOverviewChart"),
  { ssr: false }
);

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
      <AnalyticsStates />
      <div className="flex items-center justify-between gap-6">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <SelectMonthDropdown months={months} />
      </div>
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