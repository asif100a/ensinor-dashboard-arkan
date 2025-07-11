"use client";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState } from "react";

interface CourseDetailsProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function CourseDetails({setActiveTab}: CourseDetailsProps) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Type course description...",
    }),
    []
  );

  const handleSubmit = (data: any) => {
    console.log("Create course form data: ", data);

    setActiveTab("Course media");
  };

  return (
    <div>
      <CardContent>
        <form onSubmit={handleSubmit} className="text-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Course Title */}
          <div className="md:col-span-2 grid gap-3">
            <Label htmlFor="fullName" className=" text-lg">
              Course Title
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Type course name "
              className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Short Description */}
          <div className="md:col-span-2 grid gap-3">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Short Description
            </Label>
            <Textarea
              id="description"
              placeholder="Type course description"
              className="w-full h-[90px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Course Category::Selection */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Course Category
            </Label>
            <Select>
              <SelectTrigger className="w-full h-[60px] px-3 py-7 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course Category</SelectLabel>
                  <SelectItem value="easy">UI/UX</SelectItem>
                  <SelectItem value="medium">Frontend</SelectItem>
                  <SelectItem value="hard">Backend</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Course Level::Selection */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Course Level
            </Label>
            <Select>
              <SelectTrigger className="w-full h-[60px] px-3 py-7 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course Level</SelectLabel>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Course Language::Selection */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Course Language
            </Label>
            <Select>
              <SelectTrigger className="w-full h-[60px] px-3 py-7 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course Language</SelectLabel>
                  <SelectItem value="easy">English</SelectItem>
                  <SelectItem value="medium">Arabic</SelectItem>
                  <SelectItem value="hard">French</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Total lecture */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="totalLecture" className=" text-lg">
              Total lecture
            </Label>
            <Input
              id="country"
              type="number"
              placeholder="Enter total lecture"
              className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Course Time */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="duration" className=" text-lg">
              Course Time
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter course time"
              className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Course price */}
          <div className="col-span-1 md:col-span-1 grid gap-3">
            <Label htmlFor="duration" className=" text-lg">
              Course price
            </Label>
            <Input
              id="city"
              type="number"
              placeholder="Enter course price"
              className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
              required
            />
          </div>
          {/* Add Description */}
          <div className="md:col-span-2 grid gap-3">
            <Label htmlFor="phoneNumber" className=" text-lg">
              Add Description
            </Label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </div>

          <button className="col-span-2 w-full bg-yellow-primary text-black-primary text-lg font-medium py-3 rounded-md hover:bg-yellow-500 cursor-pointer">
            Next
          </button>
        </form>
      </CardContent>
    </div>
  );
}
