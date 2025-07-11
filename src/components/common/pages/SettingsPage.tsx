"use client";

import ChangePasswordForm from "@/components/settings/ChangePasswordForm";
import EditInformationForm from "@/components/settings/EditInformationForm";
import Image from "next/image";
import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";

const tabs: string[] = ["Personal Information", "Change Password"];

export default function SettingsPage() {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      {/* Your Profile */}
      <div className="w-full py-5 bg-white rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="relative w-fit h-fit">
          <Image
            src="/images/dashboard/user.jpg"
            alt="User"
            width={120}
            height={120}
            className="w-[120px] h-[120px] rounded-full border-2 border-yellow-primary"
          />
          <span className="absolute bottom-0 right-0 p-1 bg-[#FDFDFD] rounded-full">
            <RiEdit2Line className="text-2xl" />
          </span>
        </div>
        <div className="space-y-4 text-center md:text-start">
          <h2 className="text-2xl font-semibold text-black-normal">
            Shahid Hasan
          </h2>
          <p className="text-base font-semibold text-black-normal">Student</p>
        </div>
      </div>
      {/* Edit Info */}
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-4">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-3 py-1 text-lg font-normal text-black-normal border-b-2 cursor-pointer ${
                tab === currentTab
                  ? "border-black-primary"
                  : "border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {currentTab === "Personal Information" ? (
          <EditInformationForm
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ) : (
          <ChangePasswordForm />
        )}
      </div>
    </>
  );
}
