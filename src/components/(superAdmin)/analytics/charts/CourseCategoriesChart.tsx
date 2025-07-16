import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

export default function CourseCategoriesChart() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Web Development", "Data Science", "Business", "Figma", "Sketch"],
    series: [37, 24, 18, 47, 27], // Percentages from the image
    colors: ["#AABBCC", "#3498DB", "#F39C12", "#8E44AD", "#27AE60"], // Matching colors: purple, cyan, orange, blue, green
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Course Categories</h2>
      <Chart
        options={options}
        series={options.series}
        type="pie"
        height={350}
      />
    </div>
  );
}