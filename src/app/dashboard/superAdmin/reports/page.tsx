"use client";

import BusinessReportTable from "@/components/(superAdmin)/reports/BusinessReportTable";
import CourseReportTable from "@/components/(superAdmin)/reports/CourseReportTable";
import EventsReportTable from "@/components/(superAdmin)/reports/EventsReportTable";
import ReportTabs from "@/components/(superAdmin)/reports/ReportTabs";
import RevenueReportTable from "@/components/(superAdmin)/reports/RevenueReportTable";
import StudentReportTable from "@/components/(superAdmin)/reports/StudentReportTable";
import EditAndExportButtons from "@/components/EditAndExportButtons";
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
      {activeTab === tabs[1] && <CourseReportTable />}
      {activeTab === tabs[2] && <RevenueReportTable />}
      {activeTab === tabs[3] && <BusinessReportTable />}
      {activeTab === tabs[4] && <EventsReportTable />}

      {/* PDF & Export::Button */}
      <EditAndExportButtons />
    </div>
  );
}
