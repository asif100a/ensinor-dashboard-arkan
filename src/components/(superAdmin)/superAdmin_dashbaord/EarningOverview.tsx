"use client";

import React from "react";
import Chart from "react-apexcharts";

const EarningOverview = () => {
  const series = [
    {
      name: "Courses Sales",
      data: [40000, 50000, 30000, 35000, 20000, 25000, 10000, 30000, 50000, 30000, 45000, 30000],
    },
    {
      name: "Events Sales",
      data: [20000, 10000, 30000, 10000, 15000, 18000, 22000, 20000, 10000, 20000, 10000, 40000],
    },
    {
      name: "Book Sales",
      data: [15000, 5000, 25000, 12000, 20000, 12000, 50000, 10000, 30000, 50000, 25000, 20000],
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    colors: ["#FFD26F", "#6DD3B5", "#709AFF"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      hover: { size: 7 },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: { style: { fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val / 1000}K`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: ["#FFD26F", "#6DD3B5", "#709AFF"],
      },
    },
    grid: {
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Earning Overview</h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default EarningOverview;
