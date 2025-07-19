import ProgressReportCard from "@/components/custom-ui/cards/ProgressReportCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function ProgressReports() {
  return (
    <div className="p-6 space-y-8 bg-white rounded-xl">
        <SectionHeader title="Quiz Scores & Event Attendance" description="View learner performance metrics" leftContent="null" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <ProgressReportCard key={idx} />
        ))}
      </div>
    </div>
  );
}
