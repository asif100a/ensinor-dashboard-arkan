import InstructorCard from "@/components/custom-ui/cards/instructors/InstructorCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function ReviewInstructorList() {
  return (
    <div className="inline-block min-w-full align-middle">
      {/* Table Header */}
      <div className="p-6">
        <SectionHeader
          title="Under Review Instructors"
          description="Manage instructors and their courses on your platform"
          leftContent="null"
        />
      </div>

      {/* Instructor List */}
      <div className="space-y-6">
        {[0, 1].map((_, i) => (
          <InstructorCard key={i} />
        ))}
      </div>
    </div>
  );
}
