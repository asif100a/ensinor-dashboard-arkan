"use client";

import InstructorDashboard from "@/components/(instructor)/InstructorDashboard";
import BusinessInstructorDashboard from "@/components/(bInstructor-cAdmin)/BusinessInstructorDashboard";
import StudentDashboard from "@/components/(student-employee)/StudentDashboard";
import { User, UserRole } from "@/lib/types";
import React from "react";
import CompanysAdminDashboard from "@/components/(bInstructor-cAdmin)/CompanysAdminDashboard";
import SuperAdminDashboard from "@/components/(superAdmin)/SuperAdminDashboard";
import EmployeeDashboard from "@/components/(student-employee)/EmployeeDashboard";
import { useEffect } from "react";
import { getCurrentUser } from "../../../hooks/manageUser";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
   const router = useRouter();
   const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/sign-in");
    }
    setUser(currentUser);
  }, []);
  console.log("user: ", user);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      {user?.userRole === ("student" as UserRole) && <StudentDashboard />}
      {user?.userRole === ("instructor" as UserRole) && <InstructorDashboard />}
      {user?.userRole === ("employee" as UserRole) && <EmployeeDashboard />}
      {user?.userRole === ("businessInstructor" as UserRole) && (
        <BusinessInstructorDashboard />
      )}
      {user?.userRole === ("companysAdmin" as UserRole) && <CompanysAdminDashboard />}
      {user?.userRole === ("superAdmin" as UserRole) && <SuperAdminDashboard />}
    </div>
  );
}
