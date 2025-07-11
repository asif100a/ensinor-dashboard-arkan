import { CourseDataTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface CourseCardProps {
  courseData: CourseDataTypes;
  bgColor?: string;
}

export default function CourseCard({ courseData, bgColor }: CourseCardProps) {
  return (
    <div
      className={`${
        bgColor ? `bg-${bgColor}` : "bg-gray-background"
      } p-3 md:p-6 rounded-xl space-y-4`}
    >
      <Image
        src="/images/dashboard/course-card.jpg"
        alt="Course"
        width={504}
        height={230}
        className="w-full h-auto mx-auto mb-2 rounded-xl"
      />
      <h4 className="text-xl text-black-primary font-semibold">
        {courseData.title}
      </h4>
      <p className="text-black-primary text-base font-normal">
        {courseData.category}
      </p>
      <p className="text-sm font-normal text-black-secondary flex items-center justify-between">
        <span>{courseData.duration}</span>
        <span>{courseData.progress}% Complete</span>
      </p>
      <div className="w-full bg-gray-200 rounded">
        <div
          className="bg-yellow-400 h-2 rounded"
          style={{ width: courseData.progress + "%" }}
        ></div>
      </div>
      {/* Button */}
      <>
        {courseData.progress === 100 ? (
          <button className="mt-2 w-full bg-yellow-primary text-black-normal text-lg font-semibold py-2.5 rounded-xl cursor-pointer">
            Download Certificate
          </button>
        ) : (
          <button className="mt-2 w-full bg-black text-white text-lg font-semibold py-2.5 rounded-xl cursor-pointer">
            Continue
          </button>
        )}
      </>
    </div>
  );
}
