import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      grid: {
        display: true,
        drawBorder: false,
        color: "#777777",
      },
      ticks: {
        color: "#ffffff",
      },
    },
  },
};

function ExampleChartJS({ labels, datasets }) {
  return <Line options={options} data={{ labels, datasets }} />;
}

export default ExampleChartJS;
