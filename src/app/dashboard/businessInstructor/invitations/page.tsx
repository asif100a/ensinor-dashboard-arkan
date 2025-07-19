"use client";

import GroupInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/GroupInvitationForm";
import IndividualInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/IndividualInvitationForm";
import InvitationTabs from "@/components/(bInstructor-cAdmin)/invitations/InvitationTabs";
import SectionHeader from "@/components/SectionHeader";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const tabs: string[] = ["Individual Invite", "Group invite"];

export default function Invitations() {
  const searchPrams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  useEffect(() => {
    const invite = searchPrams.get("invite");
    if (invite === "group") {
      setActiveTab(tabs[1]);
    } else {
      setActiveTab(tabs[0]);
    }
  }, [searchPrams]);

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
