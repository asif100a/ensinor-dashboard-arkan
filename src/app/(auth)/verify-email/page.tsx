"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function VerifyEmail() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Redirect to the next page or perform any other action
    router.push("/set-new-password");
  };
  return (
    <div className="flex items-center xl:gap-[70px] lg:gap-12 w-full h-screen overflow-hidden bg-white dark:bg-gray-800 p-6">
      <div className="lg:w-3/5">
        <Image
          src="/images/sign-in/verify-email.png"
          alt="Login Image"
          width={1000}
          height={1000}
          className="hidden lg:block w-full h-full max-h-[976px] object-cover rounded-lg"
        />
      </div>

      {/* Right Section::htmlForm */}
      <div className="w-full px-6 py-8 md:px-8 lg:w-2/5">
        {/* Logo */}
        <div className="flex justify-center mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Image
              src="/images/logo.svg"
              alt="User"
              width={228}
              height={64}
              className="w-[228px] h-16"
            />
          </div>
        </div>

        {/* Verify Email Form */}
        <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] p-[52px]">
          <div className="mb-6 space-y-2">
            <h2 className="text-3xl font-semibold text-black-normal">
              Forget Password
            </h2>
            <p className="text-lg">
              Please enter your email address to reset your password.
            </p>
          </div>

          <CardContent>
            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <InputOTP maxLength={6} className="shadow-none text-lg">
                <InputOTPGroup className="flex items-center gap-3 md:gap-6 w-full">
                  <InputOTPSlot
                    index={0}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                  <InputOTPSlot
                    index={1}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                  <InputOTPSlot
                    index={2}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                  <InputOTPSlot
                    index={3}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                  <InputOTPSlot
                    index={4}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                  <InputOTPSlot
                    index={5}
                    className="w-full h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  />
                </InputOTPGroup>
              </InputOTP>
              <div className="w-full flex items-center justify-between">
                <p>Didn’t receive the code?</p>
                <button type="button" className="cursor-pointer text-[#1877F7]">
                  Resend
                </button>
              </div>
              <Button
                type="submit"
                className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
              >
                Verify email
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
