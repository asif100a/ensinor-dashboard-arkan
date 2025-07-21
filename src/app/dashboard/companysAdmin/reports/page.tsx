"use client";

import CourseCompletionRates from "@/components/(bInstructor-cAdmin)/reports/CourseCompletionRates";
import ProgressReports from "@/components/(bInstructor-cAdmin)/reports/ProgressReports";
import QuizScoresEventAttendance from "@/components/(bInstructor-cAdmin)/reports/QuizScoresEventAttendance";
import SectionHeader from "@/components/SectionHeader";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";

const tabs: string[] = [
    'Completion Rates',
    'Quiz Scores',
    'Export Reports',
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState<string>(tabs?.[0]);

  return (
    <div className="p-6 space-y-6">
      <div className="p-6 space-y-8 bg-white rounded-xl">
        {/* Section Header */}
        <SectionHeader
          title="Progress & Reports"
          description="Track learner progress and generate reports"
          leftContent="null"
        />

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Course Completion Rates */}
      {activeTab === tabs[0] && <CourseCompletionRates />}
      {activeTab === tabs[1] && <QuizScoresEventAttendance />}
      {activeTab === tabs[2] && <ProgressReports />}
    </div>
  );
}
