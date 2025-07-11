import { CertificateTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface PendingCertificateCardProps {
  certificateData: CertificateTypes[];
}

export default function PendingCertificateCard({
  certificateData,
}: PendingCertificateCardProps) {
  return (
    <>
      {certificateData?.map((certificate: CertificateTypes) => (
        <div
          key={certificate.certificateName}
          className="w-full bg-white p-6 rounded-xl"
        >
          <div className="w-full space-y-4">
            <div className="space-y-2.5">
              <h2 className="text-xl md:text-2xl font-semibold text-black-normal">
                {certificate.certificateName}
              </h2>
              <p className="text-sm font-normal text-black-normal">
                Instructor: {certificate.instructorName}
              </p>
            </div>

            {/* Progress */}
            <div className="space-y-2">
                <div className="w-full flex items-center justify-between">
                    <h6 className="text-base font-normal text-black-secondary">Course progress</h6>
                    <p className="text-sm font-normal text-black-secondary">{certificate.courseProgress}% Complete</p>
                </div>
              <div className="w-full bg-gray-200 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{ width: `${certificate.courseProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Date */}
            <p className="flex items-center gap-2">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={20}
                height={20}
              />
              <span>Completed: {certificate.date}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
