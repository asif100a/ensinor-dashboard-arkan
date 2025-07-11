"use client";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CreateNewCourseBundle() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Create a New Bundle-Course"
        description="Create a new course bundle to offer multiple courses at a discounted price."
        leftContent="null"
      />

      <Card className="w-full bg-inherit border-none shadow-none md:px-[24px] py-[28px] mx-auto">
        <div>
          <CardContent>
            <form className="grid gap-8">
              <div className="flex flex-col gap-8 bg-white p-6 rounded-lg">
                {/* Bundle Name */}
                <div className="grid gap-3">
                  <Label htmlFor="name">Bundle Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Type Bundle name "
                    className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                {/* Bundle Description */}
                <div className="grid gap-3">
                  <Label htmlFor="bundleDescription">Bundle Description</Label>
                  <Textarea
                    id="bundleDescription"
                    placeholder="Type Bundle Description"
                    className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                {/* Bundle price */}
                <div className="grid gap-3">
                  <Label htmlFor="phone">Bundle price</Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Enter bundle price"
                    className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                {/* Discount Percentage */}
                <div className="grid gap-3">
                  <Label htmlFor="address">Discount Percentage</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter Discount Percentage"
                    className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                {/* Select Courses tor the Bundle */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border p-6 rounded-md"
                    >
                      <Checkbox id="terms" className="size-5" />
                      <div className="space-y-1 -mt-1">
                        <Label htmlFor="terms" className="text-base">
                          Web Development
                        </Label>
                        <p>$305.99</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Submit & Cancel Buttons */}
              <div className="flex justify-end items-center gap-6">
                <button
                  type="button"
                  className="w-fit h-14 px-12 font-semibold cursor-pointer text-lg border border-[#FFDE59] text-[#262626] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-fit h-14 px-12 font-semibold cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed rounded-md"
                >
                  Upload
                </button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
