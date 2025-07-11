import { Activity } from "@/lib/types";
import React from "react";

interface RecentCourseActivityProps {
  activities: Activity[];
}

export default function RecentCourseActivity({ activities }: RecentCourseActivityProps) {
  return (
    <div className="w-full p-6 space-y-6 bg-white rounded-xl text-black-normal">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Recent Course Activity</h2>
        <p>Latest activities across your courses</p>
      </div>

      <div className="w-full space-y-5">
        {[...activities, ...activities]?.map((activity: Activity,) => (
          <div key={activity.id} className="w-full space-y-2">
            <h5 className="text-lg font-semibold">
              {activity.title}
            </h5>
            <p className="text-gray-600">
              <span>{activity.student} </span> • <span>{activity.time} Hours ago</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
