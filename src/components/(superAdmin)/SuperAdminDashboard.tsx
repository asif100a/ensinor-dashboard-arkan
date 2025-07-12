import React from "react";
import { Activity } from "@/lib/types";
import States from "./superAdmin_dashbaord/States";
import EarningOverview from "./superAdmin_dashbaord/EarningOverview";
import TopPerformingCourses from "./superAdmin_dashbaord/TopPerformingCourses";

export default function SuperAdminDashboard() {
  const recentActivities: Activity[] = [
    {
      id: 1,
      title: "React for Beginners",
      student: "John Doe",
      time: "2",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      student: "John Doe",
      time: "3",
    },
    {
      id: 3,
      title: "CSS Mastery",
      student: "John Doe",
      time: "4",
    },
  ];

  return (
    <div className="flex-1 p-3 md:p-6 space-y-6">
      {/* Stats */}
      <States />

      {/* Earning Overview */}
      <EarningOverview />
      <TopPerformingCourses />
    </div>
  );
}
