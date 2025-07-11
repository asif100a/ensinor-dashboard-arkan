import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

export default function CoInstructorsForm() {
  return (
    <Card className="w-full bg-white border-none shadow-none md:px-0 py-6 mx-auto">
      {/* Section Header */}
      <div className="px-6">
        <SectionHeader
          title="Create a New Bundle-Course"
          description="Create a new course bundle to offer multiple courses at a discounted price."
          leftContent="null"
        />
      </div>
      <div className="mt-">
        <CardContent>
          <form className="grid gap-8">
            <div className="grid grid-cols-2 gap-8 px-6 rounded-lg">
              {/* Full Name */}
              <div className="grid gap-3">
                <Label htmlFor="name" className=" text-lg">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Type your full name "
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Email Address */}
              <div className="grid gap-3">
                <Label htmlFor="bundleDescription" className=" text-lg">Email Address</Label>
                <Input
                  id="name"
                  type="email"
                  placeholder="Type email address "
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Select Courses */}
              <div className="grid gap-3">
                <Label htmlFor="phoneNumber" className=" text-lg">
                  Select Courses
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-[60px] px-3 py-7 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a course</SelectLabel>
                      <SelectItem value="easy">UI/UX Design</SelectItem>
                      <SelectItem value="medium">Frontend</SelectItem>
                      <SelectItem value="hard">AI/ML</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Select Courses tor the Bundle */}
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Checkbox id="terms" className="size-5" />
                    <Label htmlFor="terms" className="text-base">
                      Can Add Content
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            {/* Submit & Cancel Buttons */}
            <div className="flex justify-end items-center gap-6">
              <Button
                type="submit"
                className="w-fit h-14 px-12 font-semibold cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed rounded-md"
              >
                Send Invitation
              </Button>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
