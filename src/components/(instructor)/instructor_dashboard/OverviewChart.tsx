import Image from "next/image";
import React from "react";
import Chart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { shortMonths } from "@/lib/utils";

const options: ApexOptions = {
  chart: {
    height: 280,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: shortMonths,
  },
};

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
      <div className="w-full">
        <Chart
          options={options}
          series={options.series}
          type="area"
          width="100%"
          height={350}
        />
      </div>
    </section>
  );
}
