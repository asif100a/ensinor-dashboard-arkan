"use client";

import ManageContentTable from "@/components/(bInstructor-cAdmin)/resources/ManageContentTable";
import UploadMaterials from "@/components/(bInstructor-cAdmin)/resources/UploadMaterials";
import SectionHeader from "@/components/SectionHeader";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";

const tabs: string[] = ["Upload Materials", "Manage Content"];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Section Header */}
      <SectionHeader
        title="Resources"
        description="Upload and manage learning materials for your courses"
        leftContent="null"
      />

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Upload Materials */}
      {activeTab === tabs[0] && <UploadMaterials />}
      {activeTab === tabs[1] && <ManageContentTable />}
    </div>
  );
}
