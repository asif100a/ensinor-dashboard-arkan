import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function FirstFieldGroup() {
  return (
    <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
      {/* Event Title */}
      <div className="md:col-span-2 grid gap-3">
        <Label htmlFor="fullName" className=" text-lg">
          Event Title
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Type event name "
          className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
          required
        />
      </div>
      {/* Short Slogan */}
      <div className="md:col-span-2 grid gap-3">
        <Label htmlFor="fullName" className=" text-lg">
          Short Slogan
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Type short slogan "
          className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
          required
        />
      </div>
      {/* Event thumbnails */}
      <div className="md:col-span-2 grid gap-3">
        <Label htmlFor="phoneNumber" className=" text-lg">
          Event thumbnails
        </Label>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center w-full p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-gray-500 dark:text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>

          <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
            Upload course image here, or{" "}
            <span className="text-[#5F83FA]">Browse</span>
          </h2>

          <p className="mt-2 text-sm tracking-wide text-gray-500 dark:text-gray-400">
            Note: Only JPG, JPEG and PNG. Our suggested dimensions are 600px *
            450px. Larger image will be cropped to 4:3 to fit our
            thumbnails/previews.
          </p>

          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}
