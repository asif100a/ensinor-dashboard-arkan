import CoursesBundleTable from "@/components/(bInstructor-cAdmin)/coursesBundle/CoursesBundleTable";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import { BundleCourseTypes } from "@/lib/types";
import React from "react";

const tHeads = [
  "Bundle Name",
  "Included Courses",
  "Price",
  "Status",
  "Actions",
];

const bundleCoursesData: BundleCourseTypes[] = [
  {
    _id: "#001",
    bundleName: "Web Development Bundle",
    description: "A comprehensive bundle for aspiring web developers.",
    includedCourses: ["Web Development", "Mobile App Development"],
    price: 199,
    status: "active",
  },
  {
    _id: "#002",
    bundleName: "Data Science Bundle",
    description: "A complete bundle for data science enthusiasts.",
    includedCourses: ["Web Development", "Mobile App Development"],
    price: 299,
    status: "inactive",
  },
];

export default function CoursesBundle() {
//   const router = useRouter();

//   const handleCreateNewBundle = () => {
//     // Logic to handle creating a new bundle
//     console.log("Create a new bundle course");
//     router.push("/dashboard/businessInstructor/courses-bundle/create-new-course-bundle");
//   };

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Course Bundle List"
        description=""
        leftContent="null"
        options={{ name: "button", content: "Create a New Bundle-Course", link: "/dashboard/businessInstructor/courses-bundle/create-new-course-bundle", type: "fill" }}
      />

      <div className="p-6 space-y-6 bg-white rounded-lg">
        <CoursesBundleTable
          tHeads={tHeads}
          bundleCoursesData={bundleCoursesData}
        />
      </div>
      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}
