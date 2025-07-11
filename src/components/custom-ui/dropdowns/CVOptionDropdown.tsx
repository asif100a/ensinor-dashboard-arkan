"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

export default function CVOptionDropdown() {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDisplayDropdown(!displayDropdown)}
        className={`w-fit text-left px-4 py-3  bg-yellow-primary flex items-center gap-2 text-black rounded-lg cursor-pointer`}
      >
        <SlOptionsVertical className="text-lg" />
      </button>

      {/* Dropdown contents */}
      {displayDropdown && (
        <div className="absolute right-0 z-20 bg-white w-fit rounded-lg overflow-hidden shadow-md">
          {/* Edit */}
          <button className="px-5 py-3 hover:bg-gray-background flex items-center gap-2 cursor-pointer">
            <Image
              src="/icons/edit.svg"
              alt="Edit"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="pr-5">Edit</span>
          </button>
          {/* Delete */}
          <button className="px-5 py-3 hover:bg-gray-background flex items-center gap-2 cursor-pointer">
            <Image
              src="/icons/delete.svg"
              alt="Delete"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="pr-5">Delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
