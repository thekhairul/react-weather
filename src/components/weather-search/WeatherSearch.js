import React from "react";
import styles from "./WeatherSearch.module.scss";

const WeatherSearch = ({ handleWeatherSearch }) => {
  const handleWeatherSearchSubmit = e => {
    e.preventDefault();
    handleWeatherSearch(e.target.elements["weatherQuery"].value);
  };

  return (
    <div className={styles["weather-search"]}>
      <form
        action=""
        className="weather-search__form"
        id="weather-search-form"
        onSubmit={handleWeatherSearchSubmit}
      >
        <input
          type="search"
          id="weather-search-input"
          name="weatherQuery"
          placeholder="Name of city"
          required
        />
        <button className="weather-search__submit">search</button>
      </form>
    </div>
  );
};

export default WeatherSearch;
