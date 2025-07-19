import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

export default function QuizScoresEventAttendance() {
  return (
    <div className="p-6 space-y-8 bg-white rounded-xl">
        <SectionHeader title="Quiz Scores & Event Attendance" description="View learner performance metrics" leftContent="null" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
}

export function Card() {
  return (
    <div className="w-full bg-gray-background text-black-primary rounded-xl p-6">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src="/icons/quiz.svg"
            alt="Quiz"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <h2 className="text-lg font-semibold">Java Script Basics Quiz</h2>
      </div>
      <div className="mt-4 space-y-2">
        <p>
          Total Attendance{" "}
          <span className="float-right font-medium">15,267</span>
        </p>
        <p>
          Average Score <span className="float-right font-medium">80%</span>
        </p>
        <p>
          Highest Score <span className="float-right font-medium">100%</span>
        </p>
        <p>
          Lowest Score <span className="float-right font-medium">48%</span>
        </p>
      </div>
    </div>
  );
}
