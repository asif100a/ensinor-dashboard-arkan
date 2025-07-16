"use client";

import React from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ContentGrowthChart = () => {
  const series = [
    {
      name: "Courses Sales",
      data: [30000, 20000, 30000, 25000, 20000, 22000, 30000, 35000, 40000, 36000, 38000, 39000],
    },
    {
      name: "Events Sales",
      data: [20000, 25000, 20000, 30000, 15000, 18000, 28000, 33000, 40000, 37000, 35000, 38000],
    },
    {
      name: "Book Sales",
      data: [10000, 15000, 20000, 17000, 19000, 16000, 22000, 25000, 30000, 27000, 26000, 28000],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "straight", // Straight edges
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.05,
      },
    },
    colors: ["#FFD26F", "#6DD3B5", "#709AFF"],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${Math.floor(val / 1000)}0K`,
      },
    },
    grid: {
      borderColor: "#ccc",
      strokeDashArray: 3,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      labels: {
        colors: ["#FFD26F", "#6DD3B5", "#709AFF"],
      },
      markers: {
        size: 5,
        strokeWidth: 2
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Content Growth</h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ContentGrowthChart;
