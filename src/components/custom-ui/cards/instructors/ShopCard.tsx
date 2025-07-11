import { ShopTypes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ShopCardProps {
  item: ShopTypes;
}

export default function ShopCard({ item }: ShopCardProps) {
  const { _id, thumbnail, title, description, productManager, price } = item;

  return (
    <div className="w-full bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
      {/* Image Section */}
      <Image
        src={thumbnail}
        alt="Event Thumbnail"
        width={284}
        height={230}
        className="w-full h-[180px] rounded-[8px] object-cover"
      />

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <div>
          <Link href={`/shop/details/${_id}`}>
            <h2 className="text-xl font-medium text-black-primary hover:text-yellow-500">
              {title || "Shop Title"}
            </h2>
          </Link>
        </div>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Shop Description"}
        </p>
        {/* Product manager & Price */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-normal text-black-secondary">
            By{" "}
            <span className="font-medium">
              {productManager || "Product Manager"}
            </span>
          </p>
          <p className="text-black text-xl font-semibold">${price}</p>
        </div>
        {/* Action Buttons */}
        <div className="w-full flex items-center justify-between gap-4">
          {/* Remove */}
          <button
            className={`w-full flex justify-center items-center py-2 border border-yellow-primary text-black-normal font-semibold rounded-lg cursor-pointer`}
          >
            Remove
          </button>
          {/* Edit */}
          <button
            className={`w-full flex justify-center items-center py-2 bg-yellow-primary text-black-normal font-semibold rounded-lg cursor-pointer`}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
