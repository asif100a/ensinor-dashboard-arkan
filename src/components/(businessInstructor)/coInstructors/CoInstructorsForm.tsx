import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
            <div className="flex flex-col gap-8 px-6 rounded-lg">
              {/* Full Name */}
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
              {/* Email Address */}
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
