import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function Tabs({tabs, activeTab, setActiveTab}: TabsProps) {
  return (
    <div className="w-fit overflow-hidden p-1.5 bg-white rounded-lg flex items-center gap-6">
      {tabs.map((tab: string) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-full text-nowrap focus:outline-none px-4 py-2 text-black-primary text-lg font-medium cursor-pointer ${
            tab === activeTab
              ? "bg-yellow-primary"
              : "bg-transparent hover:bg-[#e1e3e4]"
          } rounded-md`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
