"use client";

import CourseTabs from "@/components/(superAdmin)/courses/CourseTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BusinessTypes } from "@/lib/types";
import BusinessTable from "@/components/(superAdmin)/business/BusinessTable";
import PrintAndExportButtons from "@/components/PrintAndExportButtons";
import CreateBusinessPopup from "@/components/custom-ui/popups/CreateBusinessPopup";

const tabs: string[] = ["All Business", "Active", "Inactive", "Under Review"];

const businesses: BusinessTypes[] = [
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "active",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "inactive",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "review",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "inactive",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "active",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "inactive",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "review",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "inactive",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "active",
  },
  {
    businessName: "Innovate - UX",
    email: "shahidhasan@gmail.com",
    image: "/images/dashboard/student.png",
    plan: "Enterprise",
    employees: 467,
    activeCourses: 255,
    totalSpent: 25697,
    status: "inactive",
  },
];

export default function Business() {
  const [isAddStudentsOpen, setIsAddStudentsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [activeBusinesses, setActiveBusiness] = useState<BusinessTypes[]>([]);
  const [inactiveBusinesses, setInactiveBusiness] = useState<BusinessTypes[]>(
    []
  );
  const [reviewBusinesses, setReviewBusiness] = useState<BusinessTypes[]>([]);

  useEffect(() => {
    if (businesses.length > 0) {
      const filteredActive = businesses?.filter((sh) => sh.status === "active");
      setActiveBusiness(filteredActive);

      const filteredInactive = businesses?.filter(
        (st) => st.status === "inactive"
      );
      setInactiveBusiness(filteredInactive);

      const filteredReview = businesses?.filter((st) => st.status === "review");
      setReviewBusiness(filteredReview);
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
          title="Business"
          description="Manage and monitor business on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddStudentsOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Create Business</span>
        </button>
      </div>

      <div className="w-full flex md:flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="w-full">
          <CourseTabs
            tabs={tabs}
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

      {/* Instructors Tables */}
      {activeTab === tabs[0] && (
        <BusinessTable businesses={businesses} activeTab={activeTab} />
      )}
      {activeTab === tabs[1] && (
        <BusinessTable businesses={activeBusinesses} activeTab={activeTab} />
      )}
      {activeTab === tabs[2] && (
        <BusinessTable businesses={inactiveBusinesses} activeTab={activeTab} />
      )}
      {activeTab === tabs[3] && (
        <BusinessTable businesses={reviewBusinesses} activeTab={activeTab} />
      )}

      {/* Print & Export::Buttons */}
      <PrintAndExportButtons />

      {/* Create Business Popup */}
      {isAddStudentsOpen && (
        <CreateBusinessPopup setIsOpenPopup={setIsAddStudentsOpen} />
      )}
    </div>
  );
}
