"use client";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Branding() {
  const [uploadedLogo, setUploadedLogo] = useState<File | undefined>(undefined);
  const [displayImageUrl, setDisplayImageUrl] = useState<
    string | ArrayBuffer | null
  >("");
  console.log("Uploaded Logo: ", uploadedLogo);
  console.log("displayImageUrl: ", displayImageUrl);

  useEffect(() => {
    if (uploadedLogo) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadedLogo);
      reader.onload = () => {
        setDisplayImageUrl(reader.result);
      };
    }
  }, [uploadedLogo]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Branding"
        description="Manage your account settings and preference"
        leftContent="null"
      />

      {/* Branding::Form */}
      <Card className="w-full border-none shadow-none mx-auto bg-white p-6">
        <div className="">
          <CardContent>
            <form className="grid gap-12">
              <div className="flex flex-col gap-12">
                {/* Brand Name */}
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-lg">
                    Brand Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter brand name"
                    className="w-full h-[60px] px-5 py-4 bg-gray-background text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                    required
                  />
                </div>
                {/* Primary Calor */}
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-lg">
                    Primary Calor
                  </Label>
                  <div className="w-full flex items-center gap-6">
                    <div className="p-1.5 h-[60px] w-[80px] bg-white border rounded-md">
                      <div className="w-[full h-full rounded-md bg-yellow-primary"></div>
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter primary calor"
                      className="w-full h-[60px] px-5 py-4 bg-gray-background text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                      required
                    />
                  </div>
                </div>
                {/* Brand Logo */}
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-lg">
                    Brand Logo
                  </Label>
                  <div className="w-full h-[144px] p-2 border bg-gray-background rounded-md flex justify-center items-center">
                    {displayImageUrl ? (
                      <Image
                        src={`${displayImageUrl}`}
                        alt={uploadedLogo?.name || "Uploaded Image"}
                        width={300}
                        height={200}
                        className="w-[200px] h-full rounded-md"
                      />
                    ) : (
                      <p className="font-medium text-black-secondary">
                        No logo uploaded
                      </p>
                    )}
                  </div>
                  {/* Upload File::Button */}
                  <div className="mt-2 w-fit">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col w-fit px-8 py-3 mx-auto text-center bg-gray-background border cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-md"
                    >
                      <h6 className="font-semibold">Upload logo</h6>

                      <input
                        id="dropzone-file"
                        type="file"
                        accept="image/*"
                        max={1}
                        onChange={(e) => setUploadedLogo(e.target.files?.[0])}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-6">
                <button
                  type="button"
                  className="w-fit px-12 h-12 cursor-pointer text-lg border border-[#FFDE59] text-[#262626] font-semibold hover:bg-[#FFD700] rounded-md active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-fit px-12 h-12 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] font-semibold hover:bg-[#FFD700] rounded-md active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
                >
                  Save Branding
                </button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
