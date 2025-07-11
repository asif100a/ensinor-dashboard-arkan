import { CertificateTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

interface IssuedCertificateCardProps {
    certificateData: CertificateTypes[];
}

export default function IssuedCertificateCard({ certificateData }: IssuedCertificateCardProps) {
  return (
    <>
      {certificateData?.map((certificate: CertificateTypes) => (
        <div
          key={certificate.certificateName}
          className="w-full bg-white p-6 rounded-xl flex flex-col md:flex-row justify-between md:items-center gap-6"
        >
          {/* Left section */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2.5">
              <h2 className="text-xl md:text-2xl font-semibold text-black-normal">
                {certificate.certificateName}
              </h2>
              <p className="text-sm font-normal text-black-normal">
                Instructor: {certificate.instructorName}
              </p>
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

          {/* Right section */}
          <div className="flex flex-col gap-5 md:items-end justify-between space-y-2">
            <div className="space-y-4">
              {/* Download */}
              <div className="flex md:justify-end">
                <button className="px-3.5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer flex items-center gap-2">
                  <span>Download</span>
                  <MdOutlineFileDownload className="text-2xl" />
                </button>
              </div>
              {/* Download */}
              <button className="px-3.5 py-2 border bg-white text-base font-normal text-black-semibold rounded-lg text-black-secondary cursor-pointer flex items-center gap-2">
                <Image
                  src="/icons/verify.svg"
                  alt="verify"
                  width={20}
                  height={20}
                />
                <span>Verify Certificate</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
