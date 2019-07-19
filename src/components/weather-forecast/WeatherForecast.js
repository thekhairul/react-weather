// TODO: chart js fontawesome https://stackoverflow.com/questions/36979474/how-to-change-the-labels-to-the-image-icon-in-bar-chart-js
import React from "react";
import { Line } from "react-chartjs-2";

const WeatherForecast = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "3 Hourly Forecast",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data
      }
    ]
  };
  return (
    <div className="weather-forecast">
      <Line data={chartData} />
    </div>
  );
};

export default WeatherForecast;
