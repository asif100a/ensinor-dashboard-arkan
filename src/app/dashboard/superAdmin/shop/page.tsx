"use client";

import CourseTabs from "@/components/(superAdmin)/courses/CourseTabs";
import { SimpleSearchForm } from "@/components/custom-ui/buttons/buttons";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { ShopTypes } from "@/lib/types";
import ShopsTable from "@/components/(superAdmin)/shops/ShopsTable";
import AddShopPopup from "@/components/custom-ui/popups/AddShopPopup";

export type NewShopTypes = Pick<
  ShopTypes,
  "title" | "author" | "category" | "price" | "sales" | "rating" | "status"
>;

const tabs: string[] = ["All Books", "Published", "Under Review"];

const shops: NewShopTypes[] = [
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Review",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Published",
  },
  {
    title: "UX/UI Design Fundamentals",
    author: "Shahid Hasan",
    category: "Design",
    price: 321,
    sales: 2056,
    rating: 4.8,
    status: "Review",
  },
];

export default function Shop() {
  const [isAddShopsOpen, setIsAddShopsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [publishedShops, setPublishedShops] = useState<NewShopTypes[]>([]);
  const [reviewShops, setReviewShops] = useState<NewShopTypes[]>([]);

  useEffect(() => {
    if (shops.length > 0) {
      const filteredPublished = shops?.filter(
        (sh) => sh.status === "Published"
      );
      setPublishedShops(filteredPublished);

      const filteredReview = shops?.filter((sh) => sh.status === "Review");
      setReviewShops(filteredReview);
    }
  }, [shops]);

  const handleSearch = () => {
    console.log("Clicked Search");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SectionHeader
          title="Shops"
          description="Manage and monitor all Shops on your platform"
          leftContent="null"
        />
        <button
          onClick={() => setIsAddShopsOpen(true)}
          className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
        >
          <FiPlus className="text-xl" />
          <span>Add Shop</span>
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

      {/* Shops Tables */}
      {activeTab === tabs[0] && (
        <ShopsTable shops={shops} activeTab={activeTab} />
      )}
      {/* Shops Tables */}
      {activeTab === tabs[1] && (
        <ShopsTable shops={publishedShops} activeTab={activeTab} />
      )}
      {/* Shops Tables */}
      {activeTab === tabs[2] && (
        <ShopsTable shops={reviewShops} activeTab={activeTab} />
      )}

      {/* Add Shop Popup */}
      {isAddShopsOpen && <AddShopPopup setIsOpenPopup={setIsAddShopsOpen} />}
    </div>
  );
}
