import SectionHeader from "@/components/SectionHeader";
import { PointsBreakdownTypes } from "@/lib/types";
import React from "react";

interface YourLearningPointsProps {
  totalPoints: number;
  level: number;
  progressToNextLevel: number;
  pointsBreakdown: PointsBreakdownTypes[];
}

export default function YourLearningPoints({
  totalPoints,
  level,
  progressToNextLevel,
  pointsBreakdown,
}: YourLearningPointsProps) {
  return (
    <div className="p-6 bg-white rounded-xl space-y-6">
      <SectionHeader
        title="Your Learning Points"
        description="Earn points by completing courses. quizzes. ana engaging With the community"
        leftContent="null"
      />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-black-normal">
              {totalPoints} <span className="text-base">Points</span>
            </h2>
            <p className="text-black-primary">
              Level {level}. {totalPoints} points to level {level + 1}
            </p>
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-black-secondary font-medium">
              <p>Progress to Level 6</p>
              <p>{progressToNextLevel}% Complete</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-yellow-300 h-2.5 rounded-full"
                style={{ width: `${progressToNextLevel}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-black-normal">
          <h3 className="text-lg font-semibold">Points Breakdown</h3>
          <ul className="mt-4 space-y-2">
            {pointsBreakdown.map((item, index) => (
              <li key={index} className="flex justify-between text-gray-600">
                <span>{item.category}</span>
                <span>{item.points} points</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
