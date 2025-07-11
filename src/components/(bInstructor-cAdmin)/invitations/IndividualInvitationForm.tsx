import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function InvitationForm() {
  return (
    <Card className="w-full bg-white border-none shadow-none md:px-0 py-6 mx-auto">
      {/* Section Header */}
      <div className="px-6">
        <SectionHeader
          title="Invite lndividual Learner"
          description=""
          leftContent="null"
        />
      </div>
      <div className="px-6 rounded-lg">
        <CardContent>
          <form className="grid gap-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Name */}
              {/* First Name */}
              <div className="grid gap-3">
                <Label htmlFor="name" className=" text-lg">
                  First Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Type your first name "
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="grid gap-3">
                <Label htmlFor="name" className=" text-lg">
                  Last Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Type your last name "
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
            </div>

            {/* Department */}
            <div className="grid gap-3">
              <Label htmlFor="name" className=" text-lg">
                Department
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Type your department name "
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
            {/* Email Address */}
            <div className="grid gap-3">
              <Label htmlFor="name" className=" text-lg">
                Email Address
              </Label>
              <Input
                id="name"
                type="email"
                placeholder="Type your email address"
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
            {/* Submit Buttons */}
            <Button
              type="submit"
              className="w-full h-14 px-12 font-semibold cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed rounded-md"
            >
              Send Invitation
            </Button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
