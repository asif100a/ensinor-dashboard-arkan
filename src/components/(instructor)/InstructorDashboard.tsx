"use client";

import React from "react";
import States from "./instructor_dashboard/States";
import OverviewChart from "./instructor_dashboard/OverviewChart";
import MostSellingCourses from "./instructor_dashboard/MostSellingCourses";

export default function InstructorDashboard() {
  return (
    <div className="flex-1 p-3 md:p-6 space-y-6">
      {/* Stats */}
      <States />

      {/* Overview Chart */}
      <OverviewChart />

      {/* Most Selling Courses */}
      <MostSellingCourses />
    </div>
  );
}
