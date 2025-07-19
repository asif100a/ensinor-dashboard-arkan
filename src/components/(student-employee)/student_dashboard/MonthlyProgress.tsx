import React from "react";

const progresses = [
  { name: "UX/UI design", percentage: 32 },
  { name: "Web Development", percentage: 32 },
  { name: "Graphic Design", percentage: 32 },
];

export default function MonthlyProgress() {
  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-black-normal font-semibold mb-4">
          Monthly Progress
        </h3>
        <select className="px-6 py-2 text-sm font-normal text-black-secondary bg-yellow-primary rounded-full">
          <option>This Month</option>
        </select>
      </div>
      {/* Progresses */}
      <div className="space-y-5">
        {progresses.map((progress) => (
          <div key={progress.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <p>{progress.name}</p>
              <p>{progress.percentage}% Complete</p>
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
