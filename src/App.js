import React, { Component } from "react";
import "./main.scss";
import Weather from "./components/weather/Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="weather-days">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((el, id) => {
              return (
                <li className="weather-day" key={id}>
                  <Weather
                    day={el}
                    thumbnail={`https://picsum.photos/50?random=${id}`}
                    minTemp="34"
                    maxTemp="43"
                  />
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
