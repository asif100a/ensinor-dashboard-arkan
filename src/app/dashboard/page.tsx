import InstructorDashboard from "@/components/(instructor)/InstructorDashboard";
import BusinessInstructorDashboard from "@/components/(businessInstructor)/BusinessInstructorDashboard";
import EmployeeDashboard from "@/components/(employee)/EmployeeDashboard";
import StudentDashboard from "@/components/(student)/StudentDashboard";
import { UserRole } from "@/lib/types";
import React from "react";

export default function Dashboard() {
  const userRole: UserRole = 'businessInstructor'; // This should be dynamically set based on the logged-in user

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      {userRole === ('student' as UserRole) && <StudentDashboard />}
      {userRole === ('instructor' as UserRole) && <InstructorDashboard />}
      {userRole === ('employee' as UserRole) && <EmployeeDashboard />}
      {userRole === ('businessInstructor' as UserRole) && <BusinessInstructorDashboard />}
    </div>
  );
}
