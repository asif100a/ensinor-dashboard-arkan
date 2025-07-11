import React from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DatePicker from "react-datepicker";
import { Button } from "../ui/button";

interface EditInformationFormProps {
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function EditInformationForm({selectedDate, setSelectedDate}: EditInformationFormProps) {
  return (
    <Card className="w-full max-w-[872px] border-none shadow-none bg-inherit md:px-[24px] py-[28px] mx-auto">
      <div>
        <CardContent>
          <form className="grid gap-12">
            <div className="flex flex-col gap-12">
              {/* Name */}
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Phone */}
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="Enter your phone number"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Address */}
              <div className="grid gap-3">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Date Of Birth */}
              <div className="grid gap-3">
                <Label htmlFor="birthDate">Date Of Birth</Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date ? date : new Date())}
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
            >
              Save
            </Button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
