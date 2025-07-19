"use client";

import SubscriptionCard from "@/components/custom-ui/cards/student/SubscriptionCard";
import SectionHeader from "@/components/SectionHeader";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";

const tabs = ["Active Subscriptions", "Previous Subscriptions"];

export default function Subscriptions() {
  const [activeTab, setActiveTab] = useState(tabs?.[0]);
  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="My Subscriptions"
        description="Manage your active subscriptions and billing Information."
        leftContent="null"
      />

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Subscription Cards */}
      <div className="space-y-6">
        {activeTab === tabs?.[0] &&
          [0, 1].map((_, idx) => <SubscriptionCard key={idx} type="active" />)}

        {activeTab === tabs?.[1] &&
          [0, 1].map((_, idx) => <SubscriptionCard key={idx} type="previous" />)}
      </div>
    </div>
  );
}
