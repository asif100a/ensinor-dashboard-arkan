import React from "react";

const completedCourses = [
  { name: "UX/UI design", percentage: 100 },
  { name: "Web Development", percentage: 100 },
];

export default function CompletedCourses() {
  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Completed Courses</h3>
      <div className="space-y-2">
        {completedCourses.map((course) => (
          <div key={course.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <p>{course.name}</p>
              <p>{course.percentage}% Complete</p>
            </div>
            <div className="w-full bg-gray-200 rounded">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: "32%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
