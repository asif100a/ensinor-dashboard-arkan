"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserRole } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {setCurrentUser} from "../../../../hooks/manageUser";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type InputUserTypes = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function SignIn() {
   const router = useRouter();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<InputUserTypes>();

  const handleSignIn: SubmitHandler<InputUserTypes> = async (data) => {
    const toastId = toast.loading("Signing the user");
    console.log("toastId: ", toastId);
    console.log("Sign in data: ", data);
    let userRole: UserRole = "";

    switch (data?.email) {
      case "student@gmail.com":
        userRole = "student";
        break;
      case "instructor@gmail.com":
        userRole = "instructor";
        break;
      case "employee@gmail.com":
        userRole = "employee";
        break;
      case "businessInstructor@gmail.com":
        userRole = "businessInstructor";
        break;
      case "companysAdmin@gmail.com":
        userRole = "companysAdmin";
        break;
      case "superAdmin@gmail.com":
        userRole = "superAdmin";
        break;
      default:
        userRole = "";
        toast.dismiss(toastId);
        toast.error("This email not found!");
    }

    if (!userRole) return;
    if (!(data.password === "112233")) {
      toast.dismiss(toastId);
      return toast.error("Password does no match");
    }

    const res = await setCurrentUser(userRole);
    console.log("Login Response: ", res);
    toast.dismiss(toastId);
    toast.success(res.message);
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center xl:gap-[70px] lg:gap-12 w-full h-screen overflow-hidden bg-white dark:bg-gray-800 p-6">
      <div className="lg:w-3/5">
        <Image
          src="/images/sign-in/sign-in.png"
          alt="Sign In Image"
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

        <Card className="w-full border-none shadow-none p-[52px]">
          {/* Sign In Form */}
          <div className="mb-6 space-y-2">
            <h2 className="text-3xl font-semibold text-black-normal">
              Sign In
            </h2>
            <p className="text-lg">Please login to continue to your account.</p>
          </div>

          <div>
            <CardContent>
              <form
                onSubmit={handleSubmit(handleSignIn)}
                className="grid gap-12"
              >
                <div className="flex flex-col gap-12">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                      required
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                      required
                      {...register("password", { required: true })}
                    />
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Input
                        type="checkbox"
                        id="rememberMe"
                        className="w-5 h-5"
                        required
                        {...register("rememberMe", { required: true })}
                      />
                      <Label htmlFor="rememberMe">Remember me</Label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="cursor-pointer hover:text-[#FFDE59]"
                    >
                      Forget password?
                    </Link>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
