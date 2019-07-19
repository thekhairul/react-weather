import React, { Component } from "react";
import axios from "axios";
import WeatherCurrent from "./components/weather-current/WeatherCurrent.js";
import WeatherForecast from "./components/weather-forecast/WeatherForecast.js";

import "./main.scss";

class App extends Component {
  state = {
    currentWeatherAPI:
      "https://api.openweathermap.org/data/2.5/weather?id=1185241&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric",
    weatherForecastAPI:
      "https://api.openweathermap.org/data/2.5/forecast?id=1185241&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric",
    currentWeather: null,
    weatherForecast: null
  };

  componentDidMount() {
    axios.get(this.state.currentWeatherAPI).then(res => {
      this.setState({ currentWeather: res.data });
    });

    axios.get(this.state.weatherForecastAPI).then(res => {
      const reducedList = res.data.list.slice(0, 7);
      const forecast = [];
      reducedList.map((el, i) => {
        forecast.push({
          temp: el.main.temp,
          time: el.dt_txt.split(" ")[1]
        });

        return 0;
      });
      this.setState({ weatherForecast: forecast });
    });
  }

  render() {
    // render nothing before API fetch is complete
    if (this.state.currentWeather === null) {
      return null;
    }

    // cache weather data once fetched
    const weather = this.state.currentWeather;
    const forecast = this.state.weatherForecast;

    let WeatherForecastCMP;

    if (forecast) {
      WeatherForecastCMP = (
        <WeatherForecast
          labels={forecast.map(el => {
            const hour = el.time.split(":")[0];
            return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
          })}
          data={forecast.map(el => el.temp)}
        />
      );
    } else {
      WeatherForecastCMP = <span>Loading...</span>;
    }

    return (
      <div className="App">
        <div className="App__header">
          <div className="App__header__container container">
            this is app header
          </div>
        </div>

        <div className="App__main">
          <div className="App__main__container container">
            <WeatherCurrent
              location={weather.name}
              condition={weather.weather[0].main}
              icon={weather.weather[0].icon}
              temp={weather.main.temp}
              wind={weather.wind.speed}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              visibility={weather.visibility}
            />
            {WeatherForecastCMP}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
