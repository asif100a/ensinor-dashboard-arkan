import { BadgeTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface BadgeCardProps {
  badge: BadgeTypes;
}

export default function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <div className="w-full bg-gray-background rounded-xl py-6">
      <div className="flex justify-between items-center mb-4 px-6">
        <button className="px-4 py-2 bg-inherit text-black-secondary rounded-md text-sm font-medium border">
          {badge.type}
        </button>
        <button className={`px-4 py-2 border ${badge.status === 'Uncommon' ? 'bg-[#D7FBE7] border-[#D7FBE7] text-[#067A3A]' : 'bg-inherit text-black-secondary'} rounded-md text-sm font-medium`}>
          {badge.status}
        </button>
      </div>
      <div>
        <div className="flex flex-col items-center text-center text-black-primary px-6">
          <div className={`w-fit h-fit p-6 bg-inherit border-2 ${badge.status === 'Uncommon' ? 'border-[#067A3A]' : 'border-[#A3A3A3]'} rounded-full flex items-center justify-center mb-4`}>
            <span role="img" aria-label="rocket" className="text-4xl">
              <Image
                src={badge.icon}
                alt={badge.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </span>
          </div>
          <h3 className="text-xl font-semibold">{badge.title}</h3>
          <p className="mt-2">{badge.description}</p>
          {badge?.progress && (
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-black-secondary font-medium">
                <p>Progress</p>
                <p>{badge.progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 my-3">
                <div
                  className="bg-yellow-300 h-2.5 rounded-full"
                  style={{ width: `${badge.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center gap-1.5 border-t pt-4 w-full">
          <Image
            src="/icons/certificate-2.svg"
            alt="User"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span>Earned on July 24, 2025</span>
        </div>
      </div>
    </div>
  );
}
