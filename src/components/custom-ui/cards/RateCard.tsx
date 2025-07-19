import React from "react";

export default function RateCard() {
  return (
    <div className="w-full bg-gray-background p-6 rounded-xl">
      <div className="w-full space-y-4">
        <div className="flex justify-between items-center text-lg font-semibold text-black-primary">
          <h2 className="text-nowrap">
            Introduction to Web Development
          </h2>
          <p>78%</p>
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-200 rounded">
          <div
            className="bg-yellow-400 h-2 rounded"
            style={{ width: `78%` }}
          ></div>
        </div>

        {/* Date */}
        <p className="text-black-primary">74/100 Learners Completed</p>
      </div>
    </div>
  );
}
