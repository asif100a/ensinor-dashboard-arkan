'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ForgotPassword() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Redirect to the next page or perform any other action
    router.push("/verify-email");
  };

  return (
    <div className="flex items-center xl:gap-[70px] lg:gap-12 w-full h-screen overflow-hidden bg-white dark:bg-gray-800 p-6">
      <div className="lg:w-3/5">
        <Image
          src="/images/sign-in/forgot-password.png"
          alt="Forgot Password Image"
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

        {/* Forget Password Form */}
        <Card className="w-full border-none shadow-none p-[52px]">
          <div className="mb-6 space-y-2">
            <h2 className="text-3xl font-semibold text-black-normal">
              Forget Password
            </h2>
            <p className="text-lg">
              Please enter your email address to reset your password.
            </p>
          </div>

          <div>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-12">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
                >
                  Send OTP
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
