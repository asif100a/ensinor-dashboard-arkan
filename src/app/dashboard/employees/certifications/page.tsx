"use client";

import CertificationsCards from "@/components/(employee)/certifications/CertificationsCards";
import SectionHeader from "@/components/SectionHeader";
import { CertificateTypes } from "@/lib/types";
import React, { useState } from "react";

interface Tab {
  name: string;
  total: number;
}

const issuedCertificateData: CertificateTypes[] = [
  {
    certificateName: "Professional UX/UI Design",
    instructorName: "Shahid Hasan",
    date: "April 10. 2025",
  },
  {
    certificateName: "Professional UX/UI Design",
    instructorName: "Shahid Hasan",
    date: "April 10. 2025",
  },
  {
    certificateName: "Professional UX/UI Design",
    instructorName: "Shahid Hasan",
    date: "April 10. 2025",
  },
];

const pendingCertificateData: CertificateTypes[] = issuedCertificateData.slice(0, 2).map((certificate: CertificateTypes) => ({...certificate, courseProgress: 80}));

const tabs: Tab[] = [
  { name: "Issued certificate", total: 3 },
  { name: "Pending", total: 2 },
];

export default function Certifications() {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].name);

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Certifications"
        description="View and download certificates for your completed courses "
        leftContent="viewCertification"
      />

      {/* Tabs */}
      <div className="space-y-8">
        <div className="flex items-center">
          {tabs.map((tab: Tab) => (
            <button
              key={tab.name}
              onClick={() => setCurrentTab(tab.name)}
              className={`px-2.5 py-1.5 text-sm font-normal text-black-secondary cursor-pointer ${
                tab.name === currentTab ? "bg-white" : "bg-[#E5E5E5]"
              }`}
            >
              {tab.name} ({tab.total})
            </button>
          ))}
        </div>
      </div>

      <CertificationsCards issuedCertificateData={issuedCertificateData} pendingCertificateData={pendingCertificateData} currentTab={currentTab} />
    </div>
  );
}
