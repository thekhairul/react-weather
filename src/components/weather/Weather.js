import React from "react";

const Weather = ({ day, thumbnail, minTemp, maxTemp }) => {
  return (
    <div className="weather" id="weather">
      <span className="weather-min">{minTemp}</span>
      <h2 className="weather-day">{day}</h2>
      <img src={thumbnail} alt="" />
      <span className="weather-max">{maxTemp}</span>
    </div>
  );
};

export default Weather;
