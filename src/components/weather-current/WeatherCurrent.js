import React from "react";
import iconWind from "../../assets/icon-wind.svg";
import iconHumidity from "../../assets/icon-humidity.svg";
import iconPressure from "../../assets/icon-pressure.svg";
import iconVisibility from "../../assets/icon-visibility.svg";

const WeatherCurrent = props => {
  return (
    <div className="weather-current">
      <div className="weather-current__featured">
        <div className="meta">
          <span className="date">10th May, 2019</span>
          <span className="location">Dhaka</span>
        </div>
        <h2 className="title">Drizzle</h2>
        <img src="" alt="" className="icon" />
        <h3 className="temperature">
          <span className="value">31</span>
          <span className="unit">C</span>
        </h3>
      </div>

      <div className="weather-current__details">
        <ul>
          <li>
            <img src={iconWind} alt="" />
          </li>
          <li>
            <img src={iconHumidity} alt="" />
          </li>
          <li>
            <img src={iconPressure} alt="" />
          </li>
          <li>
            <img src={iconVisibility} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCurrent;
