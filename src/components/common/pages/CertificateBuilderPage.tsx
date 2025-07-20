import CertificateInformation from "@/components/certificate-builder/CertificateInformation";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function CertificateBuilderPage() {
  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Certificate Builder"
        description="Create customized certificates for your students."
        leftContent="null"
      />

      {/* Certificate Information */}
      <CertificateInformation />
    </div>
  );
}
