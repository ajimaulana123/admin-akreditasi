import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart Data Manajemen Informatika",
    },
  },
};

const labels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  'Desember'
];

export const data = {
  labels,
  datasets: [
    {
      label: "Interaksi Data",
      data: [150, 234, 334, 434, 534, 634, 734, 834, 934 ,34 , 34, 34],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const InteractionState = () => {
  return <Bar options={options} data={data} />;
};

export default InteractionState;
