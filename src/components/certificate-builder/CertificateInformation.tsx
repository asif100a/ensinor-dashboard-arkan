"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import Toggle from "../custom-ui/inputs/Toggle";
import { Textarea } from "../ui/textarea";
import DatePicker from "react-datepicker";

export default function CertificateInformation() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="space-y-6">
      {/* Business Information */}
      <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
        <h3 className="text-xl font-semibold text-black-normal flex items-center gap-2">
          <Image
            src="/icons/building.svg"
            alt="building"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span>Business Information</span>
        </h3>

        <form className="space-y-4">
          {/* Business Name */}
          <div className="md:col-span-2 grid gap-3">
            <Label
              htmlFor="businessName"
              className=" text-lg text-black-primary"
            >
              Business Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter Business Name"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Business Logo */}
          <div className="md:col-span-2 grid gap-3">
            <Label
              htmlFor="businessName"
              className=" text-lg text-black-primary"
            >
              Business Logo
            </Label>
            <input
              type="file"
              className="block w-full text-black-normal bg-white border border-gray-200 rounded-md file:bg-gray-background file:text-black-normal file:text-base file:px-6 file:py-4 file:border-none file:mr-4 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
            />
          </div>
        </form>
      </div>
      {/* Student Information */}
      <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
        <h3 className="text-xl font-semibold text-black-normal flex items-center gap-2">
          <Image
            src="/icons/student.svg"
            alt="building"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span>Student Information</span>
        </h3>

        <form className="space-y-4">
          {/* Student Name */}
          <div className="md:col-span-2 grid gap-3">
            <Label
              htmlFor="studentName"
              className=" text-lg text-black-primary"
            >
              Student Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter Student Name"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
        </form>
      </div>
      {/* Course Information */}
      <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
        <h3 className="text-xl font-semibold text-black-normal flex items-center gap-2">
          <Image
            src="/icons/book.svg"
            alt="building"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span>Course Information</span>
        </h3>

        <form className="space-y-4">
          {/* Course Name */}
          <div className="md:col-span-2 grid gap-3">
            <Label htmlFor="CourseName" className=" text-lg text-black-primary">
              Course Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter Course Name"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Instructor Name */}
          <div className="md:col-span-2 grid gap-3">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="instructorName"
                className=" text-lg text-black-primary"
              >
                Instructor Name
              </Label>

              {/* Toggle */}
              <Toggle />
            </div>

            <Input
              id="fullName"
              type="text"
              placeholder="Enter Instructor Name"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Study Hours */}
          <div className="md:col-span-2 grid gap-3">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="instructorName"
                className=" text-lg text-black-primary"
              >
                Study Hours
              </Label>

              {/* Toggle */}
              <Toggle />
            </div>

            <Input
              id="fullName"
              type="number"
              placeholder="Enter Study Hours"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Course Topics */}
          <div className="md:col-span-2 grid gap-3">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="instructorName"
                className=" text-lg text-black-primary"
              >
                Course Topics
              </Label>

              {/* Toggle */}
              <Toggle />
            </div>

            <Textarea
              id="fullName"
              placeholder="Enter Course Topics"
              className="w-full h-[120px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
        </form>
      </div>
      {/* Certificate Details */}
      <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
        <h3 className="text-xl font-semibold text-black-normal flex items-center gap-2">
          <Image
            src="/icons/certificate.svg"
            alt="certificate"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span>Certificate Details</span>
        </h3>

        <form className="space-y-4">
          {/* Course Completion Date */}
          <div className="md:col-span-2 grid gap-3">
            <Label
              htmlFor="businessName"
              className=" text-lg text-black-primary"
            >
              Course Completion Date
            </Label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date ? date : new Date())}
              className="w-full h-[60px] px-5 py-4 bg-gray-background text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
            />
          </div>
          {/* Certificate Reference */}
          <div className="md:col-span-2 grid gap-3">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="businessName"
                className=" text-lg text-black-primary"
              >
                Certificate Reference
              </Label>

              <button
                type="button"
                className="px-3 py-1 bg-white text-black-primary border border-[#D9D9D9] rounded-md cursor-pointer flex items-center gap-2"
              >
                <Image
                  src="/icons/generate.svg"
                  alt="generate"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />{" "}
                <span>Generate</span>
              </button>
            </div>

            <Input
              id="fullName"
              type="text"
              defaultValue={"ZL-2025-06524"}
              placeholder="Enter Certificate Reference"
              className="w-full h-[60px] px-6 py-2.5 bg-gray-background text-black-normal text-base rounded-lg placeholder:text-black-primary shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
