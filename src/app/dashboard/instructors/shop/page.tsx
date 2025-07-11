import ShopCards from "@/components/(instructor)/shop/ShopCards";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const shopItems = [
  {
    _id: "1",
    thumbnail: "/images/dashboard/shop/shop-photo.png",
    title: "Responsive Web Design",
    description:
      "Preference any astonished unreserved Mrs. Prosperous understoodMiddleton's in conviction an uncommonly do.",
    productManager: "Shahid Hasan",
    price: 120,
  },
  {
    _id: "2",
    thumbnail: "/images/dashboard/shop/shop-photo.png",
    title: "Responsive Web Design",
    description:
      "Preference any astonished unreserved Mrs. Prosperous understoodMiddleton's in conviction an uncommonly do.",
    productManager: "Shahid Hasan",
    price: 120,
  },
  {
    _id: "3",
    thumbnail: "/images/dashboard/shop/shop-photo.png",
    title: "Responsive Web Design",
    description:
      "Preference any astonished unreserved Mrs. Prosperous understoodMiddleton's in conviction an uncommonly do.",
    productManager: "Shahid Hasan",
    price: 120,
  },
  {
    _id: "4",
    thumbnail: "/images/dashboard/shop/shop-photo.png",
    title: "Responsive Web Design",
    description:
      "Preference any astonished unreserved Mrs. Prosperous understoodMiddleton's in conviction an uncommonly do.",
    productManager: "Shahid Hasan",
    price: 120,
  },
];

export default function Shop() {
  return (
    <div className="p-6 space-y-6">
      <div className="p-6 space-y-6 bg-white rounded-xl">
        {/* Section Header */}
        <SectionHeader
          title="My Shop List"
          description=""
          leftContent="simpleSearchForm"
          options={{ name: "button", content: "Upload New Book" }}
        />

        {/* Shop Cards */}
        <ShopCards shopItems={shopItems} />
      </div>
      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}
