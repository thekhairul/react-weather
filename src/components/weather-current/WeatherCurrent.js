import React from "react";
import styles from "./WeatherCurrent.module.scss";
import iconWind from "../../assets/icon-wind.svg";
import iconHumidity from "../../assets/icon-humidity.svg";
import iconPressure from "../../assets/icon-pressure.svg";
import iconVisibility from "../../assets/icon-visibility.svg";

const WeatherCurrent = props => {
  return (
    <div className={styles["weather-current"]}>
      <div className="weather-current__featured">
        <div className="meta">
          <span className="location">Dhaka,</span>
          <span className="date">12th May, 2019</span>
        </div>
        <h3 className="condition">Drizzle</h3>
        <img src="" alt="" className="icon" />
        <div className="temperature">
          <span className="value">31</span>
          <span className="unit">C</span>
        </div>
      </div>

      <div className="weather-current__details">
        <ul>
          <li>
            <img src={iconWind} alt="" />
            <span>12 km/h</span>
          </li>
          <li>
            <img src={iconHumidity} alt="" />
            <span>24%</span>
          </li>
          <li>
            <img src={iconPressure} alt="" />
            <span>43m</span>
          </li>
          <li>
            <img src={iconVisibility} alt="" />
            <span>23km</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCurrent;
