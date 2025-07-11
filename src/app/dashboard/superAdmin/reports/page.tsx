"use client";

import ReportTabs from "@/components/(superAdmin)/reports/ReportTabs";
import StudentReportTable from "@/components/(superAdmin)/reports/StudentReportTable";
import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";

const tabs: string[] = [
  "Student Reports",
  "Course Reports",
  "Revenue Reports",
  "Business Reports",
  "Event Reports",
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader title="Reports" description="" leftContent="null" />

      {/* Tabs */}
      <ReportTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Report Tables */}
      {activeTab === tabs[0] && <StudentReportTable />}
    </div>
  );
}
