import React from "react";
import { FiDownload } from "react-icons/fi";

export default function PrintAndExportButtons() {
  return (
    <div className="flex justify-end items-center gap-6">
      {/* PDF */}
      <button
        className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
      >
        <span>PDF</span>
        <FiDownload className="text-xl" />
      </button>
      {/* Export */}
      <button
        className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
      >
        <span>Export</span>
        <FiDownload className="text-xl" />
      </button>
    </div>
  );
}
