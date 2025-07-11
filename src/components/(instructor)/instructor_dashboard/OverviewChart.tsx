import Image from "next/image";
import React from "react";

const data = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 50 },
  { month: "Apr", value: 90 },
  { month: "Jun", value: 15 },
  { month: "Aug", value: 50 },
  { month: "Sep", value: 120 },
  { month: "Oct", value: 110 },
  { month: "Nov", value: 15 },
  { month: "Dec", value: 150 },
];

export default function OverviewChart() {
  return (
    <section className="bg-white p-6 rounded-xl space-y-12">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
        {/* 1st State */}
        <div className="space-y-3">
          <div className="space-y-1.5">
            <p className="px-3 py-1 bg-yellow-secondary font-semibold w-fit rounded-md">
              Current Month
            </p>
            <h1 className="text-2xl font-bold text-black-normal">$920</h1>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <p className="px-3 py-1 bg-[#4BB54B1A] text-[#4BB54B] flex items-center gap-1 rounded-2xl">
              <Image
                src="/icons/progress-green.svg"
                alt="Progress"
                height={16}
                width={16}
                className="text-base"
              />
              <span>4%</span>
            </p>
            <p>vs last month</p>
          </div>
        </div>
        {/* 2nd State */}
        <div className="space-y-3">
          <div className="space-y-1.5">
            <p className="px-3 py-1 bg-yellow-secondary font-semibold w-fit rounded-md">
              Current Month
            </p>
            <h1 className="text-2xl font-bold text-black-normal">$1420</h1>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <p className="px-3 py-1 bg-[#E2333329] text-[#E23333] flex items-center gap-1 rounded-2xl">
              <Image
                src="/icons/progress-red.svg"
                alt="Progress"
                height={16}
                width={16}
                className="text-base"
              />
              <span>4%</span>
            </p>
            <p>vs last month</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full">
        <svg className="w-fit h-64" viewBox="0 0 400 200">
          {/* Grid and Axes */}
          <g fill="none" stroke="#e5e7eb" strokeWidth="1">
            <line x1="10" y1="180" x2="390" y2="180" />
            <line x1="10" y1="140" x2="390" y2="140" />
            <line x1="10" y1="100" x2="390" y2="100" />
            <line x1="10" y1="60" x2="390" y2="60" />
            <line x1="10" y1="20" x2="390" y2="20" />
            <line x1="10" y1="10" x2="390" y2="10" />
          </g>
          {/* Data Points and Line */}
          <polyline
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            points="30,170 70,100 110,120 150,150 190,50 230,70 270,130 310,200 350,150 370,30"
          />
          {/* Yellow Dots for Data Points */}
          <circle cx="30" cy="170" r="3" fill="#f59e0b" />
          <circle cx="70" cy="100" r="3" fill="#f59e0b" />
          <circle cx="110" cy="120" r="3" fill="#f59e0b" />
          <circle cx="150" cy="150" r="3" fill="#f59e0b" />
          <circle cx="190" cy="50" r="3" fill="#f59e0b" />
          <circle cx="230" cy="70" r="3" fill="#f59e0b" />
          <circle cx="270" cy="130" r="3" fill="#f59e0b" />
          <circle cx="310" cy="200" r="3" fill="#f59e0b" />
          <circle cx="350" cy="150" r="3" fill="#f59e0b" />
          <circle cx="370" cy="30" r="3" fill="#f59e0b" />
          {/* Area Fill */}
          <polygon
            fill="#fefcbf"
            points="30,180 70,100 110,120 150,150 190,50 230,70 270,130 310,200 350,150 370,30 390,180 30,180"
          />
          {/* Labels */}
          <g className="text-xs text-gray-500">
            <text x="10" y="190">
              0
            </text>
            <text x="10" y="150">
              50
            </text>
            <text x="10" y="110">
              100
            </text>
            <text x="10" y="70">
              200
            </text>
            <text x="10" y="30">
              300
            </text>
            <text x="30" y="190">
              Jan
            </text>
            <text x="70" y="190">
              Feb
            </text>
            <text x="110" y="190">
              Mar
            </text>
            <text x="150" y="190">
              Apr
            </text>
            <text x="190" y="190">
              Jun
            </text>
            <text x="230" y="190">
              Aug
            </text>
            <text x="270" y="190">
              Sep
            </text>
            <text x="310" y="190">
              Oct
            </text>
            <text x="350" y="190">
              Nov
            </text>
            <text x="370" y="190">
              Dec
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
