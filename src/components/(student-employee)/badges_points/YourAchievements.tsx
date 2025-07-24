import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

interface AchievementState {
  title: string;
  text: string;
  icon: string;
}
interface AchievementTypes {
  title: string;
  count: number;
  date: string;
  icon: string;
}

const states: AchievementState[] = [
  { title: "Course Completed", text: "5", icon: "/icons/badge.svg" },
  {
    title: "Certificates Earned",
    text: "5",
    icon: "/icons/certificate-blue.svg",
  },
  { title: "Days Streak", text: "5", icon: "/icons/streak.svg" },
];

const achievements: AchievementTypes[] = [
  {
    title: "Completed Web Development Course",
    date: "May 1, 2025",
    count: 250,
    icon: "/icons/tick-blue.svg",
  },
  {
    title: "7-Day Learning Streak",
    date: "May 1, 2025",
    count: 250,
    icon: "/icons/streak.svg",
  },
  {
    title: "Perfect Score on JavaScript Quiz",
    date: "May 1, 2025",
    count: 250,
    icon: "/icons/certificate-blue.svg",
  },
];

export default function YourAchievements() {
  return (
    <div className="p-6 bg-white rounded-xl space-y-6">
      <SectionHeader
        title="Your Achievements"
        description="Track your learning milestones and achievements"
        leftContent="null"
      />

      {/* States */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
        {states.map((state: AchievementState) => (
          <div
            key={state.title}
            className="p-6 bg-gray-background text-black-normal rounded-md flex items-center gap-3"
          >
            <div className="p-2 bg-[#7086FD4D] rounded-full">
              <Image
                src={state.icon}
                alt={state.title}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-lg font-medium">{state.title}</h4>
              <p className="text-2xl font-bold">{state.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Achievements */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Recent Achievements</h3>

        <div className="space-y-6">
          {achievements.map((achievement: AchievementTypes) => (
            <div
              key={achievement.title}
              className="p-6 bg-gray-background text-black-normal rounded-md flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#7086FD4D] rounded-full">
                  <Image
                    src={achievement.icon}
                    alt={achievement.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-medium">{achievement.title}</h4>
                  <p className="">{achievement.date}</p>
                </div>
              </div>

                <button className="bg-white rounded text-sm text-black-secondary px-3 py-1.5">+{achievement.count} pts</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
