import React, { useState, useEffect } from 'react';
import "./temperaturaHumidity.css"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureHumidityChart = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error('Expected data to be an array, but got:', data);
    return null; 
  }

  const chartData = {
    labels: data.map((item) => item.timestamp),
    datasets: [
      {
        label: 'Temperature',
        data: data.map((item) => item.temperature),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Humidity',
        data: data.map((item) => item.humidity),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className='Grafica'>
      <Line data={chartData} />
    </div>
  );
};

export default TemperatureHumidityChart;
