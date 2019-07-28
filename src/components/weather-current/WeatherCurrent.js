import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import styles from "./WeatherCurrent.module.scss";
import iconWind from "../../assets/icon-wind.svg";
import iconHumidity from "../../assets/icon-humidity.svg";
import iconPressure from "../../assets/icon-pressure.svg";
import iconVisibility from "../../assets/icon-visibility.svg";

const WeatherCurrent = ({
  location,
  condition,
  icon,
  temp,
  wind,
  humidity,
  pressure,
  visibility
}) => {
  return (
    <div className={styles["weather-current"]}>
      <div className="weather-current__featured">
        <div className="meta">
          <span className="location">{location}, </span>
          <span className="date">
            <Moment format="Do MMM YYYY">{new Date()}</Moment>
          </span>
        </div>
        <h3 className="condition">{condition}</h3>
        <div className="temperature">
          <i className={`icon wi wi-owm-${icon}`} />
          <span className="value">
            {temp}
            <i className="wi wi-celsius" />
          </span>
        </div>
      </div>

      <div className="weather-current__details">
        <ul>
          <li>
            <img src={iconWind} alt="" />
            <span>
              <b>Wind:</b> {wind} m/s
            </span>
          </li>
          <li>
            <img src={iconHumidity} alt="" />
            <span>
              <b>Humidity:</b> {humidity}%
            </span>
          </li>
          <li>
            <img src={iconPressure} alt="" />
            <span>
              <b>Pressure:</b> {pressure} hpa
            </span>
          </li>
          <li>
            <img src={iconVisibility} alt="" />
            <span>
              <b>Visibility:</b> {visibility / 1000} km
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// validate props
WeatherCurrent.propTypes = {
  location: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired
};

export default WeatherCurrent;
