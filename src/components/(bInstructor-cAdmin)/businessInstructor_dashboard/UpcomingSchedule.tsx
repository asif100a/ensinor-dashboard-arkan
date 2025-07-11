import { Activity } from "@/lib/types";
import React from "react";

interface RecentCourseActivityProps {
  schedules: Activity[];
}

export default function UpcomingSchedule({ schedules }: RecentCourseActivityProps) {
  return (
    <div className="w-full p-6 space-y-6 bg-white rounded-xl text-black-normal">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Upcoming Schedule</h2>
        <p>Latest activities across your courses</p>
      </div>

      <div className="w-full space-y-5">
        {[...schedules, ...schedules]?.map((schedule: Activity,) => (
          <div key={schedule.id} className="w-full space-y-2">
            <h5 className="text-lg font-semibold">
              {schedule.title}
            </h5>
            <p className="text-gray-600">
              <span>{schedule.student} </span> • <span>{schedule.time} Hours ago</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
