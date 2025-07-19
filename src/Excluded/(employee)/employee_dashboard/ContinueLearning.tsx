import React from "react";
import CourseCard from "../../common/CourseCard";
import { CourseDataTypes } from "@/lib/types";

const inprogressData: CourseDataTypes = {
  title: "Professional Graphic Design",
  category: "Design",
  duration: "35h 07m",
  progress: 32,
};

export default function ContinueLearning() {
  return (
    <section className="w-full bg-white p-3 md:p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-semibold mb-6">Continue Learning</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {[0, 1, 2].map((key: number) => (
          <CourseCard key={key} courseData={inprogressData} />
        ))}
      </div>
    </section>
  );
}
