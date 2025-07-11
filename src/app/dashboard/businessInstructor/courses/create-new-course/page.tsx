"use client";

import MyCoursesTabs from "@/components/(businessInstructor)/myCourses/MyCoursesTabs";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import CourseDetails from "@/components/(businessInstructor)/myCourses/tabContents/CourseDetails";
import CourseMedia from "@/components/(businessInstructor)/myCourses/tabContents/CourseMedia";

const tabs = [
  { name: "Course details", count: 3 },
  { name: "Course media", count: 2 }
];

export default function CreateNewCourse() {
  const [activeTab, setActiveTab] = useState("Course details");

  return (
    <div className="p-6 space-y-6">
      <MyCoursesTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Form */}
      <Card className="w-full border-none shadow-none bg-white p-0 py-6 md:p-6 md:py-12">
        {/* Course Details */}
        {activeTab === tabs[0]?.name && <CourseDetails />}
        {activeTab === tabs[1]?.name && <CourseMedia />}
      </Card>
    </div>
  );
}
