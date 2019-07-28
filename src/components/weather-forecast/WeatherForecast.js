// TODO: chart js fontawesome https://stackoverflow.com/questions/36979474/how-to-change-the-labels-to-the-image-icon-in-bar-chart-js
import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import styles from "./WeatherForecast.module.scss";

// chart js default font color
defaults.global.defaultFontColor = "black";

const WeatherForecast = ({ labels, data }) => {
  const chartOptions = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = "Temperature";

          if (label) {
            label += ": ";
          }
          label += Math.round(tooltipItem.yLabel);
          return label + "*C";
        }
      }
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time"
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Temperature *C"
          }
        }
      ]
    }
  };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "3 Hourly Forecast",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255,255,255,1)",
        pointHoverBorderColor: "rgba(255,255,255,1)",
        pointHoverBorderWidth: 5,
        pointRadius: 5,
        pointHitRadius: 8,
        data: data
      }
    ]
  };
  return (
    <div className={styles["weather-forecast"]}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeatherForecast;
