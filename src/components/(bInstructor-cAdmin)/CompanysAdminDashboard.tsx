import React from "react";
import States from "./businessInstructor_dashboard/States";
import RecentCourseActivity from "./businessInstructor_dashboard/RecentCourseActivity";
import { Activity } from "@/lib/types";
import UpcomingSchedule from "./businessInstructor_dashboard/UpcomingSchedule";

export default function CompanysAdminDashboard() {
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

      <div className="w-full flex gap-6">
        <RecentCourseActivity activities={recentActivities} />
        <UpcomingSchedule schedules={recentActivities} />
      </div>
    </div>
  );
}
