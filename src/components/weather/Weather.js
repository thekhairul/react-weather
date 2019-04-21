import React from "react";
import classes from "./Weather.module.scss";

const Weather = ({ day, thumbnail, minTemp, maxTemp }) => {
  return (
    <div className={classes.weather} id="weather">
      <span className={classes["weather-min"]}>
        {minTemp}
        <sup>o</sup>
      </span>
      <h2 className="weather-day">{day}</h2>
      <img src={thumbnail} alt="" />
      <span className={classes["weather-max"]}>
        {maxTemp}
        <sup>o</sup>
      </span>
    </div>
  );
};

export default Weather;
