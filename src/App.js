import React, { Component } from "react";
import axios from "axios";
import Switch from "./components/switch/Switch";
import Toast from "./components/toast/Toast";
import WeatherSearch from "./components/weather-search/WeatherSearch";
import WeatherCurrent from "./components/weather-current/WeatherCurrent";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";
import WeatherSun from "./components/weather-sun/WeatherSun";

import "./main.scss";

class App extends Component {
  state = {
    currentWeatherAPI:
      "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric",
    weatherForecastAPI:
      "https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric",
    currentWeather: null,
    weatherForecast: null,
    tempUnit: "C",
    toastProps: {
      visible: false,
      type: "success"
    }
  };

  handleCelsius2Fahrenheit() {
    this.setState(state => ({
      tempUnit: state.tempUnit === "C" ? "F" : "C"
    }));
  }

  showToast(type) {
    this.setState({ toastProps: { visible: true, type: "error" } }, () => {
      setTimeout(
        () =>
          this.setState({ toastProps: { visible: false, type: "success" } }),
        3000
      );
    });
  }

  fetchWeather() {
    // fetch current weather
    axios
      .get(this.state.currentWeatherAPI)
      .then(res => {
        this.setState({ currentWeather: res.data });
      })
      .catch(err => {
        this.showToast("error");
      });

    // fetch upcoming weather forecast
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

  async handleWeatherSearch(cityName) {
    const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric`;
    const weatherForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric`;
    await this.setState({ currentWeatherAPI, weatherForecastAPI });
    this.fetchWeather();
  }

  componentDidMount() {
    this.fetchWeather();
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
            const hour = +el.time.split(":")[0]; // '+' used to convert str into num
            if (hour > 12) {
              return `${hour - 12} PM`;
            } else if (hour === 12) {
              return `${hour} PM`;
            } else {
              return `${hour} AM`;
            }
          })}
          data={forecast.map(el => el.temp)}
          tempUnit={this.state.tempUnit}
        />
      );
    } else {
      WeatherForecastCMP = <span>Loading...</span>;
    }

    return (
      <div className="App">
        <Toast toastProps={this.state.toastProps} />
        <div className="App__header">
          <div className="App__header__container container">
            <WeatherSearch
              handleWeatherSearch={this.handleWeatherSearch.bind(this)}
            />
          </div>
        </div>

        <div className="App__main">
          <div className="App__main__container container">
            <WeatherCurrent
              location={weather.name}
              condition={weather.weather[0].main}
              iconId={weather.weather[0].id}
              temp={weather.main.temp}
              wind={weather.wind.speed}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              visibility={weather.visibility || 0}
              tempUnit={this.state.tempUnit}
            />
            {WeatherForecastCMP}
            <div className="App__main__footer">
              <WeatherSun
                sunrise={weather.sys.sunrise}
                sunset={weather.sys.sunset}
              />
              <div className="temp-unit-toggle">
                <i className="wi wi-celsius" />
                <Switch switchFn={this.handleCelsius2Fahrenheit.bind(this)} />
                <i className="wi wi-fahrenheit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
