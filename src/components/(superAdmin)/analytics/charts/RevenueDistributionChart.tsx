import React from "react";
import Chart from "react-apexcharts";

export default function RevenueDistributionChart() {
  const series = [44, 55, 41];

  const options = {
    labels: ['Course 1', 'Course 2', 'Course 3']
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Earning Overview</h2>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="380"
      />
    </div>
  );
}
