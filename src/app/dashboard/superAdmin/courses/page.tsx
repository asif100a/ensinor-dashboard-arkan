"use client";

import CoursesTable from "@/components/(superAdmin)/courses/CoursesTable";
import CourseTabs from "@/components/(superAdmin)/courses/CourseTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CourseTypes } from "@/lib/types";
import AddCoursePopup from "@/components/custom-ui/popups/AddCoursePopup";

export type NewCourseTypes = Pick<
  CourseTypes,
  | "courseName"
  | "instructor"
  | "category"
  | "amount"
  | "enrolled"
  | "rating"
  | "status"
>;

const courseTabs: string[] = ["All Courses", "Published", "Under Review"];

const courses: NewCourseTypes[] = [
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    courseName: "UX/UI Design Fundamentals",
    instructor: "Shahid Hasan",
    category: "Design",
    amount: 321,
    enrolled: 2056,
    rating: 4.8,
    status: "Review",
  },
];

export default function Courses() {
  const [isAddCoursesOpen, setIsAddCoursesOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(courseTabs[0]);
  const [publishedCourses, setPublishedCourses] = useState<NewCourseTypes[]>([]);
  const [reviewCourses, setReviewCourses] = useState<NewCourseTypes[]>([]);

  useEffect(() => {
    if(courses.length > 0) {
      const filteredPublished = courses?.filter(crs => crs.status === 'Published');
      setPublishedCourses(filteredPublished);

      const filteredReview = courses?.filter(crs => crs.status === 'Review');
      setReviewCourses(filteredReview);
    }
  }, []);

  const handleSearch = () => {
    // console.log("Clicked Search");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SectionHeader
          title="Courses"
          description="Manage and monitor all courses on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddCoursesOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Course</span>
        </button>
      </div>

      <div className="w-full flex md:flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="w-full">
          <CourseTabs
            tabs={courseTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Search Field & Filter Button */}
        <div className="w-full flex items-center lg:justify-end gap-6">
          <SimpleSearchForm handleSearch={handleSearch} />
          {/* Button */}
          <button
            className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
          >
            <span>Filter</span>
            <Image
              src="/icons/filter.svg"
              alt="Filter"
              width={32}
              height={32}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Courses Tables */}
      {activeTab === courseTabs[0] && <CoursesTable courses={courses} activeTab={activeTab} />}
      {/* Courses Tables */}
      {activeTab === courseTabs[1] && <CoursesTable courses={publishedCourses} activeTab={activeTab} />}
      {/* Courses Tables */}
      {activeTab === courseTabs[2] && <CoursesTable courses={reviewCourses} activeTab={activeTab} />}

      {/* Add Course Popup */}
      {isAddCoursesOpen && <AddCoursePopup setIsOpenPopup={setIsAddCoursesOpen} />}
    </div>
  );
}
