import BadgeCard from "@/components/custom-ui/cards/BadgeCard";
import Tabs from "@/components/Tabs";
import { BadgeTypes } from "@/lib/types";
import React from "react";

interface BadgesProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  earnedBadges: BadgeTypes[];
  availableBadges: BadgeTypes[];
}

export default function BadgesSection({
  tabs,
  activeTab,
  setActiveTab,
  earnedBadges,
  availableBadges,
}: BadgesProps) {
  return (
    <div className="p-6 bg-white rounded-xl space-y-6">
      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        count={[earnedBadges?.length, availableBadges?.length]}
        className="!bg-gray-background"
      />

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {activeTab === tabs[0] &&
          earnedBadges?.map((badge: BadgeTypes) => (
            <BadgeCard key={badge.title} badge={badge} />
          ))}
        {activeTab === tabs[1] &&
          availableBadges?.map((badge: BadgeTypes) => (
            <BadgeCard key={badge.title} badge={badge} />
          ))}
      </div>
    </div>
  );
}
