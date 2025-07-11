import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// interface ChangePasswordFormProps {
    
// }

export default function ChangePasswordForm() {
  return (
    <Card className="w-full max-w-[872px] border-none shadow-none bg-inherit md:px-[24px] py-[28px] mx-auto">
      <div>
        <CardContent>
          <form className="grid gap-12">
            <div className="flex flex-col gap-6">
                <p className="text-black-normal">Your password must be 8-10 character long.</p>
              {/* Current Password */}
              <div className="grid gap-3">
                <Input
                  id="name"
                  type="password"
                  placeholder="Current Password"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* New Password */}
              <div className="grid gap-3">
                <Input
                  id="name"
                  type="password"
                  placeholder="New Password"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              {/* Confirm Password */}
              <div className="grid gap-3">
                <Input
                  id="name"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
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
