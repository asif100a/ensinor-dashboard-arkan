"use client";

import CoInstructorsForm from "@/components/(businessInstructor)/coInstructors/CoInstructorsForm";
import CurrentColnstructorsTable from "@/components/(businessInstructor)/coInstructors/CurrentColnstructorsTable";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function CoInstructors() {

  return (
    <div className="p-6 space-y-6">
      {/* Co-Instructors::Form */}
     <CoInstructorsForm />
     {/* Current Co-Instructor::Table */}
     <CurrentColnstructorsTable />
    </div>
  );
}
