"use client";

import CoInstructorsForm from "@/components/(bInstructor-cAdmin)/coInstructors/CoInstructorsForm";
import CurrentColnstructorsTable from "@/components/(bInstructor-cAdmin)/coInstructors/CurrentColnstructorsTable";
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
