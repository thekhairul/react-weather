import React, { Component } from "react";
import axios from "axios";
import WeatherCurrent from "./components/weather-current/WeatherCurrent.js";
import "./main.scss";

class App extends Component {
  state = {
    currentWeatherAPI:
      "https://api.openweathermap.org/data/2.5/weather?id=1185241&APPID=a6b32c215b9e2bed2fe00783d7057ada&units=metric",
    currentWeather: null
  };

  componentDidMount() {
    axios.get(this.state.currentWeatherAPI).then(res => {
      console.log(res);
      this.setState({ currentWeather: res.data });
    });
  }

  render() {
    // render nothing before API fetch is complete
    if (this.state.currentWeather === null) {
      return null;
    }

    // cache weather data once fetched
    const weather = this.state.currentWeather;

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
              temp={weather.main.temp}
              wind={weather.wind.speed}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              visibility={weather.visibility}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
