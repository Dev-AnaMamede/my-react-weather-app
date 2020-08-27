import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function WeatherApp() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Matt Delac and is{" "}
          <a
            href="https://github.com/Dev-AnaMamede/my-react-weather-app"
            target="_blank"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
