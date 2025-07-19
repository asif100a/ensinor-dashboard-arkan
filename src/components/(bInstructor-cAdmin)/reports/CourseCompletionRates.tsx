import SectionHeader from "@/components/SectionHeader";
import RateCard from "@/components/custom-ui/cards/RateCard";
import React from "react";

export default function CourseCompletionRates() {
  return (
    <div className="p-6 space-y-8 bg-white rounded-xl">
      <SectionHeader
        title="Course Completion Rates"
        description="Monitor progress across all your courses"
        leftContent="null"
      />

      {/* Rate Cards */}
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <RateCard key={idx} />
        ))}
      </div>
    </div>
  );
}
