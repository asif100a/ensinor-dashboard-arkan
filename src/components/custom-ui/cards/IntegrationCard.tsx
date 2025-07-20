import { ConferenceTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";

interface IntegrationCardProps {
  conference: ConferenceTypes;
}

export default function IntegrationCard({ conference }: IntegrationCardProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-background rounded-lg">
      {/* Top */}
      <div className="space-y-2.5 text-black-primary">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 w-full">
            {/* Video Icon */}
            <button className="py-1.5 px-2.5 rounded bg-[#4C68F84D]">
              <IoVideocamOutline className="text-2xl text-[#4C68F8]" />
            </button>
            <h3 className="text-xl font-semibold text-black-primary">
              {conference.conferenceTool}
            </h3>
          </div>

          {/* Status */}
          {conference.status === "completed" && (
            <button className="py-1.5 px-3 rounded bg-[#067A3A33] flex items-center gap-2">
              <FaRegCircleCheck className="text-xl text-[#067A3A]" />
              {conference.status}
            </button>
          )}
        </div>

        <p>
          Connect with Zoom to host and schedule virtual classroom sessions and
          webinars.
        </p>
      </div>

      {/* Configure::Button */}
      <button className="py-2 px-6 rounded-md bg-yellow-primary text-black-primary font-semibold flex items-center gap-2">
        <Image
          src="/icons/configure.svg"
          alt="File"
          width={24}
          height={24}
          className="w-6 h-6 "
        />
        Configure
      </button>
    </div>
  );
}
