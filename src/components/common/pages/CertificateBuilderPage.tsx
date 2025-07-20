import CertificateInformation from "@/components/certificate-builder/CertificateInformation";
import CertificatePreview from "@/components/certificate-builder/CertificatePreview";
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
      <div className="w-full flex items-start gap-6">
        <div className="w-2/6">
          <CertificateInformation />
        </div>
        <div className="w-4/6">
          <CertificatePreview />
        </div>
      </div>
    </div>
  );
}
