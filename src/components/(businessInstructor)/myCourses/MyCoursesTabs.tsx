"use client";

import React from "react";

interface Tab {
  name: string;
  count: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyCoursesTabs({
  tabs,
  activeTab,
  setActiveTab,
}: TabsProps) {
  return (
    <div className="w-fit overflow-hidden p-1.5 bg-white rounded-lg flex items-center gap-2">
      {tabs.map((tab: Tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`w-full text-nowrap focus:outline-none px-4 py-2 text-black-primary text-lg font-medium cursor-pointer ${
            tab.name === activeTab
              ? "bg-yellow-primary"
              : "bg-transparent hover:bg-[#e1e3e4]"
          } rounded-lg`}
        >
          {tab.name}
          {tab.count !== 0 && ` (${tab.count})`}
        </button>
      ))}
    </div>
  );
}
