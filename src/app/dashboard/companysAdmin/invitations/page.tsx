"use client";

import GroupInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/GroupInvitationForm";
import IndividualInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/IndividualInvitationForm";
import InvitationTabs from "@/components/(bInstructor-cAdmin)/invitations/InvitationTabs";
import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";

const tabs: string[] = ["Individual Invite", "Group invite"];

export default function Invitations() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Invitations"
        description="Send invitations to individuals or groups"
        leftContent="null"
      />

      {/* Tabs */}
      <InvitationTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Invitation::Form */}
      {activeTab === tabs[0] && <IndividualInvitationForm />}
      {activeTab === tabs[1] && <GroupInvitationForm />}
    </div>
  );
}
