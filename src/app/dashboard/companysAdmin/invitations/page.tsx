"use client";

import GroupInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/GroupInvitationForm";
import IndividualInvitationForm from "@/components/(bInstructor-cAdmin)/invitations/IndividualInvitationForm";
import InvitationTabs from "@/components/(bInstructor-cAdmin)/invitations/InvitationTabs";
import SectionHeader from "@/components/SectionHeader";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const tabs: string[] = ["Individual Invite", "Group invite"];

// Create a component to handle the search params logic
function InvitationsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  useEffect(() => {
    const invite = searchParams.get("invite");
    if (invite === "group") {
      setActiveTab(tabs[1]);
    } else {
      setActiveTab(tabs[0]);
    }
  }, [searchParams]);

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

export default function Invitations() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvitationsContent />
    </Suspense>
  );
}