"use client";

import React from "react";
import {
  DownloadButton,
  SearchForm,
  SimpleSearchForm,
  ViewCertificationButton,
} from "@/components/custom-ui/buttons/buttons";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  description: string;
  leftContent:
    | "form"
    | "simpleSearchForm"
    | "download"
    | "viewCertification"
    | "null";
  options?: {
    name: "button" | "link" | "text";
    content: string;
    link?: string;
    type?: "fill" | "outline" | "text";
  };
}

export default function SectionHeader({
  title,
  description,
  leftContent,
  options = { name: "text", content: "", link: "" },
}: SectionHeaderProps) {
  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // console.log("Search text: ", event);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="w-full space-y-[5px]">
        <h1 className="text-2xl font-semibold text-black-normal">{title}</h1>
        <p className="text-base font-normal text-black-primary">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-6">
        {leftContent === "form" && <SearchForm handleSearch={handleSearch} />}

        {leftContent === "download" && <DownloadButton />}

        {leftContent === "viewCertification" && <ViewCertificationButton />}

        {leftContent === "simpleSearchForm" && (
          <SimpleSearchForm handleSearch={handleSearch} />
        )}
        {/* Option Button */}
        <>
          {options?.name === "link" && (
            <Link href={options.link || "/"}>
              <button
                className={`w-fit text-left px-6 py-3.5 ${
                  options?.type === "fill"
                    ? "bg-yellow-primary"
                    : options?.type === "outline"
                    ? "border border-yellow-primary"
                    : ""
                }  flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
              >
                {options.content}
              </button>
            </Link>
          )}
          {options?.name ===
            "button" &&(
              <button
                className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
              >
                {options.content}
              </button>
            )}
        </>
      </div>
    </section>
  );
}