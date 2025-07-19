import IssuedCertificateCard from "@/components/custom-ui/cards/student/IssuedCertificateCard";
import PendingCertificateCard from "@/components/custom-ui/cards/student/PendingCertificateCard";
import { CertificateTypes } from "@/lib/types";
import React from "react";

interface CertificationsCardsProps {
  issuedCertificateData: CertificateTypes[];
  pendingCertificateData: CertificateTypes[];
  currentTab: string;
}

export default function CertificationsCards({
  issuedCertificateData,
  pendingCertificateData,
  currentTab,
}: CertificationsCardsProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-4">
        {currentTab === "Issued certificate" ? (
          <IssuedCertificateCard certificateData={issuedCertificateData} />
        ) : (
          <PendingCertificateCard certificateData={pendingCertificateData} />
        )}
      </div>
    </section>
  );
}
