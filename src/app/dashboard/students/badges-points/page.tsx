"use client";

import BadgesProps from "@/components/(student-employee)/badges_points/BadgesSection";
import YourAchievements from "@/components/(student-employee)/badges_points/YourAchievements";
import YourLearningPoints from "@/components/(student-employee)/badges_points/YourLearningPoints";
import SectionHeader from "@/components/SectionHeader";
import { BadgeTypes, PointsBreakdownTypes } from "@/lib/types";
import React, { useState } from "react";

const totalPoints = 2589;
const level = 5;
const progressToNextLevel = 98;

const tabs: string[] = ["Earned Badges", "Available Badges"];

const earnedBadges: BadgeTypes[] = [
  {
    title: "Quick Starter",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/fly.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
  },
  {
    title: "Perfect Score",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/troffee.svg",
    earnedDate: "July 24, 2025",
    type: "Quiz",
    status: "Uncommon",
  },
  {
    title: "Web Developer",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/laptop.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
  },
  {
    title: "Consistent Learner",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/calendar-colored.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
  },
];
const availableBadges: BadgeTypes[] = [
  {
    title: "Course Creator",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/lock.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
  },
  {
    title: "Top Contributor",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/king-crown.svg",
    earnedDate: "July 24, 2025",
    type: "Quiz",
    status: "Uncommon",
    progress: 67,
  },
  {
    title: "Polyglot",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/globe.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
    progress: 67,
  },
  {
    title: "Data Scientist",
    description: "Complete your first course within 7 days Of enrollment",
    icon: "/icons/progress-colored.svg",
    earnedDate: "July 24, 2025",
    type: "Achievement",
    status: "Common",
    progress: 67,
  },
];

const pointsBreakdown: PointsBreakdownTypes[] = [
  { category: "Course Completion", points: 1500 },
  { category: "Quiz Performance", points: 1500 },
  { category: "Daily Logins", points: 1500 },
  { category: "Forum Participation", points: 1500 },
];

export default function BadgesPoints() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Badges & Points"
        description="Track achievements. badges, and points earned through learning"
        leftContent="null"
      />

      {/* Your Learning Points */}
      <YourLearningPoints
        totalPoints={totalPoints}
        level={level}
        progressToNextLevel={progressToNextLevel}
        pointsBreakdown={pointsBreakdown}
      />

      {/* Badges */}
      <BadgesProps
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        earnedBadges={earnedBadges}
        availableBadges={availableBadges}
      />

      {/* Your Achievements */}
      <YourAchievements />
    </div>
  );
}
