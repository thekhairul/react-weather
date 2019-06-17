import React, { Component } from "react";
import axios from "axios";
import WeatherCurrent from "./components/weather-current/WeatherCurrent.js";
import "./main.scss";

class App extends Component {
  state = {
    currentWeatherAPI:
      "https://api.weatherbit.io/v2.0/current?city=Dhaka&country=BD&key=b84510db5c6c45aa8b4323cdb984f4d7",
    currentWeather: null
  };

  componentDidMount() {
    axios.get(this.state.currentWeatherAPI).then(res => {
      this.setState({ currentWeather: res.data.data[0] });
    });
  }

  render() {
    if (this.state.currentWeather === null) {
      return null;
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
            <WeatherCurrent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
