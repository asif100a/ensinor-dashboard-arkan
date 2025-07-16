import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { shortMonths } from "@/lib/utils";

interface EnrolmentTrendsChartProps {
}

export default function EnrolmentTrendsChart({}: EnrolmentTrendsChartProps) {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: shortMonths,
    },
    series: [
      {
        name: "Individual Students",
        data: [69, 17, 20, 15, 11, 57, 15, 36, 94, 52, 54, 15],
      },
      {
        name: "Business Accounts",
        data: [42, 50, 35, 82, 15, 53, 15, 57, 94, 42, 92, 15],
      },
    ],
    colors: ["#3B82F6", "#34D399"], // Blue for Individual Students, Green for Business Accounts
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Enrolment Trends</h2>
      <Chart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
}
