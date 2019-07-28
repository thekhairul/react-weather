import React from "react";
import Moment from "react-moment";
import styles from "./WeatherSun.module.scss";

const WeatherSun = ({ sunrise, sunset }) => {
  return (
    <div className={styles["weather-sun"]}>
      <span className="weather-sun__rise">
        <i className="wi wi-sunrise" />
        Sunrise:
        <Moment format="hh:mm A" unix>
          {sunrise}
        </Moment>
      </span>
      <span className="weather-sun__set">
        <i className="wi wi-sunset" />
        Sunset:
        <Moment format="hh:mm A" unix>
          {sunset}
        </Moment>
      </span>
    </div>
  );
};

export default WeatherSun;
