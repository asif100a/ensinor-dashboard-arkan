import Image from "next/image";

export default function ProgressReportCard() {
  return (
    <div className="w-full bg-gray-background text-black-primary rounded-xl p-6">
      <h2 className="text-xl font-semibold">Course Completion Report</h2>
      <p className="mt-2">
        Download detailed information about course completion rates across all
        your courses.
      </p>
      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-2">
          <Image
            src="/icons/user-2.svg"
            alt="Quiz"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="font-semibold">Includes learner progress data</span>
        </p>
        <p className="flex items-center gap-2">
          <Image
            src="/icons/calendar.svg"
            alt="Quiz"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="font-semibold">Filter by date range</span>
        </p>
      </div>
      <button type="button" className="mt-4 w-full bg-[#EBEBEB] py-2 rounded flex items-center justify-center cursor-pointer">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
        Export as PDF
      </button>
    </div>
  );
}
