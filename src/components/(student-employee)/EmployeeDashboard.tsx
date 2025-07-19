import React from "react";
import CompletedCourses from "../(student-employee)/student_dashboard/CompletedCourses";
import ContinueLearning from "../(student-employee)/student_dashboard/ContinueLearning";
import MonthlyProgress from "../(student-employee)/student_dashboard/MonthlyProgress";
import States from "../(student-employee)/student_dashboard/States";

export default function EmployeeDashboard() {
  return (
    <div className="flex-1 p-3 md:p-6">
      {/* Stats */}
      <States />

      {/* Continue Learning */}
      <ContinueLearning />

      {/* Monthly Progress & Completed Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonthlyProgress />

        <CompletedCourses />
      </div>
    </div>
  );
}
